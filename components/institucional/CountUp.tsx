"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Número que sobe de 0 até `to` quando entra na tela. O HTML estático já traz
 * o valor final (sem JS ou com movimento reduzido nada muda); só depois da
 * hidratação, e antes da primeira pintura, ele volta a 0 para animar.
 */
export function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.textContent = "0";
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1100);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return <span ref={ref}>{to}</span>;
}
