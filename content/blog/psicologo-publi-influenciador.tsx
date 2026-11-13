import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const RES11 = "https://site.cfp.org.br/wp-content/uploads/2000/12/resolucao2000_11.pdf";
const CDC = "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm";
const CONAR = "http://www.conar.org.br/";

export const post: Post = {
  slug: "psicologo-publi-influenciador",
  title: "Psicólogo pode fazer publi ou parceria com influenciador? O que o Código de Ética diz",
  description:
    "Psicólogo pode fazer publi de marca ou contratar influenciador? Os limites dos arts. 2º, 19 e 20, o que o CDC exige da publicidade e quando dizer não.",
  keyword: "psicólogo pode fazer publi",
  tags: ["divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "Não há norma do CFP que proíba a psicóloga de fazer publicidade paga nas redes, mas o título de psicóloga não pode servir para endossar produto sem base científica (art. 2º, f, e art. 19) nem para prometer resultado (art. 20). Toda publi precisa ser identificada como publicidade, como exige o Código de Defesa do Consumidor. Já contratar influenciador para divulgar seu consultório só cabe sem depoimento de paciente, sem promessa e com seu nome completo e CRP.",
  faq: [
    {
      q: "Psicóloga pode fazer publi no Instagram?",
      a: "Nenhuma norma do CFP proíbe a publicidade paga em si. O limite é o uso do título: ao aparecer como psicóloga, a fala segue o Código de Ética. Divulgar produto sem base científica, prometer efeito psicológico ou recomendar algo como se fosse orientação profissional fere os arts. 2º, 19 e 20. Publi de produto sem relação com a Psicologia, sem usar o título como argumento e identificada como publicidade, traz menos risco."
    },
    {
      q: "Psicólogo pode indicar produto e ganhar comissão?",
      a: "É uma zona de risco. O art. 2º, alínea o, veda receber comissões ou vantagens além dos honorários contratados, e o art. 2º, alínea p, veda remuneração por encaminhamento. Indicar produto a pacientes em troca de comissão mistura atendimento e venda. Para o público geral, vale o mesmo cuidado: se a indicação parece orientação psicológica, ela leva a responsabilidade da profissão."
    },
    {
      q: "Posso contratar um influenciador para divulgar meu consultório?",
      a: "Pode, desde que a peça siga o art. 20 como se fosse sua: nome completo e CRP visíveis, nada de preço como chamariz, nada de promessa de resultado e nada de depoimento sobre a terapia. A Resolução CFP nº 3/2007 diz que as regras valem para toda publicidade, individual ou coletiva, então a responsabilidade é sua."
    },
    {
      q: "Um influenciador que é meu paciente pode falar da terapia comigo?",
      a: "Não é recomendado. A fala dele vira depoimento de paciente, que os Conselhos desaconselham, e expõe a relação terapêutica. Uma parceria comercial com quem está em atendimento também cria uma relação que pode interferir no serviço, o que o art. 2º, alínea j, veda."
    }
  ],
  cover: {
    src: "/blog/psicologo-publi-influenciador/psicologo-publi-influenciador-ring-light-e-celular.jpg",
    alt: "Celular preso em suporte no centro de um ring light, em sala vazia, equipamento de gravação para redes sociais",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Uma marca de cadernos, de suplementos ou de aplicativo de meditação manda
        mensagem: quer pagar por um post seu. Ou o contrário: você pensa em pagar
        uma influenciadora de maternidade para falar do seu consultório. Nos dois
        casos, a dúvida é a mesma. O Código de Ética deixa?
      </p>
      <p>
        A resposta curta: nenhuma norma do CFP proíbe a publicidade paga em si,
        mas o título de psicóloga não pode ser usado para endossar produto sem
        base científica nem para prometer resultado, e toda publi precisa estar
        identificada como publicidade. Contratar influenciador para divulgar seu
        trabalho cabe só sem depoimento de paciente e sem promessa. Abaixo estão
        as normas, os dois cenários e o que fazer em cada um.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          não fala em “publi”, mas tem quatro regras que se aplicam. O art. 2º,
          alínea f, veda “vincular o título de psicólogo a serviços de atendimento
          psicológico cujos procedimentos, técnicas e meios não estejam
          regulamentados ou reconhecidos pela profissão”. As alíneas o e p vedam
          receber comissões ou vantagens além dos honorários e remuneração por
          encaminhamento. O art. 19 pede que a fala em veículos de comunicação
          dissemine a base científica da profissão. E o art. 20 veda previsão
          taxativa de resultados e divulgação sensacionalista.
        </p>
        <p>
          A{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>{" "}
          proíbe, no art. 56, propor “atividades, recursos e resultados relativos
          a técnicas psicológicas que não estejam cientificamente fundamentadas”,
          e o art. 57 estende as regras “a toda forma de publicidade ou
          propaganda”. A{" "}
          <a href={RES11} {...ext}>
            Resolução CFP nº 11/2000
          </a>{" "}
          trata da oferta de produtos e serviços por psicólogos, e a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          lembra que publicidade enganosa ou abusiva também é vedada pelo{" "}
          <a href={CDC} {...ext}>
            Código de Defesa do Consumidor
          </a>
          . O art. 36 do CDC exige que a publicidade seja veiculada de forma que
          o consumidor a identifique “fácil e imediatamente” como tal. O{" "}
          <a href={CONAR} {...ext}>
            CONAR
          </a>{" "}
          mantém um guia de publicidade por influenciadores com a mesma lógica de
          identificação.
        </p>
      </section>

      <section>
        <h2>Cenário 1: uma marca quer pagar por um post seu</h2>
        <p>
          A pergunta que decide é: a marca está pagando pelo seu alcance ou pelo
          seu título? Se o argumento do post é “uma psicóloga recomenda”, você
          está emprestando a autoridade da profissão ao produto, e o Código de
          Ética passa a valer por inteiro.
        </p>
        <ol>
          <li>
            <strong>Produto sem relação com saúde mental</strong> (um caderno, uma
            cadeira, um curso de idiomas): menor risco, desde que você não use o
            título como argumento nem diga que o produto “faz bem para a mente”.
          </li>
          <li>
            <strong>Produto que promete efeito psicológico</strong> (suplemento
            para ansiedade, aplicativo que “trata” insônia, brinquedo que
            “desenvolve” a criança autista): alto risco. Recomendar com o título
            de psicóloga é endossar um resultado que você não pode garantir e
            que muitas vezes não tem base científica.
          </li>
          <li>
            <strong>Serviço que concorre com a Psicologia</strong> (plataforma de
            “terapia” sem psicólogos, coaching que promete cura): fere o art. 2º,
            f, e pode configurar conivência com exercício irregular.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia recebe proposta de
          uma marca de suplemento “para foco em crianças com TDAH”. Ela recusa: o
          post associaria o título dela a um efeito terapêutico de um produto
          que ela não avaliou. Meses depois, aceita a publi de uma papelaria,
          identificada como publicidade e sem mencionar a profissão como motivo
          da escolha.
        </p>
        <p>
          <strong>Erro comum:</strong> esconder a publi como “dica sincera”. Além
          de ferir o CDC, a omissão mina a confiança de quem segue você justamente
          por ser psicóloga. Os mesmos cuidados aparecem no post sobre{" "}
          <Link href="/blog/psicologo-vender-curso-material" className="inst-link">
            quando o psicólogo vende curso ou material
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Cenário 2: você quer contratar um influenciador</h2>
        <p>
          Pagar alguém para divulgar seu consultório é publicidade sua, feita por
          outra pessoa. O art. 57 da Resolução nº 3/2007 deixa claro que a regra
          vale para toda forma de propaganda, então o que o influenciador falar
          conta como se fosse você falando.
        </p>
        <ul>
          <li>
            <strong>Identificação:</strong> seu nome completo, a palavra
            psicóloga e o CRP precisam aparecer na peça ou na legenda.
          </li>
          <li>
            <strong>Sem depoimento:</strong> o influenciador não fala da própria
            terapia com você nem de resultados. Isso seria depoimento de
            paciente, que os Conselhos desaconselham.
          </li>
          <li>
            <strong>Sem preço como chamariz:</strong> nada de “cupom para meus
            seguidores” ou “primeira sessão grátis”.
          </li>
          <li>
            <strong>Roteiro aprovado por você:</strong> combine por escrito o
            que pode ser dito e revise antes de publicar.
          </li>
          <li>
            <strong>Publi identificada:</strong> o post é marcado como
            publicidade, como exige o CDC.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia contrata uma
          criadora de conteúdo de educação para apresentar a página de orientação
          parental. O roteiro fala do serviço (“encontros com pais para organizar
          rotina e escola”), mostra o site com nome e CRP e não conta nenhuma
          história de família.
        </p>
        <p>
          <strong>Erro comum:</strong> deixar a influenciadora improvisar. Uma
          frase como “ela mudou a vida do meu filho” transforma o post em promessa
          e depoimento ao mesmo tempo. Vale ler o texto sobre{" "}
          <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
            depoimento de paciente
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Publi e parceria: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Publi e parceria com influenciador: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Publi e parceria com influenciador: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Publi de produto sem relação com saúde mental, identificada como publicidade</td><td>Com cuidado</td></tr>
              <tr><td>“Como psicóloga, recomendo este suplemento para ansiedade”</td><td>Não (endosso de resultado)</td></tr>
              <tr><td>Indicar a pacientes um produto com comissão para você</td><td>Não (art. 2º, o)</td></tr>
              <tr><td>Influenciador apresenta seu serviço com roteiro aprovado, nome e CRP</td><td>Sim</td></tr>
              <tr><td>Influenciador conta como a terapia com você ajudou</td><td>Não (depoimento)</td></tr>
              <tr><td>Cupom de desconto para os seguidores do influenciador</td><td>Não (preço como propaganda)</td></tr>
              <tr><td>Post pago sem a marcação de publicidade</td><td>Não (CDC, art. 36)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Esse é um dos nichos com mais ofertas de publi. Marcas de brinquedos
          sensoriais, suplementos, dietas, aplicativos e “métodos” procuram
          profissionais que falam com pais de crianças autistas, porque a
          recomendação de uma psicóloga pesa na decisão de compra de famílias
          cansadas e esperançosas.
        </p>
        <ul>
          <li>
            <strong>Recuse produto que promete desenvolvimento,</strong> fala,
            “redução de sintomas” ou cura. Endossar com o seu título é vincular a
            profissão a um resultado sem prova.
          </li>
          <li>
            <strong>Brinquedo ou recurso sensorial:</strong> se for falar, fale do
            uso (para que serve, quando pode ajudar a família a organizar a
            rotina), sem prometer efeito e sem foto de criança.
          </li>
          <li>
            <strong>Não use pacientes como público da publi.</strong> Divulgar um
            produto no grupo de pais que você atende mistura atendimento e venda.
          </li>
          <li>
            <strong>Parceria com influenciadora mãe atípica:</strong> combine que
            ela não exponha o filho nem fale do atendimento.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          mostra como se posicionar sem depender desse tipo de parceria.
        </p>
      </section>

      <section>
        <h2>Checklist antes de aceitar ou contratar</h2>
        <ul>
          <li>O produto ou serviço tem base científica e não promete efeito psicológico.</li>
          <li>O título de psicóloga não é o argumento de venda.</li>
          <li>O post é identificado como publicidade.</li>
          <li>Não há comissão por indicação a pacientes.</li>
          <li>Na contratação de influenciador, o roteiro foi aprovado por você.</li>
          <li>Nome completo, psicóloga e CRP aparecem na peça.</li>
          <li>Não há depoimento, promessa, preço ou cupom.</li>
          <li>Nenhuma criança ou paciente aparece.</li>
        </ul>
        <p>
          Para os outros canais pagos, como anúncios, os posts sobre{" "}
          <Link href="/blog/impulsionar-post-psicologo" className="inst-link">
            impulsionar post no Instagram
          </Link>{" "}
          e{" "}
          <Link href="/blog/google-ads-para-psicologos" className="inst-link">
            Google Ads para psicólogos
          </Link>{" "}
          seguem a mesma lógica.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a marca do consultório nasce de uma imersão de dois
          encontros que define posicionamento, tom de voz e identidade visual, com a
          marca entregue em até 30 dias e cada peça revisada pelo art. 20. Uma marca
          clara reduz a dependência de publi e de influenciadores. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se recebeu uma proposta e quer pensar nela junto, marque uma conversa
          de 15 minutos.
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
            , arts. 2º (alíneas f, j, o, p), 19 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES3} {...ext}>
              Resolução CFP nº 3/2007
            </a>
            , arts. 53 a 58.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES11} {...ext}>
              Resolução CFP nº 11/2000
            </a>{" "}
            (oferta de produtos e serviços).
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
            Brasil.{" "}
            <a href={CDC} {...ext}>
              Lei nº 8.078/1990 — Código de Defesa do Consumidor
            </a>
            , art. 36.
          </li>
          <li>
            <a href={CONAR} {...ext}>
              CONAR — Conselho Nacional de Autorregulamentação Publicitária
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
