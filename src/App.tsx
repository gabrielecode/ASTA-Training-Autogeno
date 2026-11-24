/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  ShieldCheck, MapPin, Phone, Mail, Clock,
  ChevronDown, Award, Sparkles,
  Heart, Users, Check, ArrowRight, Menu
} from 'lucide-react';
import {
  ORG_EMAIL, ORG_NAME, ORG_SEDE, ORG_PHONE,
  LANGS, Lang, LANG_META, DEFAULT_LANG, LANG_STORAGE_KEY,
  IT_TRANSLATIONS, loadLocale, type TranslationSchema
} from './config';
import { AstaBrand } from './components/AstaLogo';
import { MobileDrawer } from './components/MobileDrawer';
import { MobileBottomBar } from './components/MobileBottomBar';

import heroRelaxationImg from "@/src/assets/images/hero_relaxation_ticino_1795508349821.jpg";
import heroRelaxation640Webp from "@/src/assets/images/hero_relaxation_ticino_640.webp";
import heroRelaxation1200Webp from "@/src/assets/images/hero_relaxation_ticino_1200.webp";
import therapistSessionImg from "@/src/assets/images/therapist_session_1795508349967.jpg";
import therapistSession720Webp from "@/src/assets/images/therapist_session_720.webp";

const BookingModal = lazy(() => import('./components/modals/BookingModal'));
const MembershipModal = lazy(() => import('./components/modals/MembershipModal'));
const PrivacyModal = lazy(() => import('./components/modals/PrivacyModal'));
const LegalModal = lazy(() => import('./components/modals/LegalModal'));
const CookiePrefsModal = lazy(() => import('./components/modals/CookiePrefsModal'));

interface Therapist {
  id: string;
  name: string;
  title: string;
  location: string;
  region: 'lugano' | 'online';
  rmeNumber: string;
  languages: string[];
  experienceYears: number;
  specialization: string;
  image: string;
  webpSrcSet: string;
  width: number;
  height: number;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY) as Lang;
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });
  const [t, setT] = useState<TranslationSchema>(IT_TRANSLATIONS);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('metodo');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // nLPD & GDPR Compliance States
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'rejected' | 'pending'>(() => {
    return (localStorage.getItem('asta_cookie_consent') as 'accepted' | 'rejected' | 'pending') || 'pending';
  });
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [cookiePrefsOpen, setCookiePrefsOpen] = useState(false);
  const [privacyTab, setPrivacyTab] = useState<'policy' | 'rights' | 'cookies'>('policy');
  const [bookingConsentChecked, setBookingConsentChecked] = useState(false);
  const [rightsActionMessage, setRightsActionMessage] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Lugano Centro',
    notes: ''
  });

  // Membership Modal States ("Entra in ASTA")
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<'active' | 'supporter'>('active');
  const [membershipSubmitted, setMembershipSubmitted] = useState(false);
  const [membershipConsentChecked, setMembershipConsentChecked] = useState(false);
  const [membershipFormData, setMembershipFormData] = useState({
    nameOrg: '',
    email: '',
    phone: '',
    rmeNumber: '',
    notes: ''
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Lazy load non-default language bundles & sync SEO metadata
  useEffect(() => {
    let active = true;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    const meta = LANG_META[lang];
    document.documentElement.lang = meta.htmlLang;
    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', meta.title);
    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', meta.description);
    const twTitleEl = document.querySelector('meta[name="twitter:title"]');
    if (twTitleEl) twTitleEl.setAttribute('content', meta.title);
    const twDescEl = document.querySelector('meta[name="twitter:description"]');
    if (twDescEl) twDescEl.setAttribute('content', meta.description);

    loadLocale(lang).then((currentT) => {
      if (!active) return;
      setT(currentT);

      const faqJsonLdEl = document.getElementById('faq-jsonld');
      if (faqJsonLdEl) {
        const faqItems = [
          { q: currentT.faq1Q, a: currentT.faq1A },
          { q: currentT.faq2Q, a: currentT.faq2A },
          { q: currentT.faq3Q, a: currentT.faq3A },
          { q: currentT.faq4Q, a: currentT.faq4A },
          { q: currentT.faq5Q, a: currentT.faq5A },
          { q: currentT.faq6Q, a: currentT.faq6A },
        ];
        faqJsonLdEl.textContent = JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
          null,
          2
        );
      }
    });

    return () => {
      active = false;
    };
  }, [lang]);

  // Track visible section for mobile bottom bar indicator
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const sectionIds = ['metodo', 'terapiste', 'rimborso'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.01 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const therapists: Therapist[] = [
    {
      id: '1',
      name: 'Cristina Bettini',
      title: 'Terapista RME • Locarnese / Valle Maggia',
      location: 'Gordevio',
      region: 'online',
      rmeNumber: 'RME #184920',
      languages: ['Italiano'],
      experienceYears: 12,
      specialization: 'Training Autogeno, gestione dello stress e rilassamento nel Locarnese e Vallemaggia',
      image: therapistSessionImg,
      webpSrcSet: `${therapistSession720Webp} 720w`,
      width: 1200,
      height: 896
    },
    {
      id: '2',
      name: 'Francesca Betteni',
      title: 'Terapista RME • Luganese',
      location: 'Lugano',
      region: 'lugano',
      rmeNumber: 'RME #293841',
      languages: ['Italiano', 'Francese', 'Inglese'],
      experienceYears: 10,
      specialization: 'Training Autogeno, equilibrio psicosomatico e benessere nel Luganese',
      image: heroRelaxationImg,
      webpSrcSet: `${heroRelaxation640Webp} 640w, ${heroRelaxation1200Webp} 1200w`,
      width: 1376,
      height: 768
    },
    {
      id: '3',
      name: 'Tamara Ghisletta',
      title: 'Terapista RME • Bellinzonese',
      location: 'Preonzo',
      region: 'online',
      rmeNumber: 'RME #382910',
      languages: ['Italiano'],
      experienceYears: 9,
      specialization: 'Training Autogeno e percorsi di consapevolezza nel Bellinzonese',
      image: therapistSessionImg,
      webpSrcSet: `${therapistSession720Webp} 720w`,
      width: 1200,
      height: 896
    }
  ];

  const filteredTherapists =
    selectedRegion === 'all' ? therapists : therapists.filter((item) => item.region === selectedRegion);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setBookingModalOpen(false);
      setFormData({ name: '', email: '', phone: '', location: 'Lugano Centro', notes: '' });
    }, 3500);
  };

  const openMembershipModal = (type: 'active' | 'supporter') => {
    setMembershipType(type);
    setMembershipSubmitted(false);
    setMembershipModalOpen(true);
  };

  const buildMembershipMailto = () => {
    const isSupporter = membershipType === 'supporter';
    const subject = isSupporter ? t.joinAsta.emailSubjectSupporter : t.joinAsta.emailSubjectActive;
    const typeLabel = isSupporter ? t.joinAsta.typeSupporter : t.joinAsta.typeActive;
    const bodyLines = [
      `${t.joinAsta.fieldType.replace(' *', '')}: ${typeLabel}`,
      `${t.joinAsta.fieldNameOrg.replace(' *', '')}: ${membershipFormData.nameOrg}`,
      `${t.fieldEmail.replace(' *', '')}: ${membershipFormData.email}`,
      membershipFormData.phone ? `${t.fieldPhone.replace(' *', '')}: ${membershipFormData.phone}` : '',
      !isSupporter && membershipFormData.rmeNumber
        ? `${t.joinAsta.fieldRmeNumber}: ${membershipFormData.rmeNumber}`
        : '',
      membershipFormData.notes ? `${t.fieldNotes}: ${membershipFormData.notes}` : ''
    ].filter(Boolean);

    return `mailto:${ORG_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  const handleMembershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = buildMembershipMailto();
    setMembershipSubmitted(true);
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.click();
  };

  const navLinks = [
    { href: '#metodo', label: t.navMetodo },
    { href: '#audio-guide', label: t.navAudio },
    { href: '#terapiste', label: t.navTerapiste },
    { href: '#chi-siamo', label: t.navAbout },
    { href: '#rimborso', label: t.navRimborso },
    { href: '#faq', label: t.navFaq },
  ];

  const methodCards = [
    { num: '01', title: t.method1Title, desc: t.method1Desc },
    { num: '02', title: t.method2Title, desc: t.method2Desc },
    { num: '03', title: t.method3Title, desc: t.method3Desc },
    { num: '04', title: t.method4Title, desc: t.method4Desc },
  ];

  const journeyCards = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      iconPath: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      num: '04',
      title: t.step4Title,
      desc: t.step4Desc,
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
  ];

  const faqItems = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF6] text-[#2C3531] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">

      {/* TOP BAR CONTRACT (Compact 52px on mobile, spacious on desktop) */}
      <header className="sticky top-0 z-40 bg-[#F8FAF6]/95 backdrop-blur-md border-b border-[#334E3B]/10 px-4 sm:px-6 lg:px-12 h-[52px] sm:h-auto sm:py-3.5 lg:py-4 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <AstaBrand subtitleText={t.brandSubtitle} variant="dark" size={36} compactOnMobile />

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#2C3531]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#334E3B] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Dropdown, Primary CTA (sm+) & Drawer Trigger (< lg) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
          <div className="relative inline-flex items-center">
            <select
              aria-label="Lingua"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="appearance-none bg-white border border-[#334E3B]/20 rounded-lg min-h-[40px] sm:min-h-[38px] px-2.5 sm:px-3 py-1.5 pr-7 sm:pr-8 text-xs font-semibold text-[#334E3B] focus:outline-none focus:border-[#334E3B] cursor-pointer shadow-sm"
            >
              <option value="it">🇮🇹 IT</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="de">🇩🇪 DE</option>
              <option value="en">🇬🇧 EN</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#334E3B] absolute right-2 pointer-events-none" />
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedTherapist('');
              setBookingModalOpen(true);
            }}
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#334E3B] rounded-lg hover:bg-[#25392a] transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.ctaBook}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden min-w-[44px] min-h-[44px] -mr-2 flex items-center justify-center text-[#334E3B] rounded-xl hover:bg-[#334E3B]/5 focus:outline-none cursor-pointer"
            aria-label="Apri menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <MobileDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        brandSubtitle={t.brandSubtitle}
        links={navLinks}
        ctaLabel={t.ctaBook}
        onBook={() => {
          setSelectedTherapist('');
          setBookingModalOpen(true);
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-8 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#F0F4EE] to-[#F8FAF6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#334E3B]">
              <ShieldCheck className="w-4 h-4 text-[#334E3B] shrink-0" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-[clamp(1.875rem,5vw,3.75rem)] font-serif font-bold text-[#2C3531] tracking-tight leading-[1.14] text-balance">
              {t.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-[#2C3531]/80 leading-relaxed max-w-2xl font-normal">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={() => {
                  setSelectedTherapist('');
                  setBookingModalOpen(true);
                }}
                className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-sm font-semibold text-white bg-[#334E3B] rounded-xl hover:bg-[#25392a] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.heroCtaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#terapiste"
                className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 text-sm font-semibold text-[#334E3B] bg-white border border-[#334E3B]/20 rounded-xl hover:bg-[#334E3B]/5 active:scale-[0.98] transition-all flex items-center justify-center"
              >
                {t.heroCtaSecondary}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-[#334E3B]/10 max-w-xl">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#334E3B] tabular-nums">{t.statRme}</p>
                <p className="text-[11px] sm:text-xs text-[#2C3531]/75 mt-0.5 leading-snug">{t.statRmeDesc}</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#334E3B]">{t.statSede}</p>
                <p className="text-[11px] sm:text-xs text-[#2C3531]/75 mt-0.5 leading-snug">{t.statSedeDesc}</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#334E3B] tabular-nums">{t.statRimborso}</p>
                <p className="text-[11px] sm:text-xs text-[#2C3531]/75 mt-0.5 leading-snug">{t.statRimborsoDesc}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl border border-white/60 bg-white">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${heroRelaxation640Webp} 640w, ${heroRelaxation1200Webp} 1200w`}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                />
                <img
                  src={heroRelaxationImg}
                  alt="Studio ASTA Lugano"
                  width={1376}
                  height={768}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-[240px] sm:h-[360px] lg:h-[460px] object-cover lg:hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3531]/70 via-[#2C3531]/15 to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white">
                  <p className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold opacity-90">{t.heroImageCaption}</p>
                  <p className="text-base sm:text-lg font-serif font-medium">{t.heroImageTitle}</p>
                </div>
              </div>
            </div>

            {/* RME Badge: cleanly positioned below the hero image so it never overlaps the caption */}
            <div className="mt-3 sm:mt-4 bg-white p-3.5 sm:p-4 rounded-xl shadow-md border border-[#334E3B]/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#2C3531]">{t.rmeBadgeText}</p>
                <p className="text-[11px] text-[#2C3531]/70 leading-snug">{t.rmeBadgeSub}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* METODO & BENEFITS SECTION */}
      <section id="metodo" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">

          <div className="text-left md:text-center max-w-3xl md:mx-auto space-y-3 sm:space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.methodTag}</p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2C3531] text-balance">
              {t.methodTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#2C3531]/75 leading-relaxed">
              {t.methodDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {methodCards.map((card) => (
              <div
                key={card.num}
                className="p-6 sm:p-8 rounded-2xl bg-[#F8FAF6] border border-[#334E3B]/10 hover:shadow-lg transition-shadow space-y-3.5 sm:space-y-4"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-lg sm:text-xl font-bold tabular-nums">
                  {card.num}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2C3531]">{card.title}</h3>
                <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* THE 4-STEP JOURNEY SECTION */}
      <section id="audio-guide" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-[#334E3B]/5">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">

          <div className="text-left md:text-center max-w-3xl md:mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#334E3B]">
              <Sparkles className="w-4 h-4 text-[#334E3B]" />
              <span>{t.journeyTag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2C3531] tracking-tight text-balance">
              {t.journeyTitle}
            </h2>
            <p className="text-[#2C3531]/75 leading-relaxed text-sm sm:text-lg">
              {t.journeySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {journeyCards.map((step) => (
              <div
                key={step.num}
                className="bg-[#F8FAF6] rounded-2xl rounded-tr-3xl p-6 sm:p-8 border border-[#334E3B]/10 hover:shadow-lg transition-shadow flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm tabular-nums">
                      {step.num}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.iconPath} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2C3531]">{step.title}</h3>
                  <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RME THERAPIST DIRECTORY SECTION */}
      <section id="terapiste" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-[#334E3B]/5">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.therapistsTag}</p>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2C3531] text-balance">
                {t.therapistsTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#2C3531]/75">
                {t.therapistsSubtitle}
              </p>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-[#F8FAF6] p-1.5 rounded-xl border border-[#334E3B]/10 overflow-x-auto no-scrollbar max-w-full shrink-0">
              <button
                type="button"
                onClick={() => setSelectedRegion('all')}
                className={`min-h-[40px] px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedRegion === 'all' ? 'bg-[#334E3B] text-white shadow-sm' : 'text-[#2C3531]/70 hover:text-[#2C3531]'
                }`}
              >
                {t.filterAll}
              </button>
              <button
                type="button"
                onClick={() => setSelectedRegion('lugano')}
                className={`min-h-[40px] px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedRegion === 'lugano' ? 'bg-[#334E3B] text-white shadow-sm' : 'text-[#2C3531]/70 hover:text-[#2C3531]'
                }`}
              >
                {t.filterLugano}
              </button>
              <button
                type="button"
                onClick={() => setSelectedRegion('online')}
                className={`min-h-[40px] px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedRegion === 'online' ? 'bg-[#334E3B] text-white shadow-sm' : 'text-[#2C3531]/70 hover:text-[#2C3531]'
                }`}
              >
                {t.filterOnline}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredTherapists.map((tItem) => (
              <div
                key={tItem.id}
                className="bg-[#F8FAF6] rounded-2xl overflow-hidden border border-[#334E3B]/10 flex flex-col justify-between hover:shadow-xl transition-shadow group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#F0F4EE]">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={tItem.webpSrcSet}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 48vw, 31vw"
                      />
                      <img
                        src={tItem.image}
                        alt={tItem.name}
                        width={tItem.width}
                        height={tItem.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </picture>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#334E3B] shadow-sm tabular-nums">
                      {tItem.rmeNumber}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-[#334E3B] font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{tItem.location}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#2C3531]">{tItem.name}</h3>
                      <p className="text-xs text-[#2C3531]/70">{tItem.title}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#2C3531]/80 leading-relaxed">
                      {tItem.specialization}
                    </p>

                    <p className="text-xs font-medium text-[#334E3B]/80 pt-1">
                      {tItem.languages.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTherapist(tItem.name);
                      setBookingModalOpen(true);
                    }}
                    className="w-full min-h-[48px] py-3 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                  >
                    {t.bookButton} {tItem.name.split(' ')[1] || tItem.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASSA MALATI REIMBURSEMENT SECTION */}
      <section id="rimborso" className="defer-section py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#F0F4EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.reimburseTag}</p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2C3531] text-balance">
              {t.reimburseTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed">
              {t.reimburseP1}
            </p>
            <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed">
              {t.reimburseP2}
            </p>

            <div className="space-y-3 pt-1">
              {[t.reimburseCheck1, t.reimburseCheck2, t.reimburseCheck3].map((checkText, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-[#2C3531]">{checkText}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-2xl border border-[#334E3B]/10 shadow-lg space-y-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3531]">{t.reimburseStepsTitle}</h3>

            <div className="space-y-4">
              {[
                { num: '1', title: t.reimburseStep1Title, desc: t.reimburseStep1Desc },
                { num: '2', title: t.reimburseStep2Title, desc: t.reimburseStep2Desc },
                { num: '3', title: t.reimburseStep3Title, desc: t.reimburseStep3Desc },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#334E3B] text-white flex items-center justify-center font-bold text-sm shrink-0 tabular-nums">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C3531]">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-[#2C3531]/70 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedTherapist('');
                setBookingModalOpen(true);
              }}
              className="w-full min-h-[48px] py-3.5 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              {t.reimburseCta}
            </button>
          </div>

        </div>
      </section>

      {/* ASTA: CHI SIAMO SECTION */}
      <section id="chi-siamo" aria-labelledby="chi-siamo-heading" className="defer-section py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <h2 id="chi-siamo-heading" className="text-2xl sm:text-4xl font-serif font-bold text-[#2C3531] text-balance">
              {t.asta.title}
            </h2>
            <p className="text-[#2C3531]/80 leading-relaxed text-sm sm:text-lg">
              {t.asta.intro}
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6 pt-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3531]">
              {t.asta.goalsTitle}
            </h3>

            <ol role="list" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {t.asta.goals.map((goalText, idx) => {
                const goalNum = String(idx + 1).padStart(2, '0');
                return (
                  <li
                    key={idx}
                    className="bg-[#F8FAF6] rounded-2xl p-5 sm:p-6 border border-[#334E3B]/10 hover:shadow-md transition-shadow flex flex-col justify-between space-y-3 sm:space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-sm text-[#334E3B] tracking-widest tabular-nums">
                        {goalNum}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#334E3B]/10 flex items-center justify-center text-[#334E3B]">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-[#2D2424] leading-relaxed">
                      {goalText}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

        </div>
      </section>

      {/* ENTRA IN ASTA SECTION */}
      <section id="entra-in-asta" aria-labelledby="entra-in-asta-heading" className="defer-section py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#F0F4EE]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <div className="text-left md:text-center max-w-3xl md:mx-auto space-y-3 sm:space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">
              {t.joinAsta.tag}
            </p>
            <h2 id="entra-in-asta-heading" className="text-2xl sm:text-4xl font-serif font-bold text-[#2C3531] text-balance">
              {t.joinAsta.title}
            </h2>
            <p className="text-sm sm:text-base text-[#2C3531]/75 leading-relaxed">
              {t.joinAsta.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 – Terapisti complementari TA RME */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#334E3B]/10 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#334E3B] text-white flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#334E3B]">
                    {t.joinAsta.therapistBadge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3531]">
                  {t.joinAsta.therapistTitle}
                </h3>

                <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed">
                  {t.joinAsta.therapistDesc}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => openMembershipModal('active')}
                  className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] active:scale-[0.98] transition-all shadow-sm inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{t.joinAsta.therapistCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2 – Soci sostenitori */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#334E3B]/15 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 text-[#334E3B] flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-[#334E3B]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2C3531]/75">
                    {t.joinAsta.supporterBadge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3531]">
                  {t.joinAsta.supporterTitle}
                </h3>

                <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed">
                  {t.joinAsta.supporterDesc}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => openMembershipModal('supporter')}
                  className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 bg-white border-2 border-[#334E3B] text-[#334E3B] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#334E3B] hover:text-white active:scale-[0.98] transition-all shadow-sm inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{t.joinAsta.supporterCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="defer-section py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">

          <div className="text-left sm:text-center space-y-3 sm:space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.faqTag}</p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2C3531] text-balance">
              {t.faqTitle}
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-[#334E3B]/10 rounded-2xl overflow-hidden bg-[#F8FAF6]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full min-h-[56px] px-5 sm:px-6 py-4 sm:py-5 text-left text-sm sm:text-base font-semibold flex justify-between items-center gap-4 text-[#2C3531] cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#334E3B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#334E3B]/10 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER (extra bottom padding on mobile so fixed bottom bar never overlaps controls) */}
      <footer className="defer-section bg-[#2C3531] text-white pt-12 pb-24 lg:py-16 px-4 sm:px-6 lg:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 border-b border-white/10 pb-10 sm:pb-12">

          <div className="space-y-4 md:col-span-2">
            <AstaBrand subtitleText={t.brandSubtitle} variant="light" size={38} />
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373]">{t.footerSedeTitle}</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Via Nassa 29, 6900 Lugano</li>
              <li>{ORG_SEDE}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373]">{t.footerContactTitle}</h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a href={`tel:${ORG_PHONE.replace(/[^+\d]/g, '')}`} className="hover:underline">
                  {ORG_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a href={`mailto:${ORG_EMAIL}`} className="hover:underline break-all">
                  {ORG_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4A373] shrink-0" />
                <span>{t.footerHours}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <div className="text-center sm:text-left space-y-2.5">
            <p>© {new Date().getFullYear()} {ORG_NAME} — {t.rightsText}</p>
            {(() => {
              const [creditBefore = '', creditAfter = ''] = t.footerCredit.split('Connect & Create');
              return (
                <div>
                  <a
                    href="https://sititicino.ch/?ref=asta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#222A26] hover:bg-[#1D2421] border border-[#D4A373]/30 hover:border-[#D4A373]/75 text-white/75 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_14px_rgba(212,163,115,0.16)] text-left"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A373] group-hover:text-[#E8C19A] shrink-0 transition-colors duration-300" />
                    <span className="leading-snug">
                      {creditBefore}
                      <strong className="font-bold text-[#D4A373] group-hover:text-[#E8C19A] transition-colors duration-300">
                        Connect &amp; Create
                      </strong>
                      {creditAfter}
                    </span>
                  </a>
                </div>
              );
            })()}
          </div>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={() => setLegalModalOpen(true)}
              className="min-h-[44px] sm:min-h-0 flex items-center hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs text-white/60"
            >
              {t.footerLegal}
            </button>
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="min-h-[44px] sm:min-h-0 flex items-center hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs text-white/60"
            >
              {t.footerPrivacy}
            </button>
            <a
              href="#rimborso"
              className="min-h-[44px] sm:min-h-0 flex items-center hover:text-white transition-colors"
            >
              {t.footerRme}
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE FIXED BOTTOM NAVIGATION BAR */}
      <MobileBottomBar
        activeSection={activeSection}
        labels={{
          metodo: t.navMetodo,
          terapiste: t.navTerapiste,
          rimborso: t.navRimborso,
          prenota: t.ctaBook.split(' ')[0],
        }}
        onBook={() => {
          setSelectedTherapist('');
          setBookingModalOpen(true);
        }}
      />

      {/* COOKIE CONSENT BANNER (positioned above MobileBottomBar on < lg) */}
      {cookieConsent === 'pending' && (
        <div className="fixed bottom-16 lg:bottom-0 left-3 right-3 lg:left-0 lg:right-0 z-50 bg-[#2C3531] text-white p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-none shadow-2xl border border-white/10 lg:border-x-0 lg:border-b-0 flex flex-col lg:flex-row items-center justify-between gap-3.5 sm:gap-4 mb-2 lg:mb-0">
          <div className="space-y-1 text-center lg:text-left max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#D4A373]">
              Informativa sui Cookie e sulla Privacy (nLPD & GDPR)
            </p>
            <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed">
              {t.cookieBannerText}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => {
                localStorage.setItem('asta_cookie_consent', 'rejected');
                setCookieConsent('rejected');
              }}
              className="min-h-[40px] px-3.5 sm:px-4 py-2 text-xs font-semibold bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              {t.cookieOnlyNec}
            </button>
            <button
              type="button"
              onClick={() => setCookiePrefsOpen(true)}
              className="min-h-[40px] px-3.5 sm:px-4 py-2 text-xs font-semibold bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              {t.cookieCustom}
            </button>
            <button
              type="button"
              onClick={() => {
                localStorage.setItem('asta_cookie_consent', 'accepted');
                setCookieConsent('accepted');
              }}
              className="min-h-[40px] px-4 sm:px-5 py-2 text-xs font-semibold bg-[#D4A373] text-[#2C3531] hover:bg-[#c39263] rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              {t.cookieAcceptAll}
            </button>
          </div>
        </div>
      )}

      {/* LAZY-LOADED MODALS */}
      <Suspense fallback={null}>
        {bookingModalOpen && (
          <BookingModal
            t={t}
            selectedTherapist={selectedTherapist}
            formSubmitted={formSubmitted}
            formData={formData}
            setFormData={setFormData}
            bookingConsentChecked={bookingConsentChecked}
            setBookingConsentChecked={setBookingConsentChecked}
            onSubmit={handleBookingSubmit}
            onClose={() => setBookingModalOpen(false)}
            onOpenPrivacy={() => setPrivacyModalOpen(true)}
          />
        )}

        {membershipModalOpen && (
          <MembershipModal
            t={t}
            membershipType={membershipType}
            setMembershipType={setMembershipType}
            membershipSubmitted={membershipSubmitted}
            setMembershipSubmitted={setMembershipSubmitted}
            membershipConsentChecked={membershipConsentChecked}
            setMembershipConsentChecked={setMembershipConsentChecked}
            membershipFormData={membershipFormData}
            setMembershipFormData={setMembershipFormData}
            buildMembershipMailto={buildMembershipMailto}
            onSubmit={handleMembershipSubmit}
            onClose={() => {
              setMembershipModalOpen(false);
              setMembershipSubmitted(false);
            }}
            onResetAndClose={() => {
              setMembershipSubmitted(false);
              setMembershipModalOpen(false);
              setMembershipFormData({ nameOrg: '', email: '', phone: '', rmeNumber: '', notes: '' });
              setMembershipConsentChecked(false);
            }}
            onOpenPrivacy={() => setPrivacyModalOpen(true)}
          />
        )}

        {privacyModalOpen && (
          <PrivacyModal
            t={t}
            privacyTab={privacyTab}
            setPrivacyTab={setPrivacyTab}
            cookieConsent={cookieConsent}
            onResetConsent={() => {
              localStorage.removeItem('asta_cookie_consent');
              setCookieConsent('pending');
              setRightsActionMessage('Preferenze cookie e consensi locali resettati con successo.');
            }}
            rightsActionMessage={rightsActionMessage}
            setRightsActionMessage={setRightsActionMessage}
            onClose={() => setPrivacyModalOpen(false)}
          />
        )}

        {legalModalOpen && <LegalModal t={t} onClose={() => setLegalModalOpen(false)} />}

        {cookiePrefsOpen && (
          <CookiePrefsModal
            cookieConsent={cookieConsent}
            onRejectAll={() => {
              localStorage.setItem('asta_cookie_consent', 'rejected');
              setCookieConsent('rejected');
              setCookiePrefsOpen(false);
            }}
            onSaveChoice={(accepted) => {
              const choice = accepted ? 'accepted' : 'rejected';
              localStorage.setItem('asta_cookie_consent', choice);
              setCookieConsent(choice);
              setCookiePrefsOpen(false);
            }}
            onClose={() => setCookiePrefsOpen(false)}
          />
        )}
      </Suspense>

    </div>
  );
}
