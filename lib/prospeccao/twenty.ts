import "server-only";
import {
  CAMPANHA_STATUS,
  CLASSIFICACOES,
  LINKEDIN_STATUS,
  PRIORIDADES,
  PROSP_STATUS,
  type Campanha,
  type Classificacao,
  type Lead,
  type LinkedinStatus,
  type Prioridade,
  type ProspStatus
} from "./config";

/**
 * Twenty (Core API) como banco da prospecção.
 *
 * - Lead = Person com `origem: PROSPECCAO` e os campos `prosp*`.
 * - Campanha = objeto custom `campanhaProspeccao` (REST `/campanhasProspeccao`).
 * - Configurações que o painel muda sem redeploy (pausa geral, caixas pausadas,
 *   lista de bloqueio) e o histórico das execuções = Notes com título fixo.
 *
 * Não há outro armazenamento. Lead descadastrado NÃO se apaga: o registro
 * `DESCADASTRADO` é a lista de supressão.
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

type Raw = Record<string, unknown> & { id: string };

const str = (v: unknown) => (typeof v === "string" ? v : "");
const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null);
const pick = <T extends string>(v: unknown, allowed: readonly T[]): T | null =>
  typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : null;

/** POST/PATCH devolvem `{ data: { createX: {...} } }` — o id está no 1º valor. */
function idDe(json: { data?: Record<string, { id?: string }> }): string {
  const id = Object.values(json.data ?? {})[0]?.id;
  if (!id) throw new Error("Twenty não devolveu id");
  return id;
}

/** Pagina por cursor um GET de coleção (até `max` registros). */
async function listar(colecao: string, filter: string, max = 1000): Promise<Raw[]> {
  const out: Raw[] = [];
  let after: string | null = null;
  for (let page = 0; page < 40 && out.length < max; page++) {
    const cursor: string = after ? `&starting_after=${encodeURIComponent(after)}` : "";
    type Pagina = { data?: Record<string, Raw[]>; pageInfo?: { hasNextPage?: boolean; endCursor?: string } };
    const json: Pagina = await twenty<Pagina>("GET", `/${colecao}?${filter ? `filter=${filter}&` : ""}limit=60${cursor}`);
    const itens = Object.values(json.data ?? {})[0] ?? [];
    out.push(...itens);
    if (!json.pageInfo?.hasNextPage || !json.pageInfo.endCursor || itens.length === 0) break;
    after = json.pageInfo.endCursor;
  }
  return out.slice(0, max);
}

/* -------------------------------------------------------------------------- */
/* Leads                                                                      */
/* -------------------------------------------------------------------------- */

export function toLead(p: Raw): Lead {
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
    score: num(p.prospScore),
    fonte: str(p.prospFonte),
    evidencia: str(p.prospEvidencia),
    hipotese: str(p.prospHipotese),
    limite: str(p.prospLimite),
    assunto: str(p.prospAssunto),
    assuntoB: str(p.prospAssuntoB),
    variante: str(p.prospVariante),
    mensagem: str(p.prospMensagem),
    followups: [str(p.prospFollowup), str(p.prospFollowup2), str(p.prospFollowup3)],
    etapa: num(p.prospEtapa) ?? (p.prospEnviadoEm ? (p.prospFollowupEm ? 2 : 1) : 0),
    campanha: str(p.prospCampanha),
    caixa: str(p.prospCaixa).toLowerCase(),
    messageId: str(p.prospMessageId),
    instagram: str(p.instagram),
    linkedin: str(linkedin.primaryLinkUrl),
    linkedinStatus: pick(p.prospLinkedinStatus, LINKEDIN_STATUS),
    linkedinNota: str(p.prospLinkedinNota),
    enviadoEm: str(p.prospEnviadoEm) || null,
    followupEm: str(p.prospFollowupEm) || null,
    respondeuEm: str(p.prospRespondeuEm) || null,
    etapaResposta: num(p.prospEtapaResposta),
    classificacao: pick(p.prospClassificacao, CLASSIFICACOES),
    resposta: str(p.prospResposta),
    respostaMessageId: str(p.prospRespostaMessageId),
    respostaSugerida: str(p.prospRespostaSugerida),
    respondidoEm: str(p.prospRespondidoEm) || null,
    instrucao: str(p.prospInstrucao),
    erro: str(p.prospErro),
    criadoEm: str(p.createdAt)
  };
}

const FILTRO_PROSPECCAO = `origem%5Beq%5D:${q("PROSPECCAO")}`;

/**
 * Leads da prospecção, opcionalmente só alguns status. O recorte por status é
 * feito aqui, não no filtro da API: o `[eq]` já foi validado contra o servidor
 * (rotas do webinar e do diagnóstico), o `[in]` com enum não — e o volume da
 * prospecção (centenas) não justifica o risco.
 */
export async function listarLeads(status?: readonly ProspStatus[]): Promise<Lead[]> {
  const leads = (await listar("people", FILTRO_PROSPECCAO)).map(toLead);
  return status?.length ? leads.filter((l) => status.includes(l.status)) : leads;
}

export async function buscarLead(id: string): Promise<Lead | null> {
  const json = await twenty<{ data?: { person?: Raw } }>("GET", `/people/${encodeURIComponent(id)}`);
  const p = json.data?.person;
  return p && p.origem === "PROSPECCAO" ? toLead(p) : null;
}

/** Todas as pessoas com este e-mail (qualquer origem) — para dedup e supressão. */
export async function pessoasPorEmail(email: string): Promise<Raw[]> {
  return listar("people", `emails.primaryEmail%5Beq%5D:${q(email.toLowerCase())}`, 10);
}

/** Domínios e e-mails que já existem no CRM (qualquer origem) — ninguém é prospectado duas vezes. */
export async function conhecidos(): Promise<{ emails: string[]; dominios: string[] }> {
  const people = await listar("people", "", 5000);
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
  "googlemail.com",
  "hotmail.com",
  "hotmail.com.br",
  "outlook.com",
  "outlook.com.br",
  "live.com",
  "yahoo.com",
  "yahoo.com.br",
  "icloud.com",
  "me.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "msn.com",
  "globo.com",
  "ig.com.br",
  "proton.me",
  "protonmail.com"
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
  assuntoB?: string;
  mensagem: string;
  followups: string[];
  campanha: string;
  instagram?: string;
  linkedin?: string;
  linkedinNota?: string;
  /** PESQUISAR = importado, sem texto ainda. Padrão REVISAR. */
  status?: "REVISAR" | "PESQUISAR";
};

export async function criarLead(l: NovoLead): Promise<string> {
  const [firstName, ...rest] = (l.nome || l.empresa || l.email.split("@")[0]).split(/\s+/).filter(Boolean);
  const body: Record<string, unknown> = {
    name: { firstName: firstName ?? "", lastName: rest.join(" ") },
    emails: { primaryEmail: l.email.toLowerCase() },
    origem: "PROSPECCAO",
    // Contato frio: não houve consentimento. A base legal é o legítimo
    // interesse (art. 7º, IX) sobre contato profissional publicado.
    consentimentoLgpd: false,
    prospStatus: l.status ?? "REVISAR",
    prospPrioridade: l.prioridade,
    prospScore: l.score,
    prospEmpresa: l.empresa,
    prospCidade: l.cidade,
    prospFonte: l.fonte,
    prospEvidencia: l.evidencia,
    prospHipotese: l.hipotese,
    prospLimite: l.limite,
    prospAssunto: l.assunto,
    prospAssuntoB: l.assuntoB ?? "",
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
  return idDe(await twenty("POST", "/people", body));
}

/** Campos `prosp*` editáveis (nomes do Twenty). */
export type PatchLead = Partial<{
  prospStatus: ProspStatus;
  prospPrioridade: Prioridade;
  prospScore: number;
  prospFonte: string;
  prospEvidencia: string;
  prospHipotese: string;
  prospLimite: string;
  prospAssunto: string;
  prospAssuntoB: string;
  prospVariante: string;
  prospMensagem: string;
  prospFollowup: string;
  prospFollowup2: string;
  prospFollowup3: string;
  prospEtapa: number;
  prospEnviadoEm: string;
  prospFollowupEm: string;
  prospRespondeuEm: string;
  prospEtapaResposta: number;
  prospMessageId: string;
  prospCaixa: string;
  prospClassificacao: Classificacao | null;
  prospResposta: string;
  prospRespostaMessageId: string;
  prospRespostaSugerida: string;
  prospRespondidoEm: string;
  prospInstrucao: string;
  prospErro: string;
  prospLinkedinStatus: LinkedinStatus;
  prospLinkedinNota: string;
}>;

export async function atualizarLead(id: string, patch: PatchLead): Promise<void> {
  await twenty("PATCH", `/people/${encodeURIComponent(id)}`, patch);
}

/** Textos de um lead → campos do Twenty (para editar/reescrever/completar). */
export function patchDeTexto(t: { assunto: string; assuntoB?: string; mensagem: string; followups: string[] }): PatchLead {
  return {
    prospAssunto: t.assunto,
    prospAssuntoB: t.assuntoB ?? "",
    prospMensagem: t.mensagem,
    prospFollowup: t.followups[0] ?? "",
    prospFollowup2: t.followups[1] ?? "",
    prospFollowup3: t.followups[2] ?? ""
  };
}

/* -------------------------------------------------------------------------- */
/* Campanhas                                                                  */
/* -------------------------------------------------------------------------- */

const CAMPANHAS = "campanhasProspeccao";

function toCampanha(r: Raw): Campanha {
  return {
    id: r.id,
    nome: str(r.name),
    slug: str(r.slug),
    status: pick(r.status, CAMPANHA_STATUS) ?? "ATIVA",
    icp: str(r.icp),
    oferta: str(r.oferta),
    regioes: str(r.regioes),
    excluir: str(r.excluir),
    referencias: str(r.referencias),
    tom: str(r.tom)
  };
}

export async function listarCampanhas(): Promise<Campanha[]> {
  return (await listar(CAMPANHAS, "", 200)).map(toCampanha).filter((c) => c.slug);
}

export type DadosCampanha = Omit<Campanha, "id">;

export async function criarCampanha(c: DadosCampanha): Promise<string> {
  const { nome, ...resto } = c;
  return idDe(await twenty("POST", `/${CAMPANHAS}`, { name: nome, ...resto }));
}

export async function atualizarCampanha(id: string, c: Partial<DadosCampanha>): Promise<void> {
  const { nome, ...resto } = c;
  await twenty("PATCH", `/${CAMPANHAS}/${encodeURIComponent(id)}`, nome === undefined ? resto : { name: nome, ...resto });
}

/* -------------------------------------------------------------------------- */
/* Notes: execuções, pausa, caixas pausadas, bloqueios                        */
/* -------------------------------------------------------------------------- */

type Nota = { id: string; titulo: string; markdown: string; criadoEm: string };

const toNota = (n: Raw): Nota => ({
  id: n.id,
  titulo: str(n.title),
  markdown: str((n.bodyV2 as { markdown?: string } | undefined)?.markdown),
  criadoEm: str(n.createdAt)
});

async function notasComTitulo(titulo: string, prefixo = false): Promise<Nota[]> {
  const op = prefixo ? "like" : "eq";
  const valor = prefixo ? `${titulo}%` : titulo;
  return (await listar("notes", `title%5B${op}%5D:${q(valor)}`, 200)).map(toNota);
}

async function criarNota(titulo: string, markdown: string): Promise<void> {
  await twenty("POST", "/notes", { title: titulo.slice(0, 200), bodyV2: { markdown, blocknote: null } });
}

async function apagarNota(id: string): Promise<void> {
  await twenty("DELETE", `/notes/${encodeURIComponent(id)}`);
}

/** Uma nota por título: troca o corpo (apaga as cópias extras, se houver). */
async function salvarNotaUnica(titulo: string, markdown: string): Promise<void> {
  const atuais = await notasComTitulo(titulo);
  if (atuais[0]) {
    await twenty("PATCH", `/notes/${atuais[0].id}`, { bodyV2: { markdown, blocknote: null } });
    for (const extra of atuais.slice(1)) await apagarNota(extra.id);
  } else {
    await criarNota(titulo, markdown);
  }
}

export const PREFIXO_EXECUCAO = "Prospecção · execução";

export async function registrarExecucao(titulo: string, markdown: string): Promise<void> {
  await criarNota(`${PREFIXO_EXECUCAO} · ${titulo}`, markdown);
}

export type Execucao = Nota;

export async function listarExecucoes(limit = 15): Promise<Execucao[]> {
  return (await notasComTitulo(PREFIXO_EXECUCAO, true))
    .sort((a, b) => b.criadoEm.localeCompare(a.criadoEm))
    .slice(0, limit)
    .map((n) => ({ ...n, titulo: n.titulo.replace(`${PREFIXO_EXECUCAO} · `, "") }));
}

/**
 * Freio de emergência do painel. A pausa é uma Note com título fixo: existir
 * = pausado. Mudar variável de ambiente na Vercel exige redeploy; isto não.
 */
const TITULO_PAUSA = "Prospecção · PAUSADA";

export async function pausaAtiva(): Promise<boolean> {
  return (await notasComTitulo(TITULO_PAUSA)).length > 0;
}

export async function definirPausa(pausar: boolean, motivo = ""): Promise<void> {
  const atuais = await notasComTitulo(TITULO_PAUSA);
  if (pausar && !atuais.length) {
    await criarNota(TITULO_PAUSA, `Pausada em ${new Date().toISOString()}. ${motivo}`.trim());
  }
  if (!pausar) for (const n of atuais) await apagarNota(n.id);
}

/** Caixas pausadas (pelo painel ou pela saúde automática): e-mail → motivo. */
const PREFIXO_CAIXA_PAUSADA = "Prospecção · caixa pausada · ";

export async function caixasPausadas(): Promise<Map<string, string>> {
  const notas = await notasComTitulo(PREFIXO_CAIXA_PAUSADA, true);
  return new Map(notas.map((n) => [n.titulo.replace(PREFIXO_CAIXA_PAUSADA, "").toLowerCase(), n.markdown]));
}

export async function definirPausaCaixa(email: string, pausar: boolean, motivo = ""): Promise<void> {
  const titulo = `${PREFIXO_CAIXA_PAUSADA}${email.toLowerCase()}`;
  const atuais = await notasComTitulo(titulo);
  if (pausar && !atuais.length) await criarNota(titulo, motivo || `Pausada em ${new Date().toISOString()}.`);
  if (!pausar) for (const n of atuais) await apagarNota(n.id);
}

/**
 * Lista de bloqueio manual ("não contatar"): um e-mail ou domínio por linha.
 * Vale para a rotina, para a importação e na hora do envio.
 */
const TITULO_BLOQUEIOS = "Prospecção · bloqueios";

export async function lerBloqueios(): Promise<string[]> {
  const [nota] = await notasComTitulo(TITULO_BLOQUEIOS);
  return normalizarBloqueios(nota?.markdown ?? "");
}

export function normalizarBloqueios(texto: string): string[] {
  return [
    ...new Set(
      texto
        .split(/[\n,;]+/)
        .map((l) => l.trim().toLowerCase().replace(/^@/, "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, ""))
        .filter((l) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l) || /^[a-z0-9.-]+\.[a-z]{2,}$/.test(l))
    )
  ].sort();
}

export async function salvarBloqueios(lista: string[]): Promise<string[]> {
  const limpa = normalizarBloqueios(lista.join("\n"));
  await salvarNotaUnica(TITULO_BLOQUEIOS, limpa.join("\n"));
  return limpa;
}

/** E-mail bloqueado por ele mesmo ou pelo domínio (inclui subdomínio). */
export function bloqueado(email: string, bloqueios: readonly string[]): boolean {
  const e = email.toLowerCase();
  const dom = e.split("@")[1] ?? "";
  return bloqueios.some((b) => (b.includes("@") ? b === e : dom === b || dom.endsWith(`.${b}`)));
}
