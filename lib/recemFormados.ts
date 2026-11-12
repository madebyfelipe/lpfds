// Troque null pelo link HTTPS de convite quando o grupo estiver criado.
// Sem link, os CTAs levam ao aviso de abertura e não simulam uma inscrição.
export const grupoLivesUrl: string | null = null;
export const recemFormadosHref = "/recem-formados";

export const recemFormados = {
  title: "Marca pessoal para psicólogos recém-formados | Made by Felipe",
  description:
    "Lives semanais com Felipe sobre marketing, branding e marca pessoal para psicólogos recém-formados. Construa sua presença e amplie seus caminhos na clínica.",
  hub: {
    kicker: "/RECÉM-FORMADOS",
    title: "O diploma veio. Agora, faça seu nome.",
    description: "Marketing, branding e marca pessoal em lives semanais comigo. Seu próximo passo começa aqui.",
    cta: "Conhecer as lives",
  },
  hero: {
    kicker: "— Psicologia · Recém-formados",
    intro: "O diploma é seu.",
    title: "Agora, faça",
    accent: "seu nome.",
    promise:
      "Como você pode construir sua marca pessoal sem depender de convênio, sem depender de projetos sociais.",
    description:
      "Lives semanais comigo para aprender marketing, branding e como comunicar o valor do seu trabalho desde o começo da sua carreira.",
    cta: "Quero participar das lives",
    secondaryCta: "O que vou aprender",
    pending: "Grupo em preparação. Link de entrada em breve.",
    image: "/institucional/webinar/palco.jpg",
    imageAlt: "Felipe falando ao microfone durante uma apresentação no palco",
    caption: "Felipe Silva / Estrategista de marca",
    frequency: "Toda semana, uma conversa sobre a sua marca.",
  },
  subjects: ["Marketing", "Branding", "Marca pessoal"],
  problem: {
    kicker: "— Entre o diploma e o primeiro passo",
    title: "Você aprendeu a cuidar. E quem te ensina a ser encontrado?",
    description:
      "Você abre o Instagram para divulgar seu trabalho. Olha outros profissionais, pensa no que postar e trava. Parece que todo mundo já sabe o caminho — menos você.",
    situations: [
      "“Como me apresentar se eu acabei de me formar?”",
      "“O que postar sem virar um perfil igual a todos os outros?”",
      "“Como construir meu consultório sem depender só de encaminhamentos?”",
    ],
    closing:
      "Sua marca começa nessas respostas. Vamos trabalhar clareza, posicionamento e comunicação para você dar os próximos passos com mais direção.",
  },
  learning: {
    kicker: "— O que vamos trabalhar nas lives",
    title: "Seu nome precisa dizer mais do que “recém-formado”.",
    description: "Da dúvida sobre o que postar à clareza sobre o que você quer comunicar.",
    topics: [
      {
        label: "Posicionamento",
        title: "Encontre o seu lugar.",
        description:
          "Entenda quem você quer atender, o que faz sentido para sua prática e como se apresentar com clareza, respeitando o momento da sua carreira.",
      },
      {
        label: "Branding",
        title: "Dê forma à sua marca.",
        description:
          "Conecte sua identidade, seu tom de voz e sua presença digital para que as pessoas entendam quem você é e como você trabalha.",
      },
      {
        label: "Conteúdo",
        title: "Saia do “o que eu posto?”.",
        description:
          "Transforme conhecimentos da sua área e dúvidas do seu público em conteúdo útil, com uma rotina possível para quem está começando.",
      },
      {
        label: "Marketing",
        title: "Crie caminhos até você.",
        description:
          "Entenda como perfil, conteúdo e canais de contato trabalham juntos para aproximar sua prática de quem procura atendimento.",
      },
    ],
  },
  autonomy: {
    kicker: "— Mais autonomia desde o começo",
    title: "Seu caminho pode ter a sua assinatura.",
    description:
      "Convênios e projetos sociais podem fazer parte da sua trajetória. A ideia é ampliar suas possibilidades: construir sua própria presença e reduzir a dependência de uma única fonte de oportunidades.",
    note:
      "Comunicação alinhada à ética da Psicologia e ao momento da sua formação. Sem promessas de agenda cheia ou resultados instantâneos.",
  },
  steps: {
    kicker: "— Como vai funcionar",
    title: "Um encontro por semana. Um próximo passo para a sua marca.",
    items: [
      { title: "Entre no grupo.", description: grupoLivesUrl
        ? "Entre no espaço que reúne quem quer acompanhar as lives e construir sua presença profissional."
        : "Quando o convite estiver disponível, entre no espaço que vai reunir quem quer acompanhar as lives." },
      { title: "Vem para a live.", description: "Toda semana, uma conversa comigo sobre marketing, branding e os desafios de construir sua marca pessoal." },
      { title: "Leve para a sua rotina.", description: "Use o que aprender para repensar sua apresentação, organizar suas ideias e desenvolver sua comunicação." },
    ],
  },
  host: {
    kicker: "— Quem vai estar com você",
    title: "Eu sou o Felipe. Vamos trabalhar a forma como as pessoas conhecem você.",
    description:
      "Construo marcas há sete anos e hoje trabalho com psicólogos. Minha aproximação com esse mercado começou em casa: minha mulher está se formando em Psicologia, e eu quis ajudar com a parte de construir uma presença profissional.",
    closing:
      "Nas lives, vou compartilhar conhecimentos de marketing, branding e comunicação para quem está dando os primeiros passos. Você traz sua formação. A gente trabalha como comunicar esse valor.",
    image: "/institucional/hero/06.jpg",
    imageAlt: "Felipe trabalhando no notebook em frente a uma estante de livros",
  },
  faq: {
    kicker: "— Antes de chegar junto",
    title: "Talvez você esteja pensando…",
    items: [
      { question: "É para quem está começando do zero?", answer: "Sim. As lives são pensadas para psicólogos recém-formados que querem começar a construir sua presença profissional e precisam de mais clareza sobre marketing e marca pessoal." },
      { question: "Preciso ter muitos seguidores?", answer: "Você pode começar com o perfil que tem hoje. Vamos trabalhar posicionamento, clareza e conteúdo relevante para o público que você quer alcançar." },
      { question: "Preciso deixar convênios ou projetos sociais?", answer: "Não. Essas experiências podem continuar fazendo parte da sua carreira. A proposta é ampliar suas possibilidades e desenvolver uma presença própria, para que você tenha mais autonomia nas suas escolhas." },
      { question: "Isso respeita as regras da Psicologia?", answer: "A comunicação precisa respeitar o Código de Ética Profissional do Psicólogo, inclusive o artigo 20, e as orientações do seu Conselho. Vamos abordar marca pessoal com esse cuidado, sem exposição de pacientes nem promessas de resultados clínicos." },
      { question: "Quando e onde vão acontecer as lives?", answer: grupoLivesUrl
        ? "Os encontros serão semanais. Entre no grupo pelo convite nesta página para acompanhar as informações sobre as lives."
        : "Os encontros serão semanais. Os dias, horários e a plataforma ainda serão divulgados. O grupo está em preparação, e o link de entrada será disponibilizado aqui." },
    ],
  },
  join: {
    kicker: "— Seu próximo capítulo",
    title: "A sua carreira está começando. A sua marca também pode.",
    description: "Venha aprender marketing, branding e marca pessoal comigo em lives semanais.",
    cta: "Entrar no grupo das lives",
    pendingTitle: "Nosso grupo está chegando.",
    pendingDescription: "Estou preparando o espaço das lives. Volte a esta página em breve para acessar o convite.",
    pendingButton: "Link do grupo em breve",
    back: "Voltar para o hub",
  },
};
