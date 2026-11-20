import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseBody } from "@/components/portfolio/CaseBody";
import { CASO } from "@/lib/i18n";
import { getNextProject, getProject, projects } from "@/lib/portfolio";
import { localizarProjeto } from "@/lib/portfolio-texto";

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

  // Nav, rodapé e seletor de idioma vêm do layout de /en.
  return (
    <CaseBody
      project={localizarProjeto(project, "en")}
      next={localizarProjeto(getNextProject(slug), "en")}
      locale="en"
    />
  );
}
