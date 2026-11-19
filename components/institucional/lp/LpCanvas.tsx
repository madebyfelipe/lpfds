"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

/**
 * Peças vivas da /en/lp ("arquivo de design aberto", ref. ohhmydesign):
 * régua com % de rolagem e hora de São Paulo, carrossel das prévias de exemplo,
 * alavanca dos dois tamanhos e a entrada das mensagens da conversa.
 * Tudo funciona sem JS (conteúdo visível, primeira opção marcada).
 */

const SP_TZ = "America/Sao_Paulo";

function horaSaoPaulo() {
  return new Intl.DateTimeFormat("en-GB", { timeZone: SP_TZ, hour: "2-digit", minute: "2-digit", hour12: false }).format(
    new Date()
  );
}

/** Hora de São Paulo. No servidor sai "--:--" e o navegador preenche. */
export function LpClock({ className }: { className?: string }) {
  const [hora, setHora] = useState("--:--");
  useEffect(() => {
    const tick = () => setHora(horaSaoPaulo());
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <time className={className} suppressHydrationWarning>
      {hora}
    </time>
  );
}

/** Régua do canvas: fica presa sob o menu, mostra a rolagem e a hora do estúdio. */
export function LpRuler() {
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nav = document.querySelector<HTMLElement>(".mnav");
    const medir = () => el.style.setProperty("--lpc-nav-h", `${nav?.offsetHeight ?? 0}px`);
    let raf = 0;
    const rolar = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        setPct(max > 0 ? Math.min(100, Math.round((scrollY / max) * 100)) : 0);
      });
    };
    medir();
    rolar();
    addEventListener("resize", medir);
    addEventListener("scroll", rolar, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", medir);
      removeEventListener("scroll", rolar);
    };
  }, []);

  return (
    <div ref={ref} className="lpc-ruler" aria-hidden="true">
      <span className="lpc-ruler__file">your-practice.fig</span>
      <span className="lpc-ruler__pct">{pct}%</span>
      <span className="lpc-ruler__ticks">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} className="lpc-ruler__n" style={{ left: `${(i + 1) * 100}px` }}>
            {(i + 1) * 100}
          </span>
        ))}
      </span>
      <span className="lpc-ruler__live">
        <span className="lpc-dot" />
        São Paulo <LpClock />
      </span>
    </div>
  );
}

/** Liga a entrada dos blocos marcados com data-lpc-in quando chegam à tela. */
export function LpReveal() {
  useEffect(() => {
    const itens = Array.from(document.querySelectorAll<HTMLElement>("[data-lpc-in]"));
    if (!("IntersectionObserver" in window)) {
      itens.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    itens.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export type Amostra = {
  id: string;
  arquivo: string;
  foto: string;
  alt: string;
  titulo: string;
  linha: string;
  botao: string;
  estilo: "base" | "lado" | "topo";
  tags: string[];
};

/** Carrossel das prévias de exemplo: rolagem nativa com encaixe, setas e pontos. */
export function LpSamples({ itens }: { itens: Amostra[] }) {
  const trilho = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(1);

  const ir = (i: number, suave = true) => {
    const el = trilho.current;
    const alvo = el?.children[i] as HTMLElement | undefined;
    if (!el || !alvo) return;
    el.scrollTo({ left: alvo.offsetLeft - (el.clientWidth - alvo.offsetWidth) / 2, behavior: suave ? "smooth" : "auto" });
  };

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    ir(1, false);
    let raf = 0;
    const ler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const meio = el.scrollLeft + el.clientWidth / 2;
        let melhor = 0;
        let dist = Infinity;
        Array.from(el.children).forEach((c, i) => {
          const h = c as HTMLElement;
          const d = Math.abs(h.offsetLeft + h.offsetWidth / 2 - meio);
          if (d < dist) {
            dist = d;
            melhor = i;
          }
        });
        setAtivo(melhor);
      });
    };
    el.addEventListener("scroll", ler, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", ler);
    };
  }, []);

  return (
    <div className="lpc-samples">
      <div ref={trilho} className="lpc-samples__track" tabIndex={0} role="group" aria-label="Sample homepage previews">
        {itens.map((a, i) => (
          <figure
            key={a.id}
            className={`lpc-sample lpc-sample--${a.estilo}`}
            data-active={i === ativo || undefined}
            data-cursor-hover=""
            data-cursor-label="Sample preview"
          >
            <span className="lpc-sample__tag" aria-hidden="true">
              {a.arquivo}
            </span>
            <div className="lpc-site">
              <div className="lpc-site__bar" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
              </div>
              <div className="lpc-site__body">
                <Image
                  className="lpc-site__photo"
                  src={a.foto}
                  alt={a.alt}
                  fill
                  sizes="(max-width: 767px) 84vw, 52vw"
                  priority={i === 1}
                />
                <div className="lpc-site__ui" aria-hidden="true">
                  <div className="lpc-site__nav">
                    <b>Your Practice</b>
                    <span>About</span>
                    <span>Approach</span>
                    <span>Fees</span>
                    <em>Contact</em>
                  </div>
                  <div className="lpc-site__copy">
                    <p className="lpc-site__h">{a.titulo}</p>
                    <p className="lpc-site__p">{a.linha}</p>
                    <span className="lpc-site__btn">{a.botao}</span>
                  </div>
                </div>
              </div>
            </div>
            <figcaption className="lpc-sample__cap">
              <span className="lpc-sample__name">
                <span className="lpc-dot" aria-hidden="true" />
                Sample {a.id}
              </span>
              <span className="lpc-sample__tags">
                {a.tags.map((t) => (
                  <span key={t} className="lpc-pill">
                    {t}
                  </span>
                ))}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="lpc-samples__ctrl">
        <div className="lpc-samples__dots" aria-hidden="true">
          {itens.map((a, i) => (
            <span key={a.id} data-on={i === ativo || undefined} />
          ))}
        </div>
        <div className="lpc-samples__arrows">
          <button type="button" className="lpc-arrow" onClick={() => ir(Math.max(0, ativo - 1))} disabled={ativo === 0} aria-label="Previous sample">
            <svg viewBox="0 0 16 16" fill="none" focusable="false" aria-hidden="true">
              <path d="M10 3.5L5.5 8l4.5 4.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            className="lpc-arrow"
            onClick={() => ir(Math.min(itens.length - 1, ativo + 1))}
            disabled={ativo === itens.length - 1}
            aria-label="Next sample"
          >
            <svg viewBox="0 0 16 16" fill="none" focusable="false" aria-hidden="true">
              <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export type Tamanho = { id: string; rotulo: string; preco: string; texto: string };

/** Alavanca dos dois tamanhos: dois rádios; o preço e o texto trocam juntos. */
export function LpLever({ tamanhos, inclui }: { tamanhos: [Tamanho, Tamanho]; inclui: string[] }) {
  const [i, setI] = useState(0);
  const nome = useId();
  const t = tamanhos[i];

  return (
    <div className="lpc-plan" data-side={i}>
      <div className="lpc-plan__top">
        <div>
          <p className="lpc-plan__price" aria-live="polite">
            <span className="lpc-plan__cur">$</span>
            <span key={t.id} className="lpc-plan__num">
              {t.preco}
            </span>
            <span className="lpc-plan__once">paid once</span>
          </p>
          <p className="lpc-plan__meta">
            <b>{t.rotulo}</b> · no monthly fee
          </p>
        </div>
        <ul className="lpc-plan__side">
          <li>Free homepage preview first</li>
          <li>You approve in writing</li>
          <li>Then you pay, once</li>
        </ul>
      </div>

      <fieldset className="lpc-lever-set">
        <legend className="sr-only">Choose a size</legend>
        <div className="lpc-lever">
        {tamanhos.map((op, n) => (
          <label key={op.id} className="lpc-lever__opt" data-on={n === i || undefined}>
            <input type="radio" name={nome} checked={n === i} onChange={() => setI(n)} />
            <span className="lpc-lever__name">{op.rotulo}</span>
            <span className="lpc-lever__price">${op.preco}</span>
          </label>
        ))}
          <span className="lpc-lever__knob" aria-hidden="true" />
        </div>
      </fieldset>
      <p className="lpc-lever__hint" aria-hidden="true">
        Tap a side to switch
      </p>

      <p key={t.id} className="lpc-plan__text">
        {t.texto}
      </p>
      <ul className="lpc-plan__list">
        {inclui.map((x) => (
          <li key={x}>
            <Check />
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Check() {
  return (
    <svg className="lpc-check" viewBox="0 0 16 16" fill="none" focusable="false" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}
