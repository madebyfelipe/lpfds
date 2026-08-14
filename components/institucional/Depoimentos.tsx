"use client";

import { useState } from "react";
import { depoimentos } from "@/lib/institucional";

export function Depoimentos() {
  const [index, setIndex] = useState(0);
  const depoimento = depoimentos[index];

  const prev = () =>
    setIndex((i) => (i + depoimentos.length - 1) % depoimentos.length);
  const next = () => setIndex((i) => (i + 1) % depoimentos.length);

  return (
    <section className="inst-red">
      <div className="inst-section">
        <p className="inst-kicker inst-kicker--on-red inst-kicker--lg">
          — Depoimentos
        </p>
        <blockquote className="inst-quote">{depoimento.texto}</blockquote>
        <div className="inst-quote__foot">
          <div>
            <p className="inst-quote__name">{depoimento.nome}</p>
            <p className="inst-quote__role">
              {depoimento.cargo} · {depoimento.escritorio}
            </p>
          </div>
          <div className="inst-quote__nav">
            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="inst-quote__btn"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo"
              className="inst-quote__btn"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
