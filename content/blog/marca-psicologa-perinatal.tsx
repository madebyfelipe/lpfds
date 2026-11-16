import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ESPECIALISTA = "https://site.cfp.org.br/servicos/titulo-de-especialista/";
const LEI14721 =
  "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14721.htm";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const TDICS =
  "https://www.crpsp.org/noticia/view/3251/resolucao-do-cfp-que-disciplina-uso-de-tecnologias-digitais-no-exercicio-da-psicologia-ja-esta-em-vigor-plataforma-e-psi-sera-encerrada";

export const post: Post = {
  slug: "marca-psicologa-perinatal",
  title: "Marca para psicóloga perinatal: posicionamento, identidade visual e divulgação em 7 passos",
  description:
    "Marca para psicóloga perinatal: como nomear a área sem título que você não tem, falar com gestantes e puérperas, escolher visual e divulgar dentro do art. 20.",
  keyword: "marca para psicóloga perinatal",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-16",
  summary:
    "Uma marca para psicóloga perinatal começa por dizer com clareza quem você acompanha (gestação, parto, puerpério, perda gestacional, parentalidade) e como trabalha, sem se chamar “especialista”: perinatal não está entre as especialidades reconhecidas pelo CFP, então a área entra como foco de atuação, junto da formação que você tem. Daí saem o nome, o tom de voz, o visual e os canais, tudo dentro do art. 20, que proíbe promessa, preço como chamariz e exposição de pacientes e bebês. Abaixo estão 7 passos com exemplos fictícios.",
  faq: [
    {
      q: "O que faz uma psicóloga perinatal?",
      a: "Acompanha pessoas e famílias no período que vai do desejo de ter filhos e da gestação até o parto e o primeiro tempo com o bebê, incluindo perdas gestacionais, reprodução assistida e adaptação à parentalidade. Na divulgação, vale descrever esses momentos com as suas palavras e dizer em quais deles você atua."
    },
    {
      q: "Psicóloga perinatal pode se apresentar como especialista?",
      a: "Só usa “especialista” quem tem o título de especialista registrado no CFP, e perinatal não está entre as especialidades reconhecidas pelo conselho. A saída honesta é dizer “psicóloga clínica com atuação em saúde mental perinatal” e citar a formação que você realmente fez, como uma pós-graduação, com o nome exato do curso."
    },
    {
      q: "Que cores usar na marca de psicóloga perinatal?",
      a: "Não há uma cor obrigatória. Tons suaves aparecem muito nesse nicho, e é justamente por isso que vale escolher a paleta pelo seu posicionamento e pelo contraste. Teste se o texto passa no contraste mínimo de acessibilidade e se a marca não fica igual à de lojas de enxoval."
    },
    {
      q: "Posso postar foto de barriga ou de bebê no Instagram do consultório?",
      a: "Foto de paciente, de barriga de paciente ou de bebê de paciente fica fora, mesmo com autorização: expõe o atendimento e esbarra no sigilo e no art. 20 do Código de Ética. Fotos de banco com licença, ilustrações e imagens do espaço de atendimento resolvem o visual sem expor ninguém."
    },
    {
      q: "Como a psicóloga perinatal consegue pacientes?",
      a: "Boa parte das indicações nessa área vem de quem acompanha a gestação: obstetras, enfermeiras obstétricas, doulas e consultoras de amamentação. Uma marca clara, uma página que explique seus atendimentos e uma conversa respeitosa com essas profissionais costumam pesar mais do que anúncios."
    }
  ],
  cover: {
    src: "/blog/marca-psicologa-perinatal/marca-psicologa-perinatal-sofa-manta-cha-e-livro.jpg",
    alt: "Sofá cinza com manta de tricô, almofada, xícara de chá e livro aberto, num canto acolhedor perto da janela",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você atende gestantes, puérperas e casais que perderam um bebê. Sabe
        do que fala, estudou para isso e escuta histórias que pedem cuidado.
        Mas, quando abre o Instagram para divulgar, a marca parece um chá de
        bebê: tons pastel, cegonha, frases sobre “a magia da maternidade”. E a
        mulher que chora no banho às três da manhã, com um recém-nascido no
        colo, não se reconhece ali.
      </p>
      <p>
        A resposta curta é esta: uma boa marca para psicóloga perinatal diz
        quem você acompanha e em que momento, como você trabalha e como a
        pessoa chega até você, sem romantizar a maternidade e sem prometer
        “superar a depressão pós-parto”. Ela também resolve uma questão
        delicada da área: perinatal não é uma especialidade reconhecida pelo
        CFP, então o nome da área precisa entrar sem virar título. Abaixo estão
        7 passos, do posicionamento à rede de indicação, com exemplos fictícios.
        Para a base do assunto, vale ler antes o guia de{" "}
        <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
          posicionamento para psicólogo
        </Link>
        .
      </p>

      <section>
        <h2>O que dizem as normas para a marca da psicóloga perinatal</h2>
        <p>
          A marca é divulgação, e toda divulgação de psicóloga segue o art. 20
          do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          : nome completo e CRP em cada peça, só títulos que você tem, nada de
          preço como propaganda, nada de previsão taxativa de resultados e nada
          de sensacionalismo. A alínea b é a que mais pesa na área perinatal:
          fazer referência apenas a títulos ou qualificações que você possua.
        </p>
        <p>
          O CFP reconhece uma lista fechada de especialidades, que você confere
          na{" "}
          <a href={ESPECIALISTA} {...ext}>
            página do Registro de Especialista
          </a>
          : Psicologia Clínica, Escolar/Educacional, Hospitalar, Jurídica,
          Organizacional e do Trabalho, Social, de Trânsito, do Esporte, em
          Saúde, Neuropsicologia, Psicomotricidade, Psicopedagogia e Avaliação
          Psicológica. Perinatal não está nela. Isso não impede você de atuar
          na área nem de dizer que atua; impede de se chamar “especialista em
          psicologia perinatal”.
        </p>
        <p>
          Fora do conselho, a{" "}
          <a href={LEI14721} {...ext}>
            Lei nº 14.721/2023
          </a>{" "}
          alterou o Estatuto da Criança e do Adolescente para prever assistência
          psicológica à gestante, à parturiente e à puérpera, e atividades de
          conscientização sobre saúde mental na gravidez e no puerpério. A lei
          trata do serviço de saúde, mas mostra que o tema entrou na pauta
          pública. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          completam as regras para redes sociais: sem depoimento, sem imagem
          de atendimento, sem relato que identifique alguém.
        </p>
      </section>

      <section>
        <h2>1. Nomeie a sua área sem usar um título que você não tem</h2>
        <p>
          A forma mais segura de nomear a área é combinar o seu título real com
          o foco de atuação. Assim a pessoa entende o que você faz, e a
          divulgação fica dentro da alínea b do art. 20.
        </p>
        <ol>
          <li>
            Comece pelo que você é: “psicóloga”, ou “psicóloga clínica” se
            fizer sentido, sempre com o CRP.
          </li>
          <li>
            Some o foco: “com atuação em saúde mental perinatal”, “que
            acompanha gestação, puerpério e perdas gestacionais”.
          </li>
          <li>
            Cite a formação pelo nome exato: “pós-graduação em Psicologia
            Perinatal e da Parentalidade pela instituição X”. Curso livre entra
            como curso, não como especialização.
          </li>
          <li>
            Se tiver o título de especialista em outra área reconhecida, como
            Psicologia Clínica ou Hospitalar, use o nome dessa especialidade.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> “Marina Lopes, psicóloga (CRP
          00/00000). Acompanho gestantes, puérperas e casais na chegada de um
          filho e em perdas gestacionais. Pós-graduada em Psicologia Perinatal
          pela Faculdade Exemplo.”
        </p>
        <p>
          <strong>Erro comum:</strong> escrever “psicóloga perinatalista” ou
          “especialista em maternidade” na bio e no nome do perfil. Mesmo sem má
          intenção, a palavra sugere um título registrado. O post sobre{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            o título de especialista do psicólogo
          </Link>{" "}
          explica o que pode e o que não pode aparecer.
        </p>
      </section>

      <section>
        <h2>2. Defina quem você acompanha e em que momento</h2>
        <p>
          “Perinatal” cobre momentos muito diferentes. Quem tenta engravidar há
          três anos, quem acabou de perder um bebê e quem está exausta com um
          recém-nascido procuram coisas diferentes, e a marca precisa dizer com
          quais você trabalha.
        </p>
        <ul>
          <li>
            <strong>Antes da gestação:</strong> desejo de ter filhos,
            reprodução assistida, dúvidas sobre ser mãe ou pai.
          </li>
          <li>
            <strong>Gestação:</strong> ansiedade, mudanças no casal, gestação
            de risco, preparação para o parto.
          </li>
          <li>
            <strong>Parto e puerpério:</strong> experiência de parto difícil,
            adaptação ao bebê, tristeza e cansaço, amamentação.
          </li>
          <li>
            <strong>Perdas:</strong> aborto espontâneo, óbito fetal, perda
            neonatal, interrupção de gestação.
          </li>
          <li>
            <strong>Parentalidade inicial:</strong> volta ao trabalho, divisão
            de tarefas, pais e outras pessoas cuidadoras.
          </li>
        </ul>
        <p>
          Escolha dois ou três desses momentos como centro da marca. As áreas
          de investigação do{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            guia de como escolher um nicho na psicologia
          </Link>{" "}
          ajudam a decidir.
        </p>
        <p>
          <strong>Exemplo (fictício):</strong> uma psicóloga que atende online
          decide focar em puerpério e perdas gestacionais. A bio passa a dizer
          “acompanho mães e pais no puerpério e depois de uma perda
          gestacional”, e o conteúdo do perfil se organiza em torno desses dois
          temas.
        </p>
        <p>
          <strong>Erro comum:</strong> falar só de “mães”. Pais, casais do mesmo
          sexo, pessoas que gestam e não se identificam como mulheres e famílias
          que adotam também vivem o período. Uma linguagem que inclui amplia o
          alcance sem perder o foco.
        </p>
      </section>

      <section>
        <h2>3. Escreva um tom de voz que acolhe sem romantizar</h2>
        <p>
          O tom da marca perinatal precisa caber no dia mais difícil da sua
          leitora. Frases sobre “a fase mais linda da vida” afastam justamente
          quem mais precisa de ajuda, porque soam como cobrança.
        </p>
        <ol>
          <li>
            Fale da experiência real: cansaço, ambivalência, medo, luto, sem
            dramatizar.
          </li>
          <li>
            Evite termos que culpam: “mãe de verdade”, “instinto materno”,
            “você precisa aproveitar”.
          </li>
          <li>
            Use verbos de processo: acompanhar, escutar, elaborar, cuidar.
            Fique longe de “superar”, “vencer a depressão”, “voltar a ser quem
            era”.
          </li>
          <li>
            Defina três palavras para a voz da marca, como “calma, honesta e
            próxima”, e revise cada texto com elas.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> em vez de “Reencontre a alegria
          da maternidade”, a abertura do site diz: “Ter um filho também cansa,
          assusta e confunde. Aqui você pode falar disso sem ser julgada.”
        </p>
        <p>
          <strong>Erro comum:</strong> usar a frase de efeito de uma campanha
          de conscientização como chamada comercial, com números de prevalência
          sem fonte. Se for citar um dado, cite a fonte primária com link; se
          não tiver a fonte, deixe o texto qualitativo. O guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          traz um roteiro para definir a sua voz.
        </p>
      </section>

      <section>
        <h2>4. Escolha nome e identidade visual fora do clichê do enxoval</h2>
        <p>
          O visual da psicóloga perinatal compete com lojas de enxoval,
          fotógrafas de newborn e doulas, que usam os mesmos tons e símbolos. A
          identidade funciona quando parece um serviço de saúde mental acolhedor
          e se distingue desse mar de cegonhas.
        </p>
        <ul>
          <li>
            <strong>Nome:</strong> o seu nome completo costuma ser a escolha
            mais simples e segura. Nome fantasia exige CNPJ e cuidado com
            promessas embutidas, como “Renascer” ou “Mãe Plena”. O guia de{" "}
            <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
              nome para consultório de psicologia
            </Link>{" "}
            detalha os critérios.
          </li>
          <li>
            <strong>Cores:</strong> escolha pelo posicionamento e teste o
            contraste. Tons terrosos, verdes ou azuis profundos podem acolher
            sem infantilizar.
          </li>
          <li>
            <strong>Símbolos:</strong> evite útero estilizado, barriga, bebê e
            cegonha. Formas orgânicas, linhas, texturas e tipografia bem
            escolhida dão personalidade sem literalidade.
          </li>
          <li>
            <strong>Imagens:</strong> objetos do cotidiano (uma xícara, uma
            manta, uma janela), o espaço de atendimento vazio e você mesma.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> uma marca com verde-oliva, creme e
          um tom de argila, tipografia serifada para títulos e uma textura de
          papel como fundo dos posts. Nenhum bebê aparece, e a marca segue
          reconhecível em qualquer peça.
        </p>
        <p>
          <strong>Erro comum:</strong> usar rosa-bebê em texto claro sobre
          fundo branco. Fica delicado no celular da designer e ilegível no
          celular de quem amamenta de madrugada com o brilho no mínimo. O guia
          de{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          mostra como testar o contraste.
        </p>
      </section>

      <section>
        <h2>5. Organize os serviços em páginas claras</h2>
        <p>
          Quem busca uma psicóloga perinatal costuma estar com pressa e
          cansada. O site precisa responder em poucos segundos: você atende o
          meu caso? online ou presencial? como marco?
        </p>
        <ol>
          <li>
            Uma página para cada momento central: “Psicoterapia no puerpério”,
            “Acompanhamento após perda gestacional”.
          </li>
          <li>
            Em cada página: para quem é, como funciona, frequência, se atende
            online e o próximo passo.
          </li>
          <li>
            Explique o atendimento online com base na Resolução CFP nº 9/2024,
            que regula a prática por tecnologias digitais (veja o{" "}
            <a href={TDICS} {...ext}>
              resumo do CRP-SP
            </a>
            ). Para quem acabou de parir, o atendimento em casa, pela tela,
            pode ser o que viabiliza começar.
          </li>
          <li>
            Diga se o bebê pode estar junto na sessão, online ou presencial.
            Essa é uma das primeiras dúvidas de quem está no puerpério.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> “Pode trazer o bebê. Se ele
          precisar mamar ou chorar no meio da conversa, a gente pausa e
          continua. Online, você pode estar no sofá de casa.”
        </p>
        <p>
          <strong>Erro comum:</strong> uma página única com “atendo gestantes,
          puérperas, casais, perdas, fertilidade, parentalidade”. Ninguém se
          reconhece numa lista, e o Google não entende qual busca a página
          responde. O guia de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços para psicólogo
          </Link>{" "}
          mostra a estrutura de cada página.
        </p>
      </section>

      <section>
        <h2>6. Crie conteúdo que ajuda sem virar atendimento</h2>
        <p>
          Conteúdo perinatal tem um risco próprio: a leitora pode estar em
          sofrimento intenso naquele momento. O conteúdo informa, acolhe e
          indica caminhos, e deixa claro que não substitui um atendimento.
        </p>
        <ul>
          <li>
            Explique diferenças que geram dúvida, como o cansaço esperado do
            puerpério e sinais que pedem ajuda profissional, sempre com fonte e
            sem diagnóstico pelo post.
          </li>
          <li>
            Fale com a rede de apoio: o que o parceiro, a avó ou a amiga podem
            fazer.
          </li>
          <li>
            Tenha uma orientação fixa para crise, com os serviços públicos de
            urgência, como SAMU (192) e CVV (188), e diga que você não responde
            emergências pelo direct.
          </li>
          <li>
            Responda comentários sem entrar no caso da pessoa. O guia sobre{" "}
            <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
              como responder comentários e direct
            </Link>{" "}
            traz modelos.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> um carrossel “O que a sua rede de
          apoio pode fazer na primeira semana em casa”, com cinco ações
          práticas e, na última tela, o nome completo e o CRP da psicóloga.
        </p>
        <p>
          <strong>Erro comum:</strong> publicar relatos de pacientes, mesmo
          “anonimizados”, ou prints de mensagens de agradecimento. Numa área em
          que as histórias são muito particulares, um detalhe basta para
          identificar alguém, e depoimento fica fora da divulgação.
        </p>
      </section>

      <section>
        <h2>7. Construa uma rede de indicação com quem acompanha a gestação</h2>
        <p>
          Na área perinatal, a pessoa costuma chegar por indicação de quem já
          acompanha a gestação ou o pós-parto. A marca clara facilita essa
          indicação: a outra profissional sabe exatamente para quem indicar
          você.
        </p>
        <ol>
          <li>
            Mapeie quem atende o seu público: obstetras, enfermeiras obstétricas,
            doulas, consultoras de amamentação, pediatras.
          </li>
          <li>
            Prepare uma apresentação curta, em PDF ou página do site, com quem
            você acompanha, como trabalha, se atende online e como encaminhar.
          </li>
          <li>
            Proponha uma conversa para entender como elas trabalham, sem
            oferecer comissão nem troca de indicações, que esbarram no art. 20.
          </li>
          <li>
            Combine como será o retorno sobre encaminhamentos, sempre com
            autorização da paciente e dentro do sigilo. Informação de saúde é
            dado sensível pela{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>{" "}
            (art. 11), então troque o mínimo e por um canal seguro.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> a psicóloga conversa com três
          doulas da cidade, entende em que momento elas percebem que uma
          puérpera precisa de mais apoio e deixa com elas um cartão com o link
          da página “Psicoterapia no puerpério”.
        </p>
        <p>
          <strong>Erro comum:</strong> pedir para as doulas postarem que você é
          “a melhor psicóloga da cidade”. Superlativo vindo de outra pessoa
          continua sendo divulgação sua. O guia de{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria com pediatras
          </Link>{" "}
          tem um roteiro para essas conversas que vale para outras áreas.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na marca da psicóloga perinatal</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na marca de psicóloga perinatal"
            tabIndex={0}
          >
            <caption>Marca para psicóloga perinatal: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte da marca</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título</td>
                <td>“Psicóloga com atuação em saúde mental perinatal”</td>
                <td>“Especialista em psicologia perinatal” sem título registrado</td>
              </tr>
              <tr>
                <td>Promessa</td>
                <td>“Acompanho o puerpério”, “um espaço para falar disso”</td>
                <td>“Supere a depressão pós-parto”, “volte a ser você”</td>
              </tr>
              <tr>
                <td>Tom</td>
                <td>Cansaço, ambivalência e luto ditos com calma</td>
                <td>“A fase mais linda da vida”, “mãe de verdade”</td>
              </tr>
              <tr>
                <td>Imagem</td>
                <td>Objetos, espaço vazio, ilustração, você mesma</td>
                <td>Barriga ou bebê de paciente, foto de parto</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>Informado na conversa individual</td>
                <td>“Pacote gestante”, “primeira sessão grátis”</td>
              </tr>
              <tr>
                <td>Indicação</td>
                <td>Apresentação clara para doulas e obstetras</td>
                <td>Comissão por encaminhamento, troca de indicações</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem marca: ajuste fino do posicionamento perinatal</h2>
        <p>
          Se você já tem marca e perfil ativos, comece pela auditoria das
          palavras. Procure “especialista”, “perinatalista”, “superar” e
          “cura” na bio, no site, nos destaques e nos posts fixados, e troque
          pelo seu título real e por verbos de processo.
        </p>
        <p>
          Depois, revise as imagens dos últimos meses. Fotos de barriga, de
          bebê ou de parto que não sejam de banco com licença saem do perfil,
          mesmo que a paciente tenha autorizado. Por fim, olhe a paleta: se ela
          se confunde com a de lojas de enxoval do seu feed, considere uma
          revisão do sistema visual, mantendo o que as pessoas já reconhecem,
          como a tipografia ou um tom principal.
        </p>
        <p>
          Um passo adiante é separar a linha editorial por momento: uma série
          para o puerpério, outra para perdas, outra para a rede de apoio. Cada
          série tem um visual próprio dentro da marca, o que ajuda a leitora a
          encontrar o que precisa no seu perfil. O guia de{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding de consultório de psicologia
          </Link>{" "}
          ajuda quando o ajuste vira uma troca maior.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          A área perinatal encontra a neurodivergência em mais pontos do que
          parece. Mães e pais de uma criança autista engravidam de novo e
          chegam com perguntas próprias: como vai ser com dois, como contar ao
          filho mais velho, como lidar com a expectativa sobre o desenvolvimento
          do bebê. Uma marca que reconhece essas famílias, com uma linha na
          página de serviços, fala diretamente com elas.
        </p>
        <p>
          Há também gestantes e puérperas neurodivergentes, autistas ou com
          TDAH, para quem o pós-parto traz sobrecarga sensorial, mudanças
          bruscas de rotina e dificuldade com a quantidade de informação. Se
          você acompanha esse público, diga isso com linguagem respeitosa, sem
          tratar a neurodivergência como problema, e adapte o próprio
          atendimento: avisos com antecedência, combinados por escrito,
          sessões com menos estímulos.
        </p>
        <p>
          Na divulgação, o cuidado é o mesmo de sempre: nada de prometer que
          o segundo filho “vai ser mais fácil” nem de usar o diagnóstico de uma
          criança como gancho de conteúdo. O guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para quem atende autismo e neurodivergência
          </Link>{" "}
          ajudam a escrever essa parte.
        </p>
      </section>

      <section>
        <h2>Erros comuns na marca da psicóloga perinatal</h2>
        <ul>
          <li>Usar “especialista” ou “perinatalista” sem título registrado no CFP.</li>
          <li>Romantizar a maternidade em toda peça.</li>
          <li>Prometer “superar” a depressão pós-parto ou o luto.</li>
          <li>Postar fotos de barriga, parto ou bebê de pacientes.</li>
          <li>Repostar agradecimentos e relatos de pacientes.</li>
          <li>Anunciar “pacote gestante” ou primeira sessão grátis.</li>
          <li>Falar só de “mães”, deixando de fora pais e outras famílias.</li>
          <li>Não ter orientação para situações de crise no perfil.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da marca perinatal</h2>
        <ul>
          <li>Nome completo, “psicóloga” e CRP em todas as peças.</li>
          <li>A área aparece como foco de atuação, com a formação pelo nome exato.</li>
          <li>Dois ou três momentos do período perinatal estão no centro da marca.</li>
          <li>O tom acolhe sem romantizar e sem culpar.</li>
          <li>Paleta com contraste testado e símbolos fora do clichê.</li>
          <li>Uma página por serviço, com atendimento online explicado.</li>
          <li>Nenhuma imagem de paciente, barriga, parto ou bebê de paciente.</li>
          <li>Orientação de crise visível e rede de indicação mapeada.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, quem você acompanha e aonde quer chegar.
          Daí saem o posicionamento, o tom de voz, a identidade visual e o
          site, com a área perinatal descrita sem título que você não tem e
          cada peça revisada pelo art. 20. Tudo é apresentado em até 30 dias,
          com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua marca ainda parece um chá de bebê, marque uma conversa de 15
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
            <a href={ESPECIALISTA} {...ext}>
              Registro de Especialista
            </a>{" "}
            — lista das especialidades reconhecidas.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={TDICS} {...ext}>
              Resolução do CFP que disciplina o uso de tecnologias digitais
            </a>{" "}
            (Resolução CFP nº 9/2024).
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI14721} {...ext}>
              Lei nº 14.721, de 8 de novembro de 2023
            </a>{" "}
            — assistência psicológica à gestante, à parturiente e à puérpera.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 11 (dados sensíveis).
          </li>
        </ul>
      </section>
    </>
  )
};
