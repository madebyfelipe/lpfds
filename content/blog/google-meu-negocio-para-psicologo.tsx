import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

const DIRETRIZES = "https://support.google.com/business/answer/3038177?hl=pt-BR";
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "google-meu-negocio-para-psicologo",
  title: "Google Meu Negócio para psicólogo: como montar o Perfil da Empresa dentro do Código de Ética",
  description:
    "Como criar o Perfil da Empresa no Google (antigo Google Meu Negócio) para consultório de psicologia: nome, endereço, categoria, descrição e avaliações.",
  keyword: "google meu negócio para psicólogo",
  publishedAt: "2026-11-09",
  summary:
    "O Perfil da Empresa no Google (antigo Google Meu Negócio) faz o consultório aparecer no Maps e na busca local. Vale para quem atende em um endereço físico: use seu nome real, sem palavras-chave no nome, o endereço exato, poucas categorias e uma descrição sem preço nem promessa. Não peça avaliações a pacientes e, ao responder, nunca confirme que alguém é paciente.",
  faq: [
    {
      q: "Psicólogo que atende só online pode ter Perfil da Empresa no Google?",
      a: "Pelas diretrizes do Google, o perfil é para empresas com um local físico que recebe clientes ou que atendem no endereço do cliente. Quem atende só online, sem consultório, em geral não se encaixa; nesse caso, o site e o conteúdo fazem o trabalho de ser encontrado."
    },
    {
      q: "Posso colocar \"psicóloga infantil\" ou o nome da cidade no nome do perfil?",
      a: "Não. As diretrizes pedem o nome real, como você é conhecido no dia a dia, e proíbem informações de serviço ou de local no nome. A especialidade vai na categoria e na descrição; a cidade, no endereço."
    },
    {
      q: "Posso pedir para pacientes avaliarem meu consultório no Google?",
      a: "Não é recomendável. A avaliação expõe que a pessoa faz terapia e funciona como depoimento, que a cartilha do CRP-MG não recomenda para promover o profissional. Se alguém avaliar por conta própria, responda sem confirmar que a pessoa é paciente."
    },
    {
      q: "O que escrever na descrição do perfil?",
      a: "Para quem você atende, como trabalha (presencial, online, faixas etárias) e sua formação, com nome completo e CRP. O Google não permite links, preços ou promoções na descrição, e o artigo 20 do Código de Ética veda promessa de resultado."
    }
  ],
  cover: {
    src: "/blog/google-meu-negocio-para-psicologo/google-meu-negocio-para-psicologo-mapa.jpg",
    alt: "Mapa rodoviário impresso em close, com estradas, cidades e rios, ilustrando como o consultório de psicologia é encontrado no mapa",
    caption: "Foto: World Maps / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Quando alguém pesquisa “psicóloga infantil perto de mim” ou
        “psicólogo em [bairro]”, o Google costuma mostrar primeiro um mapa com
        alguns consultórios. Esses resultados vêm do Perfil da Empresa no
        Google, o serviço que até pouco tempo se chamava Google Meu Negócio.
      </p>
      <p>
        Para um consultório com endereço, é uma das formas mais diretas de ser
        encontrado por quem está perto. Mas o perfil tem regras do Google e,
        no caso de psicólogos, também as regras do Código de Ética. Este texto
        junta as duas coisas.
      </p>

      <section>
        <h2>Quem pode ter o perfil</h2>
        <p>
          As{" "}
          <a href={DIRETRIZES} {...ext}>
            diretrizes do Google
          </a>{" "}
          dizem que o perfil é para empresas que têm um local físico para os
          clientes visitarem ou que atendem no endereço do cliente. Na prática:
        </p>
        <ul>
          <li>
            <strong>Consultório próprio ou alugado, com placa e horário de
            atendimento:</strong> pode ter perfil.
          </li>
          <li>
            <strong>Sala em clínica ou espaço compartilhado com outros
            profissionais:</strong> o Google trata cada profissional como
            “profissional liberal”. A clínica tem o perfil dela, e o seu leva só
            o seu nome, sem o nome da clínica.
          </li>
          <li>
            <strong>Escritório virtual (só endereço de correspondência):</strong>{" "}
            não se qualifica.
          </li>
          <li>
            <strong>Atendimento só online:</strong> em geral, não se encaixa.
            Aqui, quem trabalha para você ser encontrado é o{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site
            </Link>{" "}
            e o conteúdo.
          </li>
        </ul>
        <p>
          Um detalhe importante: o Google pede um único perfil por profissional,
          e não um perfil para cada especialidade.
        </p>
      </section>

      <section>
        <h2>Nome: o seu nome real, sem palavra-chave</h2>
        <p>
          É o erro mais comum. As diretrizes pedem que o nome reflita o nome
          real, o mesmo usado na placa, no site e na papelaria. Colocar serviço,
          cidade ou slogan no nome (“Psicóloga Ana Souza — TEA e TDAH Zona Sul”)
          é proibido e pode levar à suspensão do perfil.
        </p>
        <p>
          O Google aceita título profissional no nome de profissionais liberais.
          Então “Psicóloga Ana Souza” funciona, desde que seja assim que você se
          apresenta em todo lugar. Se o consultório tem nome fantasia, use-o
          apenas se ele já estiver na fachada e nos seus materiais. Escrevemos
          sobre essa escolha em{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Endereço, categoria e horário</h2>
        <ul>
          <li>
            <strong>Endereço exato</strong>, com número da sala ou do andar na
            segunda linha. Nada de palavra-chave no campo de endereço.
          </li>
          <li>
            <strong>Categoria:</strong> o Google pede o menor número possível de
            categorias para descrever o negócio principal. Escolha a que
            corresponde à sua atividade, como “Psicólogo”. Cuidado com
            categorias de outras profissões: elas sugerem um serviço que você
            não presta.
          </li>
          <li>
            <strong>Horário:</strong> o real. O perfil supõe que você pode ser
            encontrado no endereço nos horários informados.
          </li>
          <li>
            <strong>Telefone e site</strong> iguais aos do seu site e do
            Instagram. Dados que batem em todos os lugares ajudam o Google a
            confiar nas informações.
          </li>
        </ul>
      </section>

      <section>
        <h2>Descrição: o que pode e o que não pode</h2>
        <p>
          A descrição é o espaço para dizer para quem você atende e como. Ela
          tem dois filtros:
        </p>
        <ul>
          <li>
            <strong>O do Google:</strong> sem links, sem preços, sem ofertas ou
            promoções, sem erros de digitação.
          </li>
          <li>
            <strong>O do Código de Ética:</strong> o{" "}
            <a href={CODIGO} {...ext}>
              artigo 20
            </a>{" "}
            pede nome completo e CRP em toda divulgação, e veda preço como
            propaganda, previsão taxativa de resultado e autopromoção em
            detrimento de colegas. Então nada de “a melhor psicóloga da região”
            nem “resultados em poucas sessões”. Veja também{" "}
            <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
              psicólogo pode divulgar preço?
            </Link>
          </li>
        </ul>
        <p>Um exemplo de estrutura que respeita os dois:</p>
        <p>
          <em>
            “Psicóloga Ana Souza, CRP 00/00000 (exemplo). Atendo crianças e
            adolescentes, com foco em autismo e outras neurodivergências, e
            oriento pais e responsáveis. Atendimento presencial em [bairro] e
            online. Formação em [abordagem/curso que você tem].”
          </em>
        </p>
        <p>
          Se você atende famílias de crianças autistas, diga isso com clareza.
          É o tipo de informação que ajuda a pessoa certa a se reconhecer, como
          explicamos em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Fotos</h2>
        <p>
          Fachada, recepção, a sala vazia, a placa com o seu nome, você em um
          retrato profissional. As mesmas regras de imagem do Instagram valem
          aqui: nada de foto de sessão, de paciente, de criança atendida ou de
          material produzido em atendimento. Uma sala de atendimento infantil
          vazia, bem fotografada, mostra o espaço sem expor ninguém.
        </p>
      </section>

      <section>
        <h2>Avaliações: o ponto mais delicado</h2>
        <p>
          Em outros negócios, pedir avaliações é a primeira dica de todo guia.
          Na psicologia, não. Uma avaliação no Google mostra publicamente que
          aquela pessoa faz terapia, e funciona como depoimento. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          não recomenda depoimentos quando o objetivo é promover o profissional,
          mesmo com autorização. Tratamos disso em{" "}
          <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
            psicólogo pode postar depoimento de paciente?
          </Link>
        </p>
        <p>Na prática:</p>
        <ul>
          <li>
            <strong>Não peça avaliações a pacientes</strong> nem a familiares de
            pacientes.
          </li>
          <li>
            <strong>Se alguém avaliar por conta própria</strong>, a resposta não
            pode confirmar que a pessoa é paciente nem citar nada do
            atendimento. Um agradecimento genérico, ou nenhuma resposta, é mais
            seguro.
          </li>
          <li>
            <strong>Avaliação negativa:</strong> a mesma regra. Não explique o
            caso, não discuta em público. Se a avaliação for falsa ou violar as
            políticas do Google, use a opção de denunciar.
          </li>
        </ul>
        <p>
          Em caso de dúvida sobre uma situação específica, o caminho é a
          orientação do seu Conselho Regional.
        </p>
      </section>

      <section>
        <h2>Checklist rápido</h2>
        <ul>
          <li>Você atende em um endereço físico, com horário real?</li>
          <li>Nome do perfil é o seu nome real, sem cidade, serviço ou slogan?</li>
          <li>Uma categoria principal que corresponde à sua atividade?</li>
          <li>Descrição com nome completo e CRP, sem preço, promoção ou promessa?</li>
          <li>Telefone e site iguais aos do resto da sua presença on-line?</li>
          <li>Fotos do espaço, sem pacientes nem atendimento?</li>
          <li>Nenhum pedido de avaliação a pacientes?</li>
        </ul>
      </section>

      <section>
        <h2>O perfil é uma vitrine da marca</h2>
        <p>
          Nome, fotos e descrição no Google são, muitas vezes, o primeiro
          contato de alguém com o consultório. Quando eles saem da mesma
          estratégia que orienta o site, o Instagram e a placa da porta, a
          pessoa reconhece o mesmo consultório em todo lugar. É disso que
          falamos em{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>
          .
        </p>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
          sobre como o seu consultório aparece no Google, o primeiro passo é uma
          conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Google.{" "}
            <a href={DIRETRIZES} {...ext}>
              Diretrizes para representar sua empresa no Google
            </a>{" "}
            (Ajuda do Perfil da Empresa no Google).
          </li>
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
            , edição de 2026.
          </li>
        </ul>
      </section>
    </>
  )
};
