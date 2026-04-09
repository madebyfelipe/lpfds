export type Metric = {
  value: number;
  suffix: string;
  label: string;
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
  role: string;
  company: string;
  quote: string;
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
  { value: 50, suffix: "+", label: "Projetos entregues" },
  { value: 3, suffix: "x", label: "Mais percepção de valor" },
  { value: 21, suffix: " dias", label: "Marca pronta" },
  { value: 100, suffix: "%", label: "Atendimento direto" }
];

export const services: Service[] = [
  {
    title: "Identidade Visual Estratégica",
    description: "Logo, paleta, tipografia e brandbook alinhados ao posicionamento que o seu negócio precisa sustentar.",
    tags: ["Posicionamento", "Autoridade", "Premium"]
  },
  {
    title: "Social Media com Direção Criativa",
    description: "Posts, carrosséis, stories, reels e copy pensados para constância, percepção e conversão.",
    tags: ["Recorrente", "Estratégico", "Constância"]
  },
  {
    title: "Direção de Arte Direta",
    description: "Sem estagiário e sem intermediário: decisões visuais rápidas, alinhadas e conduzidas por quem cria.",
    tags: ["Direto", "Ágil"]
  },
  {
    title: "Consultoria de Posicionamento",
    description: "Leitura de mercado, concorrência, tom de voz e diferenciação para parar de comunicar no improviso.",
    tags: ["Diferenciação", "Nicho"]
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
    cta: "Começar agora",
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
    cta: "Falar com Felipe",
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
    initials: "AN",
    role: "Sócio-fundador",
    company: "Escritório de Advocacia · SP",
    quote:
      "A identidade visual mudou completamente a percepção dos nossos clientes. Começamos a atrair um perfil que antes nem nos procurava."
  },
  {
    initials: "NC",
    role: "Nutricionista clínica",
    company: "São Paulo · SP",
    quote:
      "Em dois meses meu perfil virou referência. Pacientes chegam falando que me escolheram pela presença digital."
  },
  {
    initials: "PS",
    role: "Psicólogo",
    company: "Consultório particular · SP",
    quote:
      "Contratei o combo e em 3 meses já tinha fila de espera. O posicionamento fez toda a diferença no consultório."
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Por que contrato trimestral?",
    answer:
      "Posicionamento não acontece em 30 dias. No primeiro mês alinhamos marca e tom, no segundo ganhamos ritmo, no terceiro os resultados aparecem. Sem atalho."
  },
  {
    question: "O branding é entregue no primeiro mês?",
    answer:
      "Sim. Em 3 semanas a identidade visual tá pronta. O social media começa alinhado com a nova marca desde o dia 1."
  },
  {
    question: "Já tenho logo. Preciso refazer?",
    answer:
      "Depende. Se funciona, otimizamos. Se não, redesenhamos. O foco é resultado, não refazer por refazer."
  },
  {
    question: "Quantas revisões estão inclusas?",
    answer:
      "Revisões ilimitadas no branding até a aprovação. No social media, cada peça passa por aprovação antes de ir pro ar."
  },
  {
    question: "A conversa de 15 min é de vendas?",
    answer:
      "Não. É pra entender seu negócio e ver se faz sentido trabalharmos juntos. Se não fizer, você sai com dicas gratuitas."
  },
  {
    question: "Posso trocar de plano depois?",
    answer: "Upgrade é imediato. Downgrade vale no próximo ciclo trimestral."
  }
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
