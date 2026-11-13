import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA =
  "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LBI = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm";
const LEI_TEA = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const GBP_FOTOS = "https://support.google.com/business/answer/6103862?hl=pt-BR";

export const post: Post = {
  slug: "decoracao-consultorio-psicologia-infantil",
  title: "Decoração de consultório de psicologia infantil: sala acolhedora e sensorialmente calma",
  description:
    "Como pensar a decoração de um consultório de psicologia infantil: estímulo na medida, sigilo na recepção, acessibilidade e fotos do espaço sem expor crianças.",
  keyword: "decoração de consultório de psicologia infantil",
  tags: ["identidade-visual", "neurodivergencia"],
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-13",
  summary:
    "A decoração de um consultório infantil funciona melhor quando acolhe sem estimular demais: poucos elementos, tons calmos, materiais organizados ao alcance e uma entrada que proteja o sigilo. Para crianças autistas e neurodivergentes, vale reduzir ruído visual e sonoro e conversar com as famílias. Fotos do espaço podem ser divulgadas, desde que sem crianças, sem sessões e sem material de atendimento.",
  faq: [
    {
      q: "Consultório de psicologia infantil precisa ser colorido e cheio de brinquedos?",
      a: "Não. Muito estímulo pode cansar algumas crianças, em especial as com sensibilidade sensorial. Prefira paredes em tons calmos, cor em poucos objetos e brinquedos guardados em caixas ou armários fechados, trazidos conforme a sessão."
    },
    {
      q: "O que precisa ter em uma sala de psicologia infantil?",
      a: "Não há lista oficial; a escolha dos materiais segue a sua abordagem. Na decoração, o básico é móvel na altura da criança, chão confortável para brincar, armário que feche, mesa pequena, luz regulável, um canto mais reservado e superfícies fáceis de limpar."
    },
    {
      q: "Dá para usar a mesma sala para atender adultos e crianças?",
      a: "Dá, e é comum. Mantenha a base neutra (paredes, sofá, luz) e guarde os materiais infantis em armário fechado, montando o espaço conforme o atendimento. Assim o adulto não se sente numa brinquedoteca e a criança encontra o que precisa."
    },
    {
      q: "Posso postar fotos do consultório infantil no Instagram?",
      a: "Pode, desde que sem crianças atendidas, sem sessão em andamento e sem material produzido em atendimento, como desenhos. Fotografe a sala vazia, a porta, a mesa, os livros, e confira cada canto antes de publicar."
    },
    {
      q: "Posso decorar o consultório para o Natal e outras datas?",
      a: "Pode, com moderação. Mudanças grandes no ambiente quebram a previsibilidade de crianças que dependem dela, e alguns símbolos evocam lembranças difíceis. Se decorar, prefira poucos elementos, avise as famílias antes e mantenha a sala de atendimento o mais parecida possível com o normal."
    }
  ],
  cover: {
    src: "/blog/decoracao-consultorio-psicologia-infantil/decoracao-consultorio-psicologia-infantil-poltrona-verde-e-plantas.jpg",
    alt: "Poltrona verde, plantas e prateleiras em uma sala de paredes claras, sem pessoas",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Para uma criança, a sala é a primeira parte da terapia. Para os pais, é a
        prova de que aquele espaço foi pensado para ela. A decoração de um
        consultório de psicologia infantil, porém, pede mais critério do que
        brinquedos e paredes coloridas: pede decidir quanto estímulo o ambiente
        oferece, como o sigilo é protegido e o que da sala pode virar divulgação.
      </p>
      <p>
        A resposta curta: base calma e neutra, cor em poucos pontos, materiais
        guardados e ao alcance, móveis na altura da criança, luz que se possa
        baixar e um caminho de entrada que proteja quem chega. A seguir estão
        as normas que tocam o espaço físico, sete decisões de decoração com
        exemplos, uma tabela do que pode e do que evitar e os cuidados extras
        para crianças autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas sobre o espaço</h2>
        <p>
          Nenhuma norma do CFP dita cor de parede ou brinquedo. O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          dá três princípios que chegam ao espaço físico:
        </p>
        <ul>
          <li>
            <strong>Condições apropriadas:</strong> o artigo 1º, alínea c, pede
            serviços prestados &ldquo;em condições de trabalho dignas e
            apropriadas à natureza desses serviços&rdquo;.
          </li>
          <li>
            <strong>Sigilo:</strong> o artigo 9º pede proteger a intimidade das
            pessoas atendidas, o que inclui acústica, recepção e o que fica à
            vista.
          </li>
          <li>
            <strong>Divulgação:</strong> o artigo 20 vale para as fotos do espaço
            publicadas no site e nas redes.
          </li>
        </ul>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP 01/2022
          </a>{" "}
          completa o último ponto: fotos de pessoas atendidas, mesmo com
          consentimento por escrito, não são recomendadas, em especial de
          crianças e adolescentes. E a{" "}
          <a href={LBI} {...ext}>
            Lei Brasileira de Inclusão (Lei 13.146/2015)
          </a>{" "}
          trata a acessibilidade como direito da pessoa com deficiência; a{" "}
          <a href={LEI_TEA} {...ext}>
            Lei 12.764/2012
          </a>{" "}
          considera a pessoa com transtorno do espectro autista pessoa com
          deficiência para todos os efeitos legais.
        </p>
      </section>

      <section>
        <h2>Estímulo na medida</h2>
        <p>
          A sala ideal oferece pouco estímulo de base e deixa o estímulo extra
          para quando a sessão pedir. Uma sala cheia de cores, brinquedos à
          vista e barulho pode funcionar para uma criança e sobrecarregar outra.
        </p>
        <ol>
          <li>Paredes em tons calmos; cor viva só em objetos pontuais.</li>
          <li>Brinquedos e materiais guardados, trazidos conforme a sessão.</li>
          <li>Luz suave, com possibilidade de baixar a intensidade.</li>
          <li>Um canto mais reservado, onde a criança possa se afastar.</li>
          <li>Cheiros e sons discretos: sem difusor forte, sem música ambiente.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia troca três
          estantes abertas, cheias de brinquedos, por um armário de portas
          lisas. Ela deixa à vista só uma caixa por sessão. Os pais comentam
          que a filha, que antes corria de um brinquedo a outro, agora escolhe
          e fica.
        </p>
        <p>
          <strong>Erro comum:</strong> decorar a sala para agradar o adulto que
          visita o perfil, e não a criança que entra. A resposta varia de
          criança para criança; a conversa com a família, antes do primeiro
          encontro, diz mais do que qualquer regra geral.
        </p>
      </section>

      <section>
        <h2>Paleta e marca do consultório</h2>
        <p>
          As cores da sala podem conversar com as da identidade visual do
          consultório, em doses pequenas. A marca aparece num tapete, numa
          almofada, na porta; não precisa cobrir as paredes.
        </p>
        <ul>
          <li>Base clara e quente (off-white, areia, cinza quente) nas paredes.</li>
          <li>Uma ou duas cores da marca em tecidos e objetos trocáveis.</li>
          <li>Acabamento fosco, que reflete menos luz do que o brilhante.</li>
          <li>Madeira, tecido e plantas para dar calor sem cor forte.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> a marca fictícia de um consultório usa
          azul-petróleo e terracota. A sala fica com paredes areia, um tapete
          terracota lavável e almofadas azul-petróleo. A mesma dupla de cores
          aparece no site e no cartão, e a família reconhece o lugar quando
          chega.
        </p>
        <p>
          <strong>Erro comum:</strong> pintar uma parede inteira com a cor mais
          forte da marca. Detalhes em{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          e em{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Móveis, chão e materiais</h2>
        <p>
          Na sala infantil, o chão é móvel: boa parte da sessão acontece nele.
          Escolha peças baixas, firmes e fáceis de limpar.
        </p>
        <ol>
          <li><strong>Chão:</strong> tapete lavável ou piso emborrachado, confortável para sentar.</li>
          <li><strong>Mesa e cadeiras:</strong> na altura da criança, estáveis, sem quinas vivas.</li>
          <li><strong>Armário:</strong> fechado, com prateleiras baixas para o que a criança pode pegar sozinha.</li>
          <li><strong>Assento para o adulto:</strong> uma poltrona para os pais nas conversas de orientação.</li>
          <li><strong>Segurança:</strong> móveis altos presos à parede, tomadas protegidas, nada de vidro ao alcance.</li>
          <li><strong>Limpeza:</strong> tecidos removíveis e superfícies laváveis.</li>
        </ol>
        <p>
          A escolha dos brinquedos e recursos segue a sua abordagem, e não a
          decoração. O que a decoração decide é onde eles ficam e quando
          aparecem.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> um psicólogo fictício que atende
          crianças e adultos mantém sofá e poltrona neutros, um tapete grande e
          um armário fechado com os materiais infantis. Antes da sessão
          infantil, ele abre o armário e baixa uma caixa; antes da sessão de
          adulto, fecha.
        </p>
        <p>
          <strong>Erro comum:</strong> mesa de adulto com cadeira alta para a
          criança. Ela fica com os pés soltos, desconfortável, e a postura vira
          assunto da sessão.
        </p>
      </section>

      <section>
        <h2>Luz, som e cheiro</h2>
        <p>
          Luz indireta, pouco ruído e nenhum cheiro forte tornam a sala mais
          previsível para todas as crianças. Esses três itens custam pouco e
          mudam muito.
        </p>
        <ul>
          <li><strong>Luz:</strong> abajures ou luz indireta, cortina para o sol direto, lâmpadas que não piscam e intensidade regulável.</li>
          <li><strong>Som:</strong> tapete, cortina e estofados abafam eco; sem TV ou música na espera.</li>
          <li><strong>Cheiro:</strong> sem difusor, vela ou produto de limpeza perfumado logo antes da sessão.</li>
          <li><strong>Temperatura:</strong> ar-condicionado silencioso, com saída de ar que não bata direto no chão onde a criança brinca.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> numa clínica fictícia, o ruído do
          ar-condicionado antigo incomoda uma criança a cada sessão. Trocar o
          aparelho resolve o desconforto e também a acústica entre as salas.
        </p>
        <p>
          <strong>Erro comum:</strong> música ambiente na sala de espera para
          &ldquo;acalmar&rdquo;. Para muitas crianças, ela soma estímulo. Mais
          ajustes sensoriais em{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Sigilo começa na entrada</h2>
        <p>
          O sigilo é dever do psicólogo pelo artigo 9º do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          , e o espaço físico faz parte dele. Pense no caminho da família, da
          porta da rua até a sala:
        </p>
        <ol>
          <li>Horários espaçados para evitar o encontro de famílias na entrada.</li>
          <li>Sala de espera sem agenda, prontuário ou nomes à vista.</li>
          <li>Acústica que não deixe vazar a conversa da sala: porta sólida, vedação, ruído branco do lado de fora.</li>
          <li>Conversas com os pais fora do alcance de outras famílias.</li>
          <li>Produções das crianças guardadas, nunca expostas no mural.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício tinha um mural
          com desenhos das crianças atendidas na sala de espera. A psicóloga
          percebe que uma mãe reconheceu o nome de um colega da escola do
          filho. O mural vira um quadro de avisos gerais, e os desenhos voltam
          para as pastas.
        </p>
        <p>
          <strong>Erro comum:</strong> o mural de desenhos. Além do risco de
          identificação, a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          veda expor desenhos e qualquer material decorrente de serviços
          psicológicos que possa identificar o usuário.
        </p>
      </section>

      <section>
        <h2>Acessibilidade informada</h2>
        <p>
          Entrada sem degraus, circulação livre, banheiro acessível e
          sinalização clara fazem diferença, e saber disso antes de ir também.
        </p>
        <ul>
          <li>Rampa ou elevador até a sala, com porta larga.</li>
          <li>Espaço para carrinho e cadeira de rodas na espera.</li>
          <li>Banheiro acessível, com trocador quando possível.</li>
          <li>Sinalização simples, com palavra e pictograma.</li>
        </ul>
        <p>
          Registre essas informações no{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Perfil da Empresa no Google
          </Link>{" "}
          e no site, com fotos da entrada.{" "}
          <strong>Erro comum:</strong> escrever &ldquo;espaço acessível&rdquo;
          sem dizer o que isso significa. A família de uma criança que usa
          cadeira de rodas precisa saber se há degrau na porta.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na decoração</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar na decoração do consultório infantil" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar na decoração do consultório infantil</caption>
            <thead><tr><th scope="col">Pode</th><th scope="col">Evitar</th></tr></thead>
            <tbody>
              <tr><td>Paredes em tom calmo e cor da marca em objetos</td><td>Parede inteira em cor forte ou muitos padrões juntos</td></tr>
              <tr><td>Armário fechado e uma caixa por sessão</td><td>Estantes abertas lotadas de brinquedos</td></tr>
              <tr><td>Luz indireta e regulável</td><td>Lâmpada fria direta e que pisca</td></tr>
              <tr><td>Tapete lavável e móveis na altura da criança</td><td>Vidro, quina viva e móvel alto solto</td></tr>
              <tr><td>Quadro de avisos gerais na espera</td><td>Mural com desenhos ou nomes de crianças atendidas</td></tr>
              <tr><td>Fotos da sala vazia no site e nas redes</td><td>Fotos com criança, sessão ou produção de atendimento</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Fotos do espaço, sem expor ninguém</h2>
        <p>
          Mostrar o consultório ajuda a família a se imaginar ali. Pela{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica 01/2022
          </a>{" "}
          e pelo artigo 20, a foto mostra o espaço, não quem é atendido.
        </p>
        <ul>
          <li>Fotografe a sala vazia, a porta, a mesa, os livros, a entrada do prédio.</li>
          <li>Nada de criança atendida, sessão ou material produzido em atendimento.</li>
          <li>Sem agenda, prontuário ou nome de paciente no enquadramento.</li>
          <li>
            Para o Google, o{" "}
            <a href={GBP_FOTOS} {...ext}>
              Perfil da Empresa recomenda
            </a>{" "}
            fotos nítidas, bem iluminadas e sem filtro em excesso.
          </li>
        </ul>
        <p>
          Dicas de luz e enquadramento em{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Avançado: a sala como parte da marca</h2>
        <p>
          Quem já tem a sala resolvida pode fazer dela um ponto de contato
          coerente com o resto da marca. Três ideias:
        </p>
        <ul>
          <li>
            <strong>Placa e porta:</strong> nome, CRP e a mesma tipografia do
            site, para a família reconhecer o lugar na primeira visita.
          </li>
          <li>
            <strong>Papelaria na recepção:</strong> cartão, recibo e materiais
            de orientação com as mesmas cores do espaço (veja{" "}
            <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
              cartão de visita para psicólogo
            </Link>
            ).
          </li>
          <li>
            <strong>Guia da primeira visita:</strong> uma página no site com
            fotos do caminho até a sala, o que a criança vai encontrar e como
            funciona a espera.
          </li>
        </ul>
        <p>
          A identidade visual não substitui o cuidado do espaço; ela liga a
          sala ao site, às redes e aos impressos. Para quem atende crianças
          pequenas, o logo também tem um texto próprio:{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para crianças autistas e neurodivergentes, previsibilidade e controle
          do estímulo pesam mais do que estética. A decoração ajuda quando
          diminui surpresas.
        </p>
        <ul>
          <li>
            <strong>Mesma sala, mesma disposição:</strong> evite trocar móveis
            de lugar entre as sessões; se precisar mudar, avise a família antes.
          </li>
          <li>
            <strong>Canto de regulação:</strong> um espaço mais escuro e
            silencioso, com almofadas, onde a criança pode se recolher.
          </li>
          <li>
            <strong>Espera flexível:</strong> a opção de esperar no carro ou do
            lado de fora, com aviso pelo WhatsApp, para quem não tolera a sala
            de espera.
          </li>
          <li>
            <strong>Fones e objetos sensoriais</strong> disponíveis, sem ficar
            todos à vista.
          </li>
          <li>
            <strong>Conversa prévia:</strong> pergunte aos pais sobre
            sensibilidades a luz, som, cheiro e texturas antes da primeira
            visita.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia envia aos pais,
          antes da primeira consulta, cinco fotos: a fachada, a porta, a espera,
          a sala e o canto de almofadas. Muitas famílias mostram as fotos à
          criança na véspera. Mais sobre comunicar com essas famílias em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Sala lotada de cor e brinquedos à vista.</li>
          <li>Mural com desenhos ou nomes das crianças atendidas.</li>
          <li>Música ambiente e difusor de aromas.</li>
          <li>Móveis de adulto para a criança.</li>
          <li>Acústica que deixa a conversa vazar.</li>
          <li>&ldquo;Espaço acessível&rdquo; sem detalhar o acesso.</li>
          <li>Decoração de datas comemorativas que muda a sala inteira.</li>
          <li>Foto do espaço com criança ou produção de atendimento.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da sala infantil</h2>
        <ul>
          <li>Paredes calmas e cor da marca só em objetos?</li>
          <li>Materiais em armário fechado, com uma parte ao alcance da criança?</li>
          <li>Luz regulável e sem lâmpada piscando?</li>
          <li>Chão confortável e móveis na altura da criança, presos e sem quinas?</li>
          <li>Canto mais reservado para a criança se afastar?</li>
          <li>Entrada e espera sem nomes, agenda ou produções à vista?</li>
          <li>Acesso descrito no site e no Google, com fotos?</li>
          <li>Fotos de divulgação só do espaço vazio?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A decoração do
          espaço físico é do consultório; a identidade visual é o fio que liga a
          sala ao site e às redes. Veja exemplos em{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>{" "}
          e o processo na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>
          . Se quiser conversar sobre a sua marca, o primeiro passo é uma
          conversa de 15 minutos.
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
            , arts. 1º, 9º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica nº 01/2022 — Uso Profissional das Redes Sociais: Publicidade e Cuidados Éticos
            </a>
            .
          </li>
          <li>
            CRP-MG.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional
            </a>
            , abril de 2026 (seção &ldquo;Sigilo&rdquo;).
          </li>
          <li>
            Brasil.{" "}
            <a href={LBI} {...ext}>
              Lei nº 13.146/2015 — Lei Brasileira de Inclusão da Pessoa com Deficiência
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_TEA} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista
            </a>
            , art. 1º, § 2º.
          </li>
          <li>
            Google.{" "}
            <a href={GBP_FOTOS} {...ext}>
              Gerenciar fotos e vídeos do Perfil da Empresa
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
