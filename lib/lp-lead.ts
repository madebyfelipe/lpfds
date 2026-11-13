import { IMERSAO_BCC, IMERSAO_TO } from "@/lib/imersao";

/**
 * Lead das LPs de captação (/lp/marca, /lp/site) — ponto único de
 * configuração.
 *
 * Mais curto que o da imersão (lib/imersao.ts): sem CRP, só Nome e WhatsApp,
 * precedidos pelas respostas do mini-quiz de qualificação que cada LP define.
 * Mesma caixa de e-mail (reaproveita IMERSAO_TO/IMERSAO_BCC — é o mesmo
 * Felipe do outro lado) e o mesmo princípio de consentimento validado também
 * no servidor.
 */
export { IMERSAO_TO as LP_LEAD_TO, IMERSAO_BCC as LP_LEAD_BCC };

export const MAX_FIELD = 120;
/** Limite de perguntas do quiz — nenhuma LP de hoje passa disso. */
export const MAX_ANSWERS = 6;

/** Qual LP gerou o lead — vira o assunto do e-mail e rotula as respostas. */
export type LpSource = "marca" | "site";

export const lpSourceLabels: Record<LpSource, string> = {
  marca: "Marca",
  site: "Site"
};

export type LpLeadInput = {
  source: LpSource;
  /** Respostas do quiz, na ordem em que foram perguntadas. */
  respostas: string[];
  nome: string;
  whatsapp: string;
  /**
   * Aceite da Política de Privacidade. Sem ele não há base legal para o
   * contato, então a rota recusa o envio — não é um campo decorativo.
   */
  consentimento: boolean;
};

export type LpLeadResult = { ok: boolean };

/**
 * Validação usada nos dois lados: o cliente para não deixar enviar vazio, a
 * rota para não confiar no cliente. Devolve o campo que falta, ou null.
 */
export function validateLpLead(input: Partial<LpLeadInput>): keyof LpLeadInput | null {
  if (input.source !== "marca" && input.source !== "site") return "source";
  if (!Array.isArray(input.respostas) || input.respostas.length === 0) return "respostas";
  if (!input.nome?.trim()) return "nome";
  // Só dígitos: aceita "(11) 99999-9999" e "+55 11 99999 9999" do mesmo jeito.
  if ((input.whatsapp ?? "").replace(/\D/g, "").length < 10) return "whatsapp";
  if (input.consentimento !== true) return "consentimento";
  return null;
}

/** Rótulo do campo inválido, para a mensagem de erro do form. */
export const lpLeadFieldLabels: Record<keyof LpLeadInput, string> = {
  source: "origem",
  respostas: "respostas do quiz",
  nome: "Nome",
  whatsapp: "WhatsApp",
  consentimento: "aceite da Política de Privacidade"
};

/**
 * Envia o lead para /api/lp-lead (rota de servidor: as credenciais de SMTP
 * não podem existir no bundle do cliente).
 */
export async function requestLpLead(input: LpLeadInput): Promise<LpLeadResult> {
  const res = await fetch("/api/lp-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });

  if (!res.ok) throw new Error(`Lead respondeu ${res.status}`);
  return (await res.json()) as LpLeadResult;
}
