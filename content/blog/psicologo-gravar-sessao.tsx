import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES13 = "https://abmes.org.br/public/arquivos/legislacoes/Resolucao-CFP-013-2022-06-15.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const FAQ_CFP = "https://site.cfp.org.br/faq/e-permitido-gravar-as-sessoes-de-atendimento/";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "psicologo-gravar-sessao",
  title: "Psicólogo pode gravar sessão? O que exigem o Código de Ética e a Res. CFP 13/2022",
  description:
    "Psicólogo pode gravar sessão, online ou presencial? Consentimento por escrito, finalidade, sigilo, regras para criança e o que nunca fazer com a gravação.",
  keyword: "psicólogo pode gravar sessão",
  tags: ["divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "Pode, mas só com consentimento livre, prévio, informado e por escrito da pessoa atendida, com uma finalidade ou um método que justifique a gravação e com o sigilo garantido (Resolução CFP nº 13/2022, art. 11). No caso de criança ou adolescente, o consentimento é dos responsáveis, seguido da anuência da própria criança. A gravação faz parte do registro documental e não pode ser usada para outro fim, como divulgação.",
  faq: [
    {
      q: "Psicólogo pode gravar a sessão de terapia online?",
      a: "Sim, nas mesmas condições da sessão presencial. A Resolução CFP nº 13/2022 vale para a psicoterapia em qualquer modalidade, e o art. 11 exige consentimento por escrito, finalidade justificada e sigilo garantido. No online, cuide também de onde o arquivo fica: gravação automática na nuvem da plataforma de vídeo precisa estar desligada se não houver esse acordo."
    },
    {
      q: "Precisa de autorização por escrito para gravar a sessão?",
      a: "Sim. O art. 11 da Resolução CFP nº 13/2022 diz que a gravação das sessões de psicoterapia, por áudio ou vídeo, deve ser consentida em caráter livre, prévio, informado e por escrito pela pessoa atendida. Um “pode gravar?” falado no começo da sessão não cumpre a regra."
    },
    {
      q: "Pode gravar a sessão de uma criança?",
      a: "Só com consentimento dos responsáveis, livre, prévio, informado e por escrito, e com a anuência posterior da própria criança ou adolescente (Res. CFP 13/2022, art. 11, § 1º). Explique à criança, em linguagem simples, o que vai ser gravado e para quê, e respeite a recusa dela."
    },
    {
      q: "A gravação da sessão pode ser usada em curso ou nas redes?",
      a: "Não para outro fim que não o combinado. O § 2º do art. 11 veda o uso dos registros de áudio e imagem das pessoas atendidas de forma alheia às finalidades e ao método previamente estabelecidos. Divulgar trechos de sessão também esbarra no sigilo do art. 9º e no art. 2º, q, do Código de Ética."
    },
    {
      q: "O paciente pode gravar a sessão?",
      a: "As normas do CFP citadas aqui tratam da gravação feita pela psicóloga. Para o caso de a pessoa atendida querer gravar, o caminho mais seguro é conversar sobre o motivo, combinar a regra no contrato terapêutico desde o início e, na dúvida, consultar a comissão de orientação do seu Conselho Regional."
    }
  ],
  cover: {
    src: "/blog/psicologo-gravar-sessao/psicologo-gravar-sessao-microfone-e-notebook.jpg",
    alt: "Microfone de gravação preso a um braço articulado ao lado de um notebook sobre uma mesa clara",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A dúvida aparece de dois jeitos. Você pensa em gravar algumas sessões
        para levar à supervisão ou para estudar a sua técnica. Ou a plataforma
        de vídeo oferece um botão de “gravar reunião” e você se pergunta se
        isso é permitido.
      </p>
      <p>
        A resposta curta: pode gravar, mas a regra é exigente. A Resolução
        CFP nº 13/2022 pede consentimento livre, prévio, informado e por
        escrito, uma finalidade ou um método que justifique a gravação e o
        sigilo garantido. Para criança e adolescente, o consentimento é dos
        responsáveis, com a anuência da criança. E a gravação não pode virar
        outra coisa depois, como conteúdo ou material de curso.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          traz a base no art. 14: o uso de quaisquer meios de registro e
          observação da prática psicológica obedece ao Código e à legislação,
          “devendo o usuário ou beneficiário, desde o início, ser informado”.
          O art. 9º, sobre sigilo, completa.
        </p>
        <p>
          A regra detalhada está no art. 11 da{" "}
          <a href={RES13} {...ext}>
            Resolução CFP nº 13/2022
          </a>
          , sobre psicoterapia. A gravação por áudio ou vídeo “deve ser
          consentida, em caráter livre, prévio, informado e por escrito, pela
          pessoa a ser atendida”, deve ser justificada pela finalidade ou pelo
          método de trabalho e deve garantir o sigilo. O § 1º trata de
          criança, adolescente ou interdito: consentimento dos responsáveis,
          nas mesmas condições, e anuência da pessoa atendida. O § 2º veda o
          uso dos registros fora das finalidades e do método combinados. O § 3º
          diz que a gravação compõe o registro documental.
        </p>
        <p>
          O{" "}
          <a href={FAQ_CFP} {...ext}>
            CFP, nas dúvidas frequentes de orientação e ética
          </a>
          , acrescenta que a decisão de gravar parte da abordagem e dos
          autores de referência e que a prática deve ser adotada só quando
          necessária, porque a regra é resguardar a intimidade.
        </p>
      </section>

      <section>
        <h2>Quando faz sentido gravar</h2>
        <p>
          Gravar faz sentido quando existe uma razão técnica que você consegue
          explicar em uma frase para a pessoa atendida. Sem essa razão, o
          melhor é não gravar.
        </p>
        <ul>
          <li>
            Abordagens ou formações que usam a gravação como parte do método,
            por exemplo para análise de interação.
          </li>
          <li>
            Supervisão em que a supervisora precisa ver ou ouvir trechos, com
            acordo explícito.
          </li>
          <li>
            Pesquisa aprovada, com os termos próprios da pesquisa.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma psicóloga em formação em
          terapia de família propõe gravar três sessões para discutir com a
          supervisora. Ela explica a finalidade, quem vai assistir, onde o
          arquivo fica e quando será apagado, e entrega o termo para a família
          ler em casa.
        </p>
        <p>
          <strong>Erro comum:</strong> gravar “por segurança” ou “para não
          perder nada”. Isso não é finalidade técnica, e o CFP lembra que a
          regra é resguardar a intimidade.
        </p>
      </section>

      <section>
        <h2>O que o termo de consentimento precisa dizer</h2>
        <p>
          O consentimento por escrito é o centro da regra. Um bom termo é
          curto, em linguagem simples, e responde às perguntas que a pessoa
          faria.
        </p>
        <ol>
          <li>O que será gravado: áudio, vídeo, quais sessões.</li>
          <li>Para quê: a finalidade ou o método, em uma frase.</li>
          <li>Quem terá acesso: só você, você e a supervisora.</li>
          <li>Onde o arquivo fica e como é protegido.</li>
          <li>Por quanto tempo é guardado e como é descartado.</li>
          <li>Que a pessoa pode recusar ou desistir a qualquer momento, sem prejuízo do atendimento.</li>
        </ol>
        <p>
          <strong>Erro comum:</strong> esconder a autorização de gravação numa
          cláusula genérica do contrato assinado no primeiro dia. Consentimento
          “informado” pede que a pessoa saiba exatamente com o que concorda.
          Para o restante do contrato, veja o guia de{" "}
          <Link href="/blog/contrato-terapeutico-psicologo" className="inst-link">
            contrato terapêutico
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Gravação em sessão online</h2>
        <p>
          A sessão online segue as mesmas regras, e a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          regula a prática mediada por tecnologias. O risco extra é técnico:
          plataformas de vídeo têm gravação automática, transcrição e resumo
          por inteligência artificial que guardam o conteúdo em servidores de
          terceiros.
        </p>
        <ul>
          <li>Desligue gravação automática, transcrição e resumo na plataforma.</li>
          <li>Se houver acordo de gravação, grave localmente, em pasta protegida.</li>
          <li>Avise no início da sessão quando a gravação começa e termina.</li>
          <li>
            Combine que a pessoa também não grava sem acordo, para o sigilo
            valer dos dois lados.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> usar um assistente de reunião que
          transcreve a sessão “só para ajudar no prontuário”. O conteúdo da
          sessão sai do seu controle. O post{" "}
          <Link href="/blog/psicologo-inteligencia-artificial-divulgacao" className="inst-link">
            psicólogo pode usar inteligência artificial?
          </Link>{" "}
          trata desses limites, e o de{" "}
          <Link href="/blog/marca-psicologo-online" className="inst-link">
            marca para psicólogo online
          </Link>{" "}
          mostra como apresentar o atendimento online.
        </p>
      </section>

      <section>
        <h2>Pode e evitar ao gravar sessões</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao gravar sessões de psicoterapia"
            tabIndex={0}
          >
            <caption>Gravação de sessão: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consentimento</td>
                <td>Termo por escrito, específico, antes da sessão</td>
                <td>Pedir de boca no começo da sessão</td>
              </tr>
              <tr>
                <td>Finalidade</td>
                <td>Supervisão, método da abordagem, pesquisa aprovada</td>
                <td>Gravar “por segurança”</td>
              </tr>
              <tr>
                <td>Criança</td>
                <td>Consentimento dos responsáveis e anuência da criança</td>
                <td>Gravar só com autorização verbal de um dos pais</td>
              </tr>
              <tr>
                <td>Online</td>
                <td>Gravação local, em pasta protegida</td>
                <td>Nuvem da plataforma ou transcrição automática</td>
              </tr>
              <tr>
                <td>Uso</td>
                <td>Só para o fim combinado</td>
                <td>Trechos em curso, palestra ou redes sociais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          No atendimento infantil, a gravação às vezes aparece como pedido da
          família (“grava para eu ver em casa como você faz”) ou como ideia da
          psicóloga para orientar os pais. As duas situações pedem a regra do
          § 1º: consentimento por escrito dos responsáveis e anuência da
          criança, explicada de um jeito que ela entenda.
        </p>
        <p>
          Antes de gravar, pense se há outro caminho. Muitas vezes, uma sessão
          de orientação com os pais presentes, ou um roteiro escrito do que foi
          feito, cumpre a mesma função sem criar um arquivo sensível. Se a
          criança mostrar desconforto com a câmera, isso vale como recusa. E
          lembre que o art. 13 do Código pede comunicar aos responsáveis só o
          essencial: a gravação não pode virar um jeito de os pais assistirem
          a tudo o que a criança diz. Para a conversa com a família, veja o
          guia de{" "}
          <Link href="/blog/devolutiva-avaliacao-pais" className="inst-link">
            devolutiva para os pais
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns e checklist</h2>
        <ul>
          <li>Gravar sem termo por escrito e específico.</li>
          <li>Deixar a gravação automática da plataforma ligada.</li>
          <li>Guardar o arquivo no celular ou numa pasta sem senha.</li>
          <li>Não definir prazo de guarda e descarte.</li>
          <li>Usar trechos fora da finalidade combinada.</li>
        </ul>
        <p>Antes de gravar, confira:</p>
        <ul>
          <li>A finalidade cabe em uma frase e faz parte do seu método.</li>
          <li>O termo diz o quê, para quê, quem acessa, onde fica e até quando.</li>
          <li>Responsáveis assinaram e a criança concordou, se for o caso.</li>
          <li>A gravação entra no registro documental, com o mesmo sigilo.</li>
          <li>
            O site e a{" "}
            <Link href="/blog/politica-de-privacidade-psicologo" className="inst-link">
              política de privacidade
            </Link>{" "}
            não prometem nada diferente do que você faz.
          </li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com as
          respostas que as famílias procuram antes de marcar, e cada texto
          revisado pelo art. 20. Tudo é apresentado em até 30 dias, com o site
          incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer um site que explique o seu jeito de trabalhar com
          segurança, marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022 — diretrizes e deveres para o exercício
              da psicoterapia
            </a>{" "}
            (DOU de 21/06/2022, cópia da ABMES), art. 11.
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 2º (q), 9º, 13 e 14.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={FAQ_CFP} {...ext}>
              É permitido gravar as sessões de atendimento? (dúvidas frequentes
              de orientação e ética)
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024 — psicologia mediada por tecnologias
              digitais
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 5º, II (dado de saúde como dado sensível).
          </li>
        </ul>
      </section>
    </>
  )
};
