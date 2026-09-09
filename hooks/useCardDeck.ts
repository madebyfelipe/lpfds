"use client";

import { useCallback, useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";

/**
 * "Baralho" horizontal de cards. Os cards ficam sobrepostos como uma mão de
 * cartas (a ativa à frente e centralizada; as outras abertas para os lados,
 * opacas). A seleção se dá pelo movimento lateral:
 *
 * • Mobile: arraste/deslize na HORIZONTAL desliza a seleção pelo baralho. Um
 *   "peek" automático (a próxima carta espia e volta, poucas vezes) mais o hint
 *   "arraste" ensinam o gesto; os dois somem na primeira interação. O scroll
 *   vertical da página continua normal (touch-action: pan-y) — a seção não
 *   "prende".
 * • Desktop: clique numa carta traz ela para a frente; os botões ‹ › (via
 *   `prev`/`next` devolvidos aqui) avançam/voltam o baralho, com wrap-around.
 *
 * Respeita prefers-reduced-motion: nenhum branch roda → o CSS mostra os cards
 * em fluxo normal (legível, sem movimento), e sem botões nem hint.
 */
type DeckOptions = {
  /** Primeira interação (arraste no mobile, clique/botão no desktop). Some o hint. */
  onFirstInteract?: () => void;
};

export function useCardDeck(
  containerRef: RefObject<HTMLElement | null>,
  cardSelector: string,
  options: DeckOptions = {}
) {
  // Lido dentro do efeito sem entrar nas deps (não re-monta o baralho a cada render).
  const optionsRef = useRef(options);
  optionsRef.current = options;

  // Preenchida pelo branch desktop; os botões ‹ › chamam por aqui.
  const apiRef = useRef<{ go: (dir: number) => void } | null>(null);
  const interacted = useRef(false);

  const markInteract = useCallback(() => {
    if (interacted.current) return;
    interacted.current = true;
    optionsRef.current.onFirstInteract?.();
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;

    async function init() {
      const { gsap } = await import("gsap");
      const { Observer } = await import("gsap/dist/Observer");
      gsap.registerPlugin(Observer);

      const root = container!;

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(cardSelector, root);
        if (!cards.length) return;

        const n = cards.length;
        const mid = (n - 1) / 2;
        const REST_SHADOW = "0 10px 24px rgba(0,0,0,0.12)";
        const FOCUS_SHADOW = "0 26px 50px rgba(0,0,0,0.28)";

        const fanX = () => Math.min(root.offsetWidth * 0.14, 120);

        // Baralho contínuo: posição da carta j quando o "foco" está em p.
        const deckAt = (j: number, p: number) => {
          const d = j - p;
          const ad = Math.abs(d);
          return {
            xPercent: -50,
            x: d * fanX(),
            y: ad * 16,
            rotation: d * 6,
            scale: 1 - Math.min(ad, 2) * 0.05,
            zIndex: Math.round(30 - ad * 10),
            boxShadow: ad < 0.5 ? FOCUS_SHADOW : REST_SHADOW,
            transformOrigin: "50% 120%",
          };
        };

        // Aplica um estado numa carta; zIndex sempre instantâneo.
        const applyCard = (
          card: HTMLElement,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          state: any,
          animate: boolean
        ) => {
          const { zIndex, ...rest } = state;
          gsap.set(card, { zIndex });
          if (animate) gsap.to(card, { ...rest, duration: 0.6, ease: "power3.out" });
          else gsap.set(card, rest);
        };

        const mm = gsap.matchMedia();

        /* ── MOBILE: seleção por ARRASTE HORIZONTAL (sem pin) + hint de swipe ── */
        mm.add(
          "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
          () => {
            root.classList.add("is-live");
            gsap.set(cards, { transformOrigin: "50% 120%" });

            // "foco" contínuo do baralho (0 … n-1).
            let p = 0;
            const apply = (val: number) =>
              cards.forEach((card, j) => gsap.set(card, deckAt(j, val)));
            apply(p);

            // px de arraste necessários para trocar 1 carta.
            const dragPerCard = () => Math.max(120, root.offsetWidth * 0.55);

            let snapTween: gsap.core.Tween | undefined;
            const snap = () => {
              const target = gsap.utils.clamp(0, n - 1, Math.round(p));
              snapTween?.kill();
              const proxy = { v: p };
              snapTween = gsap.to(proxy, {
                v: target,
                duration: 0.4,
                ease: "power2.out",
                onUpdate() {
                  p = proxy.v;
                  apply(p);
                },
              });
            };

            // Hint: a próxima carta espia e volta, poucas vezes, até a 1ª
            // interação — demonstra que o baralho desliza no horizontal.
            let hint: gsap.core.Timeline | undefined;
            if (n > 1) {
              const proxy = { v: 0 };
              const peek = () => {
                p = proxy.v;
                apply(p);
              };
              hint = gsap.timeline({ delay: 0.9, repeat: 2, repeatDelay: 1.2 });
              hint
                .to(proxy, { v: 0.55, duration: 0.55, ease: "power2.inOut", onUpdate: peek })
                .to(proxy, { v: 0, duration: 0.55, ease: "power2.inOut", onUpdate: peek });
            }
            const killHint = () => {
              hint?.kill();
              hint = undefined;
            };

            const obs = Observer.create({
              target: root,
              type: "touch,pointer",
              lockAxis: true, // trava no eixo do 1º movimento → vertical rola a página
              dragMinimum: 4,
              tolerance: 10,
              onPress: () => {
                killHint();
                markInteract();
                snapTween?.kill();
              },
              onChangeX: (self) => {
                // arrastar para a esquerda (deltaX < 0) avança para a próxima carta.
                p = gsap.utils.clamp(0, n - 1, p - self.deltaX / dragPerCard());
                apply(p);
              },
              onRelease: snap,
              onStop: snap,
            });

            return () => {
              obs.kill();
              snapTween?.kill();
              killHint();
              root.classList.remove("is-live");
            };
          }
        );

        /* ── DESKTOP: baralho + clique-para-frente + botões ‹ › (wrap-around) ── */
        mm.add(
          "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          () => {
            root.classList.add("is-live");
            gsap.set(cards, { transformOrigin: "50% 120%" });

            let active = Math.round(mid);

            const applyDesktop = (animate: boolean) => {
              cards.forEach((card, j) => applyCard(card, deckAt(j, active), animate));
            };

            applyDesktop(false);

            // Clique numa carta a traz para a frente.
            const cleanups: Array<() => void> = [];
            cards.forEach((card, j) => {
              const onClick = () => {
                if (active === j) return;
                markInteract();
                active = j;
                applyDesktop(true);
              };
              card.addEventListener("click", onClick);
              cleanups.push(() => card.removeEventListener("click", onClick));
            });

            const onResize = () => applyDesktop(false);
            window.addEventListener("resize", onResize);
            cleanups.push(() => window.removeEventListener("resize", onResize));

            // Navegação pelos botões ‹ › (wrap-around, sempre habilitados).
            apiRef.current = {
              go: (dir) => {
                markInteract();
                active = (active + dir + n) % n;
                applyDesktop(true);
              },
            };

            return () => {
              cleanups.forEach((fn) => fn());
              apiRef.current = null;
              root.classList.remove("is-live");
            };
          }
        );

        // Reduced motion: sem branch → CSS mostra os cards em fluxo normal.
      }, root);
    }

    init();

    return () => {
      ctx?.revert();
    };
  }, [containerRef, cardSelector, markInteract]);

  const prev = useCallback(() => apiRef.current?.go(-1), []);
  const next = useCallback(() => apiRef.current?.go(1), []);

  return { prev, next };
}
