/** Contrato compartilhado pelo painel, API e rotina Codex. Sem I/O ou segredos. */
export const STATUS = {
  REVISAR: "Revisar",
  PRONTO: "Pronto para ligar",
  RETORNO: "Retorno",
  REUNIAO: "Reunião marcada",
  SEM_INTERESSE: "Sem interesse",
  NUMERO_INVALIDO: "Número inválido",
  NAO_CONTATAR: "Não contatar",
  DESCARTADO: "Fora do perfil",
} as const;
export type Status = keyof typeof STATUS;
export const RESULTADOS = {
  NAO_ATENDEU: "Não atendeu",
  CAIXA_POSTAL: "Caixa postal",
  RECEPCAO: "Falou com a recepção",
  CONVERSOU: "Conversou com o decisor",
  RETORNO: "Pediu retorno",
  REUNIAO: "Reunião agendada",
  SEM_INTERESSE: "Sem interesse",
  NUMERO_INVALIDO: "Número inválido",
  NAO_CONTATAR: "Não contatar novamente",
} as const;
export type Resultado = keyof typeof RESULTADOS;
export type Fonte = { url: string; fato: string };
export type Pesquisa = {
  resumo: string;
  gancho: string;
  oportunidade: string;
  limite: string;
  fontes: Fonte[];
};
export type NovoLead = {
  empresa: string;
  contato: string;
  telefone: string;
  fonteTelefone: string;
  cidade: string;
  segmento: string;
  site: string;
  responsavel: string;
  pesquisa: Pesquisa;
};
export type Ligacao = {
  id: string;
  leadId: string;
  resultado: Resultado;
  notas: string;
  duracao: number;
  proximaAcao: string;
  retornoEm: string | null;
  responsavel: string;
  criadoEm: string;
};
export type Lead = NovoLead & {
  id: string;
  criadoEm: string;
  status: Status;
  retornoEm: string | null;
  proximaAcao: string;
  historico: Ligacao[];
  score: number;
  prioridade: "A" | "B" | "C";
  ultimaLigacao: string | null;
};
export type Config = {
  icp: string;
  regioes: string;
  oferta: string;
  metaDiaria: number;
  tamanhoFila: number;
  pausada: boolean;
};
export const CONFIG_PADRAO: Config = {
  icp: "Psicólogas e pequenas clínicas próprias que atendem crianças autistas (TEA) e suas famílias. Priorizar orientação parental, acompanhamento infantil e comunicação com os pais; excluir redes, hospitais e órgãos públicos.",
  regioes: "Sorocaba, Itu, Campinas, Jundiaí, Piracicaba e São Paulo",
  oferta:
    "Branding, posicionamento e comunicação para tornar clara a proposta de valor da clínica.",
  metaDiaria: 20,
  tamanhoFila: 30,
  pausada: false,
};
export type Execucao = {
  id: string;
  criadoEm: string;
  resumo: string;
  pesquisados: number;
  importados: number;
  descartados: number;
  requestIds: string[];
};
export type Pedido = { id: string; criadoEm: string; observacao: string };
export type Estado = {
  leads: Lead[];
  config: Config;
  execucoes: Execucao[];
  pedidos: Pedido[];
  conectado: boolean;
  tokenConfigurado: boolean;
};
export class Validacao extends Error {}
export function objeto(v: unknown): Record<string, unknown> {
  if (!v || typeof v !== "object" || Array.isArray(v))
    throw new Validacao("Dados inválidos.");
  return v as Record<string, unknown>;
}
function texto(v: unknown, max: number, obrigatorio = false) {
  const s = typeof v === "string" ? v.trim() : "";
  if (s.length > max || (obrigatorio && !s))
    throw new Validacao(
      `Preencha os campos obrigatórios e respeite o limite de ${max} caracteres.`,
    );
  return s;
}
export function urlPublica(v: unknown, obrigatorio = false) {
  const s = texto(v, 1000, obrigatorio);
  if (!s) return "";
  try {
    const u = new URL(s);
    if (
      !["https:", "http:"].includes(u.protocol) ||
      u.username ||
      u.password ||
      !u.hostname.includes(".") ||
      /^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.)/i.test(u.hostname)
    )
      throw 0;
    return u.href;
  } catch {
    throw new Validacao("Informe uma URL pública válida (https://…).");
  }
}
export function telefoneBr(v: unknown): string {
  const s = texto(v, 40, true).replace(/\D/g, "");
  const n = s.length === 10 || s.length === 11 ? `55${s}` : s;
  if (!/^55[1-9]\d\d{8,9}$/.test(n))
    throw new Validacao(
      "Use um telefone brasileiro com DDD (10 ou 11 dígitos, com ou sem +55).",
    );
  return n;
}
export function validarLead(raw: unknown, rotina = false): NovoLead {
  const v = objeto(raw);
  const p = v.pesquisa ? objeto(v.pesquisa) : {};
  const fontes = Array.isArray(p.fontes) ? p.fontes : [];
  if (fontes.length > 8) throw new Validacao("Use até 8 fontes por empresa.");
  const pesquisa: Pesquisa = {
    resumo: texto(p.resumo, 1800, rotina),
    gancho: texto(p.gancho, 600, rotina),
    oportunidade: texto(p.oportunidade, 1200, rotina),
    limite: texto(p.limite, 800, rotina),
    fontes: fontes.map((f) => {
      const x = objeto(f);
      return { url: urlPublica(x.url, true), fato: texto(x.fato, 800, true) };
    }),
  };
  if (rotina && !pesquisa.fontes.length)
    throw new Validacao(
      "A pesquisa precisa de ao menos uma fonte verificável.",
    );
  return {
    empresa: texto(v.empresa, 160, true),
    contato: texto(v.contato, 120),
    telefone: telefoneBr(v.telefone),
    fonteTelefone: urlPublica(v.fonteTelefone, true),
    cidade: texto(v.cidade, 100, true),
    segmento: texto(v.segmento, 120, true),
    site: urlPublica(v.site),
    responsavel: texto(v.responsavel, 80) || "Leonardo",
    pesquisa,
  };
}
export function validarConfig(raw: unknown): Config {
  const v = objeto(raw);
  if (typeof v.pausada !== "boolean")
    throw new Validacao("Informe o estado da rotina.");
  return {
    icp: texto(v.icp, 2000, true),
    regioes: texto(v.regioes, 600, true),
    oferta: texto(v.oferta, 1200, true),
    metaDiaria: inteiro(v.metaDiaria, 1, 100),
    tamanhoFila: inteiro(v.tamanhoFila, 1, 100),
    pausada: v.pausada,
  };
}
export function inteiro(v: unknown, min: number, max: number) {
  if (typeof v !== "number" || !Number.isInteger(v) || v < min || v > max)
    throw new Validacao(`Informe um número inteiro entre ${min} e ${max}.`);
  return v;
}
export function idValido(v: unknown): string {
  const s = texto(v, 80, true);
  if (!/^[a-zA-Z0-9_-]{8,80}$/.test(s))
    throw new Validacao("Identificador inválido.");
  return s;
}
export function validarLigacao(
  raw: unknown,
  now = new Date(),
): Omit<Ligacao, "criadoEm"> {
  const v = objeto(raw);
  const resultado = v.resultado as Resultado;
  if (!Object.hasOwn(RESULTADOS, resultado))
    throw new Validacao("Escolha o resultado da ligação.");
  const proximaAcao = texto(v.proximaAcao, 500);
  const notas = texto(v.notas, 4000, true);
  let retornoEm: string | null = null;
  if (v.retornoEm) {
    const d = new Date(String(v.retornoEm));
    if (!Number.isFinite(d.getTime()) || d <= now)
      throw new Validacao("Agende uma data e hora futuras.");
    retornoEm = d.toISOString();
  }
  if (
    ["RETORNO", "REUNIAO"].includes(resultado) &&
    (!retornoEm || !proximaAcao)
  )
    throw new Validacao(
      "Informe data, hora e próximo passo para o retorno ou reunião.",
    );
  if (
    ["SEM_INTERESSE", "NUMERO_INVALIDO", "NAO_CONTATAR"].includes(resultado) &&
    retornoEm
  )
    throw new Validacao("Esse resultado encerra o contato; remova o retorno.");
  return {
    id: idValido(v.id),
    leadId: idValido(v.leadId),
    resultado,
    notas,
    duracao: inteiro(v.duracao, 0, 14400),
    proximaAcao,
    retornoEm,
    responsavel: texto(v.responsavel, 80, true),
  };
}
export function statusResultado(r: Resultado): Status {
  if (
    r === "REUNIAO" ||
    r === "SEM_INTERESSE" ||
    r === "NUMERO_INVALIDO" ||
    r === "NAO_CONTATAR"
  )
    return r;
  return "RETORNO";
}
export const finalizado = (l: Pick<Lead, "status">) =>
  [
    "REUNIAO",
    "SEM_INTERESSE",
    "NUMERO_INVALIDO",
    "NAO_CONTATAR",
    "DESCARTADO",
  ].includes(l.status);
export function pontuar(l: NovoLead) {
  return Math.min(
    100,
    20 +
      (l.contato ? 10 : 0) +
      (l.site ? 10 : 0) +
      (l.pesquisa.resumo ? 15 : 0) +
      (l.pesquisa.gancho ? 15 : 0) +
      (l.pesquisa.oportunidade ? 10 : 0) +
      Math.min(l.pesquisa.fontes.length, 2) * 10,
  );
}
export function ordenarFila(leads: Lead[], agora = new Date()) {
  return [...leads].sort((a, b) => {
    const vencido = (l: Lead) =>
      l.retornoEm && new Date(l.retornoEm) <= agora ? 1 : 0;
    return (
      vencido(b) - vencido(a) ||
      b.score - a.score ||
      a.criadoEm.localeCompare(b.criadoEm)
    );
  });
}
export function diaSP(d = new Date()) {
  return d.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
}
export function metricas(leads: Lead[], agora = new Date()) {
  const ligacoes = leads
    .flatMap((l) => l.historico)
    .filter((l) => diaSP(new Date(l.criadoEm)) === diaSP(agora));
  const conversas = ligacoes.filter((l) =>
    [
      "RECEPCAO",
      "CONVERSOU",
      "RETORNO",
      "REUNIAO",
      "SEM_INTERESSE",
      "NAO_CONTATAR",
    ].includes(l.resultado),
  ).length;
  return {
    ligacoes: ligacoes.length,
    conversas,
    reunioes: ligacoes.filter((l) => l.resultado === "REUNIAO").length,
    taxa: ligacoes.length ? Math.round((conversas / ligacoes.length) * 100) : 0,
    pendentes: leads.filter(
      (l) => !finalizado(l) && l.retornoEm && new Date(l.retornoEm) <= agora,
    ).length,
  };
}
export function roteiro(l: Lead, sdr: string, oferta: string) {
  return [
    {
      titulo: "01 / Abertura · 20 segundos",
      texto: `Olá, ${l.contato || "tudo bem"}? Aqui é ${sdr || "Leonardo"}, da Made by Felipe. É você quem cuida da comunicação da ${l.empresa}? Posso explicar em 30 segundos por que liguei?`,
    },
    {
      titulo: "02 / Contexto real",
      texto: l.pesquisa.gancho
        ? `${l.pesquisa.gancho}\nQueria entender como isso funciona hoje para vocês.`
        : "Ainda não temos um gancho pesquisado. Comece perguntando como a empresa apresenta seus serviços e de onde vêm os novos contatos.",
    },
    {
      titulo: "03 / Descoberta",
      texto:
        "Como as pessoas chegam até vocês hoje?\nO que mais dificulta explicar o diferencial de vocês?\nQuem participa das decisões sobre marca e comunicação?\nIsso é uma prioridade agora ou para outro momento?",
    },
    {
      titulo: "04 / Hipótese de valor",
      texto: `${oferta}\n${l.pesquisa.oportunidade ? `Minha hipótese é: ${l.pesquisa.oportunidade}` : "Quero entender o cenário antes de sugerir qualquer mudança."}\nIsso faz sentido para vocês ou estou deixando algo de fora?`,
    },
    {
      titulo: "05 / Próximo passo",
      texto:
        "Se fizer sentido, podemos marcar uma conversa de 20 minutos com o Felipe para olhar esse cenário juntos. Qual dia funciona melhor e quem mais deveria participar?\nConfirme horário, canal e objetivo. Registre o combinado antes de encerrar.",
    },
  ];
}
export const OBJECOES = [
  {
    titulo: "Agora não posso falar",
    resposta:
      "Sem problema. Qual dia e horário seriam melhores? Se não for uma prioridade, pode me dizer também.",
  },
  {
    titulo: "Já temos agência",
    resposta:
      "Ótimo. O que vocês sentem que já está bem resolvido e o que ainda falta na comunicação? Não precisa mudar algo que funciona.",
  },
  {
    titulo: "Manda no WhatsApp",
    resposta:
      "Posso mandar um resumo se você autorizar. Qual ponto vale destacar e quando podemos retomar? Registre o consentimento e o combinado.",
  },
  {
    titulo: "Quanto custa?",
    resposta:
      "Depende do que precisa ser resolvido. Prefiro entender o cenário para trazer uma proposta coerente, sem inventar um valor agora.",
  },
  {
    titulo: "Não tenho interesse",
    resposta:
      "Entendido, obrigado por me falar. Vou registrar e encerrar o contato. Tenha um bom dia.",
  },
];
export const PROMPT_ROTINA =
  "Leia e siga docs/cold-call-rotina.md no repositório madebyfelipe/lpfds. Consulte o pré-voo com scripts/cold-call-sync.py status, respeite o ICP e o limite da fila, pesquise empresas em fontes públicas, entregue análise e gancho de ligação com evidências, importe apenas leads novos e registre o relatório real da execução. Não ligue nem envie mensagens. Se faltar acesso, reporte o bloqueio sem inventar resultados.";
