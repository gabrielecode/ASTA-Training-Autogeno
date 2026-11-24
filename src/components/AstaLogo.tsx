/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface AstaLogoProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light";
  title?: string;
}

export function AstaLogo({
  size = 44,
  className = "",
  variant = "dark",
  title = "Logo ASTA",
}: AstaLogoProps) {
  const borderClass =
    variant === "dark"
      ? "border-[#334E3B]/15 shadow-sm"
      : "border-white/20 shadow-md";

  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-xl overflow-hidden bg-[#F8F6EE] border ${borderClass} shrink-0 flex items-center justify-center ${className}`}
    >
      <img
        src="/assets/aistudio/logo_asta_trainig_5603fac5.jpeg"
        alt={title}
        width={size}
        height={size}
        decoding="async"
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export interface AstaBrandProps {
  size?: number;
  variant?: "dark" | "light";
  subtitleText: string;
  className?: string;
  href?: string;
  compactOnMobile?: boolean;
}

export function AstaBrand({
  size = 44,
  variant = "dark",
  subtitleText,
  className = "",
  href = "#",
  compactOnMobile = false,
}: AstaBrandProps) {
  const textColor = variant === "dark" ? "text-[#334E3B]" : "text-white";
  const subColor = variant === "dark" ? "text-[#2C3531]/70" : "text-white/70";

  return (
    <a href={href} className={`flex items-center gap-2.5 sm:gap-3 group text-left min-w-0 ${className}`}>
      <AstaLogo
        size={size}
        variant={variant}
        title="ASTA - Associazione Svizzera Training Autogeno"
        className={compactOnMobile ? "w-8 h-8 sm:w-[38px] sm:h-[38px]" : ""}
      />
      <div className="flex flex-col min-w-0">
        <span className={`text-lg sm:text-xl font-bold font-serif tracking-tight leading-tight whitespace-nowrap ${textColor}`}>
          ASTA
        </span>
        <span
          className={`${
            compactOnMobile ? "hidden sm:block" : "block"
          } text-[10px] sm:text-xs font-sans tracking-wide leading-none mt-0.5 truncate ${subColor}`}
        >
          {subtitleText}
        </span>
      </div>
    </a>
  );
}
