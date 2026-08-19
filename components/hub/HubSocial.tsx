"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const TIKTOK_HANDLE = "madebyfelipe";
const TIKTOK_PROFILE = `https://www.tiktok.com/@${TIKTOK_HANDLE}`;
const TIKTOK_SRC = "https://www.tiktok.com/embed.js";

const INSTAGRAM_HANDLE = "madebyfelipe.com.br";
const INSTAGRAM_PROFILE = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;
const INSTAGRAM_SRC = "https://www.instagram.com/embed.js";

// O Instagram nao tem embed de feed — so de post. Estes sao escolhidos a mao e
// ficam fixos ate serem trocados aqui. Manter o caminho (/p/ ou /reel/) da URL.
const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DcMLr-nCMBB/",
  "https://www.instagram.com/reel/DcO2LEHCDVf/",
  "https://www.instagram.com/p/DZDCoidlpdR/"
];

// Markup oficial dos dois widgets. Vao por dangerouslySetInnerHTML de proposito:
// os scripts apagam o <blockquote> e poem um iframe no lugar, entao o React nao
// pode estar gerenciando esses filhos, ou quebra ao desmontar numa navegacao.
const TIKTOK_HTML = `
  <blockquote class="tiktok-embed" cite="${TIKTOK_PROFILE}" data-unique-id="${TIKTOK_HANDLE}" data-embed-from="oembed" data-embed-type="creator" style="max-width:100%;min-width:0;">
    <section><a target="_blank" rel="noopener noreferrer" href="${TIKTOK_PROFILE}">@${TIKTOK_HANDLE}</a></section>
  </blockquote>
`;

const instagramHtml = (permalink: string) => `
  <blockquote class="instagram-media" data-instgrm-permalink="${permalink}?utm_source=ig_embed" data-instgrm-version="14" style="background:#fff;border:0;margin:0;max-width:100%;min-width:0;padding:0;width:100%;"></blockquote>
`;

/** Vira `true` quando o elemento chega perto da viewport — e nao volta atras. */
function useNearViewport<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, near] as const;
}

/**
 * Vira `true` quando o widget troca o blockquote por um iframe. Serve para
 * soltar a altura reservada: quem decide a altura final e o TikTok/Instagram,
 * e o valor reservado quase nunca bate — sobrava um vazio embaixo do embed.
 */
function useEmbedRendered(ref: React.RefObject<HTMLElement | null>, active: boolean) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !active) return;

    if (node.querySelector("iframe")) {
      setRendered(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (node.querySelector("iframe")) {
        setRendered(true);
        observer.disconnect();
      }
    });

    observer.observe(node, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ref, active]);

  return rendered;
}

export function HubSocial() {
  const [tiktokRef, tiktokNear] = useNearViewport<HTMLElement>();
  const [instagramRef, instagramNear] = useNearViewport<HTMLElement>();

  const tiktokFrame = useRef<HTMLDivElement>(null);
  const instagramStrip = useRef<HTMLDivElement>(null);

  const tiktokReady = useEmbedRendered(tiktokFrame, tiktokNear);
  const instagramReady = useEmbedRendered(instagramStrip, instagramNear);

  // O embed.js do TikTok so varre a pagina uma vez, quando carrega. Numa
  // navegacao client-side ele ja estaria no documento sem fazer nada — por
  // isso e removido e reinjetado a cada montagem.
  useEffect(() => {
    if (!tiktokNear) return;

    document.querySelectorAll(`script[src="${TIKTOK_SRC}"]`).forEach((el) => el.remove());

    const script = document.createElement("script");
    script.src = TIKTOK_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [tiktokNear]);

  // O do Instagram, ao contrario, expoe `window.instgrm.Embeds.process()` para
  // reprocessar — nao precisa (nem adianta) reinjetar o script.
  useEffect(() => {
    if (!instagramNear) return;

    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    if (document.querySelector(`script[src="${INSTAGRAM_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = INSTAGRAM_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [instagramNear]);

  return (
    <>
      <section className="hub-social" id="tiktok" ref={tiktokRef}>
        <div className="hub-social__head">
          <span className="hub-social__kicker">No TikTok</span>
          <a
            href={TIKTOK_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="hub-social__link"
          >
            @{TIKTOK_HANDLE} &rarr;
          </a>
        </div>

        <div
          ref={tiktokFrame}
          className={`hub-social__frame${tiktokReady ? " hub-social__frame--ready" : ""}`}
          dangerouslySetInnerHTML={{ __html: tiktokNear ? TIKTOK_HTML : "" }}
        />
      </section>

      <section className="hub-social" id="instagram" ref={instagramRef}>
        <div className="hub-social__head">
          <span className="hub-social__kicker">No Instagram</span>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="hub-social__link"
          >
            @{INSTAGRAM_HANDLE} &rarr;
          </a>
        </div>

        {/* Faixa rolavel: o embed do Instagram tem largura minima propria, entao
            nao cabem tres colunas na coluna do hub nem uma coluna no celular. */}
        <div
          ref={instagramStrip}
          className={`hub-social__strip${instagramReady ? " hub-social__strip--ready" : ""}`}
        >
          {INSTAGRAM_POSTS.map((permalink) => (
            <div
              key={permalink}
              className="hub-social__post"
              dangerouslySetInnerHTML={{
                __html: instagramNear ? instagramHtml(permalink) : ""
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
