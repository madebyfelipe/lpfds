import Image from "next/image";
import Link from "next/link";
import { getImageSize } from "@/lib/image-size";
import type { Project } from "@/lib/portfolio";
import { SiteFrame } from "@/components/portfolio/SiteFrame";

type Props = {
  project: Project & { website: NonNullable<Project["website"]> };
  next: Project;
};

// Layout próprio dos cases de site institucional — independente da
// estrutura padrão de case: abertura editorial (sem capa), janela de
// navegador navegável, narrativa em capítulos e ficha de entrega.
export function WebsiteCase({ project, next }: Props) {
  const site = project.website;

  // Dimensões reais dos screenshots lidas em build time: o viewport da
  // janela reserva a proporção de cada página antes do download.
  const pages = site.pages.map((page) => ({
    ...page,
    ...getImageSize(page.src),
  }));

  // A última palavra do statement ganha a cor de destaque no título.
  const words = project.statement.split(" ");
  const accent = words.pop();
  const lead = words.join(" ");

  return (
    <main className="case webcase">
      {/* 1 — Abertura editorial: sem imagem de capa, o texto é a capa */}
      <header className="webcase-hero">
        <div className="site-shell webcase-hero__inner">
          <span className="webcase-kicker">
            Site institucional · {site.sector}
          </span>
          <h1 className="webcase-hero__title">
            {lead} <em>{accent}</em>
          </h1>
          <p className="webcase-hero__sub">{project.tagline}</p>
          <dl className="webcase-hero__meta">
            <div>
              <dt>Cliente</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Setor</dt>
              <dd>{site.sector}</dd>
            </div>
            <div>
              <dt>Ano</dt>
              <dd>{site.year}</dd>
            </div>
            <div>
              <dt>No ar em</dt>
              <dd>{site.url}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* 2 — O site, navegável: janela de navegador com as páginas reais */}
      <section className="section webcase-live">
        <div className="site-shell">
          <div className="webcase-live__header sr">
            <span className="webcase-kicker">O site, ao vivo</span>
            <p className="webcase-live__copy">
              Navegue de verdade: troque de página nas abas e role dentro da
              janela para percorrer cada tela, do topo ao rodapé.
            </p>
          </div>
          <div className="sr">
            <SiteFrame url={site.url} client={project.client} pages={pages} />
          </div>
        </div>
      </section>

      {/* 3 — Narrativa em capítulos */}
      <section className="section webcase-story">
        <div className="site-shell">
          <p className="webcase-story__lede sr">{site.intro}</p>
          <ol className="webcase-story__chapters">
            {site.chapters.map((chapter, index) => (
              <li
                key={chapter.title}
                className={`webcase-story__chapter ${
                  index % 2 === 0 ? "sr-left" : "sr-right"
                }`}
              >
                <span className="webcase-story__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="webcase-story__title">{chapter.title}</h2>
                <p className="webcase-story__text">{chapter.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 — Ficha de entrega */}
      <section className="section webcase-sheet">
        <div className="site-shell">
          <div className="webcase-sheet__panel sr">
            <span className="webcase-kicker">O que entregamos</span>
            <ul className="webcase-sheet__list">
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 — Próximo projeto (encadeamento padrão do portfólio) */}
      <Link href={`/portfolio/${next.slug}`} className="case-next">
        <div className="case-next__media">
          <Image
            src={next.images.cover}
            alt={`Próximo projeto: ${next.client}`}
            fill
            sizes="100vw"
            className="case-next__image"
          />
        </div>
        <div className="site-shell case-next__inner">
          <span className="case-next__kicker">Próximo projeto</span>
          <span className="case-next__client">{next.client}</span>
          <span className="case-next__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
    </main>
  );
}
