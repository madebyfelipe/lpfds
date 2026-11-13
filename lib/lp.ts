import { WHATSAPP_NUMERO } from "@/lib/legal";

/**
 * LPs de captação (/lp/marca e /lp/site) — fonte única do quiz, da validação
 * compartilhada por cliente e servidor e do helper que chama a rota.
 *
 * O quiz pedido pelo Felipe: telas de botão, a primeira com 4 opções, "OK"
 * para seguir, e só no fim Nome + WhatsApp. Cada resposta vai no e-mail do
 * lead, para a conversa já começar sabendo o contexto.
 */
export type LpOrigem = "marca" | "site";

export type LpStep = {
  id: string;
  question: string;
  /** Linha de apoio sob a pergunta (opcional). */
  hint?: string;
  options: string[];
};

export const lpQuiz: Record<LpOrigem, LpStep[]> = {
  marca: [
    {
      id: "momento",
      question: "Em que momento está o seu consultório?",
      options: [
        "Comecei a atender há pouco tempo",
        "Atendo há anos, mas a agenda oscila",
        "Agenda cheia, quero cobrar mais",
        "Vou abrir clínica ou ampliar a equipe"
      ]
    },
    {
      id: "incomodo",
      question: "O que mais incomoda hoje na sua marca?",
      options: [
        "Pareço igual às colegas da minha cidade",
        "Chegam pacientes fora do meu foco",
        "Não consigo explicar o que me diferencia",
        "Tenho vergonha do meu Instagram e do material"
      ]
    },
    {
      id: "quando",
      question: "Quando você quer começar?",
      options: ["Ainda este mês", "Nos próximos três meses", "Estou só pesquisando"]
    }
  ],
  site: [
    {
      id: "plano",
      question: "Que site você precisa?",
      hint: "Na dúvida, escolha a última opção: a gente decide junto.",
      options: [
        "One page — a partir de R$ 440",
        "Institucional — a partir de R$ 1.550",
        "Já tenho site e quero refazer",
        "Ainda não sei, quero uma recomendação"
      ]
    },
    {
      id: "identidade",
      question: "Você já tem identidade visual?",
      options: ["Sim, logo, cores e tudo mais", "Tenho só um logo", "Ainda não tenho nada"]
    },
    {
      id: "quando",
      question: "Para quando você quer o site no ar?",
      options: ["O quanto antes", "Nas próximas semanas", "Estou só pesquisando"]
    }
  ]
};

export const lpTitulo: Record<LpOrigem, string> = {
  marca: "Construção de marca",
  site: "Construção de site"
};

/** Limite por campo: nome e telefone não justificam texto longo. */
export const LP_MAX_FIELD = 120;

export type LpLeadInput = {
  origem: LpOrigem;
  /** id da pergunta → opção escolhida. */
  respostas: Record<string, string>;
  nome: string;
  whatsapp: string;
  /** Aceite da Política de Privacidade — a rota recusa sem ele. */
  consentimento: boolean;
};

export type LpLeadField = "respostas" | "nome" | "whatsapp" | "consentimento";

/**
 * Validação dos dois lados. Só aceita respostas que existem no quiz daquela
 * origem: o servidor não repassa texto livre vindo do cliente.
 */
export function validateLpLead(input: Partial<LpLeadInput>): LpLeadField | null {
  const steps = input.origem ? lpQuiz[input.origem] : undefined;
  if (!steps) return "respostas";
  for (const step of steps) {
    const answer = input.respostas?.[step.id];
    if (!answer || !step.options.includes(answer)) return "respostas";
  }
  if (!input.nome?.trim()) return "nome";
  if ((input.whatsapp ?? "").replace(/\D/g, "").length < 10) return "whatsapp";
  if (input.consentimento !== true) return "consentimento";
  return null;
}

/**
 * Link de WhatsApp para o Felipe, com a mensagem já escrita a partir das
 * respostas que existirem — serve para quem prefere não esperar o retorno.
 */
export function lpWhatsappUrl(origem: LpOrigem, respostas: Record<string, string>, nome = "") {
  const linhas = lpQuiz[origem]
    .filter((step) => respostas[step.id])
    .map((step) => `• ${step.question} ${respostas[step.id]}`);
  const abertura =
    origem === "marca"
      ? "Oi, Felipe! Vim pela página da imersão de marca"
      : "Oi, Felipe! Vim pela página de sites";
  const texto = [
    `${abertura}${nome.trim() ? ` — aqui é ${nome.trim()}` : ""}.`,
    ...(linhas.length ? ["", ...linhas] : [])
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

/** `site` é o honeypot do form: vazio para pessoas. */
export async function requestLpLead(input: LpLeadInput & { site?: string }): Promise<{ ok: boolean }> {
  const res = await fetch("/api/lp-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });
  if (!res.ok) throw new Error(`lp-lead respondeu ${res.status}`);
  return (await res.json()) as { ok: boolean };
}
