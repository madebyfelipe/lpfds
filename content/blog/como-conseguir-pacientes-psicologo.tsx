import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA =
  "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "como-conseguir-pacientes-psicologo",
  title: "Como conseguir pacientes como psicólogo sem ferir o Código de Ética",
  description:
    "Como conseguir pacientes como psicólogo com posicionamento, indicações, Google e Instagram, dentro do artigo 20 do Código de Ética e sem preço como chamariz.",
  keyword: "como conseguir pacientes psicólogo",
  tags: ["posicionamento", "presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-11",
  summary:
    "Para conseguir pacientes como psicólogo, defina para quem você atende, facilite que a pessoa encontre e reconheça você (Google, site, Instagram) e cuide da rede de quem indica. Tudo isso é publicidade profissional e segue o artigo 20 do Código de Ética: nome, CRP, sem preço como chamariz e sem promessa de resultado.",
  faq: [
    {
      q: "Qual é o jeito mais rápido de conseguir pacientes na psicologia?",
      a: "Não existe atalho seguro. O que costuma encurtar o caminho é deixar claro para quem você atende e aparecer onde essa pessoa procura: no Google, no perfil da empresa no Maps e na indicação de outros profissionais."
    },
    {
      q: "Psicólogo pode oferecer primeira sessão gratuita para atrair pacientes?",
      a: "Não como propaganda. O artigo 20 do Código de Ética veda usar o preço do serviço como forma de divulgação, e isso inclui gratuidade e desconto como chamariz."
    },
    {
      q: "Preciso estar no Instagram para ter pacientes?",
      a: "Não é obrigatório. Muita gente chega por busca no Google ou por indicação. O Instagram ajuda quando reforça o mesmo posicionamento do site e do perfil no Google, não quando vira mais uma tarefa sem direção."
    },
    {
      q: "Posso pedir para pacientes me indicarem?",
      a: "Cuidado com o pedido direto, que pode constranger quem está em atendimento. É mais seguro cuidar da rede de profissionais que indicam (escola, pediatra, fonoaudiologia) e deixar fácil encontrar seus dados."
    }
  ],
  cover: {
    src: "/blog/como-conseguir-pacientes-psicologo/como-conseguir-pacientes-psicologo-poltrona-e-planta.jpg",
    alt: "Poltrona branca ao lado de uma planta em um canto claro, sugerindo um consultório acolhedor",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A pergunta “como conseguir pacientes” aparece cedo na vida de quem abre
        um consultório, e quase sempre vem com uma dúvida junto: o que pode e o
        que não pode na divulgação. A boa notícia é que o caminho que funciona
        e o caminho ético são o mesmo. Este texto organiza esse caminho em cinco
        frentes, da mais estrutural à mais operacional.
      </p>

      <section>
        <h2>Antes de divulgar: para quem você atende?</h2>
        <p>
          “Atendo adultos, adolescentes e crianças, presencial e online, em
          várias abordagens” descreve a maioria dos consultórios e, por isso, não
          ajuda ninguém a escolher você. Quem procura terapia procura alguém para
          uma situação: a mãe que acabou de receber o diagnóstico de autismo do
          filho, o adulto com ansiedade no trabalho, o casal em crise.
        </p>
        <p>
          Definir um público não impede de atender outros; só decide para quem a
          comunicação fala primeiro. Esse é o trabalho de{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>
          , e ele vem antes de logo, site ou anúncio.
        </p>
      </section>

      <section>
        <h2>As regras que valem para todas as frentes</h2>
        <p>
          Toda forma de divulgação dos seus serviços é publicidade profissional
          e segue o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética Profissional do Psicólogo
          </a>
          . Na prática:
        </p>
        <ul>
          <li>nome completo, psicólogo(a) e CRP com número em toda peça;</li>
          <li>só títulos e qualificações que você tem;</li>
          <li>nada de preço, desconto ou gratuidade como chamariz;</li>
          <li>nada de previsão taxativa de resultado (“supere a ansiedade em 8 sessões”);</li>
          <li>nada de sensacionalismo nem autopromoção em detrimento de colegas.</li>
        </ul>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica nº 01/2022 do CFP
          </a>{" "}
          aplica essas regras às redes sociais, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          traz exemplos do que pode e do que não pode. O resumo do estúdio está
          em{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            marketing para psicólogos e o Código de Ética
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>1. Ser encontrado no Google</h2>
        <p>
          Boa parte de quem procura terapia começa por uma busca: “psicólogo
          infantil perto de mim”, “psicóloga para autismo em Sorocaba”. Duas
          peças respondem a essa busca:
        </p>
        <ul>
          <li>
            <strong>Perfil da Empresa no Google</strong> (o antigo Google Meu
            Negócio), que aparece no Maps e na busca local. O passo a passo está
            em{" "}
            <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
              Google Meu Negócio para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Site próprio</strong>, com uma página que diga para quem você
            atende, como funciona o primeiro contato e onde fica o consultório.
            Veja{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site para psicólogo
            </Link>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Ser reconhecido quando alguém indica</h2>
        <p>
          Indicação ainda é uma das portas principais. Só que, depois de receber
          o seu nome, a pessoa quase sempre pesquisa antes de chamar. Se o que ela
          encontra é um perfil sem foto, sem CRP e com uma bio genérica, a
          indicação esfria. Nome, foto, público e contato precisam ser os mesmos
          no Google, no site, no Instagram e no{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita
          </Link>
          . É isso que uma{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual consistente
          </Link>{" "}
          resolve.
        </p>
      </section>

      <section>
        <h2>3. Cuidar da rede de quem indica</h2>
        <p>
          Para quem atende crianças e famílias, a rede costuma ser formada por
          escolas, pediatras, neuropediatras, fonoaudiólogas e terapeutas
          ocupacionais. Algumas formas éticas de cuidar dela:
        </p>
        <ul>
          <li>apresentar o seu trabalho a esses profissionais, com material claro sobre público e formato;</li>
          <li>combinar o retorno ao profissional que indicou, quando a família autorizar;</li>
          <li>participar de eventos e formações da área, como colega, não como vendedor.</li>
        </ul>
        <p>
          O artigo 20 continua valendo aqui: nada de pagar comissão por
          encaminhamento nem de prometer resultado ao profissional que indica.
        </p>
      </section>

      <section>
        <h2>4. Instagram com direção</h2>
        <p>
          O Instagram funciona melhor como vitrine do seu posicionamento do que
          como máquina de captação. Bio com nome, CRP e público; destaques que
          respondem às dúvidas mais comuns; posts que ajudam a pessoa a entender
          se o seu atendimento é para ela. Detalhes em{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Facilitar o primeiro contato</h2>
        <p>
          Muita gente desiste entre o “gostei” e o “marquei”. Alguns cuidados
          diminuem esse atrito:
        </p>
        <ul>
          <li>um número de WhatsApp profissional, com resposta em prazo previsível;</li>
          <li>uma mensagem de saudação que explica como funciona o agendamento;</li>
          <li>informação clara sobre presencial ou online e sobre onde fica o consultório;</li>
          <li>valores informados na conversa, quando a pessoa pergunta, e não em anúncio.</li>
        </ul>
      </section>

      <section>
        <h2>O que costuma não funcionar</h2>
        <ul>
          <li>
            Postar todos os dias sem saber para quem. Volume sem posicionamento
            cansa você e não diferencia o consultório.
          </li>
          <li>
            Usar preço baixo como argumento. Além de vedado como chamariz, atrai
            quem escolhe pelo preço e sai na primeira alternativa mais barata.
          </li>
          <li>
            Publicar{" "}
            <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
              depoimento de paciente
            </Link>
            , o que expõe o sigilo e a relação terapêutica.
          </li>
          <li>Trocar de identidade visual a cada poucos meses.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia a partir
          de dois encontros de imersão: posicionamento, identidade visual e verbal, entregues em até
          30 dias, dentro do artigo 20 do Código de Ética. É a base que faz o
          Google, o site, o Instagram e a indicação falarem a mesma coisa. Se
          quiser conversar sobre o seu consultório, o primeiro passo é uma
          conversa de 15 minutos.
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
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica nº 01/2022 — Uso Profissional das Redes Sociais: Publicidade e Cuidados Éticos
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
        </ul>
      </section>
    </>
  )
};
