import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA =
  "https://site.cfp.org.br/documentos/nota-tecnica-sobre-uso-profissional-das-redes-sociais-publicidade-e-cuidados-eticos";
const BOTTEMA = "https://doi.org/10.1089/aut.2020.0014";

export const post: Post = {
  slug: "marca-psicologo-tdah",
  title: "Marca para psicólogo que atende TDAH: como comunicar sem rótulo nem promessa",
  description:
    "Como comunicar o atendimento a pessoas com TDAH: linguagem respeitosa, sem diagnóstico a distância, sem promessa de resultado e dentro do Código de Ética.",
  keyword: "marca para psicólogo TDAH",
  tags: ["neurodivergencia", "posicionamento"],
  publishedAt: "2026-11-12",
  summary:
    "Comunicar o atendimento a pessoas com TDAH pede linguagem que descreva o trabalho sem rotular a pessoa, sem “testes” de diagnóstico a distância e sem promessa de resultado, como exige o artigo 20 do Código de Ética. Funciona melhor quando o site e as redes explicam para quem é o atendimento, como é o primeiro encontro e como o consultório se adapta a quem tem dificuldade de organização e atenção.",
  faq: [
    {
      q: "Posso postar “10 sinais de TDAH” no Instagram?",
      a: "Com cuidado. Listas de sinais incentivam autodiagnóstico e confundem características comuns com um quadro clínico. Prefira conteúdo que explique o que é uma avaliação, quem a faz e como procurar ajuda, sem sugerir que o post substitui um diagnóstico."
    },
    {
      q: "Psicólogo pode prometer “foco” ou “produtividade” a quem tem TDAH?",
      a: "Não. O artigo 20 veda a previsão taxativa de resultados. Descreva o que o atendimento trabalha (organização, rotina, estratégias), sem prometer o que a pessoa vai alcançar."
    },
    {
      q: "Preciso falar de TDAH de forma diferente para adultos e para crianças?",
      a: "Sim. Para os pais, o foco é entender o comportamento, a escola e a rotina da família. Para adultos, entram trabalho, estudo e diagnóstico tardio. Falar com cada público em páginas ou posts distintos deixa a mensagem mais clara."
    },
    {
      q: "Vale usar a linguagem neuroafirmativa também para TDAH?",
      a: "Vale. A ideia de tratar o funcionamento neurodivergente como parte de quem a pessoa é, sem tratá-lo como defeito, aplica-se ao TDAH. Evite expressões que culpem a pessoa (“preguiça”, “desorganizada”) e que a descrevam só pelas dificuldades."
    }
  ],
  cover: {
    src: "/blog/marca-psicologo-tdah/marca-psicologo-tdah-caderno-e-post-its.jpg",
    alt: "Caderno de espiral com post-its e lápis sobre uma mesa de madeira clara, organização de tarefas",
    caption: "Foto: ijeab / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O interesse por TDAH, em especial por diagnóstico na vida adulta, cresceu
        nas redes, e com ele os conteúdos que prometem “identificar em um minuto”
        e “resolver a rotina”. Para quem atende, a oportunidade é ser uma fonte
        clara em meio ao excesso. O desafio é comunicar sem rotular, sem
        diagnosticar a distância e sem prometer o que o atendimento não pode
        garantir.
      </p>

      <section>
        <h2>O que o Código de Ética pede</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20
          </a>{" "}
          vale para todo conteúdo que divulga o seu trabalho. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica nº 01/2022 do CFP
          </a>{" "}
          aplica as regras às redes sociais. Para um consultório que atende
          TDAH, isso significa:
        </p>
        <ul>
          <li>nome completo, psicólogo(a) e CRP visíveis no perfil e no site;</li>
          <li>nenhuma previsão taxativa de resultado (“mais foco em 8 sessões”);</li>
          <li>nenhum teste ou lista que sugira diagnóstico a distância;</li>
          <li>nenhuma imagem ou relato de atendimento.</li>
        </ul>
      </section>

      <section>
        <h2>Linguagem que descreve, não rotula</h2>
        <p>
          Duas escolhas ajudam: descrever o que você faz em vez de classificar
          quem procura, e evitar palavras que culpem. Compare:
        </p>
        <ul>
          <li>
            “Para quem é desorganizado e procrastina” → “Para quem tem
            dificuldade de organizar tempo, tarefas e atenção, com ou sem
            diagnóstico”.
          </li>
          <li>
            “Tratamento do TDAH” → “Acompanhamento psicológico para pessoas com
            TDAH ou suspeita de TDAH”, com a ressalva de que a avaliação segue o
            fluxo adequado.
          </li>
        </ul>
        <p>
          O texto de{" "}
          <a href={BOTTEMA} {...ext}>
            Bottema-Beutel e colegas
          </a>
          , escrito sobre autismo, traz princípios de linguagem que ajudam
          também aqui. Mais em{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem você escreve</h2>
        <ul>
          <li>
            <strong>Pais de crianças e adolescentes</strong>: escola, rotina da
            casa, como entender o comportamento, como funciona o atendimento e a
            orientação aos pais.
          </li>
          <li>
            <strong>Adultos</strong>: trabalho, estudo, diagnóstico tardio,
            organização do dia a dia.
          </li>
        </ul>
        <p>
          Separar esses dois públicos no site evita uma mensagem genérica. Se o
          foco do consultório são as famílias, o texto de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental
          </Link>{" "}
          é uma boa continuação.
        </p>
      </section>

      <section>
        <h2>Adapte o primeiro contato</h2>
        <p>
          Quem tem dificuldade de organização e atenção costuma se perder em
          etapas longas de agendamento. Alguns cuidados no site e no WhatsApp:
        </p>
        <ul>
          <li>um único botão para agendar, sempre no mesmo lugar;</li>
          <li>mensagem curta explicando o passo a passo do primeiro encontro;</li>
          <li>lembrete antes da sessão, com horário e endereço, combinado com a pessoa;</li>
          <li>texto escaneável, com títulos e listas curtas.</li>
        </ul>
        <p>
          Isso também vale para a acessibilidade do{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A identidade verbal
          define como o consultório fala de TDAH e de neurodivergência. Se
          quiser conversar sobre a sua marca, o primeiro passo é uma conversa de
          15 minutos.
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
            Bottema-Beutel, K. et al.{" "}
            <a href={BOTTEMA} {...ext}>
              Avoiding Ableist Language: Suggestions for Autism Researchers
            </a>
            . <em>Autism in Adulthood</em>.
          </li>
        </ul>
      </section>
    </>
  )
};
