"use client";

import { useEffect } from "react";

/**
 * Ícone de pontos (matriz 7×7) que acompanha o texto, como os da página
 * About do shortscut.com. Os pontos acesos piscam em sequência por CSS
 * (`.mtd-px__dot.is-on`, atraso por ponto); com movimento reduzido ficam
 * parados. Decorativo.
 */
const SHAPES: Record<"eye" | "grid" | "wave", string[]> = {
  eye: ["..XXX..", ".X...X.", "X..X..X", "X.XXX.X", "X..X..X", ".X...X.", "..XXX.."],
  grid: ["XX.X.XX", "X.XXX.X", ".XX.XX.", "XX.X.XX", ".XX.XX.", "X.XXX.X", "XX.X.XX"],
  wave: ["X......", "XX....X", ".XX..XX", "..XXXX.", "...XX..", "..XXXX.", ".XX..XX"]
};

export function PixelIcon({ shape }: { shape: keyof typeof SHAPES }) {
  const rows = SHAPES[shape];
  return (
    <svg className="mtd-px" viewBox="0 0 70 70" aria-hidden="true" focusable="false">
      {rows.flatMap((row, y) =>
        row.split("").map((c, x) => (
          <circle
            key={`${x}-${y}`}
            className={`mtd-px__dot${c === "X" ? " is-on" : ""}`}
            cx={x * 10 + 5}
            cy={y * 10 + 5}
            r="3.6"
            style={c === "X" ? ({ "--d": `${((x * 7 + y * 3) % 11) * 0.12}s` } as React.CSSProperties) : undefined}
          />
        ))
      )}
    </svg>
  );
}

/**
 * Toda a animação do /metodologia (GSAP + ScrollTrigger, os mesmos do resto
 * do site): palavras da abertura subindo, colunas e notas entrando, a janela
 * do diagrama crescendo com a rolagem, as letras das seis áreas rodando no
 * rolo, os oito passos acendendo um a um, a régua correndo e a chamada final
 * com a foto se abrindo. Os estados iniciais só existem depois que isto roda:
 * sem JS ou com movimento reduzido, a página fica inteira e parada.
 */
export function MetodoMotion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let revert = () => {};
    let alive = true;

    import("./home/loadGsap").then(({ loadGsap }) =>
      loadGsap().then(({ gsap, ScrollTrigger, SplitText }) => {
        if (!alive) return;
        const root = document.querySelector<HTMLElement>(".mtd");
        if (!root) return;
        const ease = "ease-transition";

        const ctx = gsap.context(() => {
          // Abertura: palavras sobem de dentro da própria linha.
          const title = root.querySelector<HTMLElement>("[data-mtd-split]");
          if (title) {
            const split = new SplitText(title, { type: "lines,words", mask: "lines" });
            gsap.from(split.words, { yPercent: 110, duration: 1.1, ease, stagger: 0.035, delay: 0.15 });
            gsap.from(title.querySelectorAll(".mtd-px"), { scale: 0, duration: 0.8, ease, stagger: 0.15, delay: 0.6 });
          }

          // Blocos de texto que sobem ao entrar.
          root.querySelectorAll<HTMLElement>("[data-mtd-rise]").forEach((el) => {
            gsap.from(el, {
              y: 40,
              opacity: 0,
              duration: 1,
              ease,
              scrollTrigger: { trigger: el, start: "top 88%" }
            });
          });

          // Janela do diagrama cresce enquanto sobe.
          const media = root.querySelector("[data-mtd-media]");
          if (media) {
            gsap.fromTo(
              media,
              { scale: 0.86 },
              { scale: 1, ease: "none", scrollTrigger: { trigger: media, start: "top bottom", end: "top 25%", scrub: true } }
            );
          }

          // Seis áreas: o rolo de letras para na letra da área.
          root.querySelectorAll<HTMLElement>("[data-mtd-fact]").forEach((fact, i) => {
            const strip = fact.querySelector<HTMLElement>(".mtd-reel__strip");
            const body = fact.querySelector(".mtd-fact__body");
            const tl = gsap.timeline({ scrollTrigger: { trigger: fact, start: "top 85%" } });
            if (strip) tl.from(strip, { y: 0, duration: 1.4 + i * 0.08, ease: "power3.out" });
            if (body) tl.from(body, { x: -24, opacity: 0, duration: 0.8, ease }, "-=0.9");
          });

          // Oito passos: cada nome acende ao cruzar o meio da tela.
          // O nome começa a 50% (ainda passa 3:1 de texto grande) e o texto
          // pequeno só desliza, sem esmaecer, para não furar o contraste.
          root.querySelectorAll<HTMLElement>("[data-mtd-step]").forEach((step) => {
            const st = { trigger: step, start: "top 82%", end: "top 48%", scrub: true };
            const name = step.querySelector(".mtd-step__text");
            const copy = step.querySelector(".mtd-step__copy");
            if (name) gsap.fromTo(name, { opacity: 0.5, scale: 0.94 }, { opacity: 1, scale: 1, ease: "none", scrollTrigger: st });
            if (copy) gsap.fromTo(copy, { y: 16 }, { y: 0, ease: "none", scrollTrigger: { ...st } });
          });

          // Régua corre de lado conforme a seção entra.
          const ruler = root.querySelector("[data-mtd-ruler]");
          if (ruler) {
            gsap.fromTo(
              ruler,
              { xPercent: -12 },
              { xPercent: 0, ease: "none", scrollTrigger: { trigger: ruler, start: "top bottom", end: "bottom top", scrub: true } }
            );
          }

          // Chamada final: linhas sobem e a foto abre do centro.
          const lines = root.querySelectorAll("[data-mtd-line]");
          if (lines.length) {
            gsap.from(lines, {
              yPercent: 60,
              opacity: 0,
              duration: 1.1,
              ease,
              stagger: 0.12,
              scrollTrigger: { trigger: lines[0], start: "top 85%" }
            });
          }
          const photo = root.querySelector("[data-mtd-photo]");
          if (photo) {
            gsap.fromTo(
              photo,
              { clipPath: "inset(50% 50% 50% 50%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: { trigger: photo, start: "top 95%", end: "center 55%", scrub: true }
              }
            );
          }
        }, root);

        // Fontes e imagens mudam a altura das seções depois do primeiro
        // cálculo: recalcula os gatilhos quando tudo carregou.
        document.fonts?.ready.then(() => alive && ScrollTrigger.refresh());
        addEventListener("load", () => alive && ScrollTrigger.refresh(), { once: true });
        revert = () => ctx.revert();
      })
    );

    return () => {
      alive = false;
      revert();
    };
  }, []);

  return null;
}
