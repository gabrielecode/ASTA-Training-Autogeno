/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { ORG_EMAIL, type TranslationSchema } from '../../config';
import { BottomSheetModal } from './BottomSheetModal';

interface MembershipModalProps {
  t: TranslationSchema;
  membershipType: 'active' | 'supporter';
  setMembershipType: (type: 'active' | 'supporter') => void;
  membershipSubmitted: boolean;
  setMembershipSubmitted: (submitted: boolean) => void;
  membershipConsentChecked: boolean;
  setMembershipConsentChecked: (checked: boolean) => void;
  membershipFormData: {
    nameOrg: string;
    email: string;
    phone: string;
    rmeNumber: string;
    notes: string;
  };
  setMembershipFormData: React.Dispatch<
    React.SetStateAction<{
      nameOrg: string;
      email: string;
      phone: string;
      rmeNumber: string;
      notes: string;
    }>
  >;
  buildMembershipMailto: () => string;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  onResetAndClose: () => void;
  onOpenPrivacy: () => void;
}

export default function MembershipModal({
  t,
  membershipType,
  setMembershipType,
  membershipSubmitted,
  membershipConsentChecked,
  setMembershipConsentChecked,
  membershipFormData,
  setMembershipFormData,
  buildMembershipMailto,
  onSubmit,
  onClose,
  onResetAndClose,
  onOpenPrivacy,
}: MembershipModalProps) {
  return (
    <BottomSheetModal onClose={onClose} closeLabel={t.closeBtn} ariaLabelledBy="membership-modal-title">
      {membershipSubmitted ? (
        <div className="py-10 text-center space-y-5">
          <div className="w-16 h-16 bg-[#334E3B]/10 text-[#334E3B] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 id="membership-modal-title" className="text-2xl font-serif font-bold text-[#2C3531]">
              {t.joinAsta.successTitle}
            </h3>
            <p className="text-sm text-[#2C3531]/75 max-w-sm mx-auto">
              {t.joinAsta.successDesc}{' '}
              <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] font-semibold underline">
                {ORG_EMAIL}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={buildMembershipMailto()}
              className="min-h-[48px] px-6 py-3 bg-[#334E3B] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#25392a] transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{t.joinAsta.mailtoButton}</span>
            </a>
            <button
              type="button"
              onClick={onResetAndClose}
              className="min-h-[48px] px-6 py-3 bg-[#F8FAF6] border border-[#334E3B]/20 text-[#2C3531] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#334E3B]/5 transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="pr-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#334E3B]">{t.joinAsta.modalTag}</p>
            <h3 id="membership-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-[#2C3531] mt-1">
              {t.joinAsta.modalTitle}
            </h3>
            <p className="text-xs text-[#2C3531]/70 mt-1">
              {t.joinAsta.modalRecipientLabel}{' '}
              <a href={`mailto:${ORG_EMAIL}`} className="text-[#334E3B] font-semibold underline">
                {ORG_EMAIL}
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-2">{t.joinAsta.fieldType}</label>
              <div className="grid grid-cols-1 gap-2.5">
                <label
                  className={`flex items-center gap-3 min-h-[48px] p-3.5 rounded-xl border text-sm cursor-pointer transition-all ${
                    membershipType === 'active'
                      ? 'border-[#334E3B] bg-[#334E3B]/5 text-[#2C3531] font-semibold'
                      : 'border-[#334E3B]/20 bg-[#F8FAF6] text-[#2C3531]/80 hover:border-[#334E3B]/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="membershipType"
                    value="active"
                    checked={membershipType === 'active'}
                    onChange={() => setMembershipType('active')}
                    className="w-4 h-4 accent-[#334E3B] cursor-pointer shrink-0"
                  />
                  <span>{t.joinAsta.typeActive}</span>
                </label>

                <label
                  className={`flex items-center gap-3 min-h-[48px] p-3.5 rounded-xl border text-sm cursor-pointer transition-all ${
                    membershipType === 'supporter'
                      ? 'border-[#334E3B] bg-[#334E3B]/5 text-[#2C3531] font-semibold'
                      : 'border-[#334E3B]/20 bg-[#F8FAF6] text-[#2C3531]/80 hover:border-[#334E3B]/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="membershipType"
                    value="supporter"
                    checked={membershipType === 'supporter'}
                    onChange={() => setMembershipType('supporter')}
                    className="w-4 h-4 accent-[#334E3B] cursor-pointer shrink-0"
                  />
                  <span>{t.joinAsta.typeSupporter}</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">{t.joinAsta.fieldNameOrg}</label>
              <input
                type="text"
                required
                placeholder={t.joinAsta.fieldNameOrgPlaceholder}
                value={membershipFormData.nameOrg}
                onChange={(e) => setMembershipFormData({ ...membershipFormData, nameOrg: e.target.value })}
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
                  value={membershipFormData.email}
                  onChange={(e) => setMembershipFormData({ ...membershipFormData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">
                  {t.fieldPhone.replace(' *', '')}
                </label>
                <input
                  type="tel"
                  placeholder="+41 79 000 00 00"
                  value={membershipFormData.phone}
                  onChange={(e) => setMembershipFormData({ ...membershipFormData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                />
              </div>
            </div>

            {membershipType === 'active' && (
              <div>
                <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">
                  {t.joinAsta.fieldRmeNumber}
                </label>
                <input
                  type="text"
                  placeholder={t.joinAsta.fieldRmePlaceholder}
                  value={membershipFormData.rmeNumber}
                  onChange={(e) => setMembershipFormData({ ...membershipFormData, rmeNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#2C3531] mb-1.5">{t.fieldNotes}</label>
              <textarea
                rows={3}
                placeholder={
                  membershipType === 'supporter'
                    ? t.joinAsta.fieldNotesPlaceholderSupporter
                    : t.joinAsta.fieldNotesPlaceholderActive
                }
                value={membershipFormData.notes}
                onChange={(e) => setMembershipFormData({ ...membershipFormData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#334E3B]/20 text-base sm:text-sm focus:outline-none focus:border-[#334E3B] bg-[#F8FAF6]"
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="membershipPrivacyConsent"
                required
                checked={membershipConsentChecked}
                onChange={(e) => setMembershipConsentChecked(e.target.checked)}
                className="mt-1 w-5 h-5 sm:w-4 sm:h-4 rounded text-[#334E3B] focus:ring-[#334E3B] border-[#334E3B]/30 cursor-pointer shrink-0"
              />
              <label htmlFor="membershipPrivacyConsent" className="text-xs text-[#2C3531]/80 leading-relaxed cursor-pointer">
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
            {t.joinAsta.submitButton}
          </button>
        </form>
      )}
    </BottomSheetModal>
  );
}
