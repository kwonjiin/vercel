"use client";

import { useEffect, useRef } from "react";

/**
 * 은은하게 움직이는 도트 그리드 + 마우스를 따라가는 스포트라이트.
 * 에디터의 "미니맵/그리드"에서 영감을 받은 앰비언트 배경.
 */
export default function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = -9999;
    let mouseY = -9999;
    const spacing = 34;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    let t = 0;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 180;
          const proximity = Math.max(0, 1 - dist / radius);

          const wobble = reduced
            ? 0
            : Math.sin(t * 0.0006 + i * 0.4 + j * 0.3) * 0.4;

          const baseOpacity = 0.05 + wobble * 0.03;
          const opacity = Math.min(0.9, baseOpacity + proximity * 0.55);
          const size = 1 + proximity * 1.6;

          if (opacity <= 0.01) continue;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          if (proximity > 0.05) {
            ctx.fillStyle = `rgba(125, 211, 192, ${opacity})`;
          } else {
            ctx.fillStyle = `rgba(139, 143, 152, ${opacity})`;
          }
          ctx.fill();
        }
      }

      if (!reduced) {
        t += 16;
        raf = requestAnimationFrame(draw);
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
