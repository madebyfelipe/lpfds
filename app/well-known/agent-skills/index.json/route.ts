import { createHash } from "node:crypto";

import { agentBlog, agentCapacity, agentMethod, agentServices } from "@/lib/agent-surface";
import { AGENT_SKILLS, skillBody } from "@/lib/agent-skills";
import { SITE_URL } from "@/lib/site";

/**
 * /.well-known/agent-skills/index.json — índice de skills (Agent Skills
 * Discovery). O digest é calculado do mesmo markdown que a rota
 * /agent-skills/<slug> entrega, então nunca sai do ar.
 */
export const dynamic = "force-static";

export function GET() {
  const dados = {
    servicos: agentServices(),
    metodo: agentMethod(),
    capacidade: agentCapacity(),
    blog: agentBlog()
  };

  const skills = AGENT_SKILLS.map((skill) => {
    const body = skillBody(skill.slug, dados) ?? "";
    return {
      name: skill.name,
      type: "text/markdown",
      description: skill.description,
      url: `${SITE_URL}/agent-skills/${skill.slug}`,
      sha256: createHash("sha256").update(body, "utf8").digest("hex")
    };
  });

  const index = {
    $schema: "https://agentskills.io/schema/v0.2.0/index.json",
    skills
  };

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
