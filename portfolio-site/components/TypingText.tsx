"use client";

import { useEffect, useState } from "react";

/**
 * 코드가 타이핑되는 듯한 효과. lines는 [{text, className}] 형태의
 * 세그먼트 배열로 구성된 줄들의 배열입니다 (syntax highlight 색상 부여용).
 */
export type TypingSegment = { text: string; className?: string };

export default function TypingText({
  lines,
  speed = 28,
  startDelay = 300,
}: {
  lines: TypingSegment[][];
  speed?: number;
  startDelay?: number;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  const flatCurrentLine = (lines[lineIndex] ?? [])
    .map((s) => s.text)
    .join("");

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setLineIndex(lines.length - 1);
      setCharIndex(flatCurrentLine.length);
      setDone(true);
      return;
    }

    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const currentFull = lines[lineIndex].map((s) => s.text).join("");

    if (charIndex < currentFull.length) {
      const t = setTimeout(
        () => setCharIndex((c) => c + 1),
        lineIndex === 0 && charIndex === 0 ? startDelay : speed
      );
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, lineIndex]);

  const renderLine = (segments: TypingSegment[], visibleChars: number) => {
    let remaining = visibleChars;
    return segments.map((seg, i) => {
      const slice = seg.text.slice(0, Math.max(0, remaining));
      remaining -= seg.text.length;
      return (
        <span key={i} className={seg.className}>
          {slice}
        </span>
      );
    });
  };

  return (
    <div>
      {lines.map((segs, i) => {
        if (i > lineIndex) return null;
        const visible = i === lineIndex ? charIndex : Infinity;
        return (
          <div key={i} className="leading-tight">
            {renderLine(segs, visible)}
            {i === lineIndex && !done && (
              <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-blink bg-cyan align-middle" />
            )}
          </div>
        );
      })}
    </div>
  );
}
