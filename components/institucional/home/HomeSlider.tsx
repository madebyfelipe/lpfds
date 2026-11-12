"use client";

import { useEffect, useRef, useState } from "react";
import { loadGsap } from "./loadGsap";

export type SliderItem = {
  message: string;
  name: string;
  role: string;
  detail: string;
  mark: string;
};

const pad = (n: number) => String(n).padStart(2, "0");
const DURATION = 16;

/**
 * Slider do Monolog (coluna estreita das seções escuras): filete com barra
 * de progresso, setas, contador 01/03, a fala, quem fala e um detalhe em mono.
 * Troca sozinho a cada 16s enquanto está na tela. Sem JS, só a primeira fala
 * aparece — as outras ficam no HTML, escondidas.
 */
export function HomeSlider({ items, label }: { items: SliderItem[]; label: string }) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<{ go: (dir: 1 | -1) => void } | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || items.length < 2) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let killed = false;
    let cleanup = () => {};

    (async () => {
      const { gsap, ScrollTrigger, SplitText } = await loadGsap();
      await document.fonts.ready;
      if (killed) return;

      const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-slider-item]")).map((node) => ({
        node,
        split: new SplitText(node.querySelector("[data-slider-message]"), { type: "lines", mask: "lines" }),
        head: node.querySelector<HTMLElement>("[data-slider-head]"),
        details: Array.from(node.querySelectorAll<HTMLElement>("[data-slider-details]"))
      }));
      const [barA, barB] = Array.from(el.querySelectorAll<HTMLElement>("[data-slider-bar]"));
      let current = 0;
      let fill = null as gsap.core.Timeline | null;
      let swap = null as gsap.core.Timeline | null;
      let front = barA;
      let back = barB;

      slides.forEach((s, i) => {
        gsap.set(s.node, { autoAlpha: i === 0 ? 1 : 0 });
      });
      gsap.set([barA, barB], { xPercent: -100 });

      const leave = (s: (typeof slides)[number]) =>
        gsap
          .timeline()
          .to(s.split.lines, { yPercent: -150, opacity: 0, stagger: 0.03, ease: "ease-primary", duration: 0.3 })
          .to(s.head, { yPercent: -50, opacity: 0, ease: "ease-primary", duration: 0.3 }, "<")
          .to(s.details, { yPercent: -150, opacity: 0, ease: "ease-primary", duration: 0.3, stagger: 0.03 }, "<");

      const enter = (s: (typeof slides)[number]) =>
        gsap
          .timeline()
          .set(s.node, { autoAlpha: 1 })
          .fromTo(s.split.lines, { yPercent: 150, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.03, ease: "ease-transition", duration: 0.95 })
          .fromTo(s.head, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, ease: "ease-transition", duration: 0.95 }, "<")
          .fromTo(s.details, { yPercent: 150, opacity: 0 }, { yPercent: 0, opacity: 1, ease: "ease-transition", duration: 0.95, stagger: 0.03 }, "<");

      const show = (next: number) => {
        swap?.kill();
        const from = slides[current];
        const to = slides[next];
        current = next;
        setActive(next);
        if (reduced) {
          gsap.set(from.node, { autoAlpha: 0 });
          gsap.set(to.node, { autoAlpha: 1 });
          return;
        }
        swap = gsap.timeline();
        swap.add(leave(from), 0).set(from.node, { autoAlpha: 0 }).add(enter(to), 0.25);
      };

      const run = (delay: number, onStart?: () => void) => {
        fill?.kill();
        const old = front;
        front = back;
        back = old;
        gsap.set(front, { xPercent: -100 });
        fill = gsap.timeline({ onComplete: () => run(0.4, () => show((current + 1) % slides.length)) });
        if (onStart) fill.add(onStart, 0);
        fill.to(old, { xPercent: 100, duration: 0.5, ease: "power2.inOut" }, 0);
        if (!reduced) fill.to(front, { xPercent: 0, duration: DURATION, ease: "none" }, delay);
        else fill.set(front, { xPercent: 0 }, DURATION);
      };

      api.current = {
        go: (dir) => run(0.2, () => show((current + dir + slides.length) % slides.length))
      };

      run(0);
      fill?.pause();
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? fill?.resume() : fill?.pause())
      });
      if (st.isActive) fill?.resume();

      cleanup = () => {
        st.kill();
        fill?.kill();
        swap?.kill();
        slides.forEach((s) => s.split.revert());
        api.current = null;
      };
    })();

    return () => {
      killed = true;
      cleanup();
    };
  }, [items.length]);

  return (
    <div className="mslider" ref={root} role="region" aria-roledescription="carrossel" aria-label={label}>
      <div className="mslider__nav">
        <div className="mslider__line">
          <span className="mslider__bar" data-slider-bar />
          <span className="mslider__bar" data-slider-bar />
        </div>
        <div className="mslider__bottom">
          <div className="mslider__arrows">
            <button type="button" className="mslider__btn" aria-label="Anterior" onClick={() => api.current?.go(-1)}>
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M14 8H2.5M7.5 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </button>
            <button type="button" className="mslider__btn" aria-label="Próximo" onClick={() => api.current?.go(1)}>
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M2 8h11.5M8.5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </button>
          </div>
          <p className="mslider__index mmono" aria-live="polite">
            {pad(active + 1)}/{pad(items.length)}
          </p>
        </div>
      </div>
      <div className="mslider__list">
        {items.map((item, i) => (
          <figure
            key={item.message}
            className="mslider__item"
            data-slider-item
            data-active={i === active || undefined}
            aria-hidden={i === active ? undefined : true}
          >
            <blockquote className="mslider__message" data-slider-message>
              “{item.message}”
            </blockquote>
            <figcaption className="mslider__who">
              <span className="mslider__mark" data-slider-head aria-hidden="true">
                {item.mark}
              </span>
              <span className="mslider__names">
                <span className="mslider__name" data-slider-details>
                  {item.name}
                </span>
                <span className="mslider__role" data-slider-details>
                  {item.role}
                </span>
              </span>
            </figcaption>
            <p className="mslider__detail mmono" data-slider-details>
              {item.detail}
            </p>
          </figure>
        ))}
      </div>
    </div>
  );
}
