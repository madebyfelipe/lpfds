import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES11 = "https://www.normasbrasil.com.br/norma/resolucao-11-2000_96213.html";
const CDC = "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm";

export const post: Post = {
  slug: "psicologo-vender-curso-material",
  title: "Psicólogo pode vender curso, e-book ou material? O que o CFP diz sobre produtos",
  description:
    "Psicólogo pode vender curso, e-book ou material? Pode, com limites: a Res. CFP 11/2000, o art. 18 do Código de Ética e o art. 20 na página de vendas.",
  keyword: "psicólogo pode vender curso",
  tags: ["divulgacao-etica", "posicionamento"],
  publishedAt: "2026-11-13",
  summary:
    "Pode. Nenhuma norma do CFP proíbe a psicóloga de vender cursos, e-books ou materiais. Os limites são três: não vender a leigos instrumentos e técnicas que facilitem o exercício ilegal da profissão (art. 18 do Código de Ética), seguir a Resolução CFP nº 11/2000 quando o produto é um instrumento psicológico, e divulgar cursos e mentorias com as mesmas regras do art. 20 que valem para os serviços: sem desconto como chamariz, sem sorteio e sem promessa.",
  faq: [
    {
      q: "Psicólogo pode vender e-book?",
      a: "Pode. Um e-book educativo para o público é conteúdo, não instrumento psicológico. A divulgação segue o art. 20: nome completo ou nome social, CRP, sem promessa de resultado (“supere a ansiedade em 30 dias”) e sem usar desconto ou gratuidade como chamariz do seu serviço."
    },
    {
      q: "Psicólogo pode vender curso para leigos?",
      a: "Pode oferecer cursos de conteúdo psicológico para o público, como orientação a pais. O que o art. 18 do Código de Ética veda é ensinar ou vender a leigos instrumentos e técnicas psicológicas que permitam ou facilitem o exercício ilegal da profissão, como aplicar testes ou conduzir intervenções privativas."
    },
    {
      q: "Psicólogo pode fazer cupom de desconto no curso?",
      a: "A cartilha do CRP-MG diz que a publicidade de cursos livres, supervisões e mentorias feita por psicólogas segue as mesmas diretrizes da publicidade de serviços, e essas diretrizes vedam descontos, promoções e cupons. Então cupom e “oferta relâmpago” devem ficar fora."
    },
    {
      q: "Posso mostrar o preço do curso na página de vendas?",
      a: "Informar o valor na página onde o curso é comprado é informação ao consumidor, e a cartilha do CRP-MG aplica essa lógica ao serviço vendido só pela internet. O que não pode é o preço virar o destaque da divulgação, com desconto, comparação ou contagem regressiva."
    },
    {
      q: "Psicólogo pode vender material terapêutico ou jogos?",
      a: "Jogos, inventários e outros instrumentos psicológicos entram na Resolução CFP nº 11/2000: precisam de ficha técnica e, se forem de uso restrito, só podem ser vendidos a psicólogas com registro. Material educativo para pais, sem técnica privativa, segue as regras gerais de publicidade."
    }
  ],
  cover: {
    src: "/blog/psicologo-vender-curso-material/psicologo-vender-curso-notebook-e-livro.jpg",
    alt: "Notebook sobre mesa branca com livro aberto, caneta, caneca e um vaso de planta, mesa de quem prepara um curso on-line",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Curso para pais, e-book sobre rotina, mentoria para colegas, baralho
        de cartas para usar em sessão: muitas psicólogas pensam em um produto
        para não depender só das horas de atendimento. A dúvida é se o
        Código de Ética permite. A resposta curta é sim, com limites claros
        que dependem do tipo de produto e de para quem você vende.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          não proíbe a venda de produtos. Ele traz dois limites. O art. 18
          diz que a psicóloga “não divulgará, ensinará, cederá, emprestará ou
          venderá a leigos instrumentos e técnicas psicológicas que permitam
          ou facilitem o exercício ilegal da profissão”. E o art. 1º, alínea
          i, pede que a comercialização e a divulgação do material privativo
          sigam os princípios do Código.
        </p>
        <p>
          A{" "}
          <a href={RES11} {...ext}>
            Resolução CFP nº 11/2000
          </a>{" "}
          disciplina a oferta de produtos e serviços ao público. Ela chama de
          produto os testes psicológicos, inventários, material de orientação
          vocacional, jogos e outros instrumentos, exige ficha técnica e
          restringe a venda dos produtos de uso privativo a psicólogas
          registradas. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          retoma a resolução e o{" "}
          <a href={CDC} {...ext}>
            Código de Defesa do Consumidor
          </a>{" "}
          para vedar publicidade enganosa ou abusiva na oferta de produtos.
        </p>
        <p>
          Por fim, a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          afirma que a publicidade de cursos livres, supervisões e mentorias
          feita por psicólogas segue as mesmas diretrizes da publicidade de
          serviços psicológicos.
        </p>
      </section>

      <section>
        <h2>Que tipo de produto você quer vender</h2>
        <p>
          A regra muda conforme o produto. Antes de criar a página de vendas,
          encaixe o seu em uma destas três categorias.
        </p>
        <h3>Conteúdo educativo para o público</h3>
        <p>
          E-book, curso ou oficina que explica um tema com base na ciência
          psicológica: rotina de sono, como conversar com a escola, o que é
          uma avaliação. É permitido e segue o art. 19 (conteúdo com base
          científica) e o art. 20 na divulgação. O limite é não ensinar
          técnica privativa a quem não é psicóloga.
        </p>
        <h3>Formação para psicólogas</h3>
        <p>
          Curso, supervisão ou mentoria para colegas. Aqui você pode ensinar
          técnicas, porque o público é habilitado. A divulgação segue as
          mesmas regras de serviço, segundo a cartilha. Confira se o que você
          ensina é prática reconhecida pela profissão, como pede o art. 20,
          alínea c.
        </p>
        <h3>Instrumentos psicológicos</h3>
        <p>
          Jogos, cartas, inventários e materiais de uso em atendimento. Entram
          na Resolução nº 11/2000: ficha técnica com nome, fornecedor, data,
          fundamentação teórica e responsável técnico com CRP, entre outros
          itens. Se o material for de uso restrito, o rótulo precisa dizer
          que só pode ser adquirido por psicólogas, e a venda exige a carteira
          profissional.
        </p>
        <p>
          <strong>Erro comum:</strong> vender a pais um “kit de avaliação
          para fazer em casa”. Isso entrega a leigos um instrumento e cai no
          art. 18.
        </p>
      </section>

      <section>
        <h2>Como divulgar sem ferir o art. 20</h2>
        <p>
          A página de vendas e os posts sobre o produto são publicidade
          profissional. Na prática:
        </p>
        <ul>
          <li>
            <strong>Identificação:</strong> nome completo ou nome social,
            “psicóloga” e CRP na página e nos anúncios.
          </li>
          <li>
            <strong>Sem promessa:</strong> “seu filho vai parar de ter crises”
            ou “dobre a agenda em 90 dias” são previsões taxativas de
            resultado. Descreva o conteúdo, a carga horária e para quem é.
          </li>
          <li>
            <strong>Sem desconto, cupom ou sorteio:</strong> a cartilha lista
            descontos, promoções, pacotes, cupons e sorteios entre as
            vedações, e manda aplicá-las também aos cursos.
          </li>
          <li>
            <strong>Sem depoimento que exalte você.</strong> Comentários de
            alunas sobre o curso exigem o mesmo cuidado; os de pacientes ficam
            fora. Veja{" "}
            <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
              o que vale para depoimentos
            </Link>
            .
          </li>
          <li>
            <strong>Preço informativo.</strong> O valor pode aparecer onde a
            compra acontece, sem virar o destaque. O texto sobre{" "}
            <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
              preço na divulgação
            </Link>{" "}
            explica a diferença.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de chamada:</em> “Curso on-line para pais de
          crianças autistas: seis aulas sobre rotina, escola e comunicação,
          com base em evidências. Com a psicóloga Ana Souza, CRP 00/00000.”
          Os nomes são fictícios.
        </p>
      </section>

      <section>
        <h2>Produto: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Venda de curso ou material por psicóloga: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Venda de curso ou material por psicóloga: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>E-book educativo para pais, com fontes</td><td>Sim</td></tr>
              <tr><td>Curso de técnica para psicólogas registradas</td><td>Sim</td></tr>
              <tr><td>Jogo terapêutico com ficha técnica, vendido a psicólogas</td><td>Sim (Res. 11/2000)</td></tr>
              <tr><td>Ensinar pais a aplicar um teste psicológico</td><td>Não (art. 18)</td></tr>
              <tr><td>“Black Friday: 50% off no curso”</td><td>Não (desconto como chamariz)</td></tr>
              <tr><td>Sorteio de vaga no curso</td><td>Não (Nota Técnica e cartilha)</td></tr>
              <tr><td>Bônus de sessão com desconto para quem comprar o e-book</td><td>Não (venda casada e preço)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Cursos e materiais para pais de crianças autistas ou com TDAH são um
          formato comum e sensível, porque muitas famílias chegam cansadas e
          expostas a promessas. Três cuidados
          ajudam:
        </p>
        <ul>
          <li>
            <strong>Diga o que o curso não é:</strong> não substitui avaliação,
            acompanhamento nem orientação individual.
          </li>
          <li>
            <strong>Não venda método milagroso.</strong> “Técnica que reduz as
            crises” é promessa. “O que a pesquisa diz sobre crises e como
            organizar a rotina” é conteúdo.
          </li>
          <li>
            <strong>Não use fotos de crianças</strong> nem relatos de famílias
            atendidas para vender.
          </li>
        </ul>
        <p>
          Se o objetivo é orientar pais de forma individual, isso é serviço, e
          o texto sobre{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            como divulgar a orientação parental
          </Link>{" "}
          mostra o caminho. Para conteúdo gratuito que mantém a relação com as
          famílias, veja como montar uma{" "}
          <Link href="/blog/newsletter-para-psicologo" className="inst-link">
            newsletter para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Ensinar técnica privativa ou aplicação de teste a quem não é psicóloga.</li>
          <li>Vender jogo ou inventário sem ficha técnica.</li>
          <li>Usar cupom, contagem regressiva ou “últimas vagas com desconto”.</li>
          <li>Prometer resultado na página de vendas.</li>
          <li>Esquecer nome e CRP no anúncio porque “é um infoproduto”.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de lançar</h2>
        <ul>
          <li>Produto encaixado: conteúdo, formação ou instrumento.</li>
          <li>Público definido e compatível com o art. 18.</li>
          <li>Ficha técnica pronta, se for instrumento (Res. 11/2000).</li>
          <li>Página com nome completo ou nome social, CRP e descrição honesta.</li>
          <li>Nenhum desconto, cupom, sorteio ou promessa.</li>
          <li>Política de privacidade para os dados de quem compra.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe cria marcas para consultórios de psicologia. Quando
          um curso ou material faz parte do posicionamento, ele entra na
          identidade e no site desde o início, com cada peça revisada pelo
          art. 20. São dois encontros de imersão e a marca é entregue em até 30 dias.
          Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser conversar sobre o seu produto, marque 15 minutos.
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
            , arts. 1º (alínea i), 18, 19 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES11} {...ext}>
              Resolução CFP nº 11/2000 — disciplina a oferta de produtos e serviços ao público
            </a>{" "}
            (texto consolidado no Normas Brasil).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            , item “Oferta de produtos e de serviços”.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , 2ª edição, 2026, seções “Referência a valores” e “Instrumentos e
            técnicas privativas”.
          </li>
          <li>
            Brasil.{" "}
            <a href={CDC} {...ext}>
              Lei nº 8.078/1990 — Código de Defesa do Consumidor
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
