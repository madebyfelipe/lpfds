import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const RES11 =
  "https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf";
const WA_BUSINESS = "https://business.whatsapp.com/";

export const post: Post = {
  slug: "whatsapp-business-para-psicologo",
  title: "WhatsApp Business para psicólogo: perfil, mensagens e sigilo",
  description:
    "Como configurar o WhatsApp Business no consultório de psicologia: perfil com CRP, saudação, horário, respostas rápidas e cuidados com sigilo e LGPD.",
  keyword: "whatsapp business para psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-11",
  summary:
    "O WhatsApp Business separa o número do consultório do pessoal e traz perfil comercial, mensagem de saudação, mensagem de ausência e respostas rápidas. Para psicólogos, o perfil segue o artigo 20 do Código de Ética (nome, CRP, sem preço como chamariz), e as conversas exigem cuidado com sigilo e com a LGPD, porque dados de saúde são dados sensíveis.",
  faq: [
    {
      q: "Psicólogo pode usar WhatsApp para agendar sessões?",
      a: "Pode. Agendamento, confirmação e informações sobre o atendimento pelo WhatsApp são comuns. O cuidado é com o conteúdo: evite tratar de questões clínicas por mensagem e proteja o acesso ao aparelho."
    },
    {
      q: "Posso fazer atendimento psicológico pelo WhatsApp?",
      a: "A Resolução CFP nº 11/2018 regulamenta serviços psicológicos por tecnologias da informação e comunicação e exige cadastro prévio no e-Psi. Antes de atender a distância por qualquer aplicativo, confira os requisitos na resolução e no seu CRP."
    },
    {
      q: "O que colocar no perfil do WhatsApp Business do psicólogo?",
      a: "Nome completo, psicólogo(a) e CRP com número, para quem você atende, formato (presencial ou online), endereço se houver e horário de atendimento. Deixe de fora preço como chamariz e promessas de resultado."
    },
    {
      q: "Posso mandar a mesma mensagem para vários pacientes?",
      a: "Evite listas de transmissão com pacientes para conteúdo promocional. Mensagens individuais de confirmação são mais seguras para o sigilo e para a relação terapêutica."
    }
  ],
  body: (
    <>
      <p>
        Para muitos consultórios, o WhatsApp é a porta de entrada: é por lá que
        a mãe manda a primeira mensagem, que a sessão é remarcada e que chega o
        pedido de declaração. Usar o número pessoal para tudo isso mistura vida
        e trabalho e deixa o primeiro contato menos profissional. O WhatsApp
        Business resolve boa parte disso, com alguns cuidados próprios da
        psicologia.
      </p>

      <section>
        <h2>Por que usar o WhatsApp Business</h2>
        <p>
          O{" "}
          <a href={WA_BUSINESS} {...ext}>
            WhatsApp Business
          </a>{" "}
          é o aplicativo gratuito do WhatsApp para pequenos negócios. Para o
          consultório, os recursos que mais ajudam são:
        </p>
        <ul>
          <li>perfil comercial com descrição, endereço, horário e site;</li>
          <li>mensagem de saudação para o primeiro contato;</li>
          <li>mensagem de ausência fora do horário;</li>
          <li>respostas rápidas para as perguntas que se repetem;</li>
          <li>etiquetas para organizar conversas (novo contato, agendado, retorno).</li>
        </ul>
      </section>

      <section>
        <h2>O perfil é publicidade profissional</h2>
        <p>
          O nome, a foto e a descrição do perfil são vistos por qualquer pessoa
          que tenha o número, então seguem o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>
          . Um perfil completo tem:
        </p>
        <ol>
          <li>
            <strong>Nome</strong>: o seu nome profissional, o mesmo do site e do
            Instagram.
          </li>
          <li>
            <strong>Foto</strong>: a sua foto ou o logo do consultório, igual às
            outras redes.
          </li>
          <li>
            <strong>Descrição</strong>: psicólogo(a), CRP com número e uma linha
            de público e formato (“Crianças, adolescentes e orientação a pais ·
            presencial e online”).
          </li>
          <li>
            <strong>Endereço e horário</strong>, se houver atendimento presencial.
          </li>
          <li>
            <strong>Site</strong>, para quem quiser saber mais antes de marcar.
          </li>
        </ol>
        <p>
          Preço, “primeira sessão grátis” e promessas ficam fora daqui também.
          Se a dúvida é sobre valores, veja{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>
        </p>
      </section>

      <section>
        <h2>Mensagens prontas que poupam tempo</h2>
        <p>
          Exemplos de texto, para adaptar ao seu jeito de falar:
        </p>
        <ul>
          <li>
            <strong>Saudação</strong>: “Olá! Aqui é a Nome, psicóloga (CRP
            XX/XXXXX). Recebi sua mensagem e respondo em até um dia útil. Se
            quiser adiantar, conte para quem é o atendimento e se prefere
            presencial ou online.”
          </li>
          <li>
            <strong>Ausência</strong>: “Estou fora do horário de atendimento
            agora. Respondo no próximo dia útil. Em situação de emergência,
            procure o CVV (188) ou o serviço de saúde mais próximo.”
          </li>
          <li>
            <strong>Resposta rápida “como funciona”</strong>: formato, duração da
            sessão, como é o primeiro encontro e como agendar.
          </li>
        </ul>
        <p>
          A mensagem de ausência com orientação para emergência é importante:
          deixa claro que o WhatsApp não é um canal de crise.
        </p>
      </section>

      <section>
        <h2>Sigilo e LGPD nas conversas</h2>
        <p>
          O sigilo profissional é dever do psicólogo pelo artigo 9º do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          , e a{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          </a>{" "}
          classifica dados referentes à saúde como dados pessoais sensíveis. No
          dia a dia, isso significa:
        </p>
        <ul>
          <li>proteger o aparelho com senha e bloquear o acesso de terceiros;</li>
          <li>ativar a verificação em duas etapas do WhatsApp;</li>
          <li>não deixar o WhatsApp Web aberto em computador compartilhado;</li>
          <li>não tratar de conteúdo clínico por mensagem; leve para a sessão;</li>
          <li>não compartilhar prints de conversas, nem anonimizados, para divulgação;</li>
          <li>não adicionar pacientes a grupos nem a listas de transmissão promocionais.</li>
        </ul>
        <p>
          Se você atende a distância, a{" "}
          <a href={RES11} {...ext}>
            Resolução CFP nº 11/2018
          </a>{" "}
          regulamenta os serviços psicológicos por tecnologias da informação e
          comunicação e exige cadastro no e-Psi. Confira os requisitos antes de
          usar qualquer aplicativo para atendimento.
        </p>
      </section>

      <section>
        <h2>Quando o contato vem dos pais</h2>
        <p>
          Em consultórios que atendem crianças, autistas ou não, quem escreve
          quase sempre é a mãe ou o pai, muitas vezes ansiosos depois de uma
          avaliação ou de um recado da escola. Algumas práticas ajudam:
        </p>
        <ul>
          <li>responda em prazo previsível, e diga qual é esse prazo;</li>
          <li>explique como é o primeiro encontro com os responsáveis;</li>
          <li>evite pedir detalhes do quadro da criança por mensagem;</li>
          <li>combine com a família quais assuntos cabem no WhatsApp.</li>
        </ul>
      </section>

      <section>
        <h2>O WhatsApp dentro da marca</h2>
        <p>
          O WhatsApp é, muitas vezes, o último passo antes do agendamento: a
          pessoa viu o seu{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram
          </Link>
          , pesquisou o seu{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            perfil no Google
          </Link>{" "}
          e clicou no botão do site. Se o perfil do WhatsApp tem outro nome, outra
          foto e outro tom, a confiança construída até ali se perde. Nome, foto,
          descrição e jeito de escrever precisam ser os mesmos em todos os pontos.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A identidade verbal
          inclui o tom das mensagens que você manda todos os dias. Se quiser
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
            Conselho Federal de Psicologia.{" "}
            <a href={RES11} {...ext}>
              Resolução CFP nº 11/2018
            </a>
            , serviços psicológicos por tecnologias da informação e comunicação.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 5º, II.
          </li>
          <li>
            Meta.{" "}
            <a href={WA_BUSINESS} {...ext}>
              WhatsApp Business
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
