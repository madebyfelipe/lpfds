import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LBI = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm";
const BERENICE = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const WCAG = "https://www.w3.org/TR/WCAG22/";
const WAI_CHECK = "https://www.w3.org/WAI/test-evaluate/preliminary/";
const EMAG = "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade";
const MANUAL_ANTICAP = "https://site.cfp.org.br/wp-content/uploads/2025/10/Manual_Anticapacitista_web.pdf";

export const post: Post = {
  slug: "site-acessivel-psicologo",
  title: "Site acessível para psicólogo: 8 ajustes de WCAG que famílias neurodivergentes percebem",
  description:
    "Como deixar o site do consultório acessível: o que a Lei Brasileira de Inclusão e as WCAG pedem e 8 ajustes de texto, contraste, movimento e formulário.",
  keyword: "site acessível para psicólogo",
  tags: ["presenca-digital", "neurodivergencia"],
  publishedAt: "2026-11-13",
  summary:
    "Um site acessível é aquele que qualquer pessoa consegue ler, navegar e usar para pedir horário, inclusive com leitor de tela, só com teclado, com baixa visão ou com sensibilidade a movimento. A Lei Brasileira de Inclusão (art. 63) torna a acessibilidade obrigatória nos sites de empresas e aponta as diretrizes internacionais, que hoje são as WCAG do W3C. Para a psicóloga, os ajustes que mais pesam são texto claro, contraste, imagens com descrição, movimento sob controle e formulário que funciona sem mouse.",
  faq: [
    {
      q: "Site de psicólogo precisa ser acessível por lei?",
      a: "O art. 63 da Lei Brasileira de Inclusão torna obrigatória a acessibilidade nos sites mantidos por empresas com sede ou representação no país e por órgãos de governo, conforme as diretrizes internacionais. Quem atende com CNPJ se enquadra de forma mais direta. Para quem atende como pessoa física, a obrigação literal é menos clara, mas as mesmas diretrizes valem como boa prática, ainda mais para quem atende pessoas com deficiência."
    },
    {
      q: "O que é WCAG e qual nível o site deve seguir?",
      a: "WCAG são as Diretrizes de Acessibilidade para Conteúdo Web do W3C, a referência internacional que a lei brasileira aponta. A versão atual é a 2.2. O nível AA é o mais usado como meta: inclui contraste mínimo de 4,5:1 para texto comum, navegação por teclado, foco visível, textos alternativos e formulários com rótulos."
    },
    {
      q: "Plugin de acessibilidade resolve?",
      a: "Não sozinho. Os botões que aumentam fonte ou mudam contraste podem ajudar alguns visitantes, mas não corrigem imagem sem descrição, formulário sem rótulo, menu que não abre pelo teclado nem texto confuso. A acessibilidade está na construção do site, não num ícone a mais."
    },
    {
      q: "Como testar se o meu site é acessível?",
      a: "Comece com testes simples: navegue só com a tecla Tab e veja se chega a todos os links e ao formulário, aumente o zoom para 200% e veja se nada se perde, e confira o contraste das cores. Ferramentas automáticas, como as extensões baseadas no axe, apontam parte dos problemas. O W3C publica um roteiro de verificação inicial, o Easy Checks, que guia esses testes passo a passo."
    }
  ],
  cover: {
    src: "/blog/site-acessivel-psicologo/site-acessivel-psicologo-site-acessivel-teclado-e-mesa.jpg",
    alt: "Teclado e trackpad brancos sobre mesa de madeira, diante da base de um monitor, estação de trabalho vazia",
    caption: "Foto: pvproductions / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Uma mãe abre o seu site no celular, às onze da noite, com o filho
        finalmente dormindo. A letra é miúda, o texto é cinza-claro sobre bege,
        um carrossel troca de foto a cada três segundos e o botão de agendamento
        fica escondido atrás de um ícone. Ela desiste. Outra pessoa usa leitor de
        tela e ouve “imagem, imagem, link, link” sem saber onde está.
      </p>
      <p>
        A resposta curta: um site acessível é aquele que qualquer pessoa consegue
        ler, navegar e usar para pedir horário, e a Lei Brasileira de Inclusão
        aponta as diretrizes internacionais, as WCAG, como referência. Para quem
        atende famílias neurodivergentes, isso pesa ainda mais, porque parte do
        seu público é autista, tem TDAH, dislexia ou cansaço sensorial. Abaixo
        estão as normas e oito ajustes práticos, do texto ao formulário.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O art. 63 da{" "}
          <a href={LBI} {...ext}>
            Lei Brasileira de Inclusão (Lei nº 13.146/2015)
          </a>{" "}
          diz que “é obrigatória a acessibilidade nos sítios da internet mantidos
          por empresas com sede ou representação comercial no País ou por órgãos
          de governo”, conforme “as melhores práticas e diretrizes de
          acessibilidade adotadas internacionalmente”. A{" "}
          <a href={BERENICE} {...ext}>
            Lei nº 12.764/2012
          </a>{" "}
          considera a pessoa com transtorno do espectro autista pessoa com
          deficiência para todos os efeitos legais (art. 1º, § 2º), o que traz
          esse público para dentro da LBI.
        </p>
        <p>
          As diretrizes internacionais são as{" "}
          <a href={WCAG} {...ext}>
            WCAG 2.2
          </a>
          , do W3C, organizadas em quatro princípios: perceptível, operável,
          compreensível e robusto. No Brasil, o governo mantém o{" "}
          <a href={EMAG} {...ext}>
            eMAG
          </a>
          , modelo baseado nas WCAG e obrigatório para a administração pública
          federal, útil como guia em português. O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          também conversa com o tema: entre os princípios fundamentais está
          contribuir para eliminar formas de discriminação, e o site é a primeira
          porta do seu serviço.
        </p>
      </section>

      <section>
        <h2>Ajuste 1: texto claro e organizado</h2>
        <p>
          O ajuste mais barato e de maior efeito é o texto. Frases curtas, um
          assunto por parágrafo e títulos que dizem o que vem abaixo ajudam quem
          tem dislexia, TDAH, cansaço ou lê em segunda língua.
        </p>
        <ol>
          <li>Abra cada página com a resposta: para quem é o atendimento e como marcar.</li>
          <li>Use títulos (H2, H3) de verdade, não só texto em negrito. O leitor de tela navega por eles.</li>
          <li>Prefira listas a blocos longos quando houver passos ou opções.</li>
          <li>Troque jargão por palavras comuns e explique siglas na primeira vez.</li>
          <li>Evite texto todo em caixa alta e em itálico longo, mais difíceis de ler.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> a página inicial de um consultório
          fictício começava com um parágrafo sobre “abordagens integrativas para
          a ressignificação de vivências”. A versão nova diz: “Atendo crianças de
          4 a 12 anos e orientação de pais, presencial em Campinas e online.
          Veja como marcar”.
        </p>
        <p>
          <strong>Erro comum:</strong> confundir texto acolhedor com texto longo.
          O post sobre{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          mostra como ser acolhedora em poucas palavras.
        </p>
      </section>

      <section>
        <h2>Ajuste 2: contraste e tamanho de letra</h2>
        <p>
          Texto precisa se destacar do fundo. As WCAG pedem contraste mínimo de
          4,5:1 para texto comum e 3:1 para texto grande e elementos gráficos
          importantes, como bordas de campos e ícones.
        </p>
        <ul>
          <li>
            <strong>Cuidado com a paleta “calma”:</strong> cinza-claro sobre
            bege, verde-água sobre branco e lilás sobre rosa costumam falhar.
          </li>
          <li>
            <strong>Letra do corpo confortável:</strong> evite texto corrido
            muito pequeno e deixe o navegador aumentar a fonte.
          </li>
          <li>
            <strong>Zoom de 200%:</strong> o conteúdo precisa continuar legível,
            sem cortar texto nem exigir rolagem para os lados (critérios 1.4.4 e
            1.4.10).
          </li>
          <li>
            <strong>Não use só a cor para informar:</strong> um campo com erro
            precisa de texto dizendo o erro, não só da borda vermelha.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia ama o rosa-claro
          da marca. Em vez de abandonar a cor, ela a usa como fundo de blocos e
          deixa o texto em tom escuro, que passa no teste de contraste.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher cores só no monitor do designer.
          O post sobre{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          explica como montar uma paleta que funciona na tela.
        </p>
      </section>

      <section>
        <h2>Ajuste 3: imagens com descrição</h2>
        <p>
          Toda imagem que informa algo precisa de texto alternativo (critério
          1.1.1). Imagem só decorativa recebe alternativo vazio, para o leitor de
          tela pular.
        </p>
        <ul>
          <li>
            <strong>Descreva o que a imagem mostra e por que está ali:</strong>{" "}
            “Sala de atendimento com poltronas cinza e luz natural”, não
            “imagem1.jpg” nem uma lista de palavras-chave.
          </li>
          <li>
            <strong>Foto da psicóloga:</strong> “Ana Souza, psicóloga, sorrindo
            em frente a uma estante de livros”.
          </li>
          <li>
            <strong>Texto dentro de imagem:</strong> evite. Se usar, repita o
            texto no alternativo ou na página.
          </li>
          <li>
            <strong>Vídeos:</strong> legendas para quem não ouve e uma descrição
            ou transcrição para quem não vê (critérios 1.2.2 e 1.2.3).
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício publicava a
          agenda de grupos como um cartaz em imagem. Quem usava leitor de tela
          não sabia datas nem horários. A clínica passou a publicar as mesmas
          informações em texto, abaixo do cartaz.
        </p>
        <p>
          <strong>Erro comum:</strong> usar foto de banco com criança para
          “alegrar” a página. Além da acessibilidade, o art. 20 pede cuidado com
          imagem de atendimento. O texto sobre{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>{" "}
          traz alternativas.
        </p>
      </section>

      <section>
        <h2>Ajuste 4: movimento sob controle</h2>
        <p>
          Animação, carrossel automático e vídeo que toca sozinho distraem e podem
          causar desconforto em quem tem sensibilidade sensorial, TDAH, enxaqueca
          ou distúrbio vestibular. O que se move sozinho por mais de cinco
          segundos precisa poder ser pausado (critério 2.2.2).
        </p>
        <ol>
          <li>Evite carrossel automático. Se usar, ponha botão de pausa visível.</li>
          <li>Não deixe vídeo tocar com som ao abrir a página.</li>
          <li>Respeite a preferência do sistema de “reduzir movimento”.</li>
          <li>Nada pisca mais de três vezes por segundo (critério 2.3.1).</li>
          <li>Evite pop-up que surge no meio da leitura.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> o site de uma clínica fictícia abria com
          um vídeo em loop de pássaros voando. Ficou bonito no lançamento, mas os
          pais reclamavam que a página “dava agonia”. A clínica trocou por uma
          foto parada da sala de espera.
        </p>
        <p>
          <strong>Erro comum:</strong> achar que movimento é sinônimo de site
          moderno. Para o público neurodivergente, previsibilidade costuma valer
          mais que efeito.
        </p>
      </section>

      <section>
        <h2>Ajuste 5: navegação por teclado e foco visível</h2>
        <p>
          Quem não usa mouse navega com a tecla Tab, com um acionador ou por voz.
          Todo link, botão e campo precisa ser alcançável e mostrar onde o foco
          está (critérios 2.1.1 e 2.4.7).
        </p>
        <ul>
          <li>Teste: aperte Tab da primeira à última parte da página.</li>
          <li>O contorno de foco aparece em todos os itens e tem contraste.</li>
          <li>O menu do celular abre e fecha pelo teclado.</li>
          <li>Um link “pular para o conteúdo” no topo poupa dezenas de toques.</li>
          <li>Áreas de toque têm tamanho suficiente; as WCAG 2.2 pedem no mínimo 24 por 24 pixels (critério 2.5.8).</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia testa o próprio
          site só com o teclado e descobre que o botão do WhatsApp flutuante não
          recebe foco. O desenvolvedor corrige em uma tarde.
        </p>
        <p>
          <strong>Erro comum:</strong> remover o contorno de foco porque “fica
          feio”. Ele pode ser redesenhado na cor da marca, mas não pode sumir.
        </p>
      </section>

      <section>
        <h2>Ajuste 6: formulário e agendamento que qualquer um usa</h2>
        <p>
          O formulário é onde o site vira conversa. Se ele falha para uma
          pessoa, ela não chega até você.
        </p>
        <ol>
          <li>Cada campo tem rótulo visível acima dele (critério 3.3.2).</li>
          <li>Erros dizem o que corrigir, em texto (critério 3.3.1).</li>
          <li>Peça só o necessário: nome, contato, modalidade e horário.</li>
          <li>Nada de CAPTCHA de imagens sem alternativa.</li>
          <li>Ofereça outro caminho: telefone, e-mail ou mensagem escrita.</li>
        </ol>
        <p>
          O post sobre{" "}
          <Link href="/blog/agendamento-online-psicologo" className="inst-link">
            agendamento online para psicólogo
          </Link>{" "}
          detalha os campos e a LGPD.
        </p>
        <p>
          <strong>Erro comum:</strong> usar o texto de exemplo dentro do campo
          como único rótulo. Ele some quando a pessoa começa a digitar, e quem
          tem dificuldade de memória de trabalho esquece o que estava
          preenchendo.
        </p>
      </section>

      <section>
        <h2>Ajuste 7: páginas previsíveis</h2>
        <p>
          Menus no mesmo lugar, botões com o mesmo nome e páginas com a mesma
          estrutura reduzem esforço. As WCAG pedem navegação e identificação
          consistentes (critérios 3.2.3 e 3.2.4).
        </p>
        <ul>
          <li>O menu tem poucos itens, sempre na mesma ordem.</li>
          <li>O botão de agendamento tem sempre o mesmo texto.</li>
          <li>Links dizem para onde vão: “ver como funciona a avaliação”, não “clique aqui”.</li>
          <li>Links que abrem nova aba ou baixam arquivo avisam isso.</li>
          <li>O idioma da página está declarado, para o leitor de tela pronunciar bem.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um site fictício chamava o mesmo botão de
          “agende”, “fale comigo”, “quero começar” e “contato”, em páginas
          diferentes. Unificado como “pedir horário”, ficou claro que era uma
          ação só.
        </p>
        <p>
          <strong>Erro comum:</strong> criar um menu “criativo”, com ícones sem
          texto. O post sobre{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site profissional para psicólogo
          </Link>{" "}
          mostra a estrutura mínima de páginas.
        </p>
      </section>

      <section>
        <h2>Ajuste 8: teste antes de publicar e depois de cada mudança</h2>
        <p>
          Acessibilidade se confere, não se supõe. Um teste de meia hora pega a
          maior parte dos problemas básicos.
        </p>
        <ol>
          <li>Siga o roteiro de{" "}
            <a href={WAI_CHECK} {...ext}>
              verificação inicial do W3C
            </a>
            .
          </li>
          <li>Rode uma ferramenta automática (extensões baseadas no axe ou o Lighthouse do navegador).</li>
          <li>Navegue só com o teclado.</li>
          <li>Abra no celular, com zoom e com a fonte do sistema aumentada.</li>
          <li>Ative o leitor de tela do celular e ouça a página inicial.</li>
        </ol>
        <p>
          Ferramenta automática não pega tudo: ela não sabe se o texto
          alternativo descreve bem a imagem nem se o texto é claro. O teste com
          gente real, inclusive pessoas com deficiência, completa o quadro.
        </p>
        <p>
          <strong>Erro comum:</strong> testar uma vez, no lançamento, e nunca
          mais. Cada página nova, post ou troca de cor pode quebrar algo.
        </p>
      </section>

      <section>
        <h2>Site acessível: o que fazer e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Site acessível para psicólogo: o que fazer e o que evitar" tabIndex={0}>
          <table>
            <caption>Site acessível para psicólogo: o que fazer e o que evitar</caption>
            <thead><tr><th scope="col">Fazer</th><th scope="col">Evitar</th></tr></thead>
            <tbody>
              <tr><td>Texto escuro sobre fundo claro, com contraste de 4,5:1</td><td>Cinza-claro sobre bege</td></tr>
              <tr><td>Títulos H2 e H3 reais</td><td>Texto em negrito fazendo papel de título</td></tr>
              <tr><td>Texto alternativo que descreve a imagem</td><td>Alternativo vazio em imagem que informa</td></tr>
              <tr><td>Foto parada ou animação que pode ser pausada</td><td>Carrossel automático sem pausa</td></tr>
              <tr><td>Contorno de foco visível na cor da marca</td><td>Remover o foco “porque é feio”</td></tr>
              <tr><td>Rótulo visível em cada campo</td><td>Só texto de exemplo dentro do campo</td></tr>
              <tr><td>“Pedir horário” em todas as páginas</td><td>Quatro nomes diferentes para o mesmo botão</td></tr>
              <tr><td>Construir acessível desde o começo</td><td>Confiar só num plugin de acessibilidade</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já fez o básico: declare e convide retorno</h2>
        <p>
          Depois dos ajustes, uma página curta de acessibilidade mostra
          compromisso e abre canal para quem encontrou barreiras.
        </p>
        <ul>
          <li>Diga qual referência o site segue (por exemplo, WCAG 2.2, nível AA).</li>
          <li>Liste limitações conhecidas, sem esconder.</li>
          <li>Dê um contato para relatar problemas e prometa só o que pode cumprir, como “respondo em até cinco dias úteis”.</li>
          <li>Registre a data da última revisão.</li>
        </ul>
        <p>
          Nada de selo “100% acessível”: não existe garantia absoluta, e a frase
          vira promessa que o site não sustenta. O mesmo cuidado com promessas
          vale para todo o{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            processo de criação do site
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Seu público inclui pais neurodivergentes, adolescentes autistas que
          pesquisam sozinhos e famílias sobrecarregadas. Para eles, o site é um
          ensaio de como será o atendimento.
        </p>
        <ul>
          <li>
            <strong>Previsibilidade:</strong> uma página “como é a primeira
            consulta”, com passos e, se possível, fotos da sala e da entrada,
            ajuda a preparar a criança.
          </li>
          <li>
            <strong>Baixa carga sensorial:</strong> sem som automático, sem
            animação forte, com bastante respiro entre os blocos.
          </li>
          <li>
            <strong>Escrita alternativa à ligação:</strong> muitas pessoas
            autistas preferem mensagem escrita a telefonema. Deixe isso claro.
          </li>
          <li>
            <strong>Linguagem respeitosa:</strong> “criança autista”, sem “sofre
            de autismo”. O{" "}
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista do CFP
            </a>{" "}
            e o post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajudam.
          </li>
          <li>
            <strong>Coerência com o espaço físico:</strong> se o consultório
            oferece ajustes sensoriais, conte isso no site. O texto sobre{" "}
            <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
              consultório sensorialmente acessível
            </Link>{" "}
            traz ideias.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia publica uma página
          com seis fotos em sequência: fachada, recepção, corredor, sala, banheiro
          e a sala de espera vazia. Os pais passam a mostrar a página aos filhos
          antes da primeira visita.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Paleta suave demais, sem contraste para ler.</li>
          <li>Carrossel e vídeo automáticos sem pausa.</li>
          <li>Imagens sem texto alternativo ou com alternativo cheio de palavras-chave.</li>
          <li>Formulário sem rótulos e com CAPTCHA de imagem.</li>
          <li>Instalar um plugin e considerar o assunto resolvido.</li>
          <li>Prometer “site 100% acessível”.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do site acessível</h2>
        <ul>
          <li>Texto curto, com títulos reais e listas.</li>
          <li>Contraste de 4,5:1 no texto e 3:1 em ícones e bordas.</li>
          <li>Zoom de 200% sem perder conteúdo.</li>
          <li>Texto alternativo em toda imagem que informa.</li>
          <li>Legendas nos vídeos.</li>
          <li>Nada se move sozinho sem pausa; nada pisca.</li>
          <li>Tudo alcançável pelo teclado, com foco visível.</li>
          <li>Formulário com rótulos, erros em texto e alternativa de contato.</li>
          <li>Menu e botões consistentes em todas as páginas.</li>
          <li>Teste automático e manual a cada mudança.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a marca do consultório nasce de uma imersão de dois
          encontros que define posicionamento, tom de voz e identidade visual, com a
          marca entregue em até 30 dias e cada peça revisada pelo art. 20. O site é
          construído com contraste conferido nos temas claro e escuro, textos
          alternativos e formulário que funciona pelo teclado, e testado com
          ferramentas automáticas antes de ir ao ar. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Para conversar sobre o seu site, marque 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Brasil.{" "}
            <a href={LBI} {...ext}>
              Lei nº 13.146/2015 — Lei Brasileira de Inclusão
            </a>
            , art. 63.
          </li>
          <li>
            Brasil.{" "}
            <a href={BERENICE} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista
            </a>
            , art. 1º, § 2º.
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.2
            </a>
            .
          </li>
          <li>
            W3C WAI.{" "}
            <a href={WAI_CHECK} {...ext}>
              Easy Checks — A First Review of Web Accessibility
            </a>
            .
          </li>
          <li>
            Governo Federal.{" "}
            <a href={EMAG} {...ext}>
              eMAG — Modelo de Acessibilidade em Governo Eletrônico
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , princípios fundamentais e art. 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista
            </a>
            , 2025.
          </li>
        </ul>
      </section>
    </>
  )
};
