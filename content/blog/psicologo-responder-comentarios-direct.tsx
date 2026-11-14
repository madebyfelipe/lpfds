import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "psicologo-responder-comentarios-direct",
  title: "Psicólogo pode responder comentários e direct? Sigilo, limites e 6 respostas-modelo",
  description:
    "Psicóloga pode responder comentário e direct no Instagram? O que o Código de Ética e o CRP-MG dizem, onde está o limite do sigilo e respostas prontas.",
  keyword: "psicólogo pode responder comentários",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-14",
  summary:
    "Pode. A psicóloga pode responder comentários, caixas de perguntas e mensagens diretas, desde que a resposta se apoie na ciência psicológica e não vire atendimento. A cartilha do CRP-MG alerta que responder perguntas pessoais sem avaliação pode prejudicar quem pergunta e quem lê. Na prática: responda o tema em termos gerais, leve qualquer relato pessoal para o canal de agendamento e nunca comente em público algo que identifique um paciente.",
  faq: [
    {
      q: "Psicólogo pode responder direct de quem pede ajuda?",
      a: "Pode responder, mas não deve fazer orientação psicológica pela mensagem. A resposta acolhe, explica como funciona o primeiro contato e indica o canal de agendamento. Se a mensagem sugerir risco, indique serviços de urgência, como o SAMU (192) e o CVV (188), e os serviços de saúde da cidade."
    },
    {
      q: "Posso responder perguntas na caixinha do Instagram?",
      a: "Pode, e a cartilha do CRP-MG cita as caixas de perguntas de forma expressa. A resposta precisa estar respaldada na ciência psicológica e considerar que cada situação tem muitos fatores. Escolha perguntas gerais, responda o tema e não o caso, e não publique perguntas que identifiquem alguém."
    },
    {
      q: "E se um paciente comentar no meu post?",
      a: "Não confirme em público que a pessoa é sua paciente e não responda nada que remeta ao atendimento. Uma curtida ou uma resposta neutra ao conteúdo do post é o limite. O art. 9º do Código de Ética protege o sigilo, e a própria relação terapêutica já é uma informação sigilosa."
    },
    {
      q: "Posso apagar comentários no meu perfil profissional?",
      a: "Pode. Apagar ou ocultar comentários que expõem terceiros, trazem dados de saúde ou contêm ataques é uma forma de proteger o sigilo e as pessoas. Vale ter uma regra clara, escrita para você, sobre o que fica e o que sai, e aplicá-la sempre do mesmo jeito."
    }
  ],
  cover: {
    src: "/blog/psicologo-responder-comentarios-direct/psicologo-responder-comentarios-direct-celular-mensagens-mesa.jpg",
    alt: "Celular sobre um caderno cinza, com xícara de café, caneta e um pequeno cacto na mesa clara",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você publica um post sobre ansiedade na infância e, em uma hora, chegam
        três comentários (“meu filho é exatamente assim, o que eu faço?”), duas
        mensagens no direct com histórias longas e uma pergunta na caixinha
        pedindo diagnóstico. Responder parece o certo. Ignorar parece frio. E
        qualquer resposta pode virar uma orientação clínica dada a quem você
        nunca avaliou.
      </p>
      <p>
        A resposta curta: a psicóloga pode responder comentários e direct. O
        limite é não transformar a resposta em atendimento e não expor ninguém.
        Abaixo estão o que as normas dizem, como responder em cada lugar, seis
        respostas-modelo e uma parte para quem recebe mensagens de pais de
        crianças autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          trata da interação de forma direta. Em comentários, enquetes e “caixas
          de perguntas”, diz ela, o diálogo e as respostas “devem estar
          respaldados na ciência psicológica”, considerar a multiplicidade de
          fatores envolvidos e “refletir sobre as possíveis repercussões”. E
          completa: responder perguntas genéricas e descontextualizadas sem
          avaliação adequada pode ter impacto negativo para a própria pessoa e
          para quem lê.
        </p>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          dá os outros limites: o sigilo (art. 9º), a vedação de diagnosticar ou
          apresentar resultados de forma a expor pessoas em meios de comunicação
          (art. 2º, alínea q) e a vedação de induzir alguém a recorrer aos seus
          serviços (art. 2º, alínea i). A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          lembra que o que se escreve nas redes fica registrado e pode ter
          alcance indeterminado. E a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          trata dados de saúde como dados sensíveis.
        </p>
      </section>

      <section>
        <h2>Comentários públicos: responda o tema, não a pessoa</h2>
        <p>
          No comentário, todo mundo lê. A regra é devolver informação geral sobre
          o assunto do post e nunca analisar a situação de quem comentou.
        </p>
        <ul>
          <li>Agradeça e responda a parte que vale para qualquer leitor.</li>
          <li>Se o comentário trouxer um relato pessoal, diga que cada caso precisa de avaliação e indique o canal de contato.</li>
          <li>Não peça mais detalhes em público.</li>
          <li>Oculte comentários que exponham crianças, terceiros ou dados de saúde.</li>
        </ul>
        <p>
          <strong>Erro comum:</strong> “pelo que você contou, parece TDAH”. É uma
          hipótese diagnóstica sem avaliação, feita em público. O post sobre{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>{" "}
          mostra como planejar o perfil para que essas conversas cheguem ao
          canal certo.
        </p>
      </section>

      <section>
        <h2>Direct: acolha e leve para o canal de agendamento</h2>
        <p>
          A mensagem direta parece privada, mas não é o lugar do atendimento. A
          plataforma não foi pensada para o sigilo clínico, e a conversa começa
          sem contrato, sem avaliação e sem registro. A resposta acolhe e
          encaminha.
        </p>
        <ol>
          <li>Agradeça a confiança em uma frase.</li>
          <li>Diga que, para entender a situação, é preciso um primeiro contato com calma.</li>
          <li>Indique o canal: WhatsApp do consultório, formulário ou agendamento.</li>
          <li>Se houver sinal de risco, indique os serviços de urgência.</li>
        </ol>
        <p>
          Se você atende online, a conversa clínica acontece no ambiente
          combinado para o atendimento, como regula a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>
          , e não no direct do Instagram. O post sobre{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          mostra como organizar esse primeiro contato.
        </p>
        <p>
          <strong>Erro comum:</strong> trocar dezenas de mensagens “só para
          ajudar”. Sem perceber, você está atendendo sem avaliação e sem
          contrato.
        </p>
      </section>

      <section>
        <h2>Caixinha de perguntas: escolha as que servem a todos</h2>
        <p>
          A caixa de perguntas é útil para conteúdo, porque mostra o que o
          público quer saber. O cuidado está em escolher quais responder e como.
        </p>
        <ul>
          <li>Responda perguntas sobre temas (“como funciona a terapia infantil?”), não sobre casos.</li>
          <li>Não publique a pergunta original quando ela traz detalhes pessoais; reescreva de forma geral.</li>
          <li>Termine as respostas sensíveis com “cada situação precisa de avaliação”.</li>
          <li>Responda em privado, com a mensagem de encaminhamento, quem trouxe um relato pessoal.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> a pergunta “minha filha de 6 anos
          não dorme sozinha e chora toda noite, é normal?” vira, no Stories,
          “Quando procurar ajuda para dificuldades de sono na infância?”, com uma
          resposta geral e sem nenhuma referência à pessoa que perguntou.
        </p>
      </section>

      <section>
        <h2>Seis respostas-modelo (adapte ao seu tom)</h2>
        <p>
          Modelos escritos para este artigo. Ajuste ao{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz do seu consultório
          </Link>
          .
        </p>
        <ol>
          <li><strong>Relato pessoal no comentário:</strong> “Obrigada por compartilhar. Cada situação tem muitos fatores e precisa de uma conversa com calma. Se quiser, me chame pelo link da bio.”</li>
          <li><strong>Pedido de diagnóstico:</strong> “Não é possível dizer isso por mensagem: uma hipótese só se sustenta depois de uma avaliação. Posso explicar como funciona o primeiro contato.”</li>
          <li><strong>Direct longo:</strong> “Li sua mensagem com atenção. Para te ajudar de verdade, o melhor caminho é um primeiro contato pelo WhatsApp do consultório, onde explico os horários e como funciona.”</li>
          <li><strong>Sinal de risco:</strong> “Sinto muito que você esteja passando por isso. Se houver risco agora, ligue para o SAMU (192) ou procure o pronto-socorro mais próximo. O CVV atende pelo 188, a qualquer hora.”</li>
          <li><strong>Pergunta sobre valor:</strong> “Envio o valor e os horários pelo WhatsApp do consultório, junto com as informações sobre o atendimento.”</li>
          <li><strong>Paciente que comenta:</strong> uma curtida ou “obrigada pelo comentário” sobre o tema do post, sem nada que remeta ao atendimento.</li>
        </ol>
      </section>

      <section>
        <h2>Pode e evitar nas respostas</h2>
        <div className="inst-blog__table" role="region" aria-label="Comentários e direct: o que a psicóloga pode e o que deve evitar" tabIndex={0}>
          <table>
            <caption>Comentários e direct: o que a psicóloga pode e o que deve evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Responder dúvidas gerais sobre o tema do post</td><td>Sim (cartilha CRP-MG)</td></tr>
              <tr><td>Levantar hipótese diagnóstica sobre quem comentou</td><td>Não (art. 2º, q)</td></tr>
              <tr><td>Orientação clínica por direct</td><td>Evitar</td></tr>
              <tr><td>Encaminhar para o canal de agendamento</td><td>Sim</td></tr>
              <tr><td>Confirmar em público que alguém é paciente</td><td>Não (art. 9º)</td></tr>
              <tr><td>Ocultar comentário com dados de saúde de terceiros</td><td>Sim (art. 9º, LGPD)</td></tr>
              <tr><td>Insistir para que a pessoa agende</td><td>Não (art. 2º, i)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas ou com suspeita de neurodivergência escrevem
          muito, e com razão: muitos estão esperando avaliação, procurando
          escola ou tentando entender um comportamento novo. As mensagens trazem
          nome da criança, escola, laudos e às vezes fotos.
        </p>
        <ul>
          <li><strong>Não responda sobre a criança em público,</strong> mesmo que o pai ou a mãe tenha exposto tudo no comentário. Oculte e responda em privado.</li>
          <li><strong>Não comente laudos nem relatórios enviados por mensagem.</strong> Diga que isso pode ser conversado no primeiro contato.</li>
          <li><strong>Evite dizer “é autismo” ou “não é autismo”.</strong> A avaliação é o caminho, e o post sobre{" "}
            <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
              avaliação neuropsicológica infantil
            </Link>{" "}
            mostra como explicar esse processo no site.
          </li>
          <li><strong>Use linguagem respeitosa:</strong> sem “sofre de autismo” nem promessas de “superar”, como orienta o post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
          <li><strong>Tenha uma resposta pronta para quem não pode ser atendido por você,</strong> com indicação de serviços públicos da cidade.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de responder</h2>
        <ul>
          <li>A resposta vale para qualquer pessoa que leia?</li>
          <li>Ela se apoia na ciência psicológica, sem hipótese sobre alguém?</li>
          <li>Nada nela identifica um paciente ou uma criança?</li>
          <li>Relatos pessoais foram levados para o canal de agendamento?</li>
          <li>Há indicação de urgência quando a mensagem sugere risco?</li>
          <li>Você tem uma regra escrita sobre o que oculta ou apaga?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão de dois dias define o posicionamento e o
          tom de voz do consultório, e as respostas-padrão das redes saem dessa
          mesma base, revisadas pelo art. 20. A marca vai ao ar em 45 dias. Veja
          a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu direct virou um segundo consultório, marque uma conversa de
          15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (interação em comentários, enquetes e caixas de perguntas).
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 2º (alíneas i e q) e 9º.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            (atendimento mediado por tecnologias digitais).
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 5º, II, e art. 11.
          </li>
        </ul>
      </section>
    </>
  )
};
