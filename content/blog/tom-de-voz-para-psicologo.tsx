import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ANTICAPACITISTA = "https://site.cfp.org.br/wp-content/uploads/2025/10/Manual_Anticapacitista_web.pdf";

export const post: Post = {
  slug: "tom-de-voz-para-psicologo",
  title: "Tom de voz para psicólogo: como definir o jeito de escrever do consultório",
  description:
    "Como definir o tom de voz do consultório de psicologia: princípios, exemplos de frases, o que o Código de Ética limita e um guia curto para usar em tudo.",
  keyword: "tom de voz para psicólogo",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-12",
  summary:
    "Tom de voz é o jeito constante de escrever do consultório: as palavras que você usa, o quanto explica, o grau de formalidade. Para defini-lo, parta de quem lê (adulto ansioso, pais de uma criança, escola), escolha três princípios com exemplos de “é assim / não é assim” e aplique em bio, site, WhatsApp e posts. O Código de Ética limita o conteúdo, não a personalidade: sem sensacionalismo, sem promessa, sem expor ninguém.",
  faq: [
    {
      q: "O que é tom de voz de uma marca?",
      a: "É a forma constante de falar com as pessoas: escolha de palavras, formalidade, ritmo das frases, uso de humor. A voz é a personalidade; o tom se ajusta à situação, como uma mensagem de boas-vindas e uma resposta a uma dúvida delicada."
    },
    {
      q: "Psicólogo deve escrever de forma formal ou informal?",
      a: "Depende de quem lê. Um consultório que atende adolescentes pode ser mais leve que um que faz avaliação para processos judiciais. O ponto é ser claro, respeitoso e igual em todos os canais, sem jargão desnecessário."
    },
    {
      q: "Posso usar “você” e primeira pessoa no site?",
      a: "Pode. Escrever “eu atendo” e “você pode me chamar” aproxima e não fere o Código de Ética. O que precisa aparecer é o nome completo, a titulação e o CRP, como pede a Nota Técnica CFP nº 1/2022."
    },
    {
      q: "Como manter o mesmo tom no Instagram e no WhatsApp?",
      a: "Com um guia curto: três princípios, uma lista de palavras que você usa e evita, e modelos de mensagens frequentes. Releia o guia antes de escrever, ou peça para quem ajuda no perfil seguir o mesmo documento."
    }
  ],
  cover: {
    src: "/blog/tom-de-voz-para-psicologo/tom-de-voz-para-psicologo-caderno-e-lapis.jpg",
    alt: "Caderno de espiral aberto em branco com um lápis sobre uma mesa de madeira clara",
    caption: "Foto: fabrikasimf / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Duas psicólogas podem ter a mesma formação, a mesma abordagem e o mesmo
        público e, ainda assim, ser percebidas de forma muito diferente. Grande
        parte dessa diferença está em como cada uma escreve: a bio, a primeira
        resposta no WhatsApp, a legenda do post, a página “sobre mim”. É isso
        que se chama tom de voz.
      </p>
      <p>
        Quando o tom muda de canal para canal, a pessoa que procura atendimento
        sente que está falando com consultórios diferentes. Quando ele é
        constante, a marca fica reconhecível antes mesmo do logo aparecer.
      </p>

      <section>
        <h2>Voz e tom: a diferença</h2>
        <p>
          A <strong>voz</strong> é a personalidade da marca e não muda: acolhedora
          e direta, por exemplo. O <strong>tom</strong> é como essa voz se ajusta
          a cada situação. A mesma voz soa mais leve num post sobre rotina de
          sono e mais cuidadosa numa resposta a uma mãe que acabou de receber um
          diagnóstico do filho. Definir a voz evita que você reinvente o jeito de
          escrever a cada mensagem.
        </p>
      </section>

      <section>
        <h2>O que as normas limitam (e o que não limitam)</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          não dita estilo. Ele limita o conteúdo da divulgação: o artigo 20 veda
          previsão taxativa de resultados, preço como forma de propaganda,
          autopromoção em detrimento de outros profissionais e divulgação
          sensacionalista. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          define sensacionalista como a comunicação feita de maneira exagerada,
          que superdimensiona um fato, sem rigor técnico.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          acrescenta que as publicações devem estar de acordo com a ciência
          psicológica e que a divulgação não pode ser capacitista nem induzir
          convicções. Ou seja: o tom pode ser leve, caloroso, bem-humorado ou
          sóbrio. O que não pode é exagerar, prometer ou expor.
        </p>
      </section>

      <section>
        <h2>Como definir o tom de voz em cinco passos</h2>
        <ol>
          <li>
            <strong>Comece por quem lê.</strong> Escreva em uma frase quem é a
            pessoa que mais lê o que você publica. Para quem atende crianças, é
            quase sempre a mãe ou o pai, não a criança.
          </li>
          <li>
            <strong>Liste como essa pessoa chega.</strong> Cansada, com pressa,
            com vergonha de pedir ajuda, depois de ler muita coisa contraditória
            na internet. O tom responde a esse estado.
          </li>
          <li>
            <strong>Escolha três princípios.</strong> Por exemplo: claro,
            acolhedor, sem jargão. Mais de três vira lista de qualidades que
            ninguém consegue aplicar.
          </li>
          <li>
            <strong>Escreva o “é assim / não é assim”.</strong> Para cada
            princípio, uma frase que segue e uma que não segue. É o que torna o
            guia usável.
          </li>
          <li>
            <strong>Aplique primeiro onde mais se lê.</strong> Bio do Instagram,
            mensagem automática do WhatsApp, primeira dobra do site. Depois
            posts e e-mails.
          </li>
        </ol>
        <p>
          Esse trabalho nasce do{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento
          </Link>
          : sem saber para quem você atende, qualquer tom serve, e nenhum serve
          bem.
        </p>
      </section>

      <section>
        <h2>Exemplos de “é assim / não é assim”</h2>
        <p>Exemplos ilustrativos para um consultório que atende crianças e orienta famílias:</p>
        <div className="inst-blog__table" role="region" aria-label="Exemplos de frases no tom de voz do consultório" tabIndex={0}>
          <table>
            <caption>Exemplos de frases no tom de voz do consultório</caption>
            <thead><tr><th scope="col">Princípio</th><th scope="col">É assim</th><th scope="col">Não é assim</th></tr></thead>
            <tbody>
              <tr><td>Claro</td><td>“O primeiro encontro é só com os responsáveis, para eu conhecer a história da criança.”</td><td>“Realizamos anamnese inicial em setting parental.”</td></tr>
              <tr><td>Acolhedor</td><td>“Se você não sabe por onde começar, pode me mandar uma mensagem com a sua dúvida.”</td><td>“Agende já! Vagas limitadas!”</td></tr>
              <tr><td>Sem promessa</td><td>“A orientação aos pais ajuda a pensar a rotina junto com a família.”</td><td>“Em 8 sessões seu filho vai dormir a noite toda.”</td></tr>
              <tr><td>Respeitoso</td><td>“Crianças autistas têm jeitos próprios de se comunicar.”</td><td>“Vencendo o autismo.”</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Palavras que você usa e palavras que evita</h2>
        <p>
          Uma lista curta resolve muita dúvida no dia a dia. Exemplo
          ilustrativo:
        </p>
        <ul>
          <li><strong>Usa:</strong> atendimento, acompanhamento, família, rotina, conversa, primeiro contato.</li>
          <li><strong>Evita:</strong> cura, garantido, transformação em X dias, o melhor, especialista (se você não tem o título), paciente-problema.</li>
        </ul>
        <p>
          Para quem fala de autismo e neurodivergência, essa lista conversa com a{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          e com o{" "}
          <a href={ANTICAPACITISTA} {...ext}>
            manual anticapacitista do CFP
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Onde o tom aparece</h2>
        <ul>
          <li>
            <strong>Bio e destaques do Instagram.</strong> Poucas palavras, por
            isso cada uma pesa. Veja{" "}
            <Link href="/blog/bio-instagram-psicologo-exemplos" className="inst-link">
              exemplos de bio
            </Link>
            .
          </li>
          <li>
            <strong>Mensagem automática e respostas rápidas do WhatsApp.</strong>{" "}
            Muitas vezes é o primeiro texto seu que a pessoa lê. Modelos em{" "}
            <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
              WhatsApp Business para psicólogo
            </Link>
            .
          </li>
          <li><strong>Site:</strong> título da página inicial, “sobre mim”, explicação de como funciona o primeiro contato.</li>
          <li><strong>Posts, legendas e vídeos.</strong></li>
          <li><strong>E-mails, contratos e lembretes.</strong> Também são marca.</li>
        </ul>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Copiar o tom de um perfil grande que fala com outro público.</li>
          <li>Escrever com jargão para parecer técnico, e afastar quem não é da área.</li>
          <li>Ser íntimo demais no perfil profissional, misturando vida pessoal e atendimento.</li>
          <li>Usar urgência de venda (“últimas vagas”), que soa como indução, vedada pelo art. 2º do Código.</li>
          <li>Ter um tom no Instagram e outro, burocrático, no WhatsApp.</li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Pais de crianças autistas costumam chegar depois de muitas consultas,
          muita leitura e, às vezes, muita culpa. Um tom que funciona com eles
          tende a ser calmo, concreto e sem pressa: explica o que acontece em
          cada etapa, evita metáforas de luta e “superação”, não fala da criança
          como um problema a corrigir e não promete marcos de desenvolvimento.
          Frases curtas e listas ajudam quem lê no celular, entre uma terapia e
          outra. O mesmo cuidado vale para o texto que você manda para a{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            escola
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Checklist do guia de tom de voz</h2>
        <ul>
          <li>Uma frase sobre quem lê.</li>
          <li>Três princípios, cada um com “é assim / não é assim”.</li>
          <li>Lista de palavras que usa e que evita.</li>
          <li>Modelos de: boas-vindas no WhatsApp, bio, resposta a pedido de valor, resposta a dúvida delicada.</li>
          <li>Nome completo, “psicóloga(o)” e CRP onde houver divulgação.</li>
          <li>Revisão a cada seis meses, ou quando o público mudar.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a identidade verbal (voz, tom, mensagens-chave e
          textos de base) sai junto com a identidade visual, nos dois encontros de
          imersão, com tudo entregue em até 30 dias e dentro do artigo 20 do Código de
          Ética. O passo a passo está na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>
          , e um exemplo de entrega está em{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser conversar sobre o jeito de falar do seu consultório, o
          primeiro passo é uma conversa de 15 minutos.
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
            , arts. 2º e 20.
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
            <a href={ANTICAPACITISTA} {...ext}>
              Manual orientativo para uma atuação anticapacitista na Psicologia
            </a>
            , 2025.
          </li>
        </ul>
      </section>
    </>
  )
};
