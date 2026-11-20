import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES13 = "https://abmes.org.br/public/arquivos/legislacoes/Resolucao-CFP-013-2022-06-15.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "indicacao-entre-psicologos",
  title: "Indicação entre psicólogos: como montar uma rede de encaminhamento em 7 passos",
  description:
    "Indicação entre psicólogos: o que o Código de Ética diz sobre encaminhamento e comissão, como montar uma rede de colegas, o que compartilhar e como indicar bem.",
  keyword: "indicação entre psicólogos",
  tags: ["posicionamento", "divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "Indicar colegas é parte do trabalho: o Código de Ética pede que a psicóloga oriente sobre os encaminhamentos apropriados (art. 1º, h). O que ele veda é receber ou pagar remuneração ou porcentagem por encaminhamento (art. 2º, p). Uma boa rede de indicação tem poucos colegas que você conhece, critérios claros sobre quem atende o quê, troca de informação mínima e com consentimento, e nenhum dinheiro envolvido.",
  faq: [
    {
      q: "Psicólogo pode receber comissão por indicar paciente?",
      a: "Não. O art. 2º, p, do Código de Ética Profissional do Psicólogo veda “receber, pagar remuneração ou porcentagem por encaminhamento de serviços”. Isso vale entre psicólogas e com outros profissionais ou clínicas. Presentes ou vantagens condicionados à indicação seguem a mesma lógica e devem ser evitados."
    },
    {
      q: "Como indicar outro psicólogo para um paciente?",
      a: "Explique por que está indicando, ofereça de dois a três nomes quando possível, com o motivo de cada indicação, e deixe a decisão com a pessoa. Compartilhe informações com a colega só com o consentimento da pessoa atendida e só o que for relevante para o novo atendimento. Se a pessoa estava em atendimento com você, cuide do encerramento."
    },
    {
      q: "Posso divulgar uma rede de psicólogos parceiros no meu site?",
      a: "Pode apresentar colegas com quem você trabalha em rede, com nome completo e CRP de cada uma, desde que não haja pagamento pela indicação e que a página não faça autopromoção em detrimento de outros profissionais (art. 20, f). Peça autorização das colegas antes de listá-las e mantenha a lista atualizada."
    },
    {
      q: "O que fazer quando recebo uma indicação de colega?",
      a: "Agradeça à colega sem dar detalhes do atendimento, porque o sigilo continua valendo. Se a pessoa autorizar, um retorno curto do tipo “ela entrou em contato e combinamos o início” basta. Se você não puder atender, devolva rápido com outra sugestão, para a pessoa não ficar sem resposta."
    }
  ],
  cover: {
    src: "/blog/indicacao-entre-psicologos/indicacao-entre-psicologos-dois-cartoes-lado-a-lado.jpg",
    alt: "Dois cartões de visita em branco, lado a lado, apoiados sobre uma mesa de madeira",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Toda semana chega um pedido que não é para você: um adulto com
        demanda de casal, quando você atende crianças; uma família de outra
        cidade; uma agenda que já está cheia. Você quer indicar alguém de
        confiança, mas a lista de colegas está na memória e, quando precisa,
        ninguém vem à cabeça.
      </p>
      <p>
        A resposta curta: indicar é um dever do ofício, e uma rede de
        indicação organizada ajuda as pessoas, as colegas e você. O Código de
        Ética pede que a psicóloga oriente sobre encaminhamentos apropriados e
        veda uma coisa só, com todas as letras: receber ou pagar por
        encaminhamento. O resto é organização e cuidado com o sigilo.
      </p>
      <p>
        Abaixo estão as normas, sete passos para montar e manter a rede, uma
        tabela do que pode e do que evitar e uma parte para quem atende
        famílias de crianças autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas sobre indicação e encaminhamento</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          trata do tema em quatro pontos. O art. 1º, h, coloca entre os
          deveres fundamentais “orientar a quem de direito sobre os
          encaminhamentos apropriados” e fornecer os documentos pertinentes
          quando solicitados. Indicar bem, portanto, faz parte do trabalho.
        </p>
        <p>
          O art. 2º, p, veda “receber, pagar remuneração ou porcentagem por
          encaminhamento de serviços”. É a regra que separa rede de indicação
          de esquema comercial. O art. 6º, b, ao tratar da relação com
          profissionais não psicólogos, pede que se compartilhem “somente
          informações relevantes para qualificar o serviço prestado”,
          resguardando o sigilo, um critério que serve também entre colegas. E
          o art. 7º diz em que situações uma psicóloga pode intervir num
          serviço que outra está prestando, como a pedido da responsável ou
          quando informada da interrupção definitiva.
        </p>
        <p>
          Na divulgação, vale o art. 20, f: não fazer autopromoção em
          detrimento de outros profissionais. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          lembra que é possível mostrar o seu diferencial pela formação e
          qualificação, sem comparações que desrespeitem colegas. E a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          trata dados de saúde como sensíveis (art. 5º, II), o que pede
          cuidado redobrado ao repassar qualquer informação na indicação.
        </p>
      </section>

      <section>
        <h2>1. Liste o que você não atende</h2>
        <p>
          A rede começa pela sua fronteira. Escreva os pedidos que você recebe
          e não atende, porque é para eles que você vai precisar de nomes.
        </p>
        <ul>
          <li>Faixas etárias fora do seu recorte.</li>
          <li>Modalidades que você não oferece: casal, família, grupo, online.</li>
          <li>Demandas que pedem formação específica que você não tem.</li>
          <li>Regiões que você não alcança, se atende presencialmente.</li>
          <li>Momentos em que a agenda está fechada.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma psicóloga infantil anota,
          durante um mês, os pedidos que recusou. Aparecem adultos com TDAH,
          casais, adolescentes de outra cidade e avaliações neuropsicológicas.
          São quatro “vagas” na rede dela.
        </p>
        <p>
          <strong>Erro comum:</strong> aceitar casos fora do recorte para não
          “perder” a pessoa. O art. 1º, b, pede que você assuma só o que está
          capacitada a fazer, e a pessoa pode ser mais bem atendida por outra
          colega. Se o recorte ainda não está claro, o guia de{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher um nicho na psicologia
          </Link>{" "}
          ajuda.
        </p>
      </section>

      <section>
        <h2>2. Escolha poucos colegas que você conhece</h2>
        <p>
          Uma rede boa é pequena e conhecida. Para cada “vaga” do passo
          anterior, tenha de duas a três colegas cujo trabalho você conhece de
          perto, não só pelo Instagram.
        </p>
        <ol>
          <li>
            Comece por quem você já conhece: colegas de formação, de
            supervisão, de grupo de estudos.
          </li>
          <li>
            Converse antes de indicar: o que a colega atende, em que formato,
            com que disponibilidade.
          </li>
          <li>Confira o CRP ativo no cadastro do Conselho.</li>
          <li>
            Prefira diversidade: abordagens, regiões e faixas de valor
            diferentes, para que a pessoa tenha escolha.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> um café de 40 minutos com uma
          colega que atende casais vira uma ficha de quatro linhas: o que ela
          atende, o que não atende, modalidade e como prefere receber o
          contato.
        </p>
        <p>
          <strong>Erro comum:</strong> indicar quem “parece bom” no Instagram
          ou a primeira colega que responde no grupo de WhatsApp. A indicação
          carrega a sua confiança. Para o cuidado com grupos de mensagens, veja{" "}
          <Link href="/blog/psicologo-grupos-de-maes" className="inst-link">
            psicólogo pode divulgar em grupo de WhatsApp
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Combine as regras da rede, sem dinheiro</h2>
        <p>
          Uma rede funciona melhor quando as regras estão ditas. A principal já
          vem do Código: ninguém paga nem recebe por indicação. As outras são
          combinados de convivência.
        </p>
        <ul>
          <li>Nenhuma comissão, porcentagem, desconto ou presente condicionado.</li>
          <li>Indicação não é obrigação de “devolver” indicação.</li>
          <li>Retorno rápido quando não for possível atender.</li>
          <li>Troca de informação só com consentimento da pessoa.</li>
          <li>Avisar quando a agenda fechar ou o recorte mudar.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> quatro colegas criam uma
          planilha compartilhada só com os seus próprios dados: recorte,
          modalidade, região e se estão com agenda aberta. Nenhum dado de
          paciente entra ali.
        </p>
        <p>
          <strong>Erro comum:</strong> clínicas ou plataformas que oferecem
          “bônus por indicação” à psicóloga. O art. 2º, p, veda receber ou
          pagar porcentagem por encaminhamento, e o formato de “troca” (eu
          indico, você indica, e o placar é cobrado) caminha para a mesma
          lógica. A parceria com médicos tem as mesmas regras; veja{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria entre psicólogo e pediatra
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Indique com explicação e com escolha</h2>
        <p>
          A forma de indicar importa tanto quanto o nome. A pessoa precisa
          entender por que está sendo indicada e sentir que a decisão é dela.
        </p>
        <ol>
          <li>Explique o motivo em uma frase, sem jargão.</li>
          <li>Ofereça dois ou três nomes quando possível.</li>
          <li>Diga por que cada nome faz sentido para aquela demanda.</li>
          <li>Passe o contato oficial da colega, não o pessoal.</li>
          <li>Deixe a porta aberta: “se não der certo, me procure”.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> “O que você descreve é uma
          demanda de casal, e eu trabalho com crianças e famílias. Conheço
          duas colegas que atendem casais: a Ana, presencial em Pinheiros, e a
          Bia, online. Seguem os contatos; fique à vontade para escolher.”
        </p>
        <p>
          <strong>Erro comum:</strong> indicar uma colega só, sem explicar, e
          pronto. A pessoa pode entender como rejeição ou como “empurrar”. Para
          pedidos de conhecidos e familiares, o post{" "}
          <Link href="/blog/psicologo-atender-familiar-amigo" className="inst-link">
            psicólogo pode atender familiar ou amigo?
          </Link>{" "}
          traz textos de recusa com indicação.
        </p>
      </section>

      <section>
        <h2>5. Compartilhe o mínimo, com consentimento</h2>
        <p>
          Quando a indicação envolve passar informações a uma colega, a regra é
          o mínimo necessário, com autorização da pessoa. Na maioria das vezes,
          o melhor é a própria pessoa entrar em contato e contar o que quiser.
        </p>
        <ul>
          <li>Pergunte se a pessoa quer que você avise a colega.</li>
          <li>
            Se sim, combine o que pode ser dito. Muitas vezes basta “vai te
            procurar uma pessoa que indiquei”.
          </li>
          <li>
            Se a pessoa estava em atendimento com você e pedir, forneça os
            documentos pertinentes (art. 1º, h).
          </li>
          <li>
            Use um canal seguro e não deixe dados clínicos em grupos ou
            mensagens de voz.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> numa transição de cidade, a
          pessoa autoriza um relatório breve para a nova psicóloga. Você
          escreve só o que é útil para a continuidade e entrega à própria
          pessoa, que decide repassar.
        </p>
        <p>
          <strong>Erro comum:</strong> mandar o “resumo do caso” por áudio no
          WhatsApp para a colega, antes de a pessoa decidir se vai procurá-la.
          O art. 6º, b, e o caráter sensível do dado de saúde pedem o
          contrário. Para combinar isso desde o início, veja o guia de{" "}
          <Link href="/blog/contrato-terapeutico-psicologo" className="inst-link">
            contrato terapêutico
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Receba indicações com o mesmo cuidado</h2>
        <p>
          A rede é de mão dupla. Receber bem uma indicação é o que faz a colega
          voltar a indicar, e o sigilo vale do mesmo jeito.
        </p>
        <ol>
          <li>Responda a pessoa indicada no mesmo dia, se possível.</li>
          <li>
            Se não puder atender, diga logo e ofereça outra sugestão.
          </li>
          <li>
            Agradeça à colega sem detalhes. Com autorização, um “ela entrou em
            contato” basta.
          </li>
          <li>Nunca comente o caso com quem indicou sem consentimento.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma colega indica uma família.
          Você responde à mãe no mesmo dia e manda para a colega: “Obrigada
          pela confiança, a família me procurou”. Nenhuma outra informação.
        </p>
        <p>
          <strong>Erro comum:</strong> deixar a pessoa indicada sem resposta
          por dias. Ela desiste e a colega fica sem saber. Um canal de contato
          organizado ajuda; veja o guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>7. Deixe claro no site para quem é o seu trabalho</h2>
        <p>
          Colegas só indicam bem quem eles entendem. Um site que diz com
          clareza para quem você trabalha recebe indicações mais certeiras e
          menos pedidos fora do recorte.
        </p>
        <ul>
          <li>Uma frase de posicionamento no topo da home.</li>
          <li>Uma página por serviço, com “para quem é” e “para quem não é”.</li>
          <li>Modalidades, região e formação, com nome completo e CRP.</li>
          <li>
            Se quiser, uma página “colegas com quem trabalho em rede”, com
            autorização delas.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> a página de serviços termina
          com “Não atendo casais nem adultos. Se essa é a sua demanda, envie
          uma mensagem e indico colegas de confiança”. A frase filtra e acolhe
          ao mesmo tempo.
        </p>
        <p>
          <strong>Erro comum:</strong> uma lista de “parceiros” com adjetivos
          que diminuem quem não está nela (“os únicos que realmente entendem
          de autismo”). O art. 20, f, veda autopromoção em detrimento de
          outros profissionais. Para a frase de topo, veja{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar na indicação entre psicólogos</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na indicação entre psicólogos"
            tabIndex={0}
          >
            <caption>Indicação entre psicólogos: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dinheiro</td>
                <td>Indicar sem nenhuma contrapartida</td>
                <td>Comissão, porcentagem ou bônus por encaminhamento</td>
              </tr>
              <tr>
                <td>Escolha</td>
                <td>Oferecer dois ou três nomes, com motivo</td>
                <td>Um nome só, sem explicação</td>
              </tr>
              <tr>
                <td>Informação</td>
                <td>O mínimo, com consentimento da pessoa</td>
                <td>Resumo do caso por áudio antes do contato</td>
              </tr>
              <tr>
                <td>Retorno</td>
                <td>“Ela entrou em contato”, com autorização</td>
                <td>Comentar o atendimento com quem indicou</td>
              </tr>
              <tr>
                <td>Site</td>
                <td>Colegas da rede com nome, CRP e autorização</td>
                <td>Lista de “parceiros” que diminui outros profissionais</td>
              </tr>
              <tr>
                <td>Planilha da rede</td>
                <td>Só dados das próprias colegas</td>
                <td>Nome ou demanda de pessoas atendidas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem rede: mantê-la viva</h2>
        <p>
          Rede de indicação envelhece rápido. Colegas mudam de recorte, fecham
          agenda, mudam de cidade. Uma revisão a cada semestre evita indicar
          alguém que não atende mais aquele público. Mande uma mensagem curta:
          “Continua atendendo adolescentes presencialmente? A agenda está
          aberta?”
        </p>
        <p>
          Encontros periódicos também ajudam: um grupo de estudos mensal ou
          uma discussão de temas, sem casos identificáveis, faz as colegas se
          conhecerem de verdade, e isso melhora a qualidade das indicações. Se
          você supervisiona colegas, a rede cresce naturalmente; o post sobre{" "}
          <Link href="/blog/divulgar-supervisao-clinica" className="inst-link">
            como divulgar supervisão clínica
          </Link>{" "}
          trata dessa relação. E, se você está se mudando ou fechando o
          consultório, a rede é o que permite encaminhar com cuidado; veja{" "}
          <Link href="/blog/mudanca-endereco-consultorio" className="inst-link">
            mudança de endereço do consultório
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Famílias de crianças autistas ou com outras condições do
          neurodesenvolvimento costumam precisar de vários profissionais ao
          mesmo tempo, e a indicação vira parte do cuidado. A sua rede, nesse
          caso, vai além da psicologia clínica.
        </p>
        <ul>
          <li>
            Colegas para demandas que você não atende: avaliação
            neuropsicológica, acompanhamento terapêutico, atendimento de
            adolescentes ou de adultos da família.
          </li>
          <li>
            Profissionais de outras áreas, com quem vale o art. 6º do Código:
            fonoaudiologia, terapia ocupacional, pediatria, neuropediatria.
          </li>
          <li>
            Apoio aos pais e mães, que às vezes precisam de psicoterapia
            individual com outra profissional.
          </li>
        </ul>
        <p>
          Ao indicar, lembre que a família pode estar cansada de repetir a
          história. Pergunte se ela quer que você avise o próximo profissional
          e combine o que pode ser dito. E nunca indique para “métodos” ou
          serviços que prometem cura ou resultados garantidos: a sua
          indicação empresta a sua credibilidade. Para organizar a parceria
          com escolas, veja{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>
          ; para a devolutiva que muitas vezes antecede os encaminhamentos,{" "}
          <Link href="/blog/devolutiva-avaliacao-pais" className="inst-link">
            devolutiva para os pais
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Ter a rede só na memória.</li>
          <li>Receber ou pagar qualquer valor por indicação.</li>
          <li>Indicar quem você não conhece de perto.</li>
          <li>Passar dados do caso antes de a pessoa decidir.</li>
          <li>Comentar o atendimento com quem indicou.</li>
          <li>Demorar a responder uma pessoa indicada.</li>
          <li>Não revisar a rede quando as colegas mudam de recorte.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da rede de indicação</h2>
        <ul>
          <li>Lista do que você não atende.</li>
          <li>De duas a três colegas para cada demanda, com ficha curta.</li>
          <li>Regra explícita: nenhuma remuneração por encaminhamento.</li>
          <li>Texto-modelo de indicação com explicação e escolha.</li>
          <li>Consentimento antes de qualquer troca de informação.</li>
          <li>Resposta no mesmo dia para quem chega indicado.</li>
          <li>Site com “para quem é” e “para quem não é”.</li>
          <li>Revisão da rede a cada semestre.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com um
          recorte claro que ajuda colegas a indicar você pelo motivo certo, e
          cada texto revisado pelo art. 20. Tudo é apresentado em até 30 dias,
          com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer ser lembrada pelas colegas pelo que faz de melhor,
          marque uma conversa de 15 minutos.
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
            , arts. 1º (b, h), 2º (p), 6º, 7º, 9º e 20 (f).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022 — diretrizes e deveres para o exercício
              da psicoterapia
            </a>{" "}
            (DOU de 21/06/2022, cópia da ABMES), art. 5º.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            , trecho sobre autopromoção em detrimento de outros profissionais.
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
