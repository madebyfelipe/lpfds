"use client";

import { useEffect, useRef } from "react";

/**
 * Alterna o tema (claro/escuro) da página /hub. O tema é escopado ao
 * container `.hub` (via `data-theme`), então não afeta o resto do site.
 * Persiste a escolha em localStorage.
 */
export function ThemeToggle() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hub = btnRef.current?.closest<HTMLElement>(".hub");
    if (!hub) return;
    try {
      const stored = localStorage.getItem("hub-theme");
      if (stored === "dark") hub.dataset.theme = "dark";
      else delete hub.dataset.theme;
    } catch {
      /* storage indisponível — mantém o tema padrão (claro) */
    }
  }, []);

  function toggle() {
    const hub = btnRef.current?.closest<HTMLElement>(".hub");
    if (!hub) return;
    const next = hub.dataset.theme === "dark" ? "light" : "dark";
    if (next === "dark") hub.dataset.theme = "dark";
    else delete hub.dataset.theme;
    try {
      localStorage.setItem("hub-theme", next);
    } catch {
      /* storage indisponível — o tema ainda alterna na sessão */
    }
  }

  return (
    <button
      ref={btnRef}
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Alternar entre modo claro e escuro"
    >
      <svg
        className="theme-toggle__icon--sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      <svg
        className="theme-toggle__icon--moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
