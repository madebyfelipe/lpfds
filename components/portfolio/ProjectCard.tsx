import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/portfolio";

type Props = {
  project: Project;
  onHover: (label: string | null) => void;
};

export function ProjectCard({ project, onHover }: Props) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="project-card sr"
      aria-label={`Ver projeto ${project.client}`}
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
          sizes="(max-width: 768px) 100vw, 50vw"
          className="project-card__image"
        />
      </div>
    </Link>
  );
}
