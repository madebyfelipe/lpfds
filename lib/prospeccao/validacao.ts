import { LIMITES_TEXTO, PRIORIDADES, checarCopy, termoProibido, type Prioridade } from "./config";
import type { NovoLead } from "./twenty";

/**
 * Validação do que entra na prospecção. A rotina é um modelo de linguagem
 * lendo a web e a planilha importada vem de qualquer lugar: o servidor não
 * confia em nenhuma das duas — recusa o lead inteiro em vez de "consertar" um
 * campo, para que um texto ruim nunca saia com cara de aprovado.
 */

const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
/** Caixas que não são de gente: ninguém lê, e escrever para elas é bounce ou spam trap. */
const CAIXAS_PROIBIDAS =
  /^(no-?reply|nao-?responda|naoresponda|mailer-daemon|postmaster|abuse|privacidade|dpo|lgpd|financeiro|nf|nfe|rh|vagas|curriculo|cobranca)@/;

export type Resultado<T> = { ok: true; valor: T } | { ok: false; motivo: string };

const texto = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\r\n/g, "\n").trim() : "").slice(0, max + 1);

export function validarEmail(raw: unknown): Resultado<string> {
  const email = texto(raw, 200).toLowerCase();
  if (!EMAIL_RE.test(email)) return { ok: false, motivo: "email_invalido" };
  if (CAIXAS_PROIBIDAS.test(email)) return { ok: false, motivo: "caixa_nao_pessoal" };
  return { ok: true, valor: email };
}

export type Textos = { assunto: string; assuntoB: string; mensagem: string; followups: string[] };

/** Assunto(s), 1º e-mail e follow-ups — as regras de copy valem igual para todo caminho. */
export function validarTextos(r: Record<string, unknown>): Resultado<Textos> {
  const assunto = texto(r.assunto, LIMITES_TEXTO.assunto);
  const assuntoB = texto(r.assuntoB, LIMITES_TEXTO.assunto);
  const mensagem = texto(r.mensagem, LIMITES_TEXTO.mensagem);
  if (!assunto) return { ok: false, motivo: "falta_assunto" };
  if (!mensagem) return { ok: false, motivo: "falta_mensagem" };
  if (assunto.length > LIMITES_TEXTO.assunto || assuntoB.length > LIMITES_TEXTO.assunto) {
    return { ok: false, motivo: "assunto_longo_demais" };
  }
  if (mensagem.length > LIMITES_TEXTO.mensagem) return { ok: false, motivo: "mensagem_longo_demais" };

  const brutos = Array.isArray(r.followups) ? r.followups : [];
  if (brutos.length > 3) return { ok: false, motivo: "mais_de_3_followups" };
  const followups = [0, 1, 2].map((i) => texto(brutos[i], LIMITES_TEXTO.followup));
  if (followups.some((f) => f.length > LIMITES_TEXTO.followup)) return { ok: false, motivo: "followup_longo_demais" };

  // O rodapé (identificação + descadastro) é do servidor; o texto não traz.
  if (/descadastr|n[ãa]o quiser receber|prefere n[ãa]o receber/i.test(mensagem + followups.join(" "))) {
    return { ok: false, motivo: "mensagem_traz_rodape" };
  }
  const copy = checarCopy({ assunto, assuntoB, mensagem, followups });
  if (copy) return { ok: false, motivo: copy };
  const proibido = termoProibido(`${assunto}\n${assuntoB}\n${mensagem}\n${followups.join("\n")}`);
  if (proibido) return { ok: false, motivo: `termo_proibido:${proibido}` };
  return { ok: true, valor: { assunto, assuntoB, mensagem, followups } };
}

function urlValida(v: string): boolean {
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

const prioridadeDe = (v: unknown): Prioridade =>
  (PRIORIDADES as readonly string[]).includes(String(v)) ? (String(v) as Prioridade) : "C";
const scoreDe = (v: unknown) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.min(10, Math.round(n))) : 5;
};

/** Pesquisa (evidência, hipótese, limites, prioridade) — rotina, ao criar ou completar um lead. */
export function validarPesquisa(r: Record<string, unknown>): Resultado<{
  evidencia: string;
  hipotese: string;
  limite: string;
  prioridade: Prioridade;
  score: number;
  linkedin: string;
  linkedinNota: string;
}> {
  const evidencia = texto(r.evidencia, LIMITES_TEXTO.longo);
  if (!evidencia) return { ok: false, motivo: "falta_evidencia" };
  const linkedin = texto(r.linkedin, LIMITES_TEXTO.curto);
  if (linkedin && !/^https:\/\/([a-z]+\.)?linkedin\.com\//.test(linkedin)) return { ok: false, motivo: "linkedin_invalido" };
  const linkedinNota = texto(r.linkedinNota, LIMITES_TEXTO.linkedinNota);
  if (linkedinNota.length > LIMITES_TEXTO.linkedinNota) return { ok: false, motivo: "linkedinNota_longo_demais" };
  return {
    ok: true,
    valor: {
      evidencia,
      hipotese: texto(r.hipotese, LIMITES_TEXTO.longo),
      limite: texto(r.limite, LIMITES_TEXTO.longo),
      prioridade: prioridadeDe(r.prioridade),
      score: scoreDe(r.score),
      linkedin,
      linkedinNota
    }
  };
}

/** Lead completo vindo da rotina (pesquisa + texto). */
export function validarNovoLead(raw: unknown, campanhaPadrao: string): Resultado<NovoLead> {
  const r = (raw ?? {}) as Record<string, unknown>;
  const email = validarEmail(r.email);
  if (!email.ok) return email;

  const empresa = texto(r.empresa, LIMITES_TEXTO.curto);
  const fonte = texto(r.fonte, LIMITES_TEXTO.curto);
  if (!empresa) return { ok: false, motivo: "falta_empresa" };
  if (!fonte) return { ok: false, motivo: "falta_fonte" };
  // A fonte é a prova de onde o e-mail veio (LGPD) — tem de ser uma URL pública.
  if (!urlValida(fonte)) return { ok: false, motivo: "fonte_nao_e_url" };

  const pesquisa = validarPesquisa(r);
  if (!pesquisa.ok) return pesquisa;
  const textos = validarTextos(r);
  if (!textos.ok) return textos;

  return {
    ok: true,
    valor: {
      nome: texto(r.nome, LIMITES_TEXTO.curto),
      email: email.valor,
      empresa,
      cidade: texto(r.cidade, LIMITES_TEXTO.curto),
      fonte,
      instagram: texto(r.instagram, LIMITES_TEXTO.curto),
      campanha: texto(r.campanha, 80) || campanhaPadrao,
      ...pesquisa.valor,
      ...textos.valor
    }
  };
}

/**
 * Linha de planilha importada no painel. Entra como PESQUISAR, sem texto: a
 * rotina abre o site, escreve a evidência e o e-mail, ou descarta. `origem` é
 * de onde a lista veio — vai para o rodapé ("seu contato chegou até mim por").
 */
export function validarImportado(row: Record<string, string>, campanha: string, origem: string): Resultado<NovoLead> {
  const email = validarEmail(row.email ?? row.emailprofissional ?? row.mail);
  if (!email.ok) return email;
  const site = (row.site ?? row.website ?? row.url ?? "").trim();
  const siteUrl = site && !/^https?:\/\//.test(site) ? `https://${site}` : site;
  const linkedin = (row.linkedin ?? "").trim();
  return {
    ok: true,
    valor: {
      nome: (row.nome ?? row.name ?? "").trim().slice(0, LIMITES_TEXTO.curto),
      email: email.valor,
      empresa: (row.empresa ?? row.clinica ?? row.consultorio ?? row.company ?? "").trim().slice(0, LIMITES_TEXTO.curto),
      cidade: (row.cidade ?? row.city ?? "").trim().slice(0, LIMITES_TEXTO.curto),
      // A fonte é a origem da lista até a rotina achar o e-mail publicado num
      // site (aí ela troca pela URL). Dizer "vi seu e-mail no seu site" sem
      // ter visto seria mentir no rodapé.
      fonte: origem,
      // O site informado vai como ponto de partida para a pesquisa da rotina.
      evidencia: siteUrl && urlValida(siteUrl) ? `Site informado na planilha: ${siteUrl}` : "",
      hipotese: "",
      limite: `Importado: ${origem}.`,
      prioridade: "C",
      score: 5,
      assunto: "",
      mensagem: "",
      followups: ["", "", ""],
      campanha,
      instagram: (row.instagram ?? "").trim().slice(0, LIMITES_TEXTO.curto),
      linkedin: /^https:\/\/([a-z]+\.)?linkedin\.com\//.test(linkedin) ? linkedin : "",
      status: "PESQUISAR"
    }
  };
}
