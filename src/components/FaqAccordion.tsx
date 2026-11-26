/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CONTACT_EMAIL, MAILTO_HREF, type FaqItem } from '../config';

interface FaqAccordionProps {
  items: readonly FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div className="mt-6 mx-auto max-w-[640px] rounded-2xl bg-[#F6F3EA] border border-[rgba(36,56,43,0.14)] px-6 py-5 text-[#23302A]">
        <p className="text-[17px]">
          Vedi e-mail:{' '}
          <a
            href={MAILTO_HREF}
            className="font-semibold text-[#24382B] underline underline-offset-4 hover:text-[#3E5B47] transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-7 mx-auto max-w-[760px] text-left border-t border-[rgba(36,56,43,0.14)]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="border-b border-[rgba(36,56,43,0.14)]">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="relative w-full min-h-[52px] text-left py-4 sm:py-[18px] pr-10 font-sans font-semibold text-[16px] sm:text-[18px] leading-[1.4] text-[#24382B] cursor-pointer bg-transparent border-0"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`absolute right-1 top-1/2 -translate-y-1/2 text-[24px] sm:text-[26px] font-normal text-[#3E5B47] transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-4 sm:pb-5 text-[#4F5E55] text-[15.5px] sm:text-[17px] leading-[1.65]"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
