import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstFooter } from "@/components/institucional/InstFooter";
import { InstNav } from "@/components/institucional/InstNav";
import { CaseBody } from "@/components/portfolio/CaseBody";
import { getNextProject, getProject, projects } from "@/lib/portfolio";
import { localizarProjeto } from "@/lib/portfolio-texto";
import "../../institucional.css";
import "../../monolog.css";

type Params = { slug: string };

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
    return { title: "Projeto não encontrado | Portfólio — Made by Felipe" };
  }

  return {
    title: `${project.client} | Portfólio — Made by Felipe`,
    description: project.tagline,
    // Não é público: abre só por link direto, fora da navegação e do índice.
    robots: { index: false, follow: false },
    openGraph: {
      title: `${project.client} | Portfólio — Made by Felipe`,
      description: project.tagline,
      images: [project.images.cover],
      type: "article"
    }
  };
}

export default async function CasePage({
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
      {/* Header e rodapé são os do site novo; o corpo do case vem do
          componente compartilhado com a versão em inglês. */}
      <InstNav />
      <CaseBody
        project={localizarProjeto(project, "pt")}
        next={localizarProjeto(getNextProject(slug), "pt")}
        locale="pt"
      />
      <InstFooter />
    </>
  );
}
