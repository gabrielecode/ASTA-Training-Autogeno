/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect, useCallback } from 'react';

interface TouchSliderProps {
  itemCount: number;
  desktopGridClassName: string;
  ariaLabel: string;
  children: React.ReactNode;
}

export const TouchSlider: React.FC<TouchSliderProps> = ({
  itemCount,
  desktopGridClassName,
  ariaLabel,
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || itemCount <= 1) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const step = firstChild.offsetWidth + 16; // card width + gap-4 (16px)
    if (step <= 0) return;
    const idx = Math.round(el.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(itemCount - 1, idx)));
  }, [itemCount]);

  useEffect(() => {
    setActiveIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [itemCount]);

  const scrollToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({
      left: child.offsetLeft - 16,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        role="region"
        aria-label={ariaLabel}
        className={`flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 pb-2 md:mx-0 md:px-0 md:pb-0 md:overflow-visible ${desktopGridClassName}`}
      >
        {children}
      </div>

      {itemCount > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4 md:hidden" aria-hidden="true">
          {Array.from({ length: itemCount }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              tabIndex={-1}
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeIndex === idx ? 'w-6 bg-[#334E3B]' : 'w-1.5 bg-[#334E3B]/25'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
