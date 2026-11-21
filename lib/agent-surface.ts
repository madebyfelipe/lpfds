/**
 * Superfície para agentes de IA — fonte única.
 *
 * Alimenta os arquivos de descoberta que o site publica para agentes
 * (llms.txt, auth.md, /.well-known/*, /agent-skills/*, /openapi.json) e o
 * servidor MCP em /api/mcp. Tudo aqui é fato do site: nada de endpoint que
 * não existe. Se um serviço sair do ar, ele sai daqui.
 *
 * Referências usadas: llms.txt, RFC 8288 (Web Linking), RFC 9727 (API
 * catalog), RFC 9728 (protected resource), Agent Skills Discovery e o
 * schema do MCP.
 */

import { posts } from "@/lib/blog";
import { deliverables, EMAIL, process, social, agenda } from "@/lib/institucional";
import { WHATSAPP_URL } from "@/lib/legal";
import { SITE_URL } from "@/lib/site";

export const AGENT_NAME = "Made by Felipe";
export const AGENT_NAME_LEGAL = "MBF — Made by Felipe";
export const AGENT_SUMMARY =
  "Estúdio de branding para consultórios de psicologia, em Sorocaba (SP). " +
  "Entrega posicionamento, identidade visual e verbal, brand guide, página " +
  "profissional e direção de arte em até 30 dias, a partir de dois encontros " +
  "de imersão, dentro do artigo 20 do Código de Ética Profissional do Psicólogo.";

export const AGENT_CONTACT = {
  email: EMAIL,
  whatsapp: WHATSAPP_URL,
  whatsappNumero: "5515992835226",
  agenda:
    "https://wa.me/5515992835226?text=Quero%20marcar%20a%20conversa%20de%2015%20minutos"
};

/** Páginas públicas com conteúdo em HTML e também em markdown. */
export const AGENT_PAGES = [
  { path: "/", title: "Made by Felipe — marca para consultório de psicologia em até 30 dias" },
  { path: "/metodologia", title: "Método PSIQUE, as seis áreas e as duas etapas" },
  { path: "/imersao", title: "Imersão: dois encontros para construir a marca" },
  { path: "/cases", title: "Cases de marca" },
  { path: "/hub", title: "Hub do estúdio" },
  { path: "/blog", title: "Blog" },
  { path: "/privacidade", title: "Política de privacidade" },
  { path: "/termos", title: "Termos de uso" },
  { path: "/cookies", title: "Política de cookies" },
  { path: "/reembolso", title: "Política de reembolso" }
];

export function agentServices() {
  return deliverables.map((nome) => ({ nome }));
}

export function agentMethod() {
  return process.map(({ etapa, tag, steps }) => ({
    etapa,
    tag,
    passos: steps.map(({ num, title, copy }) => ({ numero: num, titulo: title, resumo: copy }))
  }));
}

export function agentBlog() {
  return posts.map((p) => ({
    slug: p.slug,
    titulo: p.title,
    resumo: p.summary ?? p.description,
    publicadoEm: p.publishedAt,
    atualizadoEm: p.updatedAt ?? null,
    url: `${SITE_URL}/blog/${p.slug}`
  }));
}

export function agentSocial() {
  return social.map(({ label, href }) => ({ rede: label, url: href }));
}

/** Capacidade do estúdio — a disponibilidade é confirmada no contato. */
export function agentCapacity() {
  return {
    projetosPorTrimestre: agenda.numProjetos,
    prazoDeEntrega: "até 30 dias após os dois encontros",
    observacao: "O preço não fica no site; é conversado na chamada de 15 minutos."
  };
}

export const AGENT_ACTIONS = {
  conversar15min: AGENT_CONTACT.agenda,
  email: `mailto:${AGENT_CONTACT.email}`,
  lerMetodo: `${SITE_URL}/metodologia`,
  lerBlog: `${SITE_URL}/blog`
};
