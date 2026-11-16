import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "psicologo-grupos-de-maes",
  title: "Psicólogo pode divulgar em grupo de WhatsApp e grupo de mães? O que o Código de Ética diz",
  description:
    "Psicóloga pode divulgar em grupos de mães no WhatsApp e no Facebook? O que o CFP permite, onde está o limite e como participar sem induzir nem expor ninguém.",
  keyword: "psicólogo pode divulgar em grupo de WhatsApp",
  tags: ["divulgacao-etica", "neurodivergencia"],
  publishedAt: "2026-11-14",
  summary:
    "Pode, com cuidado. O CFP não restringe os meios de divulgação, mas o Código de Ética proíbe induzir pessoas a recorrer aos seus serviços (art. 2º, alínea i) e exige nome completo, CRP e nada de promessa ou preço como chamariz (art. 20). Em grupos de mães, a divulgação cabe quando as regras do grupo permitem e quando é informativa; responder a um relato pessoal com oferta de atendimento ou comentar casos no grupo cruza o limite.",
  faq: [
    {
      q: "Psicólogo pode mandar mensagem no privado para uma mãe que fez pergunta no grupo?",
      a: "Evite iniciar a conversa no privado para oferecer atendimento a alguém que relatou uma dificuldade: isso se aproxima de induzir a pessoa a recorrer aos seus serviços, o que o art. 2º, alínea i, proíbe. Se ela pedir indicação ou escrever para você, responda com informação sobre como funciona o primeiro contato."
    },
    {
      q: "Posso entrar em grupos de mães de autistas para divulgar meu trabalho?",
      a: "Pode participar, mas entrar só para divulgar costuma ferir as regras do grupo e a confiança das famílias. Leia as regras, pergunte à administração se há espaço para profissionais e contribua com informação geral. Divulgação, quando permitida, com nome completo, CRP e sem promessa."
    },
    {
      q: "Posso responder dúvidas de mães no grupo?",
      a: "Pode responder sobre o tema em termos gerais, respaldada na ciência psicológica, como orienta a cartilha do CRP-MG para comentários e perguntas. Não faça orientação para um caso específico nem sugira diagnóstico a partir de um relato, porque isso pode prejudicar quem pergunta e quem lê."
    },
    {
      q: "Posso usar o número de telefone de alguém do grupo para mandar minha divulgação?",
      a: "Não é recomendável. O número foi compartilhado para a finalidade do grupo, não para receber publicidade, e a LGPD exige finalidade e base legal para o uso de dados pessoais. Mensagem não solicitada também pesa contra a sua imagem."
    }
  ],
  cover: {
    src: "/blog/psicologo-grupos-de-maes/psicologo-grupos-de-maes-celular-cafe.jpg",
    alt: "Celular sobre um caderno ao lado de uma xícara de café com leite numa mesa de vidro",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Grupos de mães no WhatsApp e no Facebook são, para muitas famílias,
        o primeiro lugar onde se pergunta “alguém conhece uma psicóloga que
        atende criança autista?”. Para quem atende esse público, a tentação de
        responder com o próprio nome é grande. E a dúvida também: isso pode?
      </p>
      <p>
        A resposta curta: pode participar e, quando as regras do grupo
        permitirem, divulgar de forma informativa. O que não pode é usar o
        grupo para induzir alguém a procurar você, comentar casos ou oferecer
        atendimento em resposta a um relato pessoal. Abaixo estão o que dizem
        as normas, como agir em cada situação e um modelo de apresentação.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          diz que o Conselho “não restringe os locais e meios de publicidade”,
          cabendo à profissional avaliar os recursos adequados ao público e
          evitar situações de conflito de interesses. Grupos de WhatsApp e de
          Facebook, portanto, não são proibidos em si.
        </p>
        <p>
          O que muda é a forma. O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          proíbe “induzir qualquer pessoa ou organização a recorrer a seus
          serviços” (art. 2º, alínea i) e expor pessoas ao divulgar
          procedimentos ou resultados em meios de comunicação (art. 2º, alínea
          q). O art. 20 exige nome completo e CRP, veda preço como propaganda,
          previsão taxativa de resultado e divulgação sensacionalista. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          repete a proibição de induzir e pede cautela com as fronteiras entre
          o espaço pessoal e o profissional nas redes.
        </p>
      </section>

      <section>
        <h2>Participar como mãe e participar como psicóloga</h2>
        <p>
          A primeira pergunta é em que papel você está no grupo. Muitas
          psicólogas são mães e estão no grupo da escola ou do bairro por isso.
          Nesse caso, a regra é não misturar: no grupo pessoal, você é uma mãe
          como as outras.
        </p>
        <ul>
          <li>
            <strong>Grupo pessoal (escola, condomínio, família):</strong> não
            divulgue serviços nem responda como especialista a cada pergunta.
            Se alguém pedir indicação, você pode dizer que é psicóloga e deixar
            o contato, uma vez.
          </li>
          <li>
            <strong>Grupo temático (mães de autistas, TDAH, maternidade):</strong>{" "}
            você entra sabendo que pode ser vista como profissional. Leia as
            regras e, se houver dúvida, pergunte à administração.
          </li>
          <li>
            <strong>Grupo de divulgação ou de profissionais:</strong> feito
            para isso; siga o art. 20 normalmente.
          </li>
        </ul>
        <p>
          A cartilha do CRP-MG lembra que, quando a psicóloga se apresenta como
          tal, “terá que responder eticamente pelo conteúdo ali postado”, mesmo
          num espaço que não é exclusivamente profissional.
        </p>
      </section>

      <section>
        <h2>Quando alguém pede indicação</h2>
        <p>
          Quando uma mãe pede indicação no grupo, você pode responder. O pedido
          partiu dela, então não há indução. O cuidado é com a forma.
        </p>
        <ol>
          <li>Responda no grupo de forma curta, ou no privado se ela pedir.</li>
          <li>Diga nome completo, psicóloga, CRP e o público que você atende.</li>
          <li>Indique o canal de agendamento ou o site.</li>
          <li>Não comente o caso que ela relatou nem sugira hipóteses.</li>
          <li>Não ofereça desconto, “primeira sessão grátis” ou vaga imediata.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de resposta:</em> “Oi, Camila. Sou Ana Souza,
          psicóloga (CRP 00/00000), atendo crianças autistas e faço orientação
          para pais em Pinheiros e online. Se quiser, o contato está em
          anasouza.com.br.”
        </p>
        <p>
          Se a mãe descreveu uma situação difícil, acolha em uma frase, mas
          deixe a conversa sobre o caso para o primeiro contato. O post sobre{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            responder comentários e direct
          </Link>{" "}
          traz respostas-modelo para isso.
        </p>
      </section>

      <section>
        <h2>Quando ninguém pediu: divulgar ou não</h2>
        <p>
          Postar o seu serviço num grupo onde ninguém pediu é o ponto mais
          delicado. Não é proibido pelo Código, mas depende das regras do grupo
          e da forma.
        </p>
        <ul>
          <li>
            <strong>Pode:</strong> num dia ou espaço que a administração reserva
            para profissionais, uma apresentação informativa, com nome, CRP,
            público e contato.
          </li>
          <li>
            <strong>Pode:</strong> compartilhar um conteúdo educativo seu (um
            post, um material para pais) quando o tema é pertinente e o grupo
            aceita.
          </li>
          <li>
            <strong>Evitar:</strong> repetir a divulgação toda semana, mandar
            áudio de venda ou usar frases de urgência (“últimas vagas”).
          </li>
          <li>
            <strong>Evitar:</strong> responder ao desabafo de uma mãe com “posso
            te ajudar, me chama no privado”. Aí a divulgação se apoia no
            sofrimento de alguém para captar, o que se aproxima da indução e do
            sensacionalismo.
          </li>
        </ul>
        <p>
          Se a ideia é levar informação aos pais, um{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais
          </Link>{" "}
          com a marca do consultório costuma ser mais bem recebido que um
          anúncio.
        </p>
      </section>

      <section>
        <h2>Responder dúvidas sem virar atendimento</h2>
        <p>
          Responder dúvidas gerais pode ajudar as famílias e mostrar o seu
          trabalho. A cartilha do CRP-MG pede que respostas a perguntas estejam
          respaldadas na ciência psicológica e alerta que responder perguntas
          genéricas e descontextualizadas sem avaliação pode ter impacto
          negativo para quem pergunta e para quem lê.
        </p>
        <ol>
          <li>Responda o tema, não o caso (“crises sensoriais costumam…”, não “seu filho tem…”).</li>
          <li>Não sugira diagnóstico a partir de relato.</li>
          <li>Indique profissionais e serviços quando o caso pedir avaliação.</li>
          <li>Em sinal de risco, indique SAMU (192), CVV (188) ou o serviço de saúde da cidade.</li>
        </ol>
        <p>
          E nunca comente no grupo algo que identifique um paciente, mesmo sem
          nome. Em grupos de bairro ou de escola, poucos detalhes bastam para
          alguém reconhecer uma família, e o art. 9º protege o sigilo.
        </p>
      </section>

      <section>
        <h2>Dados de contato e LGPD</h2>
        <p>
          O número de telefone de quem está no grupo foi compartilhado para a
          finalidade do grupo. Usar esse número para mandar a sua divulgação no
          privado, ou adicionar pessoas a uma lista de transmissão sem pedido,
          esbarra na{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>
          , que exige finalidade e base legal para o uso de dados pessoais
          (art. 6º e art. 7º).
        </p>
        <p>
          Se uma mãe quer receber seus conteúdos, ofereça um caminho em que ela
          escolhe entrar, como uma newsletter com consentimento ou o seu perfil
          profissional. O post sobre{" "}
          <Link href="/blog/newsletter-para-psicologo" className="inst-link">
            newsletter para psicólogo
          </Link>{" "}
          mostra como montar.
        </p>
      </section>

      <section>
        <h2>Pode e evitar em grupos de mães</h2>
        <div className="inst-blog__table" role="region" aria-label="Grupos de mães no WhatsApp e no Facebook: o que a psicóloga pode e o que deve evitar" tabIndex={0}>
          <table>
            <caption>Grupos de mães no WhatsApp e no Facebook: o que a psicóloga pode e o que deve evitar</caption>
            <thead>
              <tr>
                <th scope="col">Situação</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pedido de indicação</td>
                <td>Responder com nome, CRP, público e contato</td>
                <td>Comentar o caso ou oferecer desconto</td>
              </tr>
              <tr>
                <td>Divulgação espontânea</td>
                <td>Apresentação informativa onde o grupo permite</td>
                <td>Repetir toda semana ou usar urgência</td>
              </tr>
              <tr>
                <td>Desabafo de uma mãe</td>
                <td>Acolher em uma frase e indicar serviços se houver risco</td>
                <td>“Me chama no privado que eu te ajudo”</td>
              </tr>
              <tr>
                <td>Dúvidas</td>
                <td>Responder o tema em termos gerais</td>
                <td>Sugerir diagnóstico a partir de relato</td>
              </tr>
              <tr>
                <td>Contatos</td>
                <td>Convidar para canais em que a pessoa escolhe entrar</td>
                <td>Usar números do grupo para mandar publicidade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Grupos de mães de crianças autistas e neurodivergentes reúnem
          famílias em momentos muito diferentes: algumas acabaram de receber o
          diagnóstico, outras estão há anos na rotina de terapias. Há também
          muita disputa de opiniões sobre abordagens. A sua presença ali pesa.
        </p>
        <ul>
          <li>
            <strong>Não entre em disputas de abordagem.</strong> Criticar a
            terapia que outra família escolheu pode virar autopromoção em
            detrimento de outros profissionais (art. 20, f).
          </li>
          <li>
            <strong>Não prometa prazo nem resultado.</strong> “Em seis meses ele
            vai falar” é previsão taxativa (art. 20, e).
          </li>
          <li>
            <strong>Use linguagem respeitosa</strong>, sem “sofre de autismo”
            ou “cura”; veja{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
          <li>
            <strong>Prefira canais seus</strong> para aprofundar: um conteúdo
            no site, uma{" "}
            <Link href="/blog/psicologo-palestra-para-pais" className="inst-link">
              palestra para pais
            </Link>{" "}
            ou{" "}
            <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
              a divulgação da orientação parental
            </Link>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>Checklist rápido</h2>
        <ul>
          <li>Li as regras do grupo e, na dúvida, falei com a administração.</li>
          <li>Separei grupo pessoal de grupo temático.</li>
          <li>Só respondo com meu contato quando alguém pede indicação.</li>
          <li>Toda apresentação tem nome completo, psicóloga e CRP.</li>
          <li>Não comento casos nem sugiro diagnóstico.</li>
          <li>Não uso números do grupo para mandar publicidade.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros define o posicionamento e o
          tom de voz do consultório, e daí saem a apresentação curta que você
          usa em grupos e indicações, o site e as redes, revisados pelo art.
          20. Tudo é apresentado em até 30 dias. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se as famílias chegam até você por indicação e você quer que o seu
          nome seja fácil de achar, marque uma conversa de 15 minutos.
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
            , arts. 2º (alíneas i e q), 9º e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (formas e locais de divulgação, perfis em redes
            sociais, interação em comentários e perguntas).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 6º e 7º.
          </li>
        </ul>
      </section>
    </>
  )
};
