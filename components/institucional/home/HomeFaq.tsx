"use client";

import { useId, useState } from "react";

/**
 * Acordeão do Monolog: um aberto por vez, altura animada por
 * grid-template-rows (0fr → 1fr). As respostas estão no HTML desde o servidor
 * (e no JSON-LD FAQPage da página), só fechadas.
 */
export function HomeFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <div className="mfaq__list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={item.q} className="mfaq__item" data-open={isOpen || undefined}>
            <h3 className="mfaq__h">
              <button
                type="button"
                className="mfaq__top"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="mfaq__bg" aria-hidden="true" />
                <span className="mfaq__q">{item.q}</span>
                <span className="mfaq__square" aria-hidden="true" />
              </button>
            </h3>
            <div className="mfaq__bottom" id={id} role="region" aria-label={item.q} inert={!isOpen}>
              <div className="mfaq__wrap">
                <p className="mfaq__a">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
