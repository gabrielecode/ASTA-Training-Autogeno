/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { AstaBrand } from './AstaLogo';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  brandSubtitle: string;
  links: Array<{ href: string; label: string }>;
  ctaLabel: string;
  onBook: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  brandSubtitle,
  links,
  ctaLabel,
  onBook,
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
      aria-label="Menu di navigazione"
    >
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className="relative z-10 w-[84vw] max-w-sm h-full bg-[#F8FAF6] shadow-2xl border-l border-[#334E3B]/10 flex flex-col justify-between animate-drawerIn overscroll-contain">
        <div className="flex items-center justify-between px-5 h-14 border-b border-[#334E3B]/10 shrink-0">
          <AstaBrand subtitleText={brandSubtitle} variant="dark" size={32} compactOnMobile />
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi menu"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-[#334E3B] hover:bg-[#334E3B]/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between min-h-[48px] px-3 py-2.5 rounded-xl text-base font-medium text-[#2C3531] hover:bg-white active:bg-[#334E3B]/5 transition-colors"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-[#334E3B]/50" />
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-[#334E3B]/10 bg-white pb-safe">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBook();
            }}
            className="w-full min-h-[48px] py-3 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#334E3B] rounded-xl hover:bg-[#25392a] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
          >
            {ctaLabel}
          </button>
        </div>
      </aside>
    </div>
  );
};
