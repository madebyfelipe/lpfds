"use client";

import { useEffect } from "react";
import { loadGsap, T } from "./loadGsap";

/**
 * Movimento da home, portado do Monolog (bymonolog.com) efeito por efeito:
 * intro do hero e da nav, parallax das fotos, cards do hero que se revezam,
 * rótulos que entram palavra a palavra, texto que acende com o scroll, a tese
 * com letras vindo dos lados, cards empilhados, imagem que segue o hover dos
 * serviços, bolha do cursor e o recorte do CTA.
 *
 * O HTML já chega completo do servidor. `data-mh-motion` (posto por um script
 * inline antes da pintura, ver page.tsx) é o que esconde o estado inicial;
 * sem JS ou com movimento reduzido nada fica escondido.
 */
export function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      delete root.dataset.mhMotion;
      return;
    }

    let killed = false;
    let cleanup = () => {};

    (async () => {
      const { gsap, ScrollTrigger, SplitText } = await loadGsap();
      await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]);
      if (killed) return;

      const page = document.querySelector<HTMLElement>(".mh");
      if (!page) return;
      const q = <E extends Element = HTMLElement>(s: string, el: ParentNode = page) =>
        Array.from(el.querySelectorAll<E>(s));
      const one = <E extends Element = HTMLElement>(s: string, el: ParentNode = page) =>
        el.querySelector<E>(s);
      const timers: number[] = [];
      const listeners: Array<() => void> = [];
      const mm = gsap.matchMedia();

      const ctx = gsap.context(() => {
        /* ---- Intro: nav + hero ----------------------------------------- */
        const heroPs = q("[data-hero-p]");
        const heroSplit = new SplitText(heroPs, { type: "lines", mask: "lines", linesClass: "mh-line" });
        const btn = one(".mh-hero__btn");
        const visuals = one(".mh-hero__visuals");
        gsap.set(heroSplit.lines, { yPercent: 150 });
        if (btn) gsap.set(btn, { yPercent: 150 });
        if (visuals) gsap.set(visuals, { clipPath: "inset(100% 0% 0% 100% round 2px)" });

        const intro = gsap.timeline({ defaults: { ease: "ease-transition" } });
        intro.set(q("[data-animate]"), { autoAlpha: 1 });
        const allNav = q("[data-nav-intro]", document);
        gsap.set(allNav, { autoAlpha: 1 });
        // Itens com display:none (links no mobile) quebram a conta do yPercent
        // e travavam o stagger no meio — o botão Menu ficava escondido.
        const navItems = allNav.filter((el) => el.getClientRects().length > 0);
        if (navItems.length) {
          intro.fromTo(
            navItems,
            { yPercent: 100, y: 0, rotate: 0.001 },
            { yPercent: 0, y: 0, rotate: 0, duration: T.slow, stagger: 0.0525, immediateRender: true, clearProps: "transform" },
            0.3
          );
        }
        heroPs.forEach((p) => {
          const lines = heroSplit.lines.filter((l) => p.contains(l));
          intro.to(lines, { yPercent: 0, duration: T.slow, stagger: 0.075 }, Number(p.dataset.delay) || 0);
        });
        if (btn) intro.to(btn, { yPercent: 0, duration: T.slow }, 0.55);
        if (visuals) intro.to(visuals, { clipPath: "inset(0% 0% 0% 0% round 2px)", duration: T.slower }, 0);

        /* ---- Rótulos (eyebrow): palavras entram inclinadas ------------- */
        q("[data-eyebrow]").forEach((el) => {
          const text = one(".meyebrow__text", el);
          const marker = one(".meyebrow__marker", el);
          if (!text) return;
          const words = new SplitText(text, { type: "words" }).words;
          gsap.set(words, { xPercent: -40, opacity: 0, skewX: 15 });
          gsap.set(text, { xPercent: -10 });
          if (marker) gsap.set(marker, { scale: 0.4, opacity: 0 });
          gsap.set(el, { autoAlpha: 1 });
          const tl = gsap.timeline({ paused: true });
          tl.to(words, { xPercent: 0, opacity: 1, skewX: 0, duration: T.normal, stagger: 0.05, ease: "ease-transition" }, 0)
            .to(text, { xPercent: 0, duration: T.fast, ease: "ease-transition" }, "-=0.15");
          if (marker) tl.to(marker, { scale: 1, opacity: 1, duration: T.normal, ease: "ease-transition" }, "<");
          ScrollTrigger.create({ trigger: el, start: "clamp(top 85%)", once: true, onEnter: () => tl.play() });
        });

        /* ---- Títulos: linhas sobem de dentro da máscara ---------------- */
        q('[data-split="heading"]').forEach((el) => {
          const lines = new SplitText(el, { type: "lines", mask: "lines", linesClass: "mh-line" }).lines;
          gsap.fromTo(
            lines,
            { yPercent: 150, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: T.slow,
              stagger: 0.03,
              ease: "ease-transition",
              scrollTrigger: { trigger: el, start: "clamp(top 80%)", once: true }
            }
          );
        });

        /* ---- Texto que acende letra a letra com o scroll --------------- */
        q("[data-highlight-text]").forEach((el) => {
          const split = new SplitText(el, { type: "lines, words, chars" });
          const tl = gsap.timeline({ scrollTrigger: { trigger: el, scrub: true, start: "top 100%", end: "center 40%" } });
          split.lines.forEach((line, i) => {
            tl.from(
              split.chars.filter((c) => line.contains(c)),
              { autoAlpha: 0.2, stagger: 0.1, ease: "none" },
              i * 0.3
            );
          });
        });

        /* ---- Tese: letras dos lados + foto abrindo do centro ----------- */
        const gap = one(".mh-gap");
        if (gap) {
          const imgs = q(".mh-gap__img", gap);
          let idx = 0;
          let timer = 0;
          imgs.forEach((img, i) => gsap.set(img, { opacity: i === 0 ? 1 : 0 }));
          const cycle = () => {
            gsap.set(imgs[idx], { opacity: 0 });
            idx = (idx + 1) % imgs.length;
            gsap.set(imgs[idx], { opacity: 1 });
          };
          const start = () => {
            if (!timer) timer = window.setInterval(cycle, 800);
          };
          const stop = () => {
            window.clearInterval(timer);
            timer = 0;
          };
          listeners.push(stop);
          ScrollTrigger.create({ trigger: gap, start: "top bottom", end: "bottom top", onToggle: (s) => (s.isActive ? start() : stop()) });

          gsap
            .timeline({ scrollTrigger: { trigger: gap, start: "top 50%", end: "bottom top", scrub: true } })
            .to(q(".mh-gap__side", gap), { x: "0vw", duration: T.slow, ease: "ease-transition" })
            .fromTo(
              one(".mh-gap__cover", gap),
              { clipPath: "inset(50% 50% 50% 50% round 4px)" },
              { clipPath: "inset(0% 0% 0% 0% round 4px)", duration: T.slow, ease: "ease-transition" },
              "<"
            );

          q(".mh-gap__word", gap).forEach((word) => {
            const left = word.classList.contains("is-left");
            word.innerHTML = word.textContent!.replace(/ /g, '<span class="mh-space"> </span>');
            const chars = new SplitText(word, { type: "chars" }).chars;
            gsap.set(chars, { display: "inline-block", x: left ? -80 : 80, scaleY: 0.95, opacity: 0 });
            gsap.to(chars, {
              keyframes: { "40%": { opacity: 1 }, "90%": { x: 0, scaleY: 1 }, "100%": {} },
              duration: 1,
              ease: "expo.out",
              stagger: { each: 0.022, from: left ? "end" : "start" },
              scrollTrigger: { trigger: one(".mh-gap__contain", gap), start: "top 50%", end: "bottom top", scrub: 0.5 }
            });
          });
        }

        /* ---- Serviços: imagem acompanha o item em hover ---------------- */
        const services = one(".mh-services");
        const imgWrap = one(".mh-services__img-wrap");
        if (services && imgWrap) {
          const triggers = q("[data-content-trigger]", services);
          const pics = q("[data-content-image]", services);
          const list = imgWrap.parentElement!;
          let first = true;
          gsap.fromTo(
            imgWrap,
            { yPercent: -50, opacity: 0, filter: "blur(4px)" },
            {
              yPercent: 0,
              opacity: 1,
              filter: "blur(0px)",
              ease: "none",
              scrollTrigger: { trigger: services, start: "top bottom", end: "center bottom", scrub: true }
            }
          );
          const moveTo = (el: HTMLElement) => {
            const a = list.getBoundingClientRect();
            const b = el.getBoundingClientRect();
            const y = b.top - a.top + b.height / 2;
            if (first) {
              first = false;
              gsap.set(imgWrap, { y });
            } else gsap.to(imgWrap, { y, duration: T.slow, ease: "ease-transition" });
          };
          const activate = (n: number) => {
            pics.forEach((p, i) => gsap.to(p, { opacity: i === n ? 1 : 0, duration: 0.2, ease: "ease-fade" }));
            triggers.forEach((t, i) => t.toggleAttribute("data-active", i === n));
          };
          activate(0);
          moveTo(triggers[0]);
          triggers.forEach((t, i) => {
            const on = () => {
              activate(i);
              moveTo(t);
            };
            t.addEventListener("mouseenter", on);
            t.addEventListener("focusin", on);
            listeners.push(() => {
              t.removeEventListener("mouseenter", on);
              t.removeEventListener("focusin", on);
            });
          });
        }

        /* ---- CTA: recorte arredondado ao sair + seta deslizando -------- */
        const cta = one(".mh-cta__clip");
        if (cta) {
          gsap.to(cta, {
            clipPath: "inset(0% 1.25% 1.25% 1.25% round 0.35rem)",
            ease: "none",
            scrollTrigger: { trigger: cta, start: "bottom center", end: "90% top", scrub: true }
          });
          gsap.to(one(".mh-cta__slide"), {
            xPercent: 50,
            ease: "none",
            scrollTrigger: { trigger: cta, start: "top bottom", end: "bottom top", scrub: true }
          });
        }
      }, page);

      /* ---- Desktop: parallax, texto do canto, cards empilhados -------- */
      mm.add("(min-width: 992px)", () => {
        q("[data-scroll-container]").forEach((box) => {
          const dist = Number(box.dataset.translate) || 150;
          q("[data-translate]", box).forEach((img) => {
            gsap.fromTo(
              img,
              { y: -dist },
              {
                y: dist,
                ease: "none",
                scrollTrigger: {
                  trigger: box,
                  start: box.dataset.start || "top top",
                  end: "bottom top",
                  scrub: true,
                  invalidateOnRefresh: true
                }
              }
            );
          });
        });

        const deco = one(".mh-hero__deco p");
        const container = one(".mh-hero__container");
        const hero = one(".mh-hero");
        if (deco && container && hero) {
          gsap.fromTo(
            deco,
            { y: 0 },
            {
              y: () => Math.max(0, container.getBoundingClientRect().bottom - deco.getBoundingClientRect().bottom + Number(gsap.getProperty(deco, "y"))),
              ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom bottom", scrub: 0.5, invalidateOnRefresh: true }
            }
          );
        }

        const cards = q("[data-stack]");
        cards.forEach((card, i) => {
          if (i === 0) return;
          const prev = cards[i - 1];
          const shade = one("[data-stack-overlay]", prev);
          const tl = gsap.timeline({
            defaults: { ease: "none", duration: 1 },
            scrollTrigger: { trigger: card, start: "top bottom", end: "top top", scrub: true, invalidateOnRefresh: true }
          });
          tl.fromTo(prev, { yPercent: 0 }, { yPercent: 50 }, 0);
          if (shade) tl.fromTo(shade, { opacity: 0 }, { opacity: 1 }, 0);
        });
      });

      /* ---- Cards do hero: barra de 8s, troca de foto -------------------- */
      const hv = one(".mh-hero__visuals");
      const heroCycle = hv ? startHeroCycle(gsap, ScrollTrigger, hv) : () => {};

      /* ---- Bolha do cursor --------------------------------------------- */
      const bubble = one("[data-cursor]");
      if (bubble && matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const text = one("[data-cursor-text]", bubble);
        const toX = gsap.quickTo(bubble, "x", { duration: 0.4, ease: "power3.out" });
        const toY = gsap.quickTo(bubble, "y", { duration: 0.4, ease: "power3.out" });
        let x = 0;
        let y = 0;
        let moved = false;
        const check = () => {
          const hit = document.elementFromPoint(x, y)?.closest<HTMLElement>("[data-cursor-hover]");
          const edge = bubble.getBoundingClientRect().right >= innerWidth;
          bubble.dataset.cursor = hit ? (edge ? "active-edge" : "active") : "";
          if (hit && text) text.textContent = hit.dataset.cursorLabel || "";
        };
        const move = (e: MouseEvent) => {
          x = e.clientX;
          y = e.clientY;
          moved = true;
          toX(x);
          toY(y);
          requestAnimationFrame(check);
        };
        const scroll = () => moved && requestAnimationFrame(check);
        addEventListener("mousemove", move);
        addEventListener("scroll", scroll, { passive: true });
        listeners.push(() => {
          removeEventListener("mousemove", move);
          removeEventListener("scroll", scroll);
        });
      }

      /* ---- Nav some quando o rodapé entra ---------------------------- */
      const nav = document.querySelector<HTMLElement>(".mnav");
      const foot = document.querySelector<HTMLElement>("[data-footer-parallax]");
      if (nav && foot) {
        const st = ScrollTrigger.create({
          trigger: foot,
          start: "top bottom",
          onEnter: () => gsap.to(nav, { autoAlpha: 0, duration: 0.4, ease: "power2.out" }),
          onLeaveBack: () => gsap.to(nav, { autoAlpha: 1, duration: 0.4, ease: "power2.out" })
        });
        listeners.push(() => {
          st.kill();
          gsap.set(nav, { clearProps: "opacity,visibility" });
        });
      }

      ScrollTrigger.refresh();

      cleanup = () => {
        listeners.forEach((fn) => fn());
        timers.forEach((t) => clearTimeout(t));
        heroCycle();
        mm.revert();
        ctx.revert();
      };
    })();

    return () => {
      killed = true;
      cleanup();
      delete root.dataset.mhMotion;
    };
  }, []);

  return null;
}

type Gsap = typeof import("gsap").gsap;
type ST = typeof import("gsap/ScrollTrigger").ScrollTrigger;

/**
 * Os dois cards sobre a foto do hero se revezam: o ativo enche um fundo de
 * baixo para cima em 8s, o outro fica menor e sombreado; ao fim (ou num
 * clique) a foto troca com um flash e um zoom-out.
 */
function startHeroCycle(gsap: Gsap, ScrollTrigger: ST, root: HTMLElement) {
  const flash = root.querySelector<HTMLElement>(".mh-hero__flash");
  const items = Array.from(root.querySelectorAll<HTMLElement>(".mh-hero__item"));
  const cards = Array.from(root.querySelectorAll<HTMLElement>(".mh-pop"));
  const n = Math.min(items.length, cards.length);
  if (!flash || n < 2) return () => {};
  const fills = cards.map((c) => c.querySelector<HTMLElement>(".mh-pop__fill")!);
  const shades = cards.map((c) => c.querySelector<HTMLElement>(".mh-pop__shade")!);
  const imgs = items.map((i) => i.querySelector<HTMLElement>("img")!);
  const triggers = cards.map((c) => c.querySelector<HTMLElement>(".mh-pop__trigger")!);

  let current = 0;
  let shown = 0;
  let inView = false;
  let progress = null as gsap.core.Tween | null;
  let swap = null as gsap.core.Timeline | null;

  gsap.set(fills, { yPercent: 100 });
  gsap.set(flash, { autoAlpha: 0 });
  cards.forEach((c, i) => gsap.set(c, { scale: i === 0 ? 1 : 0.95 }));
  shades.forEach((s, i) => gsap.set(s, { autoAlpha: i === 0 ? 0 : 1 }));
  items.forEach((it, i) => gsap.set(it, { autoAlpha: i === 0 ? 1 : 0, zIndex: i === 0 ? 1 : 2 }));

  const sync = () => {
    if (!progress) return;
    if (inView && !document.hidden) progress.play();
    else progress.pause();
  };
  const fill = (i: number) => {
    progress?.kill();
    progress = gsap.fromTo(
      fills[i],
      { yPercent: 100 },
      { yPercent: 0, duration: 8, ease: "none", paused: true, onComplete: () => go((i + 1) % n) }
    );
    sync();
  };
  const go = (i: number) => {
    if (i === current) return;
    const prev = current;
    current = i;
    gsap.to(fills[prev], { yPercent: -100, duration: 0.6, ease: "ease-transition" });
    fill(i);
    gsap.to(cards[prev], { scale: 0.95, duration: 0.6, ease: "ease-transition" });
    gsap.to(cards[i], { scale: 1, duration: 0.6, ease: "ease-transition" });
    gsap.to(shades[prev], { autoAlpha: 1, duration: 0.6, ease: "ease-transition" });
    gsap.to(shades[i], { autoAlpha: 0, duration: 0.6, ease: "ease-transition" });
    swap?.kill();
    swap = gsap
      .timeline()
      .to(flash, { autoAlpha: 1, duration: T.fast, ease: "ease-fade" })
      .call(() => {
        gsap.set(items[shown], { autoAlpha: 0, zIndex: 1 });
        gsap.set(items[i], { autoAlpha: 1, zIndex: 2 });
        gsap.set(imgs[i], { scale: 1.2 });
        shown = i;
      })
      .to(flash, { autoAlpha: 0, duration: T.fast, ease: "ease-fade" })
      .to(imgs[i], { scale: 1, duration: T.slow, ease: "ease-transition" }, "<");
  };

  const clicks = triggers.map((t, i) => {
    const fn = () => go(i);
    t.addEventListener("click", fn);
    return () => t.removeEventListener("click", fn);
  });
  const vis = () => sync();
  document.addEventListener("visibilitychange", vis);
  const st = ScrollTrigger.create({
    trigger: root,
    start: "top bottom",
    end: "bottom top",
    onToggle: (s) => {
      inView = s.isActive;
      sync();
    }
  });
  inView = st.isActive;
  fill(0);

  return () => {
    clicks.forEach((fn) => fn());
    document.removeEventListener("visibilitychange", vis);
    st.kill();
    progress?.kill();
    swap?.kill();
  };
}
