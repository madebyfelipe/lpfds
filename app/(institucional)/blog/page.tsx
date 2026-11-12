import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import { BlogIndex } from "@/components/institucional/BlogIndex";
import { posts } from "@/lib/blog";
import { toCard } from "@/lib/blog-body";
import { temas } from "@/lib/blog-temas";

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

// O h1 inteiro continua sendo uma frase só; as linhas existem para a animação
// de entrada (cada uma sobe de dentro de uma máscara, em sequência).
const linhas = ["Marca e divulgação", "para consultórios", "de psicologia."];

export default function BlogPage() {
  const cards = posts.map(toCard);
  const faixa = temas.map((t) => t.label);

  return (
    <main id="conteudo" className="inst-legal inst-blog">
      <header className="inst-bloghero">
        <p className="inst-kicker inst-kicker--tight">— Blog</p>
        <h1 className="inst-bloghero__title">
          {linhas.map((linha, i) => (
            <span key={linha}>
              <span className="inst-kin__line" style={{ "--l": i } as React.CSSProperties}>
                <span>{linha}</span>
              </span>{" "}
            </span>
          ))}
        </h1>
        <p className="inst-bloghero__lead">{description}</p>

      </header>

      {/* Faixa rolante dos temas: decorativa. A 2ª cópia existe só para o loop fechar. */}
      <div className="inst-marquee" aria-hidden="true">
        <div className="inst-marquee__track">
          {[0, 1].map((copia) => (
            <div key={copia} className="inst-marquee__group" data-copy={copia}>
              {faixa.concat(faixa).map((nome, i) => (
                <span key={`${nome}-${i}`} className="inst-marquee__item">
                  {nome}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <BlogIndex posts={cards} />
    </main>
  );
}
