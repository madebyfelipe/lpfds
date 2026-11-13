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

/**
 * Card no padrão da página /work do Monolog: capa 4:5 que dá zoom-out no
 * hover (com data e "Ler artigo →" por cima), título, resumo em cinza e os
 * temas como etiquetas.
 */
export function PostCard({
  post,
  as: Heading = "h2",
  morph = false
}: {
  post: PostCardData;
  as?: "h2" | "h3";
  /** Dá nome de transição ao card para o filtro animar a troca (View Transitions). */
  morph?: boolean;
}) {
  const style = (morph ? { viewTransitionName: `card-${post.slug}` } : undefined) as CSSProperties | undefined;
  return (
    <article className="bcard" style={style}>
      <Link href={`/blog/${post.slug}`} className="bcard__link">
        <div className="bcard__cover">
          {post.cover && (
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
              className="bcard__img"
            />
          )}
          <div className="bcard__overlay" aria-hidden="true" />
          <div className="bcard__hover" aria-hidden="true">
            <span className="bcard__block">{post.dateLabel}</span>
            <span className="bcard__block">Ler artigo →</span>
          </div>
        </div>
        <div className="bcard__content">
          <Heading className="bcard__title">{post.title}</Heading>
          <p className="bcard__summary">{post.description}</p>
          <ul className="bcard__tags">
            {post.tagLabels.map((t) => (
              <li key={t} className="bcard__tag">
                {t}
              </li>
            ))}
            <li className="bcard__tag bcard__tag--muted">{post.minutes} min</li>
          </ul>
        </div>
      </Link>
    </article>
  );
}
