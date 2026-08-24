"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 데스크톱에서만 활성화되는 커스텀 커서.
 * data-cursor="hover" 속성이 있는 요소 위에서 확대됩니다.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reduced) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('[data-cursor="hover"]'));
    };

    let raf = 0;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ease-out ${
          hovering
            ? "h-12 w-12 border-cyan bg-cyan/10"
            : "h-7 w-7 border-fg-dim/60"
        }`}
      />
    </>
  );
}
