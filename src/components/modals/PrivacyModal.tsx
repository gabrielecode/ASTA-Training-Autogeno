/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield } from 'lucide-react';
import { ORG_EMAIL, ORG_NAME, ORG_SEDE, type TranslationSchema } from '../../config';
import { BottomSheetModal } from './BottomSheetModal';

interface PrivacyModalProps {
  t: TranslationSchema;
  privacyTab: 'policy' | 'rights' | 'cookies';
  setPrivacyTab: (tab: 'policy' | 'rights' | 'cookies') => void;
  cookieConsent: 'accepted' | 'rejected' | 'pending';
  onResetConsent: () => void;
  rightsActionMessage: string;
  setRightsActionMessage: (msg: string) => void;
  onClose: () => void;
}

export default function PrivacyModal({
  t,
  privacyTab,
  setPrivacyTab,
  cookieConsent,
  onResetConsent,
  rightsActionMessage,
  setRightsActionMessage,
  onClose,
}: PrivacyModalProps) {
  return (
    <BottomSheetModal
      onClose={onClose}
      maxWidthClass="max-w-3xl"
      closeLabel={t.closeBtn}
      ariaLabelledBy="privacy-modal-title"
    >
      <div className="flex flex-col max-h-[78dvh] sm:max-h-[76vh]">
        <div className="flex items-center gap-2.5 pb-4 pr-10 border-b border-[#334E3B]/10 shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 id="privacy-modal-title" className="text-lg sm:text-xl font-serif font-bold text-[#2C3531] truncate">
              {t.privacyModalTitle}
            </h3>
            <p className="text-xs text-[#2C3531]/70 truncate">{ORG_NAME}</p>
          </div>
        </div>

        <div className="flex border-b border-[#334E3B]/10 gap-4 sm:gap-6 mt-3 overflow-x-auto no-scrollbar shrink-0">
          <button
            type="button"
            onClick={() => setPrivacyTab('policy')}
            className={`min-h-[44px] pb-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              privacyTab === 'policy'
                ? 'border-[#334E3B] text-[#334E3B]'
                : 'border-transparent text-[#2C3531]/60 hover:text-[#2C3531]'
            }`}
          >
            {t.tabPolicy}
          </button>
          <button
            type="button"
            onClick={() => setPrivacyTab('rights')}
            className={`min-h-[44px] pb-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              privacyTab === 'rights'
                ? 'border-[#334E3B] text-[#334E3B]'
                : 'border-transparent text-[#2C3531]/60 hover:text-[#2C3531]'
            }`}
          >
            {t.tabRights}
          </button>
          <button
            type="button"
            onClick={() => setPrivacyTab('cookies')}
            className={`min-h-[44px] pb-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              privacyTab === 'cookies'
                ? 'border-[#334E3B] text-[#334E3B]'
                : 'border-transparent text-[#2C3531]/60 hover:text-[#2C3531]'
            }`}
          >
            {t.tabCookies}
          </button>
        </div>

        <div className="py-5 overflow-y-auto space-y-5 text-sm text-[#2C3531]/80 leading-relaxed pr-1 flex-1">
          {privacyTab === 'policy' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10 space-y-1">
                <p className="text-xs font-bold text-[#334E3B] uppercase tracking-wider">Titolare del Trattamento</p>
                <p className="font-semibold text-[#2C3531]">{ORG_NAME}</p>
                <p className="text-xs text-[#2C3531]/70">
                  {ORG_SEDE} • Email:{' '}
                  <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">
                    {ORG_EMAIL}
                  </a>
                </p>
              </div>

              <h4 className="font-serif font-bold text-lg text-[#2C3531] pt-2">
                1. Finalità e Base Giuridica del Trattamento
              </h4>
              <p>
                In conformità alla nuova Legge federale sulla protezione dei dati (nLPD) svizzera e al Regolamento
                Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea, la presente informativa descrive le
                modalità di raccolta e trattamento dei dati personali degli utenti.
              </p>
              <p>
                I dati forniti volontariamente tramite il modulo di prenotazione (nome, email, telefono, sede preferita,
                note terapeutiche) vengono trattati esclusivamente per organizzare e confermare il primo colloquio
                orientativo e per contattare la sede centrale di Lugano ({ORG_EMAIL}).
              </p>
            </div>
          )}

          {privacyTab === 'rights' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#2C3531]">Esercizio dei Diritti dell'Interessato</h4>
              <p>
                In qualità di interessato, la nLPD e il GDPR ti riconoscono specifici diritti di accesso, rettifica,
                cancellazione e portabilità dei dati.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-[#F0F4EE] border border-[#334E3B]/20 space-y-3 mt-4">
                <p className="font-semibold text-[#2C3531] text-xs uppercase tracking-wider">
                  Strumenti Privacy Immediati
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const exportData = {
                        org: ORG_NAME,
                        email: ORG_EMAIL,
                        timestamp: new Date().toISOString(),
                        cookieConsent,
                        savedForms: localStorage.getItem('asta_booking_history') || 'Nessun invio precedente salvato',
                      };
                      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'asta_privacy_export.json';
                      a.click();
                      URL.revokeObjectURL(url);
                      setRightsActionMessage('Dati esportati con successo in formato JSON.');
                    }}
                    className="min-h-[44px] px-4 py-2.5 bg-[#334E3B] text-white text-xs font-semibold rounded-lg hover:bg-[#25392a] transition-colors cursor-pointer"
                  >
                    Esporta i miei dati (JSON)
                  </button>
                  <button
                    type="button"
                    onClick={onResetConsent}
                    className="min-h-[44px] px-4 py-2.5 bg-white border border-[#334E3B]/30 text-[#334E3B] text-xs font-semibold rounded-lg hover:bg-[#334E3B]/5 transition-colors cursor-pointer"
                  >
                    Revoca Consensi e Cookie
                  </button>
                </div>
                {rightsActionMessage && (
                  <p className="text-xs text-[#334E3B] font-medium pt-1 animate-fadeIn">✓ {rightsActionMessage}</p>
                )}
              </div>

              <p className="text-xs text-[#2C3531]/70 pt-2">
                Per qualsiasi richiesta formale, contatta{' '}
                <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">
                  {ORG_EMAIL}
                </a>
                .
              </p>
            </div>
          )}

          {privacyTab === 'cookies' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#2C3531]">Informativa sui Cookie</h4>
              <p>
                Questo sito utilizza cookie tecnici essenziali e cookie analitici opzionali per la misurazione statistica
                dell'utenza.
              </p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-[#334E3B]/10 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 bg-[#334E3B] text-white text-xs font-semibold rounded-xl hover:bg-[#25392a] transition-colors cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </BottomSheetModal>
  );
}
