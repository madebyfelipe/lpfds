/**
 * Prospecção ativa — regras compartilhadas (servidor, painel e rotina).
 *
 * O fluxo, de ponta a ponta:
 *   1. A rotina noturna (sessão agendada do Claude, ver docs/prospeccao-rotina.md)
 *      pesquisa leads para cada CAMPANHA ativa, escreve o e-mail de cada um e
 *      manda o lote para POST /api/prospeccao/leads. A rota valida e grava no
 *      Twenty como Person com `origem: PROSPECCAO` e `prospStatus: REVISAR`.
 *      Lista importada no painel entra como PESQUISAR — a rotina completa.
 *   2. O Felipe revisa no /painel/campanhas (edita, aprova → PRONTO, descarta).
 *      No modo automático, o que ficou em REVISAR passa a valer como aprovado
 *      depois da janela de veto.
 *   3. O Vercel Cron bate em /api/prospeccao/disparo em horário comercial:
 *      varre as caixas (respostas, opt-out e bounces param a sequência), manda
 *      follow-ups vencidos e e-mails novos — cada caixa dentro do seu limite do
 *      dia, que sobe aos poucos (aquecimento).
 *   4. Respostas caem na aba Conversas: classificadas (regra + IA) e com uma
 *      sugestão de resposta que só sai quando o Felipe envia.
 *
 * Este arquivo não tem segredo nem I/O: os números moram aqui para que o
 * painel mostre exatamente a mesma conta que o servidor aplica.
 */

export const PROSP_STATUS = [
  "PESQUISAR",
  "REVISAR",
  "PRONTO",
  "ENVIADO",
  "FOLLOWUP_ENVIADO",
  "RESPONDEU",
  "REUNIAO",
  "DESCADASTRADO",
  "BOUNCE",
  "DESCARTADO"
] as const;
export type ProspStatus = (typeof PROSP_STATUS)[number];

export const PROSP_STATUS_LABEL: Record<ProspStatus, string> = {
  PESQUISAR: "Importado · aguardando pesquisa",
  REVISAR: "Aguardando revisão",
  PRONTO: "Aprovado · na fila",
  ENVIADO: "Enviado",
  FOLLOWUP_ENVIADO: "Follow-up enviado",
  RESPONDEU: "Respondeu",
  REUNIAO: "Reunião marcada",
  DESCADASTRADO: "Descadastrado",
  BOUNCE: "Bounce",
  DESCARTADO: "Descartado"
};

/** Status que encerram a sequência para sempre (supressão de novos envios frios). */
export const STATUS_FINAIS: readonly ProspStatus[] = ["RESPONDEU", "REUNIAO", "DESCADASTRADO", "BOUNCE", "DESCARTADO"];

/** Aguardando resposta: a caixa é varrida e o follow-up pode sair. */
export const STATUS_EM_SEQUENCIA: readonly ProspStatus[] = ["ENVIADO", "FOLLOWUP_ENVIADO"];

/** Conversa aberta (aba Conversas): a caixa continua sendo lida para novas respostas. */
export const STATUS_CONVERSA: readonly ProspStatus[] = ["RESPONDEU", "REUNIAO"];

export const PRIORIDADES = ["A", "B", "C"] as const;
export type Prioridade = (typeof PRIORIDADES)[number];

export const LINKEDIN_STATUS = ["SUGERIDO", "ENVIADO", "CONECTADO", "SEM_PERFIL"] as const;
export type LinkedinStatus = (typeof LINKEDIN_STATUS)[number];

export const CLASSIFICACOES = ["INTERESSADA", "PERGUNTA", "NAO_AGORA", "SEM_INTERESSE", "INDICOU_OUTRA", "OUTRO"] as const;
export type Classificacao = (typeof CLASSIFICACOES)[number];

export const CLASSIFICACAO_LABEL: Record<Classificacao, string> = {
  INTERESSADA: "Interessada",
  PERGUNTA: "Pergunta",
  NAO_AGORA: "Não agora",
  SEM_INTERESSE: "Sem interesse",
  INDICOU_OUTRA: "Indicou outra pessoa",
  OUTRO: "Outro"
};

/** "Lead quente" — o que o Explee chama de warm lead: vale a conversa. */
export const CLASSIFICACOES_POSITIVAS: readonly Classificacao[] = ["INTERESSADA", "PERGUNTA", "INDICOU_OUTRA"];

export const CAMPANHA_STATUS = ["ATIVA", "PAUSADA", "ARQUIVADA"] as const;
export type CampanhaStatus = (typeof CAMPANHA_STATUS)[number];

/** Campanha = briefing que a rotina lê + interruptor que o disparo respeita. */
export type Campanha = {
  id: string;
  nome: string;
  slug: string;
  status: CampanhaStatus;
  icp: string;
  oferta: string;
  regioes: string;
  excluir: string;
  referencias: string;
  tom: string;
};

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
  /** Assunto alternativo (teste A/B). Vazio = sem teste. */
  assuntoB: string;
  /** Qual assunto saiu no 1º e-mail: "A", "B" ou "" (ainda não saiu). */
  variante: string;
  mensagem: string;
  /** Até 3 follow-ups, na ordem. Vazio no meio corta a sequência ali. */
  followups: string[];
  /** E-mails já enviados nesta sequência (0 = nenhum; 1 = 1º contato; 2–4 = follow-ups). */
  etapa: number;
  campanha: string;
  /** Caixa que conduz a conversa (e-mail do remetente). Vazio = caixa padrão. */
  caixa: string;
  messageId: string;
  instagram: string;
  linkedin: string;
  linkedinStatus: LinkedinStatus | null;
  linkedinNota: string;
  enviadoEm: string | null;
  followupEm: string | null;
  respondeuEm: string | null;
  /** Em qual e-mail da sequência veio a 1ª resposta. */
  etapaResposta: number | null;
  classificacao: Classificacao | null;
  resposta: string;
  respostaMessageId: string;
  respostaSugerida: string;
  respondidoEm: string | null;
  /** Pedido de reescrita pendente (a rotina executa quando não há IA no painel). */
  instrucao: string;
  erro: string;
  criadoEm: string;
};

/* -------------------------------------------------------------------------- */
/* Cadência e aquecimento                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Limite diário por caixa, com rampa: começa baixo e sobe por dia útil desde
 * o início da caixa, até o teto. Domínio que sai de zero para 50 e-mails frios
 * num dia vai para o spam — a rampa é o warm-up. O teto conta 1º contato +
 * follow-up. Com várias caixas, o limite do dia é a soma delas.
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

/**
 * Saúde da caixa: com bounce acima disto a caixa se pausa sozinha (o Explee
 * tira do pool a caixa degradada). Só avalia com amostra mínima.
 */
export const SAUDE = {
  janelaDias: 30,
  amostraMinima: 20,
  maxBounce: 0.05,
  alertaDescadastro: 0.05
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
 * Limite de envios do dia de uma caixa. `inicio` é o 1º dia de disparo
 * ("YYYY-MM-DD"). Fim de semana não envia. Antes do início, zero.
 */
export function limiteDoDia(inicio: string | undefined, hoje: string = diaBrt(), teto: number = CADENCIA.teto): number {
  if (!inicio || !/^\d{4}-\d{2}-\d{2}$/.test(inicio)) return 0;
  if (hoje < inicio) return 0;
  const dow = diaDaSemanaBrt(hoje);
  if (dow === 0 || dow === 6) return 0;
  const dias = diasUteisEntre(inicio, hoje);
  return Math.min(teto, CADENCIA.limiteInicial + dias * CADENCIA.incrementoPorDiaUtil);
}

/** Próximo dia útil depois de `dia` (para o "limite de amanhã" da rotina). */
export function proximoDiaUtil(dia: string = diaBrt()): string {
  const d = new Date(`${dia}T12:00:00-03:00`);
  do d.setUTCDate(d.getUTCDate() + 1);
  while (d.getUTCDay() === 0 || d.getUTCDay() === 6);
  return diaBrt(d);
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

/**
 * Variante A/B do 1º e-mail. Determinística pelo e-mail (mesmo lead, mesma
 * variante, mesmo que o disparo rode duas vezes) e ~50/50 no agregado.
 */
export function varianteDe(email: string, temB: boolean): "A" | "B" {
  if (!temB) return "A";
  let h = 0;
  for (const c of email.toLowerCase()) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h % 2 === 0 ? "A" : "B";
}

/** O assunto que de fato saiu (ou vai sair) para este lead. */
export function assuntoEnviado(l: Pick<Lead, "assunto" | "assuntoB" | "variante" | "email">): string {
  const v = l.variante || varianteDe(l.email, Boolean(l.assuntoB));
  return v === "B" && l.assuntoB ? l.assuntoB : l.assunto;
}

/* -------------------------------------------------------------------------- */
/* Conteúdo                                                                   */
/* -------------------------------------------------------------------------- */

/** Limites do que a rotina pode mandar — o servidor recusa o resto. */
export const LIMITES_TEXTO = {
  assunto: 80,
  mensagem: 1000,
  followup: 700,
  resposta: 3000,
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

export function checarAssunto(assunto: string): string | null {
  const a = assunto.trim();
  if (!a) return "assunto_vazio";
  if (contarPalavras(a) > REGRAS_COPY.maxPalavrasAssunto || a.length > REGRAS_COPY.maxCharsAssunto) return "assunto_longo";
  if (/[!]/.test(a)) return "assunto_com_exclamacao";
  if (/\p{Extended_Pictographic}/u.test(a)) return "assunto_com_emoji";
  if (/^(re|fwd?|enc|res)\s*:/i.test(a)) return "assunto_finge_resposta";
  // Sigla curta (TEA, ABA, TDAH) passa; palavra inteira gritada não.
  if (/(^|[^\p{L}])\p{Lu}{5,}(?![\p{L}])/u.test(a)) return "assunto_caixa_alta";
  if (/https?:\/\//.test(a)) return "link_no_assunto";
  return null;
}

/** Devolve o motivo da recusa, ou null se o texto cumpre as regras. */
export function checarCopy(c: { assunto: string; assuntoB?: string; mensagem: string; followups: string[] }): string | null {
  const a = checarAssunto(c.assunto);
  if (a) return a;
  if (c.assuntoB?.trim()) {
    const b = checarAssunto(c.assuntoB);
    if (b) return `${b}_b`;
  }

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
  const ultimo = c.followups.map((f) => Boolean(f.trim())).lastIndexOf(true);
  if (c.followups.slice(0, ultimo + 1).some((f) => !f.trim())) return "followups_com_buraco";
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
 * Rodapé que o servidor anexa a TODO e-mail frio de prospecção — a rotina não
 * escreve isso, para que identificação, origem do dado e saída nunca faltem
 * (LGPD art. 9º: titular informado sobre origem e como se opor; art. 18, § 2º).
 * Resposta dentro de uma conversa que ELA abriu não leva rodapé.
 */
export function rodape(opts: { fonte: string; linkDescadastro: string; assinatura: string }): string {
  // Curto de propósito: o e-mail tem até 100 palavras, o rodapé não pode
  // ser metade dele. Mas origem do dado e saída nunca saem.
  const f = opts.fonte.trim();
  const origem = /^https?:\/\//.test(f)
    ? `Vi seu e-mail em ${f.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}.`
    : f
      ? `Seu contato chegou até mim por: ${f}.`
      : "Vi seu e-mail no seu site.";
  return ["", opts.assinatura, "", "—", `${origem} Prefere não receber? Responda "não" ou: ${opts.linkDescadastro}`].join("\n");
}

export const ASSINATURA_PADRAO = "Felipe\nMade by Felipe · madebyfelipe.com.br";

/* -------------------------------------------------------------------------- */
/* Respostas                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Pedido de saída escrito na resposta — honrado na hora, sem esperar IA nem
 * revisão (o Explee chama isso de "opt-out imediato"). O rodapé diz
 * 'responda "não"', então um "não" sozinho também conta.
 */
const OPT_OUT =
  /\b(n[ãa]o\s+(tenho\s+)?interesse|n[ãa]o\s+quero|n[ãa]o\s+me\s+(envie|mande|escreva)|pare\s+de\s+(me\s+)?(enviar|mandar|escrever)|remov[ae]\s+(meu|o\s+meu|esse|este)|me\s+(tir[ae]|remov[ae])|descadastr|sair\s+da\s+(sua\s+)?lista|unsubscribe|spam)\b/i;

/** Primeiro bloco da resposta, sem o histórico citado e sem assinatura de celular. */
export function limparResposta(texto: string): string {
  const linhas = texto.replace(/\r\n/g, "\n").split("\n");
  const corte = linhas.findIndex(
    (l) =>
      /^\s*>/.test(l) ||
      /^\s*(Em|On)\s.+(escreveu|wrote):\s*$/i.test(l) ||
      /^\s*-{2,}\s*(Mensagem original|Original Message)/i.test(l) ||
      /^\s*(De|From):\s.+@/i.test(l) ||
      /^\s*Enviado do meu (iPhone|Android|celular)/i.test(l)
  );
  return (corte >= 0 ? linhas.slice(0, corte) : linhas).join("\n").trim().slice(0, LIMITES_TEXTO.resposta);
}

/** Leitura por regra — usada na hora; a IA (ou a rotina) refina depois. */
export function classificarPorRegra(texto: string): { classificacao: Classificacao; optOut: boolean } {
  const t = texto.trim();
  if (/^n[ãa]o[.!]?$/i.test(t) || OPT_OUT.test(t)) return { classificacao: "SEM_INTERESSE", optOut: true };
  if (/\b(agora n[ãa]o|mais pra frente|mais para frente|no momento n[ãa]o|ano que vem|depois (a gente|eu) (vê|vejo))\b/i.test(t)) {
    return { classificacao: "NAO_AGORA", optOut: false };
  }
  if (/\b(fale com|falar com|procure|o contato (certo|correto) [ée]|quem cuida (disso|da comunica[çc][ãa]o) [ée])\b/i.test(t)) {
    return { classificacao: "INDICOU_OUTRA", optOut: false };
  }
  if (/\b(tenho interesse|me interessa|pode mandar|pode enviar|manda sim|quero (ver|saber)|vamos conversar|bora|topo)\b/i.test(t)) {
    return { classificacao: "INTERESSADA", optOut: false };
  }
  if (t.includes("?")) return { classificacao: "PERGUNTA", optOut: false };
  return { classificacao: "OUTRO", optOut: false };
}

/* -------------------------------------------------------------------------- */
/* Métricas                                                                   */
/* -------------------------------------------------------------------------- */

export type Metricas = {
  leads: number;
  naFila: number;
  contatados: number;
  respostas: number;
  positivas: number;
  reunioes: number;
  bounces: number;
  descadastros: number;
  taxaResposta: number;
  taxaPositiva: number;
  taxaBounce: number;
};

const pct = (a: number, b: number) => (b ? a / b : 0);

export function metricasDe(leads: Lead[]): Metricas {
  const contatados = leads.filter((l) => l.enviadoEm || l.etapa > 0).length;
  const respondeu = leads.filter((l) => l.respondeuEm || STATUS_CONVERSA.includes(l.status));
  const positivas = respondeu.filter(
    (l) => l.status === "REUNIAO" || (l.classificacao && CLASSIFICACOES_POSITIVAS.includes(l.classificacao))
  ).length;
  const bounces = leads.filter((l) => l.status === "BOUNCE").length;
  return {
    leads: leads.length,
    naFila: leads.filter((l) => l.status === "REVISAR" || l.status === "PRONTO" || l.status === "PESQUISAR").length,
    contatados,
    respostas: respondeu.length,
    positivas,
    reunioes: leads.filter((l) => l.status === "REUNIAO").length,
    bounces,
    descadastros: leads.filter((l) => l.status === "DESCADASTRADO").length,
    taxaResposta: pct(respondeu.length, contatados),
    taxaPositiva: pct(positivas, contatados),
    taxaBounce: pct(bounces, contatados)
  };
}

/**
 * Quantos leads pesquisar por campanha esta noite. Peso = taxa de resposta
 * positiva suavizada (Laplace: campanha nova não começa em zero), com piso de
 * 1 por campanha ativa para que nenhuma fique sem amostra. É o "o agente
 * aprende o que funciona e muda o esforço" do Explee, em versão auditável.
 */
export function alocarPesquisa(campanhas: Array<{ slug: string; metricas: Metricas }>, total: number): Record<string, number> {
  const out: Record<string, number> = {};
  if (!campanhas.length || total <= 0) return out;
  const pesos = campanhas.map((c) => (c.metricas.positivas + 1) / (c.metricas.contatados + 5));
  const soma = pesos.reduce((a, b) => a + b, 0);
  let restante = total;
  campanhas.forEach((c) => {
    out[c.slug] = total >= campanhas.length ? 1 : 0;
    restante -= out[c.slug];
  });
  const fatias = campanhas.map((c, i) => ({ slug: c.slug, exato: (pesos[i] / soma) * restante }));
  fatias.forEach((f) => (out[f.slug] += Math.floor(f.exato)));
  let sobra = total - Object.values(out).reduce((a, b) => a + b, 0);
  fatias
    .sort((a, b) => (b.exato % 1) - (a.exato % 1))
    .forEach((f) => {
      if (sobra > 0) {
        out[f.slug]++;
        sobra--;
      }
    });
  return out;
}

/** Leitura de um CSV simples (vírgula ou ponto e vírgula, aspas opcionais). */
export function lerCsv(texto: string): Array<Record<string, string>> {
  const linhas = texto.replace(/\r\n/g, "\n").split("\n").filter((l) => l.trim());
  if (linhas.length < 2) return [];
  const sep = (linhas[0].match(/;/g) ?? []).length > (linhas[0].match(/,/g) ?? []).length ? ";" : ",";
  const partir = (linha: string) => {
    const out: string[] = [];
    let cur = "";
    let aspas = false;
    for (let i = 0; i < linha.length; i++) {
      const ch = linha[i];
      if (ch === '"') {
        if (aspas && linha[i + 1] === '"') {
          cur += '"';
          i++;
        } else aspas = !aspas;
      } else if (ch === sep && !aspas) {
        out.push(cur);
        cur = "";
      } else cur += ch;
    }
    out.push(cur);
    return out.map((c) => c.trim());
  };
  const norm = (h: string) =>
    h
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z]/g, "");
  const cab = partir(linhas[0]).map(norm);
  return linhas.slice(1).map((l) => {
    const cols = partir(l);
    const row: Record<string, string> = {};
    cab.forEach((h, i) => (row[h] = cols[i] ?? ""));
    return row;
  });
}
