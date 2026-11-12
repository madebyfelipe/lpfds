import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "email-profissional-para-psicologo",
  title: "E-mail profissional para psicólogo: endereço, assinatura e sigilo",
  description:
    "Como montar o e-mail profissional do psicólogo: endereço com domínio próprio, assinatura com CRP, o que enviar por e-mail e cuidados com sigilo e LGPD.",
  keyword: "e-mail profissional para psicólogo",
  tags: ["presenca-digital", "identidade-visual"],
  publishedAt: "2026-11-12",
  summary:
    "O e-mail profissional do psicólogo usa um endereço com domínio próprio (nome@seuconsultorio.com.br), uma assinatura com nome completo, psicólogo(a) e CRP e regras claras sobre o que trafega por e-mail. Por tratar de dados sensíveis, vale combinar com cada paciente o que pode ser enviado por e-mail, proteger a conta com verificação em duas etapas e não enviar conteúdo clínico por mensagem.",
  faq: [
    {
      q: "Posso usar um e-mail gratuito (Gmail, Outlook) no consultório?",
      a: "Pode, e muita gente usa. Um endereço com o domínio do consultório passa mais confiança, evita misturar vida pessoal e profissional e continua seu quando você troca de provedor. A decisão é sua; o importante é separar do e-mail pessoal."
    },
    {
      q: "O que colocar na assinatura do e-mail?",
      a: "Nome completo, psicólogo(a), CRP com número, um contato (telefone ou WhatsApp) e o site. O artigo 20 do Código de Ética pede nome completo e CRP em toda divulgação, e a assinatura é um ponto de contato."
    },
    {
      q: "Posso enviar laudo ou relatório por e-mail?",
      a: "Prefira meios com controle de entrega e acesso, e combine com o paciente ou responsável como o documento será entregue. Dados de saúde são sensíveis pela LGPD, então anexos sem proteção merecem cuidado."
    },
    {
      q: "Posso usar o e-mail para lembrete de sessão?",
      a: "Pode, desde que o paciente concorde e a mensagem diga apenas o necessário: data, horário e local, sem conteúdo clínico no assunto nem no corpo."
    }
  ],
  body: (
    <>
      <p>
        O e-mail é o canal que aparece quando uma escola pede um relatório, um
        colega manda um encaminhamento ou uma família quer um documento. Se o
        endereço é “fulana1987@...” e a assinatura está vazia, o consultório
        parece menos sério do que é. Este texto organiza o que configurar e o
        que cuidar.
      </p>

      <section>
        <h2>Endereço com o domínio do consultório</h2>
        <p>
          O formato mais comum é <em>nome@seudominio.com.br</em>, vinculado ao
          mesmo domínio do site. Ele ajuda de três maneiras:
        </p>
        <ul>
          <li>passa confiança quando a mensagem chega a uma escola ou clínica;</li>
          <li>separa o trabalho do uso pessoal;</li>
          <li>permanece com você se trocar de provedor ou de computador.</li>
        </ul>
        <p>
          O domínio vem junto do{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site do consultório
          </Link>
          . Escolha um endereço curto e fácil de ditar por telefone.
        </p>
      </section>

      <section>
        <h2>Assinatura que identifica</h2>
        <p>
          A assinatura é divulgação em cada mensagem, então segue o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>
          . Um modelo:
        </p>
        <ul>
          <li>nome completo;</li>
          <li>psicólogo(a) · CRP XX/XXXXX (ilustrativo);</li>
          <li>telefone ou WhatsApp profissional;</li>
          <li>site;</li>
          <li>logo pequeno, na cor do consultório, sem imagens pesadas.</li>
        </ul>
        <p>
          Sem frases de efeito, preço ou promessa. O logo e as cores seguem a{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual
          </Link>
          , como no{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Sigilo e LGPD no e-mail</h2>
        <p>
          O sigilo profissional é dever do psicólogo (art. 9º do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          ), e a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          classifica dados de saúde como sensíveis. Para o dia a dia:
        </p>
        <ul>
          <li>ative a verificação em duas etapas na conta;</li>
          <li>use senha forte e única, de preferência em um gerenciador;</li>
          <li>não deixe a conta aberta em computador compartilhado;</li>
          <li>não trate de conteúdo clínico por e-mail; leve para a sessão;</li>
          <li>combine com o paciente ou responsável o que pode ir por e-mail (agendamento, recibo) e o que não pode;</li>
          <li>revise o destinatário antes de enviar documentos.</li>
        </ul>
      </section>

      <section>
        <h2>Modelos que poupam tempo</h2>
        <ul>
          <li>
            <strong>Primeiro contato</strong>: agradece, explica como funciona o
            agendamento e pergunta o melhor horário.
          </li>
          <li>
            <strong>Confirmação</strong>: data, horário, endereço e política de
            remarcação.
          </li>
          <li>
            <strong>Recibo</strong>: com os dados exigidos, sem conteúdo clínico.
          </li>
        </ul>
        <p>
          Para mensagens rápidas, o WhatsApp costuma ser mais usado: veja{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Assinatura, e-mail e
          modelos de mensagem fazem parte da mesma identidade. Se quiser
          conversar sobre a sua marca, o primeiro passo é uma conversa de 15
          minutos.
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
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 5º, II.
          </li>
        </ul>
      </section>
    </>
  )
};
