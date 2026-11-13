/**
 * Métricas agregadas do cold mail — aba "E-mail" do /painel.
 *
 * Fonte: pessoas do Twenty (objeto `people`, depth=0). As definições são as do
 * relatório diário da campanha (/data/OpenBot/Shared/campanha-email/benchmark.js,
 * do Dylan), para o painel e o relatório darem o mesmo número:
 *
 * - enviado  = tem data de envio (prospEnviadoEm || ultimoContatoEm) e o canal é
 *              e-mail (prospCaixa é um endereço, ou iniciativa tem EMAIL sem WHATSAPP);
 * - bounce   = prospStatus BOUNCE;
 * - resposta = prospRespondeuEm preenchido ou status RESPONDEU/REUNIAO/PREVIA_ENVIADA/ACEITE/GANHO;
 * - positiva = status REUNIAO/PREVIA_ENVIADA/ACEITE/GANHO ou classificação com interesse;
 * - SAIR     = optOut.
 *
 * Só números saem daqui: nenhuma função devolve nome, e-mail ou id de lead, porque
 * a tela principal do painel não mostra contato (pedido do Felipe, 13/11/2026).
 * Arquivo puro (sem `server-only`) para os testes em tests/ importarem.
 */

export type PessoaCrm = Record<string, unknown>;

export type Contagem = {
  enviados: number;
  bounces: number;
  respostas: number;
  positivas: number;
  sair: number;
  cliques: number;
  taxaBounce: number;
  taxaResposta: number;
  taxaPositiva: number;
  taxaSair: number;
  taxaClique: number;
};

export type Linha = Contagem & { grupo: string };

export type MetricasEmail = {
  geradoEm: string;
  total: Contagem;
  porDia: Linha[];
  porSemana: Linha[];
  porVariante: { linhas: Linha[]; minimoPorBraco: number; vencedor: string | null; motivo: string };
  porCaixa: Linha[];
  porNicho: Linha[];
  porCampanha: Linha[];
  funil: Array<{ etapa: string; valor: number }>;
  fila: { elegiveis: number; followupsDevidos: number; diasParaFollowup: number };
  cliques: { disponivel: boolean; total: number; leadsComClique: number; taxa: number };
  alertas: string[];
};

/* -------------------------------------------------------------------------- */
/* Leitura segura dos campos                                                  */
/* -------------------------------------------------------------------------- */

const s = (v: unknown) => (typeof v === "string" ? v : "");
const n = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : 0);
const iniciativa = (p: PessoaCrm) => (Array.isArray(p.iniciativa) ? (p.iniciativa as unknown[]).map(String) : []);
const temEmail = (p: PessoaCrm) => {
  const e = p.emails as { primaryEmail?: unknown } | undefined;
  return Boolean(e && typeof e.primaryEmail === "string" && e.primaryEmail.includes("@"));
};

/** Data do envio (D0), como no benchmark: prospEnviadoEm, senão ultimoContatoEm. */
export const dataEnvio = (p: PessoaCrm) => s(p.prospEnviadoEm) || s(p.ultimoContatoEm);

export function canal(p: PessoaCrm): "E-mail" | "WhatsApp" | "Outro" {
  const caixa = s(p.prospCaixa);
  const ini = iniciativa(p);
  if (/@/.test(caixa) || (ini.includes("EMAIL") && !ini.includes("WHATSAPP") && !/whatsapp/i.test(caixa))) return "E-mail";
  if (/whatsapp/i.test(caixa) || ini.includes("WHATSAPP")) return "WhatsApp";
  return "Outro";
}

export const ehBounce = (p: PessoaCrm) => s(p.prospStatus) === "BOUNCE";
export const ehResposta = (p: PessoaCrm) =>
  Boolean(s(p.prospRespondeuEm)) || ["RESPONDEU", "REUNIAO", "PREVIA_ENVIADA", "ACEITE", "GANHO"].includes(s(p.prospStatus));
export const ehPositiva = (p: PessoaCrm) =>
  ["REUNIAO", "PREVIA_ENVIADA", "ACEITE", "GANHO"].includes(s(p.prospStatus)) || /interess|positiv|quer/i.test(s(p.prospClassificacao));
export const ehSair = (p: PessoaCrm) => Boolean(p.optOut);
export const cliquesDe = (p: PessoaCrm) => n(p.prospCliques);

/* -------------------------------------------------------------------------- */
/* Agregação                                                                  */
/* -------------------------------------------------------------------------- */

const taxa = (a: number, b: number) => (b ? a / b : 0);

export function contar(grupo: PessoaCrm[]): Contagem {
  const enviados = grupo.length;
  const bounces = grupo.filter(ehBounce).length;
  const respostas = grupo.filter(ehResposta).length;
  const positivas = grupo.filter(ehPositiva).length;
  const sair = grupo.filter(ehSair).length;
  const comClique = grupo.filter((p) => cliquesDe(p) > 0).length;
  return {
    enviados,
    bounces,
    respostas,
    positivas,
    sair,
    cliques: grupo.reduce((t, p) => t + cliquesDe(p), 0),
    taxaBounce: taxa(bounces, enviados),
    taxaResposta: taxa(respostas, enviados),
    taxaPositiva: taxa(positivas, enviados),
    taxaSair: taxa(sair, enviados),
    taxaClique: taxa(comClique, enviados)
  };
}

function agrupar(lista: PessoaCrm[], chave: (p: PessoaCrm) => string): Linha[] {
  const m = new Map<string, PessoaCrm[]>();
  for (const p of lista) {
    const k = chave(p) || "(vazio)";
    m.set(k, [...(m.get(k) ?? []), p]);
  }
  return [...m.entries()].map(([grupo, g]) => ({ grupo, ...contar(g) })).sort((a, b) => b.enviados - a.enviados);
}

/** Dia no fuso de Brasília (UTC−3, sem horário de verão desde 2019). */
export const diaBrt = (iso: string) => new Date(Date.parse(iso) - 3 * 3600_000).toISOString().slice(0, 10);

/** Segunda-feira (BRT) da semana do envio, "AAAA-MM-DD". */
export function semanaBrt(iso: string): string {
  const d = new Date(`${diaBrt(iso)}T00:00:00Z`);
  const dow = (d.getUTCDay() + 6) % 7; // 0 = segunda
  return new Date(d.getTime() - dow * 86400_000).toISOString().slice(0, 10);
}

export const MINIMO_POR_BRACO = 60;
/** Dias sem resposta depois do último envio para o follow-up ficar devido (estimativa do painel). */
export const DIAS_PARA_FOLLOWUP = 3;
const ETAPA_MAX_FOLLOWUP = 2; // D0 + FU1 + FU2, como no relatório do Dylan

const STATUS_EM_SEQUENCIA = ["ENVIADO", "FOLLOWUP_ENVIADO"];

export function calcular(pessoas: PessoaCrm[], agora = new Date()): MetricasEmail {
  const enviados = pessoas.filter((p) => dataEnvio(p) && canal(p) === "E-mail");
  const total = contar(enviados);

  const hoje = diaBrt(agora.toISOString());
  const dias: string[] = [];
  for (let i = 13; i >= 0; i--) dias.push(diaBrt(new Date(agora.getTime() - i * 86400_000).toISOString()));
  const porDiaMapa = new Map(agrupar(enviados, (p) => diaBrt(dataEnvio(p))).map((l) => [l.grupo, l]));
  const porDia = dias.map((d) => porDiaMapa.get(d) ?? { grupo: d, ...contar([]) });

  const porSemana = agrupar(enviados, (p) => semanaBrt(dataEnvio(p)))
    .sort((a, b) => b.grupo.localeCompare(a.grupo))
    .slice(0, 8);

  const linhasVariante = agrupar(
    enviados.filter((p) => s(p.prospVariante)),
    (p) => s(p.prospVariante)
  ).sort((a, b) => a.grupo.localeCompare(b.grupo));
  let vencedor: string | null = null;
  let motivo = "";
  if (linhasVariante.length < 2) motivo = "Menos de duas variantes com envio.";
  else if (linhasVariante.some((l) => l.enviados < MINIMO_POR_BRACO))
    motivo = `Sem vencedor: cada variante precisa de ${MINIMO_POR_BRACO}+ envios.`;
  else {
    const ordem = [...linhasVariante].sort((a, b) => b.taxaResposta - a.taxaResposta);
    if (ordem[0].taxaResposta === ordem[1].taxaResposta) motivo = "Empate na taxa de resposta.";
    else {
      vencedor = ordem[0].grupo;
      motivo = "Maior taxa de resposta com 60+ envios em cada variante.";
    }
  }

  const porCaixa = agrupar(enviados, (p) => s(p.prospCaixa).toLowerCase());
  const porNicho = agrupar(enviados, (p) => s(p.nicho).split(/\s+/).slice(0, 3).join(" ").toLowerCase());
  const porCampanha = agrupar(enviados, (p) => s(p.prospCampanha));

  const etapa = (p: PessoaCrm) => n(p.prospEtapa);
  const status = (p: PessoaCrm) => s(p.prospStatus);
  const funil = [
    { etapa: "Enviado (D0)", valor: enviados.length },
    { etapa: "Follow-up 1", valor: enviados.filter((p) => etapa(p) >= 1).length },
    { etapa: "Follow-up 2", valor: enviados.filter((p) => etapa(p) >= 2).length },
    { etapa: "Respondeu", valor: enviados.filter(ehResposta).length },
    { etapa: "Prévia", valor: enviados.filter((p) => ["PREVIA_ENVIADA", "ACEITE", "GANHO"].includes(status(p))).length },
    { etapa: "Aceite", valor: enviados.filter((p) => ["ACEITE", "GANHO"].includes(status(p))).length },
    { etapa: "Ganho", valor: enviados.filter((p) => status(p) === "GANHO").length }
  ];

  const elegiveis = pessoas.filter(
    (p) => ["LISTA_FRIA", "PRONTO"].includes(status(p)) && !p.optOut && temEmail(p)
  ).length;
  const limite = agora.getTime() - DIAS_PARA_FOLLOWUP * 86400_000;
  const followupsDevidos = enviados.filter((p) => {
    if (!STATUS_EM_SEQUENCIA.includes(status(p)) || ehResposta(p) || p.optOut) return false;
    if (etapa(p) >= ETAPA_MAX_FOLLOWUP) return false;
    const ultimo = Date.parse(s(p.prospFollowupEm) || dataEnvio(p));
    return Number.isFinite(ultimo) && ultimo <= limite;
  }).length;

  const disponivel = pessoas.some((p) => "prospCliques" in p);
  const leadsComClique = enviados.filter((p) => cliquesDe(p) > 0).length;

  const alertas: string[] = [];
  if (total.taxaBounce > 0.05) alertas.push("Parar: bounce acima de 5%.");
  else if (total.taxaBounce > 0.02) alertas.push("Atenção: bounce acima de 2%.");
  if (total.taxaSair > 0.03) alertas.push("Atenção: pedidos de SAIR acima de 3%.");
  const hojeLinha = porDiaMapa.get(hoje);
  if (hojeLinha && hojeLinha.enviados > 15) alertas.push(`Volume de hoje acima de 15: ${hojeLinha.enviados}.`);

  return {
    geradoEm: agora.toISOString(),
    total,
    porDia,
    porSemana,
    porVariante: { linhas: linhasVariante, minimoPorBraco: MINIMO_POR_BRACO, vencedor, motivo },
    porCaixa,
    porNicho,
    porCampanha,
    funil,
    fila: { elegiveis, followupsDevidos, diasParaFollowup: DIAS_PARA_FOLLOWUP },
    cliques: { disponivel, total: total.cliques, leadsComClique, taxa: taxa(leadsComClique, enviados.length) },
    alertas
  };
}
