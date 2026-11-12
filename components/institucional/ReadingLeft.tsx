"use client";

import { useEffect, useRef } from "react";

/**
 * "Faltam X min" na coluna do sumário, calculado pelo mesmo trecho que a
 * barra de progresso mede. Decorativo (aria-hidden): o tempo total já está
 * no cabeçalho do artigo.
 */
export function ReadingLeft({ targetId, minutes }: { targetId: string; minutes: number }) {
  const out = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    const el = out.current;
    if (!target || !el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = target.getBoundingClientRect();
      const span = Math.max(1, height - window.innerHeight * 0.5);
      const done = Math.min(1, Math.max(0, -top / span));
      const left = Math.ceil(minutes * (1 - done));
      el.textContent = done >= 0.98 ? "Leitura concluída" : `Faltam ${left} min`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetId, minutes]);

  return (
    <p ref={out} className="inst-readleft" aria-hidden="true">
      {minutes} min de leitura
    </p>
  );
}
