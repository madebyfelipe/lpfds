"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  client: string;
};

// Prancha de apresentação completa (vertical, estilo Behance).
// Nasce recolhida com um fade no rodapé; o botão expande para a
// altura natural — a imagem nunca é cortada, só ocultada.
export function PresentationBoard({ src, width, height, client }: Props) {
  const [expanded, setExpanded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const next = !expanded;
    setExpanded(next);
    requestAnimationFrame(() => {
      if (!next) {
        // ao recolher, devolve o usuário ao topo da prancha
        rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // a altura da página muda — recalcula os gatilhos do ScrollTrigger
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) =>
        ScrollTrigger.refresh()
      );
    });
  };

  return (
    <div
      ref={rootRef}
      className={`presentation-board${
        expanded ? " presentation-board--open" : ""
      }`}
    >
      <div className="presentation-board__frame">
        <Image
          src={src}
          alt={`Apresentação completa da marca ${client}`}
          width={width}
          height={height}
          sizes="(max-width: 1200px) 100vw, 1160px"
          className="presentation-board__image"
        />
        {!expanded && (
          <div className="presentation-board__fade" aria-hidden="true" />
        )}
      </div>
      <div className="presentation-board__actions">
        <button
          type="button"
          className="button button--ghost presentation-board__toggle"
          aria-expanded={expanded}
          onClick={toggle}
        >
          {expanded ? "Recolher apresentação" : "Ver apresentação completa"}
        </button>
      </div>
    </div>
  );
}
