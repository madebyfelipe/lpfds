"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { temas, type TemaSlug } from "@/lib/blog-temas";
import { PostCard, type PostCardData } from "@/components/institucional/PostCard";

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Listagem no padrão da página /work do Monolog: título com o total entre
 * parênteses, filtros empilhados numa coluna fixa à esquerda e a grade de
 * cards à direita. Filtra por tema (?tema=) e por título. O HTML estático já
 * traz todos os posts; os filtros só aparecem depois da hidratação.
 */
export function BlogIndex({ posts, intro }: { posts: PostCardData[]; intro: string }) {
  const [tema, setTema] = useState<TemaSlug | null>(null);
  const [q, setQ] = useState("");
  const [ready, setReady] = useState(false);
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tema");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lê a URL só no cliente (a página é estática)
    setTema(temas.find((x) => x.slug === t)?.slug ?? null);
    setReady(true);
  }, []);

  // Troca de filtro com View Transitions; sem suporte ou com movimento
  // reduzido, troca na hora.
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

  // Atalho "/" foca a busca; Esc limpa.
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
  const temaNome = temas.find((x) => x.slug === tema)?.label;

  return (
    <section className="bwork" data-ready={ready ? "" : undefined}>
      <header className="bwork__header">
        <h1 className="bwork__heading">Todos os artigos</h1>
        <p className="bwork__index" aria-hidden="true">
          ({pad(shown.length)})
        </p>
      </header>

      <div className="bwork__content">
        <aside className="bwork__left">
          <p className="bwork__intro">{intro}</p>
          <div className="meyebrow">
            <span className="meyebrow__marker" aria-hidden="true" />
            <p className="meyebrow__text">Filtrar por tema</p>
          </div>
          <div className="bwork__filters" data-ready={ready ? "" : undefined}>
            <div role="group" aria-label="Filtrar por tema" className="bwork__buttons">
              <button type="button" className="bwork__btn" aria-pressed={!tema} onClick={() => choose(null)}>
                Todos os temas
              </button>
              {temas.map((t) => (
                <button
                  key={t.slug}
                  type="button"
                  className="bwork__btn"
                  aria-pressed={tema === t.slug}
                  onClick={() => choose(t.slug)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <label htmlFor="blog-busca" className="sr-only">
              Buscar por título
            </label>
            <input
              id="blog-busca"
              ref={search}
              type="search"
              className="bwork__search"
              placeholder="Buscar por título ( / )"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <p role="status" className="bwork__status">
            {shown.length === 1 ? "1 artigo" : `${shown.length} artigos`}
            {temaNome ? ` em ${temaNome}` : ""}
            {needle ? ` para “${q.trim()}”` : ""}
          </p>
        </aside>

        <div className="bwork__projects">
          {shown.length === 0 ? (
            <div className="bwork__empty">
              <p>Nenhum artigo com esse filtro.</p>
              <button
                type="button"
                className="bwork__btn"
                onClick={() => {
                  setQ("");
                  choose(null);
                }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="bwork__grid">
              {shown.map((p) => (
                <PostCard key={p.slug} post={p} morph />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
