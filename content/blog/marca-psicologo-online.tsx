import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const TDICS =
  "https://www.crpsp.org/noticia/view/3251/resolucao-do-cfp-que-disciplina-uso-de-tecnologias-digitais-no-exercicio-da-psicologia-ja-esta-em-vigor-plataforma-e-psi-sera-encerrada";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const GBP_DIRETRIZES = "https://support.google.com/business/answer/3038177?hl=pt-BR";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "marca-psicologo-online",
  title: "Marca para psicólogo que só atende online: nome, visual, site e confiança sem consultório físico",
  description:
    "Marca para psicólogo que só atende online: como passar confiança sem endereço, nome, identidade visual para telas, cenário da chamada, site e Google, pelo art. 20.",
  keyword: "marca para psicólogo online",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-17",
  summary:
    "A marca de quem só atende online precisa fazer o trabalho que a placa, a recepção e a sala fazem no presencial: mostrar quem você é, como o atendimento funciona e por que a pessoa pode confiar. Isso se resolve com nome e CRP sempre visíveis, uma identidade visual pensada para telas pequenas, um cenário de chamada coerente, um site que funciona como sede e informações claras sobre plataforma, sigilo e onde você atende. Abaixo há um roteiro em sete passos, com exemplos fictícios e o que a Resolução CFP nº 9/2024 muda na comunicação.",
  faq: [
    {
      q: "Psicólogo que atende só online precisa ter endereço no site?",
      a: "O art. 20 do Código de Ética pede nome completo, a palavra psicólogo e o CRP, não um endereço. Quem atende só online pode informar a cidade e o estado de onde atende, o CRP de inscrição e um canal de contato. Se houver pessoa jurídica, os dados da empresa entram no rodapé, como em qualquer serviço."
    },
    {
      q: "Psicólogo online pode ter perfil no Google Meu Negócio?",
      a: "Em geral, não. As diretrizes do Google reservam o Perfil da Empresa para negócios com local físico que recebe clientes ou que atendem no endereço do cliente. Quem atende só online costuma não se encaixar; nesse caso, o site e os textos do blog fazem o trabalho de ser encontrado na busca."
    },
    {
      q: "Como passar confiança atendendo só online?",
      a: "Mostre o que no presencial seria visto: seu rosto em foto profissional, nome e CRP em todos os canais, como é a primeira conversa, qual plataforma você usa e como protege o sigilo, de onde você atende e quais horários. Clareza sobre o processo passa mais confiança do que qualquer selo ou adjetivo."
    },
    {
      q: "Preciso me cadastrar no e-Psi para atender online?",
      a: "Não. A Resolução CFP nº 9/2024, em vigor desde agosto de 2024, revogou a Resolução CFP nº 11/2018 e dispensou o cadastro na plataforma e-Psi para atendimento online. A resolução trata da adequação do meio, do sigilo e da proteção de dados e da informação ao usuário sobre os recursos usados."
    },
    {
      q: "Qual nome usar na marca de psicólogo online?",
      a: "O seu nome completo continua sendo a base, porque o art. 20 o exige em toda divulgação. Um nome de marca pode vir junto, desde que não sugira promessa nem pareça um aplicativo ou uma plataforma de terapia. Nome fantasia depende de pessoa jurídica registrada."
    }
  ],
  cover: {
    src: "/blog/marca-psicologo-online/marca-psicologo-online-notebook-e-fone-na-mesa.jpg",
    alt: "Notebook fechado com fone de ouvido em cima, mouse, caneta e planta sobre uma mesa clara, espaço de trabalho em casa",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você atende só online. Não tem placa na porta, recepção com o seu
        nome nem sala para fotografar. Tem um link de chamada, um perfil no
        Instagram e, talvez, um site. E disputa a atenção de quem procura
        terapia com aplicativos, plataformas grandes e centenas de colegas que
        também atendem de qualquer lugar.
      </p>
      <p>
        A resposta curta: a marca para psicólogo online precisa fazer o
        trabalho que o espaço físico faz no presencial. Mostrar quem você é,
        como o atendimento funciona e por que a pessoa pode confiar, tudo pela
        tela. Isso pede nome e CRP sempre visíveis, uma identidade visual que
        funcione em telas pequenas, um cenário de chamada coerente, um site
        que seja a sua sede e respostas claras sobre plataforma, sigilo e onde
        você atende. As regras da divulgação do atendimento online estão no
        guia de{" "}
        <Link href="/blog/psicologo-online-divulgacao" className="inst-link">
          psicólogo online e divulgação
        </Link>
        ; aqui o assunto é a marca.
      </p>

      <section>
        <h2>O que dizem as normas para quem atende online</h2>
        <p>
          A{" "}
          <a href={TDICS} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          regula o exercício da psicologia mediado por tecnologias digitais.
          Ela revogou a Resolução CFP nº 11/2018, dispensou o cadastro no
          e-Psi e vale também quando a psicóloga se apresenta como tal nas
          redes para divulgar conhecimento psicológico. Entre os pontos que
          tocam a comunicação: o profissional avalia a adequação do meio para
          cada pessoa, informa ao usuário no contrato os recursos tecnológicos
          usados e protege os dados conforme a LGPD. Quem atende online fica
          dispensado de inscrição secundária no estado de quem é atendido, e o
          foro é o CRP de inscrição.
        </p>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          vale igual: nome completo, a palavra psicólogo e o CRP em toda
          divulgação; nada de preço como propaganda, previsão taxativa de
          resultados, autopromoção em detrimento de colegas ou divulgação
          sensacionalista. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 01/2022
          </a>{" "}
          detalha esses critérios para as redes sociais, que para quem atende
          online costumam ser a vitrine principal.
        </p>
      </section>

      <section>
        <h2>1. Defina para quem e de onde você atende</h2>
        <p>
          Atender online não significa atender todo mundo. Sem um consultório
          que limite o público pelo bairro, o posicionamento precisa fazer esse
          recorte, ou a marca vira mais uma entre milhares.
        </p>
        <ol>
          <li>
            <strong>Escolha o público:</strong> faixa etária, demanda, momento
            de vida. “Adultos que acabaram de se mudar de cidade” diz mais do
            que “adultos”.
          </li>
          <li>
            <strong>Diga de onde você atende:</strong> cidade e estado, CRP de
            inscrição e fuso horário, se atende brasileiros em outros países.
          </li>
          <li>
            <strong>Diga em que idioma e em que horários:</strong> isso filtra
            antes da primeira mensagem.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Ana Ribeiro, psicóloga, CRP 06/00000
          (dados fictícios). Atendo online adultos em transição de carreira,
          de Campinas (SP), em português, de segunda a sexta, das 8h às 20h,
          horário de Brasília.”
        </p>
        <p>
          <strong>Erro comum:</strong> “Atendo online para todo o Brasil e o
          mundo” como única informação. É verdade e não diferencia nada. O
          guia de{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher nicho na psicologia
          </Link>{" "}
          ajuda a fazer o recorte, e o de{" "}
          <Link href="/blog/psicologo-brasileiros-no-exterior" className="inst-link">
            psicólogo para brasileiros no exterior
          </Link>{" "}
          trata de quem atende fora do país.
        </p>
      </section>

      <section>
        <h2>2. Escolha um nome que não pareça aplicativo</h2>
        <p>
          O seu nome completo é a base da marca, porque o artigo 20 o exige. Um
          nome de marca pode vir junto, mas no online há um risco extra: nomes
          que soam como plataforma ou aplicativo de terapia confundem a pessoa
          sobre quem está do outro lado.
        </p>
        <ul>
          <li>
            <strong>Prefira o nome próprio</strong> ou um nome de marca que
            pareça um consultório, não uma startup.
          </li>
          <li>
            <strong>Evite palavras de promessa</strong> (“Equilíbrio Já”,
            “Mente Livre Online”) e termos genéricos que já são de grandes
            plataformas.
          </li>
          <li>
            <strong>Confira domínio e redes</strong> antes de decidir, para ter
            o mesmo nome em todo lugar.
          </li>
          <li>
            <strong>Nome fantasia</strong> só com pessoa jurídica registrada.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia pensou em
          “TerapiaFácil” e desistiu: parecia um aplicativo, sugeria facilidade
          como promessa e não dizia quem atendia. Ficou com “Ana Ribeiro
          Psicologia”, com domínio próprio.
        </p>
        <p>
          <strong>Erro comum:</strong> esconder o nome da pessoa atrás de uma
          marca. No online, o rosto e o nome são o que mais aproxima. Mais
          ideias no guia de{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Desenhe a identidade visual para telas pequenas</h2>
        <p>
          A marca de quem atende online vive em círculos de 40 pixels: foto do
          WhatsApp, avatar do Instagram, ícone do navegador. A identidade
          visual precisa funcionar nesses tamanhos antes de funcionar num
          cartão.
        </p>
        <ol>
          <li>
            <strong>Uma versão reduzida da marca</strong>, legível no avatar:
            iniciais ou um símbolo simples.
          </li>
          <li>
            <strong>Contraste suficiente</strong> nos dois modos de tela, claro
            e escuro.
          </li>
          <li>
            <strong>Poucas cores e uma tipografia legível</strong> em celular.
          </li>
          <li>
            <strong>Modelos de post e de capa de vídeo</strong> com a mesma
            linguagem.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório online fictício tinha
          um logo com ilustração fina e o nome em letra cursiva. No avatar do
          WhatsApp, virava uma mancha. A versão nova usa as iniciais numa
          tipografia firme para os tamanhos pequenos e o logo completo só no
          site.
        </p>
        <p>
          <strong>Erro comum:</strong> aprovar o logo olhando em tela grande.
          Teste sempre no celular, no tamanho real do avatar. O guia de{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          mostra o que compõe o sistema.
        </p>
      </section>

      <section>
        <h2>4. Trate o cenário da chamada como o seu consultório</h2>
        <p>
          Para quem atende online, o enquadramento da câmera é a sala de
          atendimento. É ali que a pessoa forma a impressão do espaço, e ela
          precisa transmitir cuidado e privacidade.
        </p>
        <ul>
          <li>
            <strong>Fundo neutro e real</strong>, sem objetos pessoais em
            destaque. Fundo virtual com borda tremida distrai.
          </li>
          <li>
            <strong>Luz no rosto</strong>, de frente ou de lado, nunca janela
            atrás.
          </li>
          <li>
            <strong>Câmera na altura dos olhos</strong> e áudio limpo, com
            fone se o ambiente tiver eco.
          </li>
          <li>
            <strong>Sinais de privacidade:</strong> porta fechada, ninguém
            passando, notificações desligadas.
          </li>
        </ul>
        <p>
          A identidade visual pode aparecer com discrição: uma cor da marca
          numa almofada ou num quadro, nada de logo atrás da cabeça.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia atendia com uma
          estante cheia de fotos de família ao fundo. Trocou a posição da mesa,
          ficou com uma parede clara e uma planta, e passou a usar a mesma
          imagem de cenário nas fotos do site.
        </p>
        <p>
          <strong>Erro comum:</strong> mostrar a sala de atendimento online em
          fotos com alguém sendo atendido. Sem sessão, sem paciente, nem
          encenado. O guia de{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>{" "}
          traz outros cuidados.
        </p>
      </section>

      <section>
        <h2>5. Faça do site a sua sede</h2>
        <p>
          Sem endereço físico, o site é o único lugar que é seu de verdade, com
          domínio próprio, regras suas e informação completa. Ele responde ao
          que a recepção responderia.
        </p>
        <ol>
          <li>
            <strong>Quem é você:</strong> foto, nome, CRP, formação e
            abordagem.
          </li>
          <li>
            <strong>Para quem atende e como:</strong> público, frequência,
            duração, idioma, horários e fuso.
          </li>
          <li>
            <strong>Como funciona o online:</strong> plataforma usada, o que a
            pessoa precisa (lugar reservado, fone, conexão), o que acontece se
            a conexão cair.
          </li>
          <li>
            <strong>Sigilo e dados:</strong> como a plataforma protege a
            conversa e o que você guarda, com link para a política de
            privacidade.
          </li>
          <li>
            <strong>Contato:</strong> um caminho claro para a primeira
            conversa.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “As sessões acontecem por chamada de
          vídeo, numa plataforma com criptografia. Antes da primeira, envio um
          guia curto com o link, como testar câmera e áudio e o que fazemos se
          a conexão cair.”
        </p>
        <p>
          <strong>Erro comum:</strong> só ter Instagram. A rede é alugada, o
          site é seu, e é nele que quem pesquisa no Google chega. O guia de{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>{" "}
          detalha as páginas.
        </p>
      </section>

      <section>
        <h2>6. Seja encontrada sem perfil no Google Maps</h2>
        <p>
          As{" "}
          <a href={GBP_DIRETRIZES} {...ext}>
            diretrizes do Perfil da Empresa no Google
          </a>{" "}
          pedem um local físico que recebe clientes ou atendimento no
          endereço do cliente. Quem atende só online, em geral, não se encaixa,
          e endereço inventado ou escritório virtual viola essas regras. A
          busca orgânica é o caminho.
        </p>
        <ul>
          <li>
            <strong>Páginas por demanda</strong>, que respondam a buscas como
            “terapia online para ansiedade no trabalho”.
          </li>
          <li>
            <strong>Blog com dúvidas reais</strong> do seu público, escritas
            com fonte e sem promessa.
          </li>
          <li>
            <strong>Títulos e descrições claros</strong> em cada página, com o
            que ela responde.
          </li>
          <li>
            <strong>Perfis em diretórios profissionais</strong> confiáveis, com
            os mesmos dados do site.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia que atende
          online mães no puerpério escreveu uma página sobre como funciona a
          terapia online com um bebê em casa: horários flexíveis, o que fazer
          se o bebê acordar, privacidade. É uma busca que só uma página
          específica responde bem.
        </p>
        <p>
          <strong>Erro comum:</strong> criar um perfil no Google com o
          endereço de casa ou de um coworking onde ninguém é atendido. O guia
          de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          mostra o caminho da busca orgânica.
        </p>
      </section>

      <section>
        <h2>7. Mostre o processo do primeiro contato à primeira sessão</h2>
        <p>
          No presencial, a pessoa vê a sala, a recepção, a placa. No online,
          o que reduz a insegurança é saber o que vai acontecer em cada etapa.
          Descreva o caminho inteiro.
        </p>
        <ol>
          <li>
            <strong>Primeiro contato:</strong> por onde, em quanto tempo você
            responde, o que perguntar.
          </li>
          <li>
            <strong>Conversa inicial:</strong> se existe, quanto dura e para
            que serve.
          </li>
          <li>
            <strong>Antes da primeira sessão:</strong> contrato, link,
            orientações técnicas.
          </li>
          <li>
            <strong>Primeira sessão:</strong> o que se conversa, como se combina
            a frequência.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório online fictício colocou
          no site uma linha do tempo em quatro passos, do “Mande uma mensagem”
          ao “Primeira sessão”. As perguntas repetidas no WhatsApp caíram, e
          as conversas passaram a começar pelo que importava.
        </p>
        <p>
          <strong>Erro comum:</strong> mandar o link da plataforma sem
          nenhuma orientação. Para quem nunca fez terapia online, o primeiro
          minuto com câmera travada pode encerrar o processo. O guia de{" "}
          <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
            manual de boas-vindas do consultório
          </Link>{" "}
          ajuda a montar esse material.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na marca de quem atende online</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na marca de psicólogo que atende só online"
            tabIndex={0}
          >
            <caption>Marca para psicólogo online: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome, CRP, cidade e estado de onde atende</td>
                <td>Só nome de marca, sem pessoa nem CRP</td>
              </tr>
              <tr>
                <td>Nome</td>
                <td>Nome próprio ou marca com cara de consultório</td>
                <td>Nome de aplicativo ou de promessa</td>
              </tr>
              <tr>
                <td>Visual</td>
                <td>Versão reduzida legível no avatar</td>
                <td>Logo detalhado que vira mancha no celular</td>
              </tr>
              <tr>
                <td>Fotos</td>
                <td>Seu rosto e o cenário da chamada, sem pessoas</td>
                <td>Sessão encenada com “paciente” na tela</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Site e blog com páginas por demanda</td>
                <td>Perfil no Maps com endereço onde ninguém é atendido</td>
              </tr>
              <tr>
                <td>Oferta</td>
                <td>Explicar como funciona o atendimento online</td>
                <td>“Terapia online por R$ 50” ou “primeira sessão grátis”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já está estabelecida: escalar sem virar plataforma</h2>
        <p>
          Quando a agenda online enche, surgem duas tentações: abrir vagas para
          colegas sob a sua marca ou criar produtos em escala. As duas mexem
          com a marca e com a ética.
        </p>
        <p>
          Se você passar a reunir outras psicólogas, a marca precisa deixar
          claro quem atende quem, com o nome e o CRP de cada profissional, e a
          estrutura (pessoa jurídica, registro no CRP) precisa acompanhar. Uma
          marca pessoal que vira coletiva sem avisar confunde quem chega
          esperando você.
        </p>
        <p>
          Se a ideia é criar cursos ou materiais, separe o que é atendimento
          do que é educação, com páginas e chamadas diferentes. O guia{" "}
          <Link href="/blog/psicologo-vender-curso-material" className="inst-link">
            psicólogo pode vender curso
          </Link>{" "}
          trata desses limites.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes online</h2>
        <p>
          O atendimento online com famílias de crianças autistas costuma
          envolver muito os pais: orientação parental, conversas sobre rotina,
          escola e comunicação. A marca precisa mostrar isso com clareza, para
          que a família saiba o que esperar do formato.
        </p>
        <ul>
          <li>
            <strong>Diga quem participa:</strong> só os pais, a criança com os
            pais, ou combinações ao longo do processo.
          </li>
          <li>
            <strong>Explique como você avalia a adequação do formato</strong>{" "}
            para cada família, como pede a Resolução CFP nº 9/2024, levando em
            conta idade, comunicação e necessidades sensoriais.
          </li>
          <li>
            <strong>Mostre os cuidados práticos:</strong> tempo de tela,
            pausas, objetos da criança por perto, um adulto disponível.
          </li>
          <li>
            <strong>Fale de orientação, não de resultado:</strong> nada de
            “desenvolva a fala do seu filho em casa”.
          </li>
        </ul>
        <p>
          Como você não tem sala para mostrar, um guia curto para a família,
          com o que preparar antes da chamada, ajuda muito. Os dados das
          crianças pedem cuidado redobrado, porque a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          (art. 14) exige que o tratamento seja feito no melhor interesse
          delas. O guia de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental: como divulgar
          </Link>{" "}
          complementa este.
        </p>
      </section>

      <section>
        <h2>Erros comuns na marca de quem atende online</h2>
        <ul>
          <li>“Atendo todo o Brasil e o mundo” como único posicionamento.</li>
          <li>Nome que parece aplicativo ou promete facilidade.</li>
          <li>Logo que não funciona no avatar do celular.</li>
          <li>Cenário de chamada com objetos pessoais e pouca luz.</li>
          <li>Só Instagram, sem site próprio.</li>
          <li>Perfil no Google Maps com endereço onde ninguém é atendido.</li>
          <li>Preço baixo como chamariz.</li>
          <li>Nada sobre plataforma, sigilo e o que acontece se a conexão cair.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da marca para psicólogo online</h2>
        <ul>
          <li>Público, cidade e estado de onde atende, idioma e fuso definidos.</li>
          <li>Nome completo e CRP em todos os canais.</li>
          <li>Nome de marca com cara de consultório, domínio e redes iguais.</li>
          <li>Versão reduzida do logo testada no tamanho do avatar.</li>
          <li>Cenário de chamada com luz, fundo neutro e privacidade.</li>
          <li>Site com abordagem, como funciona o online, sigilo e contato.</li>
          <li>Páginas por demanda e blog no lugar do perfil no Maps.</li>
          <li>Caminho do primeiro contato à primeira sessão descrito.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30, que
          também acontece online, entende como você trabalha, para quem e aonde
          quer chegar. Daí saem o posicionamento, o tom de voz, a identidade
          visual pensada para telas e o site que funciona como a sua sede, com
          cada texto revisado pelo art. 20. Tudo é apresentado em até 30 dias,
          com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua marca online ainda é só um perfil e um link de chamada,
          marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={TDICS} {...ext}>
              Resolução do CFP que disciplina o uso de tecnologias digitais já
              está em vigor; plataforma e-Psi será encerrada
            </a>{" "}
            (Resolução CFP nº 9/2024).
          </li>
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
              Nota Técnica CFP nº 01/2022 — uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={GBP_DIRETRIZES} {...ext}>
              Diretrizes para representar sua empresa no Google
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 14.
          </li>
        </ul>
      </section>
    </>
  )
};
