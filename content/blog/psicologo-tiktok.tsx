import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9_CRPSP =
  "https://www.crpsp.org/noticia/view/3251/resolucao-do-cfp-que-disciplina-uso-de-tecnologias-digitais-no-exercicio-da-psicologia-ja-esta-em-vigor-plataforma-e-psi-sera-encerrada";
const ANTICAPACITISTA = "https://site.cfp.org.br/wp-content/uploads/2025/10/Manual_Anticapacitista_web.pdf";

export const post: Post = {
  slug: "psicologo-tiktok",
  title: "Psicólogo no TikTok: o que cabe, o que o Código de Ética veda e como criar vídeos curtos",
  description:
    "Psicólogo no TikTok pode, com limites: perfil profissional, conteúdo educativo, trends sem sensacionalismo, nada de caso de paciente nem autodiagnóstico.",
  keyword: "psicólogo no tiktok",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "Psicóloga pode ter TikTok: o CFP não proíbe nenhuma plataforma e deixa a escolha do meio com a profissional. O que vale lá é o mesmo que vale em qualquer rede: nome, “psicóloga(o)” e CRP no perfil, conteúdo baseado na ciência psicológica, nada de sensacionalismo, previsão de resultado, caso de paciente ou preço como chamariz. O formato curto pede cuidado extra com listas de sintomas, trends e respostas a comentários.",
  faq: [
    {
      q: "Psicólogo pode ter TikTok?",
      a: "Pode. A Nota Técnica CFP nº 1/2022 diz que a psicóloga tem autonomia para escolher os meios de divulgação, desde que avalie se são adequados ao público e siga o Código de Ética. O TikTok segue as mesmas regras do Instagram ou do YouTube."
    },
    {
      q: "Psicólogo pode fazer dancinha ou trend no TikTok?",
      a: "Não há proibição de formato. O limite é o conteúdo: a cartilha do CRP-MG chama de sensacionalista a comunicação exagerada, sem rigor técnico, que manipula emoções para captar clientes. Trend que ridiculariza paciente, banaliza sofrimento ou simula sessão fica de fora."
    },
    {
      q: "Posso fazer vídeo com sinais de TDAH ou autismo?",
      a: "Com cuidado. Vídeo curto com lista de sinais pode levar a autodiagnóstico e simplificar demais um tema complexo, o que vai contra o dever do art. 19 do Código de disseminar conhecimento com base científica. Prefira explicar o que é uma avaliação e quando procurar um profissional."
    },
    {
      q: "Posso responder dúvidas de seguidores nos comentários?",
      a: "Pode responder dúvidas gerais. A cartilha do CRP-MG pede respostas respaldadas na ciência e lembra que responder perguntas descontextualizadas, sem avaliação, pode ter impacto negativo. Orientação individual e atendimento por mensagem seguem as regras do atendimento online, da Resolução CFP nº 9/2024."
    }
  ],
  cover: {
    src: "/blog/psicologo-tiktok/psicologo-tiktok-celular-e-ring-light.jpg",
    alt: "Celular preso num ring light em tripé, numa sala vazia com sofá azul ao fundo, pronto para gravar vídeo",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muita psicóloga já ouviu que “precisa estar no TikTok”, e muita também
        já viu colegas viralizando com vídeos que dão um frio na barriga:
        listas de sintomas, encenações de sessão, “coisas que pacientes dizem”.
        A dúvida é razoável. Dá para estar lá sem virar esse tipo de perfil?
      </p>
      <p>
        Dá. O Conselho Federal de Psicologia não proíbe nenhuma rede social, e
        as regras que valem no TikTok são as mesmas do Instagram ou do YouTube.
        O que muda é o formato: vídeo curto, ritmo rápido e algoritmo que
        premia o choque. Abaixo estão as normas, o que cabe, o que fica de fora
        e um jeito de criar vídeos curtos que explicam sem simplificar demais.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          diz que a psicóloga tem autonomia para escolher os meios de
          divulgação, avaliando as redes e plataformas mais adequadas à ética e
          ao público, e assumindo a responsabilidade pela escolha. Ela lembra
          que o que se publica fica registrado e atinge um público amplo, com
          alcance indeterminado.
        </p>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          dá os limites. O art. 20 pede nome completo e CRP, veda preço como
          propaganda, previsão taxativa de resultados, autopromoção em
          detrimento de colegas e divulgação sensacionalista. O art. 19 pede
          que a participação em veículos de comunicação dissemine conhecimento
          sobre as atribuições, a base científica e o papel social da
          profissão. O art. 2º, alínea q, veda divulgar procedimentos ou
          resultados de forma a expor pessoas.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          acrescenta orientações sobre perfis, sensacionalismo e respostas a
          comentários e caixas de perguntas, que aparecem nas seções abaixo.
        </p>
      </section>

      <section>
        <h2>1. Perfil profissional, separado do pessoal</h2>
        <p>
          Se você vai falar como psicóloga no TikTok, use um perfil só para
          isso. A cartilha do CRP-MG recomenda manter um perfil pessoal e um
          profissional, porque, a partir do momento em que você se apresenta
          como psicóloga, responde eticamente pelo que publica ali.
        </p>
        <ol>
          <li>Nome do perfil com o seu nome ou o nome da marca.</li>
          <li>Na bio: nome completo, “psicóloga(o)” e CRP com número.</li>
          <li>Uma linha sobre público e formato de atendimento.</li>
          <li>Link para o site ou para uma página de contato.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Psicóloga · CRP 00/00000 · Atendo
          crianças e famílias em São Paulo e online · site no link”. O mesmo
          padrão que você usaria no Instagram; o post sobre{" "}
          <Link href="/blog/bio-instagram-psicologo-exemplos" className="inst-link">
            bio de psicólogo com exemplos
          </Link>{" "}
          serve também para o TikTok.
        </p>
        <p>
          O erro comum é transformar o perfil pessoal antigo em profissional,
          com vídeos de festa e opiniões políticas no histórico. A cartilha
          lembra que opiniões pessoais publicadas junto da publicidade
          profissional podem gerar questionamento e denúncia.
        </p>
      </section>

      <section>
        <h2>2. Que conteúdo cabe no TikTok</h2>
        <p>
          Cabe o conteúdo educativo que você faria em qualquer rede, adaptado
          para vídeo curto. A Nota Técnica permite destacar formação, público,
          abordagem e metodologia de trabalho.
        </p>
        <ul>
          <li><strong>Desfazer mitos:</strong> “terapia não é só para quem está em crise”.</li>
          <li><strong>Explicar processos:</strong> como é a primeira sessão, o que é uma avaliação, quanto tempo dura.</li>
          <li><strong>Conceitos em linguagem simples:</strong> o que é regulação emocional, com fonte.</li>
          <li><strong>Bastidores sem pacientes:</strong> o consultório vazio, a preparação de um material, a rotina de estudo.</li>
          <li><strong>Orientação para quem procura ajuda:</strong> onde encontrar atendimento público, como escolher profissional.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um vídeo de 40 segundos com a psicóloga
          fictícia falando para a câmera: “Três perguntas para fazer antes de
          escolher uma psicóloga para o seu filho”. Texto na tela, legenda e
          uma fonte citada na descrição.
        </p>
        <p>
          O erro comum é copiar o formato de quem viraliza sem olhar o
          conteúdo. A cartilha diz que tornar um tema acessível não significa
          usar senso comum ou informação imprecisa. O guia de{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>{" "}
          tem uma linha de conteúdo que você pode adaptar.
        </p>
      </section>

      <section>
        <h2>3. Trends, dancinhas e humor</h2>
        <p>
          O formato não é proibido; o conteúdo é que decide. A cartilha do
          CRP-MG define como sensacionalista a comunicação exagerada, que
          superdimensiona um fato, sem rigor técnico, para manipular emoções e
          captar clientela.
        </p>
        <p>Perguntas para decidir se uma trend cabe:</p>
        <ol>
          <li>Ela ridiculariza paciente, diagnóstico ou sofrimento?</li>
          <li>Ela simula uma sessão ou “o que o paciente disse hoje”?</li>
          <li>Ela promete resultado ou sugere que você resolve algo rápido?</li>
          <li>Ela faz sentido sem o áudio viral, só pela informação?</li>
        </ol>
        <p>
          Se a resposta às três primeiras for sim, fique de fora. Se a quarta
          for não, provavelmente o vídeo é só entretenimento, e o seu perfil
          perde clareza.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> a trend “coisas que eu queria que
          soubessem sobre a minha profissão”, usada para explicar sigilo e
          limites do atendimento, funciona. A mesma trend com “coisas que meus
          pacientes falam” expõe pessoas e vai contra o art. 2º, alínea q.
        </p>
        <p>
          O humor tem o mesmo critério; o post sobre{" "}
          <Link href="/blog/psicologo-humor-redes-sociais" className="inst-link">
            psicólogo pode usar humor nas redes
          </Link>{" "}
          aprofunda esse limite.
        </p>
      </section>

      <section>
        <h2>4. Listas de sintomas e autodiagnóstico</h2>
        <p>
          Esse é o formato mais arriscado do TikTok para quem é psicóloga.
          “5 sinais de que você tem TDAH” em 30 segundos simplifica um tema
          complexo e convida o espectador a se diagnosticar, o que vai contra
          o dever do art. 19 de disseminar conhecimento com base científica.
        </p>
        <p>Como reescrever o mesmo tema:</p>
        <ul>
          <li>
            Em vez de “sinais de que você tem”, explique “o que uma avaliação de
            TDAH em adultos investiga e por que ela não cabe num vídeo”.
          </li>
          <li>
            Em vez de lista de sintomas, conte o que diferencia uma dificuldade
            passageira de algo que pede avaliação, com a ressalva de que só
            profissional avalia.
          </li>
          <li>Termine indicando onde buscar avaliação, não “me chama no direct”.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Muita gente se reconheceu num vídeo
          sobre TDAH. Isso não é diagnóstico. Aqui está o que uma avaliação de
          verdade inclui.” O vídeo responde à mesma busca, sem induzir.
        </p>
        <p>
          O erro comum é achar que a ressalva “isso não substitui avaliação” na
          legenda resolve. Se o vídeo inteiro é um checklist de diagnóstico, a
          legenda não muda o que ele ensina.
        </p>
      </section>

      <section>
        <h2>5. Comentários, duetos e perguntas</h2>
        <p>
          Responder dúvidas gerais é permitido; dar orientação individual pelo
          TikTok, não. A cartilha do CRP-MG diz que respostas a comentários,
          enquetes e caixas de perguntas devem ter base na ciência psicológica
          e que responder perguntas genéricas e descontextualizadas, sem
          avaliação, pode prejudicar a própria pessoa e quem lê.
        </p>
        <ul>
          <li>Responda o tema geral, não o caso da pessoa.</li>
          <li>Quando o comentário descreve sofrimento intenso, indique serviços de apoio e atendimento.</li>
          <li>Não peça para a pessoa contar mais nos comentários.</li>
          <li>
            Atendimento por mensagem é atendimento online e segue a{" "}
            <a href={RES9_CRPSP} {...ext}>
              Resolução CFP nº 9/2024
            </a>
            .
          </li>
        </ul>
        <p>
          Duetos e costuras (stitch) com vídeos de outras pessoas pedem atenção
          ao art. 20, alínea f: corrigir desinformação é útil; ridicularizar um
          colega ou outra profissão é autopromoção em detrimento de outros
          profissionais.
        </p>
        <p>
          O erro comum é responder “isso parece ansiedade, procure ajuda” para
          um relato específico. Parece acolhimento, mas é uma opinião sobre um
          caso sem avaliação.
        </p>
      </section>

      <section>
        <h2>6. Sigilo, casos e crianças</h2>
        <p>
          Nada que venha do atendimento vai para o vídeo. A cartilha do CRP-MG
          veda expor dados, imagens, desenhos, mensagens e qualquer material
          decorrente de serviços psicológicos que possa identificar a pessoa
          atendida.
        </p>
        <ul>
          <li>Sem “história de um paciente”, mesmo com nome trocado.</li>
          <li>Sem desenho, brinquedo ou material usado em sessão.</li>
          <li>Sem gravação na sala com alguém sendo atendido, nem de costas.</li>
          <li>
            Sem crianças: a Nota Técnica cita o art. 17 do ECA ao desaconselhar
            fotos e depoimentos de pessoas atendidas, em especial crianças e
            adolescentes.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> em vez de “ontem uma mãe me contou
          que...”, a psicóloga fictícia diz “uma dúvida comum de famílias é...”.
          A informação é a mesma; ninguém é exposto.
        </p>
        <p>
          O erro comum é achar que o caso “inventado” é seguro. Se ele parece
          real e detalhado, pacientes podem se reconhecer ou achar que foram
          expostos. Veja também{" "}
          <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
            psicólogo pode postar depoimento de paciente
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>7. Divulgação, preço e impulsionamento</h2>
        <p>
          O TikTok também é divulgação, então as regras do art. 20 valem para a
          bio, os vídeos e os anúncios.
        </p>
        <ul>
          <li>Sem preço, “primeira sessão grátis” ou “valor social” em vídeo ou bio.</li>
          <li>Sem sorteio de sessão ou de qualquer prêmio; a Nota Técnica proíbe sorteios.</li>
          <li>Sem “agenda aberta, últimas vagas” como gatilho de urgência.</li>
          <li>Chamada para ação simples: “o link do site está no perfil”.</li>
        </ul>
        <p>
          Pagar para um vídeo alcançar mais gente é possível, com os mesmos
          cuidados de qualquer post. O post sobre{" "}
          <Link href="/blog/impulsionar-post-psicologo" className="inst-link">
            impulsionar post
          </Link>{" "}
          trata do que conferir antes.
        </p>
        <p>
          O erro comum é o vídeo educativo bom que termina com “chama no direct
          que te passo o valor”. A informação de valor é reservada, conversada
          com a pessoa, não anunciada.
        </p>
      </section>

      <section>
        <h2>Pode ou evitar no TikTok</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar no TikTok de psicólogo" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar no TikTok de psicólogo</caption>
            <thead><tr><th scope="col">No vídeo ou no perfil</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Nome, “psicóloga(o)” e CRP na bio</td><td>Sim, é obrigatório</td></tr>
              <tr><td>Explicar como funciona a terapia ou a avaliação</td><td>Sim</td></tr>
              <tr><td>Trend usada para explicar um conceito com rigor</td><td>Sim</td></tr>
              <tr><td>Lista de sintomas para o espectador se diagnosticar</td><td>Evite</td></tr>
              <tr><td>“Coisas que meus pacientes dizem”</td><td>Não</td></tr>
              <tr><td>Criança atendida ou material de sessão no vídeo</td><td>Não</td></tr>
              <tr><td>Preço, desconto ou sorteio</td><td>Não</td></tr>
              <tr><td>Orientação individual nos comentários</td><td>Não</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já publica: roteiro, legenda e reaproveitamento</h2>
        <p>
          Quem já tem uma rotina de vídeos ganha mais com método do que com
          volume. Três hábitos ajudam:
        </p>
        <ol>
          <li>
            <strong>Roteiro de três partes:</strong> a dúvida em uma frase, a
            resposta em três pontos e o próximo passo (onde buscar ajuda, link
            do site).
          </li>
          <li>
            <strong>Legenda e texto na tela:</strong> muita gente assiste sem
            som, e pessoas surdas ou com dificuldade auditiva dependem disso.
            Revise a legenda automática; ela erra termos técnicos.
          </li>
          <li>
            <strong>Um vídeo, três redes:</strong> o mesmo vídeo serve para
            Reels e Shorts. Ajuste só a descrição. O post sobre{" "}
            <Link href="/blog/psicologo-youtube-e-lives" className="inst-link">
              YouTube e lives
            </Link>{" "}
            mostra como transformar vídeos curtos num conteúdo maior.
          </li>
        </ol>
        <p>
          A voz dos vídeos deve ser a mesma do site e do consultório; o guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a definir essa voz.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Pais de crianças autistas e com TDAH pesquisam muito em vídeo curto,
          muitas vezes antes de qualquer avaliação. Isso torna o seu TikTok
          útil e também mais delicado.
        </p>
        <ul>
          <li>Nunca use a imagem de uma criança, nem de costas, nem de paciente “autorizado”.</li>
          <li>Fale com os pais sobre caminhos: avaliação, escola, rede de apoio.</li>
          <li>
            Evite linguagem de déficit e de “cura”; o{" "}
            <a href={ANTICAPACITISTA} {...ext}>
              manual anticapacitista do CFP
            </a>{" "}
            e o post de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajudam a revisar o texto.
          </li>
          <li>Não transforme o comportamento de uma criança em piada ou em “antes e depois”.</li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          tem pautas que funcionam também em vídeo curto.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Usar o perfil pessoal para falar como psicóloga.</li>
          <li>Esquecer o CRP na bio.</li>
          <li>Seguir trends que expõem pacientes ou banalizam sofrimento.</li>
          <li>Fazer checklists de diagnóstico.</li>
          <li>Responder casos individuais nos comentários.</li>
          <li>Terminar o vídeo com preço ou urgência de vaga.</li>
          <li>Publicar sem legenda.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de postar</h2>
        <ul>
          <li>O vídeo está no perfil profissional, com nome, “psicóloga(o)” e CRP na bio?</li>
          <li>A informação tem base na ciência psicológica e, se couber, fonte?</li>
          <li>Ninguém atendido pode se reconhecer?</li>
          <li>Não há criança, material de sessão ou consultório com paciente?</li>
          <li>Não há preço, sorteio, promessa ou superlativo?</li>
          <li>O vídeo não convida ao autodiagnóstico?</li>
          <li>A legenda foi revisada?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe define a marca e a voz do consultório antes das
          redes: para quem você fala, como fala e o que fica de fora. São dois
          dias de imersão para posicionamento, identidade visual e verbal, com
          a marca no ar em 45 dias e cada peça revisada pelo art. 20. O processo
          está na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e nos{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer entrar no TikTok com uma marca clara, marque uma
          conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 2º, 19 e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , 2ª edição, 2026, seções “Divulgação sensacionalista”, “Sigilo”,
            “Conteúdo fundamentado na Psicologia” e “Perfis em redes sociais”.
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={RES9_CRPSP} {...ext}>
              Resolução do CFP que disciplina o uso de tecnologias digitais no
              exercício da Psicologia (Resolução CFP nº 9/2024)
            </a>
            .
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
