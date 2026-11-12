"use client";

import { useEffect } from "react";

/**
 * Liga o fade + leve subida dos elementos `[data-reveal]` ao entrarem na
 * viewport (ver `app/institucional.css`). Sem JS, ou com
 * `prefers-reduced-motion`, eles já nascem visíveis — isto só adiciona o
 * atributo que a CSS observa, nunca esconde conteúdo via JS.
 */
export function ScrollFx() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Só esconde (via CSS, ver institucional.css) depois que o JS confirma
    // que vai poder revelar de novo — sem isso, sem JS os elementos ficam
    // presos em opacity:0 para sempre.
    document.documentElement.setAttribute("data-scrollfx", "on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-inview", "true");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
