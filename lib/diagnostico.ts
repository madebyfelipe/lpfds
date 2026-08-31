/**
 * Diagnóstico — Índice de Marca do Consultório (0–100).
 *
 * Fonte única do formulário nativo (/diagnostico). Aqui moram:
 *  - a estrutura das seções/campos (o form renderiza a partir daqui),
 *  - a fórmula do Índice (calculada SÓ no servidor — ver nota abaixo),
 *  - a validação compartilhada pelos dois lados,
 *  - o helper cliente `requestDiagnostico()`.
 *
 * A fórmula do Índice é a única fonte da verdade: `computeIndice()` só é
 * chamado dentro de `app/api/diagnostico/route.ts`. O form NÃO recalcula o
 * Índice — se os dois calculassem, um dia divergiriam. O cliente só coleta.
 *
 * Copy transcrita verbatim do documento aprovado "Form de diagnóstico —
 * campos + integração com CRM". Não reescrever os rótulos nem as opções.
 */

// ---------------------------------------------------------------------------
// Estrutura de campos
// ---------------------------------------------------------------------------

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "textarea"
  | "radio"
  | "yesno"
  | "matrix"
  | "nps";

/** Opção de um radio/yesno. `points` é o peso no Índice (0 quando qualitativo). */
export type FieldOption = { label: string; value: string; points?: number };

/** Linha da matriz (os 12 pontos de contato). O `name` é o nome_tecnico. */
export type MatrixRow = { name: string; label: string };

export type Field = {
  /** nome_tecnico — a chave que vai para o CRM. */
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  help?: string;
  placeholder?: string;
  /** Para radio/yesno. */
  options?: FieldOption[];
  /** Para matrix. */
  rows?: MatrixRow[];
  /** Para matrix: a escala compartilhada (1–3). */
  scale?: FieldOption[];
};

export type Section = {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  fields: Field[];
};

const yesNo = (simPoints: number): FieldOption[] => [
  { label: "Sim", value: "sim", points: simPoints },
  { label: "Não", value: "nao", points: 0 }
];

/** Escala da matriz dos pontos de contato — mesma nas 12 linhas. */
const matrixScale: FieldOption[] = [
  { value: "1", label: "1 · está me atrapalhando" },
  { value: "2", label: "2 · neutro" },
  { value: "3", label: "3 · está trabalhando a meu favor" }
];

/** As 12 linhas da matriz (Exercício 4). A soma vira `pc_total` (12–36). */
export const pontosContato: MatrixRow[] = [
  { name: "pc_google", label: "Seu nome no Google" },
  { name: "pc_foto_perfil", label: "Foto do perfil" },
  { name: "pc_capa", label: "Capa / destaque de topo" },
  { name: "pc_bio", label: "Bio (2 primeiras linhas)" },
  { name: "pc_grade", label: "Primeiros nove posts" },
  { name: "pc_destaques", label: "Destaques fixados" },
  { name: "pc_primeira_resposta", label: "Primeira resposta no WhatsApp" },
  { name: "pc_confirmacao", label: "Mensagem de confirmação" },
  { name: "pc_telefone", label: "Atendimento do telefone da clínica" },
  { name: "pc_recepcao", label: "Porta, placa e recepção" },
  { name: "pc_recibo", label: "Recibo ou nota" },
  { name: "pc_ia", label: "O que uma IA responde sobre sua cidade" }
];

export const sections: Section[] = [
  {
    id: "identificacao",
    kicker: "Seção 0",
    title: "Quem é você",
    intro: "Contato e um pouco de contexto para personalizar a análise.",
    fields: [
      { name: "nome", label: "Seu nome", type: "text", required: true },
      {
        name: "email",
        label: "Seu melhor e-mail",
        type: "email",
        required: true,
        help: "É por aqui que a análise chega."
      },
      {
        name: "whatsapp",
        label: "WhatsApp",
        type: "tel",
        required: true,
        placeholder: "(11) 99999-9999"
      },
      { name: "cidade_uf", label: "Cidade / UF", type: "text", required: true },
      { name: "crp", label: "CRP", type: "text", placeholder: "CRP 06/000000" },
      {
        name: "abordagem",
        label: "Sua abordagem",
        type: "text",
        placeholder: "TCC, psicanálise, etc."
      },
      { name: "anos_formada", label: "Anos de formada", type: "number" },
      {
        name: "atuacao",
        label: "Você atende",
        type: "radio",
        options: [
          { label: "Presencial", value: "presencial" },
          { label: "Online", value: "online" },
          { label: "Os dois", value: "ambos" }
        ]
      }
    ]
  },
  {
    id: "territorio",
    kicker: "Seção 1 · Território",
    title: "O recorte do seu trabalho",
    fields: [
      {
        name: "ex1_frase_atual",
        label: "A frase que descreve seu trabalho hoje (copie do seu perfil)",
        type: "textarea"
      },
      {
        name: "ex1_assinavel",
        label:
          "Uma colega da sua cidade conseguiria assinar essa frase sem mudar nenhuma palavra?",
        type: "radio",
        required: true,
        options: [
          { label: "Sim, qualquer colega assinaria", value: "qualquer", points: 0 },
          { label: "Não sei", value: "nao_sei", points: 5 },
          { label: "Não, ela é minha", value: "minha", points: 10 }
        ]
      },
      {
        name: "ex2_recorte",
        label: "Você já consegue nomear um recorte/público específico?",
        type: "radio",
        required: true,
        options: [
          { label: "Sim, tenho um recorte nomeado", value: "nomeado", points: 15 },
          { label: "Vejo um padrão mas ainda não nomeei", value: "padrao", points: 8 },
          { label: "Não / atendo de tudo", value: "nao", points: 0 }
        ]
      },
      {
        name: "ex2_padrao",
        label:
          "O que os seus melhores casos têm em comum (momento de vida, queixa, contexto)?",
        type: "textarea"
      }
    ]
  },
  {
    id: "pontos-contato",
    kicker: "Seção 2 · Pontos de contato",
    title: "Cada ponto de contato, nota de 1 a 3",
    intro:
      "Dê uma nota a cada ponto, como se você fosse a pessoa procurando terapia. 1 = está me atrapalhando · 2 = neutro · 3 = está trabalhando a meu favor.",
    fields: [
      {
        name: "pontos_contato",
        label: "Pontos de contato",
        type: "matrix",
        required: true,
        rows: pontosContato,
        scale: matrixScale
      }
    ]
  },
  {
    id: "conta-hora",
    kicker: "Seção 3 · A conta da hora",
    title: "O valor real do seu tempo",
    fields: [
      {
        name: "ex5_hora_real",
        label: "Você sabe o valor real da sua hora de trabalho?",
        type: "radio",
        required: true,
        options: [
          {
            label: "Sei e separei por canal (particular/convênio/plataforma)",
            value: "por_canal",
            points: 15
          },
          { label: "Fiz a conta cheia, sem separar canais", value: "cheia", points: 8 },
          { label: "Nunca fiz essa conta", value: "nunca", points: 0 }
        ]
      },
      {
        name: "ex5_valor_sessao",
        label: "Valor da sessão hoje",
        type: "number",
        help: "Opcional — serve só para calibrar a análise."
      },
      {
        name: "ex5_sessoes_semana",
        label: "Sessões por semana",
        type: "number",
        help: "Opcional."
      }
    ]
  },
  {
    id: "ativos",
    kicker: "Seção 4 · Ativos próprios",
    title: "Quais destes já existem hoje?",
    fields: [
      {
        name: "ativo_pagina",
        label: "Página profissional com endereço próprio",
        type: "yesno",
        required: true,
        options: yesNo(5)
      },
      {
        name: "ativo_busca_nome",
        label: "Aparece bem na busca pelo seu nome completo",
        type: "yesno",
        required: true,
        options: yesNo(5)
      },
      {
        name: "ativo_ia",
        label: "Aparece quando perguntam a uma IA por psicóloga na sua cidade",
        type: "yesno",
        required: true,
        options: yesNo(5)
      },
      {
        name: "ativo_whatsapp",
        label: "WhatsApp Business organizado (catálogo, respostas rápidas, horário)",
        type: "yesno",
        required: true,
        options: yesNo(5)
      }
    ]
  },
  {
    id: "conformidade",
    kicker: "Seção 5 · Conformidade",
    title: "O que o artigo 20 pede",
    fields: [
      {
        name: "conf_dados",
        label:
          "Nome, título e CRP estão visíveis em todos os seus pontos (bio, recibo, assinatura)?",
        type: "radio",
        required: true,
        options: [
          { label: "Sim, em todos", value: "todos", points: 5 },
          { label: "Em alguns", value: "alguns", points: 2 },
          { label: "Não / não sei", value: "nao", points: 0 }
        ]
      },
      {
        name: "conf_checklist",
        label: "Você roda um checklist de conformidade antes de publicar?",
        type: "yesno",
        required: true,
        options: yesNo(5)
      }
    ]
  },
  {
    id: "feedback",
    kicker: "Seção 6 · Feedback do e-book",
    title: "A contrapartida",
    intro: "O que o guia acertou e o que faltou — é o que melhora a próxima versão.",
    fields: [
      { name: "fb_ajudou", label: "O que mais te ajudou no guia?", type: "textarea" },
      { name: "fb_faltou", label: "O que você sentiu falta?", type: "textarea" },
      {
        name: "fb_nps",
        label: "De 0 a 10, o quanto recomendaria o guia a uma colega?",
        type: "nps"
      },
      {
        name: "fb_exercicios_feitos",
        label: "Quantos exercícios você conseguiu fazer?",
        type: "radio",
        options: [
          { label: "Nenhum", value: "nenhum" },
          { label: "1–3", value: "1-3" },
          { label: "4–6", value: "4-6" },
          { label: "Todos", value: "todos" }
        ]
      }
    ]
  },
  {
    id: "consentimento",
    kicker: "Seção 7 · Consentimento",
    title: "Autorização (LGPD)",
    fields: [
      {
        name: "consent_lgpd",
        label:
          "Autorizo o contato e o uso dos meus dados para receber a análise (LGPD).",
        type: "yesno",
        required: true,
        options: yesNo(0)
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Tipos de dados
// ---------------------------------------------------------------------------

/** Origem fixa deste form (campo oculto). */
export const DIAGNOSTICO_ORIGEM = "form-ebook" as const;

/** Todo valor coletado chega como string (o form é 100% controlado por texto). */
export type DiagnosticoValues = Record<string, string>;

/** Parâmetros de campanha, se vierem na URL. */
export type Utm = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

export type DiagnosticoInput = {
  values: DiagnosticoValues;
  utm?: Utm;
};

/** Resultado calculado no servidor. */
export type Banda = "Ponto de partida" | "Em construção" | "Território";
export type Gargalo =
  | "territorio"
  | "pontos-contato"
  | "conta-hora"
  | "ativos"
  | "conformidade";

export type Diagnostico = {
  indice: number;
  banda: Banda;
  gargalo: Gargalo;
  pcTotal: number;
  blocos: {
    territorio: number;
    pontosContato: number;
    contaHora: number;
    ativos: number;
    conformidade: number;
  };
};

// ---------------------------------------------------------------------------
// Índice — calculado SÓ no servidor
// ---------------------------------------------------------------------------

/** Índice de todos os campos pontuáveis, por nome_tecnico. */
const fieldByName: Record<string, Field> = Object.fromEntries(
  sections.flatMap((s) => s.fields).map((f) => [f.name, f])
);

/** Pontos da opção escolhida de um radio/yesno (0 se não respondeu). */
function optionPoints(values: DiagnosticoValues, name: string): number {
  const field = fieldByName[name];
  const chosen = values[name];
  if (!field?.options || !chosen) return 0;
  return field.options.find((o) => o.value === chosen)?.points ?? 0;
}

function parseScale(raw: string | undefined): number {
  const n = Number(raw);
  return n === 1 || n === 2 || n === 3 ? n : 0;
}

/**
 * Fórmula do Índice (documento de campos):
 *   territorio      = ex1_assinavel + ex2_recorte            // 0–25
 *   pontos_contato  = (pc_total - 12) / 24 * 30              // 0–30
 *   conta_hora      = ex5_hora_real                          // 0–15
 *   ativos          = soma dos 4 ativos (5 cada)             // 0–20
 *   conformidade    = conf_dados + conf_checklist            // 0–10
 *   INDICE = soma                                            // 0–100
 */
export function computeIndice(values: DiagnosticoValues): Diagnostico {
  const territorio = optionPoints(values, "ex1_assinavel") + optionPoints(values, "ex2_recorte");

  const pcTotal = pontosContato.reduce((sum, row) => sum + parseScale(values[row.name]), 0);
  // Quando a matriz não veio inteira, pcTotal < 12 e o bloco fica negativo:
  // trava em 0 para não puxar o Índice para baixo do zero.
  const pontosContatoScore = Math.max(0, ((pcTotal - 12) / 24) * 30);

  const contaHora = optionPoints(values, "ex5_hora_real");
  const ativos =
    optionPoints(values, "ativo_pagina") +
    optionPoints(values, "ativo_busca_nome") +
    optionPoints(values, "ativo_ia") +
    optionPoints(values, "ativo_whatsapp");
  const conformidade =
    optionPoints(values, "conf_dados") + optionPoints(values, "conf_checklist");

  const indice = Math.round(
    territorio + pontosContatoScore + contaHora + ativos + conformidade
  );

  const banda: Banda =
    indice <= 40 ? "Ponto de partida" : indice <= 70 ? "Em construção" : "Território";

  // Gargalo = bloco de MENOR pontuação relativa (score ÷ máximo do bloco).
  const relativos: Array<[Gargalo, number]> = [
    ["territorio", territorio / 25],
    ["pontos-contato", pontosContatoScore / 30],
    ["conta-hora", contaHora / 15],
    ["ativos", ativos / 20],
    ["conformidade", conformidade / 10]
  ];
  const gargalo = relativos.reduce((min, cur) => (cur[1] < min[1] ? cur : min))[0];

  return {
    indice,
    banda,
    gargalo,
    pcTotal,
    blocos: {
      territorio,
      pontosContato: Math.round(pontosContatoScore),
      contaHora,
      ativos,
      conformidade
    }
  };
}

// ---------------------------------------------------------------------------
// Validação (compartilhada: cliente para UX, servidor para não confiar nele)
// ---------------------------------------------------------------------------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Campos obrigatórios da seção, na versão completa. */
export function requiredNames(section: Section): string[] {
  return section.fields.filter((f) => f.required).map((f) => f.name);
}

/**
 * Devolve a lista de nomes_tecnicos faltando/inválidos. Vazia = ok.
 * A matriz só conta como preenchida quando as 12 linhas têm nota.
 */
export function validateDiagnostico(values: DiagnosticoValues): string[] {
  const faltando: string[] = [];

  for (const field of sections.flatMap((s) => s.fields)) {
    if (!field.required) continue;

    if (field.type === "matrix") {
      const completa = pontosContato.every((row) => parseScale(values[row.name]) > 0);
      if (!completa) faltando.push(field.name);
      continue;
    }

    const value = (values[field.name] ?? "").trim();
    if (!value) {
      faltando.push(field.name);
      continue;
    }
    if (field.name === "email" && !EMAIL_RE.test(value)) faltando.push("email");
    if (field.name === "whatsapp" && value.replace(/\D/g, "").length < 10)
      faltando.push("whatsapp");
    // O consentimento é um yesno obrigatório: "não" não vale como aceite.
    if (field.name === "consent_lgpd" && value !== "sim") faltando.push("consent_lgpd");
  }

  return faltando;
}

/** Rótulo curto de um campo, para a mensagem de erro do form. */
export function labelFor(name: string): string {
  return fieldByName[name]?.label ?? name;
}

/** Rótulo legível da opção escolhida (para o Note/e-mail); crua se não achar. */
export function optionLabelFor(name: string, value: string): string {
  const field = fieldByName[name];
  if (!field?.options) return value;
  return field.options.find((o) => o.value === value)?.label ?? value;
}

// ---------------------------------------------------------------------------
// Helper cliente
// ---------------------------------------------------------------------------

export type DiagnosticoResult = {
  ok: boolean;
  /** Devolvido para a tela de agradecimento; o cálculo é do servidor. */
  indice?: number;
  banda?: Banda;
};

/**
 * Envia o diagnóstico para /api/diagnostico (rota de servidor: a chave da Core
 * API do Twenty e o SMTP não podem existir no bundle do cliente).
 */
export async function requestDiagnostico(
  input: DiagnosticoInput
): Promise<DiagnosticoResult> {
  const res = await fetch("/api/diagnostico", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });

  if (!res.ok) throw new Error(`Diagnóstico respondeu ${res.status}`);
  return (await res.json()) as DiagnosticoResult;
}
