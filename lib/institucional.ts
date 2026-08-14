import type { Project } from "@/lib/portfolio";

// Conteúdo do site institucional (beta). Copy transcrita do protótipo
// aprovado "Site institucional para Felipe/Site Institucional.dc.html".
// Os projetos vêm de lib/portfolio.ts — fonte única do portfólio.

export const EMAIL = "contato@madebyfelipe.com.br";

export const social = [
  {
    label: "Instagram",
    href: "https://instagram.com/madebyfelipe",
    display: "Instagram: @madebyfelipe"
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
    copy: "Dois dias com os sócios. Histórico da banca, carteira, ticket, ambição de porte e leitura da concorrência local."
  },
  {
    num: "02",
    title: "Território",
    copy: "Posicionamento, arquétipo e discurso do escritório. Aprovado antes de qualquer arte."
  },
  {
    num: "03",
    title: "Sistema",
    copy: "Identidade visual e verbal aplicada nos pontos de contato que o cliente vê primeiro. No ar em 30 dias, com checagem de conformidade em cada peça."
  }
];

export const clientLogos = [
  { src: "/logo-client-1.png", alt: "Cliente 1" },
  { src: "/logo-client-2.png", alt: "Cliente 2" },
  { src: "/logo-client-3.png", alt: "Cliente 3" },
  { src: "/logo-client-4.png", alt: "Cliente 4" },
  { src: "/logo-client-5.png", alt: "Cliente 5" }
];

export const deliverables = [
  "Posicionamento",
  "Naming",
  "Identidade Visual",
  "Identidade Verbal",
  "Brand Guide",
  "Site Institucional",
  "Papelaria e Proposta Comercial",
  "Direção de Arte"
];

export const depoimentos = [
  {
    texto:
      "Chegamos achando que era um trabalho de logotipo e saímos com uma leitura do nosso próprio negócio. Nos dois dias de imersão a discussão foi sobre carteira, ticket e o tipo de cliente que queríamos atrair nos próximos cinco anos. O material veio depois, e veio coerente. Hoje a proposta comercial chega no cliente com o mesmo peso que a nossa banca tem no fórum.",
    nome: "Ricardo Almeida",
    cargo: "Sócio-fundador",
    escritorio: "Almeida & Vasconcelos"
  },
  {
    texto:
      "O que mudou não foi a aparência, foi a conversa inicial. Antes eu precisava explicar o tamanho do escritório; agora o cliente chega sabendo. A condução do projeto foi objetiva, com prazo cumprido e cada peça revisada quanto ao Provimento antes de ir para a rua. Para um sócio que não tem tempo de acompanhar arte, isso valeu mais do que qualquer entrega visual.",
    nome: "Marina Prado",
    cargo: "Sócia-fundadora",
    escritorio: "Prado Sociedade de Advogados"
  },
  {
    texto:
      "Somos uma banca técnica e sempre tratamos marca como assunto secundário. A imersão inverteu isso em dois dias, porque partiu de números que já eram nossos. O posicionamento foi aprovado antes de qualquer arte, o que evitou o vaivém de gosto pessoal entre sócios. Trinta dias depois estava tudo no ar, do site à papelaria.",
    nome: "Eduardo Ferraz",
    cargo: "Sócio-fundador",
    escritorio: "Ferraz Advocacia Empresarial"
  }
];

// Props "Agenda" do protótipo (numProjetos / mesImersao).
export const agenda = { numProjetos: 3, mesImersao: "setembro" };

// Imagem de capa do projeto no hub — mesma regra do grid atual do portfólio.
// O card abre o case completo já existente em /portfolio/[slug].
export function projectCover(project: Project): string {
  return project.images.hero ?? project.images.cover;
}
