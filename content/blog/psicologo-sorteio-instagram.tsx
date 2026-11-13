import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LEI_SORTEIO =
  "https://www2.camara.leg.br/legin/fed/lei/1970-1979/lei-5768-20-dezembro-1971-357812-normaatualizada-pl.pdf";

export const post: Post = {
  slug: "psicologo-sorteio-instagram",
  title: "Psicólogo pode fazer sorteio no Instagram? O que o CFP diz sobre sorteio e brinde",
  description:
    "Psicólogo pode fazer sorteio no Instagram? A Nota Técnica CFP 01/2022 diz que não. Entenda o motivo, o caso dos brindes e o que fazer no lugar.",
  keyword: "psicólogo pode fazer sorteio no instagram",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-13",
  summary:
    "Não. A Nota Técnica CFP nº 1/2022 diz, com todas as letras, que não é permitido o uso de cupons promocionais e sorteios na divulgação de serviços psicológicos, e a cartilha do CRP-MG de 2026 repete a regra. Isso vale para sortear sessão, avaliação, curso ou qualquer vantagem ligada ao seu trabalho. Para crescer no Instagram, troque o sorteio por conteúdo útil, enquetes e parcerias com instituições.",
  faq: [
    {
      q: "Psicólogo pode sortear uma sessão de terapia?",
      a: "Não. Sortear sessão usa a gratuidade do serviço como chamariz, o que o art. 20, alínea d, do Código de Ética veda, e a Nota Técnica CFP nº 1/2022 proíbe sorteios de forma expressa na publicidade profissional."
    },
    {
      q: "Posso sortear um livro ou um produto que não seja atendimento?",
      a: "Também não é recomendado. A regra da Nota Técnica não separa o prêmio: o sorteio feito no perfil profissional funciona como vantagem para atrair público. Além disso, sorteio como propaganda depende de autorização prévia do Ministério da Fazenda pela Lei nº 5.768/1971."
    },
    {
      q: "Psicólogo pode dar brinde com a marca do consultório?",
      a: "Não há proibição expressa de brinde institucional, como um marcador de página entregue num evento. O limite é o mesmo do art. 20: o brinde não pode funcionar como vantagem para captar clientes nem estar atrelado a contratar o serviço. Na dúvida, consulte o seu CRP."
    },
    {
      q: "E se o sorteio for de uma vaga em curso para outros psicólogos?",
      a: "A cartilha do CRP-MG diz que a publicidade de cursos livres, supervisões e mentorias feitas por psicólogas segue as mesmas diretrizes da publicidade de serviços psicológicos. Então o sorteio de vaga cai na mesma vedação."
    }
  ],
  cover: {
    src: "/blog/psicologo-sorteio-instagram/psicologo-sorteio-instagram-celular-e-cafe.jpg",
    alt: "Celular apoiado ao lado de um caderno com caneta e uma xícara de café sobre mesa de madeira rústica",
    caption: "Foto: ijeab / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Sorteio é a tática mais repetida por quem ensina a crescer no
        Instagram: “siga, curta e marque três amigos”. Funciona para loja de
        roupa, e por isso muita psicóloga se pergunta se pode fazer o mesmo
        para ganhar seguidores. A resposta curta é não. O Conselho Federal de
        Psicologia proíbe sorteios na publicidade profissional, e a regra está
        escrita, não é interpretação.
      </p>
      <p>
        Abaixo você vê de onde vem a proibição, o que conta como sorteio, o
        caso dos brindes, o que a lei de sorteios acrescenta e o que fazer no
        lugar para crescer no Instagram sem arriscar um processo ético.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>
          , sobre o uso profissional das redes sociais, trata do assunto no
          item sobre preço: ela orienta a não usar termos que façam referência
          a vantagem financeira e afirma que “não é permitido o uso de cupons
          promocionais e sorteios”.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade profissional do CRP-MG (2026)
          </a>{" "}
          explica a lógica. A regra do{" "}
          <a href={CODIGO} {...ext}>
            art. 20, alínea d, do Código de Ética
          </a>{" "}
          (não usar o preço como propaganda) vale mesmo quando nenhum valor
          aparece. Ela inclui gratuidade, descontos, promoções, pacotes,
          cupons, sorteios e qualquer termo que remeta a vantagem financeira.
          Segundo a cartilha, a ideia é que a psicologia não avance num viés
          mercantil nem favoreça a concorrência desleal.
        </p>
        <p>
          O mesmo Código, no art. 2º, veda induzir pessoas a recorrer aos seus
          serviços ou receber vantagens de qualquer espécie. Um sorteio cujo
          objetivo é trazer seguidores que viram pacientes esbarra nas duas
          regras.
        </p>
      </section>

      <section>
        <h2>O que conta como sorteio</h2>
        <p>
          Conta qualquer ação em que você escolhe ganhadores ao acaso entre
          quem cumpriu uma condição no seu perfil profissional. O formato não
          muda a regra:
        </p>
        <ul>
          <li>“Comente e concorra a uma sessão”;</li>
          <li>“Siga e marque amigos para ganhar uma avaliação”;</li>
          <li>sorteio de livro, caderno, kit ou curso no perfil do consultório;</li>
          <li>“os 10 primeiros que mandarem mensagem ganham a primeira consulta”;</li>
          <li>sorteio em parceria com outro perfil, mesmo que o prêmio seja dele.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia faz parceria com
          uma livraria. A livraria sorteia um livro, e a regra para participar
          é seguir o perfil da psicóloga. O prêmio não é dela, mas a ação é
          publicidade do perfil profissional dela, com vantagem como isca. Fica
          de fora.
        </p>
        <p>
          O erro mais comum é achar que o problema é só sortear atendimento.
          A Nota Técnica não faz essa distinção: ela proíbe sorteios na
          publicidade profissional, ponto.
        </p>
      </section>

      <section>
        <h2>A lei de sorteios também pesa</h2>
        <p>
          Fora da ética profissional, existe a{" "}
          <a href={LEI_SORTEIO} {...ext}>
            Lei nº 5.768/1971
          </a>
          . O art. 1º diz que a distribuição gratuita de prêmios a título de
          propaganda, por sorteio, vale-brinde, concurso ou operação
          assemelhada, depende de autorização prévia do Ministério da Fazenda.
          E o § 1º restringe essa autorização a pessoas jurídicas que exerçam
          atividade comercial, industrial ou de compra e venda de imóveis,
          quites com impostos e contribuições.
        </p>
        <p>
          Ou seja, o sorteio “de Instagram” feito sem autorização já é
          irregular para qualquer empresa. Para um consultório, que presta
          serviço de saúde, o caminho legal é ainda mais estreito. Se alguém
          sugerir um sorteio “porque todo mundo faz”, a resposta tem duas
          camadas: o CFP proíbe e a lei exige uma autorização que o consultório
          dificilmente teria. Para dúvidas sobre o seu caso, procure um
          advogado.
        </p>
      </section>

      <section>
        <h2>E brinde, pode?</h2>
        <p>
          Brinde institucional não aparece como proibido nas normas. O que
          decide é a função dele. Um marcador de página com a sua marca,
          entregue numa palestra em escola, identifica o consultório como um{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita
          </Link>{" "}
          identificaria. Já “quem agendar este mês ganha um kit” transforma o
          brinde em vantagem atrelada ao serviço, e cai na mesma lógica do
          desconto.
        </p>
        <p>Três perguntas ajudam a decidir:</p>
        <ol>
          <li>O brinde depende de contratar, agendar ou indicar alguém? Se sim, evite.</li>
          <li>Ele é anunciado como vantagem nas redes? Se sim, evite.</li>
          <li>Ele leva nome completo, “psicóloga(o)” e CRP, como toda peça? Deve levar.</li>
        </ol>
        <p>
          Quando a resposta não for clara, o setor de orientação do seu CRP
          responde consultas. É melhor perguntar antes do que se explicar
          depois.
        </p>
      </section>

      <section>
        <h2>Sorteio beneficente ou ação voluntária</h2>
        <p>
          A Nota Técnica não impede a divulgação de trabalho voluntário, desde
          que você garanta a continuidade e a qualidade do serviço, e diz que é
          inadequado o atendimento voluntário com a finalidade de captar
          clientes. Rifa ou sorteio para arrecadar dinheiro para uma causa é
          outro assunto: a Lei nº 5.768/1971, no art. 4º, exige autorização
          prévia também quando organizações da sociedade civil sorteiam prêmios
          para se manter. Se quiser apoiar uma causa, divulgue a campanha da
          própria organização, sem amarrar a ação ao seu atendimento.
        </p>
      </section>

      <section>
        <h2>O que fazer no lugar do sorteio</h2>
        <p>
          O sorteio traz seguidores que vieram pelo prêmio, não pelo seu
          trabalho. As alternativas abaixo crescem mais devagar, mas trazem
          quem tem a dor que você atende:
        </p>
        <ul>
          <li>
            <strong>Conteúdo que responde dúvidas reais.</strong> Um post bom
            sobre “quando procurar avaliação” é salvo e compartilhado. Veja
            como montar a linha de conteúdo em{" "}
            <Link href="/blog/instagram-para-psicologos" className="inst-link">
              Instagram para psicólogos
            </Link>
            .
          </li>
          <li>
            <strong>Enquetes e caixa de perguntas.</strong> A cartilha do CRP-MG
            permite, com o cuidado de responder com base na ciência e sem dar
            orientação individual a quem não foi avaliado.
          </li>
          <li>
            <strong>Lives com colegas e instituições.</strong> Uma conversa com
            uma fonoaudióloga ou uma escola alcança o público dela. Há um guia
            em{" "}
            <Link href="/blog/psicologo-youtube-e-lives" className="inst-link">
              lives e vídeos no YouTube
            </Link>
            .
          </li>
          <li>
            <strong>Impulsionamento dentro das regras.</strong> Pagar para um
            post útil alcançar mais gente é permitido, com cuidados. Leia{" "}
            <Link href="/blog/impulsionar-post-psicologo" className="inst-link">
              psicólogo pode impulsionar post
            </Link>
            .
          </li>
          <li>
            <strong>Convênios e parcerias.</strong> A Nota Técnica permite
            divulgar convênios com instituições, universidades e clínicas, sem
            usar o preço como propaganda.
          </li>
        </ul>
      </section>

      <section>
        <h2>Pode ou evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar em ações de sorteio e brinde" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar em ações de sorteio e brinde</caption>
            <thead><tr><th scope="col">Ação no perfil profissional</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Sortear sessão, avaliação ou pacote</td><td>Não</td></tr>
              <tr><td>Sortear livro, kit ou curso para ganhar seguidores</td><td>Não</td></tr>
              <tr><td>Cupom de desconto ou “primeira consulta grátis”</td><td>Não</td></tr>
              <tr><td>Marcador de página com a marca, entregue em palestra</td><td>Sim, sem condição de compra</td></tr>
              <tr><td>Enquete ou caixa de perguntas com respostas gerais</td><td>Sim</td></tr>
              <tr><td>Divulgar convênio com universidade ou clínica</td><td>Sim, sem destacar preço</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Famílias que esperam meses por uma avaliação de autismo ou TDAH são
          o público mais sensível a uma promessa de vaga. Sortear uma
          avaliação, uma sessão de orientação parental ou um “kit sensorial”
          explora justamente essa espera. Além da vedação do CFP, há o risco
          de a família expor o filho nos comentários para concorrer.
        </p>
        <p>
          O que funciona melhor com esse público é explicar o caminho: o que é
          a avaliação, quanto tempo ela costuma levar no seu consultório, o que
          trazer. O post{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            sobre a página de avaliação neuropsicológica
          </Link>{" "}
          mostra como organizar essas respostas, e o de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          ajuda no tom.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Achar que a vedação vale só para sortear atendimento.</li>
          <li>Fazer o sorteio no perfil pessoal, mas pedindo para seguir o profissional.</li>
          <li>Entrar como “parceira” no sorteio de uma marca.</li>
          <li>Trocar a palavra “sorteio” por “desafio” ou “presente” e manter a mecânica.</li>
          <li>Pedir que os participantes contem a própria história nos comentários.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de qualquer ação promocional</h2>
        <ul>
          <li>Existe escolha de ganhadores ao acaso? Se sim, não faça.</li>
          <li>Há vantagem financeira, gratuidade ou desconto em destaque? Se sim, não faça.</li>
          <li>A ação depende de contratar, agendar, seguir ou marcar alguém?</li>
          <li>A peça traz nome completo, “psicóloga(o)” e CRP?</li>
          <li>Ninguém precisa expor dado de saúde para participar?</li>
          <li>Na dúvida, consultou o setor de orientação do CRP?</li>
        </ul>
        <p>
          Para o quadro completo do que o art. 20 permite, veja o guia de{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            marketing para psicólogos dentro do Código de Ética
          </Link>{" "}
          e o post sobre{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            divulgar preço
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe cria marcas para consultórios de psicologia que
          atraem pela clareza, não por promoção. São dois encontros de imersão para
          definir posicionamento, identidade visual e verbal, e a marca é entregue
          em até 30 dias, com cada peça revisada pelo art. 20. O processo está na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e nos{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser conversar sobre o seu perfil, marque 15 minutos.
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
            , item “Publicidade Profissional: Preço e Trabalho Voluntário”.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , 2ª edição, 2026, seção “Referência a valores”.
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 2º e 20.
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_SORTEIO} {...ext}>
              Lei nº 5.768, de 20 de dezembro de 1971
            </a>{" "}
            (texto atualizado, Câmara dos Deputados), arts. 1º e 4º.
          </li>
        </ul>
      </section>
    </>
  )
};
