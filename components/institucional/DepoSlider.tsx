"use client";

import { useState } from "react";
import { depoimentos } from "@/lib/institucional";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Depoimentos em carrossel compacto (padrão do Monolog, coluna da esquerda da
 * seção de entregas): filete com setas e contador 01/03, rótulo e a fala.
 * Sem JS, a primeira fala aparece completa; as setas só trocam qual está à
 * vista. A região é `aria-live` para leitor de tela anunciar a troca.
 */
export function DepoSlider() {
  const [i, setI] = useState(0);
  const total = depoimentos.length;
  const d = depoimentos[i];
  const go = (step: number) => setI((v) => (v + step + total) % total);

  return (
    <div className="inst-depo">
      <div className="inst-depo__bar">
        <button
          type="button"
          className="inst-depo__arrow"
          onClick={() => go(-1)}
          aria-label="Depoimento anterior"
        >
          ←
        </button>
        <button
          type="button"
          className="inst-depo__arrow"
          onClick={() => go(1)}
          aria-label="Próximo depoimento"
        >
          →
        </button>
        <span className="inst-depo__count" aria-hidden="true">
          {pad(i + 1)}/{pad(total)}
        </span>
      </div>
      <p className="inst-depo__label">(Depoimentos de clientes)</p>
      <figure className="inst-depo__fig" aria-live="polite">
        <blockquote className="inst-depo__quote">“{d.texto}”</blockquote>
        <figcaption className="inst-depo__who">
          {d.titulo}
          <span>{d.cidade}</span>
        </figcaption>
      </figure>
    </div>
  );
}
