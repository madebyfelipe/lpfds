import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const GBP_EDITAR = "https://support.google.com/business/answer/3039617?hl=pt-BR";
const GBP_DIRETRIZES = "https://support.google.com/business/answer/3038177?hl=pt-BR";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const TDICS =
  "https://www.crpsp.org/noticia/view/3251/resolucao-do-cfp-que-disciplina-uso-de-tecnologias-digitais-no-exercicio-da-psicologia-ja-esta-em-vigor-plataforma-e-psi-sera-encerrada";

export const post: Post = {
  slug: "mudanca-endereco-consultorio",
  title: "Mudança de endereço do consultório de psicologia: como avisar pacientes, Google, site e CRP",
  description:
    "Mudança de endereço do consultório de psicologia: roteiro em 7 passos para avisar pacientes com sigilo, mover o perfil no Google, atualizar site, CRP e papelaria.",
  keyword: "mudança de endereço do consultório de psicologia",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-17",
  summary:
    "Na mudança de endereço do consultório, avise primeiro quem está em atendimento, individualmente e com antecedência, sem expor ninguém em grupo. Depois atualize, nesta ordem, o perfil da empresa no Google (que pede nova verificação), o site, as redes, o WhatsApp, a papelaria e os cadastros: CRP, prefeitura e Receita, quando houver pessoa jurídica. Abaixo há um cronograma de oito semanas, modelos fictícios de aviso e o que muda se a mudança for para outra cidade ou outro estado.",
  faq: [
    {
      q: "Com quanta antecedência avisar os pacientes da mudança de consultório?",
      a: "Não existe um prazo fixado pelo CFP. Na prática, avisar quem está em atendimento quatro a seis semanas antes dá tempo para a pessoa reorganizar trajeto e horário e para conversar sobre a mudança na sessão, se for o caso. Quem tem dificuldade com mudanças, como muitas crianças autistas, se beneficia de um aviso ainda mais cedo e de uma visita ao novo espaço."
    },
    {
      q: "Como mudar o endereço no Google Meu Negócio?",
      a: "No Perfil da Empresa no Google, edite o endereço na seção de informações. A ajuda do Google informa que, se a empresa mudar de endereço depois de verificada, é preciso fazer uma nova verificação, e as alterações passam por revisão antes de aparecer. Faça a troca perto da data da mudança e confira o status da edição."
    },
    {
      q: "Preciso avisar o CRP quando mudo de consultório?",
      a: "Mantenha o seu cadastro no CRP atualizado e confira o procedimento no portal de serviços do seu regional. Se o consultório é pessoa jurídica registrada no CRP, a Resolução CFP nº 3/2007 (art. 38) pede que alterações nos atos constitutivos sejam comunicadas, com o novo alvará ou CNPJ quando mudarem. Se a mudança for para outro estado e você atender presencialmente ali por mais de 90 dias por ano, é preciso inscrição secundária no CRP de destino (art. 9º); o atendimento online, pela Resolução CFP nº 9/2024, dispensa a inscrição secundária no estado de quem é atendido."
    },
    {
      q: "Posso avisar a mudança por grupo de WhatsApp?",
      a: "Evite. Um grupo ou um e-mail com todos os endereços visíveis revela a cada pessoa quem mais é atendido por você, o que fere o sigilo previsto no Código de Ética. Use mensagens individuais, lista de transmissão (em que cada um recebe como mensagem privada) ou e-mail com os destinatários em cópia oculta."
    }
  ],
  cover: {
    src: "/blog/mudanca-endereco-consultorio/mudanca-endereco-consultorio-caixas-de-mudanca-em-sala-vazia.jpg",
    alt: "Caixas de papelão empilhadas no canto de uma sala vazia de paredes brancas, prontas para a mudança",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O contrato da sala nova está assinado. Falta tudo o resto: contar para
        quem está em atendimento, trocar o endereço no Google sem sumir do
        mapa, corrigir site, Instagram, cartão, placa e cadastros, e fazer isso
        enquanto a agenda segue cheia de sessões. A mudança física leva um fim
        de semana; a mudança da informação leva semanas, e é ela que decide se
        alguém vai bater na porta antiga.
      </p>
      <p>
        A resposta curta: avise primeiro, e individualmente, quem está em
        atendimento. Depois mude o endereço onde as pessoas procuram você, na
        ordem em que elas procuram: Google, site, redes e WhatsApp. Por último,
        os papéis e os cadastros. Este guia traz um cronograma de oito semanas,
        modelos de aviso (fictícios, para adaptar) e o que muda quando a
        mudança é para outra cidade ou outro estado. Para quem ainda está
        montando o perfil no Google, o guia de{" "}
        <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
          Google Meu Negócio para psicólogo
        </Link>{" "}
        vem antes deste.
      </p>

      <section>
        <h2>O que dizem as normas sobre a mudança de consultório</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          não trata de mudança de endereço, mas dois pontos dele pesam aqui. O
          artigo 9º garante o sigilo, e isso inclui o fato de alguém ser
          atendido por você: um aviso em grupo expõe isso. E o artigo 20 vale
          para o aviso público da mudança, no Instagram ou no site, que é
          promoção dos serviços como qualquer outra.
        </p>
        <p>
          A{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>
          , que consolida as regras de registro, traz duas regras práticas. O
          artigo 38 pede que a pessoa jurídica registrada no CRP comunique
          qualquer alteração dos atos constitutivos, com o novo alvará ou CNPJ
          quando eles mudarem. O artigo 9º exige inscrição secundária para
          quem passa a exercer a profissão fora da jurisdição do CRP de
          inscrição principal, salvo atividade eventual, de menos de 90 dias
          por ano naquela região. Os procedimentos mudam de regional para
          regional, então confirme no portal do seu CRP.
        </p>
        <p>
          Por fim, a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          entra no envio dos avisos: a lista de contatos dos pacientes é um
          conjunto de dados pessoais ligado a um serviço de saúde, e o envio
          precisa ser feito sem expor um paciente a outro.
        </p>
      </section>

      <section>
        <h2>1. Monte o cronograma antes de contar para qualquer pessoa</h2>
        <p>
          Comece pela data da mudança e conte para trás. O que dá trabalho não
          é cada tarefa, é lembrar de todas na hora certa.
        </p>
        <ol>
          <li>
            <strong>8 semanas antes:</strong> confirme a data, encomende placa
            e papelaria novas, verifique se o novo espaço precisa de alvará ou
            licença da prefeitura.
          </li>
          <li>
            <strong>6 a 4 semanas antes:</strong> avise quem está em
            atendimento, um a um.
          </li>
          <li>
            <strong>2 semanas antes:</strong> prepare as atualizações de site,
            redes e WhatsApp; fotografe o novo espaço, se ele já estiver
            pronto.
          </li>
          <li>
            <strong>Na semana da mudança:</strong> troque o endereço no Google
            e publique o aviso no site e nas redes.
          </li>
          <li>
            <strong>Até 4 semanas depois:</strong> atualize cadastros, revise
            onde o endereço antigo ainda aparece e mantenha um aviso na porta
            antiga, se o proprietário permitir.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia que se mudaria
          em 1º de março listou num documento as 23 tarefas, cada uma com
          data. Na semana da mudança, só sobraram três: trocar o Google,
          publicar o aviso e levar a placa.
        </p>
        <p>
          <strong>Erro comum:</strong> trocar o endereço no Google semanas
          antes. Quem procura o consultório nesse intervalo vai para uma sala
          que ainda não funciona.
        </p>
      </section>

      <section>
        <h2>2. Avise quem está em atendimento, um por um</h2>
        <p>
          Quem está em atendimento merece saber por você, e antes de ver no
          Instagram. O aviso individual protege o sigilo e abre espaço para a
          pessoa reagir.
        </p>
        <ul>
          <li>
            <strong>Fale na sessão, quando fizer sentido.</strong> Para muitas
            pessoas, mudança de lugar mexe com a rotina e com o vínculo. Dizer
            em sessão dá espaço para isso.
          </li>
          <li>
            <strong>Confirme por escrito</strong>, com o novo endereço, a data
            a partir da qual vale e como chegar.
          </li>
          <li>
            <strong>Use canal individual:</strong> mensagem privada, lista de
            transmissão ou e-mail com os destinatários em cópia oculta. Nunca
            grupo.
          </li>
          <li>
            <strong>Ofereça alternativa</strong> para quem não consegue chegar
            ao novo endereço: horários diferentes, sessões online se for
            adequado, ou encaminhamento.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de mensagem:</em> “Olá, Marina. Como
          conversamos na sessão, a partir de 1º de março os atendimentos
          passam a ser na Rua Exemplo, 123, sala 45 (endereço fictício), a
          duas quadras da estação. O prédio tem elevador e estacionamento
          rotativo. Se o novo endereço dificultar seus horários, me avise que
          procuramos juntas uma solução.”
        </p>
        <p>
          <strong>Erro comum:</strong> mandar um e-mail com todos os
          endereços no campo “Para”. Num clique, cada paciente vê a lista dos
          outros. Se você usa WhatsApp Business, as listas de transmissão
          estão no guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Mude o endereço no Google na semana da mudança</h2>
        <p>
          O perfil no Google é, para muita gente, o primeiro lugar onde o
          endereço aparece. Trocá-lo na hora certa evita que alguém siga o
          mapa até a sala antiga.
        </p>
        <ol>
          <li>
            <strong>Edite o endereço</strong> nas informações do Perfil da
            Empresa. A{" "}
            <a href={GBP_EDITAR} {...ext}>
              ajuda do Google
            </a>{" "}
            avisa que, se a empresa mudar de endereço depois de verificada, é
            preciso verificar de novo, e que as alterações passam por revisão
            antes de aparecer.
          </li>
          <li>
            <strong>Siga as diretrizes</strong> do Google para o endereço:
            exato, com sala ou andar, sem palavra-chave no campo. As{" "}
            <a href={GBP_DIRETRIZES} {...ext}>
              diretrizes de representação da empresa
            </a>{" "}
            explicam o que é aceito.
          </li>
          <li>
            <strong>Troque as fotos</strong> da fachada e da recepção assim
            que o espaço novo estiver pronto, e retire as antigas que mostram
            o prédio anterior.
          </li>
          <li>
            <strong>Atualize horário e telefone</strong>, se mudarem junto.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício trocou o
          endereço numa segunda-feira, recebeu o pedido de nova verificação e
          deixou um aviso fixado nas atualizações do perfil durante o
          processo: “Desde 1º de março, atendemos na Rua Exemplo, 123.”
        </p>
        <p>
          <strong>Erro comum:</strong> criar um perfil novo para o novo
          endereço e deixar o antigo ativo. São duas fichas do mesmo
          consultório disputando a busca, e uma delas aponta para o lugar
          errado. Se as fotos do espaço novo ainda não existem, o guia de{" "}
          <Link href="/blog/fotos-do-consultorio-psicologia" className="inst-link">
            fotos do consultório de psicologia
          </Link>{" "}
          ajuda a planejar a sessão.
        </p>
      </section>

      <section>
        <h2>4. Atualize o site e mantenha nome, endereço e telefone iguais</h2>
        <p>
          Depois do Google, o site. O endereço precisa ser idêntico em todo
          lugar: mesma grafia, mesma sala, mesmo telefone. Essa coerência ajuda
          as pessoas e os buscadores a reconhecer que se trata do mesmo
          consultório.
        </p>
        <ul>
          <li>
            <strong>Rodapé, página de contato e mapa incorporado.</strong>{" "}
            São os três lugares mais esquecidos.
          </li>
          <li>
            <strong>Dados estruturados</strong> (o código que diz ao Google
            o endereço da empresa), se o seu site tiver. Quem fez o site sabe
            onde ficam.
          </li>
          <li>
            <strong>Página “Como chegar”</strong>, com transporte público,
            estacionamento, acessibilidade do prédio e uma foto da fachada.
          </li>
          <li>
            <strong>Aviso temporário</strong> no topo do site por um ou dois
            meses: “Novo endereço a partir de 1º de março.”
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia atualizou o
          rodapé e esqueceu o mapa da página de contato, que continuou
          mostrando o prédio antigo por três semanas. Um paciente novo foi ao
          endereço errado. Desde então, ela procura o endereço antigo no site
          inteiro antes de dar a mudança por encerrada.
        </p>
        <p>
          <strong>Erro comum:</strong> esquecer textos de blog e páginas de
          serviço que citam o bairro antigo. Uma busca pelo nome da rua antiga
          no site resolve. Se o site não deixa você mesma editar o endereço,
          vale ler o guia de{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Leve a mudança para redes, WhatsApp e diretórios</h2>
        <p>
          Redes e WhatsApp são onde o aviso público aparece. Ele pode ser
          simples e caloroso, sem virar promoção.
        </p>
        <ol>
          <li>
            <strong>Instagram:</strong> endereço na bio ou no botão de
            contato, um post com a fachada nova e um destaque “Como chegar”.
          </li>
          <li>
            <strong>WhatsApp Business:</strong> endereço no perfil e uma linha
            na mensagem de saudação durante as primeiras semanas.
          </li>
          <li>
            <strong>Diretórios e planos de saúde:</strong> se você aparece em
            listas de convênio, plataformas de agendamento ou associações,
            cada um tem o próprio processo de atualização.
          </li>
          <li>
            <strong>Assinatura de e-mail e documentos digitais</strong>, como
            modelos de recibo e de declaração.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de post:</em> “A partir de 1º de março,
          o consultório funciona na Rua Exemplo, 123, sala 45, em Campinas
          (endereço fictício). Prédio com elevador e a dez minutos da
          rodoviária. Os atendimentos online seguem iguais. Ana Ribeiro,
          psicóloga, CRP 00/00000.”
        </p>
        <p>
          <strong>Erro comum:</strong> transformar o aviso em oferta de
          “inauguração” com desconto ou sessão gratuita. O artigo 20 proíbe
          preço como propaganda, e isso inclui promoções de mudança. Um post
          com a fachada e as informações práticas já cumpre o papel.
        </p>
      </section>

      <section>
        <h2>6. Troque placa, cartão e papelaria sem desperdício</h2>
        <p>
          Os impressos são os últimos a mudar e os que mais duram com o
          endereço errado. Planeje a troca para não ficar com caixas de
          material inútil.
        </p>
        <ul>
          <li>
            <strong>Placa:</strong> confira as regras do condomínio e da
            prefeitura no endereço novo. O guia de{" "}
            <Link href="/blog/placa-consultorio-psicologia" className="inst-link">
              placa para consultório de psicologia
            </Link>{" "}
            lista o que entra nela.
          </li>
          <li>
            <strong>Cartão de visita e receituário:</strong> peça uma tiragem
            pequena, porque o endereço pode mudar de novo.
          </li>
          <li>
            <strong>Material de boas-vindas:</strong> se você entrega um guia
            para quem começa, ele precisa do novo endereço e das instruções de
            chegada.
          </li>
          <li>
            <strong>Material antigo:</strong> descarte o que tiver dados de
            pacientes com segurança, e não use etiqueta por cima do endereço
            antigo em documentos oficiais.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia aproveitou a
          mudança para tirar o endereço da frente do cartão de visita e
          colocar só um código para a página “Como chegar” do site. Na
          próxima mudança, só a página precisa mudar.
        </p>
        <p>
          <strong>Erro comum:</strong> esquecer o material que já está fora,
          como cartões deixados em escolas, pediatras ou parceiros. Mande os
          novos para quem indica você. O guia de{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria para consultório de psicologia
          </Link>{" "}
          ajuda a montar o kit enxuto.
        </p>
      </section>

      <section>
        <h2>7. Atualize os cadastros: CRP, prefeitura e Receita</h2>
        <p>
          Por último, a parte burocrática, que não aparece para o paciente mas
          aparece numa fiscalização. Faça a lista do seu caso, porque ela muda
          se você atende como pessoa física ou jurídica.
        </p>
        <ol>
          <li>
            <strong>CRP:</strong> atualize o seu cadastro pelo portal do
            regional. Se houver pessoa jurídica registrada, comunique a
            alteração dos atos constitutivos, como pede o art. 38 da Resolução
            CFP nº 3/2007.
          </li>
          <li>
            <strong>Prefeitura:</strong> alvará ou licença de funcionamento do
            novo endereço e, se for o caso, a inscrição municipal para emissão
            de notas.
          </li>
          <li>
            <strong>Receita Federal:</strong> para pessoa jurídica, a mudança
            de endereço passa pela alteração do contrato social e do CNPJ; quem
            cuida disso costuma ser a contabilidade.
          </li>
          <li>
            <strong>Planos de saúde e convênios:</strong> cada operadora tem um
            prazo e um formulário de atualização cadastral.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia com CNPJ deixou
          a alteração contratual com a contabilidade e, no mesmo dia, abriu o
          pedido de atualização no portal do CRP. Guardou os comprovantes numa
          pasta “Mudança 2027”.
        </p>
        <p>
          <strong>Erro comum:</strong> mudar de estado e continuar atendendo
          presencialmente sem inscrição secundária. Se a dúvida é sobre CNPJ e
          nome fantasia, o guia{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            psicólogo pode ter CNPJ e nome fantasia
          </Link>{" "}
          explica as opções.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na mudança de endereço do consultório</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao avisar a mudança de endereço do consultório de psicologia"
            tabIndex={0}
          >
            <caption>Mudança de endereço do consultório: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aviso a pacientes</td>
                <td>Conversa na sessão e mensagem individual</td>
                <td>Grupo de WhatsApp ou e-mail com todos visíveis</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Editar o endereço do perfil e refazer a verificação</td>
                <td>Criar um perfil novo e deixar o antigo ativo</td>
              </tr>
              <tr>
                <td>Aviso público</td>
                <td>Fachada, endereço, como chegar, nome e CRP</td>
                <td>“Inauguração com 30% de desconto”</td>
              </tr>
              <tr>
                <td>Site</td>
                <td>Endereço igual em rodapé, contato e mapa</td>
                <td>Mapa antigo esquecido na página de contato</td>
              </tr>
              <tr>
                <td>Papelaria</td>
                <td>Tiragem pequena, código para a página “Como chegar”</td>
                <td>Etiqueta por cima do endereço antigo em documentos</td>
              </tr>
              <tr>
                <td>Outro estado</td>
                <td>Inscrição secundária no CRP de destino</td>
                <td>Atender presencialmente sem ela</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Mudança para outra cidade ou para o atendimento online</h2>
        <p>
          Quando a mudança é para longe, a pergunta deixa de ser só “como
          avisar” e passa a ser “como continuar”. Para parte dos pacientes, o
          atendimento online pode ser uma ponte, desde que seja adequado ao
          caso. A{" "}
          <a href={TDICS} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          regula o atendimento mediado por tecnologias digitais e substituiu as
          regras anteriores; a decisão de seguir online continua sendo
          técnica, caso a caso. O
          guia de{" "}
          <Link href="/blog/psicologo-online-divulgacao" className="inst-link">
            psicólogo online e divulgação
          </Link>{" "}
          resume o que mudou.
        </p>
        <p>
          Para quem não pode seguir com você, encaminhamento com cuidado faz
          parte do encerramento: indique colegas, combine a transição e, se a
          pessoa autorizar, converse com quem vai receber o caso.
        </p>
        <p>
          No Google, a mudança de cidade costuma exigir mais do que editar o
          endereço: a categoria, a área atendida e as fotos mudam juntas, e a
          busca local recomeça do zero. No site, a página de contato e os
          textos que citam bairros e escolas da cidade antiga precisam de
          revisão. É um bom momento para rever o posicionamento inteiro.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para muitas crianças autistas, mudança de ambiente pesa mais do que
          para os adultos ao redor. A informação sobre o novo consultório,
          nesse caso, é parte do cuidado, e vale planejar a transição com a
          família.
        </p>
        <ul>
          <li>
            <strong>Avise mais cedo</strong> e combine com os pais como
            preparar a criança.
          </li>
          <li>
            <strong>Prepare um material visual</strong> do novo espaço, com
            fotos da fachada, da recepção, do corredor e da sala (sem pessoas),
            para a família ver em casa antes do primeiro dia.
          </li>
          <li>
            <strong>Descreva o caminho e os sons:</strong> elevador, porta com
            campainha, recepção compartilhada, barulho de rua.
          </li>
          <li>
            <strong>Ofereça uma visita curta</strong> antes da primeira sessão
            no espaço novo, se possível.
          </li>
        </ul>
        <p>
          Leve o que funcionava na sala antiga: objetos que a criança
          reconhece, a disposição dos móveis, a iluminação. O guia de{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>{" "}
          ajuda a montar o novo espaço pensando nisso, e o de{" "}
          <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
            manual de boas-vindas do consultório
          </Link>{" "}
          mostra como transformar essas informações num material para as
          famílias.
        </p>
      </section>

      <section>
        <h2>Erros comuns na mudança de endereço do consultório</h2>
        <ul>
          <li>Pacientes descobrirem a mudança pelo Instagram.</li>
          <li>Aviso por grupo ou e-mail com todos os contatos visíveis.</li>
          <li>Trocar o Google semanas antes ou criar um segundo perfil.</li>
          <li>Endereço com grafias diferentes no Google, no site e nas redes.</li>
          <li>Mapa antigo esquecido na página de contato.</li>
          <li>Promoção de “inauguração” com desconto ou gratuidade.</li>
          <li>Mudar de estado sem inscrição secundária no CRP.</li>
          <li>Esquecer convênios, diretórios e parceiros que indicam você.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da mudança de endereço</h2>
        <ul>
          <li>Cronograma de oito semanas com todas as tarefas datadas.</li>
          <li>Aviso individual a quem está em atendimento, 4 a 6 semanas antes.</li>
          <li>Endereço editado no Google na semana da mudança e nova verificação feita.</li>
          <li>Fotos antigas do perfil trocadas pelas do espaço novo.</li>
          <li>Site revisado: rodapé, contato, mapa, dados estruturados e textos.</li>
          <li>Instagram, WhatsApp, e-mail e diretórios atualizados.</li>
          <li>Placa, cartão e material de boas-vindas novos.</li>
          <li>CRP, prefeitura, Receita (se houver CNPJ) e convênios atualizados.</li>
          <li>Busca pelo nome da rua antiga em tudo o que você publica.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          papelaria e páginas pensadas para mudar sem retrabalho e cada texto
          revisado pelo art. 20. Tudo é apresentado em até 30 dias, com o site
          incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a mudança de consultório virou a hora de rever a marca, marque
          uma conversa de 15 minutos.
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
            <a href={RES3} {...ext}>
              Resolução CFP nº 3/2007 — Consolidação das Resoluções do CFP
            </a>
            , arts. 9º e 38.
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={TDICS} {...ext}>
              Resolução do CFP que disciplina o uso de tecnologias digitais
            </a>{" "}
            (Resolução CFP nº 9/2024).
          </li>
          <li>
            Google.{" "}
            <a href={GBP_EDITAR} {...ext}>
              Editar o Perfil da Empresa
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={GBP_DIRETRIZES} {...ext}>
              Diretrizes para representar sua empresa no Google
            </a>
            .
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
