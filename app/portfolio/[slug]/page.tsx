import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Lightbox } from "@/components/portfolio/Lightbox";
import { PresentationBoard } from "@/components/portfolio/PresentationBoard";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { getNextProject, getProject, projects } from "@/lib/portfolio";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Projeto não encontrado | Portfólio — Made by Felipe" };
  }

  return {
    title: `${project.client} | Portfólio — Made by Felipe`,
    description: project.tagline,
    openGraph: {
      title: `${project.client} | Portfólio — Made by Felipe`,
      description: project.tagline,
      images: [project.images.cover],
      type: "article"
    }
  };
}

export default async function CasePage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const next = getNextProject(slug);

  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <main className="case">
        {/* 1 — Hero */}
        <header className="case-hero">
          <div className="case-hero__media">
            <Image
              src={project.images.cover}
              alt={`Capa do projeto ${project.client}`}
              fill
              priority
              sizes="100vw"
              className="case-hero__image"
            />
          </div>
          <div className="site-shell case-hero__inner">
            <span className="case-hero__category">{project.category}</span>
            <h1 className="case-hero__title">
              {project.displayName.split("\n").map((line, i) => (
                <span key={i} className="case-hero__line">
                  {line}
                </span>
              ))}
            </h1>
          </div>
        </header>

        {/* 2 — Tagline */}
        <section className="section case-tagline">
          <div className="site-shell">
            <p className="case-tagline__text sr">{project.tagline}</p>
          </div>
        </section>

        {/* 3 — Galeria: faixa automática com todas as peças do projeto */}
        {(() => {
          const gallery =
            project.gallery ?? [project.images.detail, ...project.images.series];
          return (
            <section className="section case-gallery">
              <div className="site-shell">
                <div className="case-gallery__header sr">
                  <span className="case-gallery__kicker">Galeria</span>
                </div>
              </div>
              <div className="case-gallery__strip sr">
                <div
                  className="case-gallery__track"
                  style={
                    {
                      // velocidade constante: duração proporcional ao nº de peças
                      "--case-gallery-duration": `${gallery.length * 5}s`,
                    } as React.CSSProperties
                  }
                >
                  {[0, 1].map((copy) =>
                    gallery.map((src, i) => (
                      <Lightbox
                        key={`${copy}-${src}`}
                        src={src}
                        alt={`${project.client} — peça ${i + 1}`}
                        className="case-gallery__item"
                      >
                        {/* width/height 0 + CSS height fixa = proporção natural */}
                        <Image
                          src={src}
                          alt={
                            copy === 0
                              ? `${project.client} — peça ${i + 1}`
                              : ""
                          }
                          aria-hidden={copy === 1 || undefined}
                          width={0}
                          height={0}
                          sizes="(max-width: 768px) 90vw, 560px"
                          className="case-gallery__image"
                        />
                      </Lightbox>
                    ))
                  )}
                </div>
              </div>
            </section>
          );
        })()}

        {/* 4 — Statement */}
        <section className="case-statement">
          <div className="site-shell">
            <p className="case-statement__text sr">{project.statement}</p>
          </div>
        </section>

        {/* 5 — Escopo e Execução */}
        <section className="section case-scope">
          <div className="site-shell">
            <div className="case-scope__grid">
              <div className="case-scope__col sr-left">
                <span className="case-scope__label">Escopo</span>
                <p className="case-scope__value">{project.scope.join(" · ")}</p>
              </div>
              <div className="case-scope__col sr-right">
                <span className="case-scope__label">Execução</span>
                <p className="case-scope__value">{project.execution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 — Sobre o projeto (texto explicativo, aguardando conteúdo) */}
        {project.about && (
          <section className="section case-about">
            <div className="site-shell">
              <div className="case-about__panel sr">
                <span className="case-about__kicker">Sobre o projeto</span>
                <p className="case-about__text">{project.about}</p>
              </div>
            </div>
          </section>
        )}

        {/* 7 — Apresentação completa (prancha vertical, quando existir) */}
        {project.presentation && (
          <section className="section case-presentation">
            <div className="site-shell">
              <div className="case-presentation__header sr">
                <span className="case-presentation__kicker">Apresentação</span>
                <p className="case-presentation__text">
                  {project.presentation.text ??
                    "O projeto completo, como foi entregue ao cliente."}
                </p>
              </div>
              <PresentationBoard
                src={project.presentation.src}
                width={project.presentation.width}
                height={project.presentation.height}
                client={project.client}
              />
            </div>
          </section>
        )}

        {/* 8 — Próximo projeto */}
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
      <Footer />
    </>
  );
}
