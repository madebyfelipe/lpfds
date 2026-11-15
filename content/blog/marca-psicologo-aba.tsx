import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ANS_PARECER =
  "https://www.gov.br/ans/pt-br/arquivos/acesso-a-informacao/transparencia-institucional/pareceres-tecnicos-da-ans/2022/PARECER_TCNICO_N_39_2022_TERAPIAS_E_MTODOS__TRANSTORNO_DO_ESPECTRO_AUTISTA_RN_539.2022_RN_541.2022.pdf";
const LEI_TEA = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";

export const post: Post = {
  slug: "marca-psicologo-aba",
  title: "Marca para psicólogo que trabalha com ABA: como explicar o método às famílias sem promessa",
  description:
    "Como construir a marca de psicóloga ou clínica que usa ABA: nome, linguagem, site, plano de saúde e o que o art. 20 do Código de Ética não permite prometer.",
  keyword: "marca para psicólogo ABA",
  tags: ["neurodivergencia", "posicionamento"],
  publishedAt: "2026-11-15",
  summary:
    "A marca de quem trabalha com ABA precisa explicar o que é a intervenção, quem conduz e como a família participa, sem prometer resultado nem prazo. O art. 20 do Código de Ética exige nome completo e CRP e proíbe previsão taxativa de resultado; a ABA é uma ciência aplicada, não uma profissão, então a identidade profissional vem antes do método. Linguagem respeitosa com a comunidade autista e transparência sobre plano de saúde fazem parte da marca.",
  faq: [
    {
      q: "Posso usar “ABA” no nome do consultório ou da clínica?",
      a: "Pode usar o termo para descrever o serviço, mas a divulgação precisa trazer o nome completo e o CRP da psicóloga, ou o nome da pessoa jurídica com a inscrição no CRP e o responsável técnico. Um nome só com a sigla do método amarra a marca a uma técnica e pode confundir quem não sabe que a ABA não é uma profissão regulamentada."
    },
    {
      q: "Posso divulgar “carga horária intensiva” ou “40 horas por semana”?",
      a: "Pode explicar que a carga horária é definida a partir da avaliação de cada criança e revista com a família. Usar um número de horas como argumento de venda, ou insinuar que mais horas garantem mais resultado, aproxima a divulgação da previsão taxativa de resultado que o art. 20 proíbe."
    },
    {
      q: "Plano de saúde é obrigado a cobrir terapia ABA?",
      a: "A RN 539/2022 da ANS tornou obrigatória a cobertura de qualquer método ou técnica indicado pelo médico assistente para pacientes com diagnóstico enquadrado na CID F84, em número ilimitado de sessões, desde que feito em estabelecimento de saúde ou por telessaúde, segundo parecer técnico da própria ANS. Atendimento em casa ou na escola ficou fora da cobertura obrigatória. Explique isso no site com cuidado e sem prometer aprovação."
    },
    {
      q: "Como falar de ABA com famílias que leram críticas ao método?",
      a: "Com respeito e informação. Diga como você trabalha: objetivos combinados com a família, respeito ao conforto e ao assentimento da criança, registro e revisão do plano. Não desqualifique quem critica nem outras abordagens; o art. 20 veda autopromoção em detrimento de outros profissionais."
    }
  ],
  cover: {
    src: "/blog/marca-psicologo-aba/marca-psicologo-aba-brinquedos-madeira.jpg",
    alt: "Prateleira branca com brinquedos de madeira coloridos, porta-retrato e vaso de planta",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Quem trabalha com ABA costuma ouvir duas perguntas na mesma semana. Uma
        família quer saber se o plano cobre. Outra leu um relato duro na
        internet e quer entender se aquilo é o que acontece no seu consultório.
        A marca precisa responder às duas sem soar como vendedora nem como
        defensiva.
      </p>
      <p>
        A resposta curta: a marca de uma psicóloga que usa Análise do
        Comportamento Aplicada começa pela identidade profissional (nome
        completo, CRP, público), explica o método em linguagem de família e
        mostra como a família participa. Nada de prometer prazo, “fala em seis
        meses” ou “independência garantida”. Abaixo estão as normas, oito
        decisões de marca, uma tabela de pode e evitar, erros comuns e um
        checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          vale para qualquer abordagem. O art. 20 pede nome completo e o
          número do CRP em toda divulgação, e proíbe preço como
          propaganda, previsão taxativa de resultado, autopromoção em detrimento
          de outros profissionais e divulgação sensacionalista. O art. 2º veda
          induzir pessoas a recorrer aos seus serviços.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          permite logomarca e nome artístico, desde que vinculados ao nome
          completo e ao CRP, e diz que a psicóloga pode destacar o público que
          atende, a abordagem que usa e os serviços prestados. Também lembra
          que a profissional “não poderá prever ou garantir resultados”. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          repete esses limites para as redes sociais.
        </p>
        <p>
          Para a família, outras duas normas importam. A{" "}
          <a href={LEI_TEA} {...ext}>
            Lei nº 12.764/2012
          </a>{" "}
          considera a pessoa com transtorno do espectro autista pessoa com
          deficiência para todos os efeitos legais. E a ANS, na RN 539/2022,
          tornou obrigatória a cobertura de qualquer método ou técnica indicado
          pelo médico assistente para diagnósticos da CID F84, como explica o{" "}
          <a href={ANS_PARECER} {...ext}>
            Parecer Técnico nº 39/2022 da ANS
          </a>
          .
        </p>
      </section>

      <section>
        <h2>1. Comece pela profissão, depois pelo método</h2>
        <p>
          A ABA é uma ciência aplicada e um conjunto de procedimentos, não uma
          profissão regulamentada. Por isso a sua marca começa por quem você é:
          psicóloga, com CRP, que atende crianças autistas e as famílias delas.
          O método vem logo depois, como a forma de trabalhar.
        </p>
        <ol>
          <li>Escreva a frase de apresentação com nome, profissão, CRP e público.</li>
          <li>Diga o método na segunda frase: “trabalho com Análise do Comportamento Aplicada (ABA)”.</li>
          <li>Explique em uma linha o que isso quer dizer para a família.</li>
          <li>Cite formação e certificações com o nome exato e quem concedeu.</li>
        </ol>
        <p>
          <em>Exemplo fictício:</em> “Ana Lima, psicóloga (CRP 00/00000).
          Atendo crianças autistas de 2 a 10 anos e oriento as famílias.
          Trabalho com Análise do Comportamento Aplicada: a gente define junto
          os objetivos do dia a dia e acompanha cada passo com registro.”
        </p>
        <p>
          O erro comum é a marca que só diz “ABA”. Ela some no meio de dezenas
          de clínicas com a mesma sigla e não diz quem é a responsável. A{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            definição de posicionamento
          </Link>{" "}
          resolve isso antes do logo.
        </p>
      </section>

      <section>
        <h2>2. Escolha um nome que não fique preso à sigla</h2>
        <p>
          Nome de consultório com “ABA” no meio funciona para ser achado hoje,
          mas prende a marca a uma técnica. Se amanhã você somar orientação
          parental, avaliação ou outra abordagem, o nome já não descreve o
          trabalho.
        </p>
        <ul>
          <li>
            <strong>Consultório individual:</strong> o seu nome completo como
            marca é o caminho mais simples e o que a norma já exige.
          </li>
          <li>
            <strong>Clínica com CNPJ:</strong> nome fantasia com inscrição no
            CRP e responsável técnico, como a cartilha do CRP-MG descreve.
          </li>
          <li>
            <strong>Método no descritor:</strong> deixe “Análise do
            Comportamento Aplicada” no subtítulo, na bio e no título das
            páginas, onde ajuda o Google sem amarrar o nome.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Clínica Raiz · desenvolvimento
          infantil e Análise do Comportamento Aplicada” envelhece melhor que
          “ABA Kids Center”.
        </p>
        <p>
          Evite nomes que sugerem resultado (“Evoluir”, “Supera”) quando ligados
          a promessa no texto, e confira se o nome já existe na sua cidade. O
          guia de{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>{" "}
          traz o passo a passo da busca.
        </p>
      </section>

      <section>
        <h2>3. Explique a ABA em linguagem de família</h2>
        <p>
          A família que chega ao seu site raramente sabe o que é reforçamento,
          linha de base ou análise funcional. Ela quer saber o que acontece na
          sala, quem estará com o filho e como vai saber se está ajudando.
        </p>
        <ol>
          <li>
            <strong>O que é:</strong> uma forma de trabalhar baseada na ciência
            do comportamento, com objetivos definidos a partir da avaliação de
            cada criança.
          </li>
          <li>
            <strong>Como começa:</strong> conversa com a família, avaliação,
            plano escrito com objetivos combinados.
          </li>
          <li>
            <strong>Como acompanha:</strong> registro das sessões e revisões
            periódicas do plano com os responsáveis.
          </li>
          <li>
            <strong>Quem participa:</strong> a psicóloga responsável e, se
            houver, a equipe de aplicadores, com a supervisão descrita.
          </li>
        </ol>
        <p>
          <em>Exemplo fictício de parágrafo:</em> “Antes de qualquer sessão,
          conhecemos a rotina da família e o que mais pesa no dia a dia. Os
          objetivos saem dessa conversa e da avaliação, ficam por escrito e são
          revistos com vocês a cada etapa.”
        </p>
        <p>
          O erro comum é copiar o jargão do curso de formação para o site. Ele
          impressiona colegas e afasta pais cansados. Para o tom certo, veja o
          guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Fale de objetivos, nunca de prazos e garantias</h2>
        <p>
          A divulgação de ABA tem uma armadilha própria: como o trabalho mede
          comportamentos, é tentador transformar medida em promessa. O art. 20
          proíbe previsão taxativa de resultado, e isso inclui prazo para
          falar, deixar a fralda ou “entrar na escola regular”.
        </p>
        <ul>
          <li>Diga que os objetivos são individuais e revistos com a família.</li>
          <li>Diga como o progresso é acompanhado (registro, reuniões de devolutiva).</li>
          <li>Não publique gráficos de evolução de pacientes, mesmo sem nome.</li>
          <li>Não use “antes e depois”, em texto ou vídeo.</li>
          <li>Não associe carga horária a resultado (“quanto mais horas, mais rápido”).</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> troque “Seu filho falando em 6 meses”
          por “Trabalhamos comunicação com objetivos definidos para cada
          criança e acompanhados com a família”.
        </p>
        <p>
          O erro comum aqui é o depoimento de mãe emocionada contando a
          evolução do filho. Além do art. 20, ele expõe a criança. O post sobre{" "}
          <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
            depoimento de paciente
          </Link>{" "}
          explica por que nem com autorização ele resolve.
        </p>
      </section>

      <section>
        <h2>5. Seja transparente sobre plano de saúde</h2>
        <p>
          Para muitas famílias, a primeira pergunta é se o plano cobre. Uma
          página clara sobre isso poupa conversas e mostra organização, desde
          que não prometa aprovação nem cobertura que depende da operadora.
        </p>
        <ol>
          <li>
            Diga se você atende por plano, por reembolso ou só particular, e
            com quais operadoras há credenciamento.
          </li>
          <li>
            Explique, com link para a ANS, que a RN 539/2022 tornou obrigatória
            a cobertura de método indicado pelo médico assistente para a CID
            F84, em estabelecimento de saúde ou por telessaúde.
          </li>
          <li>
            Avise que atendimento em casa ou na escola ficou fora da cobertura
            obrigatória, segundo o mesmo parecer da ANS.
          </li>
          <li>Indique os documentos que a família costuma precisar (pedido médico, relatório).</li>
        </ol>
        <p>
          <em>Exemplo fictício:</em> “Atendemos pelos planos X e Y e por
          reembolso. A cobertura depende do pedido do médico e das regras da
          ANS; ajudamos a organizar a documentação, mas a aprovação é da
          operadora.”
        </p>
        <p>
          Evite valor da sessão como chamariz e frases como “aceitamos todos os
          planos” quando não é verdade. O guia sobre{" "}
          <Link href="/blog/psicologo-divulgar-convenio" className="inst-link">
            divulgar convênio
          </Link>{" "}
          aprofunda o que pode aparecer.
        </p>
      </section>

      <section>
        <h2>6. Mostre a equipe e a supervisão sem expor ninguém</h2>
        <p>
          Em ABA é comum haver aplicadores ou acompanhantes terapêuticos, além
          da psicóloga responsável. A família quer saber quem vai estar com o
          filho. Mostrar a equipe constrói confiança, desde que cada pessoa
          apareça com a profissão e o registro correto.
        </p>
        <ul>
          <li>Psicólogas com nome completo e CRP; outras profissões com o conselho delas.</li>
          <li>Estudantes e aplicadores sem registro descritos como tal, sem título que não têm.</li>
          <li>Explique quem supervisiona e com que frequência o plano é revisto.</li>
          <li>Fotos da equipe no espaço, sem crianças atendidas.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma página “Quem atende” com a
          responsável técnica no topo, as psicólogas da equipe e um parágrafo
          sobre como funciona a supervisão.
        </p>
        <p>
          O erro comum é o vídeo de sessão “para mostrar como é”. Mesmo com o
          rosto da criança borrado, ele mostra atendimento, o que a cartilha e o
          Código desaconselham. Para clínicas com várias profissões, o post de{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            marketing para clínica multidisciplinar de autismo
          </Link>{" "}
          trata dos registros de cada área.
        </p>
      </section>

      <section>
        <h2>7. Converse com as críticas sem atacar ninguém</h2>
        <p>
          Parte da comunidade autista critica práticas associadas à ABA, e
          muitas famílias chegam com essas leituras. A marca não precisa
          entrar em polêmica, mas precisa mostrar que você conhece o debate e
          como cuida do bem-estar da criança.
        </p>
        <ol>
          <li>Diga que os objetivos são construídos com a família e respeitam a criança.</li>
          <li>Explique como você observa conforto, cansaço e recusa durante a sessão.</li>
          <li>Use linguagem neuroafirmativa: “criança autista”, sem “sofre de autismo” nem “cura”.</li>
          <li>Não desqualifique outras abordagens nem quem critica.</li>
        </ol>
        <p>
          <em>Exemplo fictício:</em> “Sabemos que muitas famílias leram relatos
          difíceis sobre intervenções. Aqui, a criança não é forçada a nada:
          observamos sinais de desconforto e ajustamos o plano com vocês.”
          (Escreva só o que de fato acontece no seu consultório.)
        </p>
        <p>
          Evite o símbolo do quebra-cabeça, que parte da comunidade rejeita, e
          frases que tratam o autismo como algo a eliminar. O guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          tem trocas prontas.
        </p>
      </section>

      <section>
        <h2>8. Leve a marca para o site e o Google</h2>
        <p>
          Famílias procuram por “terapia ABA perto de mim”, “psicóloga ABA em”
          mais o bairro, ou pelo nome do plano. O site responde a essas buscas
          quando tem uma página para cada serviço e o endereço bem descrito.
        </p>
        <ul>
          <li>Uma página para a intervenção, outra para orientação parental, outra para avaliação, se houver.</li>
          <li>Título com o serviço e a cidade, sem empilhar palavra-chave.</li>
          <li>Perfil da Empresa no Google com o nome real, categoria e horário.</li>
          <li>Perguntas frequentes reais: plano, idade, frequência, documentos.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de título:</em> “Análise do Comportamento
          Aplicada para crianças autistas em Campinas · Ana Lima, psicóloga”.
        </p>
        <p>
          O erro comum é ter só um Instagram com reels de “dicas”. A família
          que chega pelo Google precisa de uma página que responda às dúvidas
          práticas. Veja{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            como montar a página de serviços
          </Link>{" "}
          e o guia de{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar na marca de quem trabalha com ABA</h2>
        <div className="inst-blog__table" role="region" aria-label="Marca de psicóloga que trabalha com ABA: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Marca de psicóloga que trabalha com ABA: o que pode e o que evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome completo, psicóloga, CRP e o método no descritor</td>
                <td>Marca só com a sigla, sem responsável</td>
              </tr>
              <tr>
                <td>Resultados</td>
                <td>Explicar como os objetivos são definidos e revistos</td>
                <td>Prazo para falar, “independência garantida”</td>
              </tr>
              <tr>
                <td>Carga horária</td>
                <td>Dizer que é definida pela avaliação de cada criança</td>
                <td>Horas por semana como argumento de venda</td>
              </tr>
              <tr>
                <td>Plano de saúde</td>
                <td>Operadoras credenciadas e regras da ANS com link</td>
                <td>Prometer aprovação ou “aceitamos todos”</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Espaço, materiais neutros, equipe</td>
                <td>Vídeo de sessão, criança atendida, antes e depois</td>
              </tr>
              <tr>
                <td>Debate</td>
                <td>Mostrar como cuida do conforto da criança</td>
                <td>Atacar críticos ou outras abordagens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem marca: revise com os olhos de uma família nova</h2>
        <p>
          Se o consultório já existe, peça a alguém de fora da área para ler o
          site e o Instagram e responder três perguntas: quem atende, o que
          acontece na primeira semana e como saber se o plano cobre. Onde a
          pessoa travar, a marca precisa de ajuste.
        </p>
        <p>
          Depois, revise as peças antigas. Posts com gráficos de evolução,
          vídeos de sessão e frases de prazo devem sair, mesmo que tenham
          engajado bem. Atualize a bio para começar pela profissão e confira se
          todo material impresso, do cartão ao folder, traz nome completo e
          CRP. Por fim, alinhe a equipe: cada pessoa que fala da clínica no
          próprio perfil fala também pela marca. Um{" "}
          <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
            manual de marca
          </Link>{" "}
          curto ajuda a manter isso.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Quem procura ABA quase sempre é uma família no começo do caminho:
          diagnóstico recente, fila no SUS ou no plano, muita informação
          desencontrada. A marca pesa muito nesse momento, porque ela é a
          primeira prova de que alguém vai explicar as coisas com calma.
        </p>
        <ul>
          <li>
            <strong>Responda o básico em um lugar só:</strong> idade atendida,
            como é a primeira conversa, plano, documentos. Pais cansados não
            caçam informação em dez posts.
          </li>
          <li>
            <strong>Inclua a família no texto:</strong> orientação aos pais e
            reuniões de devolutiva fazem parte do trabalho; diga isso.
          </li>
          <li>
            <strong>Pense no adolescente e no adulto autista que lê:</strong> o
            texto que você publica também é lido por pessoas autistas. Escreva
            como se elas estivessem na sala.
          </li>
          <li>
            <strong>Ofereça conteúdo útil sem expor ninguém:</strong> um{" "}
            <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
              material educativo para pais
            </Link>{" "}
            com a sua marca informa sem precisar de caso real.
          </li>
        </ul>
        <p>
          Se você também atende outras demandas do espectro, o guia de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          cobre a comunicação mais ampla com as famílias.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Marca que só diz “ABA” e esconde quem é a responsável técnica.</li>
          <li>Prometer prazo, fala, alfabetização ou “independência”.</li>
          <li>Publicar gráfico de evolução, vídeo de sessão ou depoimento de mãe.</li>
          <li>Usar carga horária como argumento de venda.</li>
          <li>Garantir cobertura do plano ou prometer “liminar”.</li>
          <li>Quebra-cabeça, “cura” e “sofre de autismo” no texto e no visual.</li>
          <li>Atacar outras abordagens para parecer mais científico.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da marca</h2>
        <ul>
          <li>A apresentação começa por nome completo, psicóloga e CRP.</li>
          <li>O método aparece explicado em uma frase que uma mãe entende.</li>
          <li>O site diz como os objetivos são definidos e revistos com a família.</li>
          <li>Não há prazo, garantia ou antes e depois em nenhuma peça.</li>
          <li>A página de plano cita a ANS com link e não promete aprovação.</li>
          <li>A equipe aparece com profissão e registro corretos.</li>
          <li>Imagens mostram espaço e equipe, nunca crianças atendidas.</li>
          <li>Linguagem neuroafirmativa revisada em site, bio e impressos.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem
          o posicionamento, a forma de explicar o método às famílias, a
          identidade visual e o site, revisados pelo art. 20. Tudo é
          apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua marca ainda se resume à sigla do método, marque uma
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
            , arts. 2º e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026 (identificação, previsão de resultados,
            pessoa jurídica).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>
            .
          </li>
          <li>
            Agência Nacional de Saúde Suplementar.{" "}
            <a href={ANS_PARECER} {...ext}>
              Parecer Técnico nº 39/GCITS/GGRAS/DIPRO/2022 — terapias e métodos
              para TEA (RN 539/2022 e RN 541/2022)
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_TEA} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
