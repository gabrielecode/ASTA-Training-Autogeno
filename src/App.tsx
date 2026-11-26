/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import {
  CONTACT_EMAIL,
  MAILTO_HREF,
  ORG_NAME,
  ORG_LOCATION,
  LOGO_SRC,
  LOGO_ALT,
  NAV_LINKS,
  FOUNDER_THERAPISTS,
  PHYSICAL_BENEFITS,
  PSYCHIC_BENEFITS,
  ASTA_GOALS,
  FAQ_ITEMS,
} from './config';
import { MobileDrawer } from './components/MobileDrawer';
import { FaqAccordion } from './components/FaqAccordion';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EA] text-[#23302A]">
      {/* 1. HEADER / NAVBAR */}
      <header className="sticky top-0 z-20 bg-[#F6F3EA]/92 backdrop-blur-[10px] border-b border-[rgba(36,56,43,0.14)]">
        <div className="w-[min(1180px,calc(100%-32px))] mx-auto flex items-center justify-between gap-5 h-[76px]">
          <a
            href="#top"
            aria-label={ORG_NAME}
            className="inline-flex items-center gap-2.5 no-underline text-[#24382B] shrink-0 whitespace-nowrap"
          >
            <img
              src={LOGO_SRC}
              alt={LOGO_ALT}
              className="h-12 w-auto mix-blend-multiply shrink-0"
            />
            <span className="font-serif font-bold text-[24px] leading-none tracking-[0.04em]">
              ASTA
            </span>
          </a>

          <nav
            aria-label="Navigazione principale"
            className="hidden lg:flex items-center gap-7 font-medium text-[15px]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="no-underline text-[#23302A]/85 hover:text-[#24382B] transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={MAILTO_HREF}
              className="hidden lg:inline-flex items-center justify-center min-h-[42px] px-5 rounded-full font-semibold text-[14px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
            >
              Contattaci
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden min-w-[44px] min-h-[44px] -mr-2 flex items-center justify-center rounded-full text-[#24382B] hover:bg-[#3E5B47]/10 transition-colors cursor-pointer"
              aria-label="Apri menu di navigazione"
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
        links={NAV_LINKS}
      />

      <main id="top" className="flex-1 w-[min(1180px,calc(100%-32px))] mx-auto pt-5 pb-14 space-y-5">
        {/* 2. HERO */}
        <section
          aria-labelledby="hero-title"
          className="rounded-[34px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] text-center px-6 pt-[clamp(36px,6vw,72px)] pb-[clamp(48px,7vw,84px)] flex flex-col items-center"
        >
          <img
            src={LOGO_SRC}
            alt={LOGO_ALT}
            className="w-[min(260px,64vw)] h-auto mix-blend-multiply animate-rise"
          />

          <p className="mt-4 text-[14px] font-medium tracking-[0.04em] uppercase text-[#4F5E55] animate-rise">
            {ORG_NAME}
          </p>

          <h1
            id="hero-title"
            className="mt-4 max-w-[16em] font-serif font-semibold text-[clamp(38px,5.6vw,68px)] leading-[1.06] text-[#24382B] text-balance animate-rise"
          >
            Training Autogeno: impara a ritrovare la calma, da solo.
          </h1>

          <p className="mt-5 mx-auto max-w-[32em] text-[#4F5E55] text-[19px] leading-[1.6] animate-rise-delay-1">
            Un metodo scientificamente fondato di auto distensione, per il benessere di mente e corpo.
          </p>

          <div className="mt-8 flex justify-center animate-rise-delay-2">
            <a
              href={MAILTO_HREF}
              className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
            >
              Contattaci
            </a>
          </div>
        </section>

        {/* 3. ASTA: CHI SIAMO */}
        <section
          id="chi-siamo"
          aria-labelledby="heading-chi-siamo"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(36px,5.5vw,58px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[760px] mx-auto">
            <h2
              id="heading-chi-siamo"
              className="font-serif font-semibold text-[clamp(32px,4.2vw,48px)] leading-[1.08] text-[#24382B] text-balance"
            >
              ASTA: chi siamo
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#4F5E55]">
              L’Associazione Svizzera di Training Autogeno (ASTA) è nata nel 2026, con sede a Lugano, come associazione senza scopo di lucro. Riunisce i professionisti del Training Autogeno con l’obiettivo di promuoverne la corretta applicazione e di diffondere informazioni scientificamente fondate.
            </p>
          </div>
        </section>

        {/* 4. I NOSTRI SCOPI */}
        <section
          id="scopi"
          aria-labelledby="heading-scopi"
          className="rounded-[30px] bg-[#E6EFEA]/65 border border-[rgba(36,56,43,0.12)] py-[clamp(38px,6vw,64px)] px-[clamp(22px,4.5vw,52px)]"
        >
          <h2
            id="heading-scopi"
            className="text-center font-serif font-semibold text-[clamp(32px,4.2vw,48px)] leading-[1.08] text-[#24382B] text-balance"
          >
            I nostri scopi
          </h2>

          <ul className="leaf-list list-none mt-8 mx-auto max-w-[960px] grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
            {ASTA_GOALS.map((goal) => (
              <li key={goal} className="text-[16px] leading-[1.6] text-[#23302A]">
                {goal}
              </li>
            ))}
          </ul>
        </section>

        {/* 5. ENTRA IN ASTA */}
        <section
          id="entra-in-asta"
          aria-labelledby="heading-entra"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(36px,5.5vw,58px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[720px] mx-auto">
            <h2
              id="heading-entra"
              className="font-serif font-semibold text-[clamp(32px,4vw,46px)] leading-[1.08] text-[#24382B] text-balance"
            >
              Entra in ASTA
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#4F5E55]">
              Sei un/una terapista complementare TA RME? Unisciti all’associazione per partecipare a supervisioni e intervisioni, eventi formativi e a una rete professionale che promuove qualità ed etica.
            </p>
            <div className="mt-7 flex justify-center">
              <a
                href={MAILTO_HREF}
                className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
              >
                Contattaci
              </a>
            </div>
          </div>
        </section>

        {/* 6. TERAPISTE FONDATRICI DI ASTA RICONOSCIUTE RME */}
        <section
          id="terapiste"
          aria-labelledby="heading-terapiste"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(38px,6vw,64px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <h2
            id="heading-terapiste"
            className="font-serif font-semibold text-[clamp(32px,4.2vw,48px)] leading-[1.1] text-[#24382B] text-balance max-w-[20em] mx-auto"
          >
            Terapiste fondatrici di ASTA riconosciute RME
          </h2>

          <div className="mt-9 mx-auto max-w-[960px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDER_THERAPISTS.map((therapist) => (
              <article
                key={therapist.name}
                className="rounded-2xl bg-[#F6F3EA]/70 border border-[rgba(36,56,43,0.12)] px-6 py-7 flex flex-col items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-serif font-semibold text-[28px] leading-[1.15] text-[#24382B]">
                    {therapist.name}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#4F5E55]">
                    {therapist.details}
                  </p>
                </div>

                <a
                  href={therapist.rmeUrl ?? '#'}
                  target={therapist.rmeUrl ? '_blank' : undefined}
                  rel={therapist.rmeUrl ? 'noopener noreferrer' : undefined}
                  data-placeholder={therapist.rmeUrl ? undefined : therapist.placeholderAttr}
                  onClick={therapist.rmeUrl ? undefined : (e) => e.preventDefault()}
                  aria-label={
                    therapist.rmeUrl
                      ? `Profilo RME di ${therapist.name}`
                      : `Profilo RME di ${therapist.name} (segnaposto)`
                  }
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-5 rounded-full font-semibold text-[14px] no-underline border border-[#3E5B47] text-[#24382B] hover:bg-[#3E5B47] hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>Profilo RME</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 7. COS'È IL TRAINING AUTOGENO */}
        <section
          id="cose-il-training-autogeno"
          aria-labelledby="heading-cose"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(36px,5.5vw,58px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[740px] mx-auto">
            <h2
              id="heading-cose"
              className="font-serif font-semibold text-[clamp(32px,4.2vw,48px)] leading-[1.08] text-[#24382B] text-balance"
            >
              Cos’è il Training Autogeno
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#4F5E55]">
              Il Training Autogeno (TA) è un metodo di auto distensione da concentrazione psichica, ideato dallo psichiatra Johannes Heinrich Schultz (1884-1970). Attraverso un allenamento (training) costante, permette di raggiungere uno stato di calma e rilassamento che si genera da sé (autogeno).
            </p>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#4F5E55]">
              È un metodo semplice e non invasivo per distendersi, ristabilire l’equilibrio psicosomatico e ritrovare l’armonia tra mente e corpo, agendo a livello fisico, psicologico e fisiologico. Con la pratica si impara a raggiungere la calma in tempi brevi e a ridurre lo stress e la tensione accumulati durante la giornata.
            </p>
          </div>
        </section>

        {/* 8. I BENEFICI */}
        <section
          id="benefici"
          aria-labelledby="heading-benefici"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(38px,6vw,64px)] px-[clamp(22px,4.5vw,52px)]"
        >
          <h2
            id="heading-benefici"
            className="text-center font-serif font-semibold text-[clamp(34px,4.4vw,52px)] leading-[1.08] text-[#24382B] text-balance"
          >
            I benefici
          </h2>

          <div className="mt-9 mx-auto max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8 items-start">
            <div>
              <h3 className="font-serif font-semibold text-[28px] leading-[1.15] text-[#24382B] mb-4">
                A livello fisico
              </h3>
              <ul className="leaf-list list-none grid gap-3.5">
                {PHYSICAL_BENEFITS.map((item) => (
                  <li key={item} className="text-[16px] leading-[1.6] text-[#23302A]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-[28px] leading-[1.15] text-[#24382B] mb-4">
                A livello interiore e psichico
              </h3>
              <ul className="leaf-list list-none grid gap-3.5">
                {PSYCHIC_BENEFITS.map((item) => (
                  <li key={item} className="text-[16px] leading-[1.6] text-[#23302A]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9. NOTA / DISCLAIMER */}
        <section
          aria-label="Nota informativa"
          className="rounded-[20px] bg-[#E6EFEA] border border-[rgba(36,56,43,0.14)] px-6 py-4 text-center"
        >
          <p className="text-[15px] leading-[1.5] text-[#24382B] font-medium">
            Il Training Autogeno non sostituisce la diagnosi o la terapia medica.
          </p>
        </section>

        {/* 10. A CHI È RIVOLTO */}
        <section
          id="a-chi-e-rivolto"
          aria-labelledby="heading-rivolto"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(36px,5.5vw,58px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[740px] mx-auto">
            <h2
              id="heading-rivolto"
              className="font-serif font-semibold text-[clamp(32px,4vw,46px)] leading-[1.08] text-[#24382B] text-balance"
            >
              A chi è rivolto
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#4F5E55]">
              Il Training Autogeno si può apprendere in ambito clinico, come prevenzione o come percorso di crescita personale. È adatto a chi vive periodi di stress, a chi dorme poco o male, a studenti e professionisti sotto pressione, e a chiunque desideri uno strumento concreto di autoregolazione.
            </p>
          </div>
        </section>

        {/* 11. COME FUNZIONA */}
        <section
          id="come-funziona"
          aria-labelledby="heading-funziona"
          className="rounded-[30px] bg-[#E6EFEA]/75 border border-[rgba(36,56,43,0.12)] py-[clamp(36px,5.5vw,58px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[740px] mx-auto">
            <h2
              id="heading-funziona"
              className="font-serif font-semibold text-[clamp(32px,4vw,46px)] leading-[1.08] text-[#24382B] text-balance"
            >
              Come funziona
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#23302A]">
              Il percorso prevede 10 incontri con una terapista qualificata, durante i quali si apprende la tecnica. Tra un incontro e l’altro la si esercita a casa: è la pratica regolare a rendere il metodo efficace e duraturo, e a renderti autonomo.
            </p>
          </div>
        </section>

        {/* 12. RICONOSCIMENTO E RIMBORSO */}
        <section
          id="riconoscimento"
          aria-labelledby="heading-riconoscimento"
          className="rounded-[30px] bg-[#24382B] text-[#F4F1E6] py-[clamp(38px,6vw,60px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[740px] mx-auto">
            <h2
              id="heading-riconoscimento"
              className="font-serif font-semibold text-[clamp(32px,4vw,46px)] leading-[1.08] text-[#F4F1E6] text-balance"
            >
              Riconoscimento e rimborso
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#F4F1E6]/90">
              Il Training Autogeno è un metodo di medicina complementare riconosciuto dal registro RME, e le sedute possono essere rimborsate dalle casse malati complementari che lo prevedono.
            </p>
          </div>
        </section>

        {/* 13. SOSTIENI ASTA */}
        <section
          id="sostieni-asta"
          aria-labelledby="heading-sostieni"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(36px,5.5vw,58px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[720px] mx-auto">
            <h2
              id="heading-sostieni"
              className="font-serif font-semibold text-[clamp(32px,4vw,46px)] leading-[1.08] text-[#24382B] text-balance"
            >
              Sostieni ASTA
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-[#4F5E55]">
              Vuoi sostenere il Training Autogeno? Persone e organizzazioni possono sostenere ASTA come soci sostenitori.
            </p>
            <div className="mt-7 flex justify-center">
              <a
                href={MAILTO_HREF}
                className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
              >
                Contattaci
              </a>
            </div>
          </div>
        </section>

        {/* 14. DOMANDE FREQUENTI */}
        <section
          id="faq"
          aria-labelledby="heading-faq"
          className="rounded-[30px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.10)] py-[clamp(36px,5.5vw,58px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <h2
            id="heading-faq"
            className="font-serif font-semibold text-[clamp(32px,4vw,46px)] leading-[1.08] text-[#24382B] text-balance"
          >
            Domande frequenti
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </section>

        {/* 15. CONTATTI */}
        <section
          id="contatti"
          aria-labelledby="heading-contatti"
          className="rounded-[30px] bg-[#E6EFEA]/75 border border-[rgba(36,56,43,0.12)] py-[clamp(38px,6vw,64px)] px-[clamp(22px,4.5vw,52px)] text-center"
        >
          <div className="max-w-[680px] mx-auto">
            <h2
              id="heading-contatti"
              className="font-serif font-semibold text-[clamp(32px,4.2vw,48px)] leading-[1.08] text-[#24382B] text-balance"
            >
              Contatti
            </h2>

            <div className="mt-6 space-y-2.5 text-[17px] text-[#23302A]">
              <p className="font-semibold text-[#24382B]">{ORG_NAME}</p>
              <p className="inline-flex items-center justify-center gap-2 text-[#4F5E55]">
                <MapPin className="w-4 h-4 text-[#3E5B47] shrink-0" aria-hidden="true" />
                <span>{ORG_LOCATION}</span>
              </p>
              <div>
                <a
                  href={MAILTO_HREF}
                  className="inline-flex items-center justify-center gap-2 font-medium text-[#24382B] underline underline-offset-4 hover:text-[#3E5B47] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#3E5B47] shrink-0" aria-hidden="true" />
                  <span>E-mail: {CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>

            <div className="mt-7 flex justify-center">
              <a
                href={MAILTO_HREF}
                className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0"
              >
                Contattaci
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(36,56,43,0.14)] py-8 text-[#4F5E55] text-[14px] bg-[#F6F3EA]">
        <div className="w-[min(1180px,calc(100%-32px))] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <img
              src={LOGO_SRC}
              alt={LOGO_ALT}
              className="h-12 w-auto mix-blend-multiply shrink-0"
            />
            <span>{ORG_NAME}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <span>{ORG_LOCATION}</span>
            <a
              href={MAILTO_HREF}
              className="text-[#24382B] font-medium underline underline-offset-4 hover:text-[#3E5B47] transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
