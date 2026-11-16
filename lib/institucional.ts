import type { Project } from "@/lib/portfolio";

// Conteúdo do site institucional (beta). Copy transcrita do protótipo
// aprovado "Site institucional para Felipe/Site Institucional.dc.html".
// Os projetos vêm de lib/portfolio.ts — fonte única do portfólio.

// Mesma caixa do form da imersão e das páginas legais (lib/legal.ts): o
// site exibia contato@, mas é alo@ que recebe e autentica no SMTP.
export { CONTATO_EMAIL as EMAIL } from "@/lib/legal";

export const social = [
  {
    label: "Instagram",
    href: "https://instagram.com/madebyfelipe.com.br",
    display: "Instagram: @madebyfelipe.com.br"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/madebyfelipe",
    display: "LinkedIn: /in/madebyfelipe"
  },
  {
    label: "Behance",
    href: "https://behance.net/madebyfelipe",
    display: "Behance: behance.net/madebyfelipe"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@madebyfelipe",
    display: "TikTok: @madebyfelipe"
  }
];

// Faixa de imagens abaixo do hero. Fotos do Felipe, otimizadas a partir de
// "fotos Felipe/" para public/institucional/hero. O protótipo previa oito
// células estáticas; hoje a faixa é um carrossel contínuo (ver .inst-strip),
// que duplica esta lista para fechar o loop. Seis fotos.
export const heroStrip = [
  {
    src: "/institucional/hero/01.jpg",
    alt: "Reunião de trabalho em volta da mesa, com o time analisando um documento na tela"
  },
  {
    src: "/institucional/hero/02.jpg",
    alt: "Felipe no palco, ao microfone, durante uma apresentação"
  },
  {
    src: "/institucional/hero/03.jpg",
    alt: "Felipe ao lado de clientes na OAB — Subseção Sorocaba"
  },
  {
    src: "/institucional/hero/04.jpg",
    alt: "Entrevista no palco durante o Know How Experience"
  },
  {
    src: "/institucional/hero/05.jpg",
    alt: "Felipe ao lado do painel do Know How Experience"
  },
  {
    src: "/institucional/hero/06.jpg",
    alt: "Felipe trabalhando no notebook, sentado em frente a uma estante de livros"
  }
];

// Método PSIQUE. Branding é tradução, não invenção: a marca não é criada do
// zero — é o resultado de investigar seis áreas do consultório até encontrar o
// que o torna único. As seis áreas (P-S-I-Q-U-E) formam o posicionamento.
export const methodIntro =
  "Branding é tradução, não invenção. A marca do seu consultório não é inventada — ela é traduzida de seis áreas que a gente investiga até encontrar o que só existe em você.";

export const positioning = [
  {
    letter: "P",
    title: "Prática",
    copy: "Como o consultório funciona de fato: receita, carteira, valor da sessão e ocupação de agenda. Não existe marca antes do negócio."
  },
  {
    letter: "S",
    title: "Sujeito",
    copy: "Quem você atende melhor e quem procura você. O público real, não o idealizado."
  },
  {
    letter: "I",
    title: "Inquietação",
    copy: "O que move quem procura você: a necessidade por trás da busca, que a marca precisa reconhecer."
  },
  {
    letter: "Q",
    title: "Qualidade",
    copy: "Sua proposta de valor contra o que a concorrência local já oferece — para achar onde você é, de fato, diferente."
  },
  {
    letter: "U",
    title: "Universo",
    copy: "O contexto em que você atua: cidade, cultura e os canais onde a marca vai viver."
  },
  {
    letter: "E",
    title: "Estória",
    copy: "De onde você vem, no que acredita e a personalidade que a marca vai carregar. A origem que ninguém copia."
  }
];

// Duas etapas (Estratégia → Identidade), oito passos: é a linha do tempo do
// método. Coletar e explorar até o diagnóstico; criar e definir até o guia.
export const process = [
  {
    etapa: "Estratégia de marca",
    tag: "Coletando · Explorando",
    steps: [
      {
        num: "01",
        title: "Entrevista",
        copy: "Primeiro encontro, de cerca de 1h30, com você — e com quem mais atua no consultório: como você trabalha, para quem e aonde quer chegar."
      },
      {
        num: "02",
        title: "Workshop",
        copy: "Segundo encontro, também de cerca de 1h30, em que as seis áreas viram estratégia."
      },
      {
        num: "03",
        title: "Pesquisa",
        copy: "Estudo de mercado: validação das informações levantadas e leitura da concorrência da sua região."
      },
      {
        num: "04",
        title: "Diagnóstico",
        copy: "Tudo o que foi coletado, documentado e aprovado com você antes de seguir."
      }
    ]
  },
  {
    etapa: "Identidade de marca",
    tag: "Criando · Definindo",
    steps: [
      {
        num: "05",
        title: "Plataforma",
        copy: "A síntese da estratégia — o documento que orienta toda a identidade da marca."
      },
      {
        num: "06",
        title: "Keyword",
        copy: "Uma proposta de posicionamento e identidade verbal: o discurso do consultório."
      },
      {
        num: "07",
        title: "Keyvisual",
        copy: "Uma proposta de identidade visual: cores, grafismos e tipografia."
      },
      {
        num: "08",
        title: "Guia da marca",
        copy: "Estratégia, posicionamento e identidade reunidos, aplicados e apresentados em até 30 dias, com o site incluso."
      }
    ]
  }
];

// Naming saiu da lista de propósito: o artigo 20 do Código de Ética exige que
// a divulgação identifique nome completo, título e CRP, e nome fantasia depende
// de PJ registrada. Naming vira item opcional, discutido caso a caso.
export const deliverables = [
  "Posicionamento",
  "Identidade Visual",
  "Identidade Verbal",
  "Brand Guide",
  "Página Profissional",
  "Papelaria Clínica",
  "Direção de Arte"
];


// Capacidade do estúdio; disponibilidade é confirmada no contato inicial.
export const agenda = { numProjetos: 3 };

// Imagem de capa do projeto no hub — mesma regra do grid atual do portfólio.
// O card abre o case completo já existente em /portfolio/[slug].
export function projectCover(project: Project): string {
  return project.images.hero ?? project.images.cover;
}
