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

export const navigationLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#planos", label: "Planos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" }
] as const;

export const trustedMarks = [
  "Advocacia",
  "Nutrição",
  "Psicologia",
  "Clínicas",
  "Consultórios",
  "Experts"
];

export const metrics: Metric[] = [
  { value: 200, suffix: "+", label: "Projetos entregues" },
  { value: 30, suffix: "+", label: "Marcas atendidas" },
  { value: 1, suffix: "M+", label: "Impressões geradas" }
];

export const services: Service[] = [
  {
    title: "Assessoria de Conteúdo",
    description: "Produção completa para redes sociais, com estratégia, captação, edição e publicação.",
    tags: ["Conteúdo estratégico", "Consistência visual", "Execução contínua"]
  },
  {
    title: "Posicionamento de Marca",
    description: "Ajuste fino de como sua marca é percebida — do discurso à estética.",
    tags: ["Clareza de mensagem", "Materiais institucionais", "Identidade visual"]
  },
  {
    title: "Design & Identidade",
    description: "Sua marca vai precisar de materiais para manter-se na frente da concorrência.",
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
  "Posicionamento que diferencia de verdade",
  "Preço justo sem negociação",
  "Agenda lotada com o cliente certo"
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Conversa de diagnóstico",
    description: "15 min pra entender seu negócio, público e objetivos reais."
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
      "A Made by Felipe é uma assessoria estratégica de conteúdo. A gente cuida de toda a operação: estratégia, captação, edição, design, redação e distribuição. O objetivo é posicionar sua marca com clareza e gerar demanda qualificada."
  },
  {
    question: "Isso é só gestão de redes sociais?",
    answer:
      "Não. Gestão de redes é execução. Aqui, o foco é posicionamento + estratégia + execução integrada. O conteúdo existe para gerar percepção de valor e conversão."
  },
  {
    question: "Pra quem é esse serviço?",
    answer:
      "Empresas e profissionais que já têm um bom serviço, mas não conseguem traduzir isso em posicionamento. Principalmente advogados e profissionais da área fitness que precisam de uma operação completa."
  },
  {
    question: "Pra quem não é?",
    answer:
      "Quem busca só post bonito, volume de conteúdo ou algo barato. O foco aqui é construção de marca e resultado."
  },
  {
    question: "Vocês garantem resultado?",
    answer:
      "Garantimos estratégia, consistência e execução de alto nível. Resultado depende também do seu negócio, oferta e processo comercial."
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

export const floatingProofs = [
  {
    initials: "AN",
    handle: "@alves.nabuco",
    quote: "A percepção dos nossos clientes mudou completamente."
  },
  {
    initials: "NC",
    handle: "@nutri.carolina",
    quote: "Pacientes chegam dizendo que me escolheram pelo Instagram."
  }
];
