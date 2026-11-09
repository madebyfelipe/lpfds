import Image from "next/image";
import Link from "next/link";

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
  as: Heading = "h2"
}: {
  post: PostCardData;
  featured?: boolean;
  as?: "h2" | "h3";
}) {
  return (
    <article className={`inst-card${featured ? " inst-card--featured" : ""}`}>
      <Link href={`/blog/${post.slug}`} className="inst-card__link">
        {post.cover && (
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            width={post.cover.width}
            height={post.cover.height}
            sizes={featured ? "(max-width: 900px) 100vw, 720px" : "(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 360px"}
            priority={featured}
            className="inst-card__img"
          />
        )}
        <div className="inst-card__text">
          <p className="inst-card__tema">{post.tagLabels[0]}</p>
          <Heading className="inst-card__title">{post.title}</Heading>
          <p className="inst-card__excerpt">{post.description}</p>
          <p className="inst-card__meta">
            <time dateTime={post.publishedAt}>{post.dateLabel}</time>
            {" · "}
            {post.minutes} min de leitura
          </p>
        </div>
      </Link>
    </article>
  );
}
