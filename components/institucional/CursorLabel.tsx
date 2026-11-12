"use client";

import { useEffect, useRef } from "react";

/**
 * Etiqueta "LER →" que segue o mouse enquanto ele está sobre um card. Só em
 * dispositivo com mouse (hover + ponteiro fino); em toque não existe. É
 * decorativa (aria-hidden): o card já é um link com título.
 */
export function CursorLabel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let on = false;
    const paint = () => {
      frame = 0;
      el.style.transform = `translate3d(${x + 18}px, ${y + 18}px, 0) scale(${on ? 1 : 0.6})`;
      el.style.opacity = on ? "1" : "0";
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      on = Boolean((event.target as Element | null)?.closest?.(".inst-card__link"));
      schedule();
    };
    const leave = () => {
      on = false;
      schedule();
    };

    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="inst-cursor" aria-hidden="true">
      Ler →
    </div>
  );
}
