"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Lightbox } from "@/components/portfolio/Lightbox";

type GridItem = { src: string; width: number; height: number };

type Props =
  | { mode: "board"; src: string; width: number; height: number; client: string }
  | { mode: "grid"; layout: "grid-4" | "grid-1"; images: GridItem[]; client: string };

// Seção "Apresentação": ou uma prancha única (imagem já montada, estilo
// Behance) ou um grid das peças individuais. Nasce recolhida com um fade
// no rodapé; o botão expande para a altura natural em ambos os modos.
export function PresentationBoard(props: Props) {
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
      <div
        className={`presentation-board__frame${
          props.mode === "grid" ? " presentation-board__frame--grid" : ""
        }`}
      >
        {props.mode === "board" ? (
          <Image
            src={props.src}
            alt={`Apresentação completa da marca ${props.client}`}
            width={props.width}
            height={props.height}
            sizes="(max-width: 1200px) 100vw, 1160px"
            className="presentation-board__image"
          />
        ) : (
          <div
            className={`presentation-board__grid presentation-board__grid--${props.layout}`}
          >
            {props.images.map((item, i) => (
              <Lightbox
                key={item.src}
                src={item.src}
                alt={`${props.client} — peça ${i + 1}`}
                className="presentation-board__grid-item"
              >
                <Image
                  src={item.src}
                  alt={`${props.client} — peça ${i + 1}`}
                  width={item.width}
                  height={item.height}
                  sizes={
                    props.layout === "grid-4"
                      ? "(max-width: 768px) 45vw, 270px"
                      : "(max-width: 600px) 90vw, 420px"
                  }
                  className="presentation-board__grid-image"
                />
              </Lightbox>
            ))}
          </div>
        )}
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
