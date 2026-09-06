export type Metric = {
  value: number;
  suffix: string;
  label: string;
  description?: string;
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Review = {
  initials: string;
  name?: string;
  role: string;
  company: string;
  quote: string;
  metric?: string;
  metricLabel?: string;
  avatarSrc?: string;
  source?: "google";
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PricingFeature = {
  label: string;
  included: boolean;
};

export type PricingTier = {
  name: string;
  price: string;
  highlighted?: boolean;
  cta: string;
  paymentUrl: string;
  branding: PricingFeature[];
  social: PricingFeature[];
};

// A home virou o site institucional, então as âncoras antigas (#servicos,
// #processo, #resultados, #faq) não existem mais. O Nav escuro sobrevive nas
// páginas de case e aponta para as rotas do site novo.
export const navigationLinks = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Portfólio" },
  { href: "/imersao", label: "Contato" }
] as const;

export const trustedMarks = [
  "Advocacia",
  "Nutrição",
  "Psicologia",
  "Clínicas",
  "Consultórios",
  "Experts"
];

// ATENÇÃO — números sem lastro. "200+ projetos", "30+ marcas" e "1M+
// impressões" nunca foram apurados a partir de uma fonte (relatório, painel
// de anúncios, lista de contratos) e conflitavam entre si e com o texto do
// JSON-LD. O `MetricsBar` que os consumia não está montado em página alguma
// hoje. Antes de voltar ao ar, cada linha precisa de um número conferido e de
// onde ele saiu — publicar métrica estimada é publicidade enganosa (CDC art.
// 37, § 1º).
export const metrics: Metric[] = [];

export const services: Service[] = [
  {
    title: "Assessoria de Conteúdo",
    description: "Produção completa para redes sociais: estratégia, captação, edição e publicação.",
    tags: ["Conteúdo estratégico", "Consistência visual", "Execução contínua"]
  },
  {
    title: "Posicionamento de Marca",
    description: "Ajuste fino na forma como sua marca é percebida, do discurso à estética.",
    tags: ["Clareza de mensagem", "Materiais institucionais", "Identidade visual"]
  },
  {
    title: "Design & Identidade",
    description: "Os materiais que sustentam sua marca no dia a dia: propostas, apresentações, papelaria e merchandise.",
    tags: ["Materiais institucionais", "Apresentações e propostas", "Papelaria e merchandise"]
  }
];

export const problemItems = [
  "Marca que não transmite confiança",
  "Instagram parado e sem direção",
  "Concorrente pior atraindo mais",
  "Preço achatado por falta de percepção",
  "Depende só de indicação"
];

export const solutionItems = [
  "Marca que vende antes da primeira consulta",
  "Conteúdo estratégico e recorrente",
  "Posicionamento que te tira da guerra de preço",
  "Preço justo sem negociação",
  "Agenda lotada com o cliente certo"
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Conversa de diagnóstico",
    description: "15 min pra entender seu negócio, seu público e o que você quer alcançar."
  },
  {
    number: "02",
    title: "Criação da marca",
    description: "Logo, paleta, tipografia e brandbook em até 3 semanas."
  },
  {
    number: "03",
    title: "Conteúdo no ar",
    description: "Social media rodando com a nova identidade a partir do mês 1."
  },
  {
    number: "04",
    title: "Crescimento contínuo",
    description: "Planejamento, entrega e evolução mensal."
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Essencial",
    price: "R$ 1.200/mês",
    cta: "Quero esse",
    paymentUrl: "https://www.asaas.com/c/j5h22vewuan1o5lp",
    branding: [
      { label: "Logo + versão reduzida", included: true },
      { label: "Paleta + tipografia", included: true },
      { label: "Brandbook", included: false }
    ],
    social: [
      { label: "8 posts/mês feed estático", included: true },
      { label: "Criação visual + copy", included: true },
      { label: "Planejamento mensal", included: true },
      { label: "Stories/Reels", included: false },
      { label: "Relatório", included: false }
    ]
  },
  {
    name: "Estratégico",
    price: "R$ 1.800/mês",
    cta: "Quero esse",
    paymentUrl: "https://www.asaas.com/c/ua51ih11im2p38fq",
    highlighted: true,
    branding: [
      { label: "Logo + versões responsivas", included: true },
      { label: "Paleta completa + tipografia", included: true },
      { label: "Brandbook completo", included: true }
    ],
    social: [
      { label: "12 posts/mês feed + carrossel", included: true },
      { label: "Criação visual + copy estratégico", included: true },
      { label: "Calendário editorial", included: true },
      { label: "4 stories/semana", included: true },
      { label: "Relatório", included: false }
    ]
  },
  {
    name: "Premium",
    price: "R$ 2.500/mês",
    cta: "Quero esse",
    paymentUrl: "https://www.asaas.com/c/6pcdiqqaeoybxhmb",
    branding: [
      { label: "Sistema de marca completo", included: true },
      { label: "Paleta + grafismos de apoio", included: true },
      { label: "Brandbook completo", included: true }
    ],
    social: [
      { label: "16 posts/mês feed + carrossel + reels", included: true },
      { label: "Copy + direção criativa", included: true },
      { label: "Calendário editorial", included: true },
      { label: "Stories diários", included: true },
      { label: "Relatório mensal", included: true }
    ]
  }
];

// As três "Avaliações do Google" abaixo são transcrições do perfil público
// do estúdio; a de Milton Alves é do cliente do case /portfolio/alves-nabuco.
// Ao acrescentar uma avaliação aqui, ela precisa existir de fato em algum
// lugar verificável — o componente que as exibe não está montado hoje.
export const reviews: Review[] = [
  {
    initials: "MN",
    name: "Milton Alves",
    role: "Sócio-fundador",
    company: "Alves & Nabuco · Sorocaba, SP",
    quote:
      "Excelente serviço. Desde o início, ficou claro o nível de organização e cuidado em cada etapa do processo. As artes são muito bem feitas, com atenção aos detalhes e alinhadas com o que eu precisava comunicar. Além disso, o prazo foi antecipado. Felipe ajudou até em tarefas fora de seu escopo em situações mais urgentes. É o tipo de trabalho que passa segurança e facilita MUITO o dia a dia.",
    avatarSrc: "/avatar-milton.png"
  },
  {
    initials: "G",
    role: "Avaliação do Google",
    company: "",
    quote:
      "Ótimo designer, focado em entregar soluções em perfeito estado e antes do prazo. Além da dedicação e feedbacks para melhor construção dos projetos.",
    source: "google"
  },
  {
    initials: "G",
    role: "Avaliação do Google",
    company: "",
    quote:
      "Designer incrível, super dedicado, atencioso e talentoso! Cumpre muito bem as solicitações num ótimo prazo, super recomendo!!!",
    source: "google"
  },
  {
    initials: "G",
    role: "Avaliação do Google",
    company: "",
    quote:
      "Melhor designer na região.",
    source: "google"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "O que exatamente a Made by Felipe faz?",
    answer:
      "A Made by Felipe é uma assessoria estratégica de conteúdo. Eu cuido de toda a operação: estratégia, captação, edição, design, redação e distribuição. O objetivo é posicionar sua marca com clareza e gerar demanda qualificada."
  },
  {
    question: "Isso é só gestão de redes sociais?",
    answer:
      "Não. Gestão de redes cuida da execução. A Made by Felipe entra antes: define posicionamento, monta a estratégia e aí executa. Cada conteúdo existe pra gerar percepção de valor e conversão."
  },
  {
    question: "Pra quem é esse serviço?",
    answer:
      "Empresas e profissionais que já têm um bom serviço, mas não conseguem traduzir isso em posicionamento. Principalmente advogados e profissionais da área fitness que precisam de uma operação completa."
  },
  {
    question: "Pra quem não é?",
    answer:
      "Quem quer só post bonito ou o menor preço possível. O trabalho aqui é construção de marca, e isso pede tempo e investimento."
  },
  {
    question: "Você garante resultado?",
    answer:
      "O que eu garanto: estratégia, consistência e execução de alto nível. O resultado final também depende da sua oferta e do seu processo comercial."
  },
];

export const finalTags = [
  "Posicionamento real",
  "Agenda lotada",
  "Marca que vende",
  "Autoridade no nicho",
  "Conteúdo estratégico",
  "Atendimento direto",
  "Sem improvisar",
  "Cliente certo"
];

// ATENÇÃO — provas sociais sem origem. Os dois cartões atribuíam uma fala a
// um @ de Instagram sem que exista registro de quem disse, quando, nem
// autorização para publicar. O `Hero` que os consumia não está montado em
// página alguma. Para voltar: fala real, com autorização escrita de quem
// assina (LGPD art. 7º, I) — depoimento inventado com @ de terceiro é, além
// de enganoso, uso indevido do nome de outra pessoa.
export const floatingProofs: { initials: string; handle: string; quote: string }[] = [];
