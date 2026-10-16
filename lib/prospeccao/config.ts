/**
 * Prospecção ativa — regras compartilhadas (servidor, painel e rotina).
 *
 * O fluxo, de ponta a ponta:
 *   1. A rotina noturna (sessão agendada do Claude, ver docs/prospeccao-rotina.md)
 *      pesquisa consultórios, escreve o e-mail de cada um e manda o lote para
 *      POST /api/prospeccao/leads. A rota valida e grava no Twenty como Person
 *      com `origem: PROSPECCAO` e `prospStatus: REVISAR`.
 *   2. O Felipe revisa no /painel/campanhas (edita, aprova → PRONTO, descarta).
 *      No modo automático, o que ficou em REVISAR passa a valer como aprovado
 *      depois da janela de veto.
 *   3. O Vercel Cron bate em /api/prospeccao/disparo em horário comercial:
 *      primeiro varre a caixa (respostas e bounces param a sequência), depois
 *      manda follow-ups vencidos e, por fim, e-mails novos — dentro do limite
 *      do dia, que sobe aos poucos (aquecimento do domínio).
 *
 * Este arquivo não tem segredo nem I/O: os números moram aqui para que o
 * painel mostre exatamente a mesma conta que o servidor aplica.
 */

export const PROSP_STATUS = [
  "REVISAR",
  "PRONTO",
  "ENVIADO",
  "FOLLOWUP_ENVIADO",
  "RESPONDEU",
  "DESCADASTRADO",
  "BOUNCE",
  "DESCARTADO"
] as const;
export type ProspStatus = (typeof PROSP_STATUS)[number];

export const PROSP_STATUS_LABEL: Record<ProspStatus, string> = {
  REVISAR: "Aguardando revisão",
  PRONTO: "Aprovado · na fila",
  ENVIADO: "Enviado",
  FOLLOWUP_ENVIADO: "Follow-up enviado",
  RESPONDEU: "Respondeu",
  DESCADASTRADO: "Descadastrado",
  BOUNCE: "Bounce",
  DESCARTADO: "Descartado"
};

/** Status que encerram a sequência para sempre (supressão). */
export const STATUS_FINAIS: readonly ProspStatus[] = ["RESPONDEU", "DESCADASTRADO", "BOUNCE", "DESCARTADO"];

/** Status que contam como "aguardando resposta" (a caixa é varrida por eles). */
export const STATUS_EM_SEQUENCIA: readonly ProspStatus[] = ["ENVIADO", "FOLLOWUP_ENVIADO"];

export const PRIORIDADES = ["A", "B", "C"] as const;
export type Prioridade = (typeof PRIORIDADES)[number];

export const LINKEDIN_STATUS = ["SUGERIDO", "ENVIADO", "CONECTADO", "SEM_PERFIL"] as const;
export type LinkedinStatus = (typeof LINKEDIN_STATUS)[number];

/** Lead como o painel e a rotina enxergam (espelho dos campos `prosp*` do Person). */
export type Lead = {
  id: string;
  nome: string;
  email: string;
  empresa: string;
  cidade: string;
  status: ProspStatus;
  prioridade: Prioridade | null;
  score: number | null;
  fonte: string;
  evidencia: string;
  hipotese: string;
  limite: string;
  assunto: string;
  mensagem: string;
  /** Até 3 follow-ups, na ordem. Vazio no meio corta a sequência ali. */
  followups: string[];
  /** E-mails já enviados nesta sequência (0 = nenhum; 1 = 1º contato; 2–4 = follow-ups). */
  etapa: number;
  campanha: string;
  instagram: string;
  linkedin: string;
  linkedinStatus: LinkedinStatus | null;
  linkedinNota: string;
  enviadoEm: string | null;
  followupEm: string | null;
  respondeuEm: string | null;
  erro: string;
  criadoEm: string;
};

/* -------------------------------------------------------------------------- */
/* Cadência e aquecimento                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Limite diário com rampa: começa baixo e sobe por dia útil desde o início da
 * operação, até o teto. Domínio que sai de zero para 50 e-mails frios num dia
 * vai para o spam — a rampa é o que as ferramentas tipo Explee/Instantly
 * chamam de warm-up. O teto conta 1º contato + follow-up.
 */
export const CADENCIA = {
  limiteInicial: 5,
  incrementoPorDiaUtil: 2,
  teto: 30,
  /**
   * Dias úteis de espera antes de cada follow-up, contados do envio anterior:
   * 1º contato → +3 → +4 → +5 (≈ três semanas no total). A maioria das
   * respostas vem no 2º ou 3º toque; quem para no primeiro deixa elas na mesa.
   */
  diasEntreEtapas: [3, 4, 5],
  /** Execuções do cron por dia (vercel.json) — o limite do dia se divide entre elas. */
  lotesPorDia: 3,
  /** Pausa entre dois envios na mesma execução (s): ritmo humano, não rajada. */
  intervaloMinSeg: 14,
  intervaloMaxSeg: 26,
  /** No modo automático, quanto tempo um REVISAR espera por veto antes de sair. */
  janelaVetoHoras: 4
} as const;

/** "YYYY-MM-DD" no fuso de São Paulo. */
export function diaBrt(d: Date = new Date()): string {
  return d.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
}

/** Início do dia (00:00 BRT) em ISO — para contar o que já saiu hoje. */
export function inicioDoDiaBrtIso(d: Date = new Date()): string {
  // Brasília é UTC-3 fixo desde 2019 (sem horário de verão).
  return new Date(`${diaBrt(d)}T00:00:00-03:00`).toISOString();
}

function diaDaSemanaBrt(dia: string): number {
  return new Date(`${dia}T12:00:00-03:00`).getUTCDay();
}

/** Dias úteis (seg–sex) entre duas datas-civis "YYYY-MM-DD", sem contar a inicial. */
export function diasUteisEntre(de: string, ate: string): number {
  let n = 0;
  const cur = new Date(`${de}T12:00:00-03:00`);
  const fim = new Date(`${ate}T12:00:00-03:00`);
  while (cur < fim) {
    cur.setUTCDate(cur.getUTCDate() + 1);
    const dow = cur.getUTCDay();
    if (dow !== 0 && dow !== 6) n++;
  }
  return n;
}

/**
 * Limite de envios do dia. `inicio` é PROSPECCAO_INICIO ("YYYY-MM-DD", o 1º dia
 * de disparo). Fim de semana não envia. Antes do início, zero.
 */
export function limiteDoDia(inicio: string | undefined, hoje: string = diaBrt()): number {
  if (!inicio || !/^\d{4}-\d{2}-\d{2}$/.test(inicio)) return 0;
  if (hoje < inicio) return 0;
  const dow = diaDaSemanaBrt(hoje);
  if (dow === 0 || dow === 6) return 0;
  const dias = diasUteisEntre(inicio, hoje);
  return Math.min(CADENCIA.teto, CADENCIA.limiteInicial + dias * CADENCIA.incrementoPorDiaUtil);
}

/** Texto do próximo follow-up, se a sequência ainda tem um (etapa 1 → followups[0]…). */
export function proximoFollowup(l: Pick<Lead, "etapa" | "followups">): string | null {
  const i = l.etapa - 1;
  if (i < 0 || i >= CADENCIA.diasEntreEtapas.length) return null;
  return l.followups[i]?.trim() || null;
}

/** Já passou a espera desde o último envio para mandar o próximo follow-up? */
export function followupVencido(ultimoEnvioIso: string, etapa: number, hoje: string = diaBrt()): boolean {
  const espera = CADENCIA.diasEntreEtapas[etapa - 1];
  if (espera === undefined) return false;
  return diasUteisEntre(diaBrt(new Date(ultimoEnvioIso)), hoje) >= espera;
}

/* -------------------------------------------------------------------------- */
/* Conteúdo                                                                   */
/* -------------------------------------------------------------------------- */

/** Limites do que a rotina pode mandar — o servidor corta o resto. */
export const LIMITES_TEXTO = {
  assunto: 80,
  mensagem: 1000,
  followup: 700,
  linkedinNota: 300,
  curto: 400,
  longo: 1200
} as const;

/**
 * Regras de copy — aplicadas pelo servidor, não só sugeridas à rotina:
 *
 * - 1º e-mail com até 100 palavras, UMA pergunta e nenhum pedido de reunião.
 *   "Você faz X à mão?" rende mais resposta do que "15 minutos essa semana?".
 * - Abre pelo motivo de ser ELA: uma linha específica do site ou do LinkedIn.
 * - Assunto simples, de e-mail interno: curto, sem exclamação, sem emoji,
 *   sem caixa alta, sem "Re:"/"Fwd:" falso.
 * - Follow-ups curtos (até 70 palavras), no máximo uma pergunta cada.
 */
export const REGRAS_COPY = {
  maxPalavrasMensagem: 100,
  maxPalavrasFollowup: 70,
  maxPalavrasAssunto: 7,
  maxCharsAssunto: 55
} as const;

export function contarPalavras(texto: string): number {
  return texto.split(/\s+/).filter((t) => /[\p{L}\p{N}]/u.test(t)).length;
}

const PEDIDO_DE_REUNIAO = /\b\d{2}\s?min|\bminutinhos?\b|reuni[aã]o|\bcall\b|videochamada|agendar|marcar um hor[aá]rio|bater um papo|tomar um caf[eé]/i;

/** Devolve o motivo da recusa, ou null se o texto cumpre as regras. */
export function checarCopy(c: { assunto: string; mensagem: string; followups: string[] }): string | null {
  const a = c.assunto.trim();
  if (contarPalavras(a) > REGRAS_COPY.maxPalavrasAssunto || a.length > REGRAS_COPY.maxCharsAssunto) return "assunto_longo";
  if (/[!]/.test(a)) return "assunto_com_exclamacao";
  if (/\p{Extended_Pictographic}/u.test(a)) return "assunto_com_emoji";
  if (/^(re|fwd?|enc|res)\s*:/i.test(a)) return "assunto_finge_resposta";
  // Sigla curta (TEA, ABA, TDAH) passa; palavra inteira gritada não.
  if (/(^|[^\p{L}])\p{Lu}{5,}(?![\p{L}])/u.test(a)) return "assunto_caixa_alta";
  if (/https?:\/\//.test(a)) return "link_no_assunto";

  const m = c.mensagem.trim();
  if (contarPalavras(m) > REGRAS_COPY.maxPalavrasMensagem) return "mensagem_mais_de_100_palavras";
  const perguntas = (m.match(/\?/g) ?? []).length;
  if (perguntas === 0) return "mensagem_sem_pergunta";
  if (perguntas > 1) return "mensagem_com_mais_de_uma_pergunta";
  if (PEDIDO_DE_REUNIAO.test(m)) return "mensagem_pede_reuniao";

  for (const [i, f] of c.followups.entries()) {
    if (!f.trim()) continue;
    if (contarPalavras(f) > REGRAS_COPY.maxPalavrasFollowup) return `followup${i + 1}_longo`;
    if ((f.match(/\?/g) ?? []).length > 1) return `followup${i + 1}_com_mais_de_uma_pergunta`;
  }
  return null;
}

/**
 * Expressões que não podem aparecer num e-mail de prospecção para psicólogos.
 * Mesmas restrições do site: nada de caso clínico ou resultado de terapia, e
 * nada de promessa de resultado comercial. A rota recusa o lead inteiro.
 */
export const TERMOS_PROIBIDOS = [
  "garantimos",
  "garantido",
  "garantia de resultado",
  "resultado de terapia",
  "caso clínico",
  "lotar sua agenda",
  "dobrar seu faturamento"
];

export function termoProibido(texto: string): string | null {
  const t = texto.toLowerCase();
  return TERMOS_PROIBIDOS.find((p) => t.includes(p)) ?? null;
}

/**
 * Rodapé que o servidor anexa a TODO e-mail de prospecção — a rotina não
 * escreve isso, para que identificação, origem do dado e saída nunca faltem
 * (LGPD art. 9º: titular informado sobre origem e como se opor; art. 18, § 2º).
 */
export function rodape(opts: { email: string; fonte: string; linkDescadastro: string; assinatura: string }): string {
  // Curto de propósito: o e-mail tem até 100 palavras, o rodapé não pode
  // ser metade dele. Mas origem do dado e saída nunca saem.
  const origem = opts.fonte ? `em ${opts.fonte.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}` : "no seu site";
  return [
    "",
    opts.assinatura,
    "",
    `—`,
    `Vi seu e-mail ${origem}. Prefere não receber? Responda "não" ou: ${opts.linkDescadastro}`
  ].join("\n");
}

export const ASSINATURA_PADRAO = "Felipe\nMade by Felipe · madebyfelipe.com.br";
