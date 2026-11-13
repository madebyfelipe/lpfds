import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const RES11 = "https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf";

export const post: Post = {
  slug: "bio-instagram-psicologo-exemplos",
  title: "Bio de psicólogo no Instagram: exemplos e o que o Código de Ética permite",
  description:
    "Exemplos de bio de psicólogo no Instagram, com estrutura em 5 linhas, o que colocar (nome, CRP, público) e o que evitar para respeitar o artigo 20.",
  keyword: "bio de psicólogo no instagram exemplos",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-12",
  summary:
    "A bio de psicólogo no Instagram deve dizer quem você é, o que faz e para quem, com nome completo e CRP, e levar a um único contato. O artigo 20 do Código de Ética veda previsão taxativa de resultados, preço como propaganda e título que você não possui. Os exemplos abaixo são modelos para adaptar, não textos prontos.",
  faq: [
    {
      q: "A bio precisa ter o CRP?",
      a: "O artigo 20 pede que a divulgação informe nome completo, CRP e número de registro. Coloque-os na bio ou em um destaque visível do perfil."
    },
    {
      q: "Posso escrever “especialista em autismo” na bio?",
      a: "Só se você possui o título de especialista na área. O artigo 20 permite citar apenas títulos e qualificações que o profissional tem. Sem o título, descreva a atuação: “atendo famílias de crianças autistas”."
    },
    {
      q: "Posso colocar o valor da sessão ou “primeira consulta grátis”?",
      a: "Não. Preço e gratuidade como chamariz entram no que o artigo 20 veda. Valores se informam a quem pergunta, no contato direto."
    },
    {
      q: "Quantos links colocar na bio?",
      a: "Um é suficiente: o WhatsApp do consultório ou a página do site. Muitos links confundem quem só quer entrar em contato."
    }
  ],
  cover: {
    src: "/blog/bio-instagram-psicologo-exemplos/bio-instagram-psicologo-exemplos-celular-e-folhas.jpg",
    alt: "Celular com a tela em branco sobre papéis e folhas em tons de rosa, visto de cima",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A bio é a primeira coisa que alguém lê ao abrir o perfil. Com poucos
        caracteres, ela precisa dizer quem você é, para quem trabalha e como
        falar com você, sem cair em promessa nem em autoelogio. Aqui vão uma
        estrutura e exemplos para adaptar.
      </p>

      <section>
        <h2>Estrutura de uma bio em 5 linhas</h2>
        <ol>
          <li><strong>Nome e profissão:</strong> “Nome Sobrenome · Psicóloga”.</li>
          <li><strong>CRP:</strong> “CRP 00/00000”.</li>
          <li><strong>Público e abordagem:</strong> “Atendimento a crianças e famílias”.</li>
          <li><strong>Modalidade e local:</strong> “Presencial em Cidade · online”.</li>
          <li><strong>Chamada para o contato:</strong> “Contato pelo link abaixo”.</li>
        </ol>
      </section>

      <section>
        <h2>Exemplos para adaptar</h2>
        <p>Os exemplos abaixo são modelos fictícios. Troque nome, CRP, cidade e público pelos seus.</p>
        <p><strong>Psicóloga infantil</strong></p>
        <blockquote>
          Nome Sobrenome · Psicóloga<br />
          CRP 00/00000<br />
          Atendimento a crianças e orientação a famílias<br />
          Presencial em Cidade · online<br />
          Contato pelo link abaixo
        </blockquote>
        <p><strong>Atuação com autismo e neurodivergência</strong></p>
        <blockquote>
          Nome Sobrenome · Psicólogo<br />
          CRP 00/00000<br />
          Atendo crianças autistas e suas famílias<br />
          Uma visão que respeita o jeito de cada criança<br />
          Agende uma conversa pelo link
        </blockquote>
        <p><strong>Psicoterapia para adultos</strong></p>
        <blockquote>
          Nome Sobrenome · Psicóloga clínica<br />
          CRP 00/00000<br />
          Psicoterapia para adultos, presencial e online<br />
          Cidade · segunda a sexta<br />
          Informações no link
        </blockquote>
      </section>

      <section>
        <h2>O que o artigo 20 pede e proíbe na bio</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          determina que a divulgação informe nome completo, CRP e número de
          registro e cite só títulos e qualificações que o psicólogo possui. Ele
          veda previsão taxativa de resultados, uso do preço como propaganda,
          sensacionalismo e autopromoção em detrimento de colegas. Na bio, isso
          vira:
        </p>
        <ul>
          <li>sem “resultado garantido” nem “transforme sua vida”;</li>
          <li>sem “primeira sessão grátis”, “valor social” ou “promoção”;</li>
          <li>sem “o melhor”, “número 1” ou “referência”;</li>
          <li>sem título que você não tem (“especialista”, “mestre” etc.);</li>
          <li>sem diagnóstico ou frases que prometam cura.</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          e a{" "}
          <a href={NOTA} {...ext}>
            nota técnica do CFP sobre redes sociais
          </a>{" "}
          dão mais exemplos.
        </p>
      </section>

      <section>
        <h2>Perfil profissional, não pessoal</h2>
        <p>
          Se possível, mantenha um perfil só do consultório, separado do pessoal.
          Isso evita misturar vida privada e divulgação profissional. O artigo{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>{" "}
          detalha destaques, feed e legendas.
        </p>
      </section>

      <section>
        <h2>Link, foto e destaques</h2>
        <ul>
          <li>
            <strong>Foto:</strong> a sua, com boa luz (veja{" "}
            <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
              foto profissional para psicólogo
            </Link>
            ).
          </li>
          <li>
            <strong>Link:</strong> o WhatsApp do consultório (veja{" "}
            <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
              WhatsApp Business para psicólogo
            </Link>
            ) ou a página do site.
          </li>
          <li>
            <strong>Destaques:</strong> “Sobre”, “Como funciona”, “Dúvidas” e
            “Contato”, em vez de destaque de casos ou de relatos.
          </li>
        </ul>
      </section>

      <section>
        <h2>Revise a bio a cada seis meses</h2>
        <p>
          Conferir se o CRP, a cidade, a modalidade e o contato continuam certos
          leva cinco minutos. Se você mudou de público ou de abordagem, atualize
          junto com o site, para que os dois contem a mesma história.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia a partir
          de dois encontros de imersão: posicionamento, identidade visual e verbal, entregues em até
          30 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
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
            CRP-MG.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional
            </a>
            , abril de 2026.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota técnica sobre uso profissional das redes sociais, publicidade e cuidados éticos
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
