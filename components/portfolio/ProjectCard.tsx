import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/portfolio";

type Props = {
  project: Project;
  index: number; // posição absoluta (0 = featured)
  featured?: boolean;
  onHover: (label: string | null) => void;
};

export function ProjectCard({ project, index, featured = false, onHover }: Props) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`project-card${featured ? " project-card--featured" : ""} sr`}
      onMouseEnter={() => onHover(project.client)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(project.client)}
      onBlur={() => onHover(null)}
    >
      <div className="project-card__media">
        <Image
          src={project.images.cover}
          alt={`Capa do projeto ${project.client}`}
          fill
          sizes={
            featured
              ? "(max-width: 900px) 100vw, 1160px"
              : "(max-width: 900px) 100vw, 560px"
          }
          className="project-card__image"
        />
      </div>

      <div className="project-card__overlay">
        <span className="project-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__client">{project.client}</span>
        </div>
      </div>

      <span className="project-card__arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
