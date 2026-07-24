"use client";

import { useEffect, useRef } from "react";

// Seletor do que conta como "interativo" para o estado de hover do cursor.
const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label, summary";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  // Tudo via classList/style direto — zero re-render por movimento de mouse.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (event: MouseEvent) => {
      el.style.translate = `${event.clientX}px ${event.clientY}px`;
      el.classList.add("site-cursor--visible");
    };
    const down = () => el.classList.add("site-cursor--down");
    const up = () => el.classList.remove("site-cursor--down");
    const over = (event: MouseEvent) => {
      const target = event.target as Element | null;
      el.classList.toggle(
        "site-cursor--link",
        Boolean(target?.closest?.(INTERACTIVE))
      );
    };
    const leave = () => el.classList.remove("site-cursor--visible");

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className="site-cursor" aria-hidden="true">
      {/* Seta estilo pointer — ponta (hotspot) em (3,3); silhueta do anexo:
          arredondada, encorpada e levemente inclinada para a direita */}
      <svg
        width="26"
        height="32"
        viewBox="0 0 26 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="site-cursor__arrow"
          transform="rotate(14 3 3)"
          d="M3 3 L3 24.5 L9 19 L13 27.5 L17 25.5 L13.2 17.1 L20.5 16.6 Z"
          fill="#fff"
          stroke="#111111"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
