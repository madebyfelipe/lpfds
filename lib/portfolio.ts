export type ProjectCategory = "Marca" | "Conteúdo";

export type Project = {
  slug: string; // ex.: "alves-nabuco" — vira a URL
  client: string; // "Alves & Nabuco"
  displayName: string; // "ALVES\n& NABUCO" (\n vira quebra de linha no hero)
  category: ProjectCategory;
  tagline: string; // frase-resumo (seção 2 do case)
  statement: string; // frase de efeito (seção 4)
  scope: string[]; // ["Produção de conteúdo", "Google Ads", ...]
  execution: string; // texto da coluna "Execução" (seção 5)
  images: {
    cover: string; // /portfolio/<slug>/cover.jpg
    detail: string;
    series: [string, string, string];
  };
  // Todas as peças da faixa automática da Galeria; se ausente,
  // a página usa [detail, ...series] como fallback.
  gallery?: string[];
  // Texto explicativo do projeto (seção 6) — opcional até ser escrito.
  about?: string;
  // Foto que acompanha o "Sobre o projeto" à esquerda do painel de texto,
  // preenchendo a largura da shell junto com o resto das seções.
  aboutImage?: string;
  // Seção "Apresentação" (perto do fim do case). Dois formatos possíveis:
  // - prancha única: uma imagem já montada (estilo Behance), dimensões reais
  //   para o <Image> renderizar na proporção natural, sem corte;
  // - grid de peças: as peças individuais lado a lado, em grid de 4 colunas
  //   ou coluna única. Se `images` for omitido, usa `gallery` do projeto.
  presentation?:
    | { src: string; width: number; height: number; text?: string }
    | { layout: "grid-4" | "grid-1"; images?: string[]; text?: string };
};

// Projeto com as dimensões reais do cover (calculadas em build time pelo
// servidor via lib/image-size) — o grid usa para reservar a proporção
// de cada card antes das imagens carregarem, zerando o layout shift.
export type ProjectWithCoverSize = Project & {
  coverSize: { width: number; height: number };
};

// Gera os caminhos /portfolio/<slug>/posts/post-01.jpg … post-NN.jpg
const posts = (slug: string, count: number): string[] =>
  Array.from(
    { length: count },
    (_, i) =>
      `/portfolio/${slug}/posts/post-${String(i + 1).padStart(2, "0")}.jpg`
  );

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
    images: {
      cover: "/portfolio/alves-nabuco/cover.jpg",
      detail: "/portfolio/alves-nabuco/detail.jpg",
      series: [
        "/portfolio/alves-nabuco/serie-1.jpg",
        "/portfolio/alves-nabuco/serie-2.jpg",
        "/portfolio/alves-nabuco/serie-3.jpg",
      ],
    },
    gallery: posts("alves-nabuco", 32),
    about:
      "O projeto começou pela produção de conteúdo. Estruturamos uma linha editorial para LinkedIn e Instagram, traduzindo temas de direito tributário e trabalhista em publicações claras, com frequência constante e linguagem calibrada para cada canal. A operação cobre pauta, redação, design e distribuição, somada à gestão de campanhas no Google Ads direcionadas à captação de clientes qualificados.\n\nO escopo se expandiu para toda a presença da banca. Desenvolvemos o novo site, as aplicações de marca e os modelos de apresentação usados em reuniões e propostas comerciais. A produção audiovisual passou a alimentar os canais com gravações em vídeo e sessões fotográficas dos sócios e do escritório, garantindo material próprio e consistente em cada ponto de contato.",
    aboutImage: "/portfolio/alves-nabuco/sobre.jpg",
    presentation: {
      layout: "grid-4",
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
    images: {
      cover: "/portfolio/doce-afeto/cover.jpg",
      detail: "/portfolio/doce-afeto/detail.jpg",
      series: [
        "/portfolio/doce-afeto/serie-1.jpg",
        "/portfolio/doce-afeto/serie-2.jpg",
        "/portfolio/doce-afeto/serie-3.jpg",
      ],
    },
    gallery: posts("doce-afeto", 10),
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
      "Identidade visual e posicionamento pessoal para uma estudante em formação.",
    statement: "Marca própria começa antes do diploma.",
    scope: ["Identidade visual", "Direção de arte", "Conteúdo editorial"],
    execution:
      "Construção de identidade visual, direção de arte e sistema de posts editoriais com linguagem própria para o Instagram.",
    images: {
      cover: "/portfolio/liz-helena/cover.jpg",
      detail: "/portfolio/liz-helena/detail.jpg",
      series: [
        "/portfolio/liz-helena/serie-1.jpg",
        "/portfolio/liz-helena/serie-2.jpg",
        "/portfolio/liz-helena/serie-3.jpg",
      ],
    },
    gallery: posts("liz-helena", 8),
    about:
      "O projeto nasceu da necessidade de dar forma a uma presença profissional ainda em construção. Liz Helena está em formação e precisava de uma marca capaz de acompanhar esse percurso, sustentando a comunicação nos primeiros passos da carreira sem parecer improvisada. Desenvolvemos o sistema de identidade completo: assinatura visual, paleta, tipografia e um conjunto de aplicações pensadas para uso imediato em currículo, portfólio e redes sociais.\n\nA entrega incluiu os templates de apresentação, os modelos de post para LinkedIn e Instagram e as diretrizes de tom de voz que orientam cada publicação. O resultado é um repertório visual coerente, aplicável desde já e preparado para crescer junto com a trajetória profissional dela.",
    aboutImage: "/portfolio/liz-helena/sobre.jpg",
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
    tagline:
      "Direção criativa e produção integral dos materiais de comunicação da 15ª edição.",
    statement: "Um evento se vende antes de acontecer.",
    scope: ["Roteiros", "Copy", "Spot de TV", "Conteúdo institucional"],
    execution:
      "Desenvolvimento de roteiros, copywriting e produção de spots de TV para a comunicação do evento.",
    images: {
      cover: "/portfolio/know-how-experience/cover.jpg",
      detail: "/portfolio/know-how-experience/detail.jpg",
      series: [
        "/portfolio/know-how-experience/serie-1.jpg",
        "/portfolio/know-how-experience/serie-2.jpg",
        "/portfolio/know-how-experience/serie-3.jpg",
      ],
    },
    gallery: [
      "/portfolio/know-how-experience/detail.jpg",
      ...posts("know-how-experience", 3),
      "/portfolio/know-how-experience/serie-1.jpg",
      "/portfolio/know-how-experience/serie-2.jpg",
      "/portfolio/know-how-experience/serie-3.jpg",
    ],
    about:
      "A 15ª edição do Know How Experience reuniu empresários, executivos e investidores em Campo Grande, nos dias 22 e 23 de maio, no Palazzo Murano, sob o tema \"Os 4 Pilares do Networking Lucrativo\". Assumimos a entrega de todos os materiais de comunicação da edição, do anúncio à realização. O escopo incluiu os roteiros de apresentação dos palestrantes, o roteiro do spot de TV, as peças de mídia paga e as copies de virada de lote que sustentaram o ritmo de vendas ao longo de todo o ciclo.\n\nA operação seguiu a lógica de um lançamento. Cada fase da campanha exigiu um pacote próprio de criativos, mensagens e cortes de vídeo, ajustados ao estágio da venda e ao público de cada canal. Conduzimos também o ciclo promocional com parceiros, incluindo a ativação junto ao Café com Negócios, e mantivemos a consistência visual do evento em todos os pontos de contato: redes sociais, mídia paga, materiais de palco e comunicação de bastidores.",
    aboutImage: "/portfolio/know-how-experience/sobre.jpg",
    presentation: {
      layout: "grid-4",
      text: "Do credenciamento ao palco — bastidores e criativos da 15ª edição, ponta a ponta.",
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
    images: {
      cover: "/portfolio/turrex-midia-digital/cover.jpg",
      detail: "/portfolio/turrex-midia-digital/detail.jpg",
      series: [
        "/portfolio/turrex-midia-digital/serie-1.jpg",
        "/portfolio/turrex-midia-digital/serie-2.jpg",
        "/portfolio/turrex-midia-digital/serie-3.jpg",
      ],
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
    images: {
      cover: "/portfolio/apple-sale-br/cover.jpg",
      detail: "/portfolio/apple-sale-br/detail.jpg",
      series: [
        "/portfolio/apple-sale-br/serie-1.jpg",
        "/portfolio/apple-sale-br/serie-2.jpg",
        "/portfolio/apple-sale-br/serie-3.jpg",
      ],
    },
  },
  {
    slug: "fila-zero",
    client: "Fila Zero",
    displayName: "FILA\nZERO",
    category: "Conteúdo",
    tagline:
      "Carrosséis estratégicos para Instagram, unindo educação e conversão em cada peça.",
    statement: "Fila zero começa com conteúdo certo.",
    scope: ["Conteúdo para redes sociais", "Direção de arte", "Carrosséis"],
    execution:
      "Produção de carrosséis educativos e comerciais para Instagram, com direção de arte consistente peça a peça.",
    images: {
      cover: "/portfolio/fila-zero/cover.png",
      detail: "/portfolio/fila-zero/detail.png",
      series: [
        "/portfolio/fila-zero/serie-1.png",
        "/portfolio/fila-zero/serie-2.png",
        "/portfolio/fila-zero/serie-3.png",
      ],
    },
    gallery: posts("fila-zero", 28).map((src) => src.replace(/\.jpg$/, ".png")),
    presentation: {
      layout: "grid-4",
      text: "Todos os carrosséis na íntegra, slide a slide, na ordem em que foram entregues.",
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
