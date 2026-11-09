"use client";

import { useEffect, useState } from "react";
import { temas, type TemaSlug } from "@/lib/blog-temas";
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

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tema");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lê a URL só no cliente (a página é estática)
    setTema(temas.find((x) => x.slug === t)?.slug ?? null);
    setReady(true);
  }, []);

  const choose = (next: TemaSlug | null) => {
    setTema(next);
    const url = new URL(window.location.href);
    if (next) url.searchParams.set("tema", next);
    else url.searchParams.delete("tema");
    window.history.replaceState(null, "", url);
  };

  const needle = fold(q.trim());
  const shown = posts.filter(
    (p) => (!tema || p.tags.includes(tema)) && (!needle || fold(p.title).includes(needle))
  );
  const filtering = Boolean(tema || needle);
  const [first, ...rest] = shown;
  const cards = filtering ? shown : rest;
  const temaNome = temas.find((x) => x.slug === tema)?.label;

  return (
    <>
      <div className="inst-filters" data-ready={ready ? "" : undefined}>
        <div role="group" aria-label="Filtrar por tema" className="inst-filters__chips">
          <button type="button" className="inst-chip" aria-pressed={!tema} onClick={() => choose(null)}>
            Todos
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
            </button>
          ))}
        </div>
        <div className="inst-filters__search">
          <label htmlFor="blog-busca" className="inst-filters__label">
            Buscar por título
          </label>
          <input
            id="blog-busca"
            type="search"
            className="inst-filters__input"
            placeholder="Buscar por título"
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
          {!filtering && first && <PostCard post={first} featured />}
          <div className="inst-blog__grid">
            {cards.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
