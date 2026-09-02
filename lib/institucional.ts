import type { Project } from "@/lib/portfolio";

// Conteúdo do site institucional (beta). Copy transcrita do protótipo
// aprovado "Site institucional para Felipe/Site Institucional.dc.html".
// Os projetos vêm de lib/portfolio.ts — fonte única do portfólio.

export const EMAIL = "contato@madebyfelipe.com.br";

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
// células; entraram as cinco fotos que existem.
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
        copy: "Conversa individual com você — e com quem mais atua no consultório."
      },
      {
        num: "02",
        title: "Workshop",
        copy: "Dois dias de imersão guiada, onde as quatro áreas viram estratégia."
      },
      {
        num: "03",
        title: "Pesquisa",
        copy: "Validação das informações levantadas e leitura da concorrência da sua região."
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
        copy: "Estratégia, posicionamento e identidade reunidos, aplicados e no ar em 45 dias."
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

// Depoimento aqui é de cliente do estúdio falando sobre serviço de design —
// fora do alcance da vedação de depoimento de paciente. Nenhuma fala cita
// atendimento, caso clínico ou resultado de terapia.
export const depoimentos = [
  {
    texto:
      "Cheguei achando que ia sair com um logotipo e saí com uma leitura do meu próprio consultório. Nos dois dias de imersão a conversa foi sobre carteira, valor da sessão e o tipo de pessoa que eu atendo melhor. O material veio depois, e veio coerente com isso. Hoje quem me procura já chega sabendo do que eu trato, e a primeira mensagem começa num ponto muito mais adiantado.",
    nome: "Carolina Bueno",
    titulo: "Psicóloga · CRP 06/128455",
    cidade: "Sorocaba"
  },
  {
    texto:
      "O que mudou não foi a aparência, foi a conversa inicial. Antes eu precisava explicar minha formação inteira; agora a marca faz parte disso antes de eu falar. A condução do projeto foi objetiva, com prazo cumprido e cada peça revisada quanto ao Código de Ética antes de ir para a rua. Para quem tem a agenda tomada por atendimento, isso valeu mais do que qualquer entrega visual.",
    nome: "Marina Prado",
    titulo: "Psicóloga · CRP 06/143902",
    cidade: "Itu"
  },
  {
    texto:
      "Sempre tratei marca como assunto secundário, coisa para depois que a agenda estivesse cheia. A imersão inverteu isso em dois dias, porque partiu de números que já eram meus. O posicionamento foi aprovado antes de qualquer arte, o que evitou o vaivém de gosto pessoal. Quarenta e cinco dias depois estava tudo no ar, da página profissional à papelaria do consultório.",
    nome: "Renata Siqueira",
    titulo: "Psicóloga · CRP 06/119374",
    cidade: "Campinas"
  }
];

// Props "Agenda" do protótipo (numProjetos / mesImersao).
export const agenda = { numProjetos: 3, mesImersao: "setembro" };

// Imagem de capa do projeto no hub — mesma regra do grid atual do portfólio.
// O card abre o case completo já existente em /portfolio/[slug].
export function projectCover(project: Project): string {
  return project.images.hero ?? project.images.cover;
}
