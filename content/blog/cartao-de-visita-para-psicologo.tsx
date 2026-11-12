import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const WCAG = "https://www.w3.org/TR/WCAG21/#contrast-minimum";

export const post: Post = {
  slug: "cartao-de-visita-para-psicologo",
  title: "Cartão de visita para psicólogo: o que colocar (e o que o art. 20 proíbe)",
  description:
    "O que um cartão de visita de psicólogo precisa ter: nome, CRP, contato e público, o que fica de fora pelo Código de Ética e como fazer a versão virtual.",
  keyword: "cartão de visita para psicólogo",
  tags: ["divulgacao-etica", "identidade-visual"],
  publishedAt: "2026-11-10",
  summary:
    "O cartão de visita de psicólogo é publicidade profissional, então segue o artigo 20 do Código de Ética: nome completo, a palavra psicólogo(a) e o CRP com número são obrigatórios. Some um contato, o público e o formato de atendimento, e deixe de fora preço, promessa de resultado e títulos que você não tem. A versão virtual segue as mesmas regras.",
  faq: [
    {
      q: "O CRP é obrigatório no cartão de visita do psicólogo?",
      a: "Sim. O artigo 20 do Código de Ética pede que, ao divulgar os seus serviços por qualquer meio, o psicólogo informe o nome completo, o CRP e o número de registro. O cartão é um desses meios."
    },
    {
      q: "Posso colocar o valor da sessão no cartão?",
      a: "Não como forma de propaganda. O artigo 20 veda usar o preço do serviço como chamariz, e isso inclui expressões como “primeira sessão grátis” ou “valor social”."
    },
    {
      q: "Cartão de visita virtual vale como cartão?",
      a: "Vale e segue as mesmas regras. Pode ser uma imagem para enviar no WhatsApp, um QR code ou uma página curta com os seus dados; em todos os casos, nome, psicólogo(a) e CRP precisam aparecer."
    },
    {
      q: "Posso usar “Dr.” ou “Dra.” no cartão?",
      a: "Só se você tiver doutorado. O artigo 20 permite citar apenas títulos e qualificações que você possui."
    }
  ],
  cover: {
    src: "/blog/cartao-de-visita-para-psicologo/cartao-de-visita-para-psicologo-cartoes-em-branco.jpg",
    alt: "Cartões de visita em branco empilhados sobre uma mesa de madeira escura ao lado de um teclado",
    caption: "Foto: zaozaa09 / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O cartão de visita parece um detalhe, mas ele circula sem você: fica na
        recepção da escola, no consultório do pediatra, na bolsa de quem pediu
        uma indicação. Quando alguém o tira da carteira semanas depois, ele
        precisa dizer em segundos quem você é, o que faz e como falar com você.
        Este texto organiza o que entra, o que fica de fora e como fazer a
        versão impressa e a virtual.
      </p>

      <section>
        <h2>Cartão de visita é publicidade profissional</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética Profissional do Psicólogo
          </a>{" "}
          vale para quem divulga os próprios serviços “por quaisquer meios”. O
          cartão está incluído, assim como o site, o Instagram e o perfil no
          Google. Em resumo, o artigo pede que você:
        </p>
        <ul>
          <li>informe o nome completo, o CRP e o número de registro;</li>
          <li>cite só títulos e qualificações que você possui;</li>
          <li>divulgue só técnicas e práticas reconhecidas pela profissão;</li>
          <li>não use o preço do serviço como forma de propaganda;</li>
          <li>não faça previsão taxativa de resultados;</li>
          <li>não faça divulgação sensacionalista.</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          detalha essas regras com exemplos e é uma boa leitura antes de mandar
          qualquer material para a gráfica.
        </p>
      </section>

      <section>
        <h2>O que colocar no cartão</h2>
        <ol>
          <li>
            <strong>Nome completo</strong>, na mesma versão usada no site, no
            Instagram e nos documentos.
          </li>
          <li>
            <strong>Psicólogo(a) e CRP com número</strong>, com a sigla do
            regional (ex.: CRP 06/XXXXX, ilustrativo). É obrigatório.
          </li>
          <li>
            <strong>Para quem e como você atende</strong>, em uma linha:
            “Crianças, adolescentes e orientação a pais · presencial e online”.
          </li>
          <li>
            <strong>Um ou dois contatos</strong>: o número de WhatsApp
            profissional e o site ou o Instagram. Mais que isso vira ruído.
          </li>
          <li>
            <strong>Endereço</strong>, se houver atendimento presencial. Se o
            atendimento for só online, diga isso.
          </li>
        </ol>
        <p>
          Abordagem e formação entram se ajudarem a pessoa a se reconhecer, e
          desde que sejam títulos reais: especialização concluída, não curso
          livre apresentado como especialização.
        </p>
      </section>

      <section>
        <h2>O que fica de fora</h2>
        <ul>
          <li>Preço, desconto, “primeira sessão grátis” ou “valor social” como chamariz (veja{" "}
            <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
              psicólogo pode divulgar preço?
            </Link>
            ).
          </li>
          <li>Promessas como “supere a ansiedade” ou “resultados em poucas sessões”.</li>
          <li>“Dr.” ou “Dra.” sem doutorado.</li>
          <li>Superlativos: “a melhor”, “referência em”, “especialista número 1”.</li>
          <li>Lista longa de transtornos ou diagnósticos, que soa como cardápio.</li>
          <li>Imagem de sessão, de criança atendida ou de material de atendimento.</li>
        </ul>
      </section>

      <section>
        <h2>Design: o cartão é a marca em miniatura</h2>
        <p>
          O cartão usa o logo, as cores e as fontes da sua identidade visual.
          Quando ele não conversa com o site e o Instagram, quem recebe a
          indicação não reconhece você depois. Alguns cuidados:
        </p>
        <ul>
          <li>
            <strong>Hierarquia clara.</strong> Nome primeiro, depois psicólogo(a)
            e CRP, depois o contato. O verso pode levar a linha de público e o
            QR code.
          </li>
          <li>
            <strong>Texto legível.</strong> Fontes finas e muito pequenas somem na
            impressão. Confira a prova impressa, não só a tela.
          </li>
          <li>
            <strong>Contraste.</strong> Texto claro sobre fundo pastel costuma
            ficar ilegível; a{" "}
            <a href={WCAG} {...ext}>
              WCAG 2.1
            </a>{" "}
            pede 4,5:1 para texto comum, uma boa referência também no papel.
          </li>
          <li>
            <strong>Espaço livre.</strong> Um cartão com respiro passa calma; um
            cartão lotado passa pressa.
          </li>
          <li>
            <strong>Arquivo para a gráfica.</strong> Peça à gráfica as
            especificações dela (medida, sangria, cores) antes de fechar a arte.
          </li>
        </ul>
        <p>
          Se você ainda não tem esses elementos definidos, comece por{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          . Quem atende crianças encontra exemplos em{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Cartão de visita virtual</h2>
        <p>
          Boa parte das indicações hoje acontece por mensagem. Ter uma versão
          digital do cartão evita digitar os mesmos dados toda vez. Há três
          formatos comuns:
        </p>
        <ul>
          <li>
            <strong>Imagem para o WhatsApp</strong>: o mesmo layout do impresso,
            na vertical, para enviar e salvar.
          </li>
          <li>
            <strong>QR code</strong> no verso do impresso, levando ao site ou ao
            WhatsApp com uma mensagem já preparada.
          </li>
          <li>
            <strong>Página curta</strong> com nome, CRP, público, formato e
            contato. Pode ser uma seção do seu{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site de psicólogo
            </Link>
            , o que ainda ajuda a ser encontrado no Google.
          </li>
        </ul>
        <p>
          As regras são as mesmas do impresso: nome, psicólogo(a) e CRP
          visíveis, sem preço como chamariz e sem promessa.
        </p>
      </section>

      <section>
        <h2>Para quem atende crianças e famílias</h2>
        <p>
          Se o seu consultório atende crianças — em especial famílias de
          crianças autistas ou neurodivergentes —, o cartão é lido pelos pais e,
          muitas vezes, entregue por outro profissional: a escola, a
          fonoaudióloga, o pediatra. Escreva para esse adulto:
        </p>
        <ul>
          <li>Diga que há orientação aos pais, se houver.</li>
          <li>Use a mesma forma de falar sobre autismo e neurodivergência do site e das redes.</li>
          <li>Evite ilustrações infantis genéricas; a identidade pode ser acolhedora sem parecer material escolar.</li>
          <li>Deixe alguns cartões com quem costuma indicar você, com o seu consentimento sobre onde ficam.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de imprimir</h2>
        <ul>
          <li>Nome completo, psicólogo(a) e CRP com número?</li>
          <li>Uma linha clara sobre público e formato?</li>
          <li>Contato que você realmente responde?</li>
          <li>Logo, cores e fontes iguais às do site e do Instagram?</li>
          <li>Nenhum preço, promessa, superlativo ou título que você não tem?</li>
          <li>Prova impressa conferida?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. O cartão de visita sai
          da mesma identidade que o site e o Instagram. Se quiser conversar
          sobre a sua marca, o primeiro passo é uma conversa de 15 minutos.
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
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              WCAG 2.1, critério 1.4.3
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
