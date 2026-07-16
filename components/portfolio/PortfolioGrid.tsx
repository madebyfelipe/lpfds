"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectCategory, ProjectWithCoverSize } from "@/lib/portfolio";
import { ProjectCard } from "./ProjectCard";

type Filter = "Todos" | ProjectCategory;

const FILTERS: Filter[] = ["Todos", "Marca", "Conteúdo"];

export function PortfolioGrid({
  projects
}: {
  projects: ProjectWithCoverSize[];
}) {
  const [active, setActive] = useState<Filter>("Todos");
  // label mantém o último nome para o fade-out não esvaziar o pill no meio da animação
  const [label, setLabel] = useState("");
  const [labelVisible, setLabelVisible] = useState(false);
  const floaterRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const hasPosition = useRef(false);

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((project) => project.category === active);

  // Perseguição suavizada (lerp por frame): o floater chega com um leve
  // atraso ao cursor, como se flutuasse sozinho.
  useEffect(() => {
    let raf: number;
    const tick = () => {
      const el = floaterRef.current;
      if (el && hasPosition.current) {
        currentPos.current.x +=
          (targetPos.current.x - currentPos.current.x) * 0.12;
        currentPos.current.y +=
          (targetPos.current.y - currentPos.current.y) * 0.12;
        el.style.translate = `${currentPos.current.x}px ${currentPos.current.y}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Atualiza só o alvo — quem move o floater é o loop acima, sem re-render.
  const handleMove = useCallback((event: React.MouseEvent) => {
    targetPos.current = { x: event.clientX, y: event.clientY };
    if (!hasPosition.current) {
      // primeira entrada: nasce no cursor em vez de voar desde (0,0)
      currentPos.current = { x: event.clientX, y: event.clientY };
      hasPosition.current = true;
    }
  }, []);

  const handleHover = (client: string | null) => {
    if (client) {
      setLabel(client);
      setLabelVisible(true);
    } else {
      setLabelVisible(false);
    }
  };

  const changeFilter = (filter: Filter) => {
    setActive(filter);
    setLabelVisible(false); // evita floater preso quando um card sai do DOM
  };

  return (
    <section className="portfolio-board" onMouseMove={handleMove}>
      {/* Intro Header */}
      <div className="site-shell" style={{ marginBottom: "var(--space-7)", paddingTop: "var(--space-6)" }}>
        <span className="section-kicker">/PORTFÓLIO</span>
        <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)", margin: "var(--space-3) 0 var(--space-4)" }}>
          Projetos <em>selecionados</em>
        </h1>
        <p className="section-copy" style={{ margin: 0, maxWidth: "600px" }}>
          Cases de branding e conteúdo estratégico: marcas que passaram a publicar com consistência e cresceram em alcance, autoridade e demanda.
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="portfolio-structured-grid">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              // primeiros covers = candidatos a LCP → preload com fetchpriority alto
              priority={index < 2}
              onHover={handleHover}
            />
          ))}
        </div>
      ) : (
        <p className="portfolio-empty">Nenhum projeto nesta categoria.</p>
      )}

      {/* Floater com o nome do projeto — ponta inferior esquerda presa ao cursor */}
      <div
        ref={floaterRef}
        className={`portfolio-floater${
          labelVisible ? " portfolio-floater--visible" : ""
        }`}
        aria-hidden="true"
      >
        <div className="portfolio-floater__inner">
          <span className="portfolio-floater__label">{label}</span>
        </div>
      </div>

      <div
        className="portfolio-dock"
        role="group"
        aria-label="Filtrar projetos por categoria"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`portfolio-dock__pill${
              active === filter ? " portfolio-dock__pill--active" : ""
            }`}
            aria-pressed={active === filter}
            onClick={() => changeFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
