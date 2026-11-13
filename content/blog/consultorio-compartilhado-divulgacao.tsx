import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const GBP = "https://support.google.com/business/answer/3038177?hl=pt-BR";

export const post: Post = {
  slug: "consultorio-compartilhado-divulgacao",
  title: "Consultório compartilhado ou sala por hora: como o psicólogo divulga sem confundir a marca",
  description:
    "Atende em consultório compartilhado ou sala por hora? Como divulgar com marca própria, endereço, Google e redes, sem misturar com o espaço e dentro do art. 20.",
  keyword: "consultório compartilhado psicólogo",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-14",
  summary:
    "Quem atende em consultório compartilhado ou aluga sala por hora pode e deve ter marca própria. O espaço é o lugar onde você atende, não a sua marca: na divulgação entram o seu nome completo, CRP e serviços (art. 20 do Código de Ética), e o nome do espaço aparece só como endereço. No Google, as diretrizes do Perfil da Empresa permitem perfil próprio para profissional liberal em local compartilhado, com o título só com o seu nome.",
  faq: [
    {
      q: "Psicólogo que aluga sala por hora pode colocar o endereço na divulgação?",
      a: "Pode, se você realmente atende ali nos horários divulgados. A cartilha do CRP-MG diz que a divulgação pode trazer local de trabalho, endereço e contato. Deixe claro os dias de atendimento presencial, para que ninguém apareça num horário em que a sala é de outro profissional."
    },
    {
      q: "Posso criar Perfil da Empresa no Google atendendo em consultório compartilhado?",
      a: "As diretrizes do Google permitem perfil próprio para profissional liberal que atende o público e pode ser encontrado no local nos horários indicados. Quando vários profissionais dividem o local, o título do seu perfil leva só o seu nome, sem o nome do espaço, e o espaço pode ter um perfil separado. Em coworking, o Google exige sinalização clara, atendimento no local e equipe no horário de funcionamento."
    },
    {
      q: "Posso usar o nome e o logo do espaço compartilhado na minha divulgação?",
      a: "Pode citar o nome do espaço como endereço (“atendo no Espaço X, sala 3”), mas evite usar o logo como se fosse a sua marca ou sugerir que você é dona do espaço ou que integra uma clínica, se não integra. Se o espaço tem regras próprias de uso da marca, siga o contrato."
    },
    {
      q: "Atendo em dois consultórios compartilhados. Como divulgo?",
      a: "Uma marca, dois endereços. No site, uma página de contato com os dois locais e os dias de cada um; no Google, avalie se faz sentido um perfil por local em que você é encontrado nos horários indicados. Nas redes e no cartão, priorize o seu nome e o site, que centraliza os endereços."
    }
  ],
  cover: {
    src: "/blog/consultorio-compartilhado-divulgacao/consultorio-compartilhado-divulgacao-sala-escritorio.jpg",
    alt: "Sala compartilhada com parede de tijolos, cadeiras pretas, mesa de trabalho e plantas, sem pessoas",
    caption: "Foto: DC Studio / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muitas psicólogas começam alugando sala por hora ou dividindo um
        consultório com colegas. Faz sentido: custo menor, espaço montado,
        recepção às vezes incluída. O problema aparece na hora de divulgar. A
        bio do Instagram leva o nome do espaço, o Google mostra a foto da
        fachada com o logo de outra pessoa, e a família que chega não sabe se
        procura a psicóloga ou “a clínica”.
      </p>
      <p>
        A resposta curta: o espaço compartilhado é onde você atende; a marca é
        sua. Na divulgação, entram o seu nome completo, CRP e serviços, e o
        espaço aparece como endereço. Abaixo estão o que dizem as normas, como
        separar a sua marca da do espaço, como montar o Google, o site e as
        redes, o que combinar com os colegas e uma parte para quem atende
        famílias de crianças neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          vale para a divulgação “individual ou coletivamente”: nome completo,
          CRP e número, só títulos que você tem, nada de preço como propaganda
          e nada de autopromoção em detrimento de outros profissionais. O art.
          1º, alínea c, pede serviços prestados “em condições de trabalho
          dignas e apropriadas”, e o art. 9º protege o sigilo, o que no espaço
          compartilhado inclui o isolamento acústico da sala e a guarda de
          documentos.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          diz que a divulgação pode trazer “informações sobre a empresa ou local
          de trabalho, cargo, endereço e informações de contato”. Ela também
          lembra que a publicidade com nome de empresa (razão social ou nome
          fantasia) cabe à pessoa jurídica registrada no CRP, com responsável
          técnico. Ou seja: se o espaço compartilhado não é a sua pessoa
          jurídica, ele não é a sua marca. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          reforça que logomarca precisa estar vinculada ao nome completo e ao
          CRP da profissional.
        </p>
      </section>

      <section>
        <h2>Por que a marca não pode ser o espaço</h2>
        <p>
          Porque o espaço muda e você fica. Contratos de sublocação acabam, o
          valor sobe, a agenda de salas muda. Se as famílias conhecem você como
          “a psicóloga do Espaço X”, cada mudança de endereço apaga parte do
          reconhecimento.
        </p>
        <ol>
          <li>
            <strong>Confusão de quem atende.</strong> A família liga para a
            recepção do espaço e pede “a psicóloga das crianças”. Se houver
            duas, alguém perde o contato.
          </li>
          <li>
            <strong>Confusão de responsabilidade.</strong> Usar o logo do
            espaço pode dar a impressão de que você integra uma clínica, com
            equipe e responsável técnico, quando não integra.
          </li>
          <li>
            <strong>Perda de histórico.</strong> Avaliações, links e buscas
            ficam presos a um nome que não é seu.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga atendeu três anos num
          espaço chamado “Casa Ipê” e usava o nome na bio e no cartão. Quando
          mudou de bairro, as famílias novas continuavam ligando para a Casa
          Ipê, que já tinha outra psicóloga infantil.
        </p>
        <p>
          <strong>Erro comum:</strong> achar que marca própria é só para quem
          tem consultório próprio. Ela é ainda mais importante para quem não
          tem. O post sobre{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>{" "}
          explica o que entra nessa marca.
        </p>
      </section>

      <section>
        <h2>Como separar a sua marca da do espaço</h2>
        <p>
          A regra prática: o seu nome vem primeiro, o espaço vem como endereço.
          Em qualquer peça, quem lê precisa entender em segundos quem atende e
          onde.
        </p>
        <ul>
          <li>
            <strong>Identidade visual própria:</strong> suas cores, seu logo ou
            sua assinatura tipográfica, aplicados em cartão, site e redes.
          </li>
          <li>
            <strong>Fórmula de endereço:</strong> “Atendimento presencial no
            Espaço X, Rua Y, 100, sala 3, às terças e quintas”.
          </li>
          <li>
            <strong>Sem o logo do espaço nas suas peças</strong>, a não ser que o
            contrato peça ou permita, e sempre como local.
          </li>
          <li>
            <strong>Contato seu:</strong> o seu WhatsApp e o seu e-mail, não o
            da recepção, salvo se a recepção agenda para você.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> no cartão, “Ana Souza · Psicóloga · CRP
          00/00000” em destaque e, no verso, “Atendo no Espaço Aurora, Rua das
          Flores, 120, sala 4”.
        </p>
        <p>
          <strong>Erro comum:</strong> criar um nome fantasia parecido com o do
          espaço para “combinar”. Se você quer um nome de consultório, ele
          precisa ser seu e ter base jurídica; veja{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            psicólogo com CNPJ e nome fantasia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Google: Perfil da Empresa em local compartilhado</h2>
        <p>
          O Google permite perfil próprio para profissional liberal em local
          compartilhado, com condições. As{" "}
          <a href={GBP} {...ext}>
            diretrizes para representar a empresa no Google
          </a>{" "}
          dizem que o profissional liberal pode ter perfil exclusivo se
          trabalha com o público e pode ser contatado diretamente no local
          verificado durante o horário indicado.
        </p>
        <ol>
          <li>
            <strong>Título só com o seu nome.</strong> Quando vários
            profissionais liberais dividem o local, o título do seu perfil leva
            só o seu nome, sem o nome da organização, e o espaço pode ter um
            perfil próprio.
          </li>
          <li>
            <strong>Um perfil por pessoa.</strong> O Google não aceita vários
            perfis para cada especialização da mesma profissional.
          </li>
          <li>
            <strong>Horários reais.</strong> Coloque só os horários em que você
            está no local. Quem aluga sala por hora não deve marcar “aberto”
            nos dias em que não atende ali.
          </li>
          <li>
            <strong>Coworking com regra própria.</strong> O Google só aceita
            perfis em coworking com sinalização clara, atendimento no local e
            equipe durante o horário de funcionamento. Endereço virtual não
            qualifica.
          </li>
        </ol>
        <p>
          <strong>Erro comum:</strong> pôr “Psicóloga Infantil Ana Souza –
          Espaço Aurora” no título. Palavra-chave e nome do espaço no título
          contrariam as diretrizes. O post sobre{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          mostra o resto da configuração.
        </p>
      </section>

      <section>
        <h2>Site e redes: onde o espaço aparece</h2>
        <p>
          No site e nas redes, o espaço aparece em um lugar só: no endereço.
          Todo o resto fala de você, do seu público e dos seus serviços.
        </p>
        <ul>
          <li>
            <strong>Página de contato:</strong> endereço completo, sala, dias e
            horários presenciais, mapa e instruções de chegada (recepção,
            interfone, estacionamento).
          </li>
          <li>
            <strong>Fotos:</strong> use fotos da sala em que você atende, sem
            pacientes, e evite que o logo do espaço domine a imagem. Se a sala
            muda a cada dia, prefira fotos de detalhes neutros ou da fachada.
          </li>
          <li>
            <strong>Bio do Instagram:</strong> nome, psicóloga, CRP, público e
            link. A cidade ou o bairro bastam; o nome do espaço pode ficar no
            link.
          </li>
          <li>
            <strong>Atendimento online:</strong> se você também atende online,
            diga isso. Muitas vezes o online é o que dá continuidade quando o
            espaço muda.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga que atende em dois
          espaços tem uma única página “Onde atendo” no site, com os dois
          endereços e os dias de cada um. No Instagram, o link leva para essa
          página.
        </p>
        <p>
          <strong>Erro comum:</strong> postar fotos de salas diferentes sem
          explicar, o que confunde a família. Veja como escolher imagens no post
          sobre{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Recepção, placa e identificação no local</h2>
        <p>
          No espaço compartilhado, a experiência começa na porta. A família
          precisa encontrar você sem perguntar três vezes.
        </p>
        <ol>
          <li>
            <strong>Placa ou identificação na porta da sala</strong>, mesmo que
            removível, com nome, psicóloga e CRP nos seus horários.
          </li>
          <li>
            <strong>Recepção informada:</strong> se o espaço tem recepção,
            combine como ela se refere a você e o que diz por telefone.
          </li>
          <li>
            <strong>Material próprio na recepção</strong>, se for permitido:
            cartão ou folheto com a sua marca.
          </li>
          <li>
            <strong>Sigilo na recepção:</strong> agenda e nomes dos pacientes
            não ficam à vista de outros profissionais ou clientes do espaço.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga leva uma pequena placa
          imantada com seu nome e CRP e a coloca na porta da sala nos dias de
          atendimento.
        </p>
        <p>
          <strong>Erro comum:</strong> confiar que a placa geral do prédio
          resolve. Ela tem regras próprias; o post sobre{" "}
          <Link href="/blog/placa-consultorio-psicologia" className="inst-link">
            placa para consultório de psicologia
          </Link>{" "}
          trata do que colocar em cada situação.
        </p>
      </section>

      <section>
        <h2>O que combinar com o espaço e com os colegas</h2>
        <p>
          Muitos conflitos de divulgação se resolvem no contrato de sublocação.
          Antes de divulgar, alinhe por escrito o que pode e o que não pode.
        </p>
        <ul>
          <li>Se você pode usar o nome e o endereço do espaço na divulgação.</li>
          <li>Se pode fotografar a sala e a fachada.</li>
          <li>Se o espaço divulga você nas redes dele, e como (sempre com nome e CRP).</li>
          <li>Quem agenda e quem atende o telefone.</li>
          <li>Como ficam isolamento acústico, guarda de prontuários e material de atendimento.</li>
        </ul>
        <p>
          O aluguel precisa ser um valor fixo pelo uso do espaço. Se o espaço
          propõe cobrar porcentagem sobre pacientes que ele encaminha, isso
          esbarra no art. 2º, alínea p, que proíbe pagar ou receber
          remuneração por encaminhamento.
        </p>
        <p>
          <strong>Erro comum:</strong> o espaço anunciar “nossas psicólogas”
          com preço promocional. Mesmo que a peça seja do espaço, o seu nome
          está nela. Peça que siga o art. 20 ou que retire o seu nome.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação em espaço compartilhado</h2>
        <div className="inst-blog__table" role="region" aria-label="Consultório compartilhado: o que o psicólogo pode e o que deve evitar na divulgação" tabIndex={0}>
          <table>
            <caption>Consultório compartilhado: o que o psicólogo pode e o que deve evitar na divulgação</caption>
            <thead>
              <tr>
                <th scope="col">Ponto</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marca</td>
                <td>Nome completo, CRP e identidade visual próprios</td>
                <td>Usar o logo do espaço como se fosse a sua marca</td>
              </tr>
              <tr>
                <td>Endereço</td>
                <td>Nome do espaço como local, com sala, dias e horários</td>
                <td>Sugerir que integra uma clínica que não é sua</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Perfil com título só com o seu nome e horários reais</td>
                <td>Nome do espaço ou palavra-chave no título</td>
              </tr>
              <tr>
                <td>Divulgação do espaço</td>
                <td>Ser citada com nome e CRP, sem preço</td>
                <td>Aparecer em anúncio com preço promocional</td>
              </tr>
              <tr>
                <td>Aluguel</td>
                <td>Valor fixo pelo uso da sala</td>
                <td>Porcentagem sobre pacientes encaminhados pelo espaço</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Quando faz sentido ir para um consultório próprio ou uma clínica</h2>
        <p>
          Quem já tem marca própria e agenda estável pode avaliar dois
          caminhos. O primeiro é a sala exclusiva, que permite identidade no
          espaço (cores, objetos, placa fixa) e simplifica Google e endereço. O
          segundo é formar uma clínica com colegas, com pessoa jurídica
          registrada no CRP e responsável técnico, como lembra a cartilha do
          CRP-MG.
        </p>
        <p>
          Na clínica, a marca passa a ser coletiva e cada profissional continua
          identificado com nome e CRP. É uma decisão de posicionamento, não só
          de custo. Se o caminho é esse, o post sobre{" "}
          <Link href="/blog/site-para-clinica-de-psicologia" className="inst-link">
            site para clínica de psicologia
          </Link>{" "}
          mostra como organizar equipe e páginas. Se a dúvida é se a marca
          atual aguenta a mudança, veja{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding de consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para crianças autistas e neurodivergentes, mudança de ambiente pode
          pesar. Em espaço compartilhado, a sala pode variar de um dia para o
          outro, com móveis, luz e cheiros diferentes. A comunicação da marca
          pode reduzir parte disso.
        </p>
        <ul>
          <li>
            <strong>Prefira a mesma sala.</strong> Se possível, combine com o
            espaço uma sala fixa nos seus horários de atendimento infantil.
          </li>
          <li>
            <strong>Mostre o caminho antes.</strong> Fotos da entrada, da
            recepção e da sala (vazias) no site ou num material enviado aos
            pais ajudam a antecipar.
          </li>
          <li>
            <strong>Descreva o ambiente com honestidade.</strong> Se a recepção
            é compartilhada e pode ter barulho, diga isso e ofereça
            alternativas, como entrar direto na sala.
          </li>
          <li>
            <strong>Leve o que é seu.</strong> Uma caixa com materiais que a
            criança reconhece dá continuidade mesmo quando a sala muda.
          </li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório sensorialmente acessível
          </Link>{" "}
          traz ajustes que cabem também em sala alugada, e o de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>{" "}
          ajuda a comunicar com as famílias.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Bio, cartão e Google com o nome do espaço em vez do seu.</li>
          <li>Logo do espaço nas suas peças, sugerindo vínculo que não existe.</li>
          <li>Horários no Google que não batem com os dias em que você está lá.</li>
          <li>Fotos de salas diferentes sem explicação.</li>
          <li>Aparecer em anúncio do espaço com preço.</li>
          <li>Aluguel atrelado a pacientes encaminhados.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do consultório compartilhado</h2>
        <ul>
          <li>Marca própria: nome completo, CRP, identidade visual.</li>
          <li>Fórmula de endereço com espaço, sala, dias e horários.</li>
          <li>Perfil da Empresa com título só com o seu nome.</li>
          <li>Página “Onde atendo” no site.</li>
          <li>Identificação na porta da sala nos seus horários.</li>
          <li>Combinados de divulgação, fotos e sigilo no contrato.</li>
          <li>Aluguel fixo, sem porcentagem por encaminhamento.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros define com você o
          posicionamento e a identidade visual do consultório, pensada para
          funcionar em sala própria, compartilhada ou online. Tudo é apresentado em até 30 dias, com site, Google e peças revisados pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você atende em espaço compartilhado e quer uma marca que vá com
          você para onde for, marque uma conversa de 15 minutos.
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
            , arts. 1º (alínea c), 2º (alínea p), 9º e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (local de trabalho e endereço; pessoa jurídica e
            clínicas).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            (logomarca vinculada a nome completo e CRP).
          </li>
          <li>
            Google.{" "}
            <a href={GBP} {...ext}>
              Diretrizes para representar sua empresa no Google
            </a>{" "}
            (profissionais liberais, vários profissionais no mesmo local e
            coworking).
          </li>
        </ul>
      </section>
    </>
  )
};
