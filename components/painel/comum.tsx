"use client";

import { REGRAS_COPY, type Campanha, type Lead } from "@/lib/prospeccao/config";

/** Tipos do que /painel/api/estado devolve (espelho do servidor, sem segredo). */
export type Cfg = {
  modo: "revisao" | "automatico";
  inicio: string;
  pausado: boolean;
  pausaPeloPainel?: boolean;
  linkAgenda: string;
  limiteHoje: number;
  limiteAmanha: number;
  enviadosHoje: number;
};

export type Saude = {
  enviados: number;
  bounces: number;
  descadastros: number;
  respostas: number;
  taxaBounce: number;
  taxaDescadastro: number;
  degradada: boolean;
};

export type CaixaEstado = {
  email: string;
  nome: string;
  dominio: string;
  inicio: string;
  teto: number;
  smtpHost: string;
  imapHost: string;
  limiteHoje: number;
  limiteAmanha: number;
  enviadosHoje: number;
  pausada: string | null;
  saude: Saude;
};

export type Execucao = { id: string; titulo: string; markdown: string; criadoEm: string };

export type Estado = {
  ok: boolean;
  error?: string;
  cfg: Cfg;
  pronto: { twenty: boolean; smtp: boolean; ia: boolean; token: boolean; secret: boolean; cron: boolean };
  caixas?: CaixaEstado[];
  campanhas?: Campanha[];
  bloqueios?: string[];
  fila?: Array<{ id: string; tipo: "primeiro" | "followup"; caixa: string }>;
  leads?: Lead[];
  execucoes?: Execucao[];
};

export type Contexto = {
  estado: Estado | null;
  leads: Lead[];
  recarregar: () => Promise<void>;
  avisar: (s: string) => void;
};

export async function api<T = Record<string, unknown>>(
  url: string,
  init?: RequestInit
): Promise<T & { ok: boolean; error?: string; detalhe?: string }> {
  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    cache: "no-store"
  });
  try {
    return await res.json();
  } catch {
    return { ok: false, error: `http_${res.status}` } as T & { ok: boolean; error?: string };
  }
}

const ERROS: Record<string, string> = {
  assunto_vazio: "Assunto é obrigatório.",
  assunto_longo: `Assunto longo: até ${REGRAS_COPY.maxPalavrasAssunto} palavras / ${REGRAS_COPY.maxCharsAssunto} caracteres.`,
  assunto_com_exclamacao: "Assunto sem exclamação — e-mail interno não grita.",
  assunto_com_emoji: "Assunto sem emoji.",
  assunto_finge_resposta: "Não comece o assunto com Re:/Fwd: — engana o destinatário.",
  assunto_caixa_alta: "Assunto sem palavra em caixa alta.",
  link_no_assunto: "Assunto sem link.",
  mensagem_mais_de_100_palavras: "O 1º e-mail passou de 100 palavras.",
  mensagem_sem_pergunta: "O 1º e-mail precisa terminar numa pergunta (uma só).",
  mensagem_com_mais_de_uma_pergunta: "Uma pergunta só no 1º e-mail.",
  mensagem_pede_reuniao: "Sem pedido de reunião no 1º e-mail — troque por uma pergunta sobre o trabalho dela.",
  followups_com_buraco: "Follow-up vazio no meio da sequência — o seguinte nunca sairia.",
  termo_proibido: "Texto com expressão proibida (promessa de resultado, caso clínico…).",
  ja_enviado: "Este e-mail já saiu; o texto enviado não muda.",
  texto_vazio: "Escreva o texto antes.",
  falta_instrucao: "Diga o que mudar.",
  falta_nome: "Dê um nome à campanha.",
  falta_icp: "Descreva para quem é a campanha.",
  slug_em_uso: "Já existe campanha com esse slug.",
  falta_origem: "Diga de onde veio a lista (vai para o rodapé do e-mail).",
  csv_vazio: "Cole a planilha com cabeçalho e ao menos uma linha.",
  csv_sem_email: "A planilha precisa de uma coluna “email”.",
  csv_grande: "Até 300 linhas por vez.",
  campanha_desconhecida: "Escolha uma campanha.",
  caixa_indisponivel: "A caixa desta conversa não está mais configurada.",
  sem_resposta: "Este lead não tem resposta para tratar.",
  ia_desligada: "IA desligada: defina ANTHROPIC_API_KEY na Vercel. Sem ela, a rotina noturna faz isso.",
  ia_recusou: "A IA recusou este pedido. Escreva à mão.",
  ia_fora_das_regras: "A IA não acertou as regras de copy em duas tentativas. Ajuste à mão.",
  ia_chave_invalida: "ANTHROPIC_API_KEY inválida.",
  ia_limite: "Limite da API atingido — tente em instantes.",
  twenty_failed: "O CRM não respondeu. Tente de novo.",
  twenty_unconfigured: "TWENTY_API_KEY não está no ambiente.",
  envio_falhou: "O envio falhou.",
  unauthorized: "Sessão expirada — recarregue a página."
};

export function erro(code?: string): string {
  if (!code) return "Erro desconhecido.";
  if (ERROS[code]) return ERROS[code];
  const m = /^(followup(\d)_longo|followup(\d)_com_mais_de_uma_pergunta)$/.exec(code);
  if (m) return m[2] ? `Follow-up ${m[2]} passou de ${REGRAS_COPY.maxPalavrasFollowup} palavras.` : `Follow-up ${m[3]} com mais de uma pergunta.`;
  if (code.endsWith("_b") && ERROS[code.slice(0, -2)]) return `Assunto B: ${ERROS[code.slice(0, -2)]}`;
  return code;
}

export const dataCurta = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    : "—";

export const pct = (x: number) => `${Math.round(x * 100)}%`;

/** Texto que de fato saiu em cada etapa (1º e-mail + follow-ups enviados). */
export function enviadosDoLead(l: Lead): Array<{ etapa: number; texto: string }> {
  const out: Array<{ etapa: number; texto: string }> = [];
  if (l.etapa >= 1) out.push({ etapa: 1, texto: l.mensagem });
  for (let i = 0; i < l.etapa - 1 && i < 3; i++) if (l.followups[i]) out.push({ etapa: i + 2, texto: l.followups[i] });
  return out;
}

export function Metric({ rotulo, valor, sub, destaque }: { rotulo: string; valor: string; sub: string; destaque?: boolean }) {
  return (
    <div className={`painel-metric${destaque ? " painel-metric--red" : ""}`}>
      <span className="painel-metric__label">{rotulo}</span>
      <strong className="painel-metric__value">{valor}</strong>
      <span className="painel-metric__sub">{sub}</span>
    </div>
  );
}
