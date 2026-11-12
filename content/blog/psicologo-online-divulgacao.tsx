import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const CRPSP =
  "https://www.crpsp.org/noticia/view/3251/resolucao-do-cfp-que-disciplina-uso-de-tecnologias-digitais-no-exercicio-da-psicologia-ja-esta-em-vigor-plataforma-e-psi-sera-encerrada";
const CRPMG_TDIC =
  "https://crp04.org.br/nova-resolucao-do-cfp-define-regras-para-prestacao-de-servicos-psicologicos-via-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics/";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "psicologo-online-divulgacao",
  title: "Psicólogo online: como divulgar o atendimento depois da Resolução CFP 9/2024",
  description:
    "O que mudou para o psicólogo online com a Resolução CFP 9/2024 (fim do e-Psi), o que a divulgação precisa trazer e como apresentar o atendimento a distância.",
  keyword: "psicólogo online divulgação",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-12",
  summary:
    "Desde a Resolução CFP nº 9/2024, que substituiu a Resolução 11/2018, não existe mais o cadastro no e-Psi para atender online, e quem atende por tecnologia digital não precisa de inscrição secundária no estado da pessoa atendida. A divulgação segue as mesmas regras de sempre: nome completo, titulação e CRP, sem promessa nem preço como chamariz. Explique com clareza como o atendimento online funciona, que plataforma você usa e como os dados são protegidos.",
  faq: [
    {
      q: "Ainda preciso do cadastro no e-Psi para atender online?",
      a: "Não. Segundo o CRP SP e o CRP-MG, a Resolução CFP nº 9/2024 descartou a exigência de cadastro na plataforma e-Psi para atendimentos online. A inscrição ativa no CRP continua obrigatória."
    },
    {
      q: "Posso atender online pessoas de outros estados?",
      a: "Pode. A resolução dispensa a inscrição secundária no estado onde a pessoa atendida reside quando o atendimento é feito por tecnologias digitais. O foro ético continua sendo o seu Conselho Regional."
    },
    {
      q: "Preciso mostrar o preço se atendo só online?",
      a: "A cartilha do CRP-MG explica que, pelo Código de Defesa do Consumidor, o valor deve ser informado quando o serviço é contratado exclusivamente por uma plataforma online. Mesmo assim, o preço não pode ser o destaque da publicidade nem chamariz."
    },
    {
      q: "Atendimento online de crianças é permitido?",
      a: "A resolução deixa a avaliação da viabilidade de cada serviço com a psicóloga, considerando as características das pessoas atendidas e os riscos. Com crianças, isso costuma envolver os responsáveis e formatos como a orientação parental. Em caso de dúvida, consulte o seu CRP."
    }
  ],
  cover: {
    src: "/blog/psicologo-online-divulgacao/psicologo-online-divulgacao-notebook-e-fones.jpg",
    alt: "Notebook, fones de ouvido brancos, bloco de notas e café sobre uma mesa de madeira, estação de atendimento online",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muita informação sobre atendimento online na internet ainda fala do
        e-Psi e da Resolução CFP nº 11/2018, que não valem mais. Antes de
        ajustar a bio ou o site, vale entender o que mudou e o que continua
        igual na divulgação.
      </p>

      <section>
        <h2>O que mudou com a Resolução CFP nº 9/2024</h2>
        <p>
          A{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          regulamenta o exercício da Psicologia mediado por tecnologias digitais
          da informação e da comunicação (TDICs) e revogou as Resoluções nº
          11/2018 e nº 4/2020. Segundo o{" "}
          <a href={CRPSP} {...ext}>
            CRP SP
          </a>{" "}
          e o{" "}
          <a href={CRPMG_TDIC} {...ext}>
            CRP-MG
          </a>
          :
        </p>
        <ul>
          <li>a exigência de cadastro no e-Psi para atender online foi descartada;</li>
          <li>quem atende por TDIC fica dispensado de inscrição secundária no estado da pessoa atendida;</li>
          <li>cabe à psicóloga avaliar se o serviço é viável a distância, considerando a tecnologia, as pessoas atendidas e os riscos;</li>
          <li>os recursos tecnológicos usados devem constar no contrato;</li>
          <li>o cuidado com dados sensíveis e o sigilo continuam, com a <a href={LGPD} {...ext}>LGPD</a>.</li>
        </ul>
        <p>
          Se o seu site ou perfil ainda diz “cadastrada no e-Psi”, é hora de
          atualizar.
        </p>
      </section>

      <section>
        <h2>O que não mudou: as regras da divulgação</h2>
        <p>
          A divulgação de quem atende online segue o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          e a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>
          : nome completo, titulação e CRP; nada de previsão de resultado,
          sensacionalismo ou preço como propaganda. A Nota Técnica lembra que,
          mesmo em plataformas coletivas de atendimento, a responsabilidade pelo
          conteúdo da divulgação continua sendo da psicóloga.
        </p>
        <p>
          Sobre valores, a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          explica que, quando o serviço é contratado exclusivamente por uma
          plataforma online, o Código de Defesa do Consumidor pede que o valor e
          as condições sejam informados, sem que o preço seja o destaque. Mais em{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>
        </p>
      </section>

      <section>
        <h2>Como apresentar o atendimento online</h2>
        <ol>
          <li><strong>Diga para quem é.</strong> Público, abordagem, faixa etária.</li>
          <li><strong>Explique o formato.</strong> Vídeo, duração, como receber o link, o que fazer se a conexão cair.</li>
          <li><strong>Fale de privacidade.</strong> Que plataforma você usa e por quê, e o que a pessoa pode fazer do lado dela (lugar reservado, fone).</li>
          <li><strong>Informe o fuso e os horários</strong>, se atende pessoas de outros estados ou do exterior.</li>
          <li><strong>Mostre o primeiro passo.</strong> Como agendar e o que acontece depois da mensagem.</li>
        </ol>
        <div className="inst-blog__table" role="region" aria-label="Divulgação de atendimento online: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Divulgação de atendimento online: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Frase</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>“Atendimento online para adultos em todo o Brasil”</td><td>Sim</td></tr>
              <tr><td>“Sessões por vídeo em plataforma com criptografia”</td><td>Sim, se for verdade</td></tr>
              <tr><td>“Cadastrada no e-Psi”</td><td>Desatualizado</td></tr>
              <tr><td>“Terapia online mais barata que presencial”</td><td>Não (preço como chamariz)</td></tr>
              <tr><td>“Resolva sua ansiedade sem sair de casa”</td><td>Não (promessa)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Manter textos e selos do e-Psi e da Resolução 11/2018.</li>
          <li>Vender o online como “mais prático e barato” em vez de explicar como funciona.</li>
          <li>Não dizer em que plataforma é feito o atendimento.</li>
          <li>Coletar dados em formulário sem explicar o uso.</li>
          <li>Esquecer o CRP porque o atendimento é “no Brasil todo”.</li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          O online costuma funcionar bem para a orientação aos pais e para
          famílias longe de grandes centros, e pode ser mais difícil para
          algumas crianças. Na divulgação, deixe claro quais serviços você faz a
          distância e quais só presencialmente, e explique como os responsáveis
          participam. Veja{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental: como divulgar
          </Link>{" "}
          e, para o primeiro contato,{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Checklist</h2>
        <ul>
          <li>Retirar menções ao e-Psi e à Resolução 11/2018.</li>
          <li>Nome completo, titulação e CRP em toda divulgação.</li>
          <li>Página ou destaque explicando como funciona o online.</li>
          <li>Plataforma e cuidados de privacidade descritos.</li>
          <li>Recursos tecnológicos no contrato.</li>
          <li>Serviços online e presenciais separados com clareza.</li>
          <li>Preço só onde o CDC exige, nunca como destaque.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca e o site de consultórios que atendem
          presencialmente e online: posicionamento, identidade visual e verbal em
          dois dias de imersão, no ar em 45 dias, dentro do artigo 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>
          . O primeiro passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024 — exercício profissional mediado por TDICs
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={CRPSP} {...ext}>
              Resolução do CFP que disciplina uso de tecnologias digitais já está em vigor; plataforma e-Psi será encerrada
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CRPMG_TDIC} {...ext}>
              Nova resolução do CFP define regras para serviços psicológicos via TDICs
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
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
