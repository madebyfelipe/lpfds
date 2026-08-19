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

export const steps = [
  {
    num: "01",
    title: "Imersão",
    copy: "Meia manhã com você. Histórico, carteira, valor da sessão, público que você atende melhor e leitura da concorrência local."
  },
  {
    num: "02",
    title: "Território",
    copy: "Posicionamento, recorte e discurso do consultório. Aprovado antes de qualquer arte."
  },
  {
    num: "03",
    title: "Sistema",
    copy: "Identidade visual e verbal aplicada nos pontos de contato que a pessoa vê primeiro. No ar em 30 dias, com checagem de conformidade em cada peça."
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
      "Cheguei achando que ia sair com um logotipo e saí com uma leitura do meu próprio consultório. Na manhã de imersão a conversa foi sobre carteira, valor da sessão e o tipo de pessoa que eu atendo melhor. O material veio depois, e veio coerente com isso. Hoje quem me procura já chega sabendo do que eu trato, e a primeira mensagem começa num ponto muito mais adiantado.",
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
      "Sempre tratei marca como assunto secundário, coisa para depois que a agenda estivesse cheia. A imersão inverteu isso em uma manhã, porque partiu de números que já eram meus. O posicionamento foi aprovado antes de qualquer arte, o que evitou o vaivém de gosto pessoal. Trinta dias depois estava tudo no ar, da página profissional à papelaria do consultório.",
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
