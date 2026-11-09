import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import { BlogIndex } from "@/components/institucional/BlogIndex";
import { posts } from "@/lib/blog";
import { toCard } from "@/lib/blog-body";

const title = "Blog — marca e divulgação para consultórios de psicologia | Made by Felipe";
const description =
  "Artigos sobre marca, identidade visual e divulgação ética para psicólogos e consultórios de psicologia, dentro do artigo 20 do Código de Ética.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title,
    description,
    url: "/blog",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "website"
  }
};

export default function BlogPage() {
  return (
    <main id="conteudo" className="inst-legal">
      <header className="inst-legal__head">
        <p className="inst-kicker inst-kicker--tight">— Blog</p>
        <h1 className="inst-legal__title">
          Marca e divulgação para consultórios de psicologia.
        </h1>
        <p className="inst-legal__lead">{description}</p>
      </header>

      <BlogIndex posts={posts.map(toCard)} />
    </main>
  );
}
