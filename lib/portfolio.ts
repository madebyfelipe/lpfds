export type ProjectCategory = "Marca" | "Conteúdo";

export type Project = {
  slug: string; // ex.: "alves-nabuco" — vira a URL
  client: string; // "Alves & Nabuco"
  displayName: string; // "ALVES\n& NABUCO" (\n vira quebra de linha no hero)
  category: ProjectCategory;
  tagline: string; // frase-resumo (seção 2 do case)
  statement: string; // frase de efeito (seção 7)
  scope: string[]; // ["Produção de conteúdo", "Google Ads", ...]
  execution: string; // texto da coluna "Execução" (seção 8)
  result: { before: string; after: string; label: string }; // ex.: label "Alcance"
  numbers: { value: string; label: string }[]; // 3 itens
  images: {
    cover: string; // /portfolio/<slug>/cover.jpg
    detail: string;
    series: [string, string, string];
    application?: string; // se ausente, reusa detail
  };
  applicationCaption?: { kicker: string; text: string }; // card da seção Aplicação
  // Prancha vertical completa (estilo Behance) — dimensões reais para o
  // <Image> renderizar na proporção natural, sem corte.
  presentation?: { src: string; width: number; height: number; text?: string };
};

// A ordem do array define a ordem do grid (1º = destaque) e o "próximo projeto".
export const projects: Project[] = [
  {
    slug: "alves-nabuco",
    client: "Alves & Nabuco",
    displayName: "ALVES\n& NABUCO",
    category: "Marca",
    tagline:
      "Conteúdo jurídico e Google Ads para uma banca de direito tributário e trabalhista.",
    statement: "Autoridade se constrói publicando.",
    scope: ["Produção de conteúdo", "Google Ads", "Posicionamento"],
    execution:
      "Estratégia de conteúdo, gestão de tráfego e posicionamento contínuo ao longo de 12 meses de parceria.",
    result: { before: "48K", after: "3.2M", label: "Alcance" },
    numbers: [
      { value: "3.2M", label: "Impressões" },
      { value: "+180%", label: "Leads qualificados" },
      { value: "12", label: "Meses de parceria" },
    ],
    images: {
      cover: "/portfolio/alves-nabuco/cover.jpg",
      detail: "/portfolio/alves-nabuco/detail.jpg",
      series: [
        "/portfolio/alves-nabuco/serie-1.jpg",
        "/portfolio/alves-nabuco/serie-2.jpg",
        "/portfolio/alves-nabuco/serie-3.jpg",
      ],
      application: "/portfolio/alves-nabuco/aplicacao.jpg",
    },
    applicationCaption: {
      kicker: "Aplicação",
      text: "Peças institucionais e conteúdo jurídico adaptados para feed e campanhas.",
    },
    presentation: {
      src: "/portfolio/alves-nabuco/apresentacao.jpg",
      width: 1600,
      height: 7203,
      text: "A linha editorial completa — todos os posts produzidos ao longo da parceria, em ordem cronológica.",
    },
  },
  {
    slug: "doce-afeto",
    client: "Doce & Afeto",
    displayName: "DOCE\n& AFETO",
    category: "Marca",
    tagline:
      "Identidade visual completa para uma marca de brownies artesanais — do logo à embalagem.",
    statement: "Afeto também se embala.",
    scope: ["Identidade visual", "Ilustração", "Embalagem", "Social media"],
    execution:
      "Criação de logotipo, universo ilustrado autoral, padrões gráficos, embalagens e peças de cardápio para redes sociais.",
    result: { before: "Ideia", after: "Marca", label: "Do zero ao lançamento" },
    numbers: [
      { value: "20+", label: "Peças criadas" },
      { value: "5", label: "Aplicações de embalagem" },
      { value: "1", label: "Universo ilustrado autoral" },
    ],
    images: {
      cover: "/portfolio/doce-afeto/cover.jpg",
      detail: "/portfolio/doce-afeto/detail.jpg",
      series: [
        "/portfolio/doce-afeto/serie-1.jpg",
        "/portfolio/doce-afeto/serie-2.jpg",
        "/portfolio/doce-afeto/serie-3.jpg",
      ],
      application: "/portfolio/doce-afeto/aplicacao.jpg",
    },
    applicationCaption: {
      kicker: "Aplicação",
      text: "Identidade aplicada em sacolas, caixas e embalagens take away.",
    },
    presentation: {
      src: "/portfolio/doce-afeto/apresentacao.jpg",
      width: 1600,
      height: 18500,
      text: "O universo da marca por inteiro — do pattern ilustrado ao cardápio e ao ponto de venda.",
    },
  },
  {
    slug: "liz-helena",
    client: "Liz Helena",
    displayName: "LIZ\nHELENA",
    category: "Conteúdo",
    tagline:
      "Identidade e conteúdo editorial para uma neuropsicóloga com voz própria nas redes.",
    statement: "Saúde mental com estética própria.",
    scope: ["Identidade visual", "Direção de arte", "Conteúdo editorial"],
    execution:
      "Construção de identidade visual, direção de arte e sistema de posts editoriais com linguagem própria para o Instagram.",
    result: { before: "Genérico", after: "Autoral", label: "Posicionamento" },
    numbers: [
      { value: "1", label: "Identidade completa" },
      { value: "3", label: "Linhas editoriais" },
      { value: "100%", label: "Sistema replicável" },
    ],
    images: {
      cover: "/portfolio/liz-helena/cover.jpg",
      detail: "/portfolio/liz-helena/detail.jpg",
      series: [
        "/portfolio/liz-helena/serie-1.jpg",
        "/portfolio/liz-helena/serie-2.jpg",
        "/portfolio/liz-helena/serie-3.jpg",
      ],
      application: "/portfolio/liz-helena/aplicacao.jpg",
    },
    applicationCaption: {
      kicker: "Aplicação",
      text: "Marca aplicada em brindes, materiais impressos e conteúdo de feed.",
    },
    presentation: {
      src: "/portfolio/liz-helena/apresentacao.jpg",
      width: 1600,
      height: 10476,
      text: "A marca completa — do símbolo às aplicações, como foi entregue ao cliente.",
    },
  },
  {
    slug: "know-how-experience",
    client: "Know How Experience",
    displayName: "KNOW HOW\nEXPERIENCE",
    category: "Conteúdo",
    tagline: "Roteiros, copy e spot de TV para um evento de alto impacto.",
    statement: "Evento memorável começa no roteiro.",
    scope: ["Roteiros", "Copy", "Spot de TV", "Conteúdo institucional"],
    execution:
      "Desenvolvimento de roteiros, copywriting e produção de spots de TV para a comunicação do evento.",
    result: { before: "800", after: "2.400", label: "Participantes" },
    numbers: [
      { value: "2.400", label: "Participantes" },
      { value: "98%", label: "Satisfação" },
      { value: "4", label: "Spots de TV" },
    ],
    images: {
      cover: "/portfolio/know-how-experience/cover.jpg",
      detail: "/portfolio/know-how-experience/detail.jpg",
      series: [
        "/portfolio/know-how-experience/serie-1.jpg",
        "/portfolio/know-how-experience/serie-2.jpg",
        "/portfolio/know-how-experience/serie-3.jpg",
      ],
      application: "/portfolio/know-how-experience/aplicacao.jpg",
    },
    applicationCaption: {
      kicker: "Aplicação",
      text: "Roteiros e spots levados para TV e telões do evento.",
    },
  },
  {
    slug: "turrex-midia-digital",
    client: "Turrex Mídia Digital",
    displayName: "TURREX\nMÍDIA DIGITAL",
    category: "Conteúdo",
    tagline: "Conteúdo DOOH e educacional para LinkedIn.",
    statement: "Dados falam. Conteúdo convence.",
    scope: ["Conteúdo DOOH", "LinkedIn", "Educacional"],
    execution:
      "Produção de conteúdo para mídia DOOH e trilha educacional no LinkedIn, com foco em engajamento e autoridade.",
    result: { before: "12K", after: "1.8M", label: "Alcance" },
    numbers: [
      { value: "1.8M", label: "Impressões DOOH" },
      { value: "+340%", label: "Engajamento LinkedIn" },
      { value: "24", label: "Peças produzidas" },
    ],
    images: {
      cover: "/portfolio/turrex-midia-digital/cover.jpg",
      detail: "/portfolio/turrex-midia-digital/detail.jpg",
      series: [
        "/portfolio/turrex-midia-digital/serie-1.jpg",
        "/portfolio/turrex-midia-digital/serie-2.jpg",
        "/portfolio/turrex-midia-digital/serie-3.jpg",
      ],
      application: "/portfolio/turrex-midia-digital/aplicacao.jpg",
    },
    applicationCaption: {
      kicker: "Aplicação",
      text: "Peças educacionais adaptadas para painéis DOOH e feed do LinkedIn.",
    },
  },
  {
    slug: "apple-sale-br",
    client: "Apple Sale BR",
    displayName: "APPLE\nSALE BR",
    category: "Marca",
    tagline: "Social e campanha para varejo de eletrônicos.",
    statement: "Produto premium exige campanha precisa.",
    scope: ["Social media", "Campanha"],
    execution:
      "Gestão de social media e criação de campanhas de varejo para impulsionar vendas online.",
    result: { before: "380K", after: "4.1M", label: "Alcance" },
    numbers: [
      { value: "4.1M", label: "Alcance" },
      { value: "+220%", label: "Vendas online" },
      { value: "6", label: "Campanhas" },
    ],
    images: {
      cover: "/portfolio/apple-sale-br/cover.jpg",
      detail: "/portfolio/apple-sale-br/detail.jpg",
      series: [
        "/portfolio/apple-sale-br/serie-1.jpg",
        "/portfolio/apple-sale-br/serie-2.jpg",
        "/portfolio/apple-sale-br/serie-3.jpg",
      ],
      application: "/portfolio/apple-sale-br/aplicacao.jpg",
    },
    applicationCaption: {
      kicker: "Aplicação",
      text: "Peças de campanha aplicadas em feed, stories e anúncios de varejo.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// "Próximo projeto" derivado da ordem do array (circular).
export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
