/**
 * Webinar — ponto único de configuração e conteúdo.
 *
 * A oferta é o webinar ao vivo para psicólogos de consultório particular
 * (sáb 24/10, 10h). A página /webinar mostra o conteúdo e coleta a inscrição;
 * o /hub tem o card no deck e a faixa fixa no topo apontando para cá.
 *
 * O cadastro vai para /api/webinar, que escreve no Twenty (Core API) marcando
 * a Pessoa com `origem: WEBINAR` — assim a lista do webinar não se confunde
 * com quem baixou o e-book (origem E_BOOK). Ver app/api/webinar/route.ts.
 *
 * Copy segue o tom aprovado no brief: assertivo, direto, frases curtas. As
 * restrições do material valem aqui também — sem valores na tela, sem promessa
 * de resultado, sem depoimento de paciente, sem diagnóstico como gancho.
 */

/* -------------------------------------------------------------------------- */
/* Dados fixos do evento                                                      */
/* -------------------------------------------------------------------------- */

export const webinar = {
  /** Rótulo curto para o card do deck e a faixa. */
  short: "Webinar ao vivo",
  /** Data por extenso, para hero e e-mails. */
  dataLabel: "Sábado, 24 de outubro · 10h",
  /** Versão compacta, para a faixa fixa. */
  dataCurta: "sáb 24/10 · 10h",
  /** Duração e formato. */
  duracao: "90 minutos — 75 de conteúdo + 15 de perguntas",
  /** Para quem é. */
  publico: "Psicólogos clínicos autônomos, de consultório particular individual.",
  /** A promessa da aula, em uma frase (frase-âncora do brief). */
  promessa:
    "Você sai com um sistema de conteúdo montado: o que falar, para quem, em que ordem.",
  /** Estado final desejado — o contrato da aula. */
  contrato:
    "Ninguém sai sem três editorias escolhidas e as duas primeiras semanas de publicação agendadas.",
  /** Referências regulatórias citadas na abertura. */
  referencias:
    "Resolução CFP nº 010/2005, Art. 20 · Nota Técnica CFP nº 1/2022",
  /** CTA de fechamento do evento (não é o CTA da página). */
  ctaFinal: "Conversa de diagnóstico de 20 minutos.",
} as const;

/* -------------------------------------------------------------------------- */
/* Programa — os blocos da aula                                               */
/* -------------------------------------------------------------------------- */

export type ParteWebinar = {
  num: string;
  titulo: string;
  duracao: string;
  copy: string;
};

/** As três partes centrais (a abertura e o Q&A entram como nota à parte). */
export const partes: ParteWebinar[] = [
  {
    num: "Parte 1",
    titulo: "Mentalidade",
    duracao: "25 min",
    copy: "O perfil é a sala de espera. Por que não existe atração de paciente sem conteúdo, onde o ego trava a produção e como o monopólio pessoal — recorte clínico, repertório e público — é o que ninguém copia.",
  },
  {
    num: "Parte 2",
    titulo: "Funil de conversão",
    duracao: "35 min",
    copy: "Os cinco níveis de consciência aplicados ao consultório, a jornada até a primeira mensagem e três fórmulas de conteúdo — cada uma montada ao vivo. Você roda a primeira e sai com três editorias nomeadas.",
  },
  {
    num: "Parte 3",
    titulo: "Daqui para frente",
    duracao: "10 min",
    copy: "O plano de 30 dias no modelo 3-2-1: três editorias, dois vídeos por semana em cada, uma carta branca. O que medir nos primeiros trinta dias e quando trocar uma editoria que não anda.",
  },
];

/** Nota das bordas do programa — abertura e perguntas. */
export const bordas = {
  abertura:
    "Abertura (5 min): a promessa em uma frase e o desarme do Art. 20, lido na íntegra, alínea por alínea.",
  perguntas:
    "Perguntas (15 min): sigilo ao falar de casos, tempo até o primeiro contato, o que fazer com poucos seguidores.",
} as const;

/** O que a participante leva — o estado final, em itens curtos. */
export const entregas: string[] = [
  "Três editorias escolhidas para o seu consultório.",
  "As duas primeiras semanas de publicação agendadas.",
  "Um plano de 30 dias no modelo 3-2-1, pronto para rodar.",
];

/* -------------------------------------------------------------------------- */
/* Formulário de inscrição                                                    */
/* -------------------------------------------------------------------------- */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const MAX_FIELD = 120;

export type WebinarInput = {
  nome: string;
  email: string;
  whatsapp: string;
  /** @ do Instagram — obrigatório: é o canal onde o conteúdo do webinar roda. */
  instagram: string;
  /** CRP é opcional aqui: o webinar é topo de funil, sem a fricção da imersão. */
  crp?: string;
  /**
   * Aceite explícito. Sem ele não há base legal para o contato (LGPD art. 7º,
   * I); a rota recusa `false`, então não é campo decorativo.
   */
  consentimento: boolean;
};

export type WebinarResult = { ok: boolean };

/** Rótulo do campo inválido, para a mensagem de erro do form. */
export const fieldLabels: Record<keyof WebinarInput, string> = {
  nome: "Nome",
  email: "E-mail",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  crp: "CRP",
  consentimento: "aceite da Política de Privacidade",
};

/**
 * Normaliza o @ do Instagram: tira espaços, o "@" da frente e uma URL colada.
 * Guarda só o handle, que é o que serve no CRM.
 */
export function normalizeInstagram(raw: string): string {
  return raw
    .trim()
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, "")
    .replace(/\/.*$/, "")
    .replace(/^@+/, "")
    .replace(/\s+/g, "")
    .slice(0, MAX_FIELD);
}

/**
 * Validação usada nos dois lados: o cliente para não deixar enviar vazio, a
 * rota para não confiar no cliente. Devolve o campo que falta, ou null.
 */
export function validateWebinar(input: Partial<WebinarInput>): keyof WebinarInput | null {
  if (!input.nome?.trim()) return "nome";
  if (!EMAIL_RE.test((input.email ?? "").trim())) return "email";
  // Só dígitos: aceita "(11) 99999-9999" e "+55 11 99999 9999" do mesmo jeito.
  if ((input.whatsapp ?? "").replace(/\D/g, "").length < 10) return "whatsapp";
  if (!normalizeInstagram(input.instagram ?? "")) return "instagram";
  if (input.consentimento !== true) return "consentimento";
  return null;
}

/** Atribuição de campanha capturada na URL (reusa o formato da newsletter). */
export type WebinarPayload = WebinarInput & { utm?: Partial<Record<string, string>> };

/**
 * Envia a inscrição para /api/webinar (rota de servidor: a chave do Twenty e o
 * SMTP não podem existir no bundle do cliente).
 */
export async function requestWebinar(input: WebinarPayload): Promise<WebinarResult> {
  const res = await fetch("/api/webinar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) throw new Error(`Webinar respondeu ${res.status}`);
  return (await res.json()) as WebinarResult;
}
