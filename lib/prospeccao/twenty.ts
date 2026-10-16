import "server-only";
import {
  LINKEDIN_STATUS,
  PRIORIDADES,
  PROSP_STATUS,
  type Lead,
  type LinkedinStatus,
  type Prioridade,
  type ProspStatus
} from "./config";

/**
 * Twenty (Core API) como banco da prospecção. Cada lead é um Person com
 * `origem: PROSPECCAO` e os campos `prosp*` (criados via Metadata API em
 * 16/10/2026). Não há outro armazenamento: o painel lê daqui, o disparo
 * escreve aqui, e quem for descadastrado fica marcado aqui — por isso um
 * lead descadastrado NÃO deve ser apagado do CRM (é a lista de supressão).
 */
const { TWENTY_API_KEY } = process.env;
const TWENTY_BASE = (process.env.TWENTY_BASE_URL ?? "https://crm.madebyfelipe.agency").replace(/\/$/, "");
const REST = `${TWENTY_BASE}/rest`;
const TIMEOUT_MS = 12000;

export const twentyConfigurado = () => Boolean(TWENTY_API_KEY);

async function twenty<T = unknown>(method: string, path: string, body?: unknown): Promise<T> {
  if (!TWENTY_API_KEY) throw new Error("twenty_unconfigured");
  const res = await fetch(`${REST}${path}`, {
    method,
    headers: { Authorization: `Bearer ${TWENTY_API_KEY}`, "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: "no-store"
  });
  if (!res.ok) throw new Error(`Twenty ${method} ${path.split("?")[0]} → ${res.status} ${await res.text()}`);
  return res.json() as Promise<T>;
}

/** Valor de filtro entre aspas, com o conteúdo percent-encoded (formato aceito pelo servidor). */
const q = (v: string) => `%22${encodeURIComponent(v)}%22`;

type PersonRaw = Record<string, unknown> & { id: string };

const str = (v: unknown) => (typeof v === "string" ? v : "");
const pick = <T extends string>(v: unknown, allowed: readonly T[]): T | null =>
  typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : null;

export function toLead(p: PersonRaw): Lead {
  const name = (p.name ?? {}) as { firstName?: string; lastName?: string };
  const emails = (p.emails ?? {}) as { primaryEmail?: string };
  const linkedin = (p.linkedinLink ?? {}) as { primaryLinkUrl?: string };
  return {
    id: p.id,
    nome: [name.firstName, name.lastName].filter(Boolean).join(" ").trim(),
    email: str(emails.primaryEmail).toLowerCase(),
    empresa: str(p.prospEmpresa),
    cidade: str(p.prospCidade),
    status: pick(p.prospStatus, PROSP_STATUS) ?? "REVISAR",
    prioridade: pick(p.prospPrioridade, PRIORIDADES),
    score: typeof p.prospScore === "number" ? p.prospScore : null,
    fonte: str(p.prospFonte),
    evidencia: str(p.prospEvidencia),
    hipotese: str(p.prospHipotese),
    limite: str(p.prospLimite),
    assunto: str(p.prospAssunto),
    mensagem: str(p.prospMensagem),
    followups: [str(p.prospFollowup), str(p.prospFollowup2), str(p.prospFollowup3)],
    etapa: typeof p.prospEtapa === "number" ? p.prospEtapa : p.prospEnviadoEm ? (p.prospFollowupEm ? 2 : 1) : 0,
    campanha: str(p.prospCampanha),
    instagram: str(p.instagram),
    linkedin: str(linkedin.primaryLinkUrl),
    linkedinStatus: pick(p.prospLinkedinStatus, LINKEDIN_STATUS),
    linkedinNota: str(p.prospLinkedinNota),
    enviadoEm: str(p.prospEnviadoEm) || null,
    followupEm: str(p.prospFollowupEm) || null,
    respondeuEm: str(p.prospRespondeuEm) || null,
    erro: str(p.prospErro),
    criadoEm: str(p.createdAt)
  };
}

/** Pagina por cursor um GET /people com filtro (até `max` registros). */
async function listarPeople(filter: string, max = 1000): Promise<PersonRaw[]> {
  const out: PersonRaw[] = [];
  let after: string | null = null;
  for (let page = 0; page < 40 && out.length < max; page++) {
    const cursor: string = after ? `&starting_after=${encodeURIComponent(after)}` : "";
    type Pagina = {
      data?: { people?: PersonRaw[] };
      pageInfo?: { hasNextPage?: boolean; endCursor?: string };
    };
    const json: Pagina = await twenty<{
      data?: { people?: PersonRaw[] };
      pageInfo?: { hasNextPage?: boolean; endCursor?: string };
    }>("GET", `/people?${filter ? `filter=${filter}&` : ""}limit=60${cursor}`);
    const people = json.data?.people ?? [];
    out.push(...people);
    if (!json.pageInfo?.hasNextPage || !json.pageInfo.endCursor || people.length === 0) break;
    after = json.pageInfo.endCursor;
  }
  return out.slice(0, max);
}

const FILTRO_PROSPECCAO = `origem%5Beq%5D:${q("PROSPECCAO")}`;

/**
 * Leads da prospecção, opcionalmente só alguns status. O recorte por status é
 * feito aqui, não no filtro da API: o `[eq]` já foi validado contra o servidor
 * (rotas do webinar e do diagnóstico), o `[in]` com enum não — e o volume da
 * prospecção (centenas) não justifica o risco.
 */
export async function listarLeads(status?: readonly ProspStatus[]): Promise<Lead[]> {
  const leads = (await listarPeople(FILTRO_PROSPECCAO)).map(toLead);
  return status?.length ? leads.filter((l) => status.includes(l.status)) : leads;
}

export async function buscarLead(id: string): Promise<Lead | null> {
  const json = await twenty<{ data?: { person?: PersonRaw } }>("GET", `/people/${encodeURIComponent(id)}`);
  const p = json.data?.person;
  return p ? toLead(p) : null;
}

/** Todas as pessoas com este e-mail (qualquer origem) — para dedup e supressão. */
export async function pessoasPorEmail(email: string): Promise<PersonRaw[]> {
  return listarPeople(`emails.primaryEmail%5Beq%5D:${q(email.toLowerCase())}`, 10);
}

/** Domínios e e-mails que já existem no CRM (qualquer origem) — a rotina pula esses. */
export async function conhecidos(): Promise<{ emails: string[]; dominios: string[] }> {
  const people = await listarPeople("", 5000);
  const emails = new Set<string>();
  const dominios = new Set<string>();
  for (const p of people) {
    const e = str((p.emails as { primaryEmail?: string } | undefined)?.primaryEmail).toLowerCase();
    if (!e) continue;
    emails.add(e);
    const dom = e.split("@")[1];
    // Domínio de webmail não identifica a clínica — só domínio próprio entra.
    if (dom && !DOMINIOS_WEBMAIL.has(dom)) dominios.add(dom);
  }
  return { emails: [...emails], dominios: [...dominios] };
}

export const DOMINIOS_WEBMAIL = new Set([
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "yahoo.com",
  "yahoo.com.br",
  "icloud.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "msn.com",
  "globo.com",
  "ig.com.br"
]);

export type NovoLead = {
  nome: string;
  email: string;
  empresa: string;
  cidade: string;
  prioridade: Prioridade;
  score: number;
  fonte: string;
  evidencia: string;
  hipotese: string;
  limite: string;
  assunto: string;
  mensagem: string;
  followups: string[];
  campanha: string;
  instagram?: string;
  linkedin?: string;
  linkedinNota?: string;
};

export async function criarLead(l: NovoLead): Promise<string> {
  const [firstName, ...rest] = (l.nome || l.empresa).split(/\s+/).filter(Boolean);
  const body: Record<string, unknown> = {
    name: { firstName: firstName ?? "", lastName: rest.join(" ") },
    emails: { primaryEmail: l.email.toLowerCase() },
    origem: "PROSPECCAO",
    // Contato frio: não houve consentimento. A base legal é o legítimo
    // interesse (art. 7º, IX) sobre contato profissional publicado.
    consentimentoLgpd: false,
    prospStatus: "REVISAR",
    prospPrioridade: l.prioridade,
    prospScore: l.score,
    prospEmpresa: l.empresa,
    prospCidade: l.cidade,
    prospFonte: l.fonte,
    prospEvidencia: l.evidencia,
    prospHipotese: l.hipotese,
    prospLimite: l.limite,
    prospAssunto: l.assunto,
    prospMensagem: l.mensagem,
    prospFollowup: l.followups[0] ?? "",
    prospFollowup2: l.followups[1] ?? "",
    prospFollowup3: l.followups[2] ?? "",
    prospEtapa: 0,
    prospCampanha: l.campanha
  };
  if (l.instagram) body.instagram = l.instagram;
  if (l.linkedin) {
    body.linkedinLink = { primaryLinkUrl: l.linkedin, primaryLinkLabel: "", secondaryLinks: [] };
    body.prospLinkedinStatus = "SUGERIDO";
    if (l.linkedinNota) body.prospLinkedinNota = l.linkedinNota;
  }
  const json = await twenty<{ data?: Record<string, { id?: string }> }>("POST", "/people", body);
  const id = Object.values(json.data ?? {})[0]?.id;
  if (!id) throw new Error("Twenty não devolveu id");
  return id;
}

/** Campos `prosp*` editáveis (nomes do Twenty). */
export type PatchLead = Partial<{
  prospStatus: ProspStatus;
  prospAssunto: string;
  prospMensagem: string;
  prospFollowup: string;
  prospFollowup2: string;
  prospFollowup3: string;
  prospEtapa: number;
  prospEnviadoEm: string;
  prospFollowupEm: string;
  prospRespondeuEm: string;
  prospMessageId: string;
  prospErro: string;
  prospLinkedinStatus: LinkedinStatus;
  prospLinkedinNota: string;
}>;

export async function atualizarLead(id: string, patch: PatchLead): Promise<void> {
  await twenty("PATCH", `/people/${encodeURIComponent(id)}`, patch);
}

/** Message-IDs dos leads em sequência (para casar respostas pelo In-Reply-To). */
export async function leadsEmSequenciaComMessageId(): Promise<Array<Lead & { messageId: string }>> {
  const raw = await listarPeople(FILTRO_PROSPECCAO);
  return raw
    .map((p) => ({ ...toLead(p), messageId: str(p.prospMessageId) }))
    .filter((l) => l.status === "ENVIADO" || l.status === "FOLLOWUP_ENVIADO");
}

/* -------------------------------------------------------------------------- */
/* Registro das execuções (Notes)                                             */
/* -------------------------------------------------------------------------- */

export const PREFIXO_EXECUCAO = "Prospecção · execução";

export async function registrarExecucao(titulo: string, markdown: string): Promise<void> {
  await twenty("POST", "/notes", {
    title: `${PREFIXO_EXECUCAO} · ${titulo}`.slice(0, 200),
    bodyV2: { markdown, blocknote: null }
  });
}

/**
 * Freio de emergência do painel. A pausa é uma Note com título fixo: existir
 * = pausado. Mudar variável de ambiente na Vercel exige redeploy; isto não.
 */
const TITULO_PAUSA = "Prospecção · PAUSADA";

async function notaPausa(): Promise<string | null> {
  const json = await twenty<{ data?: { notes?: Array<{ id: string }> } }>(
    "GET",
    `/notes?filter=title%5Beq%5D:${q(TITULO_PAUSA)}&limit=5`
  );
  return json.data?.notes?.[0]?.id ?? null;
}

export async function pausaAtiva(): Promise<boolean> {
  return Boolean(await notaPausa());
}

export async function definirPausa(pausar: boolean, motivo = ""): Promise<void> {
  const atual = await notaPausa();
  if (pausar && !atual) {
    await twenty("POST", "/notes", {
      title: TITULO_PAUSA,
      bodyV2: { markdown: `Pausada pelo painel em ${new Date().toISOString()}. ${motivo}`.trim(), blocknote: null }
    });
  }
  if (!pausar && atual) await twenty("DELETE", `/notes/${atual}`);
}

export type Execucao = { id: string; titulo: string; markdown: string; criadoEm: string };

export async function listarExecucoes(limit = 15): Promise<Execucao[]> {
  const filter = `title%5Blike%5D:${q(`${PREFIXO_EXECUCAO}%`)}`;
  const json = await twenty<{ data?: { notes?: Array<Record<string, unknown>> } }>(
    "GET",
    `/notes?filter=${filter}&limit=60`
  );
  return (json.data?.notes ?? [])
    .sort((a, b) => str(b.createdAt).localeCompare(str(a.createdAt)))
    .slice(0, limit)
    .map((n) => ({
    id: str(n.id),
    titulo: str(n.title).replace(`${PREFIXO_EXECUCAO} · `, ""),
    markdown: str((n.bodyV2 as { markdown?: string } | undefined)?.markdown),
    criadoEm: str(n.createdAt)
  }));
}
