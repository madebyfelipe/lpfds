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
      {/* Seta estilo pointer — ponta (hotspot) no canto agudo (~3.5, 3.5) */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="site-cursor__arrow"
          d="M20.5056 10.7754C21.1225 10.5355 21.431 10.4155 21.5176 10.2459C21.5926 10.099 21.5903 9.92446 21.5115 9.77954C21.4205 9.61226 21.109 9.50044 20.486 9.2768L4.59629 3.5728C4.0866 3.38983 3.83175 3.29835 3.66514 3.35605C3.52029 3.40621 3.40645 3.52004 3.35629 3.6649C3.29859 3.8315 3.39008 4.08635 3.57304 4.59605L9.277 20.4858C9.50064 21.1088 9.61246 21.4203 9.77973 21.5113C9.92465 21.5901 10.0991 21.5924 10.2461 21.5174C10.4157 21.4308 10.5356 21.1223 10.7756 20.5054L13.3724 13.8278C13.4194 13.707 13.4429 13.6466 13.4792 13.5957C13.5114 13.5506 13.5508 13.5112 13.5959 13.479C13.6468 13.4427 13.7072 13.4192 13.828 13.3722L20.5056 10.7754Z"
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
