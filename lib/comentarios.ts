/**
 * Comentários do blog — o que cliente e rota compartilham.
 *
 * Publicação imediata (sem aprovação prévia), gravada no Supabase pelo servidor
 * (`/api/comentarios`). O navegador nunca fala com o Supabase direto. Defesas
 * contra abuso, nesta ordem: honeypot, tempo mínimo, captcha de prova de
 * trabalho, filtro de link/e-mail/telefone, limite por IP e disjuntor global.
 * O Felipe revisa depois: cada comentário gera um e-mail e pode ser ocultado
 * (`hidden = true` na tabela) sem deploy.
 *
 * Coleta mínima (LGPD): nome + comentário + aceite. Sem e-mail, sem IP guardado.
 */

export const MAX_NOME = 80;
export const MAX_TEXTO = 2000;

/** Prova de trabalho: o servidor sorteia um número até este limite. ~1s no celular. */
export const CAPTCHA_MAX = 30000;

export type Desafio = {
  salt: string;
  challenge: string;
  signature: string;
  max: number;
};

export type SolucaoDesafio = Desafio & { number: number };

export type ComentarioInput = {
  slug: string;
  nome: string;
  texto: string;
  consentimento: boolean;
  /** Honeypot: campo escondido. Humano deixa vazio; robô preenche. */
  site?: string;
  captcha?: SolucaoDesafio;
};

/** Como o comentário aparece na página. `data` é ISO `AAAA-MM-DD`. */
export type Comentario = {
  id?: string;
  slug?: string;
  nome: string;
  texto: string;
  data: string;
};

export type CampoInvalido = "nome" | "texto" | "consentimento";
export type MotivoTexto = "link" | "email" | "telefone";

/**
 * Link, e-mail ou telefone/CPF no comentário: é como o spam entra e também
 * como dado de paciente vaza. Barramos no cliente (mensagem clara) e no servidor.
 */
export function motivoBloqueio(texto: string): MotivoTexto | null {
  // E-mail antes de link: "ana@exemplo.com" também parece domínio.
  if (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(texto)) return "email";
  if (/(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|br|io|app|dev|xyz|co|me)\b)/i.test(texto)) return "link";
  if (/(\d[\s().-]*){8,}/.test(texto)) return "telefone";
  return null;
}

export const MENSAGEM_BLOQUEIO: Record<MotivoTexto, string> = {
  link: "Links não são aceitos no comentário.",
  email: "Não coloque e-mails no comentário.",
  telefone: "Não coloque telefones, CPF ou outros números de contato no comentário."
};

/** Validação nos dois lados. Devolve o campo que falta, ou null. */
export function validateComentario(input: Partial<ComentarioInput>): CampoInvalido | null {
  if (!input.nome?.trim()) return "nome";
  if ((input.texto?.trim().length ?? 0) < 3) return "texto";
  if (input.consentimento !== true) return "consentimento";
  return null;
}

const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer), (b) => b.toString(16).padStart(2, "0")).join("");

export async function buscarDesafio(): Promise<Desafio> {
  const res = await fetch("/api/comentarios/desafio", { cache: "no-store" });
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
}

/**
 * Resolve a prova de trabalho: acha `n` tal que SHA-256(salt + n) = challenge.
 * Cede o thread a cada lote para a página não travar enquanto a pessoa digita.
 */
export async function resolverDesafio(desafio: Desafio): Promise<SolucaoDesafio> {
  const encoder = new TextEncoder();
  for (let n = 0; n <= desafio.max; n++) {
    const digest = await crypto.subtle.digest("SHA-256", encoder.encode(desafio.salt + n));
    if (toHex(digest) === desafio.challenge) return { ...desafio, number: n };
    if (n % 500 === 499) await new Promise((resolve) => setTimeout(resolve, 0));
  }
  throw new Error("captcha_unsolved");
}

export async function enviarComentario(input: ComentarioInput): Promise<Comentario> {
  const res = await fetch("/api/comentarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });
  if (!res.ok) {
    const detalhe = (await res.json().catch(() => ({}))) as { error?: string; reason?: string };
    // "blocked_content:link" leva o motivo junto; os demais são só o código do erro.
    throw new Error(
      detalhe.error === "blocked_content" && detalhe.reason
        ? `blocked_content:${detalhe.reason}`
        : (detalhe.error ?? String(res.status))
    );
  }
  const data = (await res.json()) as { ok: boolean; comentario?: Comentario };
  // Honeypot e duplicata respondem ok sem comentário: a tela mostra o aviso, sem item novo.
  return data.comentario ?? { nome: input.nome, texto: input.texto, data: new Date().toISOString().slice(0, 10) };
}

export async function buscarComentarios(slug: string): Promise<Comentario[]> {
  const res = await fetch(`/api/comentarios?slug=${encodeURIComponent(slug)}`);
  if (!res.ok) throw new Error(String(res.status));
  const data = (await res.json()) as { comentarios: Comentario[] };
  return data.comentarios;
}

/** "2026-11-07" → "7 de novembro de 2026". Local: o cliente não pode importar lib/blog. */
export function formatarData(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}
