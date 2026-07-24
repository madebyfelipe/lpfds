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
      {/* Seta estilo pointer — a ponta fica em (2,2), alinhada ao hotspot */}
      <svg
        width="22"
        height="28"
        viewBox="0 0 22 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="site-cursor__arrow"
          d="M2 2 L2 23.5 L7.7 18.4 L11.4 26 L15.4 24.1 L11.8 16.4 L19 15.9 Z"
          fill="#fff"
          stroke="#111111"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
