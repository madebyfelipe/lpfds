import { createHash, createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import { CAPTCHA_MAX, type Comentario, type Desafio, type SolucaoDesafio } from "@/lib/comentarios";

/**
 * Servidor dos comentários: captcha de prova de trabalho + Supabase (REST).
 * Usa fetch direto no PostgREST, sem SDK. A chave é a Secret key do projeto
 * (`sb_secret_…`) ou a service_role legada (JWT): fica só aqui (a tabela tem
 * RLS ligado e nenhuma policy, então a publishable/anon key não lê nada).
 *
 * Variáveis: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, COMENTARIOS_SECRET.
 */

const TABELA = "blog_comments";
/** Tempo mínimo entre pedir o desafio e enviar: robô de formulário responde na hora. */
const IDADE_MIN_MS = 3_000;
const IDADE_MAX_MS = 30 * 60 * 1000;

export function configurado() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.COMENTARIOS_SECRET);
}

/* ------------------------------ captcha ---------------------------------- */

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");
const assinar = (challenge: string, salt: string) =>
  createHmac("sha256", process.env.COMENTARIOS_SECRET ?? "").update(`${challenge}.${salt}`).digest("hex");

/** Desafio novo: o cliente precisa achar o número sorteado por força bruta. */
export function criarDesafio(): Desafio {
  const salt = `${Date.now()}.${randomBytes(8).toString("hex")}`;
  const challenge = sha256(salt + randomInt(0, CAPTCHA_MAX + 1));
  return { salt, challenge, signature: assinar(challenge, salt), max: CAPTCHA_MAX };
}

/** Confere assinatura, resposta e idade do desafio. Não protege contra reuso: a coluna `challenge_sig` é única. */
export function verificarDesafio(solucao: Partial<SolucaoDesafio> | undefined): boolean {
  if (!solucao) return false;
  const { salt, challenge, signature, number } = solucao;
  if (typeof salt !== "string" || typeof challenge !== "string" || typeof signature !== "string") return false;
  if (!Number.isInteger(number) || number! < 0 || number! > CAPTCHA_MAX) return false;

  const esperada = Buffer.from(assinar(challenge, salt));
  const recebida = Buffer.from(signature);
  if (esperada.length !== recebida.length || !timingSafeEqual(esperada, recebida)) return false;
  if (sha256(salt + number) !== challenge) return false;

  const idade = Date.now() - Number(salt.split(".")[0]);
  return Number.isFinite(idade) && idade >= IDADE_MIN_MS && idade <= IDADE_MAX_MS;
}

/* ------------------------------ Supabase --------------------------------- */

function rest(caminho: string, init: RequestInit = {}) {
  const chave = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return fetch(`${process.env.SUPABASE_URL!.replace(/\/$/, "")}/rest/v1/${caminho}`, {
    ...init,
    cache: "no-store",
    headers: {
      apikey: chave,
      // As chaves novas (sb_secret_…) não são JWT: vão só em `apikey`. A
      // service_role legada é JWT e também precisa do Authorization.
      ...(chave.startsWith("sb_") ? {} : { Authorization: `Bearer ${chave}` }),
      "Content-Type": "application/json",
      ...init.headers
    }
  });
}

type Linha = { id: string; slug: string; nome: string; texto: string; created_at: string };
const publico = ({ id, slug, nome, texto, created_at }: Linha): Comentario => ({
  id,
  slug,
  nome,
  texto,
  data: created_at.slice(0, 10)
});

/** Visíveis de um post, do mais antigo para o mais novo. */
export async function listar(slug: string): Promise<Comentario[]> {
  const query = new URLSearchParams({
    slug: `eq.${slug}`,
    hidden: "eq.false",
    select: "id,slug,nome,texto,created_at",
    order: "created_at.asc",
    limit: "200"
  });
  const res = await rest(`${TABELA}?${query}`);
  if (!res.ok) throw new Error(`supabase_list_${res.status}`);
  return ((await res.json()) as Linha[]).map(publico);
}

/** Quantos comentários entraram na janela (todos os posts): alimenta o disjuntor global. */
export async function contarRecentes(janelaMs: number): Promise<number> {
  const desde = new Date(Date.now() - janelaMs).toISOString();
  const query = new URLSearchParams({ created_at: `gte.${desde}`, select: "id", limit: "100" });
  const res = await rest(`${TABELA}?${query}`);
  if (!res.ok) throw new Error(`supabase_count_${res.status}`);
  return ((await res.json()) as unknown[]).length;
}

export type Gravado = { status: "ok"; comentario: Comentario } | { status: "reuso" };

export async function gravar(dados: { slug: string; nome: string; texto: string; assinatura: string }): Promise<Gravado> {
  const res = await rest(TABELA, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      slug: dados.slug,
      nome: dados.nome,
      texto: dados.texto,
      challenge_sig: dados.assinatura
    })
  });
  // 409 = violação de unicidade em challenge_sig: o mesmo desafio resolvido já foi usado.
  if (res.status === 409) return { status: "reuso" };
  if (!res.ok) throw new Error(`supabase_insert_${res.status}`);
  const [linha] = (await res.json()) as Linha[];
  return { status: "ok", comentario: publico(linha) };
}
