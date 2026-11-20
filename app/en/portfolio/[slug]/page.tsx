import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/institucional/HtmlLang";
import { InstFooter } from "@/components/institucional/InstFooter";
import { InstNav } from "@/components/institucional/InstNav";
import { LangFloater } from "@/components/institucional/LangFloater";
import { CaseBody } from "@/components/portfolio/CaseBody";
import { CASO } from "@/lib/i18n";
import { getNextProject, getProject, projects } from "@/lib/portfolio";
import { localizarProjeto } from "@/lib/portfolio-texto";
import "../../../institucional.css";
import "../../../monolog.css";

/**
 * Case em inglês (/en/portfolio/<slug>). Shell igual à do case em português
 * (app/portfolio/[slug]/page.tsx): nav, corpo do case e rodapé — sem o Lenis
 * das páginas de leitura, que brigava com o scroll próprio da janela do site
 * e com a gaveta do portfólio.
 *
 * Fica fora do grupo (en) de propósito, pela mesma razão do índice.
 */
type Params = { slug: string };

const htmlLang = `document.documentElement.lang="en"`;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: CASO.en.naoEncontrado };
  }

  const localized = localizarProjeto(project, "en");

  return {
    title: `${localized.client} | Work — Made by Felipe`,
    description: localized.tagline,
    alternates: { canonical: `/en/portfolio/${slug}` },
    // Não é público: abre só por link direto, fora da navegação e do índice.
    robots: { index: false, follow: false },
    openGraph: {
      title: `${localized.client} | Work — Made by Felipe`,
      description: localized.tagline,
      images: [project.images.cover],
      type: "article"
    }
  };
}

export default async function CaseEnPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: htmlLang }} />
      <HtmlLang lang="en" />
      <InstNav />
      <CaseBody
        project={localizarProjeto(project, "en")}
        next={localizarProjeto(getNextProject(slug), "en")}
        locale="en"
      />
      <InstFooter locale="en" />
      {/* O seletor de idioma precisa dos tokens do design system (.inst), que
          esta página não usa no corpo escuro do case: o wrapper só empresta os
          tokens, sem caixa nem altura. */}
      <div className="inst inst--bare">
        <LangFloater />
      </div>
    </>
  );
}
