import type { Metadata } from "next";
import { Fragment, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScheduleLink } from "@/components/ScheduleLink";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { ComentarioForm } from "@/components/institucional/ComentarioForm";
import { AuthorBox } from "@/components/institucional/AuthorBox";
import { BackToTop } from "@/components/institucional/BackToTop";
import { CursorLabel } from "@/components/institucional/CursorLabel";
import { PostCard } from "@/components/institucional/PostCard";
import { PostNav } from "@/components/institucional/PostNav";
import { PostToc } from "@/components/institucional/PostToc";
import { ReadingLeft } from "@/components/institucional/ReadingLeft";
import { ReadingProgress } from "@/components/institucional/ReadingProgress";
import { SectionLinkCopy } from "@/components/institucional/SectionLinkCopy";
import { ShareBar } from "@/components/institucional/ShareBar";
import { comentarios } from "@/content/blog/comentarios";
import { formatDate, getPost, postImage, posts, relatedPosts } from "@/lib/blog";
import { readBody, toCard } from "@/lib/blog-body";
import { temaLabel } from "@/lib/blog-temas";
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
  const image = postImage(post);
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
      authors: ["Felipe"],
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image]
    }
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const { body, headings, minutes } = readBody(post);
  const related = relatedPosts(post).map(toCard);
  const hasToc = headings.length > 1;
  // posts está do mais recente para o mais antigo.
  const at = posts.findIndex((p) => p.slug === post.slug);
  const newer = at > 0 ? posts[at - 1] : undefined;
  const older = at < posts.length - 1 ? posts[at + 1] : undefined;
  const tema = post.tags[0];
  const aprovados = comentarios.filter((c) => c.slug === post.slug);
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
    image: `${SITE_URL}${postImage(post).url}`,
    author: { "@id": `${SITE_URL}/#felipe` },
    publisher: { "@id": `${SITE_URL}/#business` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    keywords: post.keyword,
    ...(post.summary && { abstract: post.summary })
  };
  // FAQPage só com as perguntas que aparecem visíveis no post (regra do Google).
  const faqLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      }
    : null;

  return (
    <main id="conteudo" className="inst-legal">
      <ReadingProgress targetId="leitura" />
      <CursorLabel />
      <SectionLinkCopy scopeSelector=".inst-blog__body" />
      <BackToTop />
      <script
        type="application/ld+json"
        // Conteúdo estático do repositório; JSON.stringify escapa as aspas.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <article>
        <header className="inst-legal__head">
          <p className="inst-kicker inst-kicker--tight">
            <Link href="/blog" className="inst-blog__back">Blog</Link>
            {" / "}
            <Link href={`/blog?tema=${tema}`} className="inst-blog__back">
              {temaLabel(tema)}
            </Link>
          </p>
          {/* Título palavra a palavra: o texto continua o mesmo para leitor de tela e buscador. */}
          <h1 className="inst-legal__title">
            {post.title.split(" ").map((palavra, i) => (
              <Fragment key={i}>
                <span className="inst-kw" style={{ "--w": Math.min(i, 16) } as CSSProperties}>
                  {palavra}
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p className="inst-legal__lead">{post.description}</p>
          <p className="inst-legal__updated">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {" · "}{minutes} min de leitura{" · "}Por Felipe
          </p>
        </header>
        {post.cover && (
          <figure className="inst-blog__cover">
            {/* Banner é o LCP do post: priority + sizes até a largura da coluna. */}
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              width={post.cover.width}
              height={post.cover.height}
              sizes="(max-width: 1200px) 100vw, 1120px"
              priority
              className="inst-blog__cover-img"
            />
            {post.cover.caption && (
              <figcaption className="inst-blog__caption">{post.cover.caption}</figcaption>
            )}
          </figure>
        )}
        <div className="inst-post" id="leitura">
          <div className="inst-post__main">
            {/* Resposta direta no topo: o trecho que buscadores e assistentes citam. */}
            {post.summary && (
              <aside className="inst-blog__summary" aria-label="Resposta rápida">
                <p className="inst-kicker inst-kicker--tight">Resposta rápida</p>
                <p className="inst-blog__summary-text">{post.summary}</p>
              </aside>
            )}
            {/* Sumário no mobile: recolhido; no desktop fica fixo ao lado. */}
            {hasToc && (
              <details className="inst-toc inst-toc--inline">
                <summary>Neste artigo</summary>
                <PostToc headings={headings} />
              </details>
            )}
            <div className="inst-legal__body inst-blog__body">
              {body}
              {post.faq?.length ? (
                <section>
                  <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
                  {post.faq.map((item) => (
                    <div key={item.q}>
                      <h3>{item.q}</h3>
                      <p>{item.a}</p>
                    </div>
                  ))}
                </section>
              ) : null}
            </div>
          </div>
          <div className="inst-post__side">
            {hasToc && (
              <nav className="inst-toc" aria-label="Neste artigo">
                <p className="inst-kicker inst-kicker--tight">Neste artigo</p>
                <PostToc headings={headings} spy />
              </nav>
            )}
            <div className="inst-post__share">
              <p className="inst-kicker inst-kicker--tight">Compartilhar</p>
              <ShareBar url={url} title={post.title} />
            </div>
            <ReadingLeft targetId="leitura" minutes={minutes} />
          </div>
        </div>
        <footer className="inst-post__end">
          <div className="inst-post__share-end">
            <p className="inst-kicker inst-kicker--tight">Compartilhar</p>
            <ShareBar url={url} title={post.title} />
          </div>
          <AuthorBox />
        </footer>
      </article>

      {/* CTA de todo post: a conversa de 15 minutos (mesmo link e mesma
          frase do hero da home). */}
      <aside className="inst-blog__cta" aria-label="Próximo passo">
        <p className="inst-kicker inst-kicker--tight">Próximo passo</p>
        <p className="inst-blog__cta-line">
          Antes da imersão, 15 minutos para conversar sobre a marca do seu
          consultório.
        </p>
        <ScheduleLink className="mbtn mbtn--secondary inst-blog__cta-btn">
          <MButtonInner>Conversar por 15 minutos</MButtonInner>
        </ScheduleLink>
      </aside>

      {/* Comentários: só os aprovados (content/blog/comentarios.ts); o form
          manda para moderação por e-mail (ver lib/comentarios.ts). */}
      <section className="inst-dark inst-blog__comments" aria-labelledby="comentarios-titulo">
        <p className="inst-kicker inst-kicker--inverse inst-kicker--tight">Comentários</p>
        <h2 id="comentarios-titulo" className="inst-blog__cta-line">
          E no seu consultório, como isso aparece? Conte a sua experiência ou
          deixe a sua dúvida.
        </h2>
        {aprovados.length > 0 && (
          <ol className="inst-blog__comment-list">
            {aprovados.map((c) => (
              <li key={`${c.data}-${c.nome}-${c.texto.slice(0, 20)}`} className="inst-blog__comment">
                <p className="inst-blog__comment-meta">
                  {c.nome} · <time dateTime={c.data}>{formatDate(c.data)}</time>
                </p>
                <p className="inst-blog__comment-text">{c.texto}</p>
              </li>
            ))}
          </ol>
        )}
        <p className="inst-blog__comment-note">
          Os comentários passam por moderação antes de aparecer. Pedimos só o
          seu nome; não publique dados de pacientes.
        </p>
        <ComentarioForm slug={post.slug} />
      </section>

      <PostNav
        older={older && { slug: older.slug, title: older.title }}
        newer={newer && { slug: newer.slug, title: newer.title }}
      />

      {related.length > 0 && (
        <section className="inst-blog__related" aria-labelledby="relacionados-titulo">
          <p className="inst-kicker inst-kicker--tight">Continue lendo</p>
          <h2 id="relacionados-titulo" className="inst-blog__cta-line">
            Mais sobre os mesmos temas.
          </h2>
          <div className="inst-blog__grid">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} as="h3" />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
