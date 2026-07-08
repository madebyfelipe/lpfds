"use client";

import { useCallback, useRef, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/portfolio";
import { ProjectCard } from "./ProjectCard";

type Filter = "Todos" | ProjectCategory;

const FILTERS: Filter[] = ["Todos", "Marca", "Conteúdo"];

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("Todos");
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((project) => project.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  // Move o cursor customizado sem re-render (propriedade `translate` individual).
  const handleMove = useCallback((event: React.MouseEvent) => {
    const el = cursorRef.current;
    if (!el) return;
    el.style.translate = `${event.clientX}px ${event.clientY}px`;
  }, []);

  const changeFilter = (filter: Filter) => {
    setActive(filter);
    setCursorLabel(null); // evita cursor preso quando um card sai do DOM
  };

  return (
    <section className="section portfolio-grid-section" onMouseMove={handleMove}>
      <div className="site-shell">
        <div
          className="portfolio-filter sr"
          role="group"
          aria-label="Filtrar projetos por categoria"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`portfolio-filter__pill${
                active === filter ? " portfolio-filter__pill--active" : ""
              }`}
              aria-pressed={active === filter}
              onClick={() => changeFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {featured ? (
          <div className="portfolio-grid">
            <ProjectCard
              project={featured}
              index={0}
              featured
              onHover={setCursorLabel}
            />

            {rest.length > 0 && (
              <div className="portfolio-grid__rest">
                {rest.map((project, i) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={i + 1}
                    onHover={setCursorLabel}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="portfolio-empty">Nenhum projeto nesta categoria.</p>
        )}
      </div>

      <div
        ref={cursorRef}
        className={`portfolio-cursor${
          cursorLabel ? " portfolio-cursor--active" : ""
        }`}
        aria-hidden="true"
      >
        <span className="portfolio-cursor__label">{cursorLabel}</span>
        <span className="portfolio-cursor__arrow">↗</span>
      </div>
    </section>
  );
}
