import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";
const BERENICE = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const PUZZLE = "https://doi.org/10.1177/1362361317727125";

export const post: Post = {
  slug: "nome-clinica-autismo",
  title: "Nome para clínica de autismo e desenvolvimento infantil: 7 passos, critérios e o que evitar",
  description:
    "Como escolher o nome da clínica de autismo e desenvolvimento infantil: registro no CRP, INPI, linguagem com as famílias, termos a evitar e teste final.",
  keyword: "nome para clínica de autismo",
  tags: ["posicionamento", "neurodivergencia"],
  publishedAt: "2026-11-15",
  summary:
    "O nome de uma clínica de autismo e desenvolvimento infantil precisa ser fácil de dizer, respeitoso com a comunidade autista e livre para registro. Evite promessa (“cura”, “superar”), autoridade sem prova (“referência”, “excelência”) e símbolos contestados como o quebra-cabeça. A clínica de psicologia precisa estar registrada no CRP, e a divulgação leva o nome empresarial ou fantasia com o número de inscrição.",
  faq: [
    {
      q: "Como escolher um nome para clínica de autismo?",
      a: "Defina primeiro o que a clínica faz, para quem e onde, e quais valores quer transmitir às famílias. Depois, liste nomes a partir de territórios de sentido (caminho, encontro, desenvolvimento, natureza), elimine os que prometem resultado ou usam termos contestados, confira disponibilidade no INPI, no domínio e nas redes, e teste com pais do seu público."
    },
    {
      q: "Posso usar a palavra autismo no nome da clínica?",
      a: "Pode, mas pense no futuro. Um nome com “autismo” deixa claro o foco, porém limita se a clínica passar a atender TDAH, dislexia ou outras demandas do desenvolvimento. Muitas clínicas preferem um nome próprio e deixam “autismo e desenvolvimento infantil” no descritor, ao lado do nome."
    },
    {
      q: "Clínica de psicologia precisa registrar o nome no CRP?",
      a: "A pessoa jurídica que presta serviços de psicologia precisa estar registrada no CRP e ter um responsável técnico, segundo a cartilha do CRP-MG. A publicidade pode usar a razão social ou o nome fantasia, com o número de inscrição da empresa no Conselho."
    },
    {
      q: "Preciso registrar o nome da clínica no INPI?",
      a: "O registro da empresa na Junta Comercial protege o nome empresarial, mas a proteção da marca no país vem do registro no INPI. Pesquise antes de decidir, porque um nome igual ou parecido, já registrado na área de saúde, pode obrigar a clínica a trocar de nome depois de investir em fachada, site e materiais."
    },
    {
      q: "Que palavras evitar no nome de uma clínica de autismo?",
      a: "Palavras que prometem resultado (cura, superar, recuperar, vencer), que tratam o autismo como algo a ser consertado, que infantilizam (anjinhos, especiais) ou que afirmam autoridade sem prova (referência, excelência, a melhor). Evite também a peça de quebra-cabeça no logo, contestada por parte da comunidade autista."
    }
  ],
  cover: {
    src: "/blog/nome-clinica-autismo/nome-clinica-autismo-caderno-anotacoes.jpg",
    alt: "Caderno de anotações com caneta, óculos, tablet e folhas de costela-de-adão sobre mesa de madeira",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Abrir uma clínica de autismo e desenvolvimento infantil exige escolher
        um nome que vai estar na fachada, no site, no contrato, no grupo de
        mães e na indicação do neuropediatra. É um nome que precisa acolher a
        família, soar sério para os profissionais que encaminham e caber no
        registro do CRP. E é comum descobrir, depois de pronto, que outra
        clínica já usa algo parecido ou que a palavra escolhida incomoda parte
        da comunidade autista.
      </p>
      <p>
        Resposta curta: um bom nome é fácil de dizer, respeitoso, sem promessa
        e livre para registro. A seguir estão as regras que valem para a clínica
        de psicologia, sete passos do briefing ao teste final, uma tabela de
        pode e evitar, a parte específica sobre a comunidade autista e um
        checklist. Este guia complementa o de{" "}
        <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
          nome para consultório de psicologia
        </Link>
        , que trata do caso da psicóloga que atende sozinha.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          explica que pessoas jurídicas que prestam serviços de psicologia
          “devem estar devidamente registradas junto ao CRP e apresentarem um
          responsável técnico”, e que a publicidade pode ser feita com o nome da
          empresa (razão social ou nome fantasia) e o número de inscrição no
          Conselho. Como organizar a empresa (tipo societário, tributação) fica
          com advogado e contador, como a própria cartilha recomenda.
        </p>
        <p>
          O nome também é divulgação, então segue o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          : só técnicas reconhecidas pela profissão (alínea c), nada de previsão
          taxativa de resultado (alínea e), nada de autopromoção em detrimento
          de outros profissionais (alínea f) e nada de sensacionalismo (alínea
          h). Em clínica multiprofissional, cada profissão segue também o seu
          próprio conselho.
        </p>
        <p>
          Para a marca, o órgão é o{" "}
          <a href={INPI} {...ext}>
            INPI
          </a>
          , que registra marcas nominativas, figurativas e mistas. Sobre
          linguagem, a{" "}
          <a href={BERENICE} {...ext}>
            Lei nº 12.764/2012
          </a>{" "}
          usa a expressão “pessoa com transtorno do espectro autista” e a
          considera pessoa com deficiência para todos os efeitos legais.
        </p>
      </section>

      <section>
        <h2>1. Escreva o briefing antes de pensar em nomes</h2>
        <p>
          Nome bom nasce de uma ideia clara do que a clínica é. Antes de
          qualquer lista, responda por escrito a cinco perguntas.
        </p>
        <ol>
          <li>
            <strong>O que a clínica faz?</strong> Psicologia, fono, terapia
            ocupacional, avaliação, orientação parental.
          </li>
          <li>
            <strong>Para quem?</strong> Faixa etária, foco em autismo ou em
            desenvolvimento infantil em geral, famílias da região ou online.
          </li>
          <li>
            <strong>Onde?</strong> Cidade, bairro, número de unidades no futuro.
          </li>
          <li>
            <strong>Como?</strong> O jeito de trabalhar com a família e a
            escola, o que diferencia vocês.
          </li>
          <li>
            <strong>Que sensação o nome deve passar?</strong> Três palavras:
            por exemplo, acolhimento, seriedade, parceria.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: duas sócias fictícias, uma psicóloga e uma
          fonoaudióloga, escrevem que atendem crianças de 2 a 12 anos, com foco
          em autismo, trabalhando junto com pais e escola, e querem transmitir
          “parceria, calma e cuidado”. Essas três palavras viram o filtro de
          todos os nomes.
        </p>
        <p>
          O erro comum é começar pelo nome bonito e depois descobrir que ele não
          diz nada sobre o trabalho. O guia de{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          ajuda a responder às perguntas do briefing.
        </p>
      </section>

      <section>
        <h2>2. Decida o quanto o nome vai dizer</h2>
        <p>
          Há três caminhos: nome descritivo, nome próprio com descritor ou nome
          com o sobrenome das fundadoras. Cada um tem vantagens e limites.
        </p>
        <ul>
          <li>
            <strong>Descritivo</strong> (“Clínica de Desenvolvimento Infantil
            do Bairro X”): claro, mas genérico e difícil de registrar como marca.
          </li>
          <li>
            <strong>Nome próprio + descritor</strong> (“Trilha — autismo e
            desenvolvimento infantil”): memorável e registrável; o descritor
            explica o que é e pode mudar se a clínica crescer.
          </li>
          <li>
            <strong>Sobrenome das fundadoras</strong>: transmite
            responsabilidade pessoal, mas pesa se a sociedade mudar.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: as sócias fictícias do passo anterior escolhem o
          caminho do nome próprio com descritor. Assim, se em três anos
          passarem a atender TDAH e dificuldades de aprendizagem, mudam só o
          descritor, e a fachada continua.
        </p>
        <p>
          O erro comum é colocar “autismo” no nome principal sem pensar no
          futuro. Se a clínica já atende ou pretende atender outras demandas do
          desenvolvimento, o nome fica pequeno. O post sobre{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            marketing para clínica multidisciplinar de autismo
          </Link>{" "}
          mostra como a marca acomoda várias profissões.
        </p>
      </section>

      <section>
        <h2>3. Gere nomes a partir de territórios de sentido</h2>
        <p>
          Em vez de procurar “o nome”, escolha três ou quatro territórios ligados
          ao briefing e liste de dez a vinte palavras em cada um.
        </p>
        <ol>
          <li>
            <strong>Caminho e percurso:</strong> trilha, rota, passo, travessia.
          </li>
          <li>
            <strong>Encontro e parceria:</strong> ponte, laço, roda, junto.
          </li>
          <li>
            <strong>Crescimento e natureza:</strong> raiz, broto, ipê, semente.
          </li>
          <li>
            <strong>Lugar e acolhimento:</strong> casa, quintal, ninho, abrigo.
          </li>
        </ol>
        <p>
          Combine palavras, troque por sinônimos, teste em tupi ou em nomes de
          árvores e lugares da sua região. Os exemplos deste post (Trilha, Casa
          Ipê) são ilustrativos: antes de usar qualquer nome, pesquise se ele já
          existe.
        </p>
        <p>
          Exemplo ilustrativo: do território “crescimento e natureza”, uma
          clínica fictícia chega a “Quintal Ipê”, ligando o lugar onde a criança
          brinca a uma árvore comum na cidade. O nome fala de infância sem ser
          infantil.
        </p>
        <p>
          O erro comum é ficar preso às palavras óbvias da área (“neuro”,
          “desenvolver”, “espectro”). Elas aparecem em dezenas de clínicas, o que
          torna o nome difícil de lembrar e de registrar.
        </p>
      </section>

      <section>
        <h2>4. Elimine os nomes que prometem ou exageram</h2>
        <p>
          Passe a lista por um filtro ético. Qualquer nome que prometa
          resultado, trate o autismo como algo a ser consertado ou afirme
          autoridade sem prova sai.
        </p>
        <ul>
          <li>
            <strong>Promessa:</strong> cura, superar, vencer, recuperar,
            “evoluir de vez”. Esbarram na alínea e do art. 20.
          </li>
          <li>
            <strong>Autoridade sem prova:</strong> referência, excelência,
            “centro de excelência”, a melhor. Soam como autopromoção.
          </li>
          <li>
            <strong>Método no nome:</strong> amarra a clínica a uma abordagem e
            exige que toda a equipe a pratique com formação e respaldo.
          </li>
          <li>
            <strong>Infantilização:</strong> anjinhos, especiais, pequenos
            gênios. A família procura cuidado, sem pena e sem idealização.
          </li>
        </ul>
        <p>
          Exemplo de nome que não cabe: “Superar — Centro de Referência em
          Autismo”. Promete resultado e afirma autoridade. Exemplo que cabe:
          “Ponte — autismo e desenvolvimento infantil”, que fala de ligação entre
          criança, família e escola sem prometer nada.
        </p>
        <p>
          O erro comum é achar que nome não é publicidade. Ele está na fachada,
          no anúncio e no Google. O guia de{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            marketing para psicólogos e Código de Ética
          </Link>{" "}
          resume as regras.
        </p>
      </section>

      <section>
        <h2>5. Confira registro, domínio e redes</h2>
        <p>
          Um nome só serve se estiver livre. A conferência leva uma tarde e
          evita trocar de nome depois de fazer fachada e site.
        </p>
        <ol>
          <li>
            <strong>INPI:</strong> pesquise o nome e variações na base de marcas,
            na área de serviços de saúde. Se houver algo igual ou parecido,
            descarte ou consulte um especialista em propriedade industrial.
          </li>
          <li>
            <strong>Google e mapas:</strong> procure clínicas com o mesmo nome na
            sua cidade e no seu estado.
          </li>
          <li>
            <strong>Domínio:</strong> veja se o .com.br está livre, curto e sem
            hífen confuso.
          </li>
          <li>
            <strong>Redes:</strong> confira o @ no Instagram e no WhatsApp
            Business.
          </li>
          <li>
            <strong>CRP e Junta:</strong> o contador confirma se o nome
            empresarial e o fantasia podem ser registrados como pretendido.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma clínica fictícia gosta de “Raiz”, mas
          encontra três clínicas de saúde com o nome no estado. Ela segue para a
          segunda opção, “Quintal Ipê”, livre no domínio e nas redes.
        </p>
        <p>
          O erro comum é registrar o CNPJ e mandar fazer a fachada antes de
          pesquisar a marca. O post sobre{" "}
          <Link href="/blog/dominio-site-psicologo" className="inst-link">
            domínio para site de psicólogo
          </Link>{" "}
          ajuda na escolha do endereço.
        </p>
      </section>

      <section>
        <h2>6. Teste o nome em voz alta e por escrito</h2>
        <p>
          O nome vai ser dito ao telefone, ditado para a secretária da escola e
          digitado no Google. Teste nessas situações antes de decidir.
        </p>
        <ul>
          <li>
            <strong>Telefone:</strong> diga o nome a alguém e peça para escrever.
            Se errar, o nome tem grafia difícil.
          </li>
          <li>
            <strong>Indicação:</strong> imagine o neuropediatra dizendo “procura
            a clínica X”. Soa sério?
          </li>
          <li>
            <strong>Busca:</strong> digite o nome no Google e veja o que aparece.
          </li>
          <li>
            <strong>Pais do público:</strong> mostre os três finalistas a pais
            de crianças do seu público, que não sejam pacientes, e pergunte o que
            cada nome sugere.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: “Ninho” parece ótimo, mas, no teste, duas mães
          associam a nome de berçário. A clínica fictícia mantém o nome para a
          sala de espera e escolhe outro para a marca.
        </p>
        <p>
          O erro comum é testar só com a equipe e a família próxima, que já sabe
          o que a clínica faz.
        </p>
      </section>

      <section>
        <h2>7. Transforme o nome em marca</h2>
        <p>
          Com o nome escolhido, começa a parte que faz ele trabalhar: logo,
          cores, descritor, tom de voz e site, tudo dizendo a mesma coisa.
        </p>
        <ol>
          <li>
            <strong>Descritor fixo:</strong> “autismo e desenvolvimento
            infantil” ao lado do nome em todas as peças.
          </li>
          <li>
            <strong>Identificação:</strong> nome da empresa e inscrição no CRP,
            e o responsável técnico onde a norma pedir.
          </li>
          <li>
            <strong>Identidade visual:</strong> símbolo próprio, sem
            quebra-cabeça, com paleta calma.
          </li>
          <li>
            <strong>Tom de voz:</strong> frases claras e respeitosas, iguais no
            site, no WhatsApp e na recepção.
          </li>
        </ol>
        <p>
          O guia de{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/site-para-clinica-de-psicologia" className="inst-link">
            site para clínica de psicologia
          </Link>{" "}
          mostram os próximos passos.
        </p>
        <p>
          O erro comum é escolher o nome com cuidado e depois usar um logo
          pronto, de banco de imagem, que já aparece em outras clínicas.
        </p>
      </section>

      <section>
        <h2>Nome de clínica de autismo: pode e evitar</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no nome de clínica de autismo"
            tabIndex={0}
          >
            <caption>Nome para clínica de autismo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Critério</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sentido</td>
                <td>Caminho, encontro, crescimento, acolhimento</td>
                <td>Cura, superar, vencer, recuperar</td>
              </tr>
              <tr>
                <td>Autoridade</td>
                <td>Descritor do que a clínica faz</td>
                <td>Referência, excelência, a melhor</td>
              </tr>
              <tr>
                <td>Público</td>
                <td>Linguagem respeitosa e adulta</td>
                <td>Anjinhos, especiais, pequenos gênios</td>
              </tr>
              <tr>
                <td>Símbolo</td>
                <td>Traço próprio ligado ao nome</td>
                <td>Peça de quebra-cabeça</td>
              </tr>
              <tr>
                <td>Escopo</td>
                <td>Nome próprio com descritor que pode mudar</td>
                <td>Nome que trava a clínica num só diagnóstico</td>
              </tr>
              <tr>
                <td>Registro</td>
                <td>Pesquisa no INPI, domínio e redes antes</td>
                <td>Fachada pronta antes de pesquisar</td>
              </tr>
              <tr>
                <td>Identificação</td>
                <td>Nome da empresa com inscrição no CRP</td>
                <td>Nome fantasia sem registro no Conselho</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem nome: quando vale renomear</h2>
        <p>
          Trocar o nome de uma clínica em funcionamento custa: fachada,
          documentos, site, perfil no Google, o hábito de quem indica. Vale a
          pena quando o nome atual gera problema real: conflito de marca no
          INPI, termo que a comunidade autista rejeita, promessa que esbarra no
          art. 20 ou escopo que ficou pequeno.
        </p>
        <p>
          Se for trocar, planeje a transição: comunique pacientes e parceiros
          antes, mantenha “antiga Clínica X” por alguns meses na fachada e no
          site, atualize o{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Perfil da Empresa no Google
          </Link>{" "}
          e redirecione o domínio antigo para o novo. O guia de{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding de consultório de psicologia
          </Link>{" "}
          detalha o processo.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Uma clínica de autismo fala com dois públicos ao mesmo tempo: os pais
          e a comunidade autista, que inclui adultos autistas, muitos deles
          também pais. O nome precisa respeitar os dois.
        </p>
        <ul>
          <li>
            <strong>Sem quebra-cabeça:</strong> um{" "}
            <a href={PUZZLE} {...ext}>
              estudo publicado na revista Autism
            </a>{" "}
            encontrou associações negativas com peças de quebra-cabeça, inclusive
            em logos ligados ao autismo.
          </li>
          <li>
            <strong>Linguagem neuroafirmativa:</strong> “criança autista” ou
            “criança no espectro”, sem “portador” ou “sofre de”. Veja{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
          <li>
            <strong>Nada de “normalizar”:</strong> nomes que sugerem tornar a
            criança “normal” afastam famílias e profissionais que trabalham com
            a ideia de neurodiversidade.
          </li>
          <li>
            <strong>Leitura fácil:</strong> nomes curtos, sem trocadilho difícil
            nem grafia inventada, ajudam pais neurodivergentes e quem tem pouco
            tempo.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>{" "}
          aprofunda a parte visual e de comunicação.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Começar pelo nome sem briefing.</li>
          <li>Usar promessa ou “referência” no nome.</li>
          <li>Pôr “autismo” no nome principal e travar o crescimento.</li>
          <li>Quebra-cabeça no logo.</li>
          <li>Não pesquisar INPI, domínio e redes.</li>
          <li>Testar só com a equipe.</li>
          <li>Divulgar o nome fantasia sem inscrição da empresa no CRP.</li>
          <li>Logo de banco de imagem depois de um nome bem escolhido.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do nome</h2>
        <ul>
          <li>Briefing escrito: o quê, para quem, onde, como e três palavras.</li>
          <li>Caminho definido: descritivo, próprio com descritor ou sobrenome.</li>
          <li>Lista gerada por territórios de sentido.</li>
          <li>Nada de promessa, autoridade sem prova ou infantilização.</li>
          <li>Pesquisa no INPI, no Google, no domínio e nas redes.</li>
          <li>Teste em voz alta, por escrito e com pais do público.</li>
          <li>Empresa registrada no CRP, com responsável técnico.</li>
          <li>Descritor, identidade visual e site alinhados ao nome.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como a clínica trabalha, para quem e aonde quer chegar. Daí
          saem o posicionamento, a identidade visual e o site, revisados pelo
          art. 20. O nome entra como item opcional, caso a caso, porque depende
          do registro da pessoa jurídica. Tudo é apresentado em até 30 dias, com
          o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua clínica está nascendo, marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026 (pessoa jurídica e clínicas).
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20 (alíneas c, e, f, h).
          </li>
          <li>
            Instituto Nacional da Propriedade Industrial.{" "}
            <a href={INPI} {...ext}>
              Marcas
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={BERENICE} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista
            </a>
            .
          </li>
          <li>
            Gernsbacher, M. A.; Raimond, A. R.; Stevenson, J. L.; Boston, J. S.;
            Harp, B.{" "}
            <a href={PUZZLE} {...ext}>
              Do puzzle pieces and autism puzzle piece logos evoke negative
              associations?
            </a>{" "}
            Autism, 2018.
          </li>
        </ul>
      </section>
    </>
  )
};
