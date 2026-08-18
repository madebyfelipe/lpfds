"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useCardDeck } from "@/hooks/useCardDeck";
import { ebook } from "@/lib/newsletter";
import { openEbookModal } from "./EbookModal";

const products = [
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
    kicker: "/PORTFÓLIO",
    title: "Trabalhos",
    desc: "Cases selecionados de branding e posicionamento.",
    cta: "Ver Cases",
    href: "/projetos",
    bgColor: "#fecb4d",
    textColor: "#3b2901",
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

export function HubProducts() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [spread, setSpread] = useState(false);
  useCardDeck(gridRef, ".social-card", spread);

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

      <button
        type="button"
        className="hub-products__spread-btn"
        onClick={() => setSpread((s) => !s)}
        aria-pressed={spread}
      >
        {spread ? "Ver como baralho" : "Ver lado a lado"}
      </button>
    </section>
  );
}
