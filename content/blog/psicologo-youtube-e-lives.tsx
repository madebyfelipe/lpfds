import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA =
  "https://site.cfp.org.br/documentos/nota-tecnica-sobre-uso-profissional-das-redes-sociais-publicidade-e-cuidados-eticos";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "psicologo-youtube-e-lives",
  title: "Psicólogo pode fazer vídeos no YouTube e lives? Regras e cuidados",
  description:
    "Psicólogo pode fazer vídeos e lives? Veja o que o Código de Ética e a Nota Técnica do CFP pedem: CRP visível, sem caso clínico e sem diagnóstico ao vivo.",
  keyword: "psicólogo pode fazer live no youtube",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-12",
  summary:
    "Psicólogo pode fazer vídeos no YouTube e lives, como forma de divulgar o trabalho e de levar informação ao público. Valem as regras do artigo 20 do Código de Ética e da Nota Técnica nº 01/2022 do CFP: nome completo e CRP visíveis, nada de caso clínico, de diagnóstico ao vivo ou de promessa de resultado, e atenção ao sigilo nos comentários e nas perguntas do público.",
  faq: [
    {
      q: "Posso responder perguntas do público ao vivo sobre casos pessoais?",
      a: "Responda de forma geral e informativa. Evite avaliar o caso de quem pergunta, dar diagnóstico ou orientar conduta individual, porque isso não substitui um atendimento e pode expor a pessoa na frente de outros."
    },
    {
      q: "Preciso colocar o CRP no vídeo?",
      a: "Sim. O artigo 20 pede nome completo, CRP e número de registro em toda divulgação. No YouTube, ponha na descrição do canal e do vídeo; em lives, fale e mostre também na tela."
    },
    {
      q: "Posso convidar um paciente para participar de um vídeo?",
      a: "Não é recomendado. A relação terapêutica e o sigilo ficam em risco, e o consentimento pode não ser livre. Convide colegas, pesquisadores ou pessoas sem vínculo de atendimento."
    },
    {
      q: "Posso monetizar o canal ou receber patrocínio?",
      a: "Monetização de plataforma é um tema que vale conferir com o seu CRP. Em qualquer caso, a vedação de preço e promessa como chamariz continua, e patrocínio de produto deve ser claramente identificado."
    }
  ],
  body: (
    <>
      <p>
        Vídeo e live atingem pessoas que não leriam um artigo, e mostram como
        você fala, o que ajuda a família a decidir se quer conversar com você.
        Por isso muitos psicólogos pensam em abrir um canal. A dúvida é se pode
        e como. Este texto resume as regras e os cuidados.
      </p>

      <section>
        <h2>Pode. Com as regras de sempre</h2>
        <p>
          Vídeo e live são formas de divulgação e seguem o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>
          , que exige nome completo, CRP e número de registro, e veda o preço
          como forma de propaganda, a previsão taxativa de resultados e a
          divulgação sensacionalista. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica nº 01/2022 do CFP
          </a>{" "}
          trata especificamente do uso profissional das redes sociais, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          traz exemplos práticos.
        </p>
      </section>

      <section>
        <h2>O que fica de fora</h2>
        <ul>
          <li>Caso clínico, mesmo com nome trocado.</li>
          <li>Diagnóstico ao vivo ou “avaliação” de quem comenta.</li>
          <li>Pacientes ou crianças atendidas como convidados ou figurantes.</li>
          <li>Promessas como “acabe com a ansiedade” e preço ou gratuidade como isca.</li>
          <li>Títulos de vídeo que apelam ao medo (“se seu filho faz isso, é autismo”).</li>
        </ul>
      </section>

      <section>
        <h2>Ao vivo: comentários e sigilo</h2>
        <p>
          A live tem um risco extra: o público fala, e fala de si. Combine as
          regras antes:
        </p>
        <ul>
          <li>avise que a live é informativa e não substitui atendimento;</li>
          <li>quando alguém contar um caso pessoal, responda de forma geral e sugira buscar atendimento;</li>
          <li>modere comentários que exponham terceiros;</li>
          <li>deixe a gravação disponível só se você tiver revisado o que foi dito.</li>
        </ul>
        <p>
          Para o canal de WhatsApp ou direct, veja{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como organizar o canal</h2>
        <ul>
          <li>
            <strong>Descrição do canal</strong>: nome completo, psicólogo(a), CRP
            e para quem é o conteúdo.
          </li>
          <li>
            <strong>Títulos claros</strong>, que respondem a uma pergunta (“O que
            é orientação parental?”).
          </li>
          <li>
            <strong>Legenda</strong>: ajuda quem assiste sem som e quem tem
            deficiência auditiva.
          </li>
          <li>
            <strong>Identidade visual</strong> igual à do site e do Instagram.
          </li>
        </ul>
        <p>
          Ideias de tema para famílias estão em{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>
          , e o básico das redes em{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Um canal de vídeo
          funciona melhor quando fala com o mesmo tom e a mesma identidade que o
          resto da marca. Se quiser conversar sobre a sua marca, o primeiro
          passo é uma conversa de 15 minutos.
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
