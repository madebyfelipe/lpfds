"use client";

import { useEffect, useState } from "react";

/** Botão de voltar ao topo: aparece depois de rolar ~1 tela e meia. */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(window.scrollY > window.innerHeight * 1.5);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      className="inst-totop"
      data-show={show ? "" : undefined}
      aria-label="Voltar ao topo da página"
      tabIndex={show ? 0 : -1}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })
      }
    >
      ↑
    </button>
  );
}
