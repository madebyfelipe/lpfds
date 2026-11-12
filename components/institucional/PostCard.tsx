import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

/** Dados já serializados no servidor: o filtro (cliente) não importa lib/blog. */
export type PostCardData = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  dateLabel: string;
  minutes: number;
  tags: string[];
  tagLabels: string[];
  cover?: { src: string; alt: string; width: number; height: number };
};

export function PostCard({
  post,
  featured = false,
  as: Heading = "h2",
  index = 0,
  morph = false
}: {
  post: PostCardData;
  featured?: boolean;
  as?: "h2" | "h3";
  /** Posição na grade: escalona a entrada dos cards (coluna a coluna). */
  index?: number;
  /** Dá nome de transição ao card para o filtro animar a troca (View Transitions). */
  morph?: boolean;
}) {
  const style = {
    "--i": featured ? 0 : index % 3,
    ...(morph && { viewTransitionName: `card-${post.slug}` })
  } as CSSProperties;
  return (
    <article className={`inst-card${featured ? " inst-card--featured" : ""}`} style={style}>
      <Link href={`/blog/${post.slug}`} className="inst-card__link">
        {post.cover && (
          <div className="inst-card__media">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              width={post.cover.width}
              height={post.cover.height}
              sizes={featured ? "(max-width: 900px) 100vw, 720px" : "(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 360px"}
              priority={featured}
              className="inst-card__img"
            />
          </div>
        )}
        <div className="inst-card__text">
          <p className="inst-card__tema">
            {featured ? "Mais recente · " : ""}
            {post.tagLabels[0]}
          </p>
          <Heading className="inst-card__title">{post.title}</Heading>
          <p className="inst-card__excerpt">{post.description}</p>
          <p className="inst-card__meta">
            <time dateTime={post.publishedAt}>{post.dateLabel}</time>
            {" · "}
            {post.minutes} min de leitura
            <span className="inst-card__arrow" aria-hidden="true">
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
