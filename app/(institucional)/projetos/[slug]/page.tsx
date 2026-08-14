import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InstContato } from "@/components/institucional/InstContato";
import { caseShots } from "@/lib/institucional";
import { getProject, projects } from "@/lib/portfolio";

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
    return { title: "Projeto não encontrado — Made by Felipe" };
  }

  return {
    title: `${project.client} — Made by Felipe`,
    description: project.tagline,
    openGraph: {
      title: `${project.client} — Made by Felipe`,
      description: project.tagline,
      images: [project.images.cover],
      type: "article"
    }
  };
}

export default async function ProjetoPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const shots = caseShots(project);

  return (
    <main>
      <header className="inst-case__header">
        <Link href="/projetos" className="inst-case__back">
          ← Projetos
        </Link>
        <h1 className="inst-case__title">{project.client}</h1>
        <p className="inst-case__meta">{project.category}</p>
      </header>

      <section className="inst-shell" style={{ padding: "0 40px 80px" }}>
        <div className="inst-case__cols">
          <div className="inst-case__col">
            <p className="inst-case__label">— Ponto de partida</p>
            <p className="inst-case__text">{project.tagline}</p>
          </div>
          <div className="inst-case__col">
            <p className="inst-case__label">— Trabalho</p>
            <p className="inst-case__text">{project.execution}</p>
          </div>
          <div className="inst-case__col">
            <p className="inst-case__label">— Resultado</p>
            <p className="inst-case__text">
              <strong>{project.statement}</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="inst-case__shots">
        {shots.map((src, index) => (
          <div key={src} className="inst-case__shot">
            <Image
              src={src}
              alt={`${project.client} — peça ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <InstContato />
    </main>
  );
}
