"use client";

import { useEffect, useState } from "react";

const TZ = "America/Sao_Paulo";

/**
 * Hora e data de Sorocaba no rodapé, com os dois-pontos piscando como no
 * Monolog. Só aparece depois da hidratação (a hora do servidor divergiria do
 * cliente). Sem JS simplesmente não há relógio.
 */
export function FooterRelogio() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  const [h, m, s] = new Intl.DateTimeFormat("pt-BR", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })
    .format(now)
    .split(":");
  const date = new Intl.DateTimeFormat("pt-BR", {
    timeZone: TZ,
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(now);

  return (
    <span className="mfoot__clock" aria-hidden="true">
      <span>
        Sorocaba {h}
        <span className="mfoot__colon">:</span>
        {m}
        <span className="mfoot__colon">:</span>
        {s}
      </span>
      <span className="mfoot__date">{date} (GMT −03)</span>
    </span>
  );
}

/** "Voltar ao topo" do rodapé; usa o Lenis quando ele está ligado. */
export function FooterTopo() {
  return (
    <button
      type="button"
      className="mfoot__top-btn"
      onClick={() => {
        const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o: object) => void } }).__lenis;
        if (lenis) lenis.scrollTo(0, { duration: 1 });
        else
          window.scrollTo({
            top: 0,
            behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
          });
      }}
    >
      <span className="mfoot__top-text">Voltar ao topo</span> <span aria-hidden="true">↑</span>
    </button>
  );
}

/**
 * Efeitos do rodapé: parallax de entrada (o miolo sobe 15% e uma película
 * escura se desfaz), a faixa de meio-tom em canvas descendo e os dois textos
 * dela vindo dos lados. Segurar o clique agita o meio-tom. Com movimento
 * reduzido o canvas desenha um quadro só e nada se mexe.
 */
export function FooterFx() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("[data-footer-parallax]");
    const wrap = footer?.querySelector<HTMLElement>("[data-footer-canvas]");
    const canvas = wrap?.querySelector("canvas");
    if (!footer || !wrap || !canvas) return;
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let t = 0;
    let speed = 1;
    let visible = false;
    const styles = getComputedStyle(footer);

    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = wrap.clientWidth * dpr;
      canvas.height = wrap.clientHeight * dpr;
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      const cell = 7;
      ctx2d.clearRect(0, 0, w, h);
      ctx2d.fillStyle = styles.getPropertyValue("--m-light-3").trim() || "#d1d1c7";
      for (let y = cell / 2; y < h; y += cell) {
        for (let x = cell / 2; x < w; x += cell) {
          const v =
            Math.sin(x * 0.0042 + t * 0.6) * Math.cos(y * 0.011 - t * 0.45) +
            Math.sin((x * 0.6 + y) * 0.0035 - t * 0.3) * 0.8 +
            Math.cos(x * 0.0017 - y * 0.004 + t * 0.2) * 0.6;
          const r = Math.max(0, Math.min(1, (v + 0.4) / 1.6)) * (cell / 2);
          if (r < 0.35) continue;
          ctx2d.beginPath();
          ctx2d.arc(x, y, r, 0, Math.PI * 2);
          ctx2d.fill();
        }
      }
    };
    const loop = () => {
      t += 0.012 * speed;
      speed += (1 - speed) * 0.03;
      draw();
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    size();
    draw();
    const ro = new ResizeObserver(() => {
      size();
      draw();
    });
    ro.observe(wrap);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !reduced;
      if (visible && !raf) raf = requestAnimationFrame(loop);
    });
    io.observe(wrap);

    let holding = 0;
    const down = () => {
      holding = window.setInterval(() => (speed = Math.min(speed + 0.6, 9)), 60);
    };
    const up = () => window.clearInterval(holding);
    wrap.addEventListener("pointerdown", down);
    addEventListener("pointerup", up);

    let revert = () => {};
    if (!reduced) {
      import("./home/loadGsap").then(({ loadGsap }) =>
        loadGsap().then(({ gsap }) => {
          const g = gsap.context(() => {
            const inner = footer.querySelector("[data-footer-inner]");
            const dark = footer.querySelector("[data-footer-dark]");
            gsap
              .timeline({ scrollTrigger: { trigger: footer, start: "clamp(top bottom)", end: "clamp(top top)", scrub: true } })
              .from(inner, { yPercent: -15, ease: "none" })
              .from(dark, { opacity: 0.5, ease: "none" }, "<");
            const tl = gsap.timeline({
              scrollTrigger: { trigger: wrap, start: "clamp(top bottom)", end: "clamp(top top)", scrub: true }
            });
            tl.from(canvas, { yPercent: -80, ease: "none" });
            footer.querySelectorAll<HTMLElement>("[data-canvas-content]").forEach((el) => {
              tl.fromTo(
                el,
                { xPercent: el.dataset.canvasContent === "left" ? 100 : -100, opacity: 0 },
                { xPercent: 0, opacity: 1, ease: "none" },
                "<"
              );
            });
          }, footer);
          revert = () => g.revert();
        })
      );
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointerdown", down);
      removeEventListener("pointerup", up);
      up();
      revert();
    };
  }, []);

  return null;
}
