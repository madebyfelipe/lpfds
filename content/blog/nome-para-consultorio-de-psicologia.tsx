import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";

export const post: Post = {
  slug: "nome-para-consultorio-de-psicologia",
  title: "Nome para consultório de psicologia: nome fantasia, PJ e CRP",
  description:
    "Quando o consultório pode usar nome fantasia, o que muda com a pessoa jurídica registrada no CRP e como escolher um nome que funcione na divulgação.",
  keyword: "nome para consultório de psicologia",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-09",
  summary:
    "Psicólogo que atende como pessoa física divulga o próprio nome completo, a palavra psicólogo(a) e o CRP. Nome fantasia (“Espaço…”, “Clínica…”) só entra na divulgação quando há pessoa jurídica registrada no Conselho Regional, com responsável técnico, e acompanhado do número de inscrição da empresa. Um bom nome é fácil de dizer, de buscar e não promete resultado.",
  faq: [
    {
      q: "Posso usar nome fantasia sem ter CNPJ?",
      a: "Na divulgação como psicólogo, o nome fantasia depende de pessoa jurídica registrada no CRP, com responsável técnico. Atendendo como pessoa física, a identificação é o seu nome completo, a palavra psicólogo(a) e o número do CRP."
    },
    {
      q: "Posso abreviar o sobrenome na divulgação?",
      a: "A cartilha do CRP-MG entende que abreviar ou omitir sobrenomes não é, por si só, quebra de ética, desde que o número do CRP apareça — ele é imprescindível. Confira o entendimento do seu Conselho Regional."
    },
    {
      q: "O nome do consultório pode dizer que eu trato uma condição?",
      a: "Nomes que prometem resultado (“Supera”, “Cura”) esbarram na vedação do artigo 20 à previsão taxativa de resultados. Prefira nomes que remetam à sua abordagem, ao seu público ou à sua história."
    },
    {
      q: "Preciso registrar a marca no INPI?",
      a: "Não é obrigatório para atender, mas o registro no INPI é o que protege o uso exclusivo do nome como marca. Antes de investir em identidade visual, vale pesquisar se o nome já está registrado na sua classe de serviços."
    }
  ],
  cover: {
    src: "/blog/nome-para-consultorio-de-psicologia/nome-para-consultorio-de-psicologia-letras.jpg",
    alt: "Tabuleiro de jogo de palavras com peças de letras formando vários nomes, ideia de escolha do nome do consultório",
    caption: "Foto: Jakub Rostkowski / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Escolher o nome do consultório parece a parte divertida da marca. Na
        psicologia, porém, ela vem acompanhada de regras: o Código de Ética e as
        orientações dos Conselhos definem como o profissional se identifica na
        divulgação, e isso muda o que dá ou não para usar como nome. Este texto
        separa as situações — pessoa física e pessoa jurídica —, explica o que
        as normas pedem em cada uma e traz critérios práticos para escolher um
        nome que funcione.
      </p>

      <section>
        <h2>O que a divulgação precisa trazer, sempre</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          determina que o psicólogo, ao promover publicamente seus serviços,
          informe o nome completo, o CRP e o número de registro. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          detalha: nome completo ou nome social, a palavra psicóloga(o), a sigla
          do Conselho Regional e o número de inscrição. Ela também esclarece que
          apelidos, artes e logomarcas são permitidos, desde que vinculados a
          esses dados.
        </p>
        <p>
          Ou seja: qualquer nome que você escolha para a marca convive com a sua
          identificação profissional. Ele nunca a substitui.
        </p>
      </section>

      <section>
        <h2>Pessoa física: a marca é o seu nome</h2>
        <p>
          Quem atende como profissional autônomo divulga o próprio nome. Isso não
          é uma limitação de marca — é um ponto de partida forte. O seu nome é
          único, é o que as pessoas pesquisam depois de uma indicação e é o que
          aparece no CRP.
        </p>
        <p>Algumas decisões que ajudam a transformar o nome em marca:</p>
        <ul>
          <li>
            <strong>Qual versão do nome usar.</strong> Nome e um sobrenome, ou o
            nome completo? A cartilha do CRP-MG entende que abreviar ou omitir
            sobrenomes não é, por si só, quebra de ética, desde que o número do
            CRP apareça. Escolha uma versão e use a mesma em todos os canais.
          </li>
          <li>
            <strong>Assinatura visual.</strong> O nome pode ganhar uma assinatura
            tipográfica própria, com uma versão que inclua a palavra
            psicólogo(a) e o CRP de forma legível.
          </li>
          <li>
            <strong>Usuário nas redes.</strong> Busque um @ que seja o seu nome ou
            algo muito próximo — é o que facilita ser encontrado.
          </li>
        </ul>
      </section>

      <section>
        <h2>Pessoa jurídica: quando entra o nome fantasia</h2>
        <p>
          A cartilha do CRP-MG explica que a publicidade pode ser feita por
          pessoas jurídicas que prestam serviços de psicologia, desde que estejam
          registradas no Conselho Regional e tenham um responsável técnico,
          conforme a Resolução CFP nº 16/2019. Nesse caso, a divulgação pode usar
          o nome da empresa — razão social ou nome fantasia — com o respectivo
          número de inscrição no CRP.
        </p>
        <p>
          Na prática, “Espaço Fulana”, “Clínica Tal” ou um nome conceitual só
          entram na divulgação depois desse registro. Antes disso, o nome
          fantasia pode existir como projeto, mas não como assinatura pública do
          serviço de psicologia.
        </p>
        <p>
          É por isso que, na Made by Felipe, naming não é uma entrega fixa: ele é
          discutido caso a caso, de acordo com a situação jurídica de cada
          consultório.
        </p>
      </section>

      <section>
        <h2>Critérios para escolher um bom nome</h2>
        <h3>1. Fácil de dizer e de escrever</h3>
        <p>
          A maior parte dos consultórios cresce por indicação. Se o nome é
          difícil de pronunciar ou de soletrar, a indicação se perde entre a
          conversa e a busca no Google.
        </p>
        <h3>2. Pesquisável</h3>
        <p>
          Antes de decidir, pesquise o nome no Google, no Instagram e nos mapas
          da sua cidade. Se já existem vários consultórios com nomes parecidos,
          quem procura você vai encontrar outra pessoa.
        </p>
        <h3>3. Sem promessa</h3>
        <p>
          Nomes que sugerem cura, superação ou transformação garantida esbarram
          na vedação do artigo 20 à previsão taxativa de resultados. Isso vale
          também para o nome, que é a primeira peça de divulgação.
        </p>
        <h3>4. Coerente com o posicionamento</h3>
        <p>
          O nome deve combinar com o público e com o tom do consultório. Um
          espaço que atende famílias de crianças neurodivergentes pode ter um
          nome acolhedor; um consultório de atendimento a executivos, um nome
          mais sóbrio. Sem posicionamento definido, o nome vira questão de gosto
          — veja{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>
          .
        </p>
        <h3>5. Disponível</h3>
        <p>
          Verifique domínio de site, usuário nas redes e, se a ideia é proteger
          a marca, a base do INPI (Instituto Nacional da Propriedade
          Industrial). O registro de marca não é obrigatório para atender, mas é
          o que garante o uso exclusivo do nome.
        </p>
      </section>

      <section>
        <h2>Consultório que atende crianças e famílias</h2>
        <p>
          Para quem atende crianças e adolescentes — incluindo famílias de
          crianças autistas e neurodivergentes —, o nome conversa com os pais.
          Alguns cuidados extras:
        </p>
        <ul>
          <li>
            Evite nomes que reduzam a criança a uma condição ou sugiram que algo
            precisa ser “consertado”.
          </li>
          <li>
            Fuja de trocadilhos com o quebra-cabeça e outros símbolos contestados
            pela comunidade autista.
          </li>
          <li>
            Prefira nomes que comuniquem acolhimento sem infantilizar — o
            responsável precisa levar o consultório a sério.
          </li>
          <li>
            Se o espaço reunir profissionais de áreas diferentes, lembre que cada
            profissão tem as suas regras de divulgação e que a psicologia não deve
            propor atividades privativas de outras categorias (artigo 20).
          </li>
        </ul>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Usar nome fantasia em placa, site ou Instagram sem PJ registrada no CRP.</li>
          <li>Esquecer o CRP na bio ou na assinatura do e-mail.</li>
          <li>Escolher um nome com o símbolo Ψ ou “psi” sem nenhum outro diferencial.</li>
          <li>Trocar de nome a cada fase do consultório, perdendo o que já foi construído.</li>
          <li>Usar “Dr.” ou “Dra.” sem doutorado — a cartilha do CRP-MG alerta para isso.</li>
        </ul>
      </section>

      <section>
        <h2>Do nome à marca</h2>
        <p>
          O nome é só o começo. Ele precisa de uma assinatura visual, de uma
          identidade verbal e de consistência entre os canais. Os textos sobre{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          e{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>{" "}
          mostram os próximos passos.
        </p>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
          sobre o nome e a marca do seu consultório, o primeiro passo é uma
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
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (inclui a referência à Resolução CFP nº 16/2019).
          </li>
          <li>
            Instituto Nacional da Propriedade Industrial —{" "}
            <a href="https://www.gov.br/inpi/pt-br/servicos/marcas" {...ext}>
              Marcas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
