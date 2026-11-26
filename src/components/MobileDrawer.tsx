/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import {
  LOGO_SRC,
  MAILTO_HREF,
  LANG_OPTIONS,
  type Lang,
  type NavItem,
} from '../config';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: readonly NavItem[];
  logoAlt: string;
  navAriaLabel: string;
  closeLabel: string;
  ctaLabel: string;
  orgLocation: string;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  langSelectorLabel: string;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  links,
  logoAlt,
  navAriaLabel,
  closeLabel,
  ctaLabel,
  orgLocation,
  lang,
  onLangChange,
  langSelectorLabel,
}) => {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label={navAriaLabel}
    >
      <div
        className="fixed inset-0 bg-[#142219]/45 backdrop-blur-[2px] animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className="relative z-10 w-[84vw] max-w-sm h-full bg-[#FCFBF7] shadow-2xl border-l border-[rgba(36,56,43,0.14)] flex flex-col justify-between animate-drawerIn overscroll-contain">
        <div className="flex items-center justify-between px-5 h-[76px] border-b border-[rgba(36,56,43,0.14)] shrink-0">
          <a
            href="#top"
            onClick={onClose}
            aria-label={logoAlt}
            className="inline-flex items-center gap-2.5 font-serif font-bold text-[22px] tracking-[0.04em] text-[#24382B] no-underline whitespace-nowrap"
          >
            <img
              src={LOGO_SRC}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto mix-blend-multiply shrink-0"
            />
            <span>ASTA</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-[#24382B] hover:bg-[#3E5B47]/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav aria-label={navAriaLabel} className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between min-h-[48px] px-4 py-3 rounded-2xl text-[16px] font-medium text-[#23302A] hover:bg-[#E6EFEA]/60 transition-colors"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-[#3E5B47]/70" />
            </a>
          ))}

          <div className="pt-4 px-2">
            <div
              role="group"
              aria-label={langSelectorLabel}
              className="grid grid-cols-4 gap-2"
            >
              {LANG_OPTIONS.map((opt) => {
                const active = opt.code === lang;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => onLangChange(opt.code)}
                    aria-pressed={active}
                    className={`min-h-[42px] rounded-xl font-semibold text-[13px] transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#3E5B47] text-white'
                        : 'bg-[#F6F3EA] text-[#24382B] border border-[rgba(36,56,43,0.14)] hover:bg-[#E6EFEA]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="p-5 border-t border-[rgba(36,56,43,0.14)] bg-[#F6F3EA] pb-safe space-y-3">
          <a
            href={MAILTO_HREF}
            onClick={onClose}
            className="w-full inline-flex items-center justify-center min-h-[48px] px-6 rounded-full font-semibold text-[15px] no-underline bg-[#3E5B47] text-white hover:bg-[#24382B] transition-colors"
          >
            {ctaLabel}
          </a>
          <p className="text-[13px] text-[#4F5E55] text-center">{orgLocation}</p>
        </div>
      </aside>
    </div>
  );
};
