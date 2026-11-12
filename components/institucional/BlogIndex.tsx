"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { temas, type TemaSlug } from "@/lib/blog-temas";
import { CursorLabel } from "@/components/institucional/CursorLabel";
import { PostCard, type PostCardData } from "@/components/institucional/PostCard";

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

/**
 * Listagem com filtro por tema (?tema=) e busca por título. O HTML estático
 * já traz todos os posts (sem JS a lista completa aparece e os links
 * continuam rastreáveis); a barra de filtros só aparece depois da hidratação,
 * para não mostrar botão que não faz nada.
 */
export function BlogIndex({ posts }: { posts: PostCardData[] }) {
  const [tema, setTema] = useState<TemaSlug | null>(null);
  const [q, setQ] = useState("");
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tema");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lê a URL só no cliente (a página é estática)
    setTema(temas.find((x) => x.slug === t)?.slug ?? null);
    setReady(true);
  }, []);

  // Troca de filtro com transição animada (View Transitions): cada card tem
  // nome próprio, então os que ficam deslizam e os que saem/entram esmaecem.
  // Sem suporte ou com movimento reduzido, troca na hora.
  const animate = (change: () => void) => {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (!doc.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return change();
    doc.startViewTransition(() => flushSync(change));
  };

  const choose = (next: TemaSlug | null) => {
    animate(() => setTema(next));
    const url = new URL(window.location.href);
    if (next) url.searchParams.set("tema", next);
    else url.searchParams.delete("tema");
    window.history.replaceState(null, "", url);
  };

  // Atalho "/" foca a busca; Esc limpa. Ignora quando já está digitando.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const el = event.target as HTMLElement | null;
      const typing = el?.matches?.("input, textarea, select, [contenteditable]");
      if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        search.current?.focus();
      } else if (event.key === "Escape" && el === search.current) {
        setQ("");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const needle = fold(q.trim());
  const shown = posts.filter(
    (p) => (!tema || p.tags.includes(tema)) && (!needle || fold(p.title).includes(needle))
  );
  const filtering = Boolean(tema || needle);
  const [first, ...rest] = shown;
  const cards = filtering ? shown : rest;
  const temaNome = temas.find((x) => x.slug === tema)?.label;

  // Entrada dos cards ao rolar: só depois da hidratação (sem JS a lista toda
  // aparece). Cada card ganha data-in ao cruzar a borda inferior da tela.
  useEffect(() => {
    if (!ready || !root.current) return;
    const cards = [...root.current.querySelectorAll<HTMLElement>(".inst-card:not([data-in])")];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.setAttribute("data-in", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [ready, tema, needle, shown.length]);

  return (
    <div ref={root} className="inst-reveal" data-ready={ready ? "" : undefined}>
      <CursorLabel />
      <div className="inst-filters" data-ready={ready ? "" : undefined}>
        <div role="group" aria-label="Filtrar por tema" className="inst-filters__chips">
          <button type="button" className="inst-chip" aria-pressed={!tema} onClick={() => choose(null)}>
            Todos
            <span className="inst-chip__n">{posts.length}</span>
          </button>
          {temas.map((t) => (
            <button
              key={t.slug}
              type="button"
              className="inst-chip"
              aria-pressed={tema === t.slug}
              onClick={() => choose(t.slug)}
            >
              {t.label}
              <span className="inst-chip__n">{posts.filter((p) => p.tags.includes(t.slug)).length}</span>
            </button>
          ))}
        </div>
        <div className="inst-filters__search">
          <label htmlFor="blog-busca" className="inst-filters__label">
            Buscar por título
          </label>
          <input
            id="blog-busca"
            ref={search}
            type="search"
            className="inst-filters__input"
            placeholder="Buscar por título  ( / )"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      <p role="status" className="inst-filters__status">
        {shown.length === 1 ? "1 artigo" : `${shown.length} artigos`}
        {temaNome ? ` em ${temaNome}` : ""}
        {needle ? ` para “${q.trim()}”` : ""}
      </p>

      {shown.length === 0 ? (
        <div className="inst-blog__empty">
          <p>Nenhum artigo com esse filtro.</p>
          <button
            type="button"
            className="inst-link"
            onClick={() => {
              setQ("");
              choose(null);
            }}
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <>
          {!filtering && first && <PostCard post={first} featured morph />}
          <div className="inst-blog__grid">
            {cards.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} morph />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
