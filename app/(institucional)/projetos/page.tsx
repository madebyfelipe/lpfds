import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InstContato } from "@/components/institucional/InstContato";
import { projectCover } from "@/lib/institucional";
import { projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Projetos — Made by Felipe",
  description:
    "Cases de marca, conteúdo e landing page entregues pela Made by Felipe."
};

// O cover abre o case completo já existente em /portfolio/[slug] — a
// estrutura de página individual de projeto continua sendo aquela.
export default function ProjetosPage() {
  return (
    <main>
      <header className="inst-projects-header">
        <h1 className="inst-projects-header__label">Projetos</h1>
      </header>

      <div className="inst-projects">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="inst-project"
          >
            <Image
              src={projectCover(project)}
              alt={project.client}
              fill
              sizes="(max-width: 1280px) 100vw, 1120px"
              priority={index === 0}
              className="inst-project__img"
            />

            <span className="inst-project__info">
              <span className="inst-project__scope">
                {project.scope.join(", ")}
              </span>
              <span className="inst-project__client">{project.client}</span>
              <span className="inst-project__tagline">{project.tagline}</span>
              <span className="inst-project__cta">
                Ver projeto
                <span aria-hidden="true">→</span>
              </span>
            </span>

            <span className="inst-project__caption">
              <span className="inst-project__caption-client">
                {project.client}
              </span>
              <span className="inst-project__caption-category">
                {project.category}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <InstContato />
    </main>
  );
}
