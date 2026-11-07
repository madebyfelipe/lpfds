import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScheduleLink } from "@/components/ScheduleLink";
import { formatDate, getPost, posts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} | Made by Felipe`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Made by Felipe",
      locale: "pt_BR",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Felipe"]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description
    }
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  // Autor e publisher apontam para as entidades do StructuredData global
  // (mesmos @id), em vez de redeclarar o estúdio a cada post.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "pt-BR",
    mainEntityOfPage: url,
    url,
    author: { "@id": `${SITE_URL}/#felipe` },
    publisher: { "@id": `${SITE_URL}/#business` },
    isPartOf: { "@id": `${SITE_URL}/#website` }
  };

  return (
    <main id="conteudo" className="inst-legal">
      <script
        type="application/ld+json"
        // Conteúdo estático do repositório; JSON.stringify escapa as aspas.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="inst-legal__head">
          <p className="inst-kicker inst-kicker--tight">
            — <Link href="/blog" className="inst-blog__back">Blog</Link>
          </p>
          <h1 className="inst-legal__title">{post.title}</h1>
          <p className="inst-legal__lead">{post.description}</p>
          <p className="inst-legal__updated">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {" · "}Por Felipe
          </p>
        </header>
        <div className="inst-legal__body inst-blog__body">{post.body}</div>
      </article>

      {/* CTA de todo post: a conversa de 15 minutos (mesmo link e mesma
          frase do hero da home). */}
      <aside className="inst-blog__cta" aria-label="Próximo passo">
        <p className="inst-kicker inst-kicker--tight">— Próximo passo</p>
        <p className="inst-blog__cta-line">
          Antes da imersão, 15 minutos para conversar sobre a marca do seu
          consultório.
        </p>
        <ScheduleLink className="inst-hero__cta">
          Conversar por 15 minutos →
        </ScheduleLink>
      </aside>
    </main>
  );
}
