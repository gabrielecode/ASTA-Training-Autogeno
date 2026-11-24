/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ORG_EMAIL, ORG_SEDE, type TranslationSchema } from '../../config';
import { BottomSheetModal } from './BottomSheetModal';

interface BookingModalProps {
  t: TranslationSchema;
  selectedTherapist: string;
  formSubmitted: boolean;
  formData: {
    name: string;
    email: string;
    phone: string;
    location: string;
    notes: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
      location: string;
      notes: string;
    }>
  >;
  bookingConsentChecked: boolean;
  setBookingConsentChecked: (checked: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  onOpenPrivacy: () => void;
}

export default function BookingModal({
  t,
  selectedTherapist,
  formSubmitted,
  formData,
  setFormData,
  bookingConsentChecked,
  setBookingConsentChecked,
  onSubmit,
  onClose,
  onOpenPrivacy,
}: BookingModalProps) {
  return (
    <BottomSheetModal onClose={onClose} closeLabel={t.closeBtn} ariaLabelledBy="booking-modal-title">
      {formSubmitted ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-16 h-16 bg-[#334E3B]/10 text-[#334E3B] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 id="booking-modal-title" className="text-2xl font-serif font-bold text-[#2C3531]">
            {t.modalSuccessTitle}
          </h3>
          <p className="text-sm text-[#2C3531]/70 max-w-xs mx-auto">
            {t.modalSuccessDesc} Email:{' '}
            <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] underline">
              {ORG_EMAIL}
            </a>
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="pr-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#334E3B]">{t.modalBookingTitle}</p>
            <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-[#2C3531] mt-1">
              {selectedTherapist ? `${t.bookButton} ${selectedTherapist}` : t.modalBookingSub}
            </h3>
            <p className="text-xs text-[#2C3531]/70 mt-1">
              {ORG_SEDE} — {ORG_EMAIL}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">{t.fieldName}</label>
              <input
                type="text"
                required
                placeholder="es. Anna Rossi"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">{t.fieldEmail}</label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.ch"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">{t.fieldPhone}</label>
                <input
                  type="tel"
                  required
                  placeholder="+41 79 000 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">{t.fieldLocation}</label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
              >
                <option value="Lugano Centro">Lugano Centro (Via Nassa 29)</option>
                <option value="Online Videoconferenza">Online / Videoconferenza (Svizzera)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">{t.fieldNotes}</label>
              <textarea
                rows={3}
                placeholder="Es. Gestione ansia da stress lavorativo, disturbi del sonno..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="privacyConsent"
                required
                checked={bookingConsentChecked}
                onChange={(e) => setBookingConsentChecked(e.target.checked)}
                className="mt-1 w-5 h-5 sm:w-4 sm:h-4 rounded text-[#334E3B] focus:ring-[#334E3B] border-[#334E3B]/30 cursor-pointer shrink-0"
              />
              <label htmlFor="privacyConsent" className="text-xs text-[#2C3531]/80 leading-relaxed cursor-pointer">
                {t.fieldConsent}{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPrivacy();
                  }}
                  className="text-[#334E3B] underline font-semibold hover:text-[#25392a] cursor-pointer"
                >
                  Informativa sulla Privacy (nLPD / GDPR)
                </button>
                . *
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full min-h-[48px] py-3.5 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            {t.submitButton}
          </button>
        </form>
      )}
    </BottomSheetModal>
  );
}
