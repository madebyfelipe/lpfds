"use client";

import { useLayoutEffect } from "react";

type UseStackPopOptions = {
  /** Cascata entre os cards (segundos). Menor = mais junto. */
  stagger?: number;
  /** Onde a seção dispara o estalo ao entrar na viewport. */
  start?: string;
  /**
   * Ease do release. O overshoot É o "click".
   * Mais seco: "back.out(2.6)". Mais borrachudo: "elastic.out(1, 0.45)".
   */
  ease?: string;
  /** Duração da resistência (wind-up). Mais pesada: 0.14 → 0.2. */
  windUp?: number;
};

/**
 * "Stack pop": os cards começam prensados numa pilha (y+, escala menor,
 * invisíveis, rotação alternada) e, quando a seção entra na viewport,
 * cada um segura com uma micro-compressão (resistência) e então estala
 * pra fora com overshoot (o "click"), em cascata. A sombra cresce de
 * repouso → elevada → repouso durante o estalo. Clicar/tocar num card
 * refaz o estalo só dele (feedback tátil).
 *
 * Respeita prefers-reduced-motion: cards já assentados, sem animação.
 */
export function useStackPop(
  containerRef: React.RefObject<HTMLElement | null>,
  cardSelector: string,
  options: UseStackPopOptions = {}
) {
  const { stagger = 0.09, start = "top 78%", ease = "back.out(2.2)", windUp = 0.14 } = options;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    const listeners: Array<{ el: HTMLElement; handler: (e: Event) => void }> = [];

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(cardSelector);
        if (!cards.length) return;

        const center = (cards.length - 1) / 2;

        // Reduced motion: mostra tudo assentado, sem timeline.
        if (reduce) {
          gsap.set(cards, { clearProps: "transform,opacity" });
          return;
        }

        // Constrói o estalo de UM card.
        // fromStack = true  → sai da pilha prensada (reveal inicial).
        // fromStack = false → estalo leve a partir do repouso (replay ao clicar).
        const pop = (card: HTMLElement, i: number, fromStack: boolean) => {
          const tl = gsap.timeline();

          if (fromStack) {
            // 1. Estado inicial (pilha prensada)
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
            )
              // 2. Resistência (wind-up): micro-compressão que segura
              .to(
                card,
                { y: 8, scale: 0.89, opacity: 1, duration: windUp, ease: "power2.in" },
                0
              );
          } else {
            // Replay tátil: pressiona sem sumir
            tl.to(
              card,
              { y: 6, scale: 0.96, duration: 0.11, ease: "power2.in", transformOrigin: "50% 100%" },
              0
            );
          }

          // 3. O CLICK (release com overshoot). O overshoot É o "click".
          const releaseAt = tl.duration();
          tl.to(
            card,
            { y: 0, scale: 1, rotation: 0, duration: 0.55, ease },
            releaseAt
          )
            // Sombra: repouso → elevada no release, assenta antes de pousar
            .call(() => card.classList.add("is-click"), undefined, releaseAt)
            .call(() => card.classList.remove("is-click"), undefined, releaseAt + 0.34);

          return tl;
        };

        // Deixa a pilha prensada já no primeiro paint (evita flash de cards
        // visíveis antes do disparo). A seção nasce fora da viewport, então
        // isso acontece bem antes do scroll chegar.
        cards.forEach((card, i) => {
          gsap.set(card, {
            y: 44,
            scale: 0.9,
            opacity: 0,
            rotation: (i - center) * 1.4,
            transformOrigin: "50% 100%",
          });
        });

        // Master paused: ScrollTrigger dispara o estalo em cascata, uma vez.
        const master = gsap.timeline({
          scrollTrigger: { trigger: container!, start, once: true },
        });
        cards.forEach((card, i) => {
          master.add(pop(card, i, true), i * stagger);
        });

        // Replay individual: ao clicar/tocar, refaz só o estalo daquele card.
        cards.forEach((card, i) => {
          const handler = () => {
            gsap.killTweensOf(card);
            card.classList.remove("is-click");
            pop(card, i, false);
          };
          card.addEventListener("pointerdown", handler);
          listeners.push({ el: card, handler });
        });
      }, container!);
    }

    init();

    return () => {
      listeners.forEach(({ el, handler }) => el.removeEventListener("pointerdown", handler));
      ctx?.revert();
    };
  }, [containerRef, cardSelector, stagger, start, ease, windUp]);
}
