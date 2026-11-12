import "server-only";
import { createHash } from "node:crypto";
import {
  CONFIG_PADRAO,
  Validacao,
  finalizado,
  pontuar,
  statusResultado,
  type Config,
  type Estado,
  type Execucao,
  type Lead,
  type Ligacao,
  type NovoLead,
  type Pedido,
} from "./model";

/** Registros independentes em Notes do Twenty: nenhuma migração de Person necessária.
 * Ligações são eventos imutáveis, para dois SDRs não sobrescreverem o histórico. */
type Registro =
  | { tipo: "lead"; dados: NovoLead }
  | { tipo: "ligacao"; dados: Omit<Ligacao, "criadoEm"> }
  | { tipo: "aprovar"; dados: { leadId: string } }
  | { tipo: "descartar"; dados: { leadId: string } }
  | { tipo: "responsavel"; dados: { leadId: string; responsavel: string } }
  | { tipo: "config"; dados: Config }
  | { tipo: "pedido"; dados: { observacao: string } }
  | { tipo: "execucao"; dados: Omit<Execucao, "id" | "criadoEm"> };
type Salvo = Registro & { id: string; criadoEm: string; versao: 1 };
type Nota = { id: string; createdAt: string; bodyV2?: { markdown?: string } };
export class StorageError extends Error {
  constructor(
    public status: number,
    message = "O CRM não respondeu. Tente novamente.",
  ) {
    super(message);
  }
}
export const configurado = () => Boolean(process.env.TWENTY_API_KEY);
const PREFIXO = "Cold call · ";
function uuid(seed: string) {
  const h = createHash("sha256")
    .update(`madebyfelipe:cold-call:v1:${seed}`)
    .digest("hex");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-5${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`;
}
async function api<T>(
  method: string,
  path: string,
  body?: unknown,
): Promise<T> {
  if (!configurado())
    throw new StorageError(
      503,
      "Configure TWENTY_API_KEY no ambiente do site para conectar o CRM.",
    );
  const base = (
    process.env.TWENTY_BASE_URL || "https://crm.madebyfelipe.agency"
  ).replace(/\/$/, "");
  let res: Response;
  try {
    res = await fetch(`${base}/rest${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${process.env.TWENTY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
  } catch {
    throw new StorageError(502);
  }
  if (!res.ok)
    throw new StorageError(
      res.status === 401 || res.status === 403 ? 502 : res.status,
    );
  return res.json() as Promise<T>;
}
function parse(n: Nota): Salvo {
  try {
    const raw = n.bodyV2?.markdown || "";
    const r = JSON.parse(raw.replace(/^```json\s*/, "").replace(/\s*```$/, ""));
    if (r.versao !== 1 || !r.tipo || !r.dados) throw 0;
    return { ...r, id: n.id, criadoEm: n.createdAt || r.criadoEm };
  } catch {
    throw new StorageError(
      502,
      "Há um registro de cold call inválido no CRM. Revise as Notes com prefixo Cold call antes de continuar.",
    );
  }
}
async function registros(): Promise<Salvo[]> {
  const out: Salvo[] = [];
  let after = "";
  const vistos = new Set<string>();
  for (let page = 0; page < 100; page++) {
    const r = await api<{
      data?: { notes?: Nota[] };
      pageInfo?: { hasNextPage?: boolean; endCursor?: string };
    }>(
      "GET",
      `/notes?filter=title%5Blike%5D:%22Cold%20call%20%C2%B7%20%25%22&limit=60${after ? `&starting_after=${encodeURIComponent(after)}` : ""}`,
    );
    if (!Array.isArray(r.data?.notes))
      throw new StorageError(502, "Resposta inesperada do CRM.");
    out.push(...r.data.notes.map(parse));
    if (!r.pageInfo?.hasNextPage)
      return out.sort(
        (a, b) =>
          a.criadoEm.localeCompare(b.criadoEm) || a.id.localeCompare(b.id),
      );
    const next = r.pageInfo.endCursor;
    if (!next || vistos.has(next) || !r.data.notes.length)
      throw new StorageError(
        502,
        "Paginação incompleta do CRM. Nenhum dado foi descartado.",
      );
    vistos.add(next);
    after = next;
  }
  throw new StorageError(
    502,
    "O histórico excedeu o limite de leitura. Arquive as execuções antigas no CRM antes de continuar.",
  );
}
async function salvar(seed: string, r: Registro): Promise<string> {
  const id = uuid(seed);
  const registro = { ...r, versao: 1, criadoEm: new Date().toISOString() };
  try {
    await api("POST", "/notes", {
      id,
      title: `${PREFIXO}${r.tipo} · ${id}`,
      bodyV2: {
        markdown: `\`\`\`json\n${JSON.stringify(registro)}\n\`\`\``,
        blocknote: null,
      },
    });
  } catch (e) {
    if (!(e instanceof StorageError) || ![400, 409].includes(e.status)) throw e;
    // Uma repetição é sucesso só se o registro já salvo tiver o mesmo conteúdo.
    const existing = await api<{ data?: { note?: Nota } }>(
      "GET",
      `/notes/${id}`,
    );
    if (!existing.data?.note) throw e;
    const old = parse(existing.data.note);
    if (
      old.tipo !== r.tipo ||
      JSON.stringify(old.dados) !== JSON.stringify(r.dados)
    )
      throw new StorageError(
        409,
        "Este registro já existe com outros dados. Atualize o painel.",
      );
  }
  return id;
}
export async function estado(): Promise<Estado> {
  const rows = await registros();
  const leads = new Map<string, Lead>();
  let config = { ...CONFIG_PADRAO };
  const execucoes: Execucao[] = [];
  const pedidos: Pedido[] = [];
  for (const r of rows) {
    if (r.tipo === "lead") {
      const score = pontuar(r.dados);
      leads.set(r.id, {
        ...r.dados,
        id: r.id,
        criadoEm: r.criadoEm,
        status: "REVISAR",
        retornoEm: null,
        proximaAcao: "",
        historico: [],
        score,
        prioridade: score >= 80 ? "A" : score >= 55 ? "B" : "C",
        ultimaLigacao: null,
      });
    }
  }
  for (const r of rows) {
    if (r.tipo === "config") config = r.dados;
    if (r.tipo === "execucao")
      execucoes.push({ ...r.dados, id: r.id, criadoEm: r.criadoEm });
    if (r.tipo === "pedido")
      pedidos.push({ ...r.dados, id: r.id, criadoEm: r.criadoEm });
    if (r.tipo === "aprovar") {
      const l = leads.get(r.dados.leadId);
      if (l && l.status === "REVISAR") l.status = "PRONTO";
    }
    if (r.tipo === "descartar") {
      const l = leads.get(r.dados.leadId);
      if (l && l.status === "REVISAR") l.status = "DESCARTADO";
    }
    if (r.tipo === "responsavel") {
      const l = leads.get(r.dados.leadId);
      if (l) l.responsavel = r.dados.responsavel;
    }
    if (r.tipo === "ligacao") {
      const l = leads.get(r.dados.leadId);
      if (l) {
        const c = { ...r.dados, criadoEm: r.criadoEm };
        l.historico.push(c);
        if (l.status !== "NAO_CONTATAR") {
          l.status = statusResultado(c.resultado);
          l.retornoEm = c.retornoEm;
          l.proximaAcao = c.proximaAcao;
        }
        l.ultimaLigacao = c.criadoEm;
      }
    }
  }
  const atendidos = new Set(execucoes.flatMap((e) => e.requestIds));
  return {
    leads: [...leads.values()],
    config,
    execucoes: execucoes.reverse().slice(0, 30),
    pedidos: pedidos.filter((p) => !atendidos.has(p.id)),
    conectado: true,
    tokenConfigurado: Boolean(process.env.PROSPECCAO_TOKEN),
  };
}
export async function criarLead(lead: NovoLead) {
  const current = await estado();
  const encontrado = current.leads.find((l) => l.telefone === lead.telefone);
  if (encontrado) return { id: encontrado.id, duplicado: true };
  const id = await salvar(`lead:${lead.telefone}`, {
    tipo: "lead",
    dados: lead,
  });
  return { id, duplicado: false };
}
export async function aprovar(id: string, leadId: string) {
  const s = await estado();
  const l = s.leads.find((l) => l.id === leadId);
  if (!l) throw new StorageError(404, "Empresa não encontrada.");
  if (l.status !== "REVISAR" && l.status !== "PRONTO")
    throw new StorageError(409, "Este contato já saiu da revisão.");
  return salvar(`aprovar:${id}`, { tipo: "aprovar", dados: { leadId } });
}
export async function ligar(c: Omit<Ligacao, "criadoEm">) {
  const s = await estado();
  const l = s.leads.find((l) => l.id === c.leadId);
  if (!l) throw new StorageError(404, "Empresa não encontrada.");
  const existente = l.historico.find((h) => h.id === c.id);
  if (existente) {
    const { criadoEm: _, ...dados } = existente;
    if (JSON.stringify(dados) !== JSON.stringify(c))
      throw new StorageError(
        409,
        "Esta ligação já foi registrada com outro resultado.",
      );
    return c.id;
  }
  if (finalizado(l) || l.status === "REVISAR")
    throw new StorageError(
      409,
      "O contato precisa estar aprovado e ativo para registrar uma ligação.",
    );
  return salvar(`ligacao:${c.id}`, { tipo: "ligacao", dados: c });
}
export async function atribuir(
  id: string,
  leadId: string,
  responsavel: string,
) {
  const s = await estado();
  if (!s.leads.some((l) => l.id === leadId)) throw new StorageError(404);
  if (!responsavel.trim() || responsavel.length > 80)
    throw new Validacao("Informe um responsável de até 80 caracteres.");
  return salvar(`responsavel:${id}`, {
    tipo: "responsavel",
    dados: { leadId, responsavel: responsavel.trim() },
  });
}
export const configurar = (id: string, dados: Config) =>
  salvar(`config:${id}`, { tipo: "config", dados });
export const pedir = (id: string, observacao: string) =>
  salvar(`pedido:${id}`, {
    tipo: "pedido",
    dados: { observacao: observacao.slice(0, 1000) },
  });
export const executar = (
  id: string,
  dados: Omit<Execucao, "id" | "criadoEm">,
) => salvar(`execucao:${id}`, { tipo: "execucao", dados });

export async function descartar(id: string, leadId: string) {
  const s = await estado();
  const l = s.leads.find((l) => l.id === leadId);
  if (!l) throw new StorageError(404);
  if (l.status !== "REVISAR")
    throw new StorageError(
      409,
      "Apenas contatos em revisão podem ser descartados.",
    );
  return salvar(`descartar:${id}`, { tipo: "descartar", dados: { leadId } });
}
