import Image from "next/image";
import Link from "next/link";
import type { ProjectWithCoverSize } from "@/lib/portfolio";

type Props = {
  project: ProjectWithCoverSize;
  priority?: boolean;
  onHover: (label: string | null) => void;
};

export function ProjectCard({ project, priority, onHover }: Props) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="project-card"
      aria-label={`Ver projeto ${project.client}`}
      onMouseEnter={() => onHover(project.client)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(project.client)}
      onBlur={() => onHover(null)}
    >
      <div className="project-card__media">
        {/* dimensões reais + CSS width:100%/height:auto = proporção reservada
            antes do download, sem crop e sem layout shift */}
        <Image
          src={project.images.cover}
          alt={`Capa do projeto ${project.client}`}
          width={project.coverSize.width}
          height={project.coverSize.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="project-card__image"
        />
      </div>
    </Link>
  );
}
