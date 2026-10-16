import { LIMITES_TEXTO, PRIORIDADES, checarCopy, termoProibido, type Prioridade } from "./config";
import type { NovoLead } from "./twenty";

/**
 * Validação do que a rotina manda. A rotina é um modelo de linguagem lendo a
 * web: o servidor não confia nela — recusa o lead inteiro em vez de "consertar"
 * um campo, para que um texto ruim nunca saia com cara de aprovado.
 */

const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
/** Caixas que não são de gente: ninguém lê, e responder a elas é bounce ou spam trap. */
const CAIXAS_PROIBIDAS = /^(no-?reply|nao-?responda|naoresponda|mailer-daemon|postmaster|abuse|privacidade|dpo|lgpd|financeiro|nf|nfe|rh|vagas|curriculo)@/;

export type ResultadoValidacao = { ok: true; lead: NovoLead } | { ok: false; motivo: string };

const texto = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\r\n/g, "\n").trim() : "").slice(0, max + 1);

export function validarNovoLead(raw: unknown, campanhaPadrao: string): ResultadoValidacao {
  const r = (raw ?? {}) as Record<string, unknown>;
  const email = texto(r.email, 200).toLowerCase();
  if (!EMAIL_RE.test(email)) return { ok: false, motivo: "email_invalido" };
  if (CAIXAS_PROIBIDAS.test(email)) return { ok: false, motivo: "caixa_nao_pessoal" };

  const campos = {
    nome: texto(r.nome, LIMITES_TEXTO.curto),
    empresa: texto(r.empresa, LIMITES_TEXTO.curto),
    cidade: texto(r.cidade, LIMITES_TEXTO.curto),
    fonte: texto(r.fonte, LIMITES_TEXTO.curto),
    evidencia: texto(r.evidencia, LIMITES_TEXTO.longo),
    hipotese: texto(r.hipotese, LIMITES_TEXTO.longo),
    limite: texto(r.limite, LIMITES_TEXTO.longo),
    assunto: texto(r.assunto, LIMITES_TEXTO.assunto),
    mensagem: texto(r.mensagem, LIMITES_TEXTO.mensagem),
    instagram: texto(r.instagram, LIMITES_TEXTO.curto),
    linkedin: texto(r.linkedin, LIMITES_TEXTO.curto),
    linkedinNota: texto(r.linkedinNota, LIMITES_TEXTO.linkedinNota),
    campanha: texto(r.campanha, 80) || campanhaPadrao
  };

  const followupsBrutos = Array.isArray(r.followups) ? r.followups : [];
  if (followupsBrutos.length > 3) return { ok: false, motivo: "mais_de_3_followups" };
  const followups = [0, 1, 2].map((i) => texto(followupsBrutos[i], LIMITES_TEXTO.followup));
  if (followups.some((f) => f.length > LIMITES_TEXTO.followup)) return { ok: false, motivo: "followup_longo_demais" };
  // Sequência sem buraco: follow-up 3 sem o 2 nunca sairia.
  const ultimo = followups.map(Boolean).lastIndexOf(true);
  if (followups.slice(0, ultimo + 1).some((f) => !f)) return { ok: false, motivo: "followups_com_buraco" };

  for (const obrigatorio of ["empresa", "fonte", "evidencia", "assunto", "mensagem"] as const) {
    if (!campos[obrigatorio]) return { ok: false, motivo: `falta_${obrigatorio}` };
  }
  const estourou = (
    [
      ["assunto", LIMITES_TEXTO.assunto],
      ["mensagem", LIMITES_TEXTO.mensagem],
      ["linkedinNota", LIMITES_TEXTO.linkedinNota]
    ] as const
  ).find(([k, max]) => campos[k].length > max);
  if (estourou) return { ok: false, motivo: `${estourou[0]}_longo_demais` };

  // A fonte é a prova de onde o e-mail veio (LGPD) — tem de ser uma URL pública.
  try {
    const u = new URL(campos.fonte);
    if (u.protocol !== "https:" && u.protocol !== "http:") throw new Error();
  } catch {
    return { ok: false, motivo: "fonte_nao_e_url" };
  }
  if (campos.linkedin && !/^https:\/\/([a-z]+\.)?linkedin\.com\//.test(campos.linkedin)) {
    return { ok: false, motivo: "linkedin_invalido" };
  }

  // O rodapé (identificação + descadastro) é do servidor; a rotina não escreve.
  if (/descadastr|n[ãa]o quiser receber|prefere n[ãa]o receber/i.test(campos.mensagem + followups.join(" "))) {
    return { ok: false, motivo: "mensagem_traz_rodape" };
  }

  const copy = checarCopy({ assunto: campos.assunto, mensagem: campos.mensagem, followups });
  if (copy) return { ok: false, motivo: copy };

  const proibido = termoProibido(`${campos.assunto}\n${campos.mensagem}\n${followups.join("\n")}`);
  if (proibido) return { ok: false, motivo: `termo_proibido:${proibido}` };

  const prioridade = (PRIORIDADES as readonly string[]).includes(String(r.prioridade))
    ? (String(r.prioridade) as Prioridade)
    : "C";
  const scoreNum = Number(r.score);
  const score = Number.isFinite(scoreNum) ? Math.max(0, Math.min(10, Math.round(scoreNum))) : 5;

  return { ok: true, lead: { ...campos, email, prioridade, score, followups } };
}
