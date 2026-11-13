import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CFP_PLANOS = "https://site.cfp.org.br/fale-conosco/fiscalizacao/fiscalizacao-de-planos-de-saude/";
const CDC = "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm";
const LEI_PLANOS = "https://www.planalto.gov.br/ccivil_03/leis/l9656.htm";

export const post: Post = {
  slug: "psicologo-divulgar-convenio",
  title: "Psicólogo pode divulgar convênio e plano de saúde? O que a Nota Técnica permite",
  description:
    "Psicólogo pode divulgar que atende convênio ou plano de saúde? A Nota Técnica CFP 01/2022 permite divulgar convênios, sem usar preço como chamariz.",
  keyword: "psicólogo pode divulgar convênio",
  tags: ["divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "Pode. A Nota Técnica CFP nº 1/2022 diz que a divulgação de convênios com instituições, universidades, faculdades e clínicas é permitida, e a cartilha do CRP-MG acrescenta a condição: sem usar o preço como forma de propaganda. Informar que você atende por determinados planos de saúde é informação útil para o paciente; o que não pode é transformar isso em chamariz de valor, como “sessão pelo preço da coparticipação”.",
  faq: [
    {
      q: "Posso colocar no Instagram que atendo por plano de saúde?",
      a: "Pode informar, de forma sóbria, os convênios que você atende, com nome completo ou nome social e CRP no perfil. A Nota Técnica CFP nº 1/2022 permite divulgar convênios. Evite frases que destacam o custo, como “terapia sem pagar nada pelo plano”."
    },
    {
      q: "Posso usar o logotipo do plano de saúde no meu site?",
      a: "As normas do CFP não tratam disso. O logotipo é marca da operadora, então confira no seu contrato de credenciamento se o uso é permitido e em que forma. Na dúvida, escreva só o nome do plano em texto."
    },
    {
      q: "Posso divulgar reembolso do plano de saúde?",
      a: "Pode explicar que emite recibo ou nota para o paciente pedir reembolso à operadora, como informação de funcionamento. Não prometa valor ou percentual de reembolso: quem define é o contrato do paciente com o plano, e a promessa vira uso do preço como propaganda."
    },
    {
      q: "Convênio com empresa ou escola também pode ser divulgado?",
      a: "Sim. A Nota Técnica cita convênios com instituições, universidades, faculdades e clínicas. A cartilha do CRP-MG faz a mesma ressalva: a divulgação não pode usar o preço como forma de propaganda, nem falar em desconto para os conveniados."
    }
  ],
  cover: {
    src: "/blog/psicologo-divulgar-convenio/psicologo-divulgar-convenio-recepcao-vazia.jpg",
    alt: "Balcão de recepção de madeira clara vazio, com uma planta em vaso ao lado, em ambiente de consultório",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Para muitas famílias, a primeira pergunta ao procurar uma psicóloga é
        “atende pelo meu plano?”. Se essa informação não aparece no site ou
        no perfil, a pessoa liga, manda mensagem ou desiste. Ao mesmo tempo,
        muitas psicólogas evitam falar do convênio por medo de estar
        divulgando preço. A resposta curta é que divulgar convênio é
        permitido. O cuidado está em como.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            art. 20, alínea d, do Código de Ética
          </a>{" "}
          proíbe usar o preço do serviço como forma de propaganda. Ao detalhar
          essa regra, a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          diz, no item sobre preço e trabalho voluntário: “a divulgação de
          convênios com instituições, universidades, faculdades, clínicas é
          permitida”.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          repete a autorização e põe a condição: é possível a divulgação
          individual de convênios e parcerias com instituições, universidades,
          faculdades e clínicas, “desde que não se use o preço como forma de
          propaganda”.
        </p>
        <p>
          As duas normas não citam planos de saúde pelo nome. Credenciamento
          em operadora é uma relação contratual que o próprio{" "}
          <a href={CFP_PLANOS} {...ext}>
            CFP diz não ter como fiscalizar
          </a>
          ; quem regula os planos é a ANS, com base na{" "}
          <a href={LEI_PLANOS} {...ext}>
            Lei nº 9.656/1998
          </a>
          . A leitura mais segura é tratar o plano como qualquer convênio:
          informar que atende, sem fazer do custo o argumento. Em caso
          concreto, consulte a orientação do seu CRP.
        </p>
      </section>

      <section>
        <h2>Como divulgar o convênio na prática</h2>
        <p>
          Trate o convênio como informação de funcionamento, no mesmo nível do
          endereço e do horário. Ele responde a uma dúvida; não é o motivo
          para escolher você.
        </p>
        <ol>
          <li>
            <strong>No site:</strong> uma linha na página de contato ou de
            atendimento, como “Atendo pelos planos X e Y. Para outros planos,
            emito recibo para reembolso.” Veja o que mais entra num{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site profissional para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>No Google:</strong> o Perfil da Empresa tem campos de
            descrição e de perguntas; responda ali, sem repetir em cada post.
            O artigo sobre{" "}
            <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
              Google Meu Negócio para psicólogo
            </Link>{" "}
            mostra onde.
          </li>
          <li>
            <strong>No WhatsApp:</strong> uma resposta rápida pronta para
            “atende convênio?”. O texto sobre{" "}
            <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
              WhatsApp Business para psicólogo
            </Link>{" "}
            ajuda a montar as mensagens.
          </li>
          <li>
            <strong>No Instagram:</strong> nos destaques ou numa publicação
            fixa de “como funciona o atendimento”, não como chamada principal
            da bio.
          </li>
        </ol>
        <p>
          <strong>Erro comum:</strong> abrir a bio com “Atendo os planos X, Y
          e Z” antes de dizer quem você é e quem atende. A informação é útil,
          mas não é posicionamento.
        </p>
      </section>

      <section>
        <h2>Onde a divulgação do convênio vira preço como chamariz</h2>
        <p>
          O limite aparece quando a frase deixa de informar e passa a vender
          pelo custo. A cartilha do CRP-MG inclui na vedação qualquer
          referência à gratuidade, descontos, promoções, pacotes, cupons e
          “preço social”.
        </p>
        <ul>
          <li>“Terapia sem gastar nada: use seu plano” destaca a gratuidade.</li>
          <li>“Sessão pelo valor da coparticipação” transforma o custo em argumento.</li>
          <li>“Reembolso de até 80%” promete um valor que depende do contrato do paciente.</li>
          <li>“Desconto para funcionários da empresa conveniada” é desconto como propaganda.</li>
        </ul>
        <p>
          O texto sobre{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>{" "}
          explica a regra geral e a exceção do atendimento vendido só pela
          internet.
        </p>
      </section>

      <section>
        <h2>Convênio: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Divulgação de convênio por psicóloga: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Divulgação de convênio por psicóloga: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Frase</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>“Atendo pelos planos X e Y”</td><td>Sim</td></tr>
              <tr><td>“Emito recibo para reembolso do seu plano”</td><td>Sim</td></tr>
              <tr><td>“Psicóloga conveniada à Universidade Z”</td><td>Sim, se for verdade</td></tr>
              <tr><td>“Terapia sem custo pelo plano”</td><td>Não (gratuidade)</td></tr>
              <tr><td>“Reembolso garantido de 80%”</td><td>Não (preço e promessa)</td></tr>
              <tr><td>“20% de desconto para conveniados”</td><td>Não (desconto)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Clínica com CNPJ e vários profissionais</h2>
        <p>
          Na clínica, o convênio costuma ser da pessoa jurídica, mas a
          publicidade continua com o art. 20. Informe quais profissionais
          atendem por quais planos, para não criar expectativa errada, e
          mantenha nome e CRP de cada psicóloga citada. O texto sobre{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            CNPJ e nome fantasia
          </Link>{" "}
          trata da identificação da PJ, e o de{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            clínica multidisciplinar de autismo
          </Link>{" "}
          mostra como organizar uma marca com várias profissões.
        </p>
      </section>

      <section>
        <h2>Para quem já divulga convênios: mantenha a lista verdadeira</h2>
        <p>
          O risco mais frequente não é a frase, é a informação desatualizada.
          Se você deixou de atender por um plano e o site, o Google e os
          destaques continuam dizendo que atende, a pessoa chega esperando
          uma condição que não existe. O{" "}
          <a href={CDC} {...ext}>
            Código de Defesa do Consumidor
          </a>{" "}
          proíbe
          publicidade enganosa, e a Nota Técnica retoma essa regra para a
          psicologia.
        </p>
        <p>
          Faça uma revisão a cada mudança de credenciamento: site, Perfil da
          Empresa no Google, resposta rápida do WhatsApp, destaques do
          Instagram e material impresso. Se um plano está em negociação,
          não anuncie antes de o contrato valer.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Famílias de crianças autistas costumam ter várias terapias ao mesmo
          tempo, e o plano de saúde pesa na decisão. Por isso a informação
          sobre convênio precisa ser clara e honesta:
        </p>
        <ul>
          <li>
            Diga para quais serviços o convênio vale. Se a avaliação é
            particular e a psicoterapia é pelo plano, escreva isso.
          </li>
          <li>
            Não prometa cobertura nem número de sessões. Quem define é o
            contrato da família com a operadora.
          </li>
          <li>
            Explique como funciona o pedido de reembolso, sem estimar valores.
          </li>
          <li>
            Mantenha o centro da comunicação no seu trabalho com as famílias,
            não no custo.
          </li>
        </ul>
        <p>
          Para atrair as famílias certas sem depender do convênio, veja{" "}
          <Link href="/blog/como-conseguir-pacientes-psicologo" className="inst-link">
            como conseguir pacientes como psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Esconder que atende convênio por medo de “divulgar preço”.</li>
          <li>Abrir a bio e os anúncios pelo convênio, não pelo trabalho.</li>
          <li>Falar em “sem custo”, “grátis pelo plano” ou percentual de reembolso.</li>
          <li>Usar o logotipo da operadora sem conferir o contrato.</li>
          <li>Oferecer desconto a funcionários de empresa conveniada na divulgação.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist</h2>
        <ul>
          <li>Lista dos convênios atualizada no site e no Google.</li>
          <li>Frase informativa, sem gratuidade, desconto ou valor.</li>
          <li>Serviços cobertos e não cobertos explicados.</li>
          <li>Nome completo ou nome social e CRP junto da informação.</li>
          <li>Uso de marca da operadora conferido no contrato.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe cria marcas para consultórios de psicologia em que
          informações como convênio, endereço e formas de atendimento ficam
          fáceis de achar, sem disputar espaço com o posicionamento. São dois
          encontros de imersão e a marca é entregue em até 30 dias, com site e peças
          revisados pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser conversar, marque 15 minutos.
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
            , art. 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={CFP_PLANOS} {...ext}>
              Fiscalização de planos de saúde
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={CDC} {...ext}>
              Lei nº 8.078/1990 — Código de Defesa do Consumidor
            </a>
            , art. 37.
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_PLANOS} {...ext}>
              Lei nº 9.656/1998 — planos e seguros privados de assistência à saúde
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
