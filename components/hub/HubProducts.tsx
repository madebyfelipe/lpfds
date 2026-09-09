"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useCardDeck } from "@/hooks/useCardDeck";
import { ebook } from "@/lib/newsletter";
import { hubWebinarHref } from "@/lib/webinar";
import { openEbookModal } from "./EbookModal";

const products = [
  {
    kicker: "/WORKSHOP",
    title: "Workshop de criação de conteúdo",
    desc: "Aula ao vivo para psicólogos de consultório. Sáb 24/10, 10h — grátis.",
    cta: "Garantir vaga",
    href: hubWebinarHref,
    bgColor: "#151515",
    textColor: "#f6f6f6",
    invert: true,
    avatars: ["/eu.jpg", "/avatar-milton.png", "/logo-no-text-white.png"],
  },
  {
    kicker: "/E-BOOK",
    title: ebook.short,
    desc: "Construção de marca para psicólogos. Grátis pra quem entra na newsletter.",
    cta: "Baixar grátis",
    // Não navega: abre o modal de newsletter, que é o portão do download.
    href: null,
    bgColor: "#d4eb95",
    textColor: "#1b350f",
    invert: false,
    avatars: ["/eu.jpg", "/avatar-milton.png", "/logo-no-text-white.png"],
  },
  {
    kicker: "/MÉTODO",
    title: "Como trabalho",
    desc: "Meu método, não chute. Do briefing à decisão final.",
    cta: "Conhecer",
    href: "/#processo",
    bgColor: "#ff8585",
    textColor: "#430806",
    invert: false,
    avatars: ["/eu.jpg", "/avatar-milton.png", "/logo-no-text-white.png"],
  },
  {
    kicker: "/CONTATO",
    title: "Contato",
    desc: "Agende um horário ou mande uma mensagem — do seu jeito.",
    cta: "Falar comigo",
    href: "/contato",
    bgColor: "#d42b2b",
    textColor: "#ffffff",
    invert: true,
    avatars: ["/eu.jpg", "/avatar-milton.png", "/logo-no-text-white.png"],
  },
];

const arrowIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const chevron = (dir: "left" | "right") => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    {dir === "left" ? (
      <polyline points="15 5 8 12 15 19" />
    ) : (
      <polyline points="9 5 16 12 9 19" />
    )}
  </svg>
);

export function HubProducts() {
  const gridRef = useRef<HTMLDivElement>(null);
  // Hint de swipe (mobile): visível até a 1ª interação com o baralho.
  const [showHint, setShowHint] = useState(true);
  const { prev, next } = useCardDeck(gridRef, ".social-card", {
    onFirstInteract: () => setShowHint(false),
  });

  return (
    <section className="hub-products">
      <div className="hub-products__grid" ref={gridRef}>
        {products.map((item) => {
          const isExternal = item.href?.startsWith("http") ?? false;
          const externalProps = isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
          <article
            key={item.title}
            className={`hub-card-ref social-card${item.invert ? " hub-card-ref--invert" : ""}`}
            style={{ backgroundColor: item.bgColor, color: item.textColor }}
          >
            <div className="hub-card-ref__header">
              <span className="hub-card-ref__kicker">{item.kicker}</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hub-card-ref__action-btn"
                  aria-label={`Acessar ${item.title}`}
                  {...externalProps}
                >
                  {arrowIcon}
                </Link>
              ) : (
                <button
                  type="button"
                  className="hub-card-ref__action-btn"
                  aria-label={`Acessar ${item.title}`}
                  onClick={openEbookModal}
                >
                  {arrowIcon}
                </button>
              )}
            </div>

            <h3 className="hub-card-ref__title">{item.title}</h3>
            <p className="hub-card-ref__desc">{item.desc}</p>

            <div className="hub-card-ref__bottom">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hub-card-ref__pill-btn"
                  {...externalProps}
                >
                  {item.cta}
                </Link>
              ) : (
                <button
                  type="button"
                  className="hub-card-ref__pill-btn"
                  onClick={openEbookModal}
                >
                  {item.cta}
                </button>
              )}
            </div>
          </article>
          );
        })}
      </div>

      {/* Hint de swipe — só mobile (CSS), some na 1ª interação. Decorativo. */}
      <div className="hub-products__hint" aria-hidden="true" hidden={!showHint}>
        <span className="hub-products__hint-icon">
          {chevron("left")}
          {chevron("right")}
        </span>
        Arraste para ver os cards
      </div>

      {/* Navegação — só desktop (CSS). Avança/volta o baralho. */}
      <div className="hub-products__nav">
        <button
          type="button"
          className="hub-products__nav-btn"
          onClick={prev}
          aria-label="Card anterior"
        >
          {chevron("left")}
        </button>
        <button
          type="button"
          className="hub-products__nav-btn"
          onClick={next}
          aria-label="Próximo card"
        >
          {chevron("right")}
        </button>
      </div>
    </section>
  );
}
