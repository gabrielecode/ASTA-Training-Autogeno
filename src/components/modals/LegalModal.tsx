/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileText } from 'lucide-react';
import { ORG_EMAIL, ORG_NAME, ORG_PHONE, ORG_SEDE, type TranslationSchema } from '../../config';
import { BottomSheetModal } from './BottomSheetModal';

interface LegalModalProps {
  t: TranslationSchema;
  onClose: () => void;
}

export default function LegalModal({ t, onClose }: LegalModalProps) {
  return (
    <BottomSheetModal
      onClose={onClose}
      maxWidthClass="max-w-2xl"
      closeLabel={t.closeBtn}
      ariaLabelledBy="legal-modal-title"
    >
      <div className="space-y-5">
        <div className="flex items-center gap-2.5 pb-4 pr-10 border-b border-[#334E3B]/10">
          <div className="w-9 h-9 rounded-full bg-[#334E3B]/10 text-[#334E3B] flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 id="legal-modal-title" className="text-lg sm:text-xl font-serif font-bold text-[#2C3531]">
              Note Legali & Impressum
            </h3>
            <p className="text-xs text-[#2C3531]/70 truncate">{ORG_NAME}</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#2C3531]/80 leading-relaxed">
          <div className="p-4 bg-[#F8FAF6] rounded-xl border border-[#334E3B]/10 space-y-2">
            <p className="text-xs font-bold text-[#334E3B] uppercase tracking-wider">Informazioni Istituzionali</p>
            <p>
              <strong className="text-[#2C3531]">Ente:</strong> {ORG_NAME}
            </p>
            <p>
              <strong className="text-[#2C3531]">Sede Centrale:</strong> {ORG_SEDE} (Via Nassa 29, Lugano)
            </p>
            <p>
              <strong className="text-[#2C3531]">Contatto Email:</strong>{' '}
              <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">
                {ORG_EMAIL}
              </a>
            </p>
            <p>
              <strong className="text-[#2C3531]">Telefono Segreteria:</strong> {ORG_PHONE}
            </p>
          </div>

          <h4 className="font-serif font-bold text-base text-[#2C3531] pt-1">Accreditamenti Professionali</h4>
          <p>
            Le terapiste associate ad ASTA sono riconosciute dal Registro Medicina Empirica (RME) e dall'associazione
            ASCA, soddisfacendo i rigorosi standard qualitativi svizzeri.
          </p>
        </div>

        <div className="pt-4 border-t border-[#334E3B]/10 flex justify-end">
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
