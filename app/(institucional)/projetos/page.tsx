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

export default function ProjetosPage() {
  return (
    <main>
      <header className="inst-shell" style={{ padding: "112px 40px 64px" }}>
        <h1 className="inst-page-title">Projetos</h1>
      </header>

      <div className="inst-projects">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projetos/${project.slug}`}
            className="inst-project"
          >
            <Image
              src={projectCover(project)}
              alt={project.client}
              fill
              sizes="100vw"
              priority={index === 0}
              className="inst-project__img"
            />
            <span className="inst-project__caption">
              <span className="inst-project__client">{project.client}</span>
              <span className="inst-project__category">{project.category}</span>
            </span>
          </Link>
        ))}
      </div>

      <InstContato />
    </main>
  );
}
