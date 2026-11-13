import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES10 = "https://www.normasbrasil.com.br/norma/resolucao-10-2018_358293.html";
const CFP_NOME = "https://site.cfp.org.br/destaque-nome-social-identidade/";
const RES06 = "https://www.sepsi.ufscar.br/arquivos/regulamentacao/resolucaocfp-06-2019.pdf";
const WARRIER = "https://doi.org/10.1038/s41467-020-17794-1";

export const post: Post = {
  slug: "nome-social-psicologo-marca",
  title: "Nome social do psicólogo na marca: o que a Resolução CFP 10/2018 garante",
  description:
    "Psicóloga trans ou travesti pode usar só o nome social na divulgação, no logo e no laudo? Pode. Veja o que garantem a Res. CFP 10/2018 e a Nota Técnica 01/2022.",
  keyword: "nome social psicólogo",
  tags: ["identidade-visual", "divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "Sim. A Resolução CFP nº 10/2018 permite que a psicóloga ou o psicólogo trans ou travesti use o nome social, junto com o número de registro, na assinatura dos documentos e nos instrumentos de divulgação, sem incluir o nome civil. A Nota Técnica CFP nº 1/2022 confirma: a publicidade deve trazer o nome completo ou o nome social, a palavra psicóloga(o) e o CRP. Para isso, peça por escrito ao seu CRP a inclusão do nome social na carteira profissional.",
  faq: [
    {
      q: "Posso divulgar meus serviços só com o nome social?",
      a: "Pode. O art. 3º da Resolução CFP nº 10/2018 permite o uso do nome social, com o número de registro, nos instrumentos de divulgação, sem necessidade do nome civil. A Nota Técnica CFP nº 1/2022 lista o nome social como alternativa ao nome completo na publicidade."
    },
    {
      q: "Como incluo o nome social na carteira do CRP?",
      a: "A resolução prevê que a psicóloga solicite por escrito ao Conselho Regional a inclusão. As carteiras emitidas depois de 2018 têm campo para o nome social, de preferência próximo à foto. Consulte o seu CRP sobre o formulário e os documentos pedidos."
    },
    {
      q: "O nome social aparece no Cadastro Nacional de psicólogos?",
      a: "Segundo a Resolução CFP nº 10/2018, nos sistemas informatizados de acesso ao público aparecem apenas o nome social e o número de registro, quando a profissional pede. Assim, quem confere seu CRP encontra o mesmo nome da sua marca."
    },
    {
      q: "Posso assinar laudos e declarações com o nome social?",
      a: "Pode. O art. 3º da Resolução CFP nº 10/2018 permite o nome social na assinatura dos documentos resultantes do trabalho, e a Resolução CFP nº 6/2019 pede nos documentos o nome completo ou o nome social completo da psicóloga, com a inscrição no CRP."
    }
  ],
  cover: {
    src: "/blog/nome-social-psicologo-marca/nome-social-psicologo-cartoes-de-visita.jpg",
    alt: "Cartões de visita em branco sobre mármore claro com clipes cor de cobre, caneta e a borda de um notebook",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Para uma psicóloga trans ou travesti, montar a marca traz uma dúvida
        que colegas cis não têm: o art. 20 pede “nome completo” na
        divulgação, então seria preciso mostrar o nome civil no Instagram, no
        site ou no carimbo? A resposta curta é não. O Conselho Federal de
        Psicologia garante o uso do nome social na carteira, nos documentos e
        na publicidade, e a marca pode ser construída inteira sobre ele.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={RES10} {...ext}>
            Resolução CFP nº 10/2018
          </a>{" "}
          assegura às pessoas transexuais e travestis o direito de escolher o
          tratamento nominal na Carteira de Identidade Profissional (CIP) e
          nos atos do CFP e dos CRPs, incluindo “informativos, publicidade e
          congêneres”. Os pontos que importam para a marca:
        </p>
        <ul>
          <li>
            <strong>Art. 1º, § 1º:</strong> as carteiras têm campo próprio
            para o nome social, de preferência próximo à foto.
          </li>
          <li>
            <strong>Art. 1º, § 2º:</strong> nos sistemas de acesso ao público
            aparecem apenas o nome social e o número de registro, conforme
            solicitado pela profissional.
          </li>
          <li>
            <strong>Art. 2º:</strong> a inclusão é pedida por escrito ao CRP.
          </li>
          <li>
            <strong>Art. 3º:</strong> é permitido usar o nome social, junto
            com o número de registro, na assinatura dos documentos e “nos
            instrumentos de sua divulgação”, sem necessidade do nome civil.
          </li>
        </ul>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica isso à publicidade: ao divulgar seus serviços, a psicóloga
          informa “o seu nome completo, ou nome social”, a titulação e o CRP.
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          repete a regra, e o CFP{" "}
          <a href={CFP_NOME} {...ext}>
            noticiou em 2017
          </a>{" "}
          a decisão de destacar o nome social na frente da carteira.
        </p>
      </section>

      <section>
        <h2>Onde o nome social entra na marca</h2>
        <p>
          Use o nome social em todos os pontos de contato, sempre com
          “psicóloga” (ou psicólogo) e o CRP. Coerência entre eles é o que faz
          a pessoa que te encontrou no Instagram reconhecer o mesmo nome no
          Google e no cadastro do Conselho.
        </p>
        <ol>
          <li>
            <strong>Logo e assinatura visual:</strong> o nome social pode ser a
            própria marca, como em qualquer marca de nome próprio. Veja o que
            compõe uma{" "}
            <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
              identidade visual para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Perfis e bio:</strong> nome social no nome do perfil e na
            bio, com o CRP. O artigo sobre{" "}
            <Link href="/blog/bio-instagram-psicologo-exemplos" className="inst-link">
              bio de psicólogo no Instagram
            </Link>{" "}
            traz exemplos de estrutura.
          </li>
          <li>
            <strong>Site e domínio:</strong> o domínio pode usar o nome social.
            Em “sobre”, conte a trajetória que quiser contar; não é obrigação
            explicar o nome.
          </li>
          <li>
            <strong>E-mail, cartão e carimbo:</strong> o mesmo nome em todos.
            Veja o{" "}
            <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
              cartão de visita para psicólogo
            </Link>{" "}
            e a assinatura do{" "}
            <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
              e-mail profissional
            </Link>
            .
          </li>
          <li>
            <strong>Documentos:</strong> a Resolução CFP nº 6/2019 pede, no
            laudo e na declaração, o nome completo ou o nome social completo
            da psicóloga com a inscrição no CRP.
          </li>
        </ol>
        <p>
          <strong>Erro comum:</strong> pedir a inclusão no CRP só depois de
          imprimir o material. Faça o pedido primeiro, para que o cadastro
          público e a carteira já mostrem o nome da marca.
        </p>
      </section>

      <section>
        <h2>E o CNPJ e os contratos?</h2>
        <p>
          A Resolução CFP nº 10/2018 trata da carteira, dos atos dos Conselhos,
          dos documentos psicológicos e da divulgação. Registros fora do
          Sistema Conselhos, como contrato social, CNPJ, banco e plataformas
          de pagamento, seguem as regras de cada órgão ou empresa. Na
          divulgação de uma pessoa jurídica, vale o mesmo cuidado: o nome da
          responsável técnica aparece com o CRP, e pode ser o nome social. O
          artigo sobre{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            CNPJ e nome fantasia
          </Link>{" "}
          explica a identificação da PJ.
        </p>
      </section>

      <section>
        <h2>Nome social na divulgação: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Nome social na divulgação da psicóloga: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Nome social na divulgação da psicóloga: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Logo, site e perfil só com o nome social e o CRP</td><td>Sim (Res. 10/2018, art. 3º)</td></tr>
              <tr><td>Laudo assinado com o nome social e o CRP</td><td>Sim (Res. 10/2018 e Res. 6/2019)</td></tr>
              <tr><td>Divulgar sem o nome civil</td><td>Sim</td></tr>
              <tr><td>Divulgar com nome social e sem o CRP</td><td>Não (art. 20, a)</td></tr>
              <tr><td>Usar apelido sem o nome social ou completo</td><td>Não (apelido só junto do nome e CRP)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          O nome social também importa do outro lado: o das pessoas
          atendidas. Um estudo com mais de 640 mil participantes, publicado na{" "}
          <a href={WARRIER} {...ext}>
            Nature Communications em 2020
          </a>
          , encontrou, em média, taxas mais altas de diagnóstico de autismo
          entre pessoas trans e de gênero diverso do que entre pessoas cis.
          Quem atende adolescentes neurodivergentes e suas famílias deve estar
          preparada para isso na comunicação.
        </p>
        <ul>
          <li>
            Inclua um campo “nome pelo qual prefere ser chamada(o)” na ficha de
            cadastro e no formulário do site.
          </li>
          <li>
            A Resolução CFP nº 6/2019 já prevê, nos documentos, o nome completo
            ou o nome social completo da pessoa atendida.
          </li>
          <li>
            Use linguagem que acolhe a diversidade no site, sem transformar a
            identidade de ninguém em argumento de venda. O texto sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajuda a revisar o tom.
          </li>
        </ul>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Achar que o art. 20 obriga a mostrar o nome civil.</li>
          <li>Montar a marca com o nome social e não pedir a inclusão no CRP.</li>
          <li>Ter nomes diferentes no perfil, no site e no carimbo.</li>
          <li>Esquecer o CRP junto do nome social.</li>
          <li>Não prever campo de nome social para as pessoas atendidas.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist</h2>
        <ul>
          <li>Pedido de inclusão do nome social feito por escrito ao CRP.</li>
          <li>Carteira e cadastro público com o nome social.</li>
          <li>Logo, perfis, site, e-mail, cartão e carimbo com o mesmo nome e CRP.</li>
          <li>Modelo de laudo e declaração com o nome social.</li>
          <li>Ficha e formulários com campo de nome social para quem é atendido.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe cria marcas para consultórios de psicologia a partir
          de quem a profissional é e de quem ela atende. São dois dias de
          imersão para definir posicionamento, identidade visual e tom de voz,
          e a marca fica no ar em 45 dias, com todas as peças revisadas pelo
          art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser conversar sobre a sua marca, marque 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES10} {...ext}>
              Resolução CFP nº 10/2018 — inclusão do Nome Social na Carteira de Identidade Profissional
            </a>{" "}
            (texto no Normas Brasil).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            , item “Uso de apelidos e uso de logomarcas”.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , 2ª edição, 2026, seção “Informações essenciais/básicas”.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={CFP_NOME} {...ext}>
              Profissionais da Psicologia terão nome social destacado na identidade
            </a>
            , 16/12/2017.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06} {...ext}>
              Resolução CFP nº 6/2019 — elaboração de documentos escritos
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            Warrier, V. et al.{" "}
            <a href={WARRIER} {...ext}>
              Elevated rates of autism, other neurodevelopmental and psychiatric
              diagnoses, and autistic traits in transgender and gender-diverse
              individuals
            </a>
            . Nature Communications, 2020.
          </li>
        </ul>
      </section>
    </>
  )
};
