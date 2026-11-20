"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PFL, fmt, type Locale } from "@/lib/i18n";
import { PflLangSwitch } from "./PflLangSwitch";
import { ProjectDrawer, type DrawerProject } from "./ProjectDrawer";

type Filter = string;
type Item = DrawerProject & { category: string; cover: string };

// Três cópias da lista (anterior · principal · seguinte): o card ativo vive
// sempre na cópia do meio, então há vizinhos dos dois lados mesmo no
// primeiro e no último projeto. Ao sair da cópia do meio, a posição volta
// N casas sem transição, e o loop não tem fim nem salto visível.
const COPIES = 3;

// Página no formato da referência shortscut.com/launches: tela cheia, título
// gigante com contador, carrossel horizontal que avança pela rolagem,
// legenda "categoria · cliente" sob o card do centro, filtros embaixo à
// esquerda e minimapa das capas embaixo à direita.
export function PortfolioLaunches({
  items,
  locale = "pt",
  categories: ordem
}: {
  items: Item[];
  locale?: Locale;
  /** Ordem dos filtros; sem ela, a ordem em que as categorias aparecem. */
  categories?: readonly string[];
}) {
  const t = PFL[locale];
  const hrefDoCase = locale === "en" ? "/en/portfolio" : "/portfolio";
  const TODOS = t.todos;
  const [filter, setFilter] = useState<Filter>(TODOS);
  const list = useMemo(
    () => (filter === TODOS ? items : items.filter((item) => item.category === filter)),
    [filter, items, TODOS]
  );
  const n = list.length;
  const [pos, setPos] = useState(n); // posição no trilho de 3·N cards
  const [animate, setAnimate] = useState(true);
  const [drag, setDrag] = useState(0);
  const active = n ? ((pos % n) + n) % n : 0;

  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const wheelLock = useRef(0);
  const wheelAcc = useRef(0);
  const dragState = useRef<{ x: number; id: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  // Gaveta do projeto, com ?project=<slug> na URL (link direto abre ela).
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  useEffect(() => {
    const read = () => {
      const slug = new URLSearchParams(location.search).get("project");
      setOpenSlug(slug && items.some((i) => i.slug === slug) ? slug : null);
    };
    read();
    addEventListener("popstate", read);
    return () => removeEventListener("popstate", read);
  }, [items]);
  const openProject = useCallback((slug: string) => {
    history.pushState(null, "", `?project=${slug}`);
    setOpenSlug(slug);
  }, []);
  const closeProject = useCallback(() => {
    history.pushState(null, "", location.pathname);
    setOpenSlug(null);
  }, []);
  const drawerProject = openSlug ? items.find((i) => i.slug === openSlug) ?? null : null;

  const categories = (ordem ?? [...new Set(items.map((item) => item.category))]).filter((c) =>
    items.some((item) => item.category === c)
  );

  const go = useCallback(
    (delta: number) => {
      if (n < 2) return;
      setAnimate(true);
      setPos((p) => p + delta);
    },
    [n]
  );

  const goTo = useCallback(
    (index: number) => {
      setAnimate(true);
      setPos((p) => {
        // menor caminho até o índice, para o trilho não atravessar tudo
        const current = ((p % n) + n) % n;
        let delta = index - current;
        if (delta > n / 2) delta -= n;
        if (delta < -n / 2) delta += n;
        return p + delta;
      });
    },
    [n]
  );

  // Fim da transição fora da cópia do meio: volta N casas sem animar.
  const onTransitionEnd = (event: React.TransitionEvent) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (pos < n || pos >= 2 * n) {
      setAnimate(false);
      setPos(n + active);
    }
  };

  // Com movimento reduzido não há transição, então o transitionend nunca
  // chega: normaliza direto.
  useEffect(() => {
    if (!n || (pos >= n && pos < 2 * n)) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(false);
      setPos(n + active);
    }
  }, [pos, n, active]);

  // A página ocupa a tela abaixo da nav (sticky, altura muda com a fonte e
  // a largura): mede e passa para o CSS.
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".inst-nav");
    const root = rootRef.current;
    if (!nav || !root) return;
    const sync = () => root.style.setProperty("--pfl-nav", `${nav.getBoundingClientRect().height}px`);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  // Liga a transição de novo no quadro seguinte ao salto sem animação.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // A página não rola: a roda do mouse (ou o trackpad) avança o carrossel,
  // um projeto por gesto.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onWheel = (event: WheelEvent) => {
      if ((event.target as HTMLElement | null)?.closest(".pfd")) return;
      // Tela baixa demais para caber tudo: enquanto houver página para rolar
      // naquele sentido, a rolagem vertical continua sendo da página.
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        const docH = document.documentElement.scrollHeight;
        const canScroll = event.deltaY > 0 ? scrollY + innerHeight < docH - 1 : scrollY > 0;
        if (canScroll) return;
      }
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const now = performance.now();
      if (now < wheelLock.current) return;
      wheelAcc.current += delta;
      if (Math.abs(wheelAcc.current) >= 30) {
        go(wheelAcc.current > 0 ? 1 : -1);
        wheelAcc.current = 0;
        wheelLock.current = now + 550;
      }
    };
    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, [go]);

  // Setas do teclado em qualquer ponto da página (fora de campos de texto).
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable], .mnav__menu, .pfd")) return;
      if (event.key === "ArrowRight") go(1);
      else if (event.key === "ArrowLeft") go(-1);
      else return;
      event.preventDefault();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [go]);

  // Arrastar (toque ou mouse): o trilho acompanha o dedo e, ao soltar,
  // anda tantos cards quanto o arrasto cobriu.
  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    // cada gesto decide de novo se o clique que vem depois vale
    suppressClick.current = false;
    dragState.current = { x: event.clientX, id: event.pointerId, moved: false };
  };
  const onPointerMove = (event: React.PointerEvent) => {
    const state = dragState.current;
    if (!state || state.id !== event.pointerId) return;
    const dx = event.clientX - state.x;
    if (!state.moved && Math.abs(dx) > 6) {
      state.moved = true;
      try {
        stageRef.current?.setPointerCapture(event.pointerId);
      } catch {
        // ponteiro já liberado (ex.: evento sintético): segue sem captura
      }
    }
    if (state.moved) setDrag(dx);
  };
  const endDrag = (event: React.PointerEvent) => {
    const state = dragState.current;
    if (!state || state.id !== event.pointerId) return;
    dragState.current = null;
    if (!state.moved) return;
    suppressClick.current = true;
    const card = stageRef.current?.querySelector<HTMLElement>(".pfl__card");
    const step = card ? card.offsetWidth + parseFloat(getComputedStyle(card.parentElement!).columnGap || "0") : 300;
    const dx = event.clientX - state.x;
    const cards = Math.abs(dx) < 40 ? 0 : Math.max(1, Math.round(Math.abs(dx) / step));
    setDrag(0);
    if (cards) go(dx < 0 ? cards : -cards);
  };

  // Clique num card lateral centraliza; clique no do centro abre o case.
  const onCardClick = (event: React.MouseEvent, index: number) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      event.preventDefault();
      return;
    }
    if (index !== pos) {
      event.preventDefault();
      setAnimate(true);
      setPos(index);
      return;
    }
    // Card do centro abre a gaveta; Ctrl/Cmd/Shift + clique segue o link
    // para o case completo (nova aba etc.).
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    showCursor(false);
    openProject(list[active].slug);
  };

  // Etiqueta "Ver projeto" presa ao cursor sobre o card do centro.
  const onCardMove = (event: React.MouseEvent) => {
    const el = cursorRef.current;
    if (el) el.style.translate = `${event.clientX}px ${event.clientY}px`;
  };
  const showCursor = (visible: boolean) => {
    cursorRef.current?.toggleAttribute("data-visible", visible);
  };

  const changeFilter = (next: Filter) => {
    setFilter(next);
    const size = next === TODOS ? items.length : items.filter((i) => i.category === next).length;
    setAnimate(false);
    setPos(size);
  };

  const track = useMemo(
    () => Array.from({ length: COPIES }, (_, copy) => list.map((item, i) => ({ item, index: copy * n + i, copy }))).flat(),
    [list, n]
  );

  return (
    <section ref={rootRef} className="pfl" aria-labelledby="pfl-title">
      <div className="pfl__head">
        <h1 id="pfl-title" className="pfl__title">
          {t.titulo}
          <span className="pfl__count">
            <span aria-hidden="true">{fmt(t.contador, { n })}</span>
            <span className="sr-only">{fmt(t.contadorSr, { n })}</span>
          </span>
        </h1>
        <PflLangSwitch />
      </div>

      <div
        ref={stageRef}
        className="pfl__stage"
        role="region"
        aria-roledescription={locale === "en" ? "carousel" : "carrossel"}
        aria-label={t.regiao}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className="pfl__track"
          data-animate={animate && !drag ? "" : undefined}
          style={{ "--pfl-pos": pos, "--pfl-drag": `${drag}px` } as React.CSSProperties}
          onTransitionEnd={onTransitionEnd}
        >
          {track.map(({ item, index, copy }) => {
            const isActive = index === pos;
            const isMain = copy === 1;
            return (
              <Link
                key={`${copy}-${item.slug}`}
                href={`${hrefDoCase}/${item.slug}`}
                className="pfl__card"
                data-active={isActive || undefined}
                aria-hidden={isMain ? undefined : true}
                tabIndex={isMain ? undefined : -1}
                aria-label={isMain ? fmt(t.cartao, { cliente: item.client, categoria: item.category }) : undefined}
                draggable={false}
                onClick={(event) => onCardClick(event, index)}
                onFocus={(event) => {
                  // só foco de teclado: no clique, o foco chega antes do
                  // click e faria o card lateral abrir em vez de centralizar
                  if (isMain && !isActive && event.currentTarget.matches(":focus-visible")) goTo(index - n);
                }}
                onMouseMove={isActive ? onCardMove : undefined}
                onMouseEnter={isActive ? () => showCursor(true) : undefined}
                onMouseLeave={() => showCursor(false)}
              >
                <span className="pfl__media">
                  <Image
                    src={item.cover}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 86vw, 28vw"
                    priority={isMain && index - n < 3}
                    className="pfl__img"
                    draggable={false}
                  />
                </span>
                <span className="pfl__caption" aria-hidden="true">
                  <span className="pfl__caption-cat">{item.category}</span>
                  <span className="pfl__caption-client">{item.client}</span>
                </span>
              </Link>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          {n ? fmt(t.aoVivo, { n: active + 1, total: n, cliente: list[active].client }) : ""}
        </p>
      </div>

      <div className="pfl__foot">
        <div className="pfl__filters" role="group" aria-label={t.filtro}>
          <button
            type="button"
            className="pfl__chip pfl__chip--all"
            aria-pressed={filter === TODOS}
            onClick={() => changeFilter(TODOS)}
          >
            {t.todos}
          </button>
          <div className="pfl__chips">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="pfl__chip"
                aria-pressed={filter === c}
                onClick={() => changeFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Atalho de mouse: os cards já são alcançáveis pelo teclado. */}
        <div className="pfl__minimap" aria-hidden="true">
          {list.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              tabIndex={-1}
              className="pfl__thumb"
              data-active={i === active || undefined}
              onClick={() => goTo(i)}
            >
              <Image src={item.cover} alt="" fill sizes="100px" className="pfl__thumb-img" />
            </button>
          ))}
        </div>
      </div>

      <ProjectDrawer project={drawerProject} onClose={closeProject} locale={locale} />

      <span ref={cursorRef} className="pfl__cursor" aria-hidden="true">
        {t.cursor}
      </span>
    </section>
  );
}
