"use client";

import { useEffect, useRef } from "react";

/**
 * Barra fina no topo que acompanha o quanto do artigo já foi lido. É só um
 * apoio visual (aria-hidden): quem usa leitor de tela não ganha nada com ela.
 * Atualiza por transform (sem layout) e no máximo uma vez por frame.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    const el = bar.current;
    if (!target || !el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = target.getBoundingClientRect();
      // Chega a 100% quando o fim do texto passa do meio da tela, não só no
      // último pixel da página (o rodapé e os comentários vêm depois).
      const span = Math.max(1, height - window.innerHeight * 0.5);
      el.style.transform = `scaleX(${Math.min(1, Math.max(0, -top / span))})`;
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
  }, [targetId]);

  return (
    <div className="inst-progress" aria-hidden="true">
      <div ref={bar} className="inst-progress__bar" />
    </div>
  );
}
