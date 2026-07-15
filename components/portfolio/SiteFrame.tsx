"use client";

import Image from "next/image";
import { useRef, useState } from "react";

// Página com as dimensões reais do screenshot (lidas em build time pelo
// servidor) — o viewport reserva a proporção antes do download.
export type SiteFramePage = {
  label: string;
  path: string;
  description: string;
  src: string;
  width: number;
  height: number;
};

type Props = {
  url: string;
  client: string;
  pages: SiteFramePage[];
};

// Janela de navegador navegável: a captura full-page rola dentro do
// viewport como se o site estivesse embedado. As abas do chrome e os
// cards-índice abaixo trocam a página ativa.
export function SiteFrame({ url, client, pages }: Props) {
  const [active, setActive] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);
  const viewportRef = useRef<HTMLDivElement>(null);

  const page = pages[active];

  const openPage = (index: number) => {
    setActive(index);
    setHintVisible(false);
    viewportRef.current?.scrollTo({ top: 0 });
  };

  return (
    <div className="site-frame">
      <figure className="site-frame__window">
        <div className="site-frame__chrome">
          <span className="site-frame__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <div
            className="site-frame__tabs"
            role="tablist"
            aria-label={`Páginas do site ${client}`}
          >
            {pages.map((item, index) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`site-frame__tab${
                  index === active ? " site-frame__tab--active" : ""
                }`}
                onClick={() => openPage(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="site-frame__address">
          <svg
            aria-hidden="true"
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
          >
            <rect
              x="1"
              y="6"
              width="10"
              height="7"
              rx="2"
              fill="currentColor"
            />
            <path
              d="M3.5 6V4.5a2.5 2.5 0 0 1 5 0V6"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          <span className="site-frame__url">
            {url}
            <em>{page.path === "/" ? "" : page.path}</em>
          </span>
        </div>
        <div className="site-frame__screen">
          <div
            className="site-frame__viewport"
            ref={viewportRef}
            tabIndex={0}
            aria-label={`${client} — página ${page.label}. Role para percorrer a tela inteira.`}
            onScroll={() => hintVisible && setHintVisible(false)}
          >
            {/* key troca o nó a cada aba: reinicia o fade de carregamento */}
            <Image
              key={page.src}
              src={page.src}
              alt={`Captura completa da página ${page.label} do site da ${client}`}
              width={page.width}
              height={page.height}
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="site-frame__page"
            />
          </div>
          <span
            className={`site-frame__hint${
              hintVisible ? "" : " site-frame__hint--hidden"
            }`}
            aria-hidden="true"
          >
            Role para navegar pelo site ↓
          </span>
        </div>
      </figure>

      <div className="site-frame__index">
        {pages.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={`site-frame__index-item${
              index === active ? " site-frame__index-item--active" : ""
            }`}
            onClick={() => openPage(index)}
            aria-label={`Abrir a página ${item.label} na janela acima`}
          >
            <span className="site-frame__index-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="site-frame__index-label">{item.label}</span>
            <span className="site-frame__index-desc">{item.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
