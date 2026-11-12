import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";

export const post: Post = {
  slug: "marketing-para-psicologos-codigo-de-etica",
  title: "Marketing para psicólogos: o que o Código de Ética permite e 5 canais que funcionam",
  description:
    "Um guia de marketing para psicólogos que respeita o artigo 20: o que pode e o que não pode na divulgação, canais que funcionam e como organizar a presença do consultório.",
  keyword: "marketing para psicólogos",
  tags: ["divulgacao-etica"],
  publishedAt: "2026-11-09",
  summary:
    "Psicólogo pode e deve divulgar o seu trabalho, desde que siga o artigo 20 do Código de Ética: identificar-se com nome completo e CRP, citar só títulos que possui, não usar preço como propaganda, não prometer resultado, não se comparar a colegas e não ser sensacionalista. Um marketing ético começa pela marca — clareza sobre para quem você atende — e se sustenta em indicação, presença digital consistente e conteúdo útil.",
  faq: [
    { q: "Psicólogo pode fazer tráfego pago?", a: "Pode. O meio não é proibido; o conteúdo do anúncio é que precisa seguir o artigo 20: nome completo e CRP, sem preço como chamariz, sem promessa de resultado e sem sensacionalismo." },
    {
      q: "Psicólogo pode fazer propaganda?",
      a: "Pode. A cartilha do CRP-MG lembra que a publicidade profissional é um recurso de acesso da sociedade à psicologia. Ela só precisa seguir o artigo 20 do Código de Ética e os artigos 53 a 58 da Resolução CFP nº 003/2007."
    },
    {
      q: "Psicólogo pode impulsionar posts e fazer anúncios pagos?",
      a: "O Código não proíbe o meio — o artigo 20 vale para divulgação “por quaisquer meios”. O que importa é o conteúdo do anúncio: identificação com CRP, sem preço como chamariz, sem promessa de resultado e sem sensacionalismo."
    },
    {
      q: "Posso dizer que sou especialista?",
      a: "Só se você tiver o título: especialização acadêmica ou registro de especialista no CFP. Sem título, a cartilha do CRP-MG orienta divulgar área de atuação, experiência e tipos de serviço, sem apresentá-los como especialidade."
    },
    {
      q: "Por onde começar o marketing do consultório?",
      a: "Pelo posicionamento: definir para quem você atende e o que distingue o seu trabalho. Depois, identidade visual e verbal consistentes, um canal principal (Instagram ou site) bem resolvido e o cuidado com a rede de indicações."
    }
  ],
  cover: {
    src: "/blog/marketing-para-psicologos-codigo-de-etica/marketing-para-psicologos-planejamento.jpg",
    alt: "Mesa clara com caderno aberto, lápis, envelopes e celular em tons pastel, vista de cima, cena de planejamento",
    caption: "Foto: Beauty and Fashion / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        “Marketing” ainda soa estranho para muitos psicólogos — como se divulgar
        o próprio trabalho fosse incompatível com a ética da profissão. Não é. A{" "}
        <a href={CARTILHA} {...ext}>
          cartilha de publicidade do CRP-MG
        </a>{" "}
        abre com essa ideia: a publicidade profissional é um recurso importante
        de ampliação do acesso da sociedade à ciência psicológica, aos serviços
        e aos padrões éticos da profissão. O que existe são regras sobre{" "}
        <em>como</em> divulgar. Este guia organiza essas regras e mostra como
        construir a presença do consultório dentro delas.
      </p>

      <section>
        <h2>As regras em uma lista</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          determina que o psicólogo, ao promover publicamente seus serviços, por
          quaisquer meios:
        </p>
        <ul>
          <li>informe nome completo, CRP e número de registro;</li>
          <li>faça referência apenas a títulos ou qualificações que possua;</li>
          <li>divulgue apenas técnicas e práticas reconhecidas ou regulamentadas pela profissão;</li>
          <li>não use o preço do serviço como forma de propaganda;</li>
          <li>não faça previsão taxativa de resultados;</li>
          <li>não faça autopromoção em detrimento de outros profissionais;</li>
          <li>não proponha atividades privativas de outras categorias;</li>
          <li>não faça divulgação sensacionalista.</li>
        </ul>
        <p>
          A Resolução CFP nº 003/2007 (artigos 53 a 58) complementa essas regras,
          e a publicidade também precisa respeitar o Código de Defesa do
          Consumidor.
        </p>
      </section>

      <section>
        <h2>O que isso muda na prática</h2>
        <h3>Sem superlativos</h3>
        <p>
          “O melhor psicólogo da cidade”, “referência número 1”, “o maior
          especialista” — além de impossíveis de comprovar, são autopromoção em
          detrimento de colegas. A cartilha sugere outro caminho: mostrar
          diferencial pela formação e pela qualificação, sem adjetivos.
        </p>
        <h3>Sem promessa</h3>
        <p>
          A publicidade pode apresentar, de forma geral, objetivos e possíveis
          benefícios de um serviço, mas não pode prever ou garantir resultados.
        </p>
        <h3>Sem preço como chamariz</h3>
        <p>
          Gratuidade, descontos, pacotes e “preço social” em destaque também
          entram na vedação — detalhamos em{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>
        </p>
        <h3>Títulos com cuidado</h3>
        <p>
          A cartilha diferencia títulos acadêmicos (especialista, mestre,
          doutor), profissionais (registro de especialista pelo CFP) e
          qualificações (cursos livres, formações). Curso livre não é
          especialização. Sem títulos, divulgue área de atuação, experiência e
          tipos de serviço.
        </p>
        <h3>Práticas reconhecidas</h3>
        <p>
          A cartilha lembra que não é adequado se apresentar como psicólogo junto
          a práticas estranhas à psicologia no mesmo perfil, e cita a Nota
          Técnica CFP nº 01/2023 sobre a incompatibilidade das constelações
          familiares com o exercício profissional.
        </p>
      </section>

      <section>
        <h2>Erros que mais contrariam o artigo 20</h2>
        <div className="inst-blog__table" role="region" aria-label="Erros comuns no marketing de psicólogos e como corrigir" tabIndex={0}>
          <table>
            <caption>Erros comuns no marketing de psicólogos e como corrigir</caption>
            <thead><tr><th scope="col">Erro</th><th scope="col">Regra</th><th scope="col">Como fazer</th></tr></thead>
            <tbody>
            <tr><td>“O melhor psicólogo da cidade”</td><td>Autopromoção em detrimento de colegas (art. 20, f)</td><td>Mostre formação e área de atuação, sem adjetivos</td></tr>
            <tr><td>“Acabe com a ansiedade em 8 sessões”</td><td>Previsão taxativa de resultado (art. 20, e)</td><td>Descreva objetivos e formato, sem garantir resultado</td></tr>
            <tr><td>Promoção, desconto ou sessão grátis</td><td>Preço como propaganda (art. 20, d)</td><td>Informe o valor só a quem pergunta</td></tr>
            <tr><td>Depoimento ou print de paciente</td><td>Sigilo e sensacionalismo</td><td>Use conteúdo útil e clareza sobre o atendimento</td></tr>
            <tr><td>“Especialista” sem o título</td><td>Só títulos que possui (art. 20, b)</td><td>Divulgue área de atuação e experiência</td></tr>
            <tr><td>Divulgação sem nome completo e CRP</td><td>Identificação obrigatória (art. 20, a)</td><td>CRP na bio, no site, no anúncio e no cartão</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Os canais que costumam funcionar</h2>
        <h3>Indicação</h3>
        <p>
          Para muitos consultórios, a indicação — de pacientes, colegas, escolas,
          médicos — é o principal canal. O marketing aqui é facilitar o caminho
          de quem foi indicado: um nome fácil de encontrar e informações claras
          quando a pessoa pesquisa.
        </p>
        <h3>Instagram</h3>
        <p>
          Vitrine e canal de conteúdo. Bio com CRP, destaques que respondem às
          dúvidas e identidade consistente — veja{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
        <h3>Site e busca no Google</h3>
        <p>
          Um site com as informações essenciais e artigos que respondem às
          perguntas do seu público faz o consultório ser encontrado por quem
          ainda não conhece você — veja{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site para psicólogo
          </Link>
          .
        </p>
        <h3>Perfil da Empresa no Google</h3>
        <p>
          Para atendimento presencial, mantém nome, endereço e contato visíveis
          em buscas locais e no mapa.
        </p>
        <h3>Rede profissional</h3>
        <p>
          Para quem atende crianças, o relacionamento com escolas, pediatras e
          outros profissionais da rede de cuidado é parte importante da
          divulgação — sempre respeitando os limites de cada profissão.
        </p>
      </section>

      <section>
        <h2>Por que começar pela marca</h2>
        <p>
          A maior parte dos problemas éticos na divulgação nasce de um vazio de
          posicionamento. Quando não está claro para quem o consultório existe e
          o que o distingue, a divulgação recorre ao que é fácil de comunicar:
          preço, promessa, superlativo. Com a marca definida, o conteúdo tem um
          ponto de partida que já cabe nas regras. Veja{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          e{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Conteúdo que cabe nas regras</h2>
        <p>
          Produzir conteúdo é uma das formas mais legítimas de divulgação: a
          cartilha do CRP-MG lembra que compartilhar informação sobre a
          psicologia também é uma forma de o profissional se apresentar. Para
          que o conteúdo ajude sem criar problemas:
        </p>
        <ul>
          <li>Baseie-se na ciência psicológica, não em senso comum.</li>
          <li>Fale de forma geral, sem casos reais ou reconhecíveis.</li>
          <li>Evite títulos alarmistas e listas de “sinais” em tom de diagnóstico.</li>
          <li>Distinga opinião pessoal de posicionamento técnico.</li>
          <li>Mantenha nome, psicólogo(a) e CRP visíveis onde o conteúdo vive.</li>
        </ul>
        <p>
          Para quem atende famílias de crianças neurodivergentes, conteúdos que
          explicam como funciona o acompanhamento, o que esperar da primeira
          conversa e como é a orientação aos pais costumam ser mais úteis do que
          conteúdos genéricos — e já fazem o trabalho de qualificar quem chega.
        </p>
      </section>

      <section>
        <h2>Um plano simples para os próximos meses</h2>
        <ol>
          <li>Definir o posicionamento: público, demanda, diferencial.</li>
          <li>Revisar a identificação em todos os canais: nome, psicólogo(a), CRP.</li>
          <li>Ajustar bio, destaques e site para responder às dúvidas mais comuns.</li>
          <li>Organizar uma identidade visual e verbal única.</li>
          <li>Planejar conteúdo útil para o público, sem casos nem depoimentos.</li>
          <li>Cuidar da rede de indicações com informação clara sobre o seu trabalho.</li>
        </ol>
        <p>
          Desconfie de qualquer consultoria que prometa “agenda cheia” ou posição
          garantida no Google: nenhum desses resultados pode ser garantido.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. O processo está em{" "}
          <Link href="/metodologia" className="inst-link">
            /metodologia
          </Link>
          . Se quiser conversar sobre a divulgação do seu consultório, o primeiro
          passo é uma conversa de 15 minutos.
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
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (cita a Resolução CFP nº 003/2007, arts. 53 a 58, e a
            Nota Técnica CFP nº 01/2023).
          </li>
        </ul>
      </section>
    </>
  )
};
