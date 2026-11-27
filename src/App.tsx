/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Menu, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import {
  CONTACT_EMAIL,
  MAILTO_HREF,
  SITITICINO_URL,
  LOGO_SRC,
  HERO_LOGO_SRC,
  RELAX_IMAGE_SRC,
  LANGS,
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  IT_CONTENT,
  loadLocale,
  type Lang,
  type LocaleContent,
} from './config';
import { MobileDrawer } from './components/MobileDrawer';
import { FaqAccordion } from './components/FaqAccordion';
import { LanguageSelector } from './components/LanguageSelector';
import { Paragraphs } from './components/Paragraphs';
import { CookieBanner } from './components/CookieBanner';
import { LegalModal, type LegalDocType } from './components/LegalModal';
import {
  readConsent,
  saveConsent,
  type CookieConsentChoice,
  type CookieConsentRecord,
} from './consent';

function detectInitialLang(): Lang {
  try {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang')?.toLowerCase() as Lang | undefined;
    if (paramLang && LANGS.includes(paramLang)) return paramLang;

    const saved = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (saved && LANGS.includes(saved)) return saved;

    const browserLang = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase() as Lang;
    if (LANGS.includes(browserLang)) return browserLang;
  } catch {
    // ignore storage or URL errors
  }
  return DEFAULT_LANG;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(detectInitialLang);
  const [content, setContent] = useState<LocaleContent>(IT_CONTENT);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consent, setConsent] = useState<CookieConsentRecord | null>(() => readConsent());
  const [bannerOpen, setBannerOpen] = useState<boolean>(() => readConsent() === null);
  const [legalModal, setLegalModal] = useState<LegalDocType | null>(null);

  const handleSelectConsent = (choice: CookieConsentChoice) => {
    const saved = saveConsent(choice);
    setConsent(saved);
    setBannerOpen(false);
  };

  useEffect(() => {
    let active = true;

    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }

    const upsertMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    loadLocale(lang).then((loc) => {
      if (!active) return;
      setContent(loc);

      const ogLocaleValue = loc.htmlLang.replace('-', '_');
      const baseUrl = `${window.location.origin}${window.location.pathname}`;
      const buildLangUrl = (code: Lang) =>
        code === DEFAULT_LANG ? baseUrl : `${baseUrl}?lang=${code}`;

      const shareUrl = buildLangUrl(lang);
      const shareImageUrl = `${window.location.origin}${RELAX_IMAGE_SRC}`;

      document.documentElement.lang = loc.htmlLang;
      document.title = loc.metaTitle;

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', shareUrl);

      document
        .querySelectorAll('link[rel="alternate"][hreflang]')
        .forEach((node) => node.remove());
      const hreflangEntries: Array<{ hreflang: string; href: string }> = [
        { hreflang: 'it-CH', href: buildLangUrl('it') },
        { hreflang: 'de-CH', href: buildLangUrl('de') },
        { hreflang: 'fr-CH', href: buildLangUrl('fr') },
        { hreflang: 'en-CH', href: buildLangUrl('en') },
        { hreflang: 'x-default', href: baseUrl },
      ];
      hreflangEntries.forEach(({ hreflang, href }) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        link.setAttribute('href', href);
        document.head.appendChild(link);
      });

      upsertMeta('name', 'description', loc.metaDescription);

      // OpenGraph
      upsertMeta('property', 'og:type', 'website');
      upsertMeta('property', 'og:site_name', loc.orgName);
      upsertMeta('property', 'og:locale', ogLocaleValue);
      upsertMeta('property', 'og:url', shareUrl);
      upsertMeta('property', 'og:title', loc.metaTitle);
      upsertMeta('property', 'og:description', loc.metaDescription);
      upsertMeta('property', 'og:image', shareImageUrl);
      upsertMeta('property', 'og:image:alt', loc.imageAlt);

      const alternateLocales = ['it_CH', 'de_CH', 'fr_CH', 'en_CH'].filter(
        (code) => code !== ogLocaleValue
      );
      document
        .querySelectorAll('meta[property="og:locale:alternate"]')
        .forEach((node) => node.remove());
      alternateLocales.forEach((altLocale) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:locale:alternate');
        meta.setAttribute('content', altLocale);
        document.head.appendChild(meta);
      });

      // Twitter Card
      upsertMeta('name', 'twitter:card', 'summary_large_image');
      upsertMeta('name', 'twitter:title', loc.metaTitle);
      upsertMeta('name', 'twitter:description', loc.metaDescription);
      upsertMeta('name', 'twitter:image', shareImageUrl);
      upsertMeta('name', 'twitter:image:alt', loc.imageAlt);

      // FAQPage JSON-LD Structured Data
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: loc.htmlLang,
        name: `${loc.faqHeading} – ${loc.orgName}`,
        url: `${shareUrl}#faq`,
        mainEntity: loc.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
      let faqScript = document.getElementById('faq-jsonld') as HTMLScriptElement | null;
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'faq-jsonld';
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    });

    return () => {
      active = false;
    };
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EA] text-[#23302A]">
      {/* 1. HEADER / NAVBAR */}
      <header className="sticky top-0 z-20 bg-[#F6F3EA]/95 backdrop-blur-[10px] border-b border-[rgba(36,56,43,0.14)]">
        <div className="w-[min(1180px,calc(100%-24px))] sm:w-[min(1180px,calc(100%-32px))] mx-auto flex items-center justify-between gap-3 sm:gap-4 h-[64px] sm:h-[76px]">
          <a
            href="#top"
            aria-label={content.orgName}
            className="inline-flex items-center gap-2 sm:gap-2.5 no-underline text-[#24382B] shrink-0 whitespace-nowrap"
          >
            <img
              src={LOGO_SRC}
              alt={content.logoAlt}
              className="h-10 sm:h-12 w-auto mix-blend-multiply shrink-0"
            />
            <span className="font-serif font-bold text-[20px] sm:text-[24px] leading-none tracking-[0.04em]">
              ASTA
            </span>
          </a>

          <nav
            aria-label={content.navAriaLabel}
            className="hidden lg:flex items-center gap-6 font-medium text-[15px]"
          >
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="no-underline text-[#23302A]/85 hover:text-[#24382B] transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <LanguageSelector
              lang={lang}
              onChange={setLang}
              ariaLabel={content.langSelectorLabel}
            />

            <a
              href={MAILTO_HREF}
              className="hidden lg:inline-flex items-center justify-center min-h-[42px] px-5 rounded-full font-semibold text-[14px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
            >
              {content.ctaContact}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden min-w-[44px] min-h-[44px] -mr-1.5 flex items-center justify-center rounded-full text-[#24382B] hover:bg-[#3E5B47]/10 transition-colors cursor-pointer"
              aria-label={content.mobileMenuOpenLabel}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>



      <MobileDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={content.navLinks}
        logoAlt={content.logoAlt}
        navAriaLabel={content.mobileNavAriaLabel}
        closeLabel={content.mobileMenuCloseLabel}
        ctaLabel={content.ctaContact}
        orgLocation={content.orgLocation}
        lang={lang}
        onLangChange={setLang}
        langSelectorLabel={content.langSelectorLabel}
      />

      <main id="top" className="flex-1 w-full">
        {/* 2. HERO ASSOCIAZIONE (ASTA) */}
        <section
          aria-labelledby="hero-title"
          className="w-full bg-[#FCFBF7] border-b border-[rgba(36,56,43,0.10)] flex flex-col items-center"
        >
          <div className="w-full bg-[#F5F4EC]/55 px-5 sm:px-10 pt-6 sm:pt-10 pb-2">
            <img
              src={HERO_LOGO_SRC}
              alt={content.logoAlt}
              className="w-full max-w-[1040px] h-auto max-h-[calc(100svh-160px)] object-contain mx-auto animate-rise block"
            />
          </div>

          <div className="w-[min(1180px,calc(100%-24px))] sm:w-[min(1180px,calc(100%-32px))] mx-auto px-2 sm:px-6 pt-5 pb-9 sm:pt-7 sm:pb-12 text-center flex flex-col items-center">
            <h1
              id="hero-title"
              className="max-w-[20em] font-serif font-semibold text-[clamp(28px,5.4vw,54px)] leading-[1.1] sm:leading-[1.08] text-[#24382B] text-balance animate-rise"
            >
              {content.orgName}
            </h1>
          </div>
        </section>

        <div className="w-[min(1180px,calc(100%-24px))] sm:w-[min(1180px,calc(100%-32px))] mx-auto pt-4 pb-10 sm:pt-5 sm:pb-14 space-y-4 sm:space-y-5">
          {/* 3. ASTA: CHI SIAMO */}
          <section
            id="chi-siamo"
            aria-labelledby="heading-chi-siamo"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[660px] mx-auto">
              <h2
                id="heading-chi-siamo"
                className="font-serif font-semibold text-[clamp(26px,5.4vw,48px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.aboutHeading}
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4 text-[16px] sm:text-[17.5px] leading-[1.7] text-[#4F5E55] text-left sm:text-center">
                <Paragraphs text={content.aboutText} />
              </div>
            </div>
          </section>

          {/* 4. I NOSTRI SCOPI */}
          <section
            id="scopi"
            aria-labelledby="heading-scopi"
            className="rounded-[22px] sm:rounded-[30px] bg-[#E6EFEA]/65 border border-[rgba(36,56,43,0.12)] py-7 px-5 sm:py-[clamp(38px,6vw,64px)] sm:px-[clamp(22px,4.5vw,52px)]"
          >
            <h2
              id="heading-scopi"
              className="text-center font-serif font-semibold text-[clamp(26px,5.4vw,48px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
            >
              {content.goalsHeading}
            </h2>

            <ul className="leaf-list list-none mt-6 sm:mt-8 mx-auto max-w-[960px] grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-4.5">
              {content.goals.map((goal) => (
                <li key={goal} className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#23302A]">
                  {goal}
                </li>
              ))}
            </ul>
          </section>

          {/* 5. ENTRA IN ASTA */}
          <section
            id="entra-in-asta"
            aria-labelledby="heading-entra"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[660px] mx-auto">
              <h2
                id="heading-entra"
                className="font-serif font-semibold text-[clamp(26px,5.2vw,46px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.joinHeading}
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-3.5 text-left sm:text-center">
                <p className="text-[16px] sm:text-[18px] leading-[1.6] font-medium text-[#24382B]">
                  {content.joinTherapistTitle}
                </p>
                <Paragraphs
                  text={content.joinText}
                  className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#4F5E55]"
                />
              </div>
              <div className="mt-6 sm:mt-7 flex justify-center">
                <a
                  href={`${MAILTO_HREF}?subject=${encodeURIComponent('Richiesta Informazioni Adesione ASTA')}`}
                  className="w-full max-w-[320px] sm:w-auto inline-flex items-center justify-center min-h-[48px] px-7 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
                >
                  {content.ctaContact}
                </a>
              </div>
            </div>
          </section>

          {/* 6. VUOI SOSTENERE ASTA? */}
          <section
            id="sostieni-asta"
            aria-labelledby="heading-sostieni"
            className="rounded-[22px] sm:rounded-[30px] bg-[#E6EFEA]/55 border border-[rgba(36,56,43,0.12)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[660px] mx-auto">
              <h2
                id="heading-sostieni"
                className="font-serif font-semibold text-[clamp(26px,5.2vw,46px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.supportHeading}
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-3.5 text-left sm:text-center">
                <p className="text-[16px] sm:text-[18px] leading-[1.6] font-medium text-[#24382B]">
                  {content.supportLead}
                </p>
                <Paragraphs
                  text={content.supportText}
                  className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#4F5E55]"
                />
              </div>
              <div className="mt-6 sm:mt-7 flex justify-center">
                <a
                  href={`${MAILTO_HREF}?subject=${encodeURIComponent('Richiesta Informazioni Sostegno ASTA')}`}
                  className="w-full max-w-[320px] sm:w-auto inline-flex items-center justify-center min-h-[48px] px-7 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
                >
                  {content.ctaContact}
                </a>
              </div>
            </div>
          </section>

          {/* 6. TERAPISTE FONDATRICI DI ASTA RICONOSCIUTE RME */}
          <section
            id="terapiste"
            aria-labelledby="heading-terapiste"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(38px,6vw,64px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <h2
              id="heading-terapiste"
              className="font-serif font-semibold text-[clamp(26px,5.4vw,48px)] leading-[1.12] sm:leading-[1.1] text-[#24382B] text-balance max-w-[20em] mx-auto"
            >
              {content.therapistsHeading}
            </h2>

            <div className="mt-6 sm:mt-9 mx-auto max-w-[960px] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {content.therapists.map((therapist) => (
                <article
                  key={therapist.id}
                  className="rounded-2xl bg-[#F6F3EA]/70 border border-[rgba(36,56,43,0.12)] px-5 py-6 sm:px-6 sm:py-7 flex flex-col items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-serif font-semibold text-[24px] sm:text-[28px] leading-[1.15] text-[#24382B]">
                      {therapist.name}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-[14.5px] sm:text-[15px] text-[#4F5E55]">
                      {therapist.details}
                    </p>
                  </div>

                  <a
                    href={therapist.rmeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${content.therapistRmeAriaPrefix} ${therapist.name}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 min-h-[44px] px-5 rounded-full font-semibold text-[14px] no-underline border border-[#3E5B47] text-[#24382B] hover:bg-[#3E5B47] hover:text-white transition-colors whitespace-nowrap"
                  >
                    <span>{content.therapistRmeLabel}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* 7. TRAINING AUTOGENO: INTRO & IMMAGINE */}
          <section
            id="training-autogeno"
            aria-labelledby="heading-ta-intro"
            className="rounded-[22px] sm:rounded-[30px] overflow-hidden border border-[rgba(36,56,43,0.10)] bg-[#FCFBF7]"
          >
            <div className="py-8 px-5 sm:py-[clamp(40px,6vw,64px)] sm:px-[clamp(22px,4.5vw,52px)] text-center bg-[#E6EFEA]/45">
              <div className="max-w-[820px] mx-auto">
                <h2
                  id="heading-ta-intro"
                  className="font-serif font-semibold text-[clamp(28px,5.8vw,56px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
                >
                  <span className="block">{content.taTitle}</span>
                  <span className="block mt-1">{content.taTitleLine2}</span>
                </h2>
                <p className="mt-3.5 sm:mt-4 mx-auto max-w-[36em] text-[#4F5E55] text-[16px] sm:text-[19px] leading-[1.6]">
                  {content.taSubtitle}
                </p>
              </div>
            </div>

            <figure>
              <img
                src={RELAX_IMAGE_SRC}
                alt={content.imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/10] sm:aspect-[16/9] max-h-[500px] object-cover object-center block"
              />
            </figure>
          </section>

          {/* 8. COS'È IL TRAINING AUTOGENO */}
          <section
            id="cose-il-training-autogeno"
            aria-labelledby="heading-cose"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[660px] mx-auto">
              <h2
                id="heading-cose"
                className="font-serif font-semibold text-[clamp(26px,5.4vw,48px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.methodHeading}
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4 text-[16px] sm:text-[17.5px] leading-[1.7] text-[#4F5E55] text-left sm:text-center">
                <Paragraphs text={content.methodParagraph1} />
                <Paragraphs text={content.methodParagraph2} />
              </div>
            </div>
          </section>

          {/* 9. I BENEFICI (+ NOTA IN PICCOLO) */}
          <section
            id="benefici"
            aria-labelledby="heading-benefici"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(38px,6vw,64px)] sm:px-[clamp(22px,4.5vw,52px)]"
          >
            <h2
              id="heading-benefici"
              className="text-center font-serif font-semibold text-[clamp(26px,5.6vw,52px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
            >
              {content.benefitsHeading}
            </h2>

            <div className="mt-6 sm:mt-9 mx-auto max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8 sm:gap-y-9 items-start">
              <div>
                <h3 className="font-serif font-semibold text-[24px] sm:text-[28px] leading-[1.15] text-[#24382B] mb-4">
                  {content.physicalBenefitsHeading}
                </h3>
                <ul className="leaf-list list-none grid gap-3.5 sm:gap-4">
                  {content.physicalBenefits.map((item) => (
                    <li key={item} className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#23302A]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-semibold text-[24px] sm:text-[28px] leading-[1.15] text-[#24382B] mb-4">
                  {content.psychicBenefitsHeading}
                </h3>
                <ul className="leaf-list list-none grid gap-3.5 sm:gap-4">
                  {content.psychicBenefits.map((item) => (
                    <li key={item} className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#23302A]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p
              aria-label={content.disclaimerLabel}
              className="mt-7 sm:mt-8 pt-4 border-t border-[rgba(36,56,43,0.12)] max-w-[1000px] mx-auto text-center text-[18.5px] font-bold leading-[1.55] text-[#07662d]"
            >
              {content.disclaimerText}
            </p>
          </section>

          {/* 10. A CHI È RIVOLTO */}
          <section
            id="a-chi-e-rivolto"
            aria-labelledby="heading-rivolto"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[660px] mx-auto">
              <h2
                id="heading-rivolto"
                className="font-serif font-semibold text-[clamp(26px,5.2vw,46px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.whoHeading}
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4 text-[16px] sm:text-[17.5px] leading-[1.7] text-[#4F5E55] text-left sm:text-center">
                <Paragraphs text={content.whoText} />
              </div>
            </div>
          </section>

          {/* 11. COME FUNZIONA */}
          <section
            id="come-funziona"
            aria-labelledby="heading-funziona"
            className="rounded-[22px] sm:rounded-[30px] bg-[#E6EFEA]/75 border border-[rgba(36,56,43,0.12)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[660px] mx-auto">
              <h2
                id="heading-funziona"
                className="font-serif font-semibold text-[clamp(26px,5.2vw,46px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.howHeading}
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4 text-[16px] sm:text-[17.5px] leading-[1.7] text-[#23302A] text-left sm:text-center">
                <Paragraphs text={content.howText} />
              </div>
            </div>
          </section>

          {/* 12. RICONOSCIMENTO E RIMBORSO */}
          <section
            id="riconoscimento"
            aria-labelledby="heading-riconoscimento"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[660px] mx-auto">
              <h2
                id="heading-riconoscimento"
                className="font-serif font-semibold text-[clamp(26px,5.2vw,46px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.recognitionHeading}
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4 text-[16px] sm:text-[17.5px] leading-[1.7] text-[#4F5E55] text-left sm:text-center">
                <Paragraphs text={content.recognitionText} />
              </div>
            </div>
          </section>


          {/* 14. DOMANDE FREQUENTI */}
          <section
            id="faq"
            aria-labelledby="heading-faq"
            className="rounded-[22px] sm:rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-7 px-5 sm:py-[clamp(36px,5.5vw,58px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <h2
              id="heading-faq"
              className="font-serif font-semibold text-[clamp(26px,5.2vw,46px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
            >
              {content.faqHeading}
            </h2>
            <FaqAccordion items={content.faqItems} />
          </section>

          {/* 15. CONTATTI */}
          <section
            id="contatti"
            aria-labelledby="heading-contatti"
            className="rounded-[22px] sm:rounded-[30px] bg-[#E6EFEA]/75 border border-[rgba(36,56,43,0.12)] py-7 px-5 sm:py-[clamp(38px,6vw,64px)] sm:px-[clamp(22px,4.5vw,52px)] text-center"
          >
            <div className="max-w-[680px] mx-auto">
              <h2
                id="heading-contatti"
                className="font-serif font-semibold text-[clamp(26px,5.4vw,48px)] leading-[1.12] sm:leading-[1.08] text-[#24382B] text-balance"
              >
                {content.contactHeading}
              </h2>

              <div className="mt-5 sm:mt-6 space-y-2.5 text-[16px] sm:text-[17px] text-[#23302A]">
                <p className="font-semibold text-[#24382B]">{content.orgName}</p>
                <p className="inline-flex items-center justify-center gap-2 text-[#4F5E55]">
                  <MapPin className="w-4 h-4 text-[#3E5B47] shrink-0" aria-hidden="true" />
                  <span>{content.orgLocation}</span>
                </p>
                <div>
                  <a
                    href={MAILTO_HREF}
                    className="inline-flex items-center justify-center gap-2 font-medium text-[#24382B] underline underline-offset-4 hover:text-[#3E5B47] transition-colors break-all sm:break-normal"
                  >
                    <Mail className="w-4 h-4 text-[#3E5B47] shrink-0" aria-hidden="true" />
                    <span>
                      {content.emailLabel}: {CONTACT_EMAIL}
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:mt-7 flex justify-center">
                <a
                  href={MAILTO_HREF}
                  className="w-full max-w-[320px] sm:w-auto inline-flex items-center justify-center min-h-[48px] px-7 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
                >
                  {content.ctaContact}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(36,56,43,0.14)] py-7 sm:py-8 text-[#4F5E55] text-[13.5px] sm:text-[14px] bg-[#F6F3EA]">
        <div className="w-[min(1180px,calc(100%-24px))] sm:w-[min(1180px,calc(100%-32px))] mx-auto space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
              <img
                src={LOGO_SRC}
                alt={content.logoAlt}
                className="h-11 sm:h-12 w-auto mix-blend-multiply shrink-0"
              />
              <span>{content.orgName}</span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-4 lg:gap-5">
              <span>{content.orgLocation}</span>
              <a
                href={MAILTO_HREF}
                className="text-[#24382B] font-medium underline underline-offset-4 hover:text-[#3E5B47] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={SITITICINO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 min-h-[36px] px-4 py-1.5 rounded-full font-semibold text-[13px] no-underline border border-[#3E5B47]/45 text-[#24382B] bg-[#FCFBF7]/80 hover:bg-[#3E5B47] hover:text-white hover:border-[#3E5B47] transition-colors text-center shrink-0 max-w-full"
              >
                <span>Vuoi un sito come questo? Contattaci – Connect &amp; Create</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(36,56,43,0.10)] flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 text-[13px] sm:text-[13.5px]">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="text-[#24382B] font-medium underline underline-offset-4 hover:text-[#3E5B47] transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              {content.legal.privacyLabel}
            </button>
            <span aria-hidden="true" className="text-[#4F5E55]/60">
              ·
            </span>
            <button
              type="button"
              onClick={() => setLegalModal('cookies')}
              className="text-[#24382B] font-medium underline underline-offset-4 hover:text-[#3E5B47] transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              {content.legal.cookiesLabel}
            </button>
            <span aria-hidden="true" className="text-[#4F5E55]/60">
              ·
            </span>
            <button
              type="button"
              onClick={() => setBannerOpen(true)}
              className="text-[#24382B] font-medium underline underline-offset-4 hover:text-[#3E5B47] transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              {content.legal.cookieSettingsLabel}
            </button>
          </div>
        </div>
      </footer>

      <CookieBanner
        open={bannerOpen}
        legal={content.legal}
        onSelect={handleSelectConsent}
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenCookies={() => setLegalModal('cookies')}
      />

      <LegalModal
        docType={legalModal}
        legal={content.legal}
        consent={consent}
        onClose={() => setLegalModal(null)}
        onSwitchDoc={(next) => setLegalModal(next)}
        onOpenCookieSettings={() => setBannerOpen(true)}
      />
    </div>
  );
}
