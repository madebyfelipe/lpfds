import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CRPSP_MIDIA = "https://www.crpsp.org/uploads/impresso/352791/c5M28pLUgry9gb2yWgd5Q20mODekcExu.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const MANUAL_ANTICAP = "https://site.cfp.org.br/wp-content/uploads/2025/10/Manual_Anticapacitista_web.pdf";

export const post: Post = {
  slug: "psicologo-entrevista-imprensa",
  title: "Psicólogo em entrevista e reportagem: como se apresentar à imprensa sem ferir o Código de Ética",
  description:
    "Como a psicóloga se prepara para entrevista na TV, no rádio ou em reportagem: o que os arts. 2º, 9º e 19 pedem, como se apresentar e o que não comentar.",
  keyword: "psicólogo entrevista imprensa",
  tags: ["divulgacao-etica", "posicionamento"],
  publishedAt: "2026-11-13",
  summary:
    "A psicóloga pode e deve dar entrevistas: o art. 19 do Código de Ética pede que a fala na imprensa divulgue as atribuições, a base científica e o papel social da profissão. O limite está no art. 2º, alínea q, que veda diagnosticar ou apresentar resultados de forma que exponha pessoas, e no sigilo do art. 9º. Na prática, apresente-se com nome completo, psicóloga e CRP, fale de temas e não de casos, e recuse comentar a saúde mental de quem você nunca atendeu.",
  faq: [
    {
      q: "Psicólogo pode dar entrevista na TV ou no rádio?",
      a: "Pode. O Código de Ética prevê essa participação no art. 19, que pede que a psicóloga, em veículos de comunicação, dissemine o conhecimento sobre as atribuições, a base científica e o papel social da profissão. O cuidado é não fazer atendimento, análise de caso ou diagnóstico diante do público, o que o art. 2º, alínea q, veda quando expõe pessoas."
    },
    {
      q: "Psicólogo pode comentar o comportamento de uma celebridade ou de alguém do noticiário?",
      a: "Não deve diagnosticar nem levantar hipótese sobre uma pessoa que nunca atendeu. A orientação do CRP-SP lembra que hipóteses diagnósticas só se sustentam a partir de atendimento ou acompanhamento minimamente sistemático. O caminho é responder sobre o tema em termos gerais, por exemplo como o luto costuma ser vivido, sem falar da pessoa."
    },
    {
      q: "Como o psicólogo deve se identificar numa reportagem?",
      a: "Peça que a matéria traga seu nome completo, a palavra psicóloga e o número do CRP, como pede o art. 20 do Código de Ética para toda divulgação. Cite só títulos que você tem, como especialista registrada no CFP, mestre ou doutora. Se o veículo errar, peça a correção por escrito."
    },
    {
      q: "Posso contar um caso de paciente na entrevista, sem dizer o nome?",
      a: "É arriscado e, na maioria das vezes, desnecessário. Detalhes como idade, profissão, cidade ou a história em si podem identificar a pessoa, e o sigilo do art. 9º vale também para quem reconheceria o caso. Prefira exemplos construídos e anunciados como fictícios, ou fale do padrão geral sem nenhuma história concreta."
    },
    {
      q: "Psicólogo pode cobrar para dar entrevista ou aparecer em matéria paga?",
      a: "Entrevista jornalística não costuma ser paga. Matéria paga, publieditorial ou espaço comprado é publicidade e segue o art. 20 por inteiro: nada de preço como chamariz, de promessa de resultado ou de sensacionalismo, e o conteúdo precisa ser identificado como publicidade."
    }
  ],
  cover: {
    src: "/blog/psicologo-entrevista-imprensa/psicologo-entrevista-imprensa-entrevista-imprensa-microfone-estudio.jpg",
    alt: "Microfone de estúdio em suporte sobre mesa, com estante de livros desfocada ao fundo",
    caption: "Foto: wirestock / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Um jornal da sua cidade liga pedindo uma fala sobre ansiedade na volta às
        aulas. Ou uma rádio quer você ao vivo, amanhã cedo, para comentar um caso
        que está em todos os portais. É uma chance real de mostrar o seu trabalho
        para muita gente. E é também o lugar onde uma frase mal colocada vira
        print, processo ético ou constrangimento com um paciente que estava
        ouvindo.
      </p>
      <p>
        A resposta curta: a psicóloga pode dar entrevistas e o Código de Ética até
        espera isso dela, desde que a fala divulgue a profissão e o conhecimento
        da Psicologia, e não exponha pessoas. Na prática, isso quer dizer três
        regras: apresentar-se com nome completo, psicóloga e CRP; falar de temas,
        nunca de casos; e não diagnosticar quem você não atendeu. Abaixo estão as
        normas, a preparação antes do convite, o que fazer durante a entrevista e
        o que fazer depois que a matéria sai.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          trata da imprensa de forma direta. O art. 19 diz que a psicóloga, “ao
          participar de atividade em veículos de comunicação, zelará para que as
          informações prestadas disseminem o conhecimento a respeito das
          atribuições, da base científica e do papel social da profissão”. O art.
          2º, alínea q, veda “realizar diagnósticos, divulgar procedimentos ou
          apresentar resultados de serviços psicológicos em meios de comunicação,
          de forma a expor pessoas, grupos ou organizações”. E o art. 9º lembra o
          dever de sigilo, que não tira férias quando a câmera liga.
        </p>
        <p>
          O CRP-SP publicou uma orientação específica,{" "}
          <a href={CRPSP_MIDIA} {...ext}>
            “A/o psicóloga/o, a mídia e a ética profissional”
          </a>{" "}
          (janeiro de 2024). Ela diz que, em qualquer veículo, a psicóloga não deve
          realizar “atendimentos, intervenções, análise de casos ou outra forma de
          prática que exponha pessoas ou grupos”, e que hipóteses diagnósticas só
          se sustentam a partir de atendimento ou acompanhamento “minimamente
          sistemáticos”. Pede ainda que a profissional seja crítica aos convites e
          observe o que o próprio programa está defendendo. Quando a aparição é
          paga ou serve para divulgar seus serviços, entra também o art. 20 e a{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>
          , que exigem nome completo, a palavra psicóloga e o CRP em toda
          publicidade.
        </p>
      </section>

      <section>
        <h2>Antes do convite: deixe a apresentação pronta</h2>
        <p>
          Jornalista trabalha com prazo curto. Quem já tem a apresentação pronta
          responde em minutos e não improvisa a própria biografia ao telefone.
        </p>
        <ol>
          <li>
            <strong>Uma linha de identificação</strong>: nome completo, psicóloga,
            CRP e a área em que atua. Exemplo: “Ana Souza, psicóloga (CRP 00/00000),
            atende crianças e adolescentes”.
          </li>
          <li>
            <strong>Uma bio de 3 a 4 frases</strong>, só com títulos que você tem.
            “Especialista” só se o título estiver registrado no CFP; o post sobre{" "}
            <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
              quando a psicóloga pode se dizer especialista
            </Link>{" "}
            explica a diferença.
          </li>
          <li>
            <strong>Três temas em que você fala com segurança</strong>, ligados à
            sua prática e à literatura que você conhece.
          </li>
          <li>
            <strong>Uma foto profissional em boa resolução</strong>, sem
            consultório com paciente nem divã. As regras estão no texto sobre{" "}
            <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
              foto profissional para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Uma página para onde a matéria pode apontar</strong>: o seu
            site ou a página “sobre”, com contato e CRP visíveis.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia guarda num arquivo
          a linha de identificação, a bio curta, a foto e o link da página sobre
          ela. Quando um portal regional pede uma fonte para uma matéria sobre
          telas e sono infantil, ela manda tudo em uma única mensagem e o
          jornalista não precisa adivinhar o CRP.
        </p>
        <p>
          <strong>Erro comum:</strong> mandar a bio do Instagram, cheia de emojis e
          frases de efeito. Na imprensa, ela soa como anúncio. A página{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            “sobre mim” do site
          </Link>{" "}
          costuma ser a base certa para a versão jornalística.
        </p>
      </section>

      <section>
        <h2>Na hora do convite: pergunte antes de aceitar</h2>
        <p>
          Aceitar toda entrevista não é obrigação. A orientação do CRP-SP pede
          justamente que a psicóloga avalie o convite e o veículo antes de dizer
          sim.
        </p>
        <ul>
          <li>
            <strong>Qual é a pauta e o ângulo?</strong> “Ansiedade em provas” é
            tema; “o que você acha da cantora que cancelou o show” é caso.
          </li>
          <li>
            <strong>É ao vivo ou gravado?</strong> Ao vivo exige respostas curtas e
            uma frase pronta para recusar perguntas fora do combinado.
          </li>
          <li>
            <strong>Quem mais vai participar?</strong> Debater com quem defende
            práticas sem base científica pode servir para legitimar essas ideias.
          </li>
          <li>
            <strong>Vai haver corte ou edição?</strong> Pergunte se a matéria
            usará trechos e se você pode conferir as citações técnicas.
          </li>
          <li>
            <strong>Há pagamento ou patrocínio?</strong> Se houver, é publicidade,
            e o art. 20 vale por inteiro.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um programa de TV convida uma psicóloga
          fictícia para “analisar” o comportamento de um participante de reality.
          Ela propõe outro ângulo: falar sobre como o confinamento e a exposição
          costumam afetar qualquer pessoa, sem citar o participante. O programa
          aceita a troca. Se não aceitasse, ela recusaria.
        </p>
        <p>
          <strong>Erro comum:</strong> aceitar por medo de perder a vitrine.
          Uma participação que expõe alguém pode render mais desgaste do que a
          visibilidade compensa. O post sobre{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          ajuda a decidir em quais temas você quer ser lembrada.
        </p>
      </section>

      <section>
        <h2>Durante a entrevista: tema, não caso</h2>
        <p>
          A regra que resolve a maioria das dúvidas: fale do fenômeno e do
          conhecimento da Psicologia, nunca de uma pessoa concreta, seja ela
          paciente, famosa ou personagem da notícia.
        </p>
        <ol>
          <li>
            <strong>Comece pela resposta.</strong> Na TV e no rádio, o trecho que vai ao
            ar costuma ser curto. Diga a ideia principal primeiro e
            explique depois.
          </li>
          <li>
            <strong>Use linguagem de quem ouve.</strong> Troque jargão por palavras
            comuns e explique o termo técnico quando ele for necessário.
          </li>
          <li>
            <strong>Diga quando a resposta depende.</strong> “Cada criança é uma, e
            é por isso que a avaliação existe” é uma frase honesta e ética.
          </li>
          <li>
            <strong>Indique caminho, não promessa.</strong> Em vez de “a terapia
            resolve”, diga quando vale procurar uma psicóloga e onde encontrar
            atendimento, inclusive na rede pública.
          </li>
          <li>
            <strong>Tenha uma frase para recusar.</strong> “Não posso falar sobre
            uma pessoa que não atendi, mas posso explicar como esse tipo de
            situação costuma ser vivido.”
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> perguntada ao vivo se um político “tem
          narcisismo”, uma psicóloga fictícia responde: “Diagnóstico não se faz
          pela TV, nem para quem a gente admira nem para quem a gente critica. O
          que posso dizer é o que a Psicologia entende por esse termo e por que ele
          virou xingamento”.
        </p>
        <p>
          <strong>Erro comum:</strong> o caso “anonimizado”. Idade, profissão,
          bairro e a própria história bastam para alguém se reconhecer, e o
          paciente pode estar assistindo. Se precisar de exemplo, construa um e
          diga que ele é fictício.
        </p>
      </section>

      <section>
        <h2>Como você aparece na matéria</h2>
        <p>
          O jornalista decide o texto final, mas você pode pedir o essencial: a sua
          identificação correta. O art. 20, alínea a, pede nome completo, CRP e
          número de registro em toda divulgação, e a matéria é, na prática, a sua
          apresentação pública.
        </p>
        <ul>
          <li>
            <strong>Crédito:</strong> “Ana Souza, psicóloga (CRP 00/00000)”. Peça
            que o veículo não use “terapeuta”, “especialista em mente” ou outro
            rótulo que não seja o seu título.
          </li>
          <li>
            <strong>Títulos:</strong> só os que você tem. Mestranda não é mestre;
            curso livre não é especialização.
          </li>
          <li>
            <strong>Link:</strong> se o veículo aceitar, aponte para o site ou para
            a página sobre você, não para o WhatsApp com mensagem pronta de
            agendamento.
          </li>
          <li>
            <strong>Foto:</strong> a sua, em ambiente neutro. Nada de imagem
            simulando sessão.
          </li>
          <li>
            <strong>Correção:</strong> se sair algo errado, peça a correção por
            escrito e guarde a troca de mensagens.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma reportagem fictícia chama a fonte de
          “psicóloga especialista em autismo”, mas ela não tem título de
          especialista registrado. Ela pede ao jornalista a troca por “psicóloga
          que atende crianças autistas” e o portal corrige no mesmo dia.
        </p>
        <p>
          <strong>Erro comum:</strong> compartilhar a matéria com a legenda “a
          maior referência da cidade em ansiedade”. Superlativo sem prova é
          autopromoção, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          lembra que a divulgação não pode ser sensacionalista.
        </p>
      </section>

      <section>
        <h2>Entrevista escrita, podcast e live</h2>
        <p>
          O formato muda o risco. Entrevista por e-mail dá tempo para revisar;
          programa ao vivo exige frases prontas; podcast e live ficam gravados e
          circulam por anos.
        </p>
        <ul>
          <li>
            <strong>Por e-mail ou mensagem:</strong> responda em parágrafos curtos,
            que possam ser citados sozinhos. Releia cada frase como se ela fosse sair
            fora de contexto, porque pode sair.
          </li>
          <li>
            <strong>Rádio e TV ao vivo:</strong> anote antes duas ou três ideias
            centrais e a frase de recusa. Chegue cedo e combine com a produção o que
            não será tratado.
          </li>
          <li>
            <strong>Podcast:</strong> a conversa é longa e solta, o que facilita
            escorregar para histórias de consultório. O post sobre{" "}
            <Link href="/blog/psicologo-podcast" className="inst-link">
              psicólogo em podcast
            </Link>{" "}
            traz os cuidados de quem participa como convidada.
          </li>
          <li>
            <strong>Live com outro perfil:</strong> combine o roteiro e o que fazer
            se alguém do público pedir orientação individual. As regras de{" "}
            <Link href="/blog/psicologo-youtube-e-lives" className="inst-link">
              lives e vídeos no YouTube
            </Link>{" "}
            valem igual.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> numa live de um perfil de maternidade,
          uma mãe pergunta nos comentários se o filho dela “é autista porque não
          olha nos olhos”. A psicóloga convidada, fictícia, explica que nenhum sinal
          isolado define um diagnóstico e indica procurar avaliação com
          profissional de confiança, sem analisar a criança.
        </p>
        <p>
          <strong>Erro comum:</strong> responder a perguntas individuais ao vivo
          como se fosse consulta. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          trata do uso profissional das redes e lembra que conteúdo público não
          substitui atendimento.
        </p>
      </section>

      <section>
        <h2>Depois que a matéria sai</h2>
        <p>
          A matéria é um bom conteúdo para o seu site e as suas redes, desde que a
          divulgação siga as mesmas regras de qualquer post seu.
        </p>
        <ol>
          <li>
            <strong>Compartilhe com legenda informativa:</strong> “Conversei com o
            jornal X sobre sono e telas na infância”, sem adjetivo de autoelogio.
          </li>
          <li>
            <strong>Crie uma seção “Na imprensa”</strong> no site, com o nome do
            veículo, a data, o tema e o link. É prova pública e verificável, bem
            diferente de selo inventado.
          </li>
          <li>
            <strong>Guarde o arquivo:</strong> salve a matéria em PDF ou o vídeo,
            porque links quebram.
          </li>
          <li>
            <strong>Responda comentários com cuidado:</strong> perguntas pessoais
            que chegam depois da matéria vão para o canal de contato, nunca para
            orientação pública. Dados de saúde são sensíveis pela{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>
            .
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício mantém na página
          “sobre” uma lista curta: veículo, mês, tema da fala. Quem chega pelo
          Google entende rapidamente em que assuntos a psicóloga costuma ser
          ouvida, sem nenhum superlativo.
        </p>
        <p>
          <strong>Erro comum:</strong> usar o logo do jornal como selo de
          aprovação (“recomendada pela TV X”). A matéria registra uma fala, não
          endossa o serviço.
        </p>
      </section>

      <section>
        <h2>Imprensa: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Entrevista e reportagem: o que a psicóloga pode e o que deve evitar" tabIndex={0}>
          <table>
            <caption>Entrevista e reportagem: o que a psicóloga pode e o que deve evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Explicar um tema com base na literatura e na prática, em termos gerais</td><td>Sim (art. 19)</td></tr>
              <tr><td>Levantar hipótese diagnóstica sobre celebridade ou personagem da notícia</td><td>Não (art. 2º, q)</td></tr>
              <tr><td>Contar caso de paciente “sem o nome”</td><td>Evitar (art. 9º, risco de identificação)</td></tr>
              <tr><td>Exemplo construído e anunciado como fictício</td><td>Sim</td></tr>
              <tr><td>Crédito com nome completo, psicóloga e CRP</td><td>Sim (art. 20, a)</td></tr>
              <tr><td>Ser apresentada como “especialista” sem título registrado</td><td>Não (art. 20, b)</td></tr>
              <tr><td>“A terapia resolve isso em poucas sessões”</td><td>Não (art. 20, e)</td></tr>
              <tr><td>Divulgar a matéria como “selo” ou com superlativo</td><td>Não (art. 20, f e h)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já fala com a imprensa: vire uma fonte recorrente</h2>
        <p>
          Jornalistas voltam às fontes que respondem rápido, falam com clareza e
          não criam problema. Para entrar nessa lista sem virar comentarista de
          tudo:
        </p>
        <ul>
          <li>
            <strong>Delimite os temas.</strong> Diga ao jornalista em quais
            assuntos você pode ajudar e indique colegas para os outros.
          </li>
          <li>
            <strong>Ofereça pauta, não propaganda.</strong> Um dado novo de uma
            pesquisa, uma data relevante ou uma dúvida frequente das famílias que
            você atende vira sugestão de matéria. A sua clínica não vira.
          </li>
          <li>
            <strong>Tenha fontes à mão.</strong> Mande o link do estudo ou da norma
            que embasa a sua fala. Isso protege você e melhora a matéria.
          </li>
          <li>
            <strong>Treine as respostas difíceis.</strong> Peça a alguém que faça
            as perguntas que você teme e grave a sua resposta.
          </li>
        </ul>
        <p>
          A presença na imprensa funciona melhor quando conversa com o restante da
          marca: o mesmo tom, os mesmos temas, a mesma forma de se apresentar. O
          post sobre{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          mostra como definir isso.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Abril, com o mês de conscientização do autismo, costuma trazer muitos
          convites. Também é quando surgem as pautas mais delicadas: “sinais de
          autismo”, “autismo está aumentando?”, “o filho do famoso é autista?”.
        </p>
        <ul>
          <li>
            <strong>Não aceite falar de criança concreta.</strong> Nem do filho de
            alguém famoso, nem de criança que apareceu em vídeo viral. A exposição
            de criança pesa ainda mais do que a de adulto.
          </li>
          <li>
            <strong>Cuidado com listas de sinais.</strong> Diga que nenhum sinal
            isolado define diagnóstico e que a avaliação é feita por equipe
            habilitada.
          </li>
          <li>
            <strong>Use linguagem neuroafirmativa.</strong> Fale em pessoa autista
            ou criança autista, sem “sofre de autismo” nem “portador”. O{" "}
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista do CFP
            </a>{" "}
            e o post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajudam a escolher as palavras.
          </li>
          <li>
            <strong>Recuse a promessa de “recuperação” ou “cura”.</strong> Se a
            pauta vier assim, proponha falar de qualidade de vida, suporte e
            direitos da família.
          </li>
          <li>
            <strong>Inclua o ponto de vista das próprias pessoas autistas</strong>
            quando o jornalista pedir indicações de fontes.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma rádio pede a uma psicóloga fictícia
          “cinco sinais de que seu filho é autista”. Ela topa falar sobre “quando
          vale procurar uma avaliação” e explica por que listas soltas assustam os
          pais e atrasam o caminho certo.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Aceitar comentar a saúde mental de alguém que você nunca atendeu.</li>
          <li>Contar história de paciente com detalhes que permitem reconhecê-lo.</li>
          <li>Deixar sair a matéria sem o CRP ou com um título que você não tem.</li>
          <li>Prometer resultado (“com terapia, isso passa”).</li>
          <li>Usar a matéria como selo ou com legenda de autoelogio.</li>
          <li>Responder perguntas individuais ao vivo como se fosse atendimento.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de dizer sim</h2>
        <ul>
          <li>Entendi a pauta, o ângulo e se é ao vivo ou gravado.</li>
          <li>O tema é geral e eu tenho base para falar dele.</li>
          <li>Ninguém concreto será analisado na conversa.</li>
          <li>Tenho a linha de identificação com nome completo, psicóloga e CRP.</li>
          <li>Tenho uma frase pronta para recusar perguntas sobre pessoas.</li>
          <li>Meus exemplos são construídos e serão anunciados como fictícios.</li>
          <li>Se houver pagamento, trato a aparição como publicidade (art. 20).</li>
          <li>Sei onde vou guardar a matéria e como vou divulgá-la sem superlativo.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a marca do consultório nasce de uma imersão de dois
          encontros que define posicionamento, tom de voz e identidade visual, com a
          marca entregue em até 30 dias e cada peça revisada pelo art. 20. Uma
          apresentação clara, com bio, foto e página “sobre” prontas, facilita a
          vida de quem é convidada pela imprensa. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer organizar a forma como aparece em público, marque uma
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
            , arts. 2º (alínea q), 9º, 19 e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo. Série CRP SP Orienta —{" "}
            <a href={CRPSP_MIDIA} {...ext}>
              A/o psicóloga/o, a mídia e a ética profissional
            </a>
            , janeiro de 2024.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES3} {...ext}>
              Resolução CFP nº 3/2007
            </a>
            , arts. 53 a 58 (publicidade).
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
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista
            </a>
            , 2025.
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
