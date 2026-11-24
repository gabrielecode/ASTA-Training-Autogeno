/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Calendar, MapPin, Phone, Mail, Clock, CheckCircle2, 
  ChevronRight, ChevronDown, Award, Sparkles, 
  Heart, Users, HelpCircle, Check, ArrowRight, Menu, X, Star, Cookie, Shield, FileText, Lock, Globe
} from 'lucide-react';
import { ORG_EMAIL, ORG_NAME, ORG_SEDE, ORG_PHONE, LANGS, Lang, LANG_META, DEFAULT_LANG, LANG_STORAGE_KEY, TRANSLATIONS } from './config';
import { AstaBrand } from './components/AstaLogo';
import heroRelaxationImg from "@/src/assets/images/hero_relaxation_ticino_1795508349821.jpg";
import therapistSessionImg from "@/src/assets/images/therapist_session_1795508349967.jpg";

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
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY) as Lang;
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // nLPD & GDPR Compliance States
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'rejected' | 'pending'>(() => {
    return (localStorage.getItem('asta_cookie_consent') as any) || 'pending';
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

  const t = TRANSLATIONS[lang];

  useEffect(() => {
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
  }, [lang]);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      image: therapistSessionImg
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
      image: heroRelaxationImg
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
      image: therapistSessionImg
    }
  ];

  const filteredTherapists = selectedRegion === 'all' 
    ? therapists 
    : therapists.filter(t => t.region === selectedRegion);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setBookingModalOpen(false);
      setFormData({ name: '', email: '', phone: '', location: 'Lugano Centro', notes: '' });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF6] text-[#2C3531] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* TOP BAR CONTRACT (3 zones: Brand wordmark, Nav links, Primary CTA + Language Switcher) */}
      <header className="sticky top-0 z-40 bg-[#F8FAF6]/95 backdrop-blur-md border-b border-[#334E3B]/10 px-6 lg:px-12 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <AstaBrand subtitleText={t.brandSubtitle} variant="dark" size={38} />

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2C3531]/80">
          <a href="#metodo" className="hover:text-[#334E3B] transition-colors whitespace-nowrap shrink-0">{t.navMetodo}</a>
          <a href="#audio-guide" className="hover:text-[#334E3B] transition-colors whitespace-nowrap shrink-0">{t.navAudio}</a>
          <a href="#terapiste" className="hover:text-[#334E3B] transition-colors whitespace-nowrap shrink-0">{t.navTerapiste}</a>
          <a href="#chi-siamo" className="hover:text-[#334E3B] transition-colors whitespace-nowrap shrink-0">{t.navAbout}</a>
          <a href="#rimborso" className="hover:text-[#334E3B] transition-colors whitespace-nowrap shrink-0">{t.navRimborso}</a>
          <a href="#faq" className="hover:text-[#334E3B] transition-colors whitespace-nowrap shrink-0">{t.navFaq}</a>
        </nav>

        {/* Zone 3: Primary Action & Language Dropdown */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Language Switcher Dropdown */}
          <div className="relative inline-flex items-center">
            <select
              aria-label="Lingua"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="appearance-none bg-white border border-[#334E3B]/20 rounded-lg px-3 py-2 pr-8 text-xs font-semibold text-[#334E3B] focus:outline-none focus:border-[#334E3B] cursor-pointer shadow-sm"
            >
              <option value="it">🇮🇹 IT</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="de">🇩🇪 DE</option>
              <option value="en">🇬🇧 EN</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#334E3B] absolute right-2.5 pointer-events-none" />
          </div>

          <button 
            onClick={() => { setSelectedTherapist(''); setBookingModalOpen(true); }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#334E3B] rounded-lg hover:bg-[#25392a] transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.ctaBook}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#334E3B] focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8FAF6] border-b border-[#334E3B]/10 px-6 py-4 space-y-3 shadow-lg">
          <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-[#2C3531]">{t.navMetodo}</a>
          <a href="#audio-guide" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-[#2C3531]">{t.navAudio}</a>
          <a href="#terapiste" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-[#2C3531]">{t.navTerapiste}</a>
          <a href="#chi-siamo" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-[#2C3531]">{t.navAbout}</a>
          <a href="#rimborso" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-[#2C3531]">{t.navRimborso}</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-[#2C3531]">{t.navFaq}</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); setSelectedTherapist(''); setBookingModalOpen(true); }}
            className="w-full mt-2 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#334E3B] rounded-lg"
          >
            {t.ctaBook}
          </button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 px-6 lg:px-12 bg-gradient-to-b from-[#F0F4EE] to-[#F8FAF6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#334E3B]/10 text-[#334E3B] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#334E3B]" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2C3531] tracking-tight leading-[1.15] text-balance">
              {t.heroTitle}
            </h1>

            <p className="text-lg text-[#2C3531]/80 leading-relaxed max-w-2xl font-normal">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => { setSelectedTherapist(''); setBookingModalOpen(true); }}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#334E3B] rounded-xl hover:bg-[#25392a] transition-all shadow-md flex items-center gap-2 group cursor-pointer"
              >
                <span>{t.heroCtaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="#terapiste"
                className="px-7 py-3.5 text-sm font-semibold text-[#334E3B] bg-white border border-[#334E3B]/20 rounded-xl hover:bg-[#334E3B]/5 transition-all"
              >
                {t.heroCtaSecondary}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#334E3B]/10 max-w-xl">
              <div>
                <p className="text-2xl font-serif font-bold text-[#334E3B]">{t.statRme}</p>
                <p className="text-xs text-[#2C3531]/70 mt-0.5">{t.statRmeDesc}</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#334E3B]">{t.statSede}</p>
                <p className="text-xs text-[#2C3531]/70 mt-0.5">{t.statSedeDesc}</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#334E3B]">{t.statRimborso}</p>
                <p className="text-xs text-[#2C3531]/70 mt-0.5">{t.statRimborsoDesc}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white">
              <img 
                src={heroRelaxationImg} 
                alt="Studio ASTA Lugano" 
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3531]/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-widest font-semibold opacity-90">{t.heroImageCaption}</p>
                  <p className="text-lg font-serif font-medium">{t.heroImageTitle}</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-[#334E3B]/10 flex items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C3531]">{t.rmeBadgeText}</p>
                <p className="text-[11px] text-[#2C3531]/70">{t.rmeBadgeSub}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* METODO & BENEFITS SECTION */}
      <section id="metodo" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.methodTag}</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C3531]">
              {t.methodTitle}
            </h2>
            <p className="text-[#2C3531]/70 leading-relaxed">
              {t.methodDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 rounded-2xl bg-[#F8FAF6] border border-[#334E3B]/10 hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-xl font-bold">
                01
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.method1Title}</h3>
              <p className="text-sm text-[#2C3531]/70 leading-relaxed">
                {t.method1Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAF6] border border-[#334E3B]/10 hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-xl font-bold">
                02
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.method2Title}</h3>
              <p className="text-sm text-[#2C3531]/70 leading-relaxed">
                {t.method2Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAF6] border border-[#334E3B]/10 hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-xl font-bold">
                03
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.method3Title}</h3>
              <p className="text-sm text-[#2C3531]/70 leading-relaxed">
                {t.method3Desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAF6] border border-[#334E3B]/10 hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-xl font-bold">
                04
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.method4Title}</h3>
              <p className="text-sm text-[#2C3531]/70 leading-relaxed">
                {t.method4Desc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* THE 4-STEP JOURNEY SECTION */}
      <section id="audio-guide" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#334E3B]/10 text-[#334E3B] text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#334E3B]" />
              <span>{t.journeyTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2C3531] tracking-tight">
              {t.journeyTitle}
            </h2>
            <p className="text-[#2C3531]/70 leading-relaxed text-base sm:text-lg">
              {t.journeySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 01 */}
            <div className="bg-[#F8FAF6] rounded-2xl rounded-tr-3xl p-8 border border-[#334E3B]/10 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                    01
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.step1Title}</h3>
                <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                  {t.step1Desc}
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-[#F8FAF6] rounded-2xl rounded-tr-3xl p-8 border border-[#334E3B]/10 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                    02
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.step2Title}</h3>
                <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                  {t.step2Desc}
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-[#F8FAF6] rounded-2xl rounded-tr-3xl p-8 border border-[#334E3B]/10 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                    03
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.step3Title}</h3>
                <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                  {t.step3Desc}
                </p>
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-[#F8FAF6] rounded-2xl rounded-tr-3xl p-8 border border-[#334E3B]/10 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#334E3B] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                    04
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.step4Title}</h3>
                <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                  {t.step4Desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* RME THERAPIST DIRECTORY SECTION */}
      <section id="terapiste" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.therapistsTag}</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C3531]">
                {t.therapistsTitle}
              </h2>
              <p className="text-[#2C3531]/70">
                {t.therapistsSubtitle}
              </p>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap gap-2 bg-[#F8FAF6] p-1.5 rounded-xl border border-[#334E3B]/10">
              <button 
                onClick={() => setSelectedRegion('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${selectedRegion === 'all' ? 'bg-[#334E3B] text-white shadow-sm' : 'text-[#2C3531]/70 hover:text-[#2C3531]'}`}
              >
                {t.filterAll}
              </button>
              <button 
                onClick={() => setSelectedRegion('lugano')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${selectedRegion === 'lugano' ? 'bg-[#334E3B] text-white shadow-sm' : 'text-[#2C3531]/70 hover:text-[#2C3531]'}`}
              >
                {t.filterLugano}
              </button>
              <button 
                onClick={() => setSelectedRegion('online')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${selectedRegion === 'online' ? 'bg-[#334E3B] text-white shadow-sm' : 'text-[#2C3531]/70 hover:text-[#2C3531]'}`}
              >
                {t.filterOnline}
              </button>
            </div>
          </div>

          {/* Therapist Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTherapists.map((tItem) => (
              <div key={tItem.id} className="bg-[#F8FAF6] rounded-2xl overflow-hidden border border-[#334E3B]/10 flex flex-col justify-between hover:shadow-xl transition-all group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tItem.image} 
                      alt={tItem.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#334E3B] shadow-sm">
                      {tItem.rmeNumber}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-[#334E3B] font-semibold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{tItem.location}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#2C3531]">{tItem.name}</h3>
                      <p className="text-xs text-[#2C3531]/70">{tItem.title}</p>
                    </div>

                    <p className="text-xs text-[#2C3531]/80 leading-relaxed">
                      {tItem.specialization}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {tItem.languages.map((lItem, idx) => (
                        <span key={idx} className="text-[10px] bg-[#334E3B]/10 text-[#334E3B] px-2 py-0.5 rounded font-medium">
                          {lItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => { setSelectedTherapist(tItem.name); setBookingModalOpen(true); }}
                    className="w-full py-3 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] transition-colors shadow-sm cursor-pointer"
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
      <section id="rimborso" className="py-20 px-6 lg:px-12 bg-[#F0F4EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.reimburseTag}</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C3531]">
              {t.reimburseTitle}
            </h2>
            <p className="text-[#2C3531]/80 leading-relaxed">
              {t.reimburseP1}
            </p>
            <p className="text-[#2C3531]/80 leading-relaxed">
              {t.reimburseP2}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-sm text-[#2C3531]">{t.reimburseCheck1}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-sm text-[#2C3531]">{t.reimburseCheck2}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-sm text-[#2C3531]">{t.reimburseCheck3}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#334E3B]/10 shadow-lg space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#2C3531]">{t.reimburseStepsTitle}</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#334E3B] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-[#2C3531]">{t.reimburseStep1Title}</h4>
                  <p className="text-xs text-[#2C3531]/70 mt-0.5">{t.reimburseStep1Desc}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#334E3B] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-[#2C3531]">{t.reimburseStep2Title}</h4>
                  <p className="text-xs text-[#2C3531]/70 mt-0.5">{t.reimburseStep2Desc}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#334E3B] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-[#2C3531]">{t.reimburseStep3Title}</h4>
                  <p className="text-xs text-[#2C3531]/70 mt-0.5">{t.reimburseStep3Desc}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => { setSelectedTherapist(''); setBookingModalOpen(true); }}
              className="w-full py-3.5 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] transition-colors shadow-sm cursor-pointer"
            >
              {t.reimburseCta}
            </button>
          </div>

        </div>
      </section>

      {/* ASTA: CHI SIAMO SECTION */}
      <section id="chi-siamo" aria-labelledby="chi-siamo-heading" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="relative max-w-3xl space-y-4">
            <h2 id="chi-siamo-heading" className="text-3xl sm:text-4xl font-serif font-bold text-[#2C3531] relative">
              <span className="absolute -top-10 left-0 text-7xl sm:text-8xl font-serif font-bold text-[#334E3B]/5 select-none pointer-events-none" aria-hidden="true">
                Ticino
              </span>
              <span className="relative z-10">{t.asta.title}</span>
            </h2>
            <p className="text-[#2C3531]/80 leading-relaxed text-base sm:text-lg">
              {t.asta.intro}
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-serif font-bold text-[#2C3531]">
              {t.asta.goalsTitle}
            </h3>

            <ol role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.asta.goals.map((goalText, idx) => {
                const goalNum = String(idx + 1).padStart(2, '0');
                return (
                  <li key={idx} className="bg-[#F8FAF6] rounded-2xl p-6 border border-[#334E3B]/10 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-sm text-[#334E3B] tracking-widest">
                        {goalNum}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#334E3B]/10 flex items-center justify-center text-[#D48482]">
                        <svg className="w-4 h-4 text-[#D48482]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-[#2D2424] leading-relaxed">
                      {goalText}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#334E3B]">{t.faqTag}</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C3531]">
              {t.faqTitle}
            </h2>
          </div>

          <div className="space-y-4">
            
            <div className="border border-[#334E3B]/10 rounded-2xl overflow-hidden bg-[#F8FAF6]">
              <button 
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center gap-4 text-[#2C3531]"
              >
                <span>{t.faq1Q}</span>
                <ChevronDown className={`w-5 h-5 text-[#334E3B] transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-5 text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#334E3B]/10 pt-4">
                  {t.faq1A}
                </div>
              )}
            </div>

            <div className="border border-[#334E3B]/10 rounded-2xl overflow-hidden bg-[#F8FAF6]">
              <button 
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center gap-4 text-[#2C3531]"
              >
                <span>{t.faq2Q}</span>
                <ChevronDown className={`w-5 h-5 text-[#334E3B] transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-5 text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#334E3B]/10 pt-4">
                  {t.faq2A}
                </div>
              )}
            </div>

            <div className="border border-[#334E3B]/10 rounded-2xl overflow-hidden bg-[#F8FAF6]">
              <button 
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center gap-4 text-[#2C3531]"
              >
                <span>{t.faq3Q}</span>
                <ChevronDown className={`w-5 h-5 text-[#334E3B] transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-5 text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#334E3B]/10 pt-4">
                  {t.faq3A}
                </div>
              )}
            </div>

            <div className="border border-[#334E3B]/10 rounded-2xl overflow-hidden bg-[#F8FAF6]">
              <button 
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center gap-4 text-[#2C3531]"
              >
                <span>{t.faq4Q}</span>
                <ChevronDown className={`w-5 h-5 text-[#334E3B] transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-5 text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#334E3B]/10 pt-4">
                  {t.faq4A}
                </div>
              )}
            </div>

            <div className="border border-[#334E3B]/10 rounded-2xl overflow-hidden bg-[#F8FAF6]">
              <button 
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center gap-4 text-[#2C3531]"
              >
                <span>{t.faq5Q}</span>
                <ChevronDown className={`w-5 h-5 text-[#334E3B] transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-5 text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#334E3B]/10 pt-4">
                  {t.faq5A}
                </div>
              )}
            </div>

            <div className="border border-[#334E3B]/10 rounded-2xl overflow-hidden bg-[#F8FAF6]">
              <button 
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center gap-4 text-[#2C3531]"
              >
                <span>{t.faq6Q}</span>
                <ChevronDown className={`w-5 h-5 text-[#334E3B] transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 5 && (
                <div className="px-6 pb-5 text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#334E3B]/10 pt-4">
                  {t.faq6A}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C3531] text-white py-16 px-6 lg:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          <div className="space-y-4 md:col-span-2">
            <AstaBrand subtitleText={t.brandSubtitle} variant="light" size={38} />
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373]">{t.footerSedeTitle}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Via Nassa 29, 6900 Lugano</li>
              <li>{ORG_SEDE}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373]">{t.footerContactTitle}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A373]" />
                <span>{ORG_PHONE}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A373]" />
                <a href={`mailto:${ORG_EMAIL}`} className="hover:underline">{ORG_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4A373]" />
                <span>{t.footerHours}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {ORG_NAME} — {t.rightsText}</p>
          <div className="flex gap-6">
            <button onClick={() => setLegalModalOpen(true)} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs text-white/50">{t.footerLegal}</button>
            <button onClick={() => setPrivacyModalOpen(true)} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-xs text-white/50">{t.footerPrivacy}</button>
            <a href="#rimborso" className="hover:text-white transition-colors">{t.footerRme}</a>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative border border-[#334E3B]/10 max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#2C3531]/60 hover:text-[#2C3531] hover:bg-[#F8FAF6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#334E3B]/10 text-[#334E3B] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2C3531]">{t.modalSuccessTitle}</h3>
                <p className="text-sm text-[#2C3531]/70 max-w-xs mx-auto">
                  {t.modalSuccessDesc} Email: <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">{ORG_EMAIL}</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#334E3B]">{t.modalBookingTitle}</p>
                  <h3 className="text-2xl font-serif font-bold text-[#2C3531] mt-1">
                    {selectedTherapist ? `${t.bookButton} ${selectedTherapist}` : t.modalBookingSub}
                  </h3>
                  <p className="text-xs text-[#2C3531]/70 mt-1">
                    {ORG_SEDE} — {ORG_EMAIL}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C3531] mb-1">{t.fieldName}</label>
                    <input 
                      type="text" 
                      required
                      placeholder="es. Anna Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3531] mb-1">{t.fieldEmail}</label>
                      <input 
                        type="email" 
                        required
                        placeholder="tu@email.ch"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2C3531] mb-1">{t.fieldPhone}</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+41 79 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C3531] mb-1">{t.fieldLocation}</label>
                    <select 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                    >
                      <option value="Lugano Centro">Lugano Centro (Via Nassa 29)</option>
                      <option value="Online Videoconferenza">Online / Videoconferenza (Svizzera)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2C3531] mb-1">{t.fieldNotes}</label>
                    <textarea 
                      rows={3}
                      placeholder="Es. Gestione ansia da stress lavorativo, disturbi del sonno..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                    ></textarea>
                  </div>

                  {/* nLPD & GDPR Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input 
                      type="checkbox" 
                      id="privacyConsent"
                      required
                      checked={bookingConsentChecked}
                      onChange={(e) => setBookingConsentChecked(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-[#334E3B] focus:ring-[#334E3B] border-[#334E3B]/30 cursor-pointer shrink-0"
                    />
                    <label htmlFor="privacyConsent" className="text-xs text-[#2C3531]/80 leading-relaxed cursor-pointer">
                      {t.fieldConsent} <button type="button" onClick={() => { setBookingModalOpen(false); setPrivacyModalOpen(true); }} className="text-[#334E3B] underline font-semibold hover:text-[#25392a]">Informativa sulla Privacy (nLPD / GDPR)</button>. *
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] transition-colors shadow-md cursor-pointer"
                >
                  {t.submitButton}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* COOKIE CONSENT BANNER (nLPD & GDPR) */}
      {cookieConsent === 'pending' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C3531] text-white p-4 sm:p-6 shadow-2xl border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left max-w-3xl">
            <p className="text-sm font-semibold text-[#D4A373]">Informativa sui Cookie e sulla Privacy (nLPD & GDPR)</p>
            <p className="text-xs text-white/80 leading-relaxed">
              {t.cookieBannerText}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button 
              onClick={() => {
                localStorage.setItem('asta_cookie_consent', 'rejected');
                setCookieConsent('rejected');
              }}
              className="px-4 py-2 text-xs font-semibold bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              {t.cookieOnlyNec}
            </button>
            <button 
              onClick={() => setCookiePrefsOpen(true)}
              className="px-4 py-2 text-xs font-semibold bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              {t.cookieCustom}
            </button>
            <button 
              onClick={() => {
                localStorage.setItem('asta_cookie_consent', 'accepted');
                setCookieConsent('accepted');
              }}
              className="px-5 py-2 text-xs font-semibold bg-[#D4A373] text-[#2C3531] hover:bg-[#c39263] rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              {t.cookieAcceptAll}
            </button>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY MODAL (nLPD & GDPR COMPLIANT) */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#334E3B]/10 max-h-[90vh] flex flex-col">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#334E3B]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#2C3531]">{t.privacyModalTitle}</h3>
                  <p className="text-xs text-[#2C3531]/70">{ORG_NAME}</p>
                </div>
              </div>
              <button 
                onClick={() => setPrivacyModalOpen(false)}
                className="p-2 rounded-full text-[#2C3531]/60 hover:text-[#2C3531] hover:bg-[#F8FAF6] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#334E3B]/10 gap-6 mt-4">
              <button 
                onClick={() => setPrivacyTab('policy')}
                className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${privacyTab === 'policy' ? 'border-[#334E3B] text-[#334E3B]' : 'border-transparent text-[#2C3531]/60 hover:text-[#2C3531]'}`}
              >
                {t.tabPolicy}
              </button>
              <button 
                onClick={() => setPrivacyTab('rights')}
                className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${privacyTab === 'rights' ? 'border-[#334E3B] text-[#334E3B]' : 'border-transparent text-[#2C3531]/60 hover:text-[#2C3531]'}`}
              >
                {t.tabRights}
              </button>
              <button 
                onClick={() => setPrivacyTab('cookies')}
                className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${privacyTab === 'cookies' ? 'border-[#334E3B] text-[#334E3B]' : 'border-transparent text-[#2C3531]/60 hover:text-[#2C3531]'}`}
              >
                {t.tabCookies}
              </button>
            </div>

            <div className="py-6 overflow-y-auto space-y-6 text-sm text-[#2C3531]/80 leading-relaxed pr-2">
              {privacyTab === 'policy' && (
                <div className="space-y-4">
                  <div className="p-4 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10 space-y-1">
                    <p className="text-xs font-bold text-[#334E3B] uppercase tracking-wider">Titolare del Trattamento</p>
                    <p className="font-semibold text-[#2C3531]">{ORG_NAME}</p>
                    <p className="text-xs text-[#2C3531]/70">{ORG_SEDE} • Email: <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">{ORG_EMAIL}</a></p>
                  </div>

                  <h4 className="font-serif font-bold text-lg text-[#2C3531] pt-2">1. Finalità e Base Giuridica del Trattamento</h4>
                  <p>
                    In conformità alla nuova Legge federale sulla protezione dei dati (nLPD) svizzera e al Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea, la presente informativa descrive le modalità di raccolta e trattamento dei dati personali degli utenti.
                  </p>
                  <p>
                    I dati forniti volontariamente tramite il modulo di prenotazione (nome, email, telefono, sede preferita, note terapeutiche) vengono trattati esclusivamente per organizzare e confermare il primo colloquio orientativo e per contattare la sede centrale di Lugano ({ORG_EMAIL}).
                  </p>
                </div>
              )}

              {privacyTab === 'rights' && (
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-lg text-[#2C3531]">Esercizio dei Diritti dell'Interessato</h4>
                  <p>
                    In qualità di interessato, la nLPD e il GDPR ti riconoscono specifici diritti di accesso, rettifica, cancellazione e portabilità dei dati.
                  </p>

                  <div className="p-5 rounded-xl bg-[#F0F4EE] border border-[#334E3B]/20 space-y-3 mt-4">
                    <p className="font-semibold text-[#2C3531] text-xs uppercase tracking-wider">Strumenti Privacy Immediati</p>
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={() => {
                          const exportData = {
                            org: ORG_NAME,
                            email: ORG_EMAIL,
                            timestamp: new Date().toISOString(),
                            cookieConsent: cookieConsent,
                            savedForms: localStorage.getItem('asta_booking_history') || 'Nessun invio precedente salvato'
                          };
                          const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = 'asta_privacy_export.json';
                          a.click();
                          setRightsActionMessage('Dati esportati con successo in formato JSON.');
                        }}
                        className="px-4 py-2.5 bg-[#334E3B] text-white text-xs font-semibold rounded-lg hover:bg-[#25392a] transition-colors cursor-pointer"
                      >
                        Esporta i miei dati (JSON)
                      </button>
                      <button 
                        onClick={() => {
                          localStorage.removeItem('asta_cookie_consent');
                          setCookieConsent('pending');
                          setRightsActionMessage('Preferenze cookie e consensi locali resettati con successo.');
                        }}
                        className="px-4 py-2.5 bg-white border border-[#334E3B]/30 text-[#334E3B] text-xs font-semibold rounded-lg hover:bg-[#334E3B]/5 transition-colors cursor-pointer"
                      >
                        Revoca Consensi e Cookie
                      </button>
                    </div>
                    {rightsActionMessage && (
                      <p className="text-xs text-[#334E3B] font-medium pt-1 animate-fadeIn">✓ {rightsActionMessage}</p>
                    )}
                  </div>

                  <p className="text-xs text-[#2C3531]/70 pt-2">
                    Per qualsiasi richiesta formale, contatta <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">{ORG_EMAIL}</a>.
                  </p>
                </div>
              )}

              {privacyTab === 'cookies' && (
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-lg text-[#2C3531]">Informativa sui Cookie</h4>
                  <p>
                    Questo sito utilizza cookie tecnici essenziali e cookie analitici opzionali per la misurazione statistica dell'utenza.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#334E3B]/10 flex justify-end">
              <button 
                onClick={() => setPrivacyModalOpen(false)}
                className="px-6 py-2.5 bg-[#334E3B] text-white text-xs font-semibold rounded-xl hover:bg-[#25392a] transition-colors cursor-pointer"
              >
                {t.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* LEGAL NOTICE MODAL (IMPRESSUM) */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#334E3B]/10 max-h-[90vh] overflow-y-auto space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#334E3B]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#2C3531]">Note Legali & Impressum</h3>
                  <p className="text-xs text-[#2C3531]/70">{ORG_NAME}</p>
                </div>
              </div>
              <button 
                onClick={() => setLegalModalOpen(false)}
                className="p-2 rounded-full text-[#2C3531]/60 hover:text-[#2C3531] hover:bg-[#F8FAF6] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#2C3531]/80 leading-relaxed">
              <div className="p-4 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10 space-y-2">
                <p className="text-xs font-bold text-[#334E3B] uppercase tracking-wider">Informazioni Istituzionali</p>
                <p><strong className="text-[#2C3531]">Ente:</strong> {ORG_NAME}</p>
                <p><strong className="text-[#2C3531]">Sede Centrale:</strong> {ORG_SEDE} (Via Nassa 29, Lugano)</p>
                <p><strong className="text-[#2C3531]">Contatto Email:</strong> <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">{ORG_EMAIL}</a></p>
                <p><strong className="text-[#2C3531]">Telefono Segreteria:</strong> {ORG_PHONE}</p>
              </div>

              <h4 className="font-serif font-bold text-base text-[#2C3531] pt-2">Accreditamenti Professionali</h4>
              <p>
                Le terapiste associate ad ASTA sono riconosciute dal Registro Medicina Empirica (RME) e dall'associazione ASCA, soddisfacendo i rigorosi standard qualitativi svizzeri.
              </p>
            </div>

            <div className="pt-4 border-t border-[#334E3B]/10 flex justify-end">
              <button 
                onClick={() => setLegalModalOpen(false)}
                className="px-6 py-2.5 bg-[#334E3B] text-white text-xs font-semibold rounded-xl hover:bg-[#25392a] transition-colors cursor-pointer"
              >
                {t.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* COOKIE PREFERENCES MODAL */}
      {cookiePrefsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#334E3B]/10 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#334E3B]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#2C3531]">Preferenze Cookie</h3>
                  <p className="text-xs text-[#2C3531]/70">Gestione consensi</p>
                </div>
              </div>
              <button 
                onClick={() => setCookiePrefsOpen(false)}
                className="p-2 rounded-full text-[#2C3531]/60 hover:text-[#2C3531] hover:bg-[#F8FAF6] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#2C3531]/80">
              <div className="flex items-start justify-between gap-4 p-3.5 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10">
                <div>
                  <p className="font-semibold text-xs text-[#2C3531]">Cookie Tecnici</p>
                  <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Essenziali per la navigazione e memorizzazione delle preferenze.</p>
                </div>
                <input type="checkbox" checked disabled className="mt-1 w-4 h-4 accent-[#334E3B] cursor-not-allowed" />
              </div>

              <div className="flex items-start justify-between gap-4 p-3.5 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10">
                <div>
                  <p className="font-semibold text-xs text-[#2C3531]">Cookie Analitici</p>
                  <p className="text-[11px] text-[#2C3531]/70 mt-0.5">Statistiche anonime di utilizzo della piattaforma.</p>
                </div>
                <input 
                  type="checkbox" 
                  id="analyticsToggle" 
                  defaultChecked={cookieConsent === 'accepted'}
                  className="mt-1 w-4 h-4 accent-[#334E3B] cursor-pointer" 
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button 
                onClick={() => {
                  localStorage.setItem('asta_cookie_consent', 'rejected');
                  setCookieConsent('rejected');
                  setCookiePrefsOpen(false);
                }}
                className="flex-1 py-2.5 bg-white border border-[#334E3B]/30 text-[#2C3531] text-xs font-semibold rounded-xl hover:bg-[#334E3B]/5 transition-colors cursor-pointer"
              >
                Rifiuta Tutti
              </button>
              <button 
                onClick={() => {
                  localStorage.setItem('asta_cookie_consent', 'accepted');
                  setCookieConsent('accepted');
                  setCookiePrefsOpen(false);
                }}
                className="flex-1 py-2.5 bg-[#334E3B] text-white text-xs font-semibold rounded-xl hover:bg-[#25392a] transition-colors shadow-sm cursor-pointer"
              >
                Salva Preferenze
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
