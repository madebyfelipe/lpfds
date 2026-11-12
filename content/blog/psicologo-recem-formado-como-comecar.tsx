import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ESPECIALISTA = "https://site.cfp.org.br/servicos/titulo-de-especialista/";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "psicologo-recem-formado-como-comecar",
  title: "Psicólogo recém-formado: como começar a se apresentar e construir a marca",
  description:
    "Primeiros passos do psicólogo recém-formado na divulgação: CRP, como se apresentar sem título que ainda não tem, perfil, site simples e marca que cresce junto.",
  keyword: "psicólogo recém-formado como começar",
  tags: ["posicionamento"],
  publishedAt: "2026-11-12",
  summary:
    "O recém-formado começa a divulgar depois da inscrição no CRP, apresentando nome completo, “psicóloga(o)” e número do registro. Sem título de especialista, você fala de formação, público e abordagem, nunca de títulos que ainda não tem. Uma base simples e coerente (perfil profissional, um link com contato, uma frase de posicionamento) vale mais que uma marca elaborada antes de saber para quem você quer atender.",
  faq: [
    {
      q: "Posso divulgar meu trabalho antes de ter o CRP?",
      a: "Não como psicóloga(o). A divulgação de serviços psicológicos exige a inscrição no Conselho Regional, e o número do CRP precisa aparecer na publicidade, segundo a Nota Técnica CFP nº 1/2022."
    },
    {
      q: "Recém-formado pode dizer que é especialista em alguma área?",
      a: "Só se tiver o título correspondente. O Código de Ética pede que a divulgação cite apenas títulos e qualificações que você possui. Você pode dizer com que público e com que abordagem trabalha, e quais cursos fez, sem chamar um curso de especialidade."
    },
    {
      q: "Preciso de nicho logo no começo?",
      a: "Não precisa ser definitivo, mas ajuda ter uma direção: com quem você mais gosta de trabalhar e onde tem mais formação. É mais fácil ser lembrado por um público claro do que por “atendo todas as demandas”."
    },
    {
      q: "Vale investir em identidade visual no primeiro ano?",
      a: "Vale ter uma base coerente e barata de manter. Um projeto completo de marca rende mais quando você já sabe para quem atende, porque a marca nasce do posicionamento."
    }
  ],
  cover: {
    src: "/blog/psicologo-recem-formado-como-comecar/psicologo-recem-formado-como-comecar-mesa-e-planta.jpg",
    alt: "Folhas de costela-de-adão em um vaso azul sobre uma mesa branca em uma sala clara e vazia",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O diploma chega, o CRP sai, e aparece uma pergunta que a graduação não
        respondeu: como contar para as pessoas que você atende? Entre o medo de
        errar no Código de Ética e a pressão de “estar no Instagram”, muita
        psicóloga recém-formada trava ou faz tudo ao mesmo tempo. Este texto
        organiza a ordem.
      </p>

      <section>
        <h2>Antes de divulgar: CRP e identificação</h2>
        <p>
          A divulgação de serviços de psicologia começa depois da inscrição no
          Conselho Regional. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          diz que é obrigatório informar, em qualquer meio, o nome completo ou
          nome social, a titulação “psicóloga” ou “psicólogo” e o CRP com o
          número de registro. Essa linha vai na bio, no site, no cartão e na
          assinatura das mensagens.
        </p>
      </section>

      <section>
        <h2>Títulos: fale do que você tem</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          pede que a divulgação faça referência apenas a títulos e qualificações
          que você possui. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          explica que dá para divulgar área de atuação, experiência e público
          atendido, desde que isso não seja apresentado como se fosse título, e
          que “Dr.” ou “Dra.” é para quem tem doutorado. O registro de especialista
          é concedido pelo Conselho e, segundo o{" "}
          <a href={ESPECIALISTA} {...ext}>
            CFP
          </a>
          , não é obrigatório para atuar. Veja os detalhes em{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            título de especialista em psicologia
          </Link>
          .
        </p>
        <div className="inst-blog__table" role="region" aria-label="Como se apresentar no começo da carreira" tabIndex={0}>
          <table>
            <caption>Como se apresentar no começo da carreira</caption>
            <thead><tr><th scope="col">Frase</th><th scope="col">Cabe?</th></tr></thead>
            <tbody>
              <tr><td>“Psicóloga clínica, atendo adolescentes, abordagem TCC”</td><td>Sim</td></tr>
              <tr><td>“Formação em análise do comportamento aplicada (curso livre)”</td><td>Sim</td></tr>
              <tr><td>“Especialista em autismo” sem o título</td><td>Não</td></tr>
              <tr><td>“Dra.” sem doutorado</td><td>Não</td></tr>
              <tr><td>“Primeira sessão grátis para conhecer meu trabalho”</td><td>Não (gratuidade como chamariz)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Passo a passo do primeiro ano</h2>
        <ol>
          <li>
            <strong>Escreva uma frase de posicionamento provisória.</strong>{" "}
            Para quem você quer atender e como. Ela vai mudar, e tudo bem. O guia
            de{" "}
            <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
              como escolher o nicho
            </Link>{" "}
            ajuda.
          </li>
          <li>
            <strong>Organize o primeiro contato.</strong> Um número de WhatsApp
            profissional com mensagem de boas-vindas que explica como funciona o
            agendamento. Veja{" "}
            <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
              WhatsApp Business para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Crie um perfil profissional separado do pessoal.</strong> A
            Nota Técnica recomenda cuidado com a fronteira entre os dois.
          </li>
          <li>
            <strong>Tenha um lugar fixo com as informações.</strong> Pode ser uma
            página simples ou o Perfil da Empresa no Google, se você tem
            endereço de atendimento.
          </li>
          <li>
            <strong>Comece pela rede que já existe.</strong> Supervisores,
            colegas de turma, escolas e profissionais de áreas próximas. Avise
            que você começou a atender e para quem.
          </li>
          <li>
            <strong>Publique pouco e com constância.</strong> Conteúdo baseado
            na ciência psicológica, sem expor ninguém.
          </li>
        </ol>
      </section>

      <section>
        <h2>Uma marca que cresce junto</h2>
        <p>
          No começo, a marca pode ser só o seu nome bem escrito, uma paleta e uma
          fonte usadas sempre igual. Evite gastar com nome fantasia, logo
          elaborado e muitas peças antes de saber para quem você atende: essas
          decisões ficam melhores depois de alguns meses de prática. Quando o
          público ficar claro, é hora de pensar em{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns de quem está começando</h2>
        <ul>
          <li>Esconder o CRP ou deixá-lo só na foto.</li>
          <li>Anunciar “atendo todas as demandas”.</li>
          <li>Oferecer sessão gratuita ou desconto para atrair os primeiros pacientes.</li>
          <li>Contar casos do estágio nas redes, mesmo sem nome.</li>
          <li>Coletar dados de pessoas em formulários sem explicar o uso, o que a <a href={LGPD} {...ext}>LGPD</a> exige.</li>
          <li>Copiar a marca de quem você admira.</li>
        </ul>
      </section>

      <section>
        <h2>Exemplo ilustrativo</h2>
        <p>
          Uma psicóloga fictícia, recém-inscrita no CRP, fez estágio com crianças
          e um curso livre sobre desenvolvimento infantil. A bio dela poderia ser:
          “Psicóloga · CRP 00/00000 · Atendo crianças e oriento famílias ·
          Presencial em Campinas e online”. No destaque “Como funciona”, ela
          explica o primeiro encontro com os responsáveis. Nada de “especialista”,
          nada de preço, nenhuma promessa.
        </p>
      </section>

      <section>
        <h2>Para quem quer atender crianças autistas e neurodivergentes</h2>
        <p>
          É uma área que pede formação contínua e supervisão, e as famílias
          perguntam muito sobre experiência. Seja transparente: diga o que você
          estudou e como trabalha, sem se apresentar como especialista antes do
          título. Use a{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          e lembre que quem lê o perfil são os pais. Mais em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Checklist do recém-formado</h2>
        <ul>
          <li>Nome completo, “psicóloga(o)” e CRP em toda divulgação.</li>
          <li>Frase de posicionamento provisória.</li>
          <li>WhatsApp profissional com mensagem de boas-vindas.</li>
          <li>Perfil profissional separado do pessoal.</li>
          <li>Só títulos que você tem; cursos livres chamados de cursos.</li>
          <li>Nada de preço, gratuidade ou promessa.</li>
          <li>Rede avisada: supervisores, colegas, escolas.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em
          dois dias de imersão (posicionamento, identidade visual e verbal), com
          tudo no ar em 45 dias, dentro do artigo 20 do Código de Ética. Para
          quem está no começo, a conversa costuma ser sobre o momento certo de
          fazer isso. O processo está na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>
          . O primeiro passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 9º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={ESPECIALISTA} {...ext}>
              Registro de especialista
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
