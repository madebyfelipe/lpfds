import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";

export const post: Post = {
  slug: "psicologo-pode-postar-depoimento-de-paciente",
  title: "Psicólogo pode postar depoimento de paciente? O que dizem o CFP e os Conselhos",
  description:
    "Depoimento, feedback e print de mensagem de paciente na divulgação do psicólogo: o que o Código de Ética e a cartilha do CRP-MG dizem e como mostrar credibilidade sem expor ninguém.",
  keyword: "psicólogo pode postar depoimento de paciente",
  tags: ["divulgacao-etica"],
  publishedAt: "2026-11-09",
  summary:
    "É vedado expor dados, imagens, mensagens ou depoimentos que possam identificar o paciente. Mesmo com identidade preservada ou autorização expressa, a cartilha do CRP-MG diz que o uso é permitido, mas não recomendado quando o objetivo é promover o profissional — e o psicólogo responde pelo conteúdo. Para mostrar credibilidade, prefira formação, clareza sobre o atendimento e conteúdo útil.",
  faq: [
    {
      q: "Posso postar print de mensagem de agradecimento de paciente?",
      a: "Prints de mensagens são material decorrente do atendimento. Se permitirem identificar a pessoa, a exposição é vedada; mesmo anonimizados e autorizados, a cartilha do CRP-MG não recomenda o uso para promover o profissional."
    },
    {
      q: "E se o paciente autorizar por escrito?",
      a: "A autorização expressa torna o uso permitido, segundo a cartilha do CRP-MG, mas não recomendado quando o foco é promoção. O compromisso com o sigilo é do psicólogo, não do paciente, e o conteúdo não pode conflitar com o Código de Ética."
    },
    {
      q: "Depoimento de cliente de outro serviço, como um curso para psicólogos, também é proibido?",
      a: "As restrições sobre sigilo tratam de usuários de serviços psicológicos. Depoimentos sobre outros serviços — como um curso ou um projeto de design — não envolvem atendimento clínico, mas devem evitar superlativos e comparações."
    },
    {
      q: "Posso responder comentários de pacientes nas redes?",
      a: "Interações públicas devem ser respaldadas na ciência psicológica e preservar o sigilo. Evite confirmar publicamente que alguém é seu paciente e leve qualquer assunto do atendimento para o canal privado."
    }
  ],
  cover: {
    src: "/blog/psicologo-pode-postar-depoimento-de-paciente/psicologo-pode-postar-depoimento-maquina-de-escrever.jpg",
    alt: "Máquina de escrever antiga, disco de vinil e peças de letras soltas sobre mesa de madeira escura, vista de cima",
    caption: "Foto: Camille Kimberly / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Em muitas profissões, depoimento de cliente é a peça de divulgação mais
        valiosa. Na psicologia, a lógica é outra. O que acontece no atendimento
        é protegido pelo sigilo profissional, e a forma como alguém vive um
        processo terapêutico é singular demais para virar argumento de venda.
        Mesmo assim, a dúvida aparece com frequência — principalmente quando um
        paciente manda uma mensagem bonita e se oferece para “deixar um
        depoimento”.
      </p>
      <p>
        Este texto reúne o que o Código de Ética e a cartilha de publicidade do
        CRP-MG dizem sobre depoimentos, feedbacks e prints, e sugere caminhos
        para transmitir credibilidade sem expor ninguém.
      </p>

      <section>
        <h2>O ponto de partida: sigilo e sensacionalismo</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          estabelece o dever de sigilo e, no artigo 20, veda a divulgação
          sensacionalista das atividades profissionais. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          (edição de 2026) junta as duas coisas na seção sobre divulgação
          sensacionalista: é vedada a exposição de dados, imagens, desenhos,
          mensagens e qualquer material decorrente de serviços psicológicos,
          assim como diagnósticos, análise de casos, depoimentos ou
          aconselhamentos que possam, de alguma forma, levar à identificação do
          usuário do serviço.
        </p>
      </section>

      <section>
        <h2>E se a identidade estiver preservada?</h2>
        <p>
          Aqui está a nuance que mais gera confusão. Segundo a cartilha, caso a
          identidade esteja preservada ou exista autorização expressa do
          usuário, o compartilhamento fica permitido — porém{" "}
          <strong>não é recomendado</strong>, sobretudo quando o foco é a
          promoção do profissional ou da instituição.
        </p>
        <p>A cartilha explica por quê:</p>
        <ul>
          <li>
            <strong>O compromisso com o sigilo é do psicólogo</strong>, não do
            paciente. Cabe ao profissional refletir sobre as repercussões da
            exposição, para o usuário e para si.
          </li>
          <li>
            <strong>Depoimentos têm uma linha tênue com o sensacionalismo.</strong>{" "}
            A experiência de cada pessoa é singular, e o motivo que leva alguém a
            escolher um profissional também.
          </li>
          <li>
            <strong>O psicólogo responde pelo conteúdo.</strong> Se decidir
            publicar, o texto não pode conflitar com o Código — por exemplo,
            depoimentos que exaltem o profissional como “o melhor do mercado” ou
            que ofendam outras profissões.
          </li>
          <li>
            <strong>A LGPD também se aplica.</strong> Informações sobre saúde são
            dados pessoais sensíveis.
          </li>
        </ul>
      </section>

      <section>
        <h2>Casos práticos</h2>
        <h3>Print de mensagem de agradecimento</h3>
        <p>
          É material decorrente do atendimento. Com nome, foto ou qualquer
          detalhe que identifique a pessoa, a exposição é vedada. Sem
          identificação e com autorização, ainda assim não é recomendado como
          divulgação.
        </p>
        <h3>Avaliações em plataformas e no Google</h3>
        <p>
          Plataformas de avaliação permitem que qualquer pessoa escreva sobre um
          serviço. O cuidado do psicólogo está em não pedir avaliações como
          estratégia de promoção e em não responder publicamente de forma que
          confirme que alguém é paciente ou revele detalhes do atendimento.
        </p>
        <h3>“Antes e depois”</h3>
        <p>
          Relatos de transformação esbarram duas vezes no artigo 20: são
          sensacionalistas e sugerem previsão de resultado.
        </p>
        <h3>Depoimentos sobre outros serviços</h3>
        <p>
          Se você oferece cursos, supervisão ou palestras para outros
          profissionais, a lógica do sigilo clínico não se aplica da mesma forma
          — mas as regras de publicidade sim: nada de superlativos nem
          comparações com colegas.
        </p>
      </section>

      <section>
        <h2>Como mostrar credibilidade sem depoimento</h2>
        <p>
          A boa notícia é que a credibilidade de um consultório não depende de
          depoimentos. Ela vem de sinais que o próprio Código permite e
          incentiva:
        </p>
        <ul>
          <li>
            <strong>Formação e qualificações reais</strong>, apresentadas sem
            exagero — só títulos e cursos que você possui.
          </li>
          <li>
            <strong>Clareza sobre o atendimento</strong>: para quem é, como
            funciona, como é o primeiro contato.
          </li>
          <li>
            <strong>Conteúdo útil</strong> para o seu público, baseado na ciência
            psicológica — artigos, explicações, orientações gerais.
          </li>
          <li>
            <strong>Consistência de marca</strong> entre Instagram, site e
            documentos, que transmite cuidado antes da primeira conversa.
          </li>
        </ul>
        <p>
          Esse é justamente o papel da marca. Veja{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>{" "}
          e{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            marketing para psicólogos dentro do Código de Ética
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Antes de publicar qualquer coisa vinda do atendimento</h2>
        <p>
          Se ainda assim surgir a vontade de compartilhar algo — uma mensagem, um
          trecho de conversa, uma conquista de um paciente —, vale passar por
          estas perguntas:
        </p>
        <ul>
          <li>Alguém conseguiria reconhecer a pessoa, mesmo sem o nome?</li>
          <li>Que benefício isso traz para quem lê, além de promover o meu trabalho?</li>
          <li>O texto exalta o meu trabalho ou o compara ao de outros profissionais?</li>
          <li>Sugere que outras pessoas terão o mesmo resultado?</li>
          <li>Como o paciente se sentiria vendo isso publicado daqui a alguns anos?</li>
        </ul>
        <p>
          Se qualquer resposta acender um alerta, a recomendação é não publicar.
          Na dúvida, consulte a comissão de orientação do seu Conselho Regional.
        </p>
      </section>

      <section>
        <h2>Atenção redobrada com crianças e famílias</h2>
        <p>
          Em consultórios que atendem crianças e adolescentes — incluindo
          famílias de crianças autistas e neurodivergentes —, o cuidado é ainda
          maior. Fotos, desenhos feitos em sessão e relatos de pais podem
          identificar a criança mesmo sem nome. A regra mais segura é não
          publicar nada que venha do atendimento. Falamos mais sobre isso em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Os depoimentos que aparecem no site da Made by Felipe são de clientes
          do estúdio falando sobre o serviço de design, sem nome nem CRP, e nunca
          mencionam atendimento. A Made by Felipe constrói a marca de
          consultórios de psicologia a partir de dois encontros de imersão: posicionamento,
          identidade visual e verbal, entregues em até 30 dias, dentro do artigo 20 do
          Código de Ética. Se quiser conversar sobre a divulgação do seu
          consultório, o primeiro passo é uma conversa de 15 minutos.
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
            , arts. 9 e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026, seção “Divulgação sensacionalista”.
          </li>
          <li>
            Brasil.{" "}
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
