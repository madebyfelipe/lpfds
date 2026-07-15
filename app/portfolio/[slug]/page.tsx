import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Lightbox } from "@/components/portfolio/Lightbox";
import { PresentationBoard } from "@/components/portfolio/PresentationBoard";
import { WebsiteCase } from "@/components/portfolio/WebsiteCase";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { getImageSize } from "@/lib/image-size";
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

  // Cases de site institucional têm estrutura própria de apresentação —
  // nada da sequência padrão abaixo se aplica a eles.
  if (project.website) {
    return (
      <>
        <ScrollRevealInit />
        <Nav collapsible />
        <WebsiteCase
          project={{ ...project, website: project.website }}
          next={next}
        />
        <Footer />
      </>
    );
  }

  // Seção "Apresentação" em modo grid: usa as peças explícitas ou, na
  // ausência delas, reaproveita a faixa da Galeria — com dimensões reais
  // lidas em build time, como no restante da página.
  const presentation = project.presentation;
  const presentationGrid =
    presentation && "layout" in presentation
      ? (presentation.images ?? project.gallery ?? []).map((src) => ({
          src,
          ...getImageSize(src)
        }))
      : null;

  // Peças da faixa automática da Galeria, com dimensões reais lidas em
  // build time — o navegador reserva a proporção de cada item antes do
  // download, sem layout shift na faixa.
  const fullGallery =
    project.gallery ??
    (project.images.detail && project.images.series
      ? [project.images.detail, ...project.images.series]
      : []);
  // Quando a Apresentação em grid reusa a mesma lista, a faixa vira uma
  // amostra — sem isso todas as peças apareceriam duas vezes na página.
  const presentationReusesGallery =
    !!presentation && "layout" in presentation && !presentation.images;
  const gallery = (
    presentationReusesGallery ? fullGallery.slice(0, 10) : fullGallery
  ).map((src) => ({ src, ...getImageSize(src) }));

  return (
    <>
      <ScrollRevealInit />
      <Nav collapsible />
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
                gallery.map((item, i) => (
                  <Lightbox
                    key={`${copy}-${item.src}`}
                    src={item.src}
                    alt={`${project.client} — peça ${i + 1}`}
                    className={`case-gallery__item${
                      copy === 1 ? " case-gallery__item--dup" : ""
                    }`}
                  >
                    {/* dimensões reais + CSS height fixa = proporção natural,
                        reservada antes do download */}
                    <Image
                      src={item.src}
                      alt={
                        copy === 0
                          ? `${project.client} — peça ${i + 1}`
                          : ""
                      }
                      aria-hidden={copy === 1 || undefined}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 768px) 90vw, 560px"
                      className="case-gallery__image"
                    />
                  </Lightbox>
                ))
              )}
            </div>
          </div>
        </section>

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
              <div
                className={`case-about__grid${
                  project.aboutImage ? " case-about__grid--with-media" : ""
                }`}
              >
                {project.aboutImage && (
                  <div className="case-about__media sr-left">
                    <Image
                      src={project.aboutImage}
                      alt={`Bastidores do projeto ${project.client}`}
                      {...getImageSize(project.aboutImage)}
                      sizes="(max-width: 900px) 100vw, 45vw"
                      className="case-about__photo"
                    />
                  </div>
                )}
                <div
                  className={`case-about__panel ${
                    project.aboutImage ? "sr-right" : "sr"
                  }`}
                >
                  <span className="case-about__kicker">Sobre o projeto</span>
                  {project.about.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="case-about__text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 7 — Apresentação completa (prancha única ou grid de peças) */}
        {presentation && (
          <section className="section case-presentation">
            <div className="site-shell">
              <div className="case-presentation__header sr">
                <span className="case-presentation__kicker">Apresentação</span>
                <p className="case-presentation__text">
                  {presentation.text ??
                    "O projeto completo, como foi entregue ao cliente."}
                </p>
              </div>
              {"layout" in presentation ? (
                <PresentationBoard
                  mode="grid"
                  layout={presentation.layout}
                  images={presentationGrid ?? []}
                  client={project.client}
                />
              ) : (
                <PresentationBoard
                  mode="board"
                  src={presentation.src}
                  width={presentation.width}
                  height={presentation.height}
                  client={project.client}
                />
              )}
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
