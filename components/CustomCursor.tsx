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
      {/* Seta estilo pointer do Windows — a ponta fica em (1,1), alinhada ao hotspot */}
      <svg
        width="19"
        height="25"
        viewBox="0 0 19 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="site-cursor__arrow"
          d="M1 1 L1 21 L6.4 16.6 L9.8 23.6 L13.6 21.8 L10.2 14.9 L17 14.4 Z"
          fill="var(--accent)"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
