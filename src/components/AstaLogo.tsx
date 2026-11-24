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
  size = 40,
  className = "",
  variant = "dark",
  title,
}: AstaLogoProps) {
  const color = variant === "dark" ? "#334E3B" : "#F9F2EC";
  const accentColor = variant === "dark" ? "#D4A373" : "#D48482";

  return (
    <svg
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      style={{ color }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      {/* Outer circular arc */}
      <path
        d="M32 6C17.64 6 6 17.64 6 32c0 10.5 6.2 19.5 15.1 23.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Inner spiral */}
      <path
        d="M36 34c-2.2 0-4-1.8-4-4 0-2.2 2-4 4.5-4 3 0 5.5 2.5 5.5 5.5 0 4-3.5 7-7.5 7-5 0-9-4-9-9 0-6 5-11 11-11 7.5 0 13.5 6 13.5 13.5"
        stroke={accentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Leaf on the right */}
      <path
        d="M39 55C39 55 45 47 45 35C45 25 39 18 39 18C39 18 47 25 47 36C47 47 39 55 39 55Z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* Leaf internal veins */}
      <path
        d="M42 47c1-2 2-5 3-9M41 40c1.5-1.5 3-4 4-7M42 33c1-1 2-3 3-5"
        stroke={variant === "dark" ? "#F8FAF6" : "#2C3531"}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* 4-pointed Star in upper right */}
      <path
        d="M47 16c0 2.5 2 4.5 4.5 4.5C49 20.5 49 22.5 49 25c0-2.5-2-4.5-4.5-4.5C47 20.5 47 18.5 47 16z"
        fill={accentColor}
      />
    </svg>
  );
}

export interface AstaBrandProps {
  size?: number;
  variant?: "dark" | "light";
  subtitleText: string;
  className?: string;
  href?: string;
}

export function AstaBrand({
  size = 38,
  variant = "dark",
  subtitleText,
  className = "",
  href = "#",
}: AstaBrandProps) {
  const textColor = variant === "dark" ? "text-[#334E3B]" : "text-white";
  const subColor = variant === "dark" ? "text-[#2C3531]/70" : "text-white/70";

  return (
    <a href={href} className={`flex items-center gap-3 group text-left ${className}`}>
      <AstaLogo size={size} variant={variant} />
      <div className="flex flex-col">
        <span className={`text-xl font-bold font-serif tracking-tight leading-tight ${textColor}`}>
          ASTA
        </span>
        <span className={`text-[10px] sm:text-xs font-sans tracking-wide leading-none mt-0.5 ${subColor}`}>
          {subtitleText}
        </span>
      </div>
    </a>
  );
}
