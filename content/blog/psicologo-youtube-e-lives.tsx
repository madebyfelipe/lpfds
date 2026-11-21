import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA =
  "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
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
  updatedAt: "2026-11-21",
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
    },
    {
      q: "Preciso de equipamento caro para começar um canal?",
      a: "Não necessariamente. Um celular, luz de janela de frente e um microfone de lapela simples já deixam o vídeo claro. Som limpo pesa mais que imagem perfeita."
    },
    {
      q: "Posso fazer live com outro psicólogo ou com outro profissional?",
      a: "Pode, e costuma enriquecer o tema. Os dois aparecem com nome e registro profissional, e as mesmas regras valem para os dois: nada de caso clínico, diagnóstico ao vivo ou promessa."
    }
  ],
  cover: {
    src: "/blog/psicologo-youtube-e-lives/psicologo-youtube-e-lives-microfone-e-notebook.jpg",
    alt: "Microfone, notebook e fones de ouvido sobre uma mesa perto da janela, estação de gravação",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
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
        <h2>Erros comuns em vídeos e lives de psicólogos</h2>
        <ul>
          <li>
            <strong>Começar sem dizer quem fala.</strong> Quem chega pelo
            YouTube muitas vezes não conhece você. Diga nome, profissão e CRP
            no começo e deixe escrito na descrição, como pede o artigo 20.
          </li>
          <li>
            <strong>Usar uma história de consultório para “ilustrar”.</strong>{" "}
            Mesmo com nome trocado, detalhes como idade, escola ou bairro podem
            identificar a pessoa. Prefira explicar o tema em termos gerais.
          </li>
          <li>
            <strong>Responder a pergunta individual como se fosse sessão.</strong>{" "}
            Na live, a vontade de ajudar quem escreveu é grande. A resposta
            geral protege quem perguntou e quem assiste.
          </li>
          <li>
            <strong>Título e miniatura em tom de alarme.</strong> Frases como
            “os sinais que ninguém te conta” chamam clique pelo medo, o que o
            Código chama de divulgação sensacionalista.
          </li>
          <li>
            <strong>Deixar a gravação no ar sem rever.</strong> Ao vivo escapa
            uma frase mal colocada ou um comentário que expõe alguém. Reveja
            antes de manter o vídeo público.
          </li>
          <li>
            <strong>Usar música ou trecho de vídeo de terceiros sem licença.</strong>{" "}
            Isso pode derrubar o vídeo. Veja{" "}
            <Link href="/blog/psicologo-direito-autoral-redes" className="inst-link">
              direito autoral nas redes
            </Link>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>Exemplo ilustrativo: roteiro de uma live informativa</h2>
        <p>
          <em>Exemplo fictício, só para mostrar a estrutura.</em> Uma psicóloga
          que atende crianças marca uma live sobre “rotina de sono nas férias”:
        </p>
        <ol>
          <li>
            <strong>Abertura:</strong> nome, “psicóloga”, CRP e o aviso de que a
            live é informativa e não substitui atendimento.
          </li>
          <li>
            <strong>Tema em três partes:</strong> por que a rotina muda nas
            férias, o que costuma ajudar em casa e quando vale procurar um
            profissional.
          </li>
          <li>
            <strong>Perguntas:</strong> ela lê as perguntas em voz alta sem
            nomes e responde de forma geral. A quem descreve um caso, sugere
            buscar atendimento.
          </li>
          <li>
            <strong>Fechamento:</strong> onde encontrar o site e como funciona o
            primeiro contato, sem preço, sem desconto e sem “vagas limitadas”.
          </li>
        </ol>
        <p>
          Depois, ela corta um trecho curto com uma das explicações e publica
          com legenda. Para vídeos curtos, veja{" "}
          <Link href="/blog/psicologo-tiktok" className="inst-link">
            psicólogo no TikTok
          </Link>
          ; para o vídeo que apresenta você no site,{" "}
          <Link href="/blog/video-apresentacao-psicologo" className="inst-link">
            vídeo de apresentação
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas, com TDAH ou outras condições costumam
          buscar vídeos quando ainda estão com dúvida, muitas vezes antes de
          qualquer avaliação. Isso pede alguns cuidados a mais:
        </p>
        <ul>
          <li>
            <strong>Nada de “teste” ou lista de sinais para conferir em casa.</strong>{" "}
            Em vídeo, isso vira diagnóstico à distância. Explique o que é uma
            avaliação e quem faz.
          </li>
          <li>
            <strong>Linguagem respeitosa.</strong> Evite falar da criança como
            problema a corrigir. O guia de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajuda a revisar o roteiro.
          </li>
          <li>
            <strong>Nenhuma criança atendida no vídeo,</strong> nem de costas,
            nem com o rosto borrado, nem desenho dela.
          </li>
          <li>
            <strong>Acessibilidade.</strong> Legenda, fala sem pressa, pouco
            efeito sonoro e sem luz piscando. Muitos pais também são
            neurodivergentes e agradecem.
          </li>
        </ul>
        <p>
          Se você prefere falar com grupos de pais ao vivo e presencial, veja{" "}
          <Link href="/blog/psicologo-palestra-para-pais" className="inst-link">
            palestra para pais
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Checklist antes de publicar ou entrar ao vivo</h2>
        <ol>
          <li>Nome completo, “psicóloga(o)” e CRP aparecem no vídeo e na descrição?</li>
          <li>O título responde a uma pergunta, sem medo nem promessa?</li>
          <li>Nenhum caso, paciente ou criança atendida aparece ou é descrito?</li>
          <li>Há aviso de que o conteúdo é informativo?</li>
          <li>Os comentários vão ser moderados durante e depois?</li>
          <li>Música, imagens e trechos usados têm licença?</li>
          <li>O vídeo tem legenda?</li>
          <li>A descrição leva para o site ou para uma página com informação completa?</li>
        </ol>
        <p>
          Para quem prefere só áudio, o{" "}
          <Link href="/blog/psicologo-podcast" className="inst-link">
            guia de podcast para psicólogos
          </Link>{" "}
          segue a mesma lógica. E para lidar com mensagens que chegam depois do
          vídeo, veja{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            como responder comentários e direct
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia a partir
          de dois encontros de imersão: posicionamento, identidade visual e verbal, entregues em até
          30 dias, dentro do artigo 20 do Código de Ética. Um canal de vídeo
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
