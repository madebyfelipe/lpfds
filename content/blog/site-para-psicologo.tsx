import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

export const post: Post = {
  slug: "site-para-psicologo",
  title: "Site profissional para psicólogo: o que precisa ter e o que o Código de Ética não permite",
  description:
    "O que um site de psicólogo precisa ter, as páginas essenciais, os cuidados com o artigo 20 e a LGPD, e quando vale ter um site além do Instagram.",
  keyword: "site profissional para psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-08",
  summary:
    "Um site de psicólogo precisa trazer nome completo, a palavra psicólogo(a) e o CRP; dizer para quem você atende e como; mostrar formação real; oferecer um caminho de contato claro; e ter política de privacidade se coletar dados. O Código de Ética não permite preço como chamariz, promessa de resultado, comparação com colegas nem imagens de atendimento.",
  faq: [
    { q: "Psicólogo precisa de site ou basta o Instagram?", a: "Depende. O Instagram é bom para conteúdo e relacionamento; o site ajuda a ser encontrado no Google e reúne informações estáveis. Para quem recebe muitas indicações ou quer ser encontrado por busca, um site simples costuma valer a pena." },
    { q: "Posso colocar o valor da sessão no site?", a: "O artigo 20 veda usar o preço como forma de propaganda, e a cartilha do CRP-MG inclui o destaque ao valor. Na dúvida sobre como informar, consulte o seu Conselho Regional." },
    { q: "O site precisa de política de privacidade?", a: "Se ele coleta dados — formulário, newsletter ou cookies de medição —, sim. A LGPD exige informar o que é coletado, para quê e por quanto tempo." }
  ],
  cover: {
    src: "/blog/site-para-psicologo/site-para-psicologo-notebook-na-mesa.jpg",
    alt: "Notebook aberto sobre mesa de madeira clara, com xícara de café, lápis e bloco de notas, cena de trabalho em um site",
    caption: "Foto: Lauren Mancke / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muitos consultórios funcionam só com Instagram e WhatsApp, e isso pode
        bastar por um tempo. Mas há um momento em que o perfil deixa de dar
        conta: quando quem chega por indicação pesquisa o seu nome no Google e
        não encontra nada, quando você precisa explicar o mesmo processo em
        toda primeira conversa, ou quando quer que o consultório seja
        encontrado por quem ainda não conhece você.
      </p>
      <p>
        É aí que entra o site. Este texto explica o que um site de psicólogo
        precisa ter, quais páginas são essenciais, o que o Código de Ética não
        permite e que cuidados tomar com dados pessoais.
      </p>

      <section>
        <h2>Site ou só Instagram?</h2>
        <p>
          Os dois cumprem papéis diferentes. A rede social é boa para
          frequência, conteúdo e relacionamento; o site é bom para ser
          encontrado em buscas, reunir informações estáveis e mostrar, num único
          lugar, quem você é e como trabalha.
        </p>
        <p>Um site costuma fazer sentido quando:</p>
        <ul>
          <li>Você quer ser encontrado por quem pesquisa no Google pela sua especialidade ou cidade.</li>
          <li>Recebe muitas indicações e as pessoas pesquisam seu nome antes de chamar.</li>
          <li>Atende um público específico e precisa explicar com calma o que faz.</li>
          <li>Não quer depender de uma única plataforma para ser encontrado.</li>
        </ul>
        <p>
          Um site não precisa ser grande. Uma página bem feita, com as
          informações certas, costuma resolver mais do que dez páginas genéricas.
        </p>
      </section>

      <section>
        <h2>O que um site de psicólogo precisa ter</h2>
        <h3>1. Identificação completa</h3>
        <p>
          O artigo 20 do{" "}
          <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          determina que toda divulgação informe nome completo, CRP e número de
          registro. No site, isso deve aparecer de forma visível — no topo, no
          rodapé ou na página “Sobre”, e não escondido.
        </p>
        <h3>2. Para quem você atende</h3>
        <p>
          Público, faixa etária e principais demandas. Essa é a primeira
          pergunta de quem chega, e a que mais ajuda a pessoa certa a se
          reconhecer.
        </p>
        <h3>3. Como você trabalha</h3>
        <p>
          Abordagem, formato (presencial, online ou ambos), duração e frequência
          das sessões, como é o primeiro contato. Explique em linguagem simples,
          sem jargão.
        </p>
        <h3>4. Formação e qualificações</h3>
        <p>
          Apenas títulos e qualificações que você possui, e somente técnicas e
          práticas reconhecidas ou regulamentadas pela profissão — de novo, regra
          do artigo 20.
        </p>
        <h3>5. Contato claro</h3>
        <p>
          Um caminho principal (WhatsApp, formulário ou agenda) e, se houver
          atendimento presencial, endereço com mapa. Quanto menos passos até a
          primeira mensagem, melhor.
        </p>
        <h3>6. Páginas legais</h3>
        <p>
          Se o site coleta dados — formulário, newsletter, cookies de medição —,
          ele precisa de uma política de privacidade que explique o que é
          coletado, para quê e por quanto tempo, como pede a{" "}
          <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" {...ext}>
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          </a>
          .
        </p>
      </section>

      <section>
        <h2>O que o Código de Ética não permite no site</h2>
        <p>
          As mesmas regras que valem para o Instagram valem para o site. Os
          pontos que mais aparecem em sites de psicólogos:
        </p>
        <ul>
          <li>
            <strong>Preço como chamariz.</strong> O artigo 20 veda usar o preço do
            serviço como forma de propaganda. A{" "}
            <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
              cartilha do CRP-MG
            </a>{" "}
            inclui nisso gratuidade, descontos, pacotes e “preço social”. Tratamos
            disso em detalhe em{" "}
            <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
              psicólogo pode divulgar preço?
            </Link>
          </li>
          <li>
            <strong>Promessa de resultado.</strong> “Acabe com a ansiedade em 8
            sessões” é previsão taxativa de resultado. Descreva objetivos e
            possíveis benefícios de forma geral, sem garantir nada.
          </li>
          <li>
            <strong>Depoimentos de pacientes.</strong> Além do risco ao sigilo, a
            cartilha do CRP-MG não recomenda o uso de depoimentos quando o foco é
            promover o profissional, mesmo com autorização.
          </li>
          <li>
            <strong>Comparação com colegas.</strong> “O melhor psicólogo da
            cidade” é autopromoção em detrimento de outros profissionais.
          </li>
          <li>
            <strong>Imagens de atendimento.</strong> Fotos de sessão, de pacientes
            ou de material produzido em atendimento ficam de fora.
          </li>
        </ul>
      </section>

      <section>
        <h2>Atendimento online no site</h2>
        <p>
          Se você atende online, vale dizer isso com clareza no site. O
          atendimento por meios digitais tem regulamentação própria do Conselho
          Federal de Psicologia, que inclui cadastro na plataforma e-Psi. Como a
          norma já foi atualizada mais de uma vez, confira a resolução vigente no{" "}
          <a href="https://site.cfp.org.br/" {...ext}>
            site do CFP
          </a>{" "}
          ou com o seu Conselho Regional antes de divulgar.
        </p>
      </section>

      <section>
        <h2>Estrutura mínima que funciona</h2>
        <p>
          Para um consultório individual, uma estrutura enxuta costuma bastar:
        </p>
        <ul>
          <li>
            <strong>Página inicial</strong> — quem você é, para quem atende, como
            trabalha e um botão de contato, tudo no primeiro rolar da tela.
          </li>
          <li>
            <strong>Sobre</strong> — formação, trajetória e abordagem, com nome
            completo e CRP.
          </li>
          <li>
            <strong>Atendimento</strong> — formatos, público, como é o primeiro
            contato, perguntas frequentes.
          </li>
          <li>
            <strong>Conteúdo (opcional)</strong> — artigos que respondem às
            dúvidas do seu público.
          </li>
          <li>
            <strong>Contato e páginas legais</strong> — canal principal,
            endereço se houver, política de privacidade.
          </li>
        </ul>
        <p>
          Comece pequeno e bem feito. É mais fácil acrescentar uma página depois
          do que manter dez páginas desatualizadas.
        </p>
      </section>

      <section>
        <h2>Ser encontrado no Google</h2>
        <p>Alguns cuidados básicos fazem diferença para o site aparecer nas buscas:</p>
        <ul>
          <li>
            <strong>Título e descrição de cada página</strong> com o que a pessoa
            pesquisaria — por exemplo, “psicóloga infantil em [cidade]”.
          </li>
          <li>
            <strong>Um único endereço</strong> (com ou sem “www”), com o outro
            redirecionando para ele.
          </li>
          <li>
            <strong>Site rápido e legível no celular</strong>, onde acontece a
            maior parte das buscas.
          </li>
          <li>
            <strong>Perfil da Empresa no Google</strong> com o mesmo nome,
            endereço e contato do site, se houver atendimento presencial.
          </li>
          <li>
            <strong>Conteúdo útil</strong> — artigos que respondem às perguntas
            reais do seu público ajudam o site a ser encontrado com o tempo.
          </li>
        </ul>
      </section>

      <section>
        <h2>Acessibilidade não é detalhe</h2>
        <p>
          Texto com bom contraste, fontes legíveis, botões grandes o bastante
          para o toque e imagens com descrição (texto alternativo) tornam o site
          utilizável por mais pessoas. A referência mais usada é a{" "}
          <a href="https://www.w3.org/TR/WCAG21/" {...ext}>
            WCAG 2.1
          </a>
          , que pede, por exemplo, contraste mínimo de 4,5:1 para texto comum.
        </p>
      </section>

      <section>
        <h2>O site é a marca em outro formato</h2>
        <p>
          Um site com template genérico e fotos de banco de imagem diz pouco
          sobre você. Quando ele nasce da mesma estratégia que orienta a
          identidade visual e verbal do consultório, cores, textos e organização
          das informações passam a contar a mesma história do Instagram, do
          cartão e da primeira conversa. Falamos sobre isso em{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Checklist rápido</h2>
        <ul>
          <li>Nome completo, “psicólogo(a)” e CRP visíveis?</li>
          <li>Público, formato e primeiro contato explicados em poucas linhas?</li>
          <li>Nenhum preço, desconto ou gratuidade como chamariz?</li>
          <li>Nenhuma promessa de resultado nem depoimento de paciente?</li>
          <li>Política de privacidade, se o site coleta dados?</li>
          <li>Funciona bem no celular e tem bom contraste?</li>
          <li>Título e descrição de cada página com o que o seu público pesquisa?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A página profissional
          faz parte das entregas. Se quiser conversar sobre o site do seu
          consultório, o primeiro passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
          <li>
            W3C.{" "}
            <a href="https://www.w3.org/TR/WCAG21/" {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
