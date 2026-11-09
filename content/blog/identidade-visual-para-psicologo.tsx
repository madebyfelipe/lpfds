import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

export const post: Post = {
  slug: "identidade-visual-para-psicologo",
  title: "Identidade visual para psicólogo: o que a marca do consultório precisa ter",
  description:
    "O que compõe a identidade visual de um consultório de psicologia, o que o artigo 20 do Código de Ética exige da divulgação e um checklist para revisar a sua marca.",
  keyword: "identidade visual para psicólogo",
  publishedAt: "2026-11-07",
  summary:
    "A identidade visual de um consultório de psicologia é o sistema que dá forma à marca: assinatura com nome completo e CRP, paleta de cores com função definida, tipografia, direção de imagem e aplicações. Ela deve nascer do posicionamento, respeitar o artigo 20 do Código de Ética (sem preço, promessa ou imagem de atendimento) e ser legível, com contraste mínimo de 4,5:1 para texto.",
  faq: [
    { q: "Psicólogo pode ter logotipo?", a: "Pode. A cartilha do CRP-MG orienta que logomarcas são permitidas desde que vinculadas ao nome completo, à palavra psicólogo(a) e ao número do CRP." },
    { q: "Quais cores usar na marca de um consultório de psicologia?", a: "Não existe cor certa para a psicologia. A paleta deve vir do posicionamento — público, tom, diferencial — e ter poucas cores com função definida, com contraste suficiente para leitura." },
    { q: "Posso usar o símbolo Ψ (psi) no logo?", a: "Pode, mas sozinho ele não diferencia: é usado por muitos consultórios. Um símbolo construído a partir do seu posicionamento costuma comunicar melhor." }
  ],
  cover: {
    src: "/blog/identidade-visual-para-psicologo/identidade-visual-para-psicologo-paleta-de-cores.jpg",
    alt: "Leque de amostras de cores aberto, com tons do amarelo ao azul, usado para definir a paleta de uma identidade visual",
    caption: "Foto: Artsy Crafty / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Antes de mandar a primeira mensagem, quem procura um psicólogo já
        olhou o perfil no Instagram, abriu o site (se houver), conferiu a foto
        no Google e talvez tenha recebido o seu contato de outra pessoa. Em
        nenhum desses lugares você está presente para explicar o seu trabalho.
        Quem explica é a marca.
      </p>
      <p>
        Por isso a pergunta “preciso de um logo?” costuma chegar tarde. A
        identidade visual de um consultório não é o logo: é o conjunto de
        decisões que faz o seu trabalho ser reconhecido e compreendido em todos
        esses pontos — e, no caso da psicologia, dentro das regras que o
        Conselho Federal estabelece para a divulgação profissional.
      </p>
      <p>
        Este texto reúne o que a identidade visual de um psicólogo precisa ter,
        o que o Código de Ética diz sobre a divulgação e um checklist para você
        revisar a sua marca hoje.
      </p>

      <section>
        <h2>O que é identidade visual (e o que ela não é)</h2>
        <p>
          Identidade visual é o sistema que dá forma à marca. Ela costuma
          reunir:
        </p>
        <ul>
          <li>
            <strong>Assinatura</strong> — o logo ou a composição do seu nome,
            com as versões para fundo claro, fundo escuro e tamanhos pequenos
            (como a foto de perfil).
          </li>
          <li>
            <strong>Paleta de cores</strong> — poucas cores, com função
            definida: qual é o fundo, qual é o texto, qual é o destaque.
          </li>
          <li>
            <strong>Tipografia</strong> — uma ou duas famílias de letra, com
            regras de uso para títulos e textos longos.
          </li>
          <li>
            <strong>Elementos gráficos e direção de imagem</strong> — formas,
            texturas, estilo de foto e o que nunca entra nas imagens.
          </li>
          <li>
            <strong>Aplicações</strong> — como tudo isso vira perfil de rede
            social, site, cartão, assinatura de e-mail, perfil no Google,
            documentos e recibos.
          </li>
        </ul>
        <p>
          O que ela não é: um logo feito às pressas num aplicativo, um modelo
          pronto de “logo de psicologia” baixado da internet ou uma paleta
          escolhida porque “transmite calma”. Esses atalhos produzem marcas
          parecidas entre si — o símbolo Ψ, folhas, cérebros e silhuetas em tons
          pastel — justamente quando quem procura atendimento está tentando
          diferenciar um profissional do outro.
        </p>
      </section>

      <section>
        <h2>Antes do visual: o que a marca precisa dizer</h2>
        <p>
          Cor e letra são a parte final do trabalho. A identidade visual só
          funciona quando traduz decisões tomadas antes: para quem você atende,
          que demanda leva essas pessoas até você, em que formato você trabalha
          (presencial, online, os dois), qual é a sua abordagem e o que
          distingue o seu consultório de outros na mesma região ou no mesmo
          nicho.
        </p>
        <p>
          Sem essas respostas, qualquer escolha visual é gosto pessoal. Com
          elas, a escolha passa a ter critério: uma paleta pode ser mais sóbria
          porque o público é formado por adultos que buscam atendimento por
          indicação médica; uma linguagem pode ser mais direta porque quem
          decide é um familiar que precisa entender rapidamente o que você
          oferece. No estúdio, essa etapa é o posicionamento — descrito em
          detalhe no{" "}
          <Link href="/metodologia" className="inst-link">
            método PSIQUE
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>O que o Código de Ética diz sobre a divulgação</h2>
        <p>
          O{" "}
          <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          (Resolução CFP nº 10/2005) trata da divulgação no artigo 20. Ele
          determina que o psicólogo, ao promover publicamente seus serviços,
          por quaisquer meios:
        </p>
        <ul>
          <li>informará o seu nome completo, o CRP e seu número de registro;</li>
          <li>fará referência apenas a títulos ou qualificações profissionais que possua;</li>
          <li>
            divulgará somente qualificações, atividades e recursos relativos a
            técnicas e práticas reconhecidas ou regulamentadas pela profissão;
          </li>
          <li>não utilizará o preço do serviço como forma de propaganda;</li>
          <li>não fará previsão taxativa de resultados;</li>
          <li>não fará autopromoção em detrimento de outros profissionais;</li>
          <li>
            não proporá atividades que sejam atribuições privativas de outras
            categorias profissionais;
          </li>
          <li>não fará divulgação sensacionalista das atividades profissionais.</li>
        </ul>
        <p>
          A Resolução CFP nº 003/2007 complementa essas regras, e os Conselhos
          Regionais publicam orientações práticas. A{" "}
          <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
            cartilha de publicidade profissional do CRP-MG
          </a>{" "}
          (edição de 2026) é um bom ponto de partida. Três orientações dela
          afetam diretamente a identidade visual:
        </p>
        <ul>
          <li>
            <strong>Logomarcas são permitidas</strong>, desde que estejam
            vinculadas ao nome completo, ao CRP e ao número de inscrição.
          </li>
          <li>
            <strong>Nome fantasia</strong> entra na divulgação quando há pessoa
            jurídica registrada no CRP, com responsável técnico — e, nesse caso,
            acompanhado do número de inscrição da empresa.
          </li>
          <li>
            <strong>Valores</strong>: a restrição vai além de não publicar o
            preço. Gratuidade, desconto, pacote, promoção e “preço social” também
            não devem ser o foco da divulgação.
          </li>
        </ul>
        <p>
          Na dúvida sobre um caso específico, a orientação vem do Conselho
          Regional em que você está inscrito. Este texto não substitui essa
          consulta.
        </p>
      </section>

      <section>
        <h2>Como isso vira decisão de design</h2>
        <h3>1. O CRP faz parte da assinatura</h3>
        <p>
          Se toda divulgação precisa trazer nome completo, a palavra psicólogo
          ou psicóloga e o CRP, a forma mais segura é desenhar isso dentro do
          sistema, não colar depois. Uma boa identidade prevê uma versão da
          assinatura com nome e registro legíveis — inclusive no tamanho
          pequeno de um post ou de um cartão.
        </p>
        <h3>2. Sem preço como argumento visual</h3>
        <p>
          Selos de “primeira sessão grátis”, etiquetas de desconto e destaques
          de valor não têm lugar no sistema. A identidade pode, sim, comunicar
          formato, público e abordagem — é isso que ajuda a pessoa a decidir.
        </p>
        <h3>3. Imagens que não prometem nem expõem</h3>
        <p>
          Antes e depois, rostos “transformados” e frases que sugerem cura
          esbarram na vedação à previsão taxativa de resultados e ao
          sensacionalismo. E o sigilo profissional pesa sobre qualquer imagem
          que remeta a atendimento: fotos de sessão, de pacientes ou de
          material produzido em atendimento ficam fora da direção de arte. O
          que entra é você, o seu espaço de trabalho e elementos gráficos
          próprios da marca.
        </p>
        <h3>4. Legibilidade é critério, não detalhe</h3>
        <p>
          Paletas em tons muito claros sobre fundo branco são comuns em marcas
          de saúde mental e costumam falhar em contraste. A referência de
          acessibilidade mais usada na web, a{" "}
          <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
            WCAG 2.1
          </a>
          , pede contraste mínimo de 4,5:1 para texto comum. Uma marca que
          quer ser acolhedora começa sendo fácil de ler.
        </p>
        <h3>5. Consistência entre os pontos de contato</h3>
        <p>
          O mesmo nome, a mesma assinatura e as mesmas cores no Instagram, no
          site, no perfil do Google, no WhatsApp e nos documentos. Quem chega
          por uma indicação e pesquisa o seu nome precisa ter certeza de que
          encontrou a pessoa certa.
        </p>
      </section>

      <section>
        <h2>Quando quem decide é a família</h2>
        <p>
          Em consultórios que atendem crianças e adolescentes — e, em especial,
          famílias de crianças autistas ou neurodivergentes — quem pesquisa,
          compara e entra em contato costuma ser a mãe, o pai ou outro
          responsável. A marca conversa com esse adulto, que muitas vezes chega
          depois de uma longa busca por informação e precisa entender com
          clareza o que você faz.
        </p>
        <p>Algumas consequências práticas para a identidade:</p>
        <ul>
          <li>
            <strong>Clareza antes de fofura.</strong> Uma estética infantil
            demais pode esconder informações que o responsável procura: público,
            faixa etária, formato do atendimento, como funciona o primeiro
            contato.
          </li>
          <li>
            <strong>Cuidado com símbolos prontos.</strong> A peça de
            quebra-cabeça, muito associada ao autismo, é contestada por parte da
            própria comunidade autista, e um{" "}
            <a href="https://doi.org/10.1177/1362361317727125" {...ext}>
              estudo publicado na revista Autism
            </a>{" "}
            encontrou associações negativas com esse tipo de imagem. Um símbolo próprio, construído a partir
            do seu posicionamento, evita esse ruído e diferencia o consultório.
          </li>
          <li>
            <strong>Linguagem que não promete.</strong> A vedação à previsão
            taxativa de resultados vale para o texto que acompanha a marca.
            Descrever o que você faz e para quem é diferente de anunciar o
            resultado que a família vai obter.
          </li>
        </ul>
      </section>

      <section>
        <h2>Erros comuns na identidade visual de psicólogos</h2>
        <ul>
          <li>Usar um logo de banco de imagens que outros consultórios também usam.</li>
          <li>Trocar cores e fontes a cada post, sem regra.</li>
          <li>Deixar o CRP de fora da bio, do site ou das peças de divulgação.</li>
          <li>Ilustrar o perfil com imagens de divã, sessão ou paciente.</li>
          <li>
            Usar um nome fantasia sem pessoa jurídica registrada no CRP para
            sustentá-lo.
          </li>
          <li>Escolher a paleta antes de definir para quem a marca fala.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist para revisar a sua marca</h2>
        <ul>
          <li>Nome completo, “psicólogo(a)” e CRP aparecem em toda peça de divulgação?</li>
          <li>Existe uma versão da assinatura legível em tamanho pequeno?</li>
          <li>As cores têm função definida e o texto passa em contraste?</li>
          <li>Instagram, site, Google e WhatsApp usam o mesmo nome e a mesma assinatura?</li>
          <li>Nenhuma peça usa preço, gratuidade ou desconto como chamariz?</li>
          <li>Nenhuma imagem remete a sessão, paciente ou resultado de terapia?</li>
          <li>Em uma leitura rápida, dá para saber para quem você atende e como?</li>
        </ul>
        <p>
          Se várias respostas forem “não”, o problema raramente se resolve
          trocando o logo. Ele se resolve voltando ao posicionamento e
          reconstruindo o sistema a partir dele.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. O processo completo
          está em{" "}
          <Link href="/metodologia" className="inst-link">
            /metodologia
          </Link>
          . Se quiser entender se faz sentido para o seu consultório, o primeiro
          passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Gernsbacher, M. A. et al.{" "}
            <a href="https://doi.org/10.1177/1362361317727125" {...ext}>
              Do puzzle pieces and autism puzzle piece logos evoke negative
              associations?
            </a>{" "}
            <em>Autism</em>.
          </li>
          <li>
            W3C.{" "}
            <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
              WCAG 2.1, critério 1.4.3 — Contraste (mínimo)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
