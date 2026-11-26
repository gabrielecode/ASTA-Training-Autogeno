/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import type { LegalContent } from '../i18n/types';
import type { CookieConsentChoice } from '../consent';

interface CookieBannerProps {
  open: boolean;
  legal: LegalContent;
  onSelect: (choice: CookieConsentChoice) => void;
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  open,
  legal,
  onSelect,
  onOpenPrivacy,
  onOpenCookies,
}) => {
  if (!open) return null;

  return (
    <aside
      role="region"
      aria-label={legal.bannerAriaLabel}
      className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[min(1120px,calc(100%-24px))] sm:bottom-5 z-40 rounded-[18px] sm:rounded-[24px] bg-[#FCFBF7] border border-[rgba(36,56,43,0.18)] shadow-[0_14px_38px_rgba(20,34,25,0.16)] p-3.5 sm:p-5 pb-safe animate-rise"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4 lg:gap-8">
        <div className="max-w-[70ch] space-y-1">
          <h2 className="font-serif font-semibold text-[18px] sm:text-[21px] leading-[1.2] text-[#24382B]">
            {legal.bannerTitle}
          </h2>
          <p className="text-[13px] sm:text-[14.5px] leading-[1.5] text-[#4F5E55]">
            {legal.bannerText}
          </p>
          <div className="pt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] sm:text-[13.5px] font-medium text-[#24382B]">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="underline underline-offset-4 hover:text-[#3E5B47] transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              {legal.privacyLabel}
            </button>
            <span aria-hidden="true" className="text-[#4F5E55]/60">
              ·
            </span>
            <button
              type="button"
              onClick={onOpenCookies}
              className="underline underline-offset-4 hover:text-[#3E5B47] transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              {legal.cookiesLabel}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => onSelect('essential')}
            className="min-h-[42px] px-3 sm:px-5 rounded-full font-semibold text-[13.5px] sm:text-[14px] border border-[#3E5B47] text-[#24382B] bg-transparent hover:bg-[#E6EFEA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {legal.bannerEssentialBtn}
          </button>
          <button
            type="button"
            onClick={() => onSelect('all')}
            className="min-h-[42px] px-3 sm:px-5 rounded-full font-semibold text-[13.5px] sm:text-[14px] bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {legal.bannerAcceptAllBtn}
          </button>
        </div>
      </div>
    </aside>
  );
};
