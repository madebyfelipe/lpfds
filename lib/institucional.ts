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

// Faixa de imagens abaixo do hero: as fotos ainda serão definidas pelo
// Felipe, então os slots ficam como placeholders com a descrição da pauta.
export const heroStrip = [
  "Mesa de imersão com os sócios",
  "Parede de estudo de território",
  "Impressões espalhadas",
  "Prova de papelaria sobre a mesa",
  "Aplicação em ambiente de escritório",
  "Detalhe de tipografia impressa",
  "Reunião de aprovação",
  "Bastidor da imersão"
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
export function projectCover(project: Project): string {
  return project.images.hero ?? project.images.cover;
}

// Peças de tela cheia do case: reaproveita o material já publicado do
// projeto, na ordem detail → série → galeria → sobre, sem repetir.
export function caseShots(project: Project): string[] {
  const pool = [
    project.images.detail,
    ...(project.images.series ?? []),
    ...(project.gallery ?? []),
    project.aboutImage,
    project.images.hero
  ].filter((src): src is string => Boolean(src));

  return [...new Set(pool)].slice(0, 3);
}
