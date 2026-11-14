import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const RB_CATEGORIAS = "https://registro.br/dominio/categorias/";
const RB_REGRAS = "https://registro.br/dominio/regras/";
const RB = "https://registro.br/";
const CGI = "https://cgi.br/resolucoes/documento/2008/008";
const GOOGLE_MUDANCA =
  "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=pt-br";

export const post: Post = {
  slug: "dominio-site-psicologo",
  title: "Domínio para site de psicólogo: como escolher o nome, a extensão e registrar em 7 passos",
  description:
    "Como escolher o domínio do site de psicólogo: nome, .com.br ou .psc.br, registro no Registro.br, e-mail no mesmo endereço e os cuidados do art. 20.",
  keyword: "domínio para site de psicólogo",
  tags: ["presenca-digital"],
  publishedAt: "2026-11-14",
  summary:
    "O domínio é o endereço do site do consultório (por exemplo, anasouzapsicologia.com.br) e é a parte da presença digital que você não deve trocar depois. Escolha um nome curto, fácil de ditar por telefone e ligado ao seu nome ou ao nome do consultório; registre no Registro.br, em seu CPF ou no CNPJ do consultório, e use o mesmo domínio no e-mail. Além do .com.br, existe a categoria .psc.br, reservada a psicólogos.",
  faq: [
    {
      q: "Qual a melhor extensão de domínio para psicólogo: .com.br ou .psc.br?",
      a: "As duas funcionam. O .com.br é a extensão que as pessoas mais digitam por hábito no Brasil; o .psc.br é uma categoria do Registro.br para psicólogos e deixa a profissão clara no endereço. Se o nome estiver livre nas duas, muitos profissionais registram ambas e escolhem uma como principal, redirecionando a outra."
    },
    {
      q: "Quanto custa um domínio para site de psicólogo?",
      a: "No Registro.br, o registro de domínio .br custa R$ 40,00 por ano, segundo o próprio site da entidade no momento desta publicação. Empresas de hospedagem podem cobrar outro valor ao registrar por você. Hospedagem e criação do site são custos separados."
    },
    {
      q: "Posso registrar o domínio no meu CPF?",
      a: "Pode. As regras de registro de domínios .br, definidas pelo CGI.br, preveem titulares pessoa física (com CPF) e pessoa jurídica (com CNPJ). Se você pretende abrir CNPJ em breve, decida antes em nome de quem o domínio fica, porque trocar o titular depois depende das regras e dos procedimentos do Registro.br."
    },
    {
      q: "Posso usar a palavra psicólogo no domínio?",
      a: "Pode, desde que o endereço não sugira título que você não tem nem promessa. “anasouzapsicologa.com.br” é informativo; “melhorpsicologa” ou “curaansiedade” entram em conflito com o art. 20 do Código de Ética, que proíbe previsão taxativa de resultado e autopromoção em detrimento de outros profissionais."
    },
    {
      q: "Dá para trocar de domínio depois?",
      a: "Dá, mas tem custo: links antigos, cartões, perfis e posições no Google apontam para o endereço velho. É preciso redirecionar cada página com redirecionamento 301 e avisar o Google, como orienta a documentação do Google Search Central sobre mudança de site. Por isso vale escolher com calma na primeira vez."
    }
  ],
  cover: {
    src: "/blog/dominio-site-psicologo/dominio-site-psicologo-notebook-mesa.jpg",
    alt: "Notebook aberto com a tela em branco azulado ao lado de um copo de café sobre a mesa de madeira",
    caption: "Foto: rawpixel.com / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A psicóloga decide fazer o site, abre um construtor qualquer e, em
        cinco minutos, já tem um endereço como “anasouza123.site-gratis.com”.
        Funciona, mas é difícil de ditar ao telefone, não cabe no cartão e
        parece provisório. Meses depois, quando ela quer um endereço próprio,
        já tem links espalhados pelo Instagram e pelo Google apontando para o
        endereço antigo.
      </p>
      <p>
        A resposta curta: escolha o domínio antes de qualquer outra coisa do
        site. Um nome curto, fácil de falar, ligado ao seu nome ou ao nome do
        consultório, registrado em seu nome no Registro.br. Abaixo estão os
        sete passos, as diferenças entre .com.br e .psc.br, o que o art. 20
        tem a ver com o endereço, como usar o mesmo domínio no e-mail e o que
        fazer se você já tem um site num endereço provisório.
      </p>

      <section>
        <h2>O que é o domínio e por que ele vem primeiro</h2>
        <p>
          Domínio é o nome que as pessoas digitam para chegar ao site, como
          “anasouzapsicologia.com.br”. Ele é diferente da hospedagem (onde os
          arquivos do site ficam) e do construtor ou da agência que faz o site.
          Você pode trocar hospedagem e design várias vezes; o domínio, o ideal
          é que fique.
        </p>
        <p>
          Ele vem primeiro porque aparece em tudo: no cartão de visita, na bio
          do Instagram, no Perfil da Empresa no Google, no e-mail, na placa do
          consultório. Cada peça impressa e cada link compartilhado reforça
          esse endereço. Se ele muda, tudo isso precisa mudar junto.
        </p>
        <p>
          <strong>Erro comum:</strong> deixar o domínio no nome da agência ou do
          sobrinho que fez o site. Se a relação acaba, o endereço do seu
          consultório fica com outra pessoa. O domínio precisa estar no seu CPF
          ou no CNPJ do consultório, com o seu e-mail como contato.
        </p>
      </section>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Não há regra do CFP específica para domínio. Mas o endereço do site é
          parte da forma como você se apresenta publicamente, e o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          vale para a divulgação “por quaisquer meios”: só títulos que você
          tem (alínea b), nada de previsão taxativa de resultado (alínea e),
          nada de autopromoção em detrimento de outros profissionais (alínea
          f) e nada de divulgação sensacionalista (alínea h). A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          reforça que nome completo e CRP precisam acompanhar a publicidade,
          inclusive quando há logomarca ou apelido.
        </p>
        <p>
          Do lado técnico, quem define as regras dos domínios .br é o{" "}
          <a href={RB_REGRAS} {...ext}>
            Registro.br
          </a>
          , seguindo a resolução do CGI.br sobre domínios: o titular é pessoa
          física (CPF) ou jurídica (CNPJ), e há categorias por profissão, entre
          elas a .psc.br, destinada a psicólogos, listada na{" "}
          <a href={RB_CATEGORIAS} {...ext}>
            página de categorias
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Passo 1: decida se o domínio leva o seu nome ou o do consultório</h2>
        <p>
          Se você atende sozinha e a marca é você, use o seu nome. Se o
          consultório tem nome fantasia registrado ou vai crescer com outros
          profissionais, use o nome do consultório.
        </p>
        <ol>
          <li>
            <strong>Nome próprio:</strong> “anasouza.psc.br” ou
            “anasouzapsicologia.com.br”. Acompanha você em qualquer mudança de
            endereço ou de sociedade.
          </li>
          <li>
            <strong>Nome do consultório:</strong> “espacoaurora.com.br”. Faz
            sentido quando há CNPJ, equipe ou plano de crescer.
          </li>
          <li>
            <strong>Nome + especialidade ampla:</strong> “anasouzainfantil.com.br”.
            Ajuda quando o nome sozinho já está ocupado, mas prende você a um
            público.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga que atende crianças
          sozinha, sem planos de clínica, registra “marinacosta.psc.br” e
          “marinacostapsicologia.com.br”, usa o segundo como principal e
          redireciona o primeiro.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher um nome de consultório sem ter
          pensado na marca. Antes, leia o post sobre{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>
          , que trata de nome fantasia, PJ e CRP.
        </p>
      </section>

      <section>
        <h2>Passo 2: escolha a extensão (.com.br, .psc.br ou outra)</h2>
        <p>
          Para quem atende no Brasil, a extensão .br é a escolha natural. Entre
          elas, duas fazem mais sentido para psicólogos.
        </p>
        <ul>
          <li>
            <strong>.com.br:</strong> é a que as pessoas digitam por hábito.
            Quando alguém ouve o endereço por telefone, tende a completar com
            “.com.br”.
          </li>
          <li>
            <strong>.psc.br:</strong> categoria “destinada a psicólogos”
            na resolução do CGI.br que organiza os domínios .br, no grupo de
            profissionais liberais. Deixa a profissão clara no próprio endereço
            e costuma ter mais nomes livres. Confira as condições atuais na
            página de categorias do Registro.br antes de registrar.
          </li>
          <li>
            <strong>.com (sem .br):</strong> faz sentido se você atende online
            brasileiros no exterior, mas é mais disputado.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “julianalima.com.br” estava ocupado,
          mas “julianalima.psc.br” estava livre. A psicóloga ficou com o .psc.br
          e passou a ditar o endereço como “julianalima ponto p-s-c ponto br”.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher uma extensão exótica (.online,
          .site) só porque o nome estava livre. Ela confunde quem digita e
          lembra endereço provisório.
        </p>
      </section>

      <section>
        <h2>Passo 3: teste o nome em voz alta e no papel</h2>
        <p>
          Um bom domínio sobrevive ao telefone, ao cartão de visita e à bio do
          Instagram. Antes de registrar, faça três testes.
        </p>
        <ol>
          <li>
            <strong>Ditado:</strong> fale o endereço para alguém e peça que a
            pessoa escreva. Se ela pergunta “com dois esses?” ou “tem hífen?”,
            simplifique.
          </li>
          <li>
            <strong>Tamanho:</strong> quanto mais curto, melhor. Evite passar
            de 20 caracteres antes da extensão.
          </li>
          <li>
            <strong>Leitura:</strong> junte as palavras e leia sem espaço.
            Algumas combinações formam palavras estranhas.
          </li>
        </ol>
        <p>
          Evite números, hífens e abreviações que só você entende. Acentos e
          cedilha são aceitos em domínios .br, mas muita gente não digita; se
          o seu nome tem acento, registre também a versão sem acento.
        </p>
        <p>
          <strong>Erro comum:</strong> usar “psi” ou “psico” abreviado sem
          necessidade (“anasouzapsi.com.br”). Funciona, mas “psicologia” é mais
          claro para a família que nunca fez terapia. O mesmo teste de leitura
          vale para o{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Passo 4: confira o art. 20 no nome</h2>
        <p>
          O domínio é publicidade em uma linha. Ele não pode dizer o que o
          resto da sua comunicação também não pode.
        </p>
        <ul>
          <li>
            <strong>Sem promessa:</strong> “fimdaansiedade.com.br” ou
            “curadepressao.com.br” fazem previsão de resultado (art. 20, e).
          </li>
          <li>
            <strong>Sem superlativo:</strong> “melhorpsicologa”,
            “psicologotop” comparam e autopromovem (art. 20, f).
          </li>
          <li>
            <strong>Sem título que você não tem:</strong> “draanasouza” só com
            doutorado (a cartilha do CRP-MG lembra que “Dr.” e “Dra.” são para
            quem tem o título).
          </li>
          <li>
            <strong>Sem nome de técnica não reconhecida</strong> vinculada à
            psicologia (art. 20, c).
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga queria
          “autismosemcrise.com.br”. Trocou por “carlaneves.psc.br”, que não
          promete nada e não prende a marca a uma condição.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher domínio “de palavra-chave” para
          tentar aparecer no Google. O nome do domínio pesa pouco hoje; o que
          ajuda é o conteúdo do site, como explica o post sobre{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Passo 5: registre em seu nome no Registro.br</h2>
        <p>
          O registro é feito direto no{" "}
          <a href={RB} {...ext}>
            Registro.br
          </a>
          , a entidade responsável pelos domínios .br. Segundo o site deles, o
          registro custa R$ 40,00 por ano no momento desta publicação.
        </p>
        <ol>
          <li>Pesquise o nome na página inicial do Registro.br.</li>
          <li>Crie a conta com o seu CPF, ou com o CNPJ do consultório.</li>
          <li>Use um e-mail que você controla e vai manter (não o da agência).</li>
          <li>Pague e ative a renovação automática, ou anote a data de vencimento.</li>
          <li>Guarde o acesso num gerenciador de senhas.</li>
        </ol>
        <p>
          Pense antes no CPF ou no CNPJ. Para registrar, a{" "}
          <a href={CGI} {...ext}>
            Resolução CGI.br/RES/2008/008
          </a>{" "}
          pede nome, CPF ou CNPJ, endereços e telefone do titular. Trocar o
          titular depois é possível, mas dá trabalho; escolha pensando em onde
          o consultório vai estar daqui a alguns anos.
        </p>
        <p>
          <strong>Erro comum:</strong> deixar o domínio vencer. Quando expira,
          o site e o e-mail param, e o nome pode ir para outra pessoa depois do
          prazo de liberação. Se uma empresa de hospedagem registrar por você,
          confirme que o titular é você.
        </p>
      </section>

      <section>
        <h2>Passo 6: use o mesmo domínio no e-mail</h2>
        <p>
          Com o domínio registrado, crie um e-mail no mesmo endereço, como
          contato@anasouzapsicologia.com.br. Ele passa mais confiança que um
          endereço gratuito e continua seu mesmo se você trocar de provedor.
        </p>
        <ul>
          <li>Um endereço para contato público e, se quiser, um pessoal (ana@...).</li>
          <li>Assinatura com nome completo, psicóloga, CRP e o site.</li>
          <li>Configuração de autenticação (SPF, DKIM) pelo provedor, para não cair no spam.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> a psicóloga troca o
          “anasouza.psi@gmail” do cartão por “contato@anasouza.psc.br”. O site,
          o e-mail e a bio passam a ter o mesmo endereço.
        </p>
        <p>
          <strong>Erro comum:</strong> registrar o domínio e continuar usando o
          e-mail gratuito por preguiça de configurar. O post sobre{" "}
          <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
            e-mail profissional para psicólogo
          </Link>{" "}
          mostra o passo a passo e os cuidados de sigilo.
        </p>
      </section>

      <section>
        <h2>Passo 7: aponte para o site e espalhe o endereço</h2>
        <p>
          Com o site pronto, o domínio precisa apontar para a hospedagem
          (configuração de DNS, que a hospedagem ou quem faz o site orienta). Em
          seguida, troque o endereço em todos os lugares.
        </p>
        <ol>
          <li>Bio do Instagram e de outras redes.</li>
          <li>Perfil da Empresa no Google.</li>
          <li>Assinatura de e-mail e mensagem automática do WhatsApp Business.</li>
          <li>Cartão, papelaria, placa e materiais impressos.</li>
          <li>Plataformas e diretórios em que você aparece.</li>
        </ol>
        <p>
          <strong>Erro comum:</strong> esquecer o Perfil da Empresa no Google,
          que é por onde muitas famílias chegam. Veja como montar no post sobre{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar no domínio</h2>
        <div className="inst-blog__table" role="region" aria-label="Domínio para site de psicólogo: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Domínio para site de psicólogo: o que pode e o que evitar</caption>
            <thead>
              <tr>
                <th scope="col">Ponto</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome</td>
                <td>Seu nome ou o do consultório, curto e fácil de ditar</td>
                <td>Números, hífens e abreviações confusas</td>
              </tr>
              <tr>
                <td>Extensão</td>
                <td>.com.br ou .psc.br</td>
                <td>Extensões exóticas só porque estavam livres</td>
              </tr>
              <tr>
                <td>Mensagem</td>
                <td>Nome e profissão (“psicologia”, “psicóloga”)</td>
                <td>Promessa, superlativo ou “Dra.” sem doutorado</td>
              </tr>
              <tr>
                <td>Titularidade</td>
                <td>No seu CPF ou no CNPJ do consultório</td>
                <td>No nome da agência ou de terceiros</td>
              </tr>
              <tr>
                <td>Uso</td>
                <td>Mesmo domínio no site e no e-mail</td>
                <td>Site num endereço e e-mail gratuito em outro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Já tenho site num endereço provisório: como migrar</h2>
        <p>
          Se o site já existe num subdomínio de construtor ou num domínio que
          você quer trocar, a migração precisa ser planejada para não perder os
          links e o que já aparece no Google.
        </p>
        <ol>
          <li>Registre o domínio novo e configure o site nele.</li>
          <li>
            Faça redirecionamento 301 de cada página antiga para a página
            equivalente no endereço novo (não tudo para a página inicial).
          </li>
          <li>Mantenha o domínio antigo ativo e redirecionando por pelo menos um ano.</li>
          <li>
            Avise o Google pelo Search Console, como orienta a documentação do{" "}
            <a href={GOOGLE_MUDANCA} {...ext}>
              Google Search Central sobre mudança de site
            </a>
            .
          </li>
          <li>Atualize os links nas redes, no Google e nos materiais.</li>
        </ol>
        <p>
          Em subdomínio gratuito de construtor, nem sempre é possível fazer o
          redirecionamento; nesse caso, troque os links manualmente e aceite
          começar do zero no Google.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Os pais costumam receber o seu nome numa indicação, de um pediatra,
          da escola ou de outra mãe, e vão digitar o endereço no celular, às
          vezes com pressa. Para esse público, a clareza do domínio vale mais
          que a criatividade.
        </p>
        <ul>
          <li>
            <strong>Prefira o seu nome a um nome temático.</strong> Domínios
            como “mundoazul” ou “autismoinfantil” prendem a marca a uma
            condição e podem soar como promessa ou rótulo.
          </li>
          <li>
            <strong>Pense em quem dita.</strong> A secretária do pediatra ou a
            coordenação da escola vai passar o endereço adiante. Ele precisa
            ser fácil de falar.
          </li>
          <li>
            <strong>Organize as páginas por dentro.</strong> Em vez de um
            domínio para cada serviço, use páginas no mesmo site, como
            “seusite.com.br/orientacao-parental”.
          </li>
        </ul>
        <p>
          Com o domínio definido, o site precisa ser fácil de usar para
          famílias neurodivergentes; o post sobre{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          mostra os ajustes, e o de{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site profissional para psicólogo
          </Link>{" "}
          lista o que ele precisa ter.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Domínio registrado no nome da agência ou de outra pessoa.</li>
          <li>Nome longo, com hífen ou número, difícil de ditar.</li>
          <li>Promessa ou superlativo no endereço.</li>
          <li>Domínio vencido por falta de renovação.</li>
          <li>Site em um endereço e e-mail gratuito em outro.</li>
          <li>Troca de domínio sem redirecionamento.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do domínio</h2>
        <ul>
          <li>Decidi entre o meu nome e o nome do consultório.</li>
          <li>Testei o nome em voz alta e no papel.</li>
          <li>Conferi que o nome não promete, não compara e não usa título que não tenho.</li>
          <li>Registrei no Registro.br, no meu CPF ou no CNPJ, com meu e-mail.</li>
          <li>Ativei a renovação automática.</li>
          <li>Criei e-mail no mesmo domínio.</li>
          <li>Atualizei redes, Google, cartão e materiais.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão de dois dias define com você o
          posicionamento e o nome com que o consultório se apresenta, e daí
          saem a identidade visual e o site, com domínio, e-mail e páginas
          alinhados ao art. 20. A marca vai ao ar em 45 dias. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você está para registrar o domínio e quer acertar o nome de
          primeira, marque uma conversa de 15 minutos.
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
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            (nome completo, CRP, apelidos e logomarcas).
          </li>
          <li>
            Registro.br.{" "}
            <a href={RB_CATEGORIAS} {...ext}>
              Categorias .br
            </a>{" "}
            (categoria .psc.br, psicólogos).
          </li>
          <li>
            Registro.br.{" "}
            <a href={RB_REGRAS} {...ext}>
              Regras do domínio
            </a>{" "}
          </li>
          <li>
            Comitê Gestor da Internet no Brasil.{" "}
            <a href={CGI} {...ext}>
              Resolução CGI.br/RES/2008/008
            </a>{" "}
            (registro de domínios .br, categoria .psc.br e dados do titular).
          </li>
          <li>
            Google Search Central.{" "}
            <a href={GOOGLE_MUDANCA} {...ext}>
              Mudar o site com alterações de URL
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
