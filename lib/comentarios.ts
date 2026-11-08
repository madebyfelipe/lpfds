/**
 * Comentários do blog — o que cliente e rota compartilham.
 *
 * Moderação por e-mail, sem banco nem serviço novo: o envio vai para
 * /api/comentarios, que manda o comentário para a caixa do Felipe e NÃO o
 * publica. Publicar = adicionar o comentário aprovado em
 * `content/blog/comentarios.ts` (PR + deploy). O repositório é público, então
 * comentário pendente nunca entra no repo — só o aprovado.
 *
 * Coleta mínima (LGPD): nome + comentário + aceite. Sem e-mail, sem IP guardado.
 */

export const MAX_NOME = 80;
export const MAX_TEXTO = 2000;

export type ComentarioInput = {
  slug: string;
  nome: string;
  texto: string;
  consentimento: boolean;
  /** Honeypot: campo escondido. Humano deixa vazio; robô preenche. */
  site?: string;
};

/** Comentário aprovado, como fica em content/blog/comentarios.ts. */
export type Comentario = {
  slug: string;
  nome: string;
  texto: string;
  /** ISO `AAAA-MM-DD` da aprovação. */
  data: string;
};

/** Validação nos dois lados. Devolve o campo que falta, ou null. */
export function validateComentario(
  input: Partial<ComentarioInput>
): "nome" | "texto" | "consentimento" | null {
  if (!input.nome?.trim()) return "nome";
  if ((input.texto?.trim().length ?? 0) < 3) return "texto";
  if (input.consentimento !== true) return "consentimento";
  return null;
}

export async function enviarComentario(input: ComentarioInput) {
  const res = await fetch("/api/comentarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });
  if (!res.ok) throw new Error(String(res.status));
}
