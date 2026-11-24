/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Users, ShieldCheck, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  activeSection: string;
  labels: {
    metodo: string;
    terapiste: string;
    rimborso: string;
    prenota: string;
  };
  onBook: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activeSection,
  labels,
  onBook,
}) => {
  const navItems = [
    { id: 'metodo', href: '#metodo', label: labels.metodo, icon: BookOpen },
    { id: 'terapiste', href: '#terapiste', label: labels.terapiste, icon: Users },
    { id: 'rimborso', href: '#rimborso', label: labels.rimborso, icon: ShieldCheck },
  ];

  return (
    <nav
      aria-label="Navigazione rapida mobile"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#334E3B]/10 shadow-[0_-4px_20px_rgba(44,53,49,0.06)] pb-safe"
    >
      <div className="grid grid-cols-4 items-center h-14 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors active:scale-95 ${
                isActive ? 'text-[#334E3B] font-semibold' : 'text-[#2C3531]/65 hover:text-[#334E3B]'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.25 : 1.75} />
              <span className="text-[10px] leading-tight mt-0.5 truncate max-w-[76px]">
                {item.label}
              </span>
            </a>
          );
        })}

        <div className="flex items-center justify-center px-1">
          <button
            type="button"
            onClick={onBook}
            className="w-full min-h-[40px] px-2 py-1.5 bg-[#334E3B] text-white rounded-xl flex flex-col items-center justify-center shadow-sm active:scale-[0.97] transition-transform cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[10px] font-semibold leading-tight mt-0.5 truncate max-w-full">
              {labels.prenota}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
