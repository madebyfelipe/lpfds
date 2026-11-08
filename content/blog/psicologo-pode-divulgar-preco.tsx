import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

export const post: Post = {
  slug: "psicologo-pode-divulgar-preco",
  title: "Psicólogo pode divulgar preço? Valor social, desconto e o artigo 20",
  description:
    "O que o artigo 20 do Código de Ética diz sobre preço na divulgação do psicólogo, o que conta como propaganda por preço e como falar de valor sem infringir.",
  keyword: "psicólogo pode divulgar preço",
  publishedAt: "2026-11-08",
  cover: {
    src: "/blog/psicologo-pode-divulgar-preco/psicologo-pode-divulgar-preco-calculadora.jpg",
    alt: "Calculadora, lápis e bloco de notas amarelo sobre a mesa, representando a definição do valor da sessão",
    caption: "Foto: Martin Vorel / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        “Posso colocar o valor da sessão no Instagram?” “Posso divulgar que
        tenho valor social?” “Posso fazer uma promoção de início de ano?” Essas
        perguntas aparecem com frequência entre psicólogos que começam a cuidar
        da própria divulgação — e as respostas estão no Código de Ética e nas
        orientações dos Conselhos.
      </p>
      <p>
        Este texto reúne o que as normas dizem sobre preço na publicidade do
        psicólogo, o que costuma ser entendido como propaganda por preço e como
        falar sobre valor sem infringir as regras. Ele não substitui a
        orientação do seu Conselho Regional, que é quem responde por casos
        específicos.
      </p>

      <section>
        <h2>O que diz o artigo 20</h2>
        <p>
          O artigo 20 do{" "}
          <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          (Resolução CFP nº 10/2005) trata da divulgação dos serviços. Na alínea
          “d”, ele determina que o psicólogo, ao promover publicamente seus
          serviços, por quaisquer meios, “não utilizará o preço do serviço como
          forma de propaganda”.
        </p>
        <p>
          Repare no que a regra diz e no que ela não diz. Ela não proíbe o
          psicólogo de ter um preço, de informá-lo a quem pergunta ou de cobrar
          valores diferentes. O que ela veda é usar o preço como argumento de
          divulgação — como o motivo para a pessoa escolher você.
        </p>
      </section>

      <section>
        <h2>O que conta como “preço como propaganda”</h2>
        <p>
          A{" "}
          <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
            cartilha de publicidade profissional do CRP-MG
          </a>{" "}
          (edição de 2026) detalha o entendimento. Segundo ela, a publicidade não
          pode ter foco ou destaque no valor do serviço, ainda que não divulgue
          um preço específico. Isso inclui qualquer referência a:
        </p>
        <ul>
          <li>gratuidade — “serviço gratuito”, “primeira consulta grátis”;</li>
          <li>descontos e promoções;</li>
          <li>pacotes de sessões;</li>
          <li>cupons e sorteios;</li>
          <li>venda casada com outros serviços;</li>
          <li>custo ou preço social;</li>
          <li>outros termos que remetam a vantagem financeira.</li>
        </ul>
        <p>
          A cartilha também observa que a venda de pacotes pode se caracterizar
          como prolongamento desnecessário da prestação de serviço, o que o
          Código de Ética veda em outro artigo.
        </p>
      </section>

      <section>
        <h2>E o valor social?</h2>
        <p>
          É uma das dúvidas mais comuns. Pela orientação do CRP-MG, “custo ou
          preço social” entra na lista do que não deve ser destaque da
          publicidade. Isso não impede que você pratique valores diferenciados
          com quem precisa — a questão é anunciar o valor social como chamariz,
          por exemplo em um post “atendo com valor social” ou num banner no
          site.
        </p>
        <p>
          Se você pratica valores diferenciados, a conversa sobre isso pode
          acontecer no contato direto, quando a pessoa pergunta, e não como
          argumento de divulgação.
        </p>
      </section>

      <section>
        <h2>Exemplos: o que costuma ser problema</h2>
        <p>
          Os exemplos abaixo ilustram o tipo de peça que a orientação do
          Conselho desaconselha. São ilustrativos, não casos reais:
        </p>
        <ul>
          <li>Post com “Sessão por apenas R$ XX” em destaque.</li>
          <li>Story com “Promoção de janeiro: 20% de desconto”.</li>
          <li>Bio com “Primeira sessão gratuita”.</li>
          <li>Site com tabela de pacotes: “4 sessões por R$ XX”.</li>
          <li>Anúncio com “Atendimento com valor social” como chamada principal.</li>
          <li>Sorteio de sessões para quem seguir o perfil.</li>
        </ul>
      </section>

      <section>
        <h2>Então, como falar de valor?</h2>
        <p>
          Sem usar o preço como argumento, a divulgação pode — e deve —
          comunicar o que de fato ajuda a pessoa a decidir:
        </p>
        <ul>
          <li>
            <strong>Para quem você atende</strong> e com que demandas trabalha.
          </li>
          <li>
            <strong>Como é o atendimento</strong>: formato, duração, frequência,
            presencial ou online.
          </li>
          <li>
            <strong>Sua formação</strong> e qualificações reais.
          </li>
          <li>
            <strong>Como é o primeiro contato</strong> e o que acontece depois.
          </li>
          <li>
            <strong>Se você atende por convênio</strong> ou emite recibo para
            reembolso — informação prática, que não é propaganda por preço. Na
            dúvida sobre a forma de comunicar, consulte o seu Conselho.
          </li>
        </ul>
        <p>
          Quando alguém pergunta o valor no WhatsApp ou por e-mail, informar é
          parte natural do atendimento. A diferença está entre responder a uma
          pergunta e fazer do preço o centro do anúncio.
        </p>
      </section>

      <section>
        <h2>Perguntas frequentes</h2>
        <h3>Posso responder o valor quando alguém pergunta no WhatsApp?</h3>
        <p>
          A regra trata da propaganda, ou seja, da divulgação pública. Informar
          o valor a quem pergunta, no contato individual, faz parte do
          atendimento e não é usar o preço como argumento de divulgação.
        </p>
        <h3>Posso colocar o valor no site, numa página de perguntas frequentes?</h3>
        <p>
          Aqui mora a zona cinzenta. O critério da cartilha do CRP-MG é o foco
          ou destaque no valor. Uma tabela de preços em evidência ou uma chamada
          do tipo “sessões a partir de” tende a ser lida como propaganda por
          preço. Como o entendimento pode variar, o caminho mais seguro é
          consultar o seu Conselho Regional antes de publicar.
        </p>
        <h3>Posso anunciar que atendo por convênio?</h3>
        <p>
          Informar os convênios com que você trabalha é informação sobre
          formato de atendimento, não oferta de vantagem financeira. Ainda
          assim, evite transformar isso em chamariz (“atendimento sem custo pelo
          seu plano”).
        </p>
        <h3>E se eu trabalhar numa clínica que divulga promoções?</h3>
        <p>
          A cartilha do CRP-MG lembra que o psicólogo pode ser responsabilizado
          por publicidade indevida mesmo quando ela é feita por terceiros em
          nome dos seus serviços. Vale alinhar com a clínica o que pode ou não
          ser divulgado.
        </p>
        <h3>Posso divulgar um curso ou palestra paga para pais?</h3>
        <p>
          Atividades como cursos e palestras também são serviços do psicólogo,
          e a lógica é a mesma: divulgue tema, público, formato e formação de
          quem conduz. Evite desconto, “vagas promocionais” e preço em destaque
          como argumento principal.
        </p>
      </section>

      <section>
        <h2>Por que a marca ajuda aqui</h2>
        <p>
          Consultórios que não têm clareza sobre o próprio posicionamento tendem
          a recorrer ao preço como diferencial — porque é o argumento mais fácil
          de comunicar. Quando a marca deixa claro para quem você atende, como
          trabalha e o que distingue o seu trabalho, o preço deixa de ser o
          assunto principal da divulgação. É uma das razões pelas quais o
          posicionamento vem antes do visual no{" "}
          <Link href="/metodologia" className="inst-link">
            método PSIQUE
          </Link>
          . Se quiser entender o processo, veja{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Outras regras do artigo 20 que andam junto</h2>
        <p>
          A alínea sobre preço não vive sozinha. Ao revisar sua divulgação,
          confira também se ela:
        </p>
        <ul>
          <li>informa nome completo, CRP e número de registro;</li>
          <li>cita apenas títulos e qualificações que você possui;</li>
          <li>divulga apenas técnicas e práticas reconhecidas pela profissão;</li>
          <li>não faz previsão taxativa de resultados;</li>
          <li>não faz autopromoção em detrimento de outros profissionais;</li>
          <li>não é sensacionalista.</li>
        </ul>
      </section>

      <section>
        <h2>Na dúvida, consulte o Conselho</h2>
        <p>
          As orientações citadas aqui vêm do Código de Ética e da cartilha do
          CRP-MG. Outros Conselhos Regionais publicam materiais próprios, e o
          entendimento sobre casos específicos é sempre do Conselho em que você
          está inscrito. Antes de publicar uma peça sobre a qual tenha dúvida,
          vale consultar a comissão de orientação do seu CRP.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
          sobre a divulgação do seu consultório, o primeiro passo é uma conversa
          de 15 minutos.
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
        </ul>
      </section>
    </>
  )
};
