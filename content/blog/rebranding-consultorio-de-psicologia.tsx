import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";
const GOOGLE_SEO = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";

export const post: Post = {
  slug: "rebranding-consultorio-de-psicologia",
  title: "Rebranding de consultório de psicologia: quando vale mudar a marca e como fazer",
  description:
    "Sinais de que o consultório precisa de rebranding, o que manter, como mudar sem perder quem já te conhece e os cuidados do Código de Ética na nova marca.",
  keyword: "rebranding de consultório de psicologia",
  tags: ["identidade-visual", "posicionamento"],
  publishedAt: "2026-11-12",
  summary:
    "Rebranding vale quando a marca não conta mais quem você atende hoje: mudou o público, a abordagem, o formato (virou clínica, passou a atender online) ou a identidade nunca foi pensada. Comece pelo posicionamento, decida o que manter, troque tudo de uma vez nos pontos de contato e avise quem já te conhece. A nova marca segue o artigo 20 do Código de Ética: nome completo, CRP, nada de promessa ou superlativo.",
  faq: [
    {
      q: "Quando um psicólogo deve fazer rebranding?",
      a: "Quando a marca atual não representa mais o trabalho: mudança de público ou de especialidade, passagem de consultório individual para clínica, troca de nome, ou uma identidade feita às pressas que não passa a confiança que o atendimento tem."
    },
    {
      q: "Rebranding é só trocar o logo?",
      a: "Não. O logo é a parte visível. Antes dele vêm o posicionamento (para quem você atende e como), o nome, o tom de voz e a forma de explicar o serviço. Trocar só o logo costuma deixar a mesma confusão com outra cara."
    },
    {
      q: "Vou perder seguidores e posição no Google se mudar a marca?",
      a: "O risco existe quando o endereço do site ou o nome muda sem cuidado. Mantenha o domínio ou redirecione as páginas antigas, atualize o Perfil da Empresa no Google e avise quem já te segue. Quem já te conhece segue a pessoa, não o logo."
    },
    {
      q: "Preciso avisar o CRP quando mudo a marca?",
      a: "Se você atua como pessoa física, a marca é sua forma de se apresentar, e o que precisa continuar aparecendo é o nome completo e o CRP. Se há pessoa jurídica registrada no CRP e o nome dela muda, confira com o seu Conselho Regional o que precisa ser atualizado."
    }
  ],
  cover: {
    src: "/blog/rebranding-consultorio-de-psicologia/rebranding-consultorio-de-psicologia-papelaria-e-planta.jpg",
    alt: "Bloco de papel, cadernos, cartões em branco, óculos e uma planta sobre mesa bege, material para o rebranding de consultório de psicologia",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muitas marcas de consultório nascem no improviso: um logo feito no
        aplicativo, uma paleta escolhida no gosto do dia, um nome pensado antes
        de saber para quem seria o atendimento. Funciona por um tempo. Depois o
        trabalho amadurece, o público muda, e a marca começa a contar uma
        história que já não é a sua. É aí que a palavra rebranding aparece.
      </p>
      <p>
        Este texto ajuda a decidir se vale mudar, o que mudar primeiro e como
        fazer a troca sem confundir quem já te conhece.
      </p>

      <section>
        <h2>Sinais de que a marca ficou para trás</h2>
        <ul>
          <li>
            <strong>Mudou o público.</strong> Você começou atendendo adultos e
            hoje a maior parte da agenda é de crianças e orientação de pais, mas
            o site e o perfil ainda falam com o adulto.
          </li>
          <li>
            <strong>Mudou o formato.</strong> O consultório virou clínica com
            outras profissionais, ou passou a atender online em vários estados.
          </li>
          <li>
            <strong>Você precisa explicar a marca.</strong> Quando alguém
            pergunta o que o nome ou o símbolo querem dizer e a resposta é
            longa, a marca não está fazendo o trabalho dela.
          </li>
          <li>
            <strong>Cada peça parece de um lugar diferente.</strong> Cartão,
            Instagram, site e WhatsApp com cores, fontes e tons diferentes.
          </li>
          <li>
            <strong>Vergonha de mandar o link.</strong> Se você evita mandar o
            site para uma escola ou para um colega que poderia indicar, a marca
            está atrapalhando.
          </li>
        </ul>
        <p>
          Nenhum desses sinais pede pressa. Mas, quando dois ou três aparecem
          juntos, a marca deixou de ajudar quem procura atendimento a entender
          se você é a pessoa certa.
        </p>
      </section>

      <section>
        <h2>Quando não vale mudar</h2>
        <p>
          Rebranding não resolve agenda vazia sozinho, nem substitui conteúdo,
          presença no Google ou rede de indicação. Também não vale quando:
        </p>
        <ul>
          <li>a marca é recente e o incômodo é só cansaço de olhar para ela;</li>
          <li>o problema real é o site lento ou o perfil sem informação básica;</li>
          <li>
            você ainda não sabe para quem quer atender. Nesse caso, o primeiro
            passo é o{" "}
            <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
              posicionamento
            </Link>
            , e talvez a{" "}
            <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
              escolha do nicho
            </Link>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>O que dizem as normas sobre a marca do psicólogo</h2>
        <p>
          O Código de Ética não proíbe ter marca, logo ou nome de consultório. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          diz que a logomarca no perfil é permitida desde que esteja vinculada
          ao nome completo (ou nome social), à titulação “psicóloga” ou
          “psicólogo” e ao número do CRP. O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          continua valendo para a nova marca: nada de previsão taxativa de
          resultados, preço como chamariz, autopromoção em detrimento de outros
          profissionais ou divulgação sensacionalista.
        </p>
        <p>
          Se o consultório funciona como pessoa jurídica, a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          lembra que a divulgação pode usar o nome da empresa (razão social ou
          nome fantasia) com o número de inscrição dela no CRP. Mais detalhes
          em{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            psicólogo com CNPJ e nome fantasia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Passo a passo de um rebranding sem confusão</h2>
        <ol>
          <li>
            <strong>Escreva o posicionamento novo em uma frase.</strong> Para
            quem você atende, com qual abordagem, em que formato. Exemplo
            ilustrativo: “Psicóloga que atende crianças autistas e orienta as
            famílias, presencial em Belo Horizonte e online”.
          </li>
          <li>
            <strong>Liste o que fica.</strong> Uma cor que as pessoas já
            reconhecem, um nome que já circula entre escolas e colegas. Manter
            uma âncora ajuda quem já te conhece a se achar.
          </li>
          <li>
            <strong>Decida o nome.</strong> Mudar de nome é a parte mais cara
            do rebranding, porque mexe em domínio, perfil, cartão e no que as
            pessoas falam. Se for mudar, veja o guia de{" "}
            <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
              nome para consultório
            </Link>{" "}
            e pesquise o nome no{" "}
            <a href={INPI} {...ext}>
              INPI
            </a>
            .
          </li>
          <li>
            <strong>Desenhe a identidade visual.</strong> Logo, cores, fontes e
            aplicações pensadas a partir do posicionamento, e não do gosto. O
            guia de{" "}
            <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
              identidade visual para psicólogo
            </Link>{" "}
            explica as peças.
          </li>
          <li>
            <strong>Ajuste o texto.</strong> Bio, página “sobre”, mensagem de
            boas-vindas do WhatsApp. Um rebranding que muda o visual e mantém
            o texto antigo fica pela metade. Veja{" "}
            <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
              tom de voz para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Troque tudo na mesma semana.</strong> Site, Instagram,
            Perfil da Empresa no Google, WhatsApp Business, assinatura de
            e-mail, cartão e placa. Marca nova num canal e antiga no outro
            parece dois consultórios.
          </li>
          <li>
            <strong>Avise.</strong> Um post explicando a mudança, uma mensagem
            para escolas e colegas que indicam, e o novo material para quem
            encaminha.
          </li>
        </ol>
      </section>

      <section>
        <h2>Site e Google: o cuidado técnico</h2>
        <p>
          Se o domínio continuar o mesmo, o Google só precisa ler as páginas de
          novo. Se o domínio mudar, cada endereço antigo deve redirecionar
          (redirecionamento 301) para o novo equivalente, como orienta o{" "}
          <a href={GOOGLE_SEO} {...ext}>
            guia de SEO do Google
          </a>
          . Atualize também o nome no Perfil da Empresa no Google com o seu nome
          real, como explicado em{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar na marca nova</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar no rebranding de consultório" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar no rebranding de consultório</caption>
            <thead><tr><th scope="col">Na marca nova</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Logo e nome fantasia junto do nome completo e do CRP</td><td>Sim</td></tr>
              <tr><td>Slogan que diz para quem você atende</td><td>Sim</td></tr>
              <tr><td>Slogan que promete resultado (“acabe com a ansiedade”)</td><td>Não</td></tr>
              <tr><td>“A melhor clínica”, “referência em autismo” sem prova</td><td>Não</td></tr>
              <tr><td>Foto de criança atendida ou de sessão na apresentação</td><td>Não</td></tr>
              <tr><td>Post de lançamento com desconto na primeira sessão</td><td>Não (preço como chamariz)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Trocar o logo e deixar o resto igual.</li>
          <li>Mudar aos poucos, um canal por mês, por meses.</li>
          <li>Escolher a marca nova pela tendência visual do ano.</li>
          <li>Apagar o perfil antigo e criar outro do zero, perdendo quem já seguia.</li>
          <li>Esquecer o cartão, a placa e o material que as escolas já têm.</li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Quem procura atendimento para um filho autista costuma pesquisar
          muito, voltar ao site várias vezes e conversar com outras famílias.
          Uma mudança brusca de nome ou de visual pode fazer a família achar que
          encontrou outro lugar. Mantenha uma âncora reconhecível, explique a
          mudança com calma e revise a linguagem sobre autismo junto com a
          marca, com base na{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          . Para o visual, valem os cuidados do texto sobre{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>
          : estímulo na medida, contraste suficiente e nada de quebra-cabeça
          colorido por padrão.
        </p>
      </section>

      <section>
        <h2>Checklist do rebranding</h2>
        <ul>
          <li>Posicionamento novo escrito em uma frase.</li>
          <li>Lista do que fica e do que muda.</li>
          <li>Nome conferido no INPI e domínio garantido, se mudar.</li>
          <li>Identidade visual com aplicações prontas.</li>
          <li>Textos de bio, site e WhatsApp revisados.</li>
          <li>Nome completo, “psicóloga(o)” e CRP em todas as peças.</li>
          <li>Redirecionamentos do site, se o endereço mudar.</li>
          <li>Troca feita em todos os canais na mesma semana.</li>
          <li>Aviso para seguidores, escolas e colegas que indicam.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe faz o rebranding de consultórios de psicologia em
          dois dias de imersão: posicionamento, nome quando precisa,
          identidade visual e verbal, com a marca no ar em 45 dias, dentro do
          artigo 20 do Código de Ética. O processo está descrito na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e nos{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua marca ficou para trás, o primeiro passo é uma conversa de
          15 minutos.
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
            Google Search Central.{" "}
            <a href={GOOGLE_SEO} {...ext}>
              Guia de otimização de mecanismos de pesquisa (SEO) para iniciantes
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
