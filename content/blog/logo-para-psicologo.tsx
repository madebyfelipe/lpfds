import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";
const LDA = "https://www.planalto.gov.br/ccivil_03/leis/l9610.htm";
const WCAG = "https://www.w3.org/TR/WCAG22/";

export const post: Post = {
  slug: "logo-para-psicologo",
  title: "Logo para psicólogo: 7 passos para sair do Ψ genérico e criar uma marca sua",
  description:
    "Como criar o logo do consultório de psicologia: quando usar o símbolo Ψ, tipos de logo, cor, tipografia, versões, registro no INPI e o que o art. 20 exige.",
  keyword: "logo para psicólogo",
  tags: ["identidade-visual"],
  publishedAt: "2026-11-13",
  summary:
    "Um bom logo para psicólogo nasce do posicionamento, não do símbolo Ψ: ele precisa ser reconhecível, legível em tamanho pequeno e coerente com o público que você atende. O Ψ pode entrar, mas sozinho ele diz só “psicologia” e se parece com o de milhares de colegas. Pelo art. 20 do Código de Ética, o logo não substitui nome completo, a palavra psicóloga e o CRP na divulgação, e não pode carregar promessa nem título que você não tem.",
  faq: [
    {
      q: "Psicólogo precisa usar o símbolo Ψ no logo?",
      a: "Não. Nenhuma norma do CFP exige o Ψ na marca de quem atende. O símbolo é a letra grega psi, ligada à palavra psique, e sinaliza a área de imediato. O problema é que, sozinho, ele aparece em milhares de logos e não diferencia você. Use se ele servir à ideia da sua marca; não por obrigação."
    },
    {
      q: "O CRP precisa aparecer dentro do logo?",
      a: "Não dentro do desenho, mas o art. 20 do Código de Ética e a Resolução CFP nº 3/2007 pedem nome completo, a palavra psicóloga ou psicólogo e o número do CRP em toda divulgação. Por isso o logo costuma ganhar uma versão com assinatura completa para cartão, site, placa e perfis."
    },
    {
      q: "Posso fazer o logo do consultório no Canva?",
      a: "Pode, para começar. O risco é que modelos prontos são usados por muitas pessoas, o que atrapalha a diferenciação e, em geral, impede o registro como marca exclusiva. Leia também a licença da ferramenta: alguns elementos não podem compor marca registrada. Quando o consultório cresce, vale um projeto próprio."
    },
    {
      q: "Preciso registrar o logo do consultório no INPI?",
      a: "Não é obrigatório para atender, mas o registro no INPI dá o direito de uso exclusivo da marca na sua área. Antes de investir em placa, site e materiais, faça uma busca no INPI para ver se não há marca parecida já registrada. Nome completo de pessoa física tem regras próprias e o processo vale a orientação de um especialista em marcas."
    },
    {
      q: "Que cores usar no logo de psicólogo?",
      a: "Não existe cor certa para psicologia. Azul, verde e lilás são comuns justamente por isso, e repetir o que todos usam reduz a chance de ser lembrada. Escolha a partir do público e da personalidade da marca, e confira o contraste para que o logo funcione em fundo claro e escuro."
    }
  ],
  cover: {
    src: "/blog/logo-para-psicologo/logo-para-psicologo-papel-e-pinceis.jpg",
    alt: "Folha de papel em branco, pincéis de desenho e xícara de café sobre mesa de madeira, ponto de partida para criar um logo",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Procure “logo psicologia” e a tela se enche das mesmas peças: o Ψ dentro
        de um círculo, uma cabeça de perfil com folhas, um cérebro colorido, mãos
        em concha, quase sempre em azul, verde ou lilás. Se o seu logo está entre
        eles, ele diz “psicologia”, mas não diz “você”. E quem viu três perfis
        seguidos não lembra qual era o seu.
      </p>
      <p>
        A resposta curta: um bom logo para psicólogo nasce do posicionamento, é
        legível em tamanho pequeno e funciona em todo lugar onde a marca aparece.
        O Ψ pode entrar, mas não precisa. E, pelo Código de Ética, o logo nunca
        substitui o nome completo, a palavra psicóloga e o CRP. Abaixo estão as
        normas e sete passos, do briefing ao registro. Se você atende crianças, o
        post sobre{" "}
        <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
          logo para psicólogo infantil
        </Link>{" "}
        aprofunda os cuidados desse público.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          não fala de logo, mas o art. 20 vale para toda forma de divulgação,
          “por quaisquer meios”. A psicóloga informa o nome completo, o CRP e o
          número de registro (alínea a), faz referência só a títulos que possui
          (b), não faz previsão taxativa de resultados (e) nem divulgação
          sensacionalista (h). A{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>{" "}
          pede, no art. 53, nome completo, a palavra psicólogo e o CRP em toda
          publicidade, e o art. 57 estende as regras a qualquer forma de
          propaganda. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          e a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplicam essa lógica às redes.
        </p>
        <p>
          Fora da Psicologia, duas leis importam. A{" "}
          <a href={LDA} {...ext}>
            Lei nº 9.610/1998
          </a>{" "}
          protege o desenho como obra, então copiar o logo de outra pessoa ou
          usar uma ilustração sem licença é problema. E o registro da marca, que
          dá o direito de uso exclusivo, é feito no{" "}
          <a href={INPI} {...ext}>
            INPI
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Passo 1: defina o que a marca precisa dizer</h2>
        <p>
          Antes de rabiscar, responda por escrito: para quem é o atendimento, o
          que essas pessoas procuram e o que faz o seu trabalho diferente. O logo
          é a forma mais curta de dizer isso.
        </p>
        <ol>
          <li><strong>Público:</strong> adultos, casais, adolescentes, famílias, empresas.</li>
          <li><strong>Sensação desejada:</strong> acolhimento, clareza, seriedade, leveza.</li>
          <li><strong>O que evitar:</strong> o que lembra outras colegas da cidade, clichês.</li>
          <li><strong>Onde o logo vai viver:</strong> foto de perfil, site, placa, papelaria, slides.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia atende mulheres
          executivas com ansiedade. O briefing dela diz “clareza, ritmo, sem tom
          maternal”. Isso já descarta as mãos em concha e as aquarelas, e aponta
          para um logotipo tipográfico firme.
        </p>
        <p>
          <strong>Erro comum:</strong> começar pelo gosto pessoal (“adoro
          girassol”) em vez do público. O post sobre{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          ajuda a montar essa base.
        </p>
      </section>

      <section>
        <h2>Passo 2: escolha o tipo de logo</h2>
        <p>
          Há três formatos principais, e para consultório o mais seguro costuma
          ser o que leva o nome por escrito.
        </p>
        <ul>
          <li>
            <strong>Logotipo (só o nome):</strong> o nome desenhado com uma
            tipografia escolhida. É direto, fácil de lembrar e funciona bem para
            quem atende com o próprio nome.
          </li>
          <li>
            <strong>Símbolo + nome:</strong> um desenho acompanha o nome. Dá mais
            versatilidade, como o símbolo sozinho na foto de perfil.
          </li>
          <li>
            <strong>Monograma:</strong> as iniciais combinadas. Elegante, mas
            depende de o nome completo aparecer por perto para ser entendido.
          </li>
        </ul>
        <p>
          Para quem está começando, a recomendação comum de design é incluir o
          nome: um símbolo isolado ainda não é reconhecido por ninguém.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia com três
          psicólogas escolhe símbolo + nome, porque precisa de um ícone para o
          perfil e para a placa da fachada. Uma psicóloga autônoma fictícia
          prefere só o logotipo com o próprio nome.
        </p>
        <p>
          <strong>Erro comum:</strong> criar um símbolo complexo, com muitos
          detalhes, que vira mancha no ícone do Instagram.
        </p>
      </section>

      <section>
        <h2>Passo 3: decida sobre o Ψ</h2>
        <p>
          O Ψ é a letra grega psi, inicial de psique, e sinaliza Psicologia na
          hora. É justamente por isso que ele diferencia pouco.
        </p>
        <ul>
          <li>
            <strong>Use</strong> se ele ganhar um desenho próprio, integrado ao
            nome ou às iniciais, e não for apenas o caractere numa fonte comum.
          </li>
          <li>
            <strong>Evite</strong> se ele for a ideia inteira do logo. Um Ψ dentro
            de um círculo é igual ao de muitos colegas.
          </li>
          <li>
            <strong>Alternativas:</strong> uma forma que venha do seu método, uma
            letra do seu nome trabalhada ou um logotipo puro, sem símbolo.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia chamada Paula
          cria um monograma em que a perna do P lembra discretamente o traço
          central do Ψ. Quem conhece a letra percebe; quem não conhece vê apenas
          uma inicial bem desenhada.
        </p>
        <p>
          <strong>Erro comum:</strong> baixar um ícone de Ψ de banco gratuito e
          colocar ao lado do nome. Além de genérico, a licença de muitos ícones
          não permite uso em marca.
        </p>
      </section>

      <section>
        <h2>Passo 4: cor e tipografia</h2>
        <p>
          Cor e letra carregam boa parte da personalidade. Escolha pela sensação
          que o seu público precisa, não pela cor “da psicologia”.
        </p>
        <ol>
          <li>
            <strong>Uma cor principal e no máximo duas de apoio.</strong> Menos
            cores, mais reconhecimento.
          </li>
          <li>
            <strong>Contraste:</strong> o logo precisa funcionar em fundo claro e
            escuro e ter uma versão de uma cor só. As{" "}
            <a href={WCAG} {...ext}>
              WCAG
            </a>{" "}
            são a referência de contraste para telas.
          </li>
          <li>
            <strong>Tipografia legível:</strong> fontes muito finas ou
            manuscritas somem em tamanho pequeno.
          </li>
          <li>
            <strong>Licença da fonte:</strong> confira se a fonte permite uso
            comercial e em marca.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício escolhe um
          terracota com um cinza quente, em vez do lilás comum na cidade, e uma
          tipografia sem serifa de traço médio. O logo fica reconhecível no
          perfil e legível na placa.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher cores claras demais e descobrir
          que o nome desaparece no cartão. O post sobre{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          aprofunda a escolha.
        </p>
      </section>

      <section>
        <h2>Passo 5: monte as versões e a assinatura com CRP</h2>
        <p>
          Um logo não é um arquivo, é um pequeno sistema. Sem versões, cada
          aplicação vira improviso.
        </p>
        <ul>
          <li><strong>Principal:</strong> horizontal ou vertical, completa.</li>
          <li><strong>Reduzida:</strong> símbolo ou iniciais, para perfil e favicon.</li>
          <li><strong>Monocromática:</strong> preto, branco e uma cor.</li>
          <li>
            <strong>Assinatura completa:</strong> logo + nome completo + psicóloga
            + CRP, para site, cartão, placa e perfis, como pedem o art. 20 e a
            Resolução nº 3/2007.
          </li>
          <li><strong>Área de respiro e tamanho mínimo</strong> definidos.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> a assinatura de uma psicóloga fictícia
          diz: logotipo “Paula Lima” e, abaixo, em letra menor, “Psicóloga · CRP
          06/000000”. No perfil, aparece só o monograma, com o nome completo e o
          CRP na bio.
        </p>
        <p>
          <strong>Erro comum:</strong> colocar no logo um título que você não
          tem, como “neuropsicóloga” sem título registrado, ou uma promessa, como
          “mente em equilíbrio”. As regras para o nome estão em{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Passo 6: teste nos lugares reais</h2>
        <p>
          O logo bonito na tela do designer pode falhar no mundo. Teste antes de
          imprimir qualquer coisa.
        </p>
        <ol>
          <li>No ícone redondo do Instagram e do WhatsApp, bem pequeno.</li>
          <li>Na aba do navegador (favicon).</li>
          <li>Impresso em preto e branco.</li>
          <li>No cartão de visita e na placa da porta, a alguns metros.</li>
          <li>Em fundo claro e escuro, inclusive no modo escuro do celular.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia imprime o logo em
          tamanho real do cartão e da placa e cola na parede. Do outro lado da
          sala, a tipografia fina some, e ela pede uma versão de traço mais
          grosso.
        </p>
        <p>
          <strong>Erro comum:</strong> aprovar o logo só em tela cheia. Os posts
          sobre{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita
          </Link>{" "}
          e{" "}
          <Link href="/blog/placa-consultorio-psicologia" className="inst-link">
            placa para consultório
          </Link>{" "}
          mostram onde ele precisa funcionar.
        </p>
      </section>

      <section>
        <h2>Passo 7: busque, registre e documente</h2>
        <p>
          Antes de gastar com materiais, confira se a marca não colide com outra
          e guarde tudo de forma organizada.
        </p>
        <ul>
          <li>
            <strong>Busca no INPI:</strong> pesquise marcas parecidas na área de
            serviços de saúde. Para serviços de psicologia, a classe costuma ser a
            44 da Classificação de Nice; confirme na consulta do{" "}
            <a href={INPI} {...ext}>
              INPI
            </a>
            .
          </li>
          <li>
            <strong>Registro:</strong> não é obrigatório para atender, mas dá
            exclusividade. Marca com nome fantasia depende de CNPJ; o post sobre{" "}
            <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
              CNPJ e nome fantasia
            </Link>{" "}
            explica.
          </li>
          <li>
            <strong>Arquivos:</strong> receba os arquivos vetoriais e as versões
            em PNG e SVG, com os direitos de uso cedidos por contrato.
          </li>
          <li>
            <strong>Manual:</strong> registre cores, fontes, versões e usos
            proibidos. O post sobre{" "}
            <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
              manual de marca para consultório
            </Link>{" "}
            mostra o que entra.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> descobrir depois de imprimir placa e
          cartões que outra clínica da região usa um nome quase igual.
        </p>
      </section>

      <section>
        <h2>Logo de psicólogo: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Logo para psicólogo: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Logo para psicólogo: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Logotipo com o seu nome e assinatura com psicóloga e CRP</td><td>Sim (art. 20, a)</td></tr>
              <tr><td>Ψ redesenhado e integrado ao nome</td><td>Sim</td></tr>
              <tr><td>“Neuropsicóloga” no logo sem título registrado</td><td>Não (art. 20, b)</td></tr>
              <tr><td>Slogan no logo que promete resultado (“fim da ansiedade”)</td><td>Não (art. 20, e)</td></tr>
              <tr><td>Ícone gratuito de banco cuja licença proíbe uso em marca</td><td>Não (Lei 9.610/1998)</td></tr>
              <tr><td>Modelo pronto de editor online para começar</td><td>Com cuidado (pouco exclusivo)</td></tr>
              <tr><td>Imagem de divã, sessão ou criança em atendimento</td><td>Não (art. 20)</td></tr>
              <tr><td>Selo “o melhor consultório da cidade”</td><td>Não (art. 20, f e h)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem logo: quando redesenhar</h2>
        <p>
          Trocar o logo custa materiais e reconhecimento. Vale mudar quando ele
          atrapalha, não por cansaço de olhar.
        </p>
        <ul>
          <li>Você mudou de público ou de nicho, e o logo fala com o antigo.</li>
          <li>Ele não funciona pequeno, no perfil ou no favicon.</li>
          <li>É parecido demais com o de outra colega ou clínica.</li>
          <li>Carrega título, promessa ou imagem que fere o art. 20.</li>
          <li>Os arquivos originais se perderam e cada aplicação sai diferente.</li>
        </ul>
        <p>
          Às vezes basta um ajuste: redesenhar a tipografia, limpar o símbolo,
          criar a versão reduzida. O post sobre{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding de consultório de psicologia
          </Link>{" "}
          ajuda a decidir entre retoque e mudança completa.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Nesse nicho, o logo fala primeiro com pais e responsáveis, e muitas
          vezes também com adolescentes e adultos autistas que escolhem o próprio
          atendimento.
        </p>
        <ul>
          <li>
            <strong>Fuja da peça de quebra-cabeça.</strong> O símbolo é rejeitado
            por parte da comunidade autista, que o associa à ideia de algo
            “faltando”. O post sobre{" "}
            <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
              marca para psicólogo que atende autismo
            </Link>{" "}
            explica o debate.
          </li>
          <li>
            <strong>Nada infantilizado demais.</strong> Quem decide é o adulto; o
            logo pode ser acolhedor sem parecer brinquedo.
          </li>
          <li>
            <strong>Calma visual:</strong> poucos elementos, cores sem saturação
            extrema, forma estável.
          </li>
          <li>
            <strong>Sem promessa embutida:</strong> nomes ou slogans como
            “desenvolver” ou “superar” no logo sugerem resultado.
          </li>
          <li>
            <strong>Acessível:</strong> contraste suficiente e nome legível
            também para quem tem baixa visão ou dislexia.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia de atendimento a
          famílias neurodivergentes troca o quebra-cabeça colorido por um
          logotipo com uma forma orgânica simples e uma paleta de dois tons. A
          marca passa a funcionar também na placa e nos relatórios para escolas.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Ψ num círculo como única ideia.</li>
          <li>Cérebro, cabeça de perfil com folhas ou mãos em concha, sem nada que seja seu.</li>
          <li>Detalhes demais, que somem em tamanho pequeno.</li>
          <li>Cores claras sem contraste.</li>
          <li>Título que você não tem ou promessa no logo.</li>
          <li>Não receber os arquivos vetoriais nem os direitos de uso.</li>
          <li>Não fazer a busca no INPI antes de imprimir.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do logo</h2>
        <ul>
          <li>Nasce de um briefing com público e sensação desejada.</li>
          <li>Tem o nome legível ou acompanha o nome completo.</li>
          <li>Funciona no ícone do perfil, no favicon e em preto e branco.</li>
          <li>Tem versão principal, reduzida, monocromática e assinatura com CRP.</li>
          <li>Usa fontes e elementos com licença para marca.</li>
          <li>Não traz título que você não tem, promessa nem imagem de atendimento.</li>
          <li>Passou por busca no INPI.</li>
          <li>Está documentado num manual simples.</li>
        </ul>
        <p>
          O logo é uma parte da{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual do consultório
          </Link>
          , que inclui cores, fontes, fotos e o jeito de compor cada peça.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a marca do consultório nasce de uma imersão de dois
          encontros que define posicionamento, tom de voz e identidade visual, com a
          marca entregue em até 30 dias e cada peça revisada pelo art. 20. O logo sai
          desse trabalho, com as versões, a assinatura com CRP e os arquivos
          entregues. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Para conversar sobre a sua marca, marque 15 minutos.
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
            <a href={RES3} {...ext}>
              Resolução CFP nº 3/2007
            </a>
            , arts. 53 a 58.
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
            Instituto Nacional da Propriedade Industrial.{" "}
            <a href={INPI} {...ext}>
              Marcas
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LDA} {...ext}>
              Lei nº 9.610/1998 — Lei de Direitos Autorais
            </a>
            .
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.2
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
