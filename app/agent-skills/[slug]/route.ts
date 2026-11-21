import { agentBlog, agentCapacity, agentMethod, agentServices } from "@/lib/agent-surface";
import { AGENT_SKILLS, skillBody } from "@/lib/agent-skills";

/**
 * /agent-skills/<slug> — a skill em markdown, como o índice descreve.
 * Texto puro e estável: o sha256 publicado no índice é o deste corpo.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return AGENT_SKILLS.map((s) => ({ slug: s.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = skillBody(slug, {
    servicos: agentServices(),
    metodo: agentMethod(),
    capacidade: agentCapacity(),
    blog: agentBlog()
  });

  if (!body) {
    return new Response("Skill não encontrada.\n", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }

  return new Response(body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
