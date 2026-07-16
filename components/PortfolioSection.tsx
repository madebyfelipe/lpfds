import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/portfolio";
import { getImageSize } from "@/lib/image-size";

export function PortfolioSection() {
  // Pegamos os 3 primeiros projetos reais e associamos suas dimensões
  const featured = projects.slice(0, 3).map((project) => ({
    ...project,
    coverSize: getImageSize(project.images.cover),
  }));

  return (
    <section id="portfolio-section" className="section" style={{ background: "var(--bg-page)" }}>
      <div className="site-shell">
        <div className="portfolio-split__layout">
          {/* Left Column (Sticky Sidebar) */}
          <aside className="portfolio-split__sidebar sr">
            <div className="section-header section-header--left">
              <span className="section-kicker">/PORTFÓLIO</span>
              <h2 className="section-title">
                Alguns <em>projetos</em>
              </h2>
              <p className="section-copy" style={{ margin: "var(--space-4) 0 var(--space-6)" }}>
                Cada projeto resolve um problema diferente. Mas todos têm a mesma intenção: fazer a marca parecer mais confiável, mais profissional e mais valiosa.
              </p>
              <Link href="/portfolio" className="button button--secondary">
                Ver todos os projetos
              </Link>
            </div>
          </aside>

          {/* Right Column (Vertical Case List) */}
          <div className="portfolio-split__list">
            {featured.map((project) => (
              <article key={project.slug} className="portfolio-split__card sr">
                {/* Split Left: Media */}
                <div className="portfolio-split__media">
                  <Image
                    src={project.images.cover}
                    alt={`Capa do projeto ${project.client}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    className="portfolio-split__image"
                    priority
                  />
                </div>

                {/* Split Right: Info */}
                <div className="portfolio-split__info">
                  <span className="portfolio-split__category">/{project.category.toUpperCase()}</span>
                  <h3 className="portfolio-split__client">{project.client}</h3>
                  <p className="portfolio-split__tagline">{project.tagline}</p>
                  <Link href={`/portfolio/${project.slug}`} className="portfolio-split__btn">
                    Ver case ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
