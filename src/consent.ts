/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CONSENT_STORAGE_KEY = 'asta_cookie_consent';
export const CONSENT_VERSION = '1.0';

export type CookieConsentChoice = 'essential' | 'all';

export interface CookieConsentRecord {
  choice: CookieConsentChoice;
  updatedAt: string;
  version: string;
}

export function readConsent(): CookieConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsentRecord>;
    if (
      (parsed.choice === 'essential' || parsed.choice === 'all') &&
      typeof parsed.updatedAt === 'string' &&
      parsed.version === CONSENT_VERSION
    ) {
      return {
        choice: parsed.choice,
        updatedAt: parsed.updatedAt,
        version: parsed.version,
      };
    }
  } catch {
    // ignore storage or parse errors
  }
  return null;
}

export function saveConsent(choice: CookieConsentChoice): CookieConsentRecord {
  const record: CookieConsentRecord = {
    choice,
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // ignore storage errors
  }
  return record;
}
