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
        {/* aria-live: trocar de depoimento sem isso é uma mudança silenciosa
            para quem usa leitor de tela — o botão responde e nada é anunciado. */}
        <blockquote className="inst-quote" aria-live="polite">
          {depoimento.texto}
        </blockquote>
        <div className="inst-quote__foot">
          <div>
            {/* Sem nome e sem CRP: a autoria fica na profissão e na cidade.
                Ver a nota em lib/institucional.ts. */}
            <p className="inst-quote__name">{depoimento.titulo}</p>
            <p className="inst-quote__role">{depoimento.cidade}</p>
          </div>
          <div className="inst-quote__nav">
            {/* "Anterior"/"Próximo" sozinhos não dizem anterior a quê: fora
                de contexto visual o rótulo precisa se bastar. */}
            <button
              type="button"
              onClick={prev}
              aria-label="Ver o depoimento anterior"
              className="inst-quote__btn"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Ver o próximo depoimento"
              className="inst-quote__btn"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
