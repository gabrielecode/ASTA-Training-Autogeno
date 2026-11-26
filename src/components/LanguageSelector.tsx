/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { LANG_OPTIONS, type Lang } from '../config';

interface LanguageSelectorProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
  ariaLabel: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  lang,
  onChange,
  ariaLabel,
}) => {
  return (
    <div className="relative inline-flex items-center">
      <Globe
        aria-hidden="true"
        className="pointer-events-none absolute left-2.5 sm:left-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3E5B47]"
      />
      <select
        id="language-select"
        aria-label={ariaLabel}
        value={lang}
        onChange={(e) => onChange(e.target.value as Lang)}
        className="appearance-none bg-[#FCFBF7] border border-[rgba(36,56,43,0.18)] hover:border-[#3E5B47] rounded-full min-h-[38px] sm:min-h-[42px] pl-7 sm:pl-8 pr-7 sm:pr-8 font-semibold text-[12px] sm:text-[13px] tracking-[0.02em] text-[#24382B] cursor-pointer transition-colors"
      >
        {LANG_OPTIONS.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-2 sm:right-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3E5B47]"
      />
    </div>
  );
};
