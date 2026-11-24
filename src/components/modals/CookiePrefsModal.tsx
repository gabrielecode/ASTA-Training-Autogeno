/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cookie } from 'lucide-react';
import { BottomSheetModal } from './BottomSheetModal';

interface CookiePrefsModalProps {
  cookieConsent: 'accepted' | 'rejected' | 'pending';
  onRejectAll: () => void;
  onSaveChoice: (acceptedAnalytics: boolean) => void;
  onClose: () => void;
}

export default function CookiePrefsModal({
  cookieConsent,
  onRejectAll,
  onSaveChoice,
  onClose,
}: CookiePrefsModalProps) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(cookieConsent === 'accepted');

  return (
    <BottomSheetModal
      onClose={onClose}
      maxWidthClass="max-w-md"
      closeLabel="Chiudi"
      ariaLabelledBy="cookie-prefs-title"
    >
      <div className="space-y-5">
        <div className="flex items-center gap-2.5 pb-4 pr-10 border-b border-[#334E3B]/10">
          <div className="w-9 h-9 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 id="cookie-prefs-title" className="text-lg sm:text-xl font-serif font-bold text-[#2C3531]">
              Preferenze Cookie
            </h3>
            <p className="text-xs text-[#2C3531]/70">Gestione consensi</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#2C3531]/80">
          <div className="flex items-start justify-between gap-4 p-3.5 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10">
            <div>
              <p className="font-semibold text-xs text-[#2C3531]">Cookie Tecnici</p>
              <p className="text-[11px] text-[#2C3531]/70 mt-0.5">
                Essenziali per la navigazione e memorizzazione delle preferenze.
              </p>
            </div>
            <input type="checkbox" checked disabled className="mt-1 w-5 h-5 sm:w-4 sm:h-4 accent-[#334E3B] cursor-not-allowed" />
          </div>

          <label className="flex items-start justify-between gap-4 p-3.5 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10 cursor-pointer">
            <div>
              <p className="font-semibold text-xs text-[#2C3531]">Cookie Analitici</p>
              <p className="text-[11px] text-[#2C3531]/70 mt-0.5">
                Statistiche anonime di utilizzo della piattaforma.
              </p>
            </div>
            <input
              type="checkbox"
              id="analyticsToggle"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              className="mt-1 w-5 h-5 sm:w-4 sm:h-4 accent-[#334E3B] cursor-pointer"
            />
          </label>
        </div>

        <div className="pt-2 flex gap-3">
          <button
            type="button"
            onClick={onRejectAll}
            className="flex-1 min-h-[44px] py-2.5 bg-white border border-[#334E3B]/30 text-[#2C3531] text-xs font-semibold rounded-xl hover:bg-[#334E3B]/5 transition-colors cursor-pointer"
          >
            Rifiuta Tutti
          </button>
          <button
            type="button"
            onClick={() => onSaveChoice(analyticsEnabled)}
            className="flex-1 min-h-[44px] py-2.5 bg-[#334E3B] text-white text-xs font-semibold rounded-xl hover:bg-[#25392a] transition-colors shadow-sm cursor-pointer"
          >
            Salva Preferenze
          </button>
        </div>
      </div>
    </BottomSheetModal>
  );
}
