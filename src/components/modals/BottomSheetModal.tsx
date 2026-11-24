/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BottomSheetModalProps {
  onClose: () => void;
  maxWidthClass?: string;
  closeLabel?: string;
  ariaLabelledBy?: string;
  children: React.ReactNode;
}

export const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  onClose,
  maxWidthClass = 'max-w-lg',
  closeLabel = 'Chiudi',
  ariaLabelledBy,
  children,
}) => {
  useEffect(() => {
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
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledBy}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-white rounded-t-3xl sm:rounded-2xl ${maxWidthClass} w-full p-5 pt-3 sm:p-8 shadow-2xl relative border border-[#334E3B]/10 max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto overscroll-contain animate-sheetUp pb-safe`}
      >
        <div className="sm:hidden w-10 h-1.5 bg-[#334E3B]/20 rounded-full mx-auto mb-3" aria-hidden="true" />
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-[#2C3531]/65 hover:text-[#2C3531] hover:bg-[#F8FAF6] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};
