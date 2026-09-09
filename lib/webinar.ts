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
  /** Rótulo curto para o card do deck e a faixa do /hub. */
  short: "Workshop de criação de conteúdo",
  /** Data por extenso, para hero e e-mails. */
  dataLabel: "Sábado, 24 de outubro · 10h",
  /** Versão compacta, para a faixa fixa. */
  dataCurta: "sáb 24/10 · 10h",
  /** Duração e formato. */
  duracao: "90 minutos — 75 de conteúdo + 15 de perguntas",
  /** Para quem é. */
  publico: "Psicólogos clínicos autônomos, de consultório particular individual.",
  /**
   * Descrição da aula para o hero. Descreve o que é ensinado — não promete
   * resultado nem entrega individualizada (o material de apoio é padrão: e-book,
   * gravação e certificado).
   */
  promessa:
    "Uma aula ao vivo, para psicólogos de consultório particular, sobre como montar um sistema de conteúdo: editorias, funil de consciência e formatos.",
  /** Chamada da dobra de materiais — o que fica com quem se inscreve. */
  materiais: "O material de apoio fica com você, para aplicar no seu tempo.",
  /** Referências regulatórias citadas na abertura. */
  referencias:
    "Resolução CFP nº 010/2005, Art. 20 · Nota Técnica CFP nº 1/2022",
  /** CTA de fechamento do evento (não é o CTA da página). */
  ctaFinal: "Conversa de diagnóstico de 20 minutos.",
} as const;

/* -------------------------------------------------------------------------- */
/* Programa — os blocos da aula                                               */
/* -------------------------------------------------------------------------- */

export type SubtopicoWebinar = { n: string; label: string; duracao: string };

export type BlocoWebinar = {
  rotulo: string;
  duracao: string;
  /** Subtópicos numerados; vazio nos blocos que não têm (abertura, Q&A…). */
  itens: SubtopicoWebinar[];
};

/**
 * A aula em cinco blocos (90 min). Só os tópicos e subtópicos, sem descrição —
 * como no roteiro-fonte. Abertura, Parte 3 e Perguntas não têm subtópicos.
 */
export const blocos: BlocoWebinar[] = [
  { rotulo: "Abertura", duracao: "5 min", itens: [] },
  {
    rotulo: "Parte 1 — Mentalidade",
    duracao: "25 min",
    itens: [
      { n: "1.1", label: "Não existe atração de clientes sem conteúdo", duracao: "8 min" },
      {
        n: "1.2",
        label: "O ego preenche a distância entre o que você gostaria de ser e o que você é",
        duracao: "6 min",
      },
      { n: "1.3", label: "Monopólio pessoal", duracao: "6 min" },
      { n: "1.4", label: "Influência é como juros compostos", duracao: "5 min" },
    ],
  },
  {
    rotulo: "Parte 2 — Funil de conversão",
    duracao: "35 min",
    itens: [
      { n: "2.1", label: "Níveis de consciência", duracao: "10 min" },
      { n: "2.2", label: "Jornada do cliente", duracao: "8 min" },
      { n: "2.3", label: "Fórmulas de conteúdo", duracao: "10 min" },
      { n: "2.4", label: "Formatos de conteúdo", duracao: "7 min" },
    ],
  },
  { rotulo: "Parte 3 — Daqui para frente", duracao: "10 min", itens: [] },
  { rotulo: "Perguntas", duracao: "15 min", itens: [] },
];

/** O que a participante leva — os materiais de apoio, em itens curtos. */
export const entregas: string[] = [
  "E-book de consulta para a montagem do material.",
  "Certificado de presença.",
  "Gravação da aula.",
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
