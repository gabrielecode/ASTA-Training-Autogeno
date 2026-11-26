/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function splitSentences(text: string): string[] {
  return text
    .replace(/\bJ\.H\./g, 'J__DOT__H__DOT__')
    .split(/\.\s+(?=[A-ZÀÈÉÌÒÙÄÖÜŒ])/)
    .map((part, idx, arr) => {
      const restored = part.replace(/J__DOT__H__DOT__/g, 'J.H.').trim();
      return idx < arr.length - 1 && !restored.endsWith('.') ? `${restored}.` : restored;
    })
    .filter(Boolean);
}

interface ParagraphsProps {
  text: string;
  className?: string;
}

export const Paragraphs: React.FC<ParagraphsProps> = ({ text, className = '' }) => {
  const sentences = splitSentences(text);

  return (
    <>
      {sentences.map((sentence, index) => (
        <p key={`${index}-${sentence.slice(0, 24)}`} className={className}>
          {sentence}
        </p>
      ))}
    </>
  );
};
