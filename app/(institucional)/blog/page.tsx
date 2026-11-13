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
    <main id="conteudo" className="bpage">
      <BlogIndex posts={posts.map(toCard)} intro={description} />
    </main>
  );
}
