/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

export interface MethodPhaseItem {
  num: string;
  title: string;
  desc: string;
}

interface MethodTimelineProps {
  cards: MethodPhaseItem[];
}

function MeditationIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Testa circolare */}
      <circle
        cx="16"
        cy="7.6"
        r="2.6"
        fill="#E8D3B3"
        stroke="#334E3B"
        strokeWidth="1.6"
      />
      {/* Busto stilizzato */}
      <path
        d="M11.6 18.8C11.6 14.3 13.4 12.2 16 12.2C18.6 12.2 20.4 14.3 20.4 18.8H11.6Z"
        fill="#DCE6DC"
        stroke="#334E3B"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Braccia piegate verso il petto */}
      <path
        d="M12.2 13.6C9.6 14.8 8.9 17.3 10.6 18.5C12 19.4 13.8 18.1 14.8 16.9"
        stroke="#334E3B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8 13.6C22.4 14.8 23.1 17.3 21.4 18.5C20 19.4 18.2 18.1 17.2 16.9"
        stroke="#334E3B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Mani giunte al petto (Anjali mudra) */}
      <path
        d="M16 13.8L17.3 16.4C17.3 17.2 16.7 17.8 16 17.8C15.3 17.8 14.7 17.2 14.7 16.4L16 13.8Z"
        fill="#D4A373"
        stroke="#334E3B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Gambe incrociate in posizione del loto */}
      <path
        d="M11.6 19.1C8.5 19.6 6.8 21.3 7.5 23.1C8.1 24.4 10.6 24.6 14.6 23.7L16 23.3L17.4 23.7C21.4 24.6 23.9 24.4 24.5 23.1C25.2 21.3 23.5 19.6 20.4 19.1"
        fill="#DCE6DC"
        stroke="#334E3B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 22.8C14.5 21.6 17.5 21.6 19.8 22.8"
        stroke="#334E3B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MethodTimeline({ cards }: MethodTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const [railBounds, setRailBounds] = useState({ top: 44, height: 420 });
  const [thresholds, setThresholds] = useState<number[]>(() =>
    cards.map((_, idx) => (cards.length > 1 ? idx / (cards.length - 1) : 0))
  );
  const [reachedSteps, setReachedSteps] = useState<boolean[]>(() =>
    cards.map(() => false)
  );

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const centers = nodeRefs.current
        .slice(0, cards.length)
        .map((el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return r.top - containerRect.top + r.height / 2;
        })
        .filter((val): val is number => val !== null);

      if (centers.length < 2) return;

      const first = centers[0];
      const last = centers[centers.length - 1];
      const height = Math.max(1, last - first);

      setRailBounds({ top: first, height });
      setThresholds(centers.map((c) => (c - first) / height));
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    observer.observe(container);
    window.addEventListener('resize', measure, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [cards.length]);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 64%', 'end 52%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 170,
    damping: prefersReducedMotion ? 100 : 28,
    mass: 0.35,
  });

  const cursorY = useTransform(smoothProgress, [0, 1], [0, railBounds.height]);

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    setReachedSteps((prev) => {
      let changed = false;
      const next = thresholds.map((threshold, idx) => {
        const activationPoint = idx === 0 ? 0.015 : threshold - 0.02;
        const active = latest >= activationPoint;
        if (prev[idx] !== active) changed = true;
        return active;
      });
      return changed ? next : prev;
    });
  });

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Binario verticale: lato sinistro su mobile, centrato su md+ */}
      <div
        ref={railRef}
        aria-hidden="true"
        style={{
          top: `${railBounds.top}px`,
          height: `${railBounds.height}px`,
        }}
        className="pointer-events-none absolute left-5 md:left-1/2 md:-translate-x-1/2 w-10 -translate-x-1/2 z-10"
      >
        {/* Linea di sfondo (grigio chiaro / sabbia tenue) */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full bg-[#E3DFD3]" />

        {/* Linea di riempimento progressivo (verde salvia -> oro caldo) */}
        <motion.div
          style={{
            scaleY: smoothProgress,
            transformOrigin: 'top',
            background:
              'linear-gradient(180deg, #6E8B74 0%, #98AA88 42%, #D4A373 100%)',
          }}
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2.5px] rounded-full shadow-[0_0_8px_rgba(212,163,115,0.35)]"
        />

        {/* Cursore circolare animato con icona meditazione */}
        <motion.div
          style={{ y: cursorY }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF9F5] border-[1.5px] border-[#D4A373] shadow-[0_4px_16px_rgba(51,78,59,0.14),0_1px_5px_rgba(212,163,115,0.28)] ring-4 ring-white/95 flex items-center justify-center">
            <MeditationIcon className="w-6 h-6 sm:w-[26px] sm:h-[26px]" />
          </div>
        </motion.div>
      </div>

      {/* Lista delle fasi */}
      <ol className="space-y-6 sm:space-y-8 md:space-y-10">
        {cards.map((card, idx) => {
          const isLeftOnDesktop = idx % 2 === 0;
          const isReached = reachedSteps[idx];

          const cardMarkup = (
            <div
              className={`relative rounded-2xl p-5 sm:p-7 border transition-all duration-300 ease-out ${
                isReached
                  ? 'bg-gradient-to-br from-white via-[#F9FAF6] to-[#F5EFE3]/65 border-[#D4A373]/55 shadow-[0_10px_28px_rgba(51,78,59,0.08)]'
                  : 'bg-[#F8FAF6] border-[#334E3B]/10 shadow-none hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-serif text-lg sm:text-xl font-bold tabular-nums shrink-0 transition-all duration-300 ease-out ${
                    isReached
                      ? 'bg-[#334E3B] text-[#FAF8F2] border border-[#D4A373]/75 ring-2 ring-[#D4A373]/25 shadow-[0_0_16px_rgba(212,163,115,0.42)]'
                      : 'bg-[#334E3B]/90 text-white border border-transparent'
                  }`}
                >
                  {card.num}
                </div>

                <div className="space-y-2 min-w-0">
                  <h3
                    className={`text-lg sm:text-xl font-serif font-bold transition-colors duration-300 ease-out ${
                      isReached ? 'text-[#334E3B]' : 'text-[#2C3531]'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );

          return (
            <li
              key={card.num}
              className="relative pl-14 sm:pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 lg:gap-20 items-center"
            >
              {/* Nodo di ancoraggio sul binario */}
              <div
                ref={(el) => {
                  nodeRefs.current[idx] = el;
                }}
                aria-hidden="true"
                className="pointer-events-none absolute left-5 md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              >
                <span
                  className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ease-out ${
                    isReached
                      ? 'bg-[#D4A373] border-[#FAF9F5] scale-110 shadow-[0_0_10px_rgba(212,163,115,0.65)]'
                      : 'bg-[#F8FAF6] border-[#D7D2C5] scale-100'
                  }`}
                />
              </div>

              {/* Tratto di collegamento sottile mobile */}
              <span
                aria-hidden="true"
                className={`md:hidden pointer-events-none absolute left-7 top-10 -translate-y-1/2 w-6 h-px transition-colors duration-300 ${
                  isReached ? 'bg-[#D4A373]/70' : 'bg-[#E3DFD3]'
                }`}
              />

              {/* Colonna sinistra desktop + colonna unica mobile */}
              {isLeftOnDesktop ? (
                <>
                  <div className="relative">
                    {/* Tratto di collegamento sottile desktop sinistra */}
                    <span
                      aria-hidden="true"
                      className={`hidden md:block pointer-events-none absolute -right-8 lg:-right-10 top-1/2 -translate-y-1/2 w-8 lg:w-10 h-px transition-colors duration-300 ${
                        isReached ? 'bg-[#D4A373]/70' : 'bg-[#E3DFD3]'
                      }`}
                    />
                    {cardMarkup}
                  </div>
                  <div className="hidden md:block" aria-hidden="true" />
                </>
              ) : (
                <>
                  <div className="hidden md:block" aria-hidden="true" />
                  <div className="relative">
                    {/* Tratto di collegamento sottile desktop destra */}
                    <span
                      aria-hidden="true"
                      className={`hidden md:block pointer-events-none absolute -left-8 lg:-left-10 top-1/2 -translate-y-1/2 w-8 lg:w-10 h-px transition-colors duration-300 ${
                        isReached ? 'bg-[#D4A373]/70' : 'bg-[#E3DFD3]'
                      }`}
                    />
                    {cardMarkup}
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
