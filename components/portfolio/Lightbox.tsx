"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
};

// Envolve uma mídia do case num gatilho que abre a imagem em escala
// real sobre um overlay escuro. Fecha com Esc, clique ou botão ×.
export function Lightbox({ src, alt, className, children }: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // foco entra no dialog (senão o Tab continua navegando a página escondida)
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // e volta ao gatilho ao fechar
      triggerRef.current?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`lightbox-trigger${className ? ` ${className}` : ""}`}
        aria-label={`Ampliar imagem: ${alt}`}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
          >
            <img src={src} alt={alt} className="lightbox__image" />
            <button
              ref={closeRef}
              type="button"
              className="lightbox__close"
              aria-label="Fechar visualizador"
              onClick={close}
            >
              ×
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
