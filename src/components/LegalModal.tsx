/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { LegalContent } from '../i18n/types';
import type { CookieConsentRecord } from '../consent';
import { Paragraphs } from './Paragraphs';

export type LegalDocType = 'privacy' | 'cookies';

interface LegalModalProps {
  docType: LegalDocType | null;
  legal: LegalContent;
  consent: CookieConsentRecord | null;
  onClose: () => void;
  onSwitchDoc: (next: LegalDocType) => void;
  onOpenCookieSettings: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  docType,
  legal,
  consent,
  onClose,
  onSwitchDoc,
  onOpenCookieSettings,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!docType) return;

    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      prevFocus?.focus();
    };
  }, [docType, onClose]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [docType]);

  if (!docType) return null;

  const isPrivacy = docType === 'privacy';
  const title = isPrivacy ? legal.privacyTitle : legal.cookiesTitle;
  const intro = isPrivacy ? legal.privacyIntro : legal.cookiesIntro;
  const sections = isPrivacy ? legal.privacySections : legal.cookiesSections;
  const otherDoc: LegalDocType = isPrivacy ? 'cookies' : 'privacy';
  const otherLabel = isPrivacy ? legal.cookiesLabel : legal.privacyLabel;

  const currentPreferenceText =
    consent?.choice === 'all'
      ? legal.preferenceAllLabel
      : consent?.choice === 'essential'
        ? legal.preferenceEssentialLabel
        : legal.preferenceNoneLabel;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#142219]/45 backdrop-blur-[2px] animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[760px] max-h-[88svh] rounded-[22px] sm:rounded-[28px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.16)] shadow-2xl flex flex-col overflow-hidden animate-rise">
        <div className="flex items-start justify-between gap-4 px-5 py-4 sm:px-7 sm:py-5 border-b border-[rgba(36,56,43,0.12)] bg-[#F6F3EA]/70 shrink-0">
          <div>
            <h2
              id="legal-modal-title"
              className="font-serif font-semibold text-[24px] sm:text-[30px] leading-[1.15] text-[#24382B]"
            >
              {title}
            </h2>
            <p className="mt-1 text-[12.5px] sm:text-[13px] text-[#4F5E55]">
              {legal.lastUpdated}
            </p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={legal.closeModalLabel}
            className="min-w-[44px] min-h-[44px] -mr-1.5 flex items-center justify-center rounded-full text-[#24382B] hover:bg-[#3E5B47]/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6 space-y-6 text-left overscroll-contain"
        >
          <div className="space-y-3 text-[15.5px] sm:text-[16.5px] leading-[1.7] text-[#23302A] max-w-[65ch]">
            <Paragraphs text={intro} />
          </div>

          <div className="space-y-5 max-w-[65ch]">
            {sections.map((section) => (
              <section key={section.title} className="space-y-2 pt-4 border-t border-[rgba(36,56,43,0.10)]">
                <h3 className="font-serif font-semibold text-[20px] sm:text-[23px] leading-[1.2] text-[#24382B]">
                  {section.title}
                </h3>
                <div className="space-y-2.5 text-[15px] sm:text-[16px] leading-[1.7] text-[#4F5E55]">
                  <Paragraphs text={section.body} />
                </div>
              </section>
            ))}
          </div>

          {!isPrivacy && (
            <section className="space-y-4 pt-4 border-t border-[rgba(36,56,43,0.10)]">
              <h3 className="font-serif font-semibold text-[20px] sm:text-[23px] leading-[1.2] text-[#24382B]">
                {legal.cookiesTableHeading}
              </h3>

              <div className="overflow-x-auto rounded-2xl border border-[rgba(36,56,43,0.12)] bg-[#F6F3EA]/55">
                <table className="w-full text-left border-collapse text-[13.5px] sm:text-[14.5px]">
                  <thead>
                    <tr className="border-b border-[rgba(36,56,43,0.12)] text-[#24382B]">
                      <th className="py-3 px-4 font-semibold">{legal.cookiesColName}</th>
                      <th className="py-3 px-4 font-semibold">{legal.cookiesColPurpose}</th>
                      <th className="py-3 px-4 font-semibold">{legal.cookiesColCategory}</th>
                      <th className="py-3 px-4 font-semibold">{legal.cookiesColDuration}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(36,56,43,0.10)] text-[#4F5E55]">
                    {legal.cookiesItems.map((entry) => (
                      <tr key={entry.name}>
                        <td className="py-3 px-4 font-mono text-[12.5px] text-[#24382B] whitespace-nowrap align-top">
                          {entry.name}
                        </td>
                        <td className="py-3 px-4 align-top leading-[1.55]">{entry.purpose}</td>
                        <td className="py-3 px-4 align-top whitespace-nowrap">{entry.category}</td>
                        <td className="py-3 px-4 align-top leading-[1.55]">{entry.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl bg-[#E6EFEA]/65 border border-[rgba(36,56,43,0.12)] px-4 py-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-[14px] text-[#24382B]">
                  <span>{legal.currentPreferenceLabel} </span>
                  <strong className="font-semibold">{currentPreferenceText}</strong>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCookieSettings();
                  }}
                  className="min-h-[40px] px-4 rounded-full font-semibold text-[13.5px] bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {legal.cookieSettingsLabel}
                </button>
              </div>
            </section>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 sm:px-7 border-t border-[rgba(36,56,43,0.12)] bg-[#F6F3EA]/70 shrink-0 pb-safe">
          <button
            type="button"
            onClick={() => onSwitchDoc(otherDoc)}
            className="text-[14px] font-medium text-[#24382B] underline underline-offset-4 hover:text-[#3E5B47] transition-colors cursor-pointer bg-transparent border-0 p-0"
          >
            {otherLabel}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[42px] px-6 rounded-full font-semibold text-[14px] bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap cursor-pointer"
          >
            {legal.closeModalLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
