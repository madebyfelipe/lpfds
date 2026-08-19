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

// Markup oficial dos dois widgets. E injetado imperativamente (innerHTML num
// ref), nunca por dangerouslySetInnerHTML: o React 19 reaplica esse prop a cada
// re-render — o objeto {__html} e novo toda vez — e a reaplicacao apaga os
// iframes que os scripts acabaram de criar no lugar do <blockquote>.
const TIKTOK_HTML = `
  <blockquote class="tiktok-embed" cite="${TIKTOK_PROFILE}" data-unique-id="${TIKTOK_HANDLE}" data-embed-from="oembed" data-embed-type="creator" style="max-width:100%;min-width:288px;">
    <section><a target="_blank" rel="noopener noreferrer" href="${TIKTOK_PROFILE}">@${TIKTOK_HANDLE}</a></section>
  </blockquote>
`;

const instagramHtml = (permalink: string) => `
  <blockquote class="instagram-media" data-instgrm-permalink="${permalink}?utm_source=ig_embed" data-instgrm-version="14" style="background:#fff;border:0;margin:0;max-width:100%;min-width:326px;padding:0;width:100%;"></blockquote>
`;

/**
 * O embed.js do TikTok ja terminou de carregar ao menos uma vez nesta sessao.
 * Fica no modulo de proposito: precisa sobreviver a desmontagem do componente.
 */
let tiktokScriptLoaded = false;

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

  // O markup entra antes dos scripts — os dois widgets varrem a pagina atras dos
  // blockquotes assim que carregam. `childElementCount` segura o StrictMode:
  // reescrever o markup depois do widget montar apagaria o iframe dele.
  useEffect(() => {
    const node = tiktokFrame.current;
    if (!node || !tiktokNear || node.childElementCount > 0) return;
    node.innerHTML = TIKTOK_HTML;
  }, [tiktokNear]);

  useEffect(() => {
    const node = instagramStrip.current;
    if (!node || !instagramNear) return;
    node.querySelectorAll<HTMLElement>(".hub-social__post").forEach((cell, index) => {
      const permalink = INSTAGRAM_POSTS[index];
      if (permalink && cell.childElementCount === 0) {
        cell.innerHTML = instagramHtml(permalink);
      }
    });
  }, [instagramNear]);

  // O embed.js do TikTok so varre a pagina uma vez, quando carrega, e nao expoe
  // nada para reprocessar — entao numa remontagem ele precisa ser reinjetado.
  // O guard evita fazer isso enquanto a primeira copia ainda esta carregando
  // (o StrictMode do dev monta o efeito duas vezes seguidas).
  useEffect(() => {
    if (!tiktokNear) return;

    const existing = document.querySelector(`script[src="${TIKTOK_SRC}"]`);
    if (existing && !tiktokScriptLoaded) return;
    existing?.remove();

    const script = document.createElement("script");
    script.src = TIKTOK_SRC;
    script.async = true;
    script.addEventListener("load", () => {
      tiktokScriptLoaded = true;
    });
    document.body.appendChild(script);
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
            <div key={permalink} className="hub-social__post" />
          ))}
        </div>
      </section>
    </>
  );
}
