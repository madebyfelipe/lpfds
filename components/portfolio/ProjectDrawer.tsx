"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { PFL, fmt, type Locale } from "@/lib/i18n";

export type DrawerPiece = { src: string; width: number; height: number };

export type DrawerProject = {
  slug: string;
  client: string;
  category: string;
  scope: string[];
  tagline: string;
  statement: string;
  about?: string;
  // Site entregue, com protocolo — vira o botão "Acessar o site", ao lado do
  // link do case. Cases sem site (marca, conteúdo) não mostram o botão.
  site?: string;
  pieces: DrawerPiece[];
};

// Gaveta do projeto no formato da referência shortscut.com/social-content
// (?project=…): painel que entra pela direita sobre o portfólio desfocado,
// com etiquetas, título, resumo, carrossel das peças com setas e barra de
// progresso e, embaixo, o bloco "Sobre o projeto" com o link para o case
// completo. Sem números nem depoimentos: o lugar deles na referência fica
// com a frase-resumo e a frase de efeito que o case já tem.
export function ProjectDrawer({
  project,
  onClose,
  locale = "pt"
}: {
  project: DrawerProject | null;
  onClose: () => void;
  locale?: Locale;
}) {
  const t = PFL[locale];
  const hrefDoCase = locale === "en" ? "/en/portfolio" : "/portfolio";
  const [shown, setShown] = useState<DrawerProject | null>(project);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  // Abre no quadro seguinte (para a transição de entrada rodar) e, ao fechar,
  // mantém o conteúdo até a saída terminar.
  useEffect(() => {
    if (project) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setShown(project);
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
      return () => cancelAnimationFrame(id);
    }
    setOpen(false);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setTimeout(() => setShown(null), reduced ? 0 : 600);
    returnFocus.current?.focus?.();
    return () => clearTimeout(id);
  }, [project]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus({ preventScroll: true });
    panelRef.current?.scrollTo({ top: 0 });
    railRef.current?.scrollTo({ left: 0 });
    setProgress(0);
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      // foco preso na gaveta
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    addEventListener("keydown", onKey, true);
    return () => {
      html.style.overflow = prev;
      removeEventListener("keydown", onKey, true);
    };
  }, [open, onClose]);

  const onRailScroll = () => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setProgress(max > 0 ? rail.scrollLeft / max : 1);
    setEdges({ start: rail.scrollLeft <= 2, end: rail.scrollLeft >= max - 2 });
  };

  useEffect(() => {
    if (open) requestAnimationFrame(onRailScroll);
  }, [open, shown]);

  const step = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".pfd__piece");
    const amount = card ? card.offsetWidth + 16 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: dir * amount, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  if (!shown) return null;
  const tags = [shown.category, ...shown.scope];
  const paragraphs = (shown.about ?? "").split("\n\n").filter(Boolean);

  return (
    <div className="pfd" data-open={open || undefined}>
      <button type="button" className="pfd__scrim" tabIndex={-1} aria-hidden="true" onClick={onClose} />
      <div
        ref={panelRef}
        className="pfd__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pfd-title"
      >
        <button ref={closeRef} type="button" className="pfd__close" onClick={onClose}>
          {t.fechar}
        </button>

        <header className="pfd__head">
          <ul className="pfd__tags" aria-label={t.escopo}>
            {tags.map((tag) => (
              <li key={tag} className="pfd__tag">
                {tag}
              </li>
            ))}
          </ul>
          <h2 id="pfd-title" className="pfd__title">
            {shown.client}
          </h2>
          <p className="pfd__tagline">{shown.tagline}</p>
        </header>

        <div
          ref={railRef}
          className="pfd__rail"
          onScroll={onRailScroll}
          role="region"
          aria-label={fmt(t.pecas, { cliente: shown.client })}
          tabIndex={0}
        >
          {shown.pieces.map((piece, i) => {
            const ratio = Math.min(1.8, Math.max(0.56, piece.width / piece.height));
            return (
              <div key={piece.src} className="pfd__piece" style={{ "--pfd-r": ratio } as React.CSSProperties}>
                <Image
                  src={piece.src}
                  alt={fmt(t.pecaAlt, { n: i + 1, cliente: shown.client })}
                  fill
                  sizes="(max-width: 767px) 80vw, 420px"
                  className="pfd__piece-img"
                />
              </div>
            );
          })}
        </div>

        <div className="pfd__controls">
          <div className="pfd__arrows">
            <button type="button" className="pfd__arrow" onClick={() => step(-1)} disabled={edges.start} aria-label={t.anterior}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="pfd__arrow" onClick={() => step(1)} disabled={edges.end} aria-label={t.proxima}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <span className="pfd__progress" aria-hidden="true">
            <span className="pfd__progress-bar" style={{ transform: `scaleX(${Math.max(0.08, progress)})` }} />
          </span>
        </div>

        <section className="pfd__about" aria-labelledby="pfd-about">
          <p id="pfd-about" className="pfd__tag pfd__tag--label">
            {t.sobre}
          </p>
          <div className="pfd__about-body">
            <p className="pfd__statement">{shown.statement}</p>
            {paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="pfd__text">
                {text}
              </p>
            ))}
            <div className="pfd__actions">
              <Link href={`${hrefDoCase}/${shown.slug}`} className="pfd__cta">
                {t.verCase} <span aria-hidden="true">→</span>
              </Link>
              {shown.site && (
                <a
                  className="mbtn mbtn--secondary pfd__live"
                  href={shown.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={fmt(t.acessarSiteAria, { cliente: shown.client })}
                >
                  <MButtonInner>
                    {t.acessarSite}
                    <span className="sr-only">{t.novaAba}</span>
                  </MButtonInner>
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
