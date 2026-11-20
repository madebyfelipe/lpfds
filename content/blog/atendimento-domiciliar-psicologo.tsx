import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES13 = "https://abmes.org.br/public/arquivos/legislacoes/Resolucao-CFP-013-2022-06-15.pdf";
const CRPSP_DOM = "https://www.crpsp.org/uploads/impresso/352789/aCbffM0t6IMmfbFGp64Ubmdm5DJwU-3F.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "atendimento-domiciliar-psicologo",
  title: "Atendimento domiciliar de psicólogo: quando faz sentido e como divulgar em 7 passos",
  description:
    "Atendimento domiciliar de psicólogo: o que o CRP-SP orienta, quando a casa é o setting certo, como explicar o serviço no site e como cuidar do sigilo.",
  keyword: "atendimento domiciliar psicólogo",
  tags: ["neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "O atendimento psicológico em casa é permitido quando há justificativa técnica, fundamentação teórica e consentimento da pessoa atendida ou, no caso de criança, de ao menos um responsável, segundo a orientação do CRP-SP. Para divulgar, explique para quem a modalidade serve e por quê, como funciona a primeira visita, a região atendida e como o sigilo é cuidado dentro da casa, sem prometer resultado e sem mostrar a família.",
  faq: [
    {
      q: "Psicólogo pode atender em domicílio?",
      a: "Pode. A orientação do CRP-SP sobre atendimento domiciliar diz que ele é uma estratégia possível desde que devidamente justificada e fundamentada teórica e tecnicamente, com consentimento da pessoa atendida (ou de ao menos um responsável, no caso de criança, adolescente ou interdito). Valem as mesmas regras de sigilo, qualidade e condições dignas de trabalho do consultório."
    },
    {
      q: "Quando o atendimento psicológico em casa é indicado?",
      a: "O CRP-SP cita como exemplo principal os casos de dificuldade ou impossibilidade de locomoção por questões de saúde, além de áreas em que ir até a pessoa faz parte do trabalho, como o acompanhamento terapêutico e a psicologia hospitalar e comunitária. Fora disso, a escolha precisa de uma justificativa técnica para aquele caso, e não só de conveniência."
    },
    {
      q: "Como garantir o sigilo no atendimento domiciliar?",
      a: "Combine antes com a família um cômodo com porta, um horário em que a conversa não será interrompida e quem pode ou não ficar por perto. A Resolução CFP nº 13/2022 pede que o espaço psicoterapêutico garanta o sigilo e a privacidade nas diversas modalidades. Se a casa não oferece essas condições, diga isso e proponha outra modalidade."
    },
    {
      q: "Posso cobrar deslocamento no atendimento domiciliar?",
      a: "Pode combinar o valor que inclui o deslocamento no contrato, por escrito e antes de começar. O que o art. 20 do Código de Ética veda é usar o preço como forma de propaganda, então nada de “visita grátis” ou “sem taxa de deslocamento” como chamariz no site ou nas redes."
    }
  ],
  cover: {
    src: "/blog/atendimento-domiciliar-psicologo/atendimento-domiciliar-psicologo-sala-com-sofa-e-plantas.jpg",
    alt: "Sala clara com sofá de linho bege, almofadas e vasos de plantas, sem pessoas",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mensagem chega pelo WhatsApp: “Meu filho não consegue entrar em
        consultório, a gente já tentou três vezes. Você atende em casa?” Você
        sabe que a casa pode ser o lugar certo para essa criança, mas não sabe
        se pode divulgar isso, como explicar no site e como cuidar do sigilo
        com a família toda por perto.
      </p>
      <p>
        A resposta curta: pode, quando há razão técnica. O Conselho Regional de
        Psicologia de São Paulo orienta que o atendimento domiciliar é uma
        estratégia possível desde que justificada, fundamentada e consentida.
        Na divulgação, você explica para quem a modalidade serve, como ela
        funciona e como o sigilo é preservado, sem prometer resultado e sem
        expor nenhuma família.
      </p>
      <p>
        Abaixo estão as normas, sete passos para montar a página do serviço,
        uma tabela do que pode e do que evitar e uma parte específica para
        quem atende crianças autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas sobre o atendimento domiciliar</h2>
        <p>
          A orientação mais direta é a{" "}
          <a href={CRPSP_DOM} {...ext}>
            série CRP SP Orienta sobre atendimento domiciliar e em contextos
            diversos
          </a>{" "}
          (janeiro de 2024). Ela diz que essas modalidades são possíveis
          “desde que devidamente justificadas, além de fundamentadas teórica e
          tecnicamente”, que cabe à psicóloga avaliar a demanda específica e
          que deve haver consentimento da pessoa atendida, ou de ao menos um
          dos responsáveis no caso de criança, adolescente ou interdito.
        </p>
        <p>
          O mesmo documento lista os cuidados: consentimento, garantia dos
          princípios éticos e técnicos, preservação do sigilo e da
          confidencialidade, qualidade do serviço e condições dignas e
          apropriadas à natureza do trabalho. Isso ecoa o art. 1º, c, do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          , que pede serviços de qualidade “em condições de trabalho dignas e
          apropriadas”.
        </p>
        <p>
          A{" "}
          <a href={RES13} {...ext}>
            Resolução CFP nº 13/2022
          </a>
          , sobre psicoterapia, completa: o espaço psicoterapêutico é o campo
          relacional, incluindo o ambiente, e deve garantir o sigilo e a
          privacidade “nas diversas modalidades previstas” (art. 15). Para
          criança e adolescente, o art. 12 exige autorização por escrito de ao
          menos um responsável antes de começar.
        </p>
        <p>
          Para a divulgação, valem as regras de sempre do art. 20 do Código:
          nome completo e CRP, só qualificações que você tem, nada de preço
          como propaganda, nada de previsão taxativa de resultados e nada de
          sensacionalismo.
        </p>
      </section>

      <section>
        <h2>1. Defina para quem a casa é o setting certo</h2>
        <p>
          Antes de divulgar, escreva para você mesma em que casos o atendimento
          em casa tem justificativa técnica. Essa definição vira o primeiro
          parágrafo da página do serviço e filtra os pedidos que chegam.
        </p>
        <ul>
          <li>
            Pessoas com dificuldade ou impossibilidade de locomoção, o exemplo
            que o próprio CRP-SP cita.
          </li>
          <li>
            Crianças para quem o deslocamento e o ambiente novo são, naquele
            momento, uma barreira importante, segundo a sua avaliação.
          </li>
          <li>
            Objetivos que dependem da rotina da casa, como orientar a família
            em situações do dia a dia, quando a sua abordagem fundamenta isso.
          </li>
          <li>
            Períodos de transição, com plano de migrar para o consultório ou
            para outra modalidade.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Atendo em casa quando
          o deslocamento ou o consultório são, por ora, uma barreira para a
          criança, ou quando o trabalho com a família pede a rotina real da
          casa. A indicação é feita depois de uma conversa inicial.”
        </p>
        <p>
          <strong>Erro comum:</strong> anunciar a modalidade como comodidade
          (“terapia sem sair do sofá”). Isso esvazia a justificativa técnica e
          atrai pedidos que caberiam melhor no consultório ou no online. Para
          pensar a quem você quer falar, veja o guia de{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher um nicho na psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>2. Explique a diferença para o acompanhamento terapêutico</h2>
        <p>
          Famílias costumam confundir atendimento domiciliar com acompanhamento
          terapêutico (AT). Diga com clareza o que você faz, porque a
          expectativa errada vira frustração na segunda visita.
        </p>
        <ol>
          <li>
            Descreva o seu trabalho com verbos concretos: avaliar, conversar,
            orientar a família, acompanhar o desenvolvimento.
          </li>
          <li>
            Diga a frequência e a duração típicas das visitas, sem prometer um
            número fixo de encontros.
          </li>
          <li>
            Explique se você circula com a criança fora de casa (escola, rua,
            parque) ou não. Se não, isso é AT e você pode indicar um colega.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> “O atendimento domiciliar é
          psicoterapia feita na casa da família, em horário combinado, com
          sessões semanais. Não acompanho a criança na escola ou em passeios;
          quando isso é indicado, oriento a família a buscar um acompanhante
          terapêutico.”
        </p>
        <p>
          <strong>Erro comum:</strong> aceitar tudo que a família pede porque
          você já está lá dentro (buscar na escola, ficar mais uma hora). O
          contrato perde a forma. Se você também faz AT, leia o guia de{" "}
          <Link href="/blog/acompanhante-terapeutico-divulgar" className="inst-link">
            divulgação do acompanhante terapêutico
          </Link>
          , que trata dessa modalidade em detalhe.
        </p>
      </section>

      <section>
        <h2>3. Monte a página do serviço</h2>
        <p>
          A modalidade merece uma página própria no site, com a palavra
          “domiciliar” ou “em casa” no título. É ela que aparece quando uma
          família busca “psicóloga que atende em casa” com o nome da cidade.
        </p>
        <ul>
          <li>
            <strong>Para quem é:</strong> o texto do passo 1.
          </li>
          <li>
            <strong>Como funciona:</strong> conversa inicial, primeira visita,
            frequência, duração.
          </li>
          <li>
            <strong>Onde atende:</strong> bairros ou região (passo 5).
          </li>
          <li>
            <strong>Sigilo e espaço:</strong> o que você combina com a família
            (passo 4).
          </li>
          <li>
            <strong>Quem atende:</strong> nome completo, CRP e formação
            relacionada.
          </li>
          <li>
            <strong>Contato:</strong> um botão claro, com mensagem pré-escrita
            neutra.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> título “Atendimento psicológico
          infantil em domicílio na Zona Oeste de São Paulo”, seguido de três
          parágrafos curtos e uma lista com as etapas.
        </p>
        <p>
          <strong>Erro comum:</strong> esconder a modalidade numa linha da
          página “Sobre”. Quem precisa dela não acha, e o Google não associa o
          site à busca. A estrutura completa está no guia de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços do psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Mostre como o sigilo é cuidado dentro da casa</h2>
        <p>
          Esta é a pergunta que a família nem sempre faz, mas que pesa na
          decisão: quem vai ouvir? Responda antes, na página e na conversa
          inicial.
        </p>
        <ol>
          <li>
            Peça um cômodo com porta e explique por quê, em linguagem simples.
          </li>
          <li>
            Combine quem fica em casa durante a sessão e quem participa de
            momentos com a família.
          </li>
          <li>
            Combine o que fazer com celulares, visitas e campainha.
          </li>
          <li>
            Diga o que acontece se as condições mínimas não existirem:
            reorganizar o horário ou mudar de modalidade.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Antes da primeira visita,
          combinamos um espaço com porta e um horário em que a conversa não seja
          interrompida. O que a criança fala em sessão fica entre nós; com os
          responsáveis, compartilho o que é essencial para cuidar dela.” A
          última frase traduz o art. 13 do Código de Ética.
        </p>
        <p>
          <strong>Erro comum:</strong> registrar a sessão no celular ou fazer
          anotações no sofá da sala, à vista de todos. Prontuário e anotações
          seguem as mesmas regras do consultório. Se a família perguntar sobre
          gravar, a resposta está no post sobre{" "}
          <Link href="/blog/psicologo-gravar-sessao" className="inst-link">
            gravação de sessão
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Diga onde você atende</h2>
        <p>
          No atendimento domiciliar, a região é parte do serviço. Diga os
          bairros ou o raio que você cobre, porque isso evita conversas que não
          vão acontecer e ajuda o Google a mostrar o site para quem está perto.
        </p>
        <ul>
          <li>Liste bairros ou regiões, não um raio em quilômetros que ninguém mede.</li>
          <li>
            No Perfil da Empresa no Google, configure uma área de atendimento
            em vez de mostrar o endereço de casa.
          </li>
          <li>
            Repita a região na página de contato e no rodapé, em uma frase
            natural.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Atendo em domicílio nos
          bairros de Pinheiros, Vila Madalena, Perdizes e arredores. Para outras
          regiões, converse comigo: posso indicar colegas.”
        </p>
        <p>
          <strong>Erro comum:</strong> mostrar o endereço residencial da
          psicóloga no Perfil da Empresa para “aparecer no mapa”. Além de
          expor você, contradiz o serviço. O guia do{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          mostra como configurar a área de atendimento.
        </p>
      </section>

      <section>
        <h2>6. Escreva o contrato antes da primeira visita</h2>
        <p>
          O atendimento em casa tem mais combinados do que o do consultório, e
          eles precisam estar no papel antes de você tocar a campainha. O
          contrato protege a família e você.
        </p>
        <ul>
          <li>Autorização por escrito de ao menos um responsável (Res. CFP 13/2022, art. 12).</li>
          <li>Valor, forma de pagamento e o que ele inclui, como o deslocamento.</li>
          <li>Faltas, atrasos e o que acontece se a família não estiver em casa.</li>
          <li>Condições do espaço e de sigilo, como no passo 4.</li>
          <li>Situações em que a modalidade pode mudar.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma cláusula diz que, se a
          família não estiver em casa no horário combinado e não tiver avisado
          com antecedência, a sessão segue a regra de falta do contrato. A
          família sabe disso desde o início.
        </p>
        <p>
          <strong>Erro comum:</strong> colocar o valor e a “isenção de taxa de
          deslocamento” no Instagram para atrair famílias. O art. 20, d, veda o
          preço como propaganda. Valor se conversa no contato e se registra no
          contrato. O guia de{" "}
          <Link href="/blog/contrato-terapeutico-psicologo" className="inst-link">
            contrato terapêutico
          </Link>{" "}
          traz as cláusulas comuns.
        </p>
      </section>

      <section>
        <h2>7. Divulgue sem expor a família</h2>
        <p>
          A casa da família não aparece em lugar nenhum: nem em foto, nem em
          vídeo, nem em história “anônima” que a vizinhança reconheceria. A
          divulgação fala da modalidade, não de quem você atende.
        </p>
        <ol>
          <li>
            Use imagens do seu material de trabalho em cima da sua mesa, nunca
            da casa de um paciente.
          </li>
          <li>
            Escreva conteúdos sobre perguntas reais: “como preparar a casa para
            a primeira visita”, “quem participa da sessão”.
          </li>
          <li>
            Fale da formação que fundamenta a modalidade, sem adjetivos.
          </li>
          <li>
            Avise colegas e escolas de que você faz atendimento domiciliar e em
            quais casos, para que indiquem com critério.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> um carrossel com “4 combinados
          antes da primeira sessão em casa”, ilustrado com ícones, sem nenhuma
          foto de ambiente doméstico.
        </p>
        <p>
          <strong>Erro comum:</strong> postar o “bastidor” do carro a caminho
          de uma visita com a localização ligada ou o nome do bairro e do
          prédio. Detalhes pequenos identificam famílias. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          lembra que perfis em que você se apresenta como psicóloga respondem
          eticamente pelo conteúdo, mesmo os pessoais.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação do atendimento domiciliar</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao divulgar atendimento psicológico domiciliar"
            tabIndex={0}
          >
            <caption>Atendimento domiciliar de psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indicação</td>
                <td>Explicar em que casos a casa é o setting indicado</td>
                <td>Vender a modalidade como comodidade</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>Combinar valor e deslocamento no contrato</td>
                <td>“Sem taxa de deslocamento” como chamariz</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Objetos de trabalho na sua mesa, ícones</td>
                <td>Fotos ou vídeos da casa de uma família</td>
              </tr>
              <tr>
                <td>Região</td>
                <td>Bairros atendidos e área de atendimento no Google</td>
                <td>Endereço residencial exposto no mapa</td>
              </tr>
              <tr>
                <td>Resultados</td>
                <td>Descrever como o trabalho acontece</td>
                <td>Prometer evolução por estar no ambiente da criança</td>
              </tr>
              <tr>
                <td>Bastidores</td>
                <td>Rotina de estudo e preparo, sem lugar nem nome</td>
                <td>Stories com localização ou fachada de prédio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já atende em casa: organizar a agenda e a rede</h2>
        <p>
          Quando a modalidade já funciona, o desafio passa a ser logístico.
          Agrupe as visitas por região em dias fixos, para que o tempo de
          deslocamento não engula a agenda e para que a família saiba o seu
          dia. Deixe um intervalo entre visitas para registrar o prontuário
          num lugar reservado, não dentro do carro na frente da casa.
        </p>
        <p>
          Organize também a rede. A família de uma criança atendida em casa
          costuma conversar com a escola, o pediatra, a fonoaudióloga e a
          terapeuta ocupacional. Defina com os responsáveis o que pode ser
          compartilhado e com quem, lembrando que o art. 6º, b, do Código de
          Ética pede que se compartilhe só o que é relevante para qualificar o
          serviço. Para a parceria com médicos, veja{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria entre psicólogo e pediatra
          </Link>
          . E tenha à mão uma lista de colegas para indicar quando a região, a
          demanda ou a sua agenda não comportam o pedido. O post sobre{" "}
          <Link href="/blog/indicacao-entre-psicologos" className="inst-link">
            indicação entre psicólogos
          </Link>{" "}
          mostra como montar essa rede.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Muitas famílias procuram atendimento em casa porque o consultório,
          por enquanto, é difícil para a criança: o trajeto, a sala de espera,
          os barulhos, a mudança de rotina. A sua página precisa acolher esse
          motivo sem transformar a casa em promessa.
        </p>
        <ul>
          <li>
            Explique que a indicação é avaliada caso a caso e pode mudar ao
            longo do tempo.
          </li>
          <li>
            Diga como você se prepara para a primeira visita: perguntar à
            família sobre sensibilidades, objetos de interesse, horários em que
            a criança está mais disponível.
          </li>
          <li>
            Fale do trabalho com os responsáveis, que estão ali e costumam
            participar de parte dos encontros.
          </li>
          <li>
            Use linguagem que respeite a criança: “criança autista” ou “criança
            com autismo”, conforme a preferência da família, e nada de “sofre
            de autismo”.
          </li>
          <li>
            Se você também atende no consultório, mostre como ele foi pensado
            para reduzir estímulos, para a família saber que existe uma
            transição possível.
          </li>
        </ul>
        <p>
          Evite frases como “no ambiente dela, a criança evolui mais rápido”.
          Pode ser a sua experiência clínica, mas na divulgação vira previsão
          de resultado. Prefira descrever o que você faz. Para o tom, veja o
          guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          e, para o espaço do consultório, o de{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Oferecer atendimento em casa sem justificativa técnica para o caso.</li>
          <li>Começar sem autorização por escrito do responsável.</li>
          <li>Aceitar atender na sala, com a família circulando.</li>
          <li>Anunciar preço ou isenção de deslocamento como chamariz.</li>
          <li>Postar imagens, bairros ou fachadas que identificam famílias.</li>
          <li>Confundir o serviço com acompanhamento terapêutico e não dizer o que você faz.</li>
          <li>Prometer que o ambiente de casa acelera resultados.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do atendimento domiciliar</h2>
        <ul>
          <li>Critérios de indicação escritos para você mesma.</li>
          <li>Página própria do serviço, com “domiciliar” ou “em casa” no título.</li>
          <li>Diferença para o AT explicada em uma frase.</li>
          <li>Combinados de sigilo e espaço na página e no contrato.</li>
          <li>Bairros atendidos listados; endereço residencial fora do mapa.</li>
          <li>Autorização por escrito de responsável antes da primeira visita.</li>
          <li>Nome completo e CRP em todas as peças.</li>
          <li>Nenhuma foto de casa, família ou criança.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com uma
          página clara para cada modalidade de atendimento e cada texto
          revisado pelo art. 20. Tudo é apresentado em até 30 dias, com o site
          incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer explicar o atendimento em casa com segurança, marque
          uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={CRPSP_DOM} {...ext}>
              Série CRP SP Orienta: atendimento domiciliar e em contextos
              diversos
            </a>{" "}
            (janeiro de 2024).
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 1º (c), 6º (b), 13 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022 — diretrizes e deveres para o exercício
              da psicoterapia
            </a>{" "}
            (DOU de 21/06/2022, cópia da ABMES), arts. 12 e 15.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
