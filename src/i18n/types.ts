/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const LANGS = ['it', 'de', 'fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'it';
export const LANG_STORAGE_KEY = 'asta_lang';

export interface LangOption {
  code: Lang;
  label: string;
  nativeName: string;
}

export const LANG_OPTIONS: readonly LangOption[] = [
  { code: 'it', label: 'IT', nativeName: 'Italiano' },
  { code: 'de', label: 'DE', nativeName: 'Deutsch' },
  { code: 'fr', label: 'FR', nativeName: 'Français' },
  { code: 'en', label: 'EN', nativeName: 'English' },
];

export interface NavItem {
  href: string;
  label: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TherapistLocalized {
  id: string;
  name: string;
  details: string;
  rmeUrl: string;
}

export interface LegalSection {
  title: string;
  body: string;
}

export interface CookieStorageEntry {
  name: string;
  purpose: string;
  category: string;
  duration: string;
}

export interface LegalContent {
  privacyLabel: string;
  cookiesLabel: string;
  cookieSettingsLabel: string;
  closeModalLabel: string;
  lastUpdated: string;
  bannerAriaLabel: string;
  bannerTitle: string;
  bannerText: string;
  bannerEssentialBtn: string;
  bannerAcceptAllBtn: string;
  currentPreferenceLabel: string;
  preferenceEssentialLabel: string;
  preferenceAllLabel: string;
  preferenceNoneLabel: string;
  privacyTitle: string;
  privacyIntro: string;
  privacySections: readonly LegalSection[];
  cookiesTitle: string;
  cookiesIntro: string;
  cookiesSections: readonly LegalSection[];
  cookiesTableHeading: string;
  cookiesColName: string;
  cookiesColPurpose: string;
  cookiesColCategory: string;
  cookiesColDuration: string;
  cookiesItems: readonly CookieStorageEntry[];
}

export interface LocaleContent {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  orgName: string;
  orgLocation: string;
  logoAlt: string;
  navAriaLabel: string;
  mobileNavAriaLabel: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  langSelectorLabel: string;
  navLinks: readonly NavItem[];
  ctaContact: string;
  taTitle: string;
  taTitleLine2: string;
  taSubtitle: string;
  aboutHeading: string;
  aboutText: string;
  goalsHeading: string;
  goals: readonly string[];
  joinHeading: string;
  joinTherapistTitle: string;
  joinText: string;
  therapistsHeading: string;
  therapistRmeLabel: string;
  therapistRmeAriaPrefix: string;
  therapists: readonly TherapistLocalized[];
  imageAlt: string;
  methodHeading: string;
  methodParagraph1: string;
  methodParagraph2: string;
  benefitsHeading: string;
  physicalBenefitsHeading: string;
  physicalBenefits: readonly string[];
  psychicBenefitsHeading: string;
  psychicBenefits: readonly string[];
  disclaimerLabel: string;
  disclaimerText: string;
  whoHeading: string;
  whoText: string;
  howHeading: string;
  howText: string;
  recognitionHeading: string;
  recognitionText: string;
  supportHeading: string;
  supportLead: string;
  supportText: string;
  faqHeading: string;
  faqEmailNote: string;
  faqItems: readonly FaqItem[];
  contactHeading: string;
  emailLabel: string;
  legal: LegalContent;
}
