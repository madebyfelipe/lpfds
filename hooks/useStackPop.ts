"use client";

import { useLayoutEffect } from "react";
import type { RefObject } from "react";

type UseStackPopOptions = {
  /** Desktop: cascata entre os cards no estalo de entrada (segundos). */
  stagger?: number;
  /** Desktop: onde a seção dispara o estalo ao entrar na viewport. */
  start?: string;
  /**
   * Desktop: ease do release (o overshoot É o "click").
   * Mais seco: "back.out(2.6)". Mais borrachudo: "elastic.out(1, 0.45)".
   */
  ease?: string;
  /** Desktop: duração da resistência (wind-up). Mais pesada: 0.14 → 0.2. */
  windUp?: number;
  /** Mobile: onde a pilha "prende" (pin) ao entrar. */
  mobileStart?: string;
  /** Mobile: scroll (em % da viewport) consumido por card ao trocar de foco. */
  perCardScroll?: number;
};

/**
 * Duas experiências, uma por breakpoint (via gsap.matchMedia):
 *
 * • Desktop (grid 3 colunas): "stack pop" de entrada — os cards saem de uma
 *   pilha prensada com resistência + overshoot (o "click"), em cascata, ao
 *   rolar até a seção. Clicar num card refaz o estalo dele.
 *
 * • Mobile (pilha sobreposta): seleção por scroll — a seção "prende" (pin) e,
 *   ao puxar a página, cada card sobe para um slot de visualização no topo
 *   (frente + elevado) enquanto os outros recuam/esmaecem no deck. A página só
 *   volta a rolar depois do último card.
 *
 * Respeita prefers-reduced-motion: nada anima nem prende; cards assentados.
 */
export function useStackPop(
  containerRef: RefObject<HTMLElement | null>,
  cardSelector: string,
  options: UseStackPopOptions = {}
) {
  const {
    stagger = 0.09,
    start = "top 78%",
    ease = "back.out(2.2)",
    windUp = 0.14,
    mobileStart = "top 20%",
    perCardScroll = 85,
  } = options;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const root = container!;

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(cardSelector, root);
        if (!cards.length) return;

        const mm = gsap.matchMedia();

        /* ─────────────────────────────────────────────────────────
           DESKTOP — stack pop de entrada (grid)
           ───────────────────────────────────────────────────────── */
        mm.add(
          "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          () => {
            const center = (cards.length - 1) / 2;
            const cleanups: Array<() => void> = [];

            // Enquanto o GSAP controla o transform, tiramos a transição de
            // transform do CSS (senão o overshoot fica "borrado"); a de
            // box-shadow fica, para o pico do "click".
            cards.forEach((c) => c.classList.add("is-gsap"));

            // Constrói o estalo de UM card.
            // fromStack: sai da pilha prensada (entrada) vs. estalo leve (replay).
            const pop = (card: HTMLElement, i: number, fromStack: boolean) => {
              const tl = gsap.timeline({
                onStart: () => card.classList.add("is-gsap"),
                onComplete: () => card.classList.remove("is-gsap"),
              });

              if (fromStack) {
                // 1. pilha prensada + 2. resistência (wind-up)
                tl.set(
                  card,
                  {
                    y: 44,
                    scale: 0.9,
                    opacity: 0,
                    rotation: (i - center) * 1.4,
                    transformOrigin: "50% 100%",
                  },
                  0
                ).to(
                  card,
                  { y: 8, scale: 0.89, opacity: 1, duration: windUp, ease: "power2.in" },
                  0
                );
              } else {
                // replay tátil: pressiona sem sumir
                tl.to(
                  card,
                  { y: 6, scale: 0.96, duration: 0.11, ease: "power2.in", transformOrigin: "50% 100%" },
                  0
                );
              }

              // 3. o CLICK (release com overshoot) + sombra repouso→elevada→repouso
              const releaseAt = tl.duration();
              tl.to(card, { y: 0, scale: 1, rotation: 0, duration: 0.55, ease }, releaseAt)
                .call(() => card.classList.add("is-click"), undefined, releaseAt)
                .call(() => card.classList.remove("is-click"), undefined, releaseAt + 0.34);

              return tl;
            };

            // Pilha prensada já no primeiro paint (evita flash).
            cards.forEach((card, i) => {
              gsap.set(card, {
                y: 44,
                scale: 0.9,
                opacity: 0,
                rotation: (i - center) * 1.4,
                transformOrigin: "50% 100%",
              });
            });

            // Dispara em cascata quando a seção entra na viewport.
            const master = gsap.timeline({
              scrollTrigger: { trigger: root, start, once: true },
            });
            cards.forEach((card, i) => master.add(pop(card, i, true), i * stagger));

            // Replay individual ao clicar/tocar.
            cards.forEach((card, i) => {
              const handler = () => {
                gsap.killTweensOf(card);
                card.classList.remove("is-click");
                pop(card, i, false);
              };
              card.addEventListener("pointerdown", handler);
              cleanups.push(() => card.removeEventListener("pointerdown", handler));
            });

            return () => {
              cleanups.forEach((fn) => fn());
              cards.forEach((c) => c.classList.remove("is-gsap", "is-click"));
            };
          }
        );

        /* ─────────────────────────────────────────────────────────
           MOBILE — seleção por scroll (pin + scrub)
           ───────────────────────────────────────────────────────── */
        mm.add(
          "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
          () => {
            const REST_SHADOW = "0 8px 20px rgba(0,0,0,0.10)";
            const FOCUS_SHADOW = "0 22px 40px rgba(0,0,0,0.26)";

            // Posição de cada card no deck (top absoluto: 0 / 110 / 220…).
            const baseTop = cards.map((c) => c.offsetTop);

            // Card em foco: sobe para ~6px do topo do deck, à frente e elevado.
            const focused = (j: number) => ({
              y: 6 - baseTop[j],
              scale: 1,
              opacity: 1,
              zIndex: 30,
              boxShadow: FOCUS_SHADOW,
            });
            // Cards recuados: ficam no deck, menores e esmaecidos, atrás.
            const resting = (j: number) => ({
              y: 0,
              scale: 0.92,
              opacity: 0.5,
              zIndex: 13 - j,
              boxShadow: REST_SHADOW,
            });

            // GSAP dirige transform E sombra a cada frame: sem transição CSS.
            cards.forEach((c) => c.classList.add("is-pinned"));
            gsap.set(cards, { transformOrigin: "50% 50%" });

            // Estado inicial: primeiro card em foco, resto recuado.
            cards.forEach((card, j) => gsap.set(card, j === 0 ? focused(0) : resting(j)));

            const steps = cards.length - 1;
            const tl = gsap.timeline({
              defaults: { ease: "power2.inOut", duration: 1 },
              scrollTrigger: {
                trigger: root,
                start: mobileStart,
                end: "+=" + steps * perCardScroll + "%",
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                scrub: 0.5,
                snap:
                  steps > 0
                    ? {
                        snapTo: 1 / steps,
                        duration: { min: 0.15, max: 0.3 },
                        ease: "power1.inOut",
                      }
                    : undefined,
                invalidateOnRefresh: true,
              },
            });

            // Cada passo: o card atual sobe ao topo, o anterior volta ao deck.
            for (let a = 1; a < cards.length; a++) {
              const prev = a - 1;
              const at = a - 1;
              tl.set(cards[a], { zIndex: 30 }, at)
                .set(cards[prev], { zIndex: 13 - prev }, at)
                .to(cards[prev], resting(prev), at)
                .to(cards[a], focused(a), at);
            }

            return () => {
              cards.forEach((c) => c.classList.remove("is-pinned"));
            };
          }
        );

        // Reduced motion (qualquer largura): sem branch → cards assentados,
        // scroll normal. Nada a fazer.
      }, root);
    }

    init();

    return () => {
      ctx?.revert();
    };
  }, [containerRef, cardSelector, stagger, start, ease, windUp, mobileStart, perCardScroll]);
}
