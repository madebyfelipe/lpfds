import Image from "next/image";
import Link from "next/link";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { CASO, fmt, type Locale } from "@/lib/i18n";
import { getImageSize } from "@/lib/image-size";
import { Lightbox } from "./Lightbox";
import { PresentationBoard } from "./PresentationBoard";
import { SiteFrame } from "./SiteFrame";
import type { ProjetoLocalizado } from "@/lib/portfolio-texto";

/**
 * Corpo de uma página de case (`/portfolio/<slug>` e `/en/portfolio/<slug>`).
 *
 * O texto chega pronto (lib/portfolio.ts em português, lib/portfolio-texto.ts
 * em inglês) e as mídias são as mesmas nos dois idiomas — só os rótulos e os
 * nomes acessíveis mudam, via CASO (lib/i18n.ts).
 */
export function CaseBody({
  project,
  next,
  locale = "pt"
}: {
  project: ProjetoLocalizado;
  next: ProjetoLocalizado;
  locale?: Locale;
}) {
  const t = CASO[locale];
  const hrefDoCase = locale === "en" ? "/en/portfolio" : "/portfolio";

  // Dobra "O site": dimensões reais dos screenshots lidas em build time —
  // o viewport da janela reserva a proporção de cada página antes do download.
  const sitePages = project.website
    ? project.website.pages.map((page) => ({ ...page, ...getImageSize(page.src) }))
    : null;

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
      <main id="conteudo" className="case">
        {/* 1 — Hero */}
        <header className="case-hero">
          <div className="case-hero__media">
            <Image
              src={project.images.hero ?? project.images.cover}
              alt={fmt(t.capa, { cliente: project.client })}
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

        {/* 3 — Galeria: faixa automática com todas as peças do projeto.
            Só renderiza quando o projeto tem peças — cases sem galeria
            (ex.: uma landing page única) pulam a dobra por completo. */}
        {gallery.length > 0 && (
        <section className="section case-gallery">
          <div className="site-shell">
            <div className="case-gallery__header sr">
              <span className="case-gallery__kicker">{t.galeria}</span>
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
                gallery.map((item, i) => {
                  const alt = fmt(t.pecaGaleria, { cliente: project.client, n: i + 1 });
                  return (
                    <Lightbox
                      key={`${copy}-${item.src}`}
                      src={item.src}
                      alt={alt}
                      locale={locale}
                      className={`case-gallery__item${
                        copy === 1 ? " case-gallery__item--dup" : ""
                      }`}
                    >
                      {/* dimensões reais + CSS height fixa = proporção natural,
                          reservada antes do download */}
                      <Image
                        src={item.src}
                        alt={copy === 0 ? alt : ""}
                        aria-hidden={copy === 1 || undefined}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 768px) 90vw, 560px"
                        className="case-gallery__image"
                      />
                    </Lightbox>
                  );
                })
              )}
            </div>
          </div>
        </section>
        )}

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
                <span className="case-scope__label">{t.escopo}</span>
                <p className="case-scope__value">{project.scope.join(" · ")}</p>
              </div>
              <div className="case-scope__col sr-right">
                <span className="case-scope__label">{t.execucao}</span>
                <p className="case-scope__value">{project.execution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 — Sobre o projeto */}
        {project.about && (
          <section className="section case-about">
            <div className="site-shell">
              <div
                className={`case-about__grid${
                  project.aboutImage ? " case-about__grid--with-media" : ""
                }`}
              >
                {project.aboutImage && (
                  <div
                    className={`case-about__media sr-left${
                      project.aboutImageFit === "contain"
                        ? " case-about__media--contain"
                        : ""
                    }`}
                  >
                    <Image
                      src={project.aboutImage}
                      alt={fmt(t.bastidores, { cliente: project.client })}
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
                  <span className="case-about__kicker">{t.sobre}</span>
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

        {/* 7 — O site, ao vivo (dobra opcional: projetos que incluíram site) */}
        {project.website && sitePages && (
          <section className="section case-site">
            <div className="site-shell">
              <div className="case-site__header sr">
                <span className="case-site__kicker">{t.oSite}</span>
                <p className="case-site__text">{project.website.intro}</p>
              </div>
              <div className="sr">
                <SiteFrame
                  url={project.website.url}
                  client={project.client}
                  pages={sitePages}
                  locale={locale}
                />
              </div>
            </div>
          </section>
        )}

        {/* 8 — Apresentação completa (prancha única ou grid de peças) */}
        {presentation && (
          <section className="section case-presentation">
            <div className="site-shell">
              <div className="case-presentation__header sr">
                <span className="case-presentation__kicker">{t.apresentacao}</span>
                <p className="case-presentation__text">
                  {presentation.text ?? t.apresentacaoPadrao}
                </p>
              </div>
              {"layout" in presentation ? (
                <PresentationBoard
                  mode="grid"
                  layout={presentation.layout}
                  images={presentationGrid ?? []}
                  client={project.client}
                  locale={locale}
                />
              ) : (
                <PresentationBoard
                  mode="board"
                  src={presentation.src}
                  width={presentation.width}
                  height={presentation.height}
                  client={project.client}
                  locale={locale}
                />
              )}
            </div>
          </section>
        )}

        {/* 9 — Próximo projeto */}
        <Link href={`${hrefDoCase}/${next.slug}`} className="case-next">
          <div className="case-next__media">
            <Image
              src={next.images.cover}
              alt={fmt(t.proximoAlt, { cliente: next.client })}
              fill
              sizes="100vw"
              className="case-next__image"
            />
          </div>
          <div className="site-shell case-next__inner">
            <span className="case-next__kicker">{t.proximo}</span>
            <span className="case-next__client">{next.client}</span>
            <span className="case-next__arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        </Link>
      </main>
    </>
  );
}
