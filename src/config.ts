/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IT_CONTENT } from './i18n/it';
import type { Lang, LocaleContent } from './i18n/types';

export {
  LANGS,
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  LANG_OPTIONS,
  type Lang,
  type LangOption,
  type NavItem,
  type FaqItem,
  type TherapistLocalized,
  type LocaleContent,
} from './i18n/types';

export { IT_CONTENT };

export const CONTACT_EMAIL = 'info@associazioneta.ch';
export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;
export const LOGO_SRC = '/assets/aistudio/logo_asta_trainig_5603fac5.jpeg';
export const HERO_LOGO_SRC =
  '/assets/aistudio/Transforming_image_into_website___8d8967ee_3c79a84b.jpg';
export const RELAX_IMAGE_SRC =
  '/assets/aistudio/Woman_relaxing_on_therapy_chaise_3faef438_ae1d5a2b.jpg';

export async function loadLocale(lang: Lang): Promise<LocaleContent> {
  switch (lang) {
    case 'de': {
      const mod = await import('./i18n/de');
      return mod.DE_CONTENT;
    }
    case 'fr': {
      const mod = await import('./i18n/fr');
      return mod.FR_CONTENT;
    }
    case 'en': {
      const mod = await import('./i18n/en');
      return mod.EN_CONTENT;
    }
    case 'it':
    default:
      return IT_CONTENT;
  }
}
