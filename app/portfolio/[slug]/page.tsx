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
  const applicationImage = project.images.application ?? project.images.detail;

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

        {/* 3 — Resultado */}
        <section className="section case-result">
          <div className="site-shell">
            <div className="case-result__panel sr">
              <span className="case-result__label">{project.result.label}</span>
              <div className="case-result__flow">
                <span className="case-result__before sr-left">
                  {project.result.before}
                </span>
                <span className="case-result__arrow" aria-hidden="true">
                  →
                </span>
                <span className="case-result__after sr-right">
                  {project.result.after}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 — Detalhe */}
        <section className="case-detail">
          <Lightbox
            src={project.images.detail}
            alt={`Detalhe do projeto ${project.client}`}
            className="case-detail__media sr"
          >
            <Image
              src={project.images.detail}
              alt={`Detalhe do projeto ${project.client}`}
              fill
              sizes="100vw"
              className="case-detail__image"
            />
          </Lightbox>
        </section>

        {/* 5 — Série */}
        <section className="section case-series">
          <div className="site-shell">
            <div className="case-series__grid">
              {project.images.series.map((src, i) => (
                <Lightbox
                  key={src}
                  src={src}
                  alt={`${project.client} — peça ${i + 1}`}
                  className="case-series__item sr"
                >
                  <Image
                    src={src}
                    alt={`${project.client} — peça ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="case-series__image"
                  />
                </Lightbox>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — Aplicação */}
        <section className="section case-application">
          <div className="site-shell">
            <div className="case-application__grid">
              <Lightbox
                src={applicationImage}
                alt={`${project.client} — aplicação`}
                className="case-application__media sr-left"
              >
                <Image
                  src={applicationImage}
                  alt={`${project.client} — aplicação`}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="case-application__image"
                />
              </Lightbox>
              <div className="case-application__card sr-right">
                <span className="case-application__kicker">
                  {project.applicationCaption?.kicker ?? "Aplicação"}
                </span>
                <p className="case-application__text">
                  {project.applicationCaption?.text ??
                    "Peças aplicadas nos canais do cliente."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6.5 — Apresentação completa (prancha vertical, quando existir) */}
        {project.presentation && (
          <section className="section case-presentation">
            <div className="site-shell">
              <div className="case-presentation__header sr">
                <span className="case-presentation__kicker">Apresentação</span>
                <p className="case-presentation__text">
                  A marca completa — do símbolo às aplicações, como foi
                  entregue ao cliente.
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

        {/* 7 — Statement */}
        <section className="case-statement">
          <div className="site-shell">
            <p className="case-statement__text sr">{project.statement}</p>
          </div>
        </section>

        {/* 8 — Escopo */}
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

        {/* 9 — Números */}
        <section className="section case-numbers">
          <div className="site-shell">
            <div className="case-numbers__grid sr">
              {project.numbers.map((item) => (
                <div key={item.label} className="case-numbers__item">
                  <span className="case-numbers__value">{item.value}</span>
                  <span className="case-numbers__label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 — Próximo projeto */}
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
