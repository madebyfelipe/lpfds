import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA =
  "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";

export const post: Post = {
  slug: "decoracao-consultorio-psicologia-infantil",
  title: "Decoração de consultório de psicologia infantil: sala acolhedora e sensorialmente calma",
  description:
    "Como pensar a decoração de um consultório de psicologia infantil: estímulo na medida, sigilo na recepção, acessibilidade e fotos do espaço sem expor crianças.",
  keyword: "decoração de consultório de psicologia infantil",
  tags: ["identidade-visual", "neurodivergencia"],
  publishedAt: "2026-11-12",
  summary:
    "A decoração de um consultório infantil funciona melhor quando acolhe sem estimular demais: poucos elementos, tons calmos, materiais organizados ao alcance e uma entrada que proteja o sigilo. Para crianças autistas e neurodivergentes, vale reduzir ruído visual e sonoro e conversar com as famílias. Fotos do espaço podem ser divulgadas, desde que sem crianças, sem sessões e sem material de atendimento.",
  faq: [
    {
      q: "Consultório infantil precisa ser colorido e cheio de brinquedos?",
      a: "Não. Muito estímulo pode cansar algumas crianças, em especial as com sensibilidade sensorial. Prefira poucos elementos bem escolhidos, organizados em prateleiras ou caixas, e deixe o material de uso diário ao alcance da criança."
    },
    {
      q: "Posso postar fotos do consultório no Instagram?",
      a: "Pode, desde que sem pessoas atendidas, sem sessão em andamento e sem material produzido em atendimento. Fotografe o espaço vazio, a porta, a mesa, os livros."
    },
    {
      q: "Como proteger o sigilo na sala de espera?",
      a: "Organize os horários para reduzir o encontro entre famílias, deixe a conversa clínica para dentro da sala, use fones ou ruído leve se a acústica deixar passar a conversa e evite expor agenda ou nomes à vista."
    },
    {
      q: "Preciso me preocupar com acessibilidade?",
      a: "Sim. Pense em entrada sem degraus, circulação livre, sinalização clara e banheiro acessível, e informe no site e no perfil do Google como é o acesso. Essa informação ajuda as famílias a decidir."
    }
  ],
  cover: {
    src: "/blog/decoracao-consultorio-psicologia-infantil/decoracao-consultorio-psicologia-infantil-poltrona-verde-e-plantas.jpg",
    alt: "Poltrona verde, plantas e prateleiras em uma sala de paredes claras, sem pessoas",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Para uma criança, a sala é a primeira parte da terapia. Para os pais, é a
        prova de que aquele espaço foi pensado para ela. A decoração de um
        consultório de psicologia infantil, porém, pede mais critério do que
        brinquedos e paredes coloridas: pede decidir quanto estímulo o ambiente
        oferece, como o sigilo é protegido e o que da sala pode virar divulgação.
      </p>

      <section>
        <h2>Estímulo na medida</h2>
        <p>
          Uma sala cheia de cores, brinquedos à vista e barulho pode funcionar
          para uma criança e sobrecarregar outra. Para crianças autistas e
          neurodivergentes, que podem ter sensibilidade sensorial, a regra
          prática é reduzir o ruído do ambiente e oferecer escolhas:
        </p>
        <ul>
          <li>tons calmos nas paredes e cores vivas só em objetos pontuais;</li>
          <li>brinquedos e materiais guardados, trazidos conforme a sessão;</li>
          <li>luz suave, com a possibilidade de baixar a intensidade;</li>
          <li>um canto mais reservado, onde a criança possa se afastar;</li>
          <li>cheiros e sons discretos.</li>
        </ul>
        <p>
          A resposta varia de criança para criança; a conversa com a família,
          antes do primeiro encontro, diz mais do que qualquer regra geral.
        </p>
      </section>

      <section>
        <h2>A paleta e a marca</h2>
        <p>
          As cores da sala podem conversar com as da identidade visual do
          consultório, em doses pequenas. Detalhes em{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          e em{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Sigilo começa na entrada</h2>
        <p>
          O sigilo é dever do psicólogo, previsto no{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          , e o espaço físico faz parte dele. Pense no caminho da família:
        </p>
        <ul>
          <li>horários espaçados para evitar o encontro de famílias na entrada;</li>
          <li>sala de espera sem agenda, prontuário ou nomes à vista;</li>
          <li>acústica que não deixe vazar a conversa da sala;</li>
          <li>conversas com os pais fora do alcance de outras famílias.</li>
        </ul>
      </section>

      <section>
        <h2>Acessibilidade informada</h2>
        <p>
          Entrada sem degraus, circulação livre, banheiro acessível e
          sinalização clara fazem diferença, e saber disso antes de ir também.
          Registre essas informações no{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            perfil do Google
          </Link>{" "}
          e no site.
        </p>
      </section>

      <section>
        <h2>Fotos do espaço, sem expor ninguém</h2>
        <p>
          Mostrar o consultório ajuda a família a se imaginar ali. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica nº 01/2022 do CFP
          </a>{" "}
          e o artigo 20 pedem cuidado com a exposição. Para as fotos:
        </p>
        <ul>
          <li>fotografe a sala vazia, a porta, a mesa, os livros;</li>
          <li>nada de criança atendida, sessão ou material produzido em atendimento;</li>
          <li>sem agenda, prontuário ou nome de paciente no enquadramento;</li>
          <li>você pode aparecer, com identificação e CRP no perfil.</li>
        </ul>
        <p>
          Dicas de foto estão em{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A decoração do
          espaço físico é do consultório; a identidade visual é o fio que liga a
          sala ao site e às redes. Se quiser conversar sobre a sua marca, o
          primeiro passo é uma conversa de 15 minutos.
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
            , arts. 9º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica nº 01/2022 — Uso Profissional das Redes Sociais: Publicidade e Cuidados Éticos
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
