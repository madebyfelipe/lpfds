"use client";

import { useEffect, useRef, useState } from "react";

const HANDLE = "madebyfelipe";
const PROFILE_URL = `https://www.tiktok.com/@${HANDLE}`;
const EMBED_SRC = "https://www.tiktok.com/embed.js";

// Markup oficial do "creator embed" do TikTok: o embed.js troca o <blockquote>
// por um iframe com os videos recentes do perfil. Vai por dangerouslySetInnerHTML
// de proposito — como o script apaga o no, o React nao pode estar gerenciando os
// filhos dessa div, ou quebra ao desmontar a pagina numa navegacao client-side.
const EMBED_HTML = `
  <blockquote class="tiktok-embed" cite="${PROFILE_URL}" data-unique-id="${HANDLE}" data-embed-from="oembed" data-embed-type="creator" style="max-width:100%;min-width:288px;">
    <section><a target="_blank" rel="noopener noreferrer" href="${PROFILE_URL}">@${HANDLE}</a></section>
  </blockquote>
`;

export function HubTikTok() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // O widget do TikTok custa centenas de KB de terceiro e seta cookies deles.
  // So carrega quando a secao chega perto da tela — o topo do hub nao paga por isso.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // O embed.js so varre a pagina atras de blockquotes uma vez, quando carrega.
  // Numa navegacao client-side ele ja estaria no documento e nao faria nada —
  // por isso e removido e reinjetado a cada montagem.
  useEffect(() => {
    if (!visible) return;

    document.querySelectorAll(`script[src="${EMBED_SRC}"]`).forEach((el) => el.remove());

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [visible]);

  return (
    <section className="hub-tiktok" id="tiktok" ref={sectionRef}>
      <div className="hub-tiktok__head">
        <span className="hub-tiktok__kicker">No TikTok</span>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hub-tiktok__handle"
        >
          @{HANDLE} &rarr;
        </a>
      </div>

      <div
        className="hub-tiktok__frame"
        dangerouslySetInnerHTML={{ __html: visible ? EMBED_HTML : "" }}
      />
    </section>
  );
}
