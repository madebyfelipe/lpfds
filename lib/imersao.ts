/**
 * Form da imersão — ponto único de configuração.
 *
 * Diferente da newsletter (que joga o cadastro em CRM/automação), aqui o
 * destino é uma caixa de e-mail: o pedido de agenda chega direto para o
 * Felipe, com cópia oculta para o e-mail pessoal.
 *
 * Destinatários e credenciais SMTP ficam no servidor (`app/api/imersao/route.ts`
 * + `.env.local`); este arquivo guarda só o que os dois lados compartilham.
 */

/** Caixa que recebe o pedido. */
export const IMERSAO_TO = "alo@madebyfelipe.com.br";

/** Cópia oculta — não aparece no cabeçalho que o destinatário vê. */
export const IMERSAO_BCC = "byonichip@gmail.com";

/** Limite por campo: o form é curto e nada aqui justifica texto longo. */
export const MAX_FIELD = 120;

export type ImersaoInput = {
  nome: string;
  crp: string;
  whatsapp: string;
};

export type ImersaoResult = { ok: boolean };

/**
 * Validação usada nos dois lados: o cliente para não deixar enviar vazio, a
 * rota para não confiar no cliente. Devolve o campo que falta, ou null.
 */
export function validateImersao(input: Partial<ImersaoInput>): keyof ImersaoInput | null {
  if (!input.nome?.trim()) return "nome";
  if (!input.crp?.trim()) return "crp";
  // Só dígitos: aceita "(11) 99999-9999" e "+55 11 99999 9999" do mesmo jeito.
  if ((input.whatsapp ?? "").replace(/\D/g, "").length < 10) return "whatsapp";
  return null;
}

/** Rótulo do campo inválido, para a mensagem de erro do form. */
export const fieldLabels: Record<keyof ImersaoInput, string> = {
  nome: "Nome",
  crp: "CRP",
  whatsapp: "WhatsApp"
};

/**
 * Envia o pedido para /api/imersao (rota de servidor: as credenciais de SMTP
 * não podem existir no bundle do cliente).
 */
export async function requestImersao(input: ImersaoInput): Promise<ImersaoResult> {
  const res = await fetch("/api/imersao", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });

  if (!res.ok) throw new Error(`Imersão respondeu ${res.status}`);
  return (await res.json()) as ImersaoResult;
}
