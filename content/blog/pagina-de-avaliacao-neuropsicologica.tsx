import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/documentos/nota-tecnica-sobre-uso-profissional-das-redes-sociais-publicidade-e-cuidados-eticos";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const RES11 = "https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf";

export const post: Post = {
  slug: "pagina-de-avaliacao-neuropsicologica",
  title: "Avaliação neuropsicológica infantil: como apresentar o serviço no site do consultório",
  description:
    "Como descrever a avaliação neuropsicológica infantil no site: o que explicar às famílias, o que não prometer e o que o artigo 20 pede.",
  keyword: "avaliação neuropsicológica infantil site",
  tags: ["presenca-digital", "neurodivergencia"],
  publishedAt: "2026-11-12",
  summary:
    "A página de avaliação neuropsicológica infantil deve explicar, em linguagem simples, o que é a avaliação, como ela acontece e o que a família recebe no fim, sem prometer diagnóstico nem resultado. O artigo 20 do Código de Ética exige nome, CRP e só qualificações que você possui, e veda previsão taxativa de resultados e preço como propaganda.",
  faq: [
    {
      q: "A página pode dizer que a avaliação confirma ou descarta autismo e TDAH?",
      a: "Evite. O site pode explicar que a avaliação investiga funções como atenção, linguagem e memória e que o resultado depende de cada criança. Prometer um diagnóstico específico é uma previsão de resultado, vedada pelo artigo 20."
    },
    {
      q: "Posso colocar o preço da avaliação na página?",
      a: "O artigo 20 veda usar o preço como forma de propaganda. Informe o valor a quem pergunta, no contato direto, e use a página para explicar o processo."
    },
    {
      q: "Preciso citar minha formação na página?",
      a: "Cite apenas títulos e qualificações que você possui, como especialização ou título de especialista registrado, e informe nome completo e CRP."
    },
    {
      q: "Posso mostrar testes e materiais usados na avaliação?",
      a: "Não é recomendável. Materiais de avaliação têm uso restrito e não devem ser expostos publicamente. Descreva a etapa em palavras, sem fotos do material."
    }
  ],
  cover: {
    src: "/blog/pagina-de-avaliacao-neuropsicologica/pagina-de-avaliacao-neuropsicologica-mesa-de-trabalho.jpg",
    alt: "Notebook, caderno e um vaso de planta sobre uma mesa clara, espaço de trabalho organizado",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Quando pais procuram uma avaliação neuropsicológica para o filho, quase
        sempre estão aflitos e cheios de dúvidas: o que acontece na sala, quanto
        tempo leva, o que vão receber no fim. A página de avaliação do site é o
        lugar de responder isso com calma, sem prometer o que a profissão não
        pode prometer.
      </p>

      <section>
        <h2>O que a família quer saber antes de entrar em contato</h2>
        <ul>
          <li>Para quem é a avaliação (faixa etária, tipo de queixa, encaminhamentos).</li>
          <li>Como ela funciona: entrevista com os pais, sessões com a criança, devolutiva.</li>
          <li>Quantas etapas existem e como a família é orientada a se preparar.</li>
          <li>O que é entregue ao final: relatório, conversa de devolutiva, orientações.</li>
          <li>Como falar com a escola e outros profissionais sobre o resultado.</li>
        </ul>
        <p>
          Responder isso de forma objetiva reduz a ansiedade e filtra quem
          realmente precisa do serviço, antes de qualquer mensagem.
        </p>
      </section>

      <section>
        <h2>Estrutura de uma boa página de avaliação</h2>
        <ol>
          <li><strong>Título claro:</strong> o nome do serviço e o público, por exemplo “Avaliação neuropsicológica infantil”.</li>
          <li><strong>O que é:</strong> uma explicação curta e sem jargão do que a avaliação investiga.</li>
          <li><strong>Como acontece:</strong> as etapas, em ordem.</li>
          <li><strong>O que a família recebe:</strong> a devolutiva e o documento.</li>
          <li><strong>Quem faz:</strong> nome completo, CRP e as qualificações que você possui.</li>
          <li><strong>Perguntas frequentes:</strong> respostas curtas para as dúvidas mais comuns.</li>
          <li><strong>Contato:</strong> um único caminho claro, como o WhatsApp do consultório.</li>
        </ol>
        <p>
          Para o site em geral, veja{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>O que o artigo 20 limita nessa página</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          determina que o psicólogo informe nome completo, CRP e número de
          registro, cite apenas títulos e qualificações que possua, divulgue só
          técnicas e práticas psicológicas reconhecidas, e não use o preço como
          propaganda nem faça previsão taxativa de resultados. Na prática:
        </p>
        <ul>
          <li>nada de “descubra se seu filho tem autismo” ou “diagnóstico em X dias”;</li>
          <li>nada de valor, desconto ou pacote em destaque;</li>
          <li>nada de “a melhor avaliação da região” ou outro superlativo sem prova;</li>
          <li>nada de foto de criança em atendimento nem de material de testagem.</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          traz exemplos do que costuma ser apontado como infração.
        </p>
      </section>

      <section>
        <h2>Linguagem para famílias neurodivergentes</h2>
        <p>
          Se a avaliação atende crianças com suspeita de autismo ou TDAH, a
          escolha das palavras importa. Evite descrever a criança como problema
          e prefira falar em compreender como ela aprende e quais apoios ajudam.
          Veja o artigo sobre{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Sigilo e dados da família</h2>
        <p>
          Formulários de contato coletam dados de crianças e responsáveis. A{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados
          </a>{" "}
          trata dados de saúde como dados sensíveis. Peça apenas o necessário no
          primeiro contato, deixe os detalhes clínicos para a conversa com a
          família e tenha uma política de privacidade no site.
        </p>
      </section>

      <section>
        <h2>Como a página ajuda a ser encontrada</h2>
        <p>
          Use o termo que os pais procuram no título e no primeiro parágrafo,
          escreva a cidade ou a modalidade de atendimento quando for relevante e
          mantenha o perfil do{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio
          </Link>{" "}
          apontando para a página. O guia de SEO do Google recomenda títulos
          descritivos e conteúdo útil para as pessoas, não para o buscador.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
          sobre a sua marca, o primeiro passo é uma conversa de 15 minutos.
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
            CRP-MG.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional
            </a>
            , abril de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 (LGPD)
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br" {...ext}>
              Guia de otimização para mecanismos de busca (SEO)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
