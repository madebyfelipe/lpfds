import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import {
  CLASSIFICACOES,
  REGRAS_COPY,
  checarCopy,
  termoProibido,
  type Campanha,
  type Classificacao,
  type Lead
} from "./config";

/**
 * IA no painel (opcional): reescrever um e-mail com uma instrução, classificar
 * uma resposta e rascunhar a resposta. Liga com ANTHROPIC_API_KEY no ambiente;
 * sem a chave, os mesmos pedidos ficam para a rotina noturna (que é o Claude
 * do Claude Code, sem custo de API à parte).
 *
 * Nada aqui envia e-mail: a IA só escreve rascunhos que passam pelas mesmas
 * regras de copy do servidor e pelo Felipe.
 */
const MODELO = "claude-opus-5-5";
const BETAS = ["server-side-fallback-2026-07-01"];

export const iaConfigurada = () => Boolean(process.env.ANTHROPIC_API_KEY);

let client: Anthropic | null = null;
const cliente = () => (client ??= new Anthropic({ timeout: 60_000, maxRetries: 2 }));

/** Instruções fixas (vêm primeiro e não mudam entre pedidos — cacheáveis). */
const SISTEMA = `Você escreve pelo Felipe, da Made by Felipe: estúdio de branding (posicionamento, identidade visual e verbal, página profissional) para psicólogas. O texto é em português do Brasil, primeira pessoa, tom de colega para colega — direto, curto, sem jargão de marketing e sem elogio vazio.

Regras do e-mail frio (o servidor recusa o que fugir):
- 1º e-mail com até ${REGRAS_COPY.maxPalavrasMensagem} palavras e exatamente UMA pergunta (um único "?"), sobre como ela faz algo hoje. Nunca pedir reunião, call, "X minutos", agendar.
- A primeira frase diz por que ela: uma linha específica tirada da evidência (site/LinkedIn dela).
- Assunto como e-mail interno: até ${REGRAS_COPY.maxPalavrasAssunto} palavras, minúsculas, sem "!", sem emoji, sem "Re:".
- Até 3 follow-ups de até ${REGRAS_COPY.maxPalavrasFollowup} palavras, cada um com um ângulo novo e no máximo uma pergunta; o 3º é uma despedida curta. Nunca "só passando para lembrar".
- Não escreva assinatura nem rodapé (o sistema adiciona).
- Proibido (CFP, art. 20, e honestidade): prometer agenda cheia, pacientes ou faturamento; citar caso clínico, paciente ou resultado de terapia; sugerir depoimento de paciente.
- Nunca invente fato sobre a pessoa: use só a evidência fornecida.`;

type Resultado<T> = { ok: true; dados: T } | { ok: false; erro: string };

async function pedirJson<T>(opts: {
  esforco: "low" | "medium";
  schema: Record<string, unknown>;
  pedido: string;
  maxTokens?: number;
}): Promise<Resultado<T>> {
  try {
    const res = await cliente().beta.messages.create({
      model: MODELO,
      max_tokens: opts.maxTokens ?? 16000,
      betas: BETAS,
      // Recusa por política vira nova tentativa no modelo de reserva padrão.
      fallbacks: "default",
      system: [{ type: "text", text: SISTEMA, cache_control: { type: "ephemeral" } }],
      output_config: { effort: opts.esforco, format: { type: "json_schema", schema: opts.schema } },
      messages: [{ role: "user", content: opts.pedido }]
    });
    if (res.stop_reason === "refusal") return { ok: false, erro: "ia_recusou" };
    if (res.stop_reason === "max_tokens") return { ok: false, erro: "ia_cortou" };
    const texto = res.content.find((b) => b.type === "text");
    if (!texto || texto.type !== "text") return { ok: false, erro: "ia_sem_texto" };
    return { ok: true, dados: JSON.parse(texto.text) as T };
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) return { ok: false, erro: "ia_chave_invalida" };
    if (error instanceof Anthropic.RateLimitError) return { ok: false, erro: "ia_limite" };
    if (error instanceof Anthropic.APIError) return { ok: false, erro: `ia_api_${error.status ?? "erro"}` };
    if (error instanceof SyntaxError) return { ok: false, erro: "ia_json_invalido" };
    console.error("[prospeccao/ia]", error);
    return { ok: false, erro: "ia_falhou" };
  }
}

const contexto = (lead: Lead, campanha?: Campanha) =>
  [
    `Lead: ${lead.empresa || lead.nome} <${lead.email}> · ${lead.cidade || "cidade não informada"}`,
    `Evidência (o que foi visto na fonte ${lead.fonte || "—"}): ${lead.evidencia || "—"}`,
    `Hipótese de ajuda: ${lead.hipotese || "—"}`,
    `Não confirmado: ${lead.limite || "—"}`,
    campanha ? `Campanha: ${campanha.nome}. Para quem: ${campanha.icp}. Oferta: ${campanha.oferta}. Tom: ${campanha.tom}` : ""
  ]
    .filter(Boolean)
    .join("\n");

export type TextoEmail = { assunto: string; assuntoB: string; mensagem: string; followups: string[] };

const SCHEMA_EMAIL = {
  type: "object",
  properties: {
    assunto: { type: "string" },
    assuntoB: { type: "string", description: "Assunto alternativo para teste A/B, ou vazio." },
    mensagem: { type: "string" },
    followups: { type: "array", items: { type: "string" } }
  },
  required: ["assunto", "assuntoB", "mensagem", "followups"],
  additionalProperties: false
};

/**
 * Reescreve a sequência com a instrução do Felipe. Se o texto voltar fora das
 * regras, devolve o motivo para a IA e tenta uma vez mais.
 */
export async function reescreverEmail(lead: Lead, instrucao: string, campanha?: Campanha): Promise<Resultado<TextoEmail>> {
  const base = [
    contexto(lead, campanha),
    "",
    "Versão atual:",
    `Assunto: ${lead.assunto}`,
    lead.assuntoB ? `Assunto B: ${lead.assuntoB}` : "",
    `1º e-mail:\n${lead.mensagem}`,
    ...lead.followups.map((f, i) => (f ? `Follow-up ${i + 1}:\n${f}` : "")),
    "",
    `Pedido do Felipe: ${instrucao.trim() || "melhore mantendo as regras."}`,
    "Devolva a sequência completa (assunto, assuntoB opcional, 1º e-mail e até 3 follow-ups)."
  ]
    .filter((l) => l !== "")
    .join("\n");

  let pedido = base;
  for (let tentativa = 0; tentativa < 2; tentativa++) {
    const r = await pedirJson<TextoEmail>({ esforco: "medium", schema: SCHEMA_EMAIL, pedido });
    if (!r.ok) return r;
    const t: TextoEmail = {
      assunto: r.dados.assunto.trim(),
      assuntoB: r.dados.assuntoB.trim(),
      mensagem: r.dados.mensagem.trim(),
      followups: [0, 1, 2].map((i) => (r.dados.followups[i] ?? "").trim())
    };
    const motivo =
      checarCopy(t) ?? (termoProibido(`${t.assunto}\n${t.mensagem}\n${t.followups.join("\n")}`) ? "termo_proibido" : null);
    if (!motivo) return { ok: true, dados: t };
    pedido = `${base}\n\nSua versão anterior foi recusada pela regra "${motivo}". Corrija só isso e devolva de novo.`;
  }
  return { ok: false, erro: "ia_fora_das_regras" };
}

export type LeituraResposta = { classificacao: Classificacao; resumo: string; sugestao: string };

const SCHEMA_RESPOSTA = {
  type: "object",
  properties: {
    classificacao: { type: "string", enum: [...CLASSIFICACOES] },
    resumo: { type: "string", description: "Uma frase: o que ela disse." },
    sugestao: { type: "string", description: "Rascunho de resposta do Felipe, ou vazio se não cabe responder." }
  },
  required: ["classificacao", "resumo", "sugestao"],
  additionalProperties: false
};

/**
 * Lê a resposta e rascunha a réplica. A réplica segue o que ela disse:
 * interessada → propõe o próximo passo com o link de agenda (se houver);
 * pergunta → responde a pergunta em poucas linhas; não agora → agradece e
 * pergunta se pode voltar em alguns meses; sem interesse → vazio (não se
 * insiste). Nada sai sem o Felipe enviar pelo painel.
 */
export async function lerResposta(
  lead: Lead,
  enviado: string,
  linkAgenda: string,
  campanha?: Campanha
): Promise<Resultado<LeituraResposta>> {
  const pedido = [
    contexto(lead, campanha),
    "",
    `O que o Felipe mandou por último:\n${enviado}`,
    "",
    `A resposta dela:\n${lead.resposta}`,
    "",
    "Classifique a resposta e escreva o rascunho da réplica do Felipe (até 90 palavras, sem assinatura).",
    linkAgenda
      ? `Se ela demonstrou interesse, proponha uma conversa e inclua este link de agenda: ${linkAgenda}`
      : "Se ela demonstrou interesse, proponha dois horários genéricos para uma conversa curta.",
    "Se ela pediu para não receber mais ou não tem interesse, deixe a sugestão vazia."
  ].join("\n");
  const r = await pedirJson<LeituraResposta>({ esforco: "low", schema: SCHEMA_RESPOSTA, pedido });
  if (!r.ok) return r;
  const classificacao = (CLASSIFICACOES as readonly string[]).includes(r.dados.classificacao)
    ? r.dados.classificacao
    : "OUTRO";
  const sugestao = termoProibido(r.dados.sugestao) ? "" : r.dados.sugestao.trim();
  return { ok: true, dados: { classificacao, resumo: r.dados.resumo.trim(), sugestao } };
}
