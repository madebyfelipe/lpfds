import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LDA = "https://www.planalto.gov.br/ccivil_03/leis/l9610.htm";
const CC = "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm";
const ECA = "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm";
const META_MUSICA = "https://www.facebook.com/legal/music_guidelines";
const CREATIVE = "https://creativecommons.org/licenses/?lang=pt_BR";

export const post: Post = {
  slug: "psicologo-direito-autoral-redes",
  title: "Psicólogo pode usar música e imagem de terceiros nos posts? Direito autoral nas redes",
  description:
    "Música de sucesso no Reels, print de filme, ilustração do Pinterest: o que a Lei de Direitos Autorais permite à psicóloga nas redes e como usar sem risco.",
  keyword: "psicólogo direito autoral redes sociais",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-13",
  summary:
    "Na regra geral da Lei nº 9.610/1998, usar música, foto, ilustração ou trecho de filme de outra pessoa exige autorização, e dar o crédito não substitui a licença. As saídas seguras são a biblioteca de músicas da própria plataforma, dentro das regras dela, bancos com licença comercial, obras em Creative Commons que permitam o uso e conteúdo próprio. Para a psicóloga, o perfil profissional é publicidade, então o cuidado vale em dobro.",
  faq: [
    {
      q: "Posso usar música famosa no Reels do meu perfil profissional?",
      a: "A biblioteca de áudio do Instagram traz músicas licenciadas pela plataforma, mas as diretrizes de música da Meta proíbem o uso para fins comerciais ou não pessoais sem as licenças adequadas, e perfis comerciais costumam ter um acervo mais restrito. Música baixada de outro lugar e colocada no vídeo depende de autorização dos titulares. Para o perfil do consultório, prefira a biblioteca comercial da plataforma ou trilhas com licença."
    },
    {
      q: "Se eu der o crédito ao autor, posso usar a imagem?",
      a: "Não. O crédito é obrigatório quando o uso é autorizado, mas sozinho não autoriza nada. A Lei nº 9.610/1998 pede autorização prévia e expressa do autor para reproduzir a obra, salvo nas exceções do art. 46, como a citação de trechos para crítica ou estudo."
    },
    {
      q: "Existe regra dos 30 segundos ou de usar só um trecho curto?",
      a: "Não existe na lei brasileira uma duração liberada. O art. 46, VIII, permite pequenos trechos só quando a reprodução não é o objetivo principal da obra nova e não prejudica a exploração da obra original, e isso é avaliado caso a caso. Um trecho de música como trilha de um vídeo promocional dificilmente se encaixa."
    },
    {
      q: "Posso usar cenas de filme ou série para explicar um conceito?",
      a: "A citação de trechos para fins de estudo, crítica ou polêmica, na medida justificada e com indicação do autor e da origem, é uma das limitações do art. 46, III. Usar a cena como enfeite ou chamariz do post foge dessa finalidade. Comentar o filme com suas palavras, sem reproduzir a obra, é o caminho de menor risco."
    }
  ],
  cover: {
    src: "/blog/psicologo-direito-autoral-redes/psicologo-direito-autoral-redes-direito-autoral-musica-celular-e-fones.jpg",
    alt: "Caderno aberto, celular e fones de ouvido sobre mesa de madeira, ao lado de um vaso de flores",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O áudio do momento no Reels, o print de uma cena de série que explica bem
        o apego ansioso, a ilustração bonita achada no Pinterest. Esse material
        rende posts que circulam. E aparece sempre a mesma dúvida: posso usar no
        perfil do consultório?
      </p>
      <p>
        A resposta curta: na regra geral da Lei de Direitos Autorais, usar obra de
        outra pessoa exige autorização, e o crédito não substitui a licença. Há
        exceções estreitas, como a citação para crítica ou estudo, e há atalhos
        seguros: a biblioteca de áudio da própria plataforma, bancos com licença
        comercial, Creative Commons e conteúdo próprio. Abaixo está o que a lei
        diz, o que vale para música, imagem e vídeo, e o que muda quando quem
        posta é psicóloga.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={LDA} {...ext}>
            Lei nº 9.610/1998
          </a>{" "}
          protege músicas, fotografias, ilustrações, filmes e textos (art. 7º) e
          diz que depende de autorização prévia e expressa do autor qualquer forma
          de reprodução ou utilização da obra (art. 29). O art. 24 garante ao autor
          o direito de ter o nome indicado, e o art. 79, § 1º, pede que a
          fotografia usada por terceiros indique de forma legível o nome do autor.
          As exceções estão no art. 46: entre elas, a citação de passagens “para
          fins de estudo, crítica ou polêmica, na medida justificada para o fim a
          atingir, indicando-se o nome do autor e a origem da obra” (inciso III) e
          a reprodução de pequenos trechos quando ela não é o objetivo principal da
          obra nova e não prejudica a exploração da original (inciso VIII).
        </p>
        <p>
          Imagem de pessoa é outro direito. O art. 20 do{" "}
          <a href={CC} {...ext}>
            Código Civil
          </a>{" "}
          permite proibir o uso da imagem de alguém quando atinge a sua honra ou
          tem fins comerciais, e o art. 17 do{" "}
          <a href={ECA} {...ext}>
            Estatuto da Criança e do Adolescente
          </a>{" "}
          protege a imagem de crianças e adolescentes. Para a psicóloga, somam-se o{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          (o art. 20 trata toda divulgação de serviços como publicidade
          profissional) e a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>
          , sobre o uso profissional das redes.
        </p>
      </section>

      <section>
        <h2>Música no Reels e nos Stories</h2>
        <p>
          A forma de menor risco é usar a biblioteca de áudio da própria
          plataforma, respeitando as regras dela. Música baixada e colada no
          vídeo, sem licença, é uso não autorizado.
        </p>
        <ul>
          <li>
            <strong>Biblioteca da plataforma:</strong> o Instagram e o TikTok
            licenciam um acervo para uso dentro do app. As{" "}
            <a href={META_MUSICA} {...ext}>
              diretrizes de música da Meta
            </a>{" "}
            dizem que o uso de música para fins comerciais ou não pessoais é
            proibido sem as licenças adequadas, e perfis comerciais costumam ver um
            acervo menor, de faixas liberadas para empresas.
          </li>
          <li>
            <strong>Trilha com licença:</strong> serviços de trilha sonora vendem
            licença para uso em redes. Guarde o comprovante.
          </li>
          <li>
            <strong>Sem música:</strong> voz, som ambiente ou silêncio funcionam
            muito bem em conteúdo educativo, e a legenda escrita ajuda quem assiste
            sem som.
          </li>
        </ul>
        <p>
          Cada gravação envolve ao menos dois titulares: quem compôs e quem gravou.
          Ter o disco ou a assinatura de streaming não dá licença para usar a faixa
          num vídeo seu.
        </p>
        <p>
          <strong>Erro comum:</strong> achar que o vídeo foi aprovado porque não
          caiu na hora. A detecção automática das plataformas pode silenciar ou
          remover o conteúdo depois, e a ausência de bloqueio não é licença.
        </p>
      </section>

      <section>
        <h2>Fotos, ilustrações e memes</h2>
        <p>
          Imagem encontrada no Google, no Pinterest ou em outro perfil tem dono.
          Achar uma imagem não dá direito de usá-la, mesmo com o crédito.
        </p>
        <ol>
          <li>
            <strong>Banco de imagem com licença comercial:</strong> leia a licença
            e guarde o registro do download. Há bancos pagos e bancos de licença
            aberta, cada um com as suas regras.
          </li>
          <li>
            <strong>Creative Commons:</strong> as{" "}
            <a href={CREATIVE} {...ext}>
              licenças Creative Commons
            </a>{" "}
            dizem o que pode ser feito. As que levam “NC” (não comercial) não
            servem para um perfil que divulga serviço.
          </li>
          <li>
            <strong>Ilustração encomendada:</strong> o contrato com o ilustrador
            precisa dizer onde e por quanto tempo você pode usar.
          </li>
          <li>
            <strong>Foto sua:</strong> é a opção que mais fortalece a marca. O post
            sobre{" "}
            <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
              foto profissional para psicólogo
            </Link>{" "}
            mostra como planejar um ensaio.
          </li>
        </ol>
        <p>
          Meme é obra de alguém e muitas vezes traz a imagem de uma pessoa. Usar o
          rosto de alguém para vender um serviço pode ferir o direito de imagem do
          art. 20 do Código Civil, além do direito autoral de quem fez a montagem.
        </p>
      </section>

      <section>
        <h2>Filmes, séries e livros como exemplo</h2>
        <p>
          Falar de uma obra é livre; reproduzi-la é que depende de autorização ou
          de uma das exceções. A citação para estudo e crítica, do art. 46, III,
          ampara o uso de trechos na medida necessária, com autor e origem
          indicados.
        </p>
        <ul>
          <li>
            <strong>Comente com suas palavras:</strong> descrever uma cena e
            explicar o conceito que ela ilustra não reproduz a obra.
          </li>
          <li>
            <strong>Citação curta e justificada:</strong> uma frase de livro ou um
            trecho breve de cena, para analisar o que ele mostra, com autor, obra
            e origem.
          </li>
          <li>
            <strong>Evite a obra como enfeite:</strong> o trailer inteiro como
            fundo do vídeo ou a capa do filme como chamariz do post fogem da
            finalidade de crítica.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> para falar de luto infantil, uma psicóloga
          fictícia descreve uma cena de animação conhecida, cita o nome do filme e
          explica o que a cena mostra sobre como crianças elaboram a perda. Ela não
          usa frames do filme no carrossel; as artes são dela.
        </p>
      </section>

      <section>
        <h2>Direitos autorais: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Direito autoral nas redes da psicóloga: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Direito autoral nas redes da psicóloga: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Música da biblioteca do Instagram, dentro das regras da plataforma</td><td>Sim, com as limitações da Meta</td></tr>
              <tr><td>Música baixada e colada no vídeo, sem licença</td><td>Não (art. 29)</td></tr>
              <tr><td>Imagem do Google ou do Pinterest “com crédito”</td><td>Não (crédito não é licença)</td></tr>
              <tr><td>Foto de banco com licença comercial, com crédito</td><td>Sim</td></tr>
              <tr><td>Obra em Creative Commons não comercial (NC) no perfil profissional</td><td>Evitar</td></tr>
              <tr><td>Citação curta de livro para analisar um conceito, com autor e obra</td><td>Sim (art. 46, III)</td></tr>
              <tr><td>Frame de filme como capa chamativa do post</td><td>Evitar</td></tr>
              <tr><td>Foto de criança tirada da internet para ilustrar post</td><td>Não (direito de imagem, ECA)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Nesse nicho, o risco maior não é a música: é a imagem de criança. Vídeos
          de crianças autistas circulam muito nas redes, e repostá-los para ilustrar
          um conteúdo expõe uma criança que não pode consentir.
        </p>
        <ul>
          <li>
            <strong>Não reposte vídeos de crianças,</strong> nem os publicados pelos
            próprios pais. A criança não escolheu aparecer no perfil de uma
            psicóloga.
          </li>
          <li>
            <strong>Não use foto de criança de banco para sugerir atendimento.</strong>{" "}
            Mesmo com licença, imagem de sessão ou de “criança atendida” fere o art.
            20 do Código de Ética.
          </li>
          <li>
            <strong>Prefira ilustração, objeto ou ambiente:</strong> brinquedos
            sobre uma mesa, um calendário visual, a sala vazia.
          </li>
          <li>
            <strong>Material de terceiros para pais</strong> (cartilhas, pranchas de
            rotina): indique o link oficial em vez de copiar o arquivo.
          </li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais de crianças autistas
          </Link>{" "}
          mostra como produzir material próprio, e o texto sobre{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          traz formatos que não dependem de imagem de criança.
        </p>
      </section>

      <section>
        <h2>Checklist antes de postar</h2>
        <ul>
          <li>Sei de onde veio cada música, foto, ilustração e trecho do post.</li>
          <li>Tenho licença, autorização ou a obra é minha.</li>
          <li>A licença permite uso comercial (perfil que divulga serviço).</li>
          <li>Indiquei o crédito do autor quando o uso é autorizado.</li>
          <li>Citações são curtas, servem para analisar e trazem autor e obra.</li>
          <li>Nenhuma criança ou pessoa aparece sem autorização.</li>
          <li>Nada sugere sessão, paciente ou resultado de atendimento.</li>
        </ul>
        <p>
          Quem tem identidade visual própria depende menos de imagem de terceiros.
          O post sobre{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          mostra como criar esse repertório, e as regras gerais de divulgação estão
          em{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a marca do consultório nasce de uma imersão de dois
          dias que define posicionamento, tom de voz e identidade visual, com a
          marca no ar em 45 dias e cada peça revisada pelo art. 20. Os modelos de
          post saem com fotos e elementos gráficos licenciados ou próprios, para
          você não depender de imagem achada na internet. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Para conversar sobre a sua marca, marque 15 minutos.
        </p>
        <p>
          <em>Este texto é informativo e não substitui orientação jurídica. Em
          caso concreto, consulte uma advogada de direito autoral.</em>
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Brasil.{" "}
            <a href={LDA} {...ext}>
              Lei nº 9.610/1998 — Lei de Direitos Autorais
            </a>
            , arts. 7º, 24, 29, 46 e 79.
          </li>
          <li>
            Brasil.{" "}
            <a href={CC} {...ext}>
              Lei nº 10.406/2002 — Código Civil
            </a>
            , art. 20.
          </li>
          <li>
            Brasil.{" "}
            <a href={ECA} {...ext}>
              Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente
            </a>
            , art. 17.
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
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Meta.{" "}
            <a href={META_MUSICA} {...ext}>
              Diretrizes de música
            </a>
            .
          </li>
          <li>
            <a href={CREATIVE} {...ext}>
              Creative Commons — Sobre as licenças
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
