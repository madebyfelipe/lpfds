import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const CDC = "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm";
const GOOGLE_UTIL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";

export const post: Post = {
  slug: "pagina-de-servicos-psicologo",
  title: "Página de serviços do site de psicólogo: como descrever cada atendimento em 7 passos",
  description:
    "Como escrever a página de serviços do site da psicóloga: o que dizer de cada atendimento, para quem é, como funciona, e o que o art. 20 não permite.",
  keyword: "página de serviços psicólogo",
  tags: ["presenca-digital"],
  publishedAt: "2026-11-14",
  summary:
    "A página de serviços do site de psicóloga responde, para cada atendimento, a quatro perguntas: o que é, para quem é, como funciona e qual é o próximo passo. O art. 20 do Código de Ética define o limite: nome completo e CRP, só técnicas reconhecidas, nada de preço como propaganda e nada de previsão de resultado. Uma seção por atendimento, em linguagem de quem procura ajuda, funciona melhor do que uma lista de abordagens.",
  faq: [
    {
      q: "O que colocar na página de serviços do site de psicólogo?",
      a: "Para cada atendimento: o nome em linguagem simples, para quem ele é, como funciona na prática (formato, duração aproximada da sessão, presencial ou online, primeiro contato) e o próximo passo. Junto, o nome completo, a palavra psicóloga e o CRP, que o art. 20 do Código de Ética exige em toda divulgação."
    },
    {
      q: "Posso colocar o valor da sessão na página de serviços?",
      a: "O art. 20, alínea d, veda usar o preço como forma de propaganda, e a Nota Técnica CFP 1/2022 cita termos como preço social, desconto e valor acessível. A cartilha do CRP-MG lembra que, quando o serviço é contratado só pela internet, o consumidor tem direito de saber o valor antes de comprar. Fora desse caso, o mais seguro é informar o valor no primeiro contato, sem destacá-lo como chamariz."
    },
    {
      q: "É melhor uma página para todos os serviços ou uma página para cada um?",
      a: "Depende de quantos atendimentos você oferece e de quanto há para dizer sobre cada um. Com dois ou três serviços, uma página com uma seção por atendimento resolve. Quando cada serviço tem público, processo e dúvidas próprias, como avaliação neuropsicológica e psicoterapia infantil, páginas separadas ajudam o leitor e a busca do Google."
    },
    {
      q: "Posso listar as técnicas e abordagens que uso?",
      a: "Pode, desde que sejam reconhecidas pela Psicologia, como pede o art. 20, alínea c. A Nota Técnica CFP 1/2022 permite destacar a formação, o público atendido, a abordagem teórica e a metodologia de trabalho. O cuidado é não transformar a página numa lista de siglas: explique em uma frase o que a abordagem significa para quem vai ser atendido."
    },
    {
      q: "Como descrever atendimento online na página de serviços?",
      a: "Diga que o atendimento é online, por qual tipo de plataforma, o que a pessoa precisa ter (lugar reservado, conexão estável) e como fica o sigilo. A Resolução CFP 9/2024 regula o atendimento mediado por tecnologias e substituiu a Resolução 11/2018; o cadastro no e-Psi deixou de existir."
    }
  ],
  cover: {
    src: "/blog/pagina-de-servicos-psicologo/pagina-de-servicos-psicologo-pagina-de-servicos-laptop-mesa.jpg",
    alt: "Notebook aberto com a tela em branco sobre mesa de madeira, ao lado de uma xícara de café",
    caption: "Foto: jannoon028 / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Quem chega à página de serviços do seu site já passou da curiosidade. A
        pessoa leu a home, talvez a página sobre você, e agora quer saber uma
        coisa só: “isso é para mim?”. Em muitos sites de psicólogas, a resposta
        que ela encontra é uma lista de abordagens (“TCC, ACT, psicanálise”) ou
        de palavras soltas (“ansiedade, depressão, autoestima”). Ela não entende
        como o atendimento funciona, não sabe se a psicóloga atende o filho dela
        e fecha a aba.
      </p>
      <p>
        A resposta curta: cada atendimento precisa de uma seção que diga o que
        é, para quem é, como funciona e qual é o próximo passo, escrita com as
        palavras de quem procura ajuda. O limite vem do art. 20 do Código de
        Ética: identificação completa, só técnicas reconhecidas, nada de preço
        como propaganda e nada de promessa de resultado. Abaixo estão as normas,
        os sete passos para escrever a página, um modelo fictício, a tabela do
        que pode e do que evitar e uma parte para quem atende famílias de
        crianças autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          trata de toda divulgação no art. 20. Ao promover seus serviços “por
          quaisquer meios”, a psicóloga informa nome completo, CRP e número de
          registro; cita só títulos que possui; divulga só técnicas e práticas
          reconhecidas ou regulamentadas pela profissão; não usa o preço como
          propaganda; não faz previsão taxativa de resultados; não se promove em
          detrimento de colegas e não faz divulgação sensacionalista. O site é um
          desses meios, e a página de serviços é a parte dele que mais se parece
          com publicidade.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          diz o que pode ser destacado: “sua formação, o público que atendem, a
          abordagem teórica que utilizam, sua metodologia de trabalho, entre
          outras questões técnicas”. Ela também lista termos que não devem
          aparecer, como preço social, desconto, pacote promocional e valor
          acessível, e lembra que a psicóloga responde pelo conteúdo mesmo quando
          uma agência ou designer escreve o texto. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          acrescenta um ponto útil: quando o serviço é contratado só pela
          internet, o Código de Defesa do Consumidor pede que o valor seja
          informado antes da compra.
        </p>
      </section>

      <section>
        <h2>Passo 1: liste os atendimentos como o paciente os chamaria</h2>
        <p>
          Comece pela lista de atendimentos reais, com o nome que a pessoa usaria
          para procurá-los. “Psicoterapia infantil” é mais claro do que
          “intervenção clínica com base em análise do comportamento”; “orientação
          para pais” é mais claro do que “manejo parental”.
        </p>
        <ol>
          <li>Anote tudo o que você faz hoje e o que pretende oferecer nos próximos meses.</li>
          <li>Junte o que é a mesma coisa com nomes diferentes.</li>
          <li>Escreva cada item como a família ou o adulto falaria numa busca ou numa mensagem.</li>
          <li>Deixe fora o que você faz raramente: a página mostra o centro da sua prática.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma psicóloga fictícia que atende
          crianças chegou a esta lista: psicoterapia infantil, orientação para
          pais, avaliação psicológica e devolutiva para a escola, com
          autorização dos responsáveis. Quatro itens, cada um com uma seção.
        </p>
        <p>
          <strong>Erro comum:</strong> usar a abordagem como nome do serviço.
          A abordagem explica como você trabalha; o serviço é o que a pessoa
          contrata. Se ainda não está claro para quem você fala, o post sobre{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher um nicho na psicologia
          </Link>{" "}
          ajuda a decidir antes de escrever.
        </p>
      </section>

      <section>
        <h2>Passo 2: diga para quem é cada atendimento</h2>
        <p>
          A frase mais lida de cada seção é a que diz para quem o atendimento
          serve. Ela permite que a pessoa se reconheça em segundos, sem precisar
          de diagnóstico nem de termo técnico.
        </p>
        <ul>
          <li><strong>Idade ou fase:</strong> crianças de 4 a 11 anos, adolescentes, adultos.</li>
          <li><strong>Situação que leva à procura:</strong> mudanças de escola, separação dos pais, dificuldade para dormir, preocupação com o desenvolvimento.</li>
          <li><strong>Quem faz o contato:</strong> no atendimento infantil, quase sempre os pais.</li>
          <li><strong>Para quem não é:</strong> quando há casos que você encaminha, diga isso com respeito.</li>
        </ul>
        <p>
          A Nota Técnica CFP 1/2022 permite destacar “o público que atendem”.
          Isso é diferente de prometer o que vai acontecer com esse público. “Para
          crianças que estão com dificuldade de lidar com mudanças” descreve;
          “para sua criança voltar a ser feliz” promete.
        </p>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Orientação para pais — para mães,
          pais e cuidadores que querem entender melhor o comportamento do filho
          e combinar formas de agir em casa. Pode acontecer junto com a
          psicoterapia da criança ou sozinha.”
        </p>
        <p>
          <strong>Erro comum:</strong> listar transtornos como se fossem
          serviços (“ansiedade, TDAH, autismo, depressão”). A lista não diz o que
          você faz e soa como triagem. O{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento do consultório
          </Link>{" "}
          é o que define essa frase, e ela deve ser a mesma no site, no Google e
          no Instagram.
        </p>
      </section>

      <section>
        <h2>Passo 3: explique como o atendimento funciona</h2>
        <p>
          Depois de “é para mim?”, a dúvida seguinte é “como seria?”. Quem nunca
          fez terapia, ou nunca levou o filho, não sabe o que esperar. Explicar o
          processo reduz o medo do primeiro contato.
        </p>
        <ol>
          <li><strong>Primeiro contato:</strong> por onde a pessoa chama e o que acontece em seguida.</li>
          <li><strong>Primeiras sessões:</strong> no infantil, se há conversa só com os pais antes de conhecer a criança.</li>
          <li><strong>Formato:</strong> presencial, online ou os dois; duração aproximada da sessão; frequência combinada caso a caso.</li>
          <li><strong>Participação da família ou da escola:</strong> quando acontece e com que autorização.</li>
          <li><strong>Encerramento:</strong> como se decide, sem prazo fixo prometido.</li>
        </ol>
        <p>
          Duração do processo é o ponto mais delicado. “Em geral, o tratamento
          dura poucas semanas” é previsão de resultado e esbarra no art. 20,
          alínea e. Prefira “a frequência e a duração são combinadas depois das
          primeiras sessões, de acordo com cada caso”.
        </p>
        <p>
          <strong>Exemplo ilustrativo:</strong> “As duas primeiras conversas são
          com os responsáveis. Depois, a criança vem para as sessões semanais, e a
          cada mês fazemos um encontro de retorno com a família.”
        </p>
        <p>
          <strong>Erro comum:</strong> esconder o atendimento online no rodapé.
          Se você atende online, isso muda quem pode contratar você. O post sobre{" "}
          <Link href="/blog/psicologo-online-divulgacao" className="inst-link">
            divulgação do atendimento online
          </Link>{" "}
          mostra como falar disso com clareza, e a seção a seguir trata do que
          entra em cada parte da página.
        </p>
      </section>

      <section>
        <h2>Passo 4: apresente abordagem e formação sem virar currículo</h2>
        <p>
          Abordagem e formação entram para dar confiança, não para impressionar.
          Uma frase sobre como você trabalha e um link para a página “sobre” são
          suficientes na página de serviços.
        </p>
        <ul>
          <li>Nomeie a abordagem e explique em linguagem simples o que ela muda na sessão.</li>
          <li>Cite só títulos que você tem: especialista apenas com título registrado no CFP (art. 20, alínea b).</li>
          <li>Técnicas, só as reconhecidas pela Psicologia (art. 20, alínea c).</li>
          <li>Não fale mal de outras abordagens nem de outras profissões (art. 20, alíneas f e g).</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Trabalho com a terapia
          cognitivo-comportamental adaptada para crianças: as sessões usam
          brincadeiras e materiais visuais para entender o que a criança sente e
          treinar, aos poucos, novas formas de lidar com as situações difíceis.”
        </p>
        <p>
          <strong>Erro comum:</strong> chamar-se de especialista sem o título. A
          palavra tem sentido formal na profissão, e o post sobre{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            quando o psicólogo pode se dizer especialista
          </Link>{" "}
          explica a diferença entre título, curso e experiência. A trajetória
          completa vai para a{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            página sobre mim
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Passo 5: decida o que fazer com o valor</h2>
        <p>
          O valor da sessão pode aparecer no site, mas não pode servir de
          propaganda. Na maioria dos consultórios, o caminho mais seguro é
          informar o valor no primeiro contato e dizer isso na página.
        </p>
        <p>
          A Nota Técnica CFP 1/2022 é específica: nada de “preço social”,
          “atendimento social”, “desconto”, “pacote promocional”, “valor
          acessível” nem termos parecidos, e nada de cupom ou sorteio. A cartilha
          do CRP-MG lembra a exceção do{" "}
          <a href={CDC} {...ext}>
            Código de Defesa do Consumidor
          </a>
          : quando o serviço é contratado só online, por plataforma ou site, a
          pessoa tem direito de saber o valor antes de comprar.
        </p>
        <ol>
          <li>Atendimento contratado pelo próprio site, com pagamento online: informe o valor de forma neutra, sem destaque.</li>
          <li>Contato por WhatsApp ou formulário antes de agendar: diga “o valor e as formas de pagamento são informados no primeiro contato”.</li>
          <li>Convênios: pode listá-los, como orienta a Nota Técnica.</li>
        </ol>
        <p>
          <strong>Erro comum:</strong> “primeira sessão gratuita” ou “valor
          especial para os primeiros pacientes”. Os dois usam vantagem financeira
          como chamariz. O post{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>{" "}
          trata desse tema por inteiro.
        </p>
      </section>

      <section>
        <h2>Passo 6: feche cada seção com um próximo passo claro</h2>
        <p>
          Cada atendimento termina com uma ação simples: chamar no WhatsApp,
          preencher um formulário curto ou agendar uma conversa. Sem pressão, sem
          contagem regressiva, sem “vagas limitadas”.
        </p>
        <ul>
          <li>Use um verbo e o canal: “Conversar pelo WhatsApp”, “Enviar uma mensagem”.</li>
          <li>Diga o que acontece depois: “respondo em até um dia útil” só se for verdade.</li>
          <li>Repita o mesmo botão em todas as seções, para não confundir.</li>
          <li>No formulário, peça só o necessário e informe como os dados são tratados, de acordo com a LGPD.</li>
        </ul>
        <p>
          O art. 2º, alínea i, do Código de Ética veda “induzir qualquer pessoa ou
          organização a recorrer a seus serviços”. Um convite claro informa; a
          urgência artificial pressiona, e a página de serviços não precisa
          disso.
        </p>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Quer saber se esse atendimento faz
          sentido para a sua família? Mande uma mensagem pelo WhatsApp contando a
          idade da criança e a cidade. Respondo com os horários disponíveis.”
        </p>
        <p>
          <strong>Erro comum:</strong> pedir dados clínicos no formulário (“conte
          o diagnóstico do seu filho”). Isso é dado sensível e não precisa estar
          ali. O post sobre{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          mostra como receber esse primeiro contato com sigilo.
        </p>
      </section>

      <section>
        <h2>Passo 7: escreva para o Google sem escrever para robôs</h2>
        <p>
          A página de serviços também é a que aparece quando alguém busca
          “psicóloga infantil em [cidade]”. Ela ajuda a busca quando responde à
          pergunta da pessoa, e não quando repete a palavra-chave.
        </p>
        <ol>
          <li>Um título (H1) claro: “Atendimentos” ou “Psicoterapia infantil em [cidade]”.</li>
          <li>Um subtítulo (H2) por atendimento, com o nome que as pessoas buscam.</li>
          <li>Cidade e bairro escritos no texto quando o atendimento é presencial.</li>
          <li>Title e description próprios da página, sem promessa.</li>
          <li>Links para as páginas que aprofundam cada serviço, quando existirem.</li>
        </ol>
        <p>
          O{" "}
          <a href={GOOGLE_UTIL} {...ext}>
            guia do Google sobre conteúdo útil
          </a>{" "}
          pede páginas feitas para pessoas, que mostrem experiência e deixem o
          leitor satisfeito. É o mesmo que os passos anteriores já pedem.
        </p>
        <p>
          <strong>Erro comum:</strong> criar dez páginas quase iguais, uma por
          bairro ou por transtorno, só para aparecer. Elas competem entre si e
          parecem genéricas. Quando um serviço tem processo próprio, como a
          avaliação, vale uma página separada; o post sobre{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica infantil
          </Link>{" "}
          mostra um exemplo, e o de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          explica o resto da otimização.
        </p>
      </section>

      <section>
        <h2>Modelo de seção de serviço (fictício)</h2>
        <p>
          Um exemplo completo, inventado para este artigo, de como uma seção pode
          ficar no site. Os nomes e os dados são fictícios.
        </p>
        <blockquote>
          <p>
            <strong>Psicoterapia infantil</strong>
            <br />
            Para crianças de 4 a 11 anos que estão passando por mudanças,
            dificuldades na escola ou em casa, ou cujos pais têm dúvidas sobre o
            desenvolvimento.
            <br />
            Como funciona: as duas primeiras conversas são com os responsáveis.
            Depois, a criança vem uma vez por semana, presencialmente, no bairro
            Exemplo. A cada mês, um encontro de retorno com a família. A duração
            é combinada de acordo com cada caso.
            <br />
            Abordagem: terapia cognitivo-comportamental adaptada para crianças,
            com brincadeiras e recursos visuais.
            <br />
            Próximo passo: mande uma mensagem pelo WhatsApp com a idade da
            criança. O valor e os horários são informados no primeiro contato.
            <br />
            Ana Exemplo · Psicóloga · CRP 00/00000
          </p>
        </blockquote>
        <p>
          Repare no que não está ali: valor como destaque, promessa de melhora,
          prazo de tratamento, foto de criança ou depoimento de família.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na página de serviços</h2>
        <div className="inst-blog__table" role="region" aria-label="Página de serviços: o que a psicóloga pode e o que deve evitar" tabIndex={0}>
          <table>
            <caption>Página de serviços: o que a psicóloga pode e o que deve evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Nome completo, “psicóloga” e CRP na página</td><td>Sim, é obrigatório (art. 20, a)</td></tr>
              <tr><td>Dizer o público atendido e a abordagem</td><td>Sim (Nota Técnica CFP 1/2022)</td></tr>
              <tr><td>Explicar formato, frequência e primeiro contato</td><td>Sim</td></tr>
              <tr><td>“Resultados em poucas sessões”</td><td>Não (art. 20, e)</td></tr>
              <tr><td>“Primeira sessão grátis” ou “valor acessível”</td><td>Não (art. 20, d; Nota Técnica)</td></tr>
              <tr><td>Valor informado de forma neutra em serviço contratado só online</td><td>Sim (CDC, cartilha CRP-MG)</td></tr>
              <tr><td>Técnica não reconhecida pela Psicologia</td><td>Não (art. 20, c)</td></tr>
              <tr><td>Depoimento de paciente ou de família</td><td>Evitar (Nota Técnica CFP 1/2022)</td></tr>
              <tr><td>“A melhor psicóloga infantil da cidade”</td><td>Não (art. 20, f e h)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem a página: revise com olhar de quem chega</h2>
        <p>
          Se a página já existe, o ganho maior vem de revisá-la com dados e com
          a leitura de quem não conhece você.
        </p>
        <ul>
          <li>Peça a alguém de fora que leia e diga, em uma frase, o que você faz e para quem. Se a pessoa hesitar, a abertura das seções precisa mudar.</li>
          <li>Anote as perguntas que mais chegam no primeiro contato. Cada uma que se repete é um parágrafo que falta na página.</li>
          <li>No Google Search Console, veja quais buscas levam à página e se o texto responde a elas.</li>
          <li>Confira a versão no celular: botões grandes, texto legível e nenhuma seção escondida.</li>
          <li>Revise a página a cada novo serviço ou mudança de formato, e mantenha a mesma descrição no{" "}
            <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
              perfil do Google
            </Link>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas ou com outras neurodivergências costumam
          chegar ao site depois de muitas buscas, às vezes depois de esperar
          meses por uma avaliação. Eles querem saber, logo de início, se você
          conhece o que eles vivem e como o atendimento acontece na prática.
        </p>
        <ul>
          <li><strong>Diga com quem você trabalha, sem rótulos de cura:</strong> “atendo crianças autistas e suas famílias” descreve; “tratamento do autismo” sugere algo que a Psicologia não promete.</li>
          <li><strong>Explique a participação da família:</strong> orientação para pais, conversas com a escola e com outros profissionais, sempre com autorização.</li>
          <li><strong>Mostre o cuidado sensorial:</strong> se o consultório tem luz regulável, sala silenciosa ou horários com menos movimento, diga isso.</li>
          <li><strong>Use linguagem neuroafirmativa:</strong> falar de apoio e de necessidades, e não de “déficit a ser corrigido”.</li>
          <li><strong>Não pergunte o diagnóstico no formulário:</strong> essa conversa acontece no primeiro contato, com sigilo.</li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          ajuda a revisar as palavras, e o de{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>{" "}
          mostra o que vale contar sobre o espaço físico.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Lista de abordagens no lugar de serviços.</li>
          <li>Lista de transtornos como se fosse cardápio.</li>
          <li>Nenhuma explicação sobre o primeiro contato e as primeiras sessões.</li>
          <li>Prazo de tratamento ou promessa de melhora.</li>
          <li>Preço em destaque, “promoção” ou “primeira sessão grátis”.</li>
          <li>CRP só no rodapé de outra página.</li>
          <li>Formulário que pede diagnóstico ou histórico clínico.</li>
          <li>Foto de criança ou de sessão para ilustrar o serviço.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da página de serviços</h2>
        <ul>
          <li>Cada atendimento tem nome simples, para quem é, como funciona e próximo passo.</li>
          <li>Nome completo, psicóloga e CRP visíveis na página.</li>
          <li>Abordagem explicada em uma frase, com link para a página sobre.</li>
          <li>Nenhum prazo, promessa, superlativo ou depoimento.</li>
          <li>Valor tratado conforme o art. 20 e a Nota Técnica.</li>
          <li>Atendimento online descrito de acordo com a Resolução CFP 9/2024.</li>
          <li>Formulário enxuto, com aviso de privacidade.</li>
          <li>Title, description e subtítulos com os nomes que as pessoas buscam.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a página de serviços é escrita junto com a marca. A
          imersão de dois dias define o posicionamento, o público e o tom de voz,
          e o site vai ao ar em 45 dias com cada texto revisado pelo art. 20.
          Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua página de serviços ainda é uma lista de abordagens, marque
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
            , arts. 2º (alínea i) e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais: publicidade e cuidados éticos
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            (atendimento mediado por tecnologias digitais; revogou a Resolução CFP nº 11/2018).
          </li>
          <li>
            Brasil.{" "}
            <a href={CDC} {...ext}>
              Lei nº 8.078/1990 — Código de Defesa do Consumidor
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={GOOGLE_UTIL} {...ext}>
              Como criar conteúdo útil, confiável e que prioriza as pessoas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
