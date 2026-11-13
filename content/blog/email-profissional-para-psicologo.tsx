import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const RES06 = "https://www.sepsi.ufscar.br/arquivos/regulamentacao/resolucaocfp-06-2019.pdf";
const RES06_COMENTADA = "https://site.cfp.org.br/cfp-publica-versao-comentada-da-resolucao-sobre-a-elaboracao-de-documentos-escritos/";
const GMAIL = "https://support.google.com/a/answer/81126?hl=pt-BR";
const DUAS_ETAPAS = "https://support.google.com/accounts/answer/185839?hl=pt-BR";
const ANPD = "https://www.gov.br/anpd/pt-br";

export const post: Post = {
  slug: "email-profissional-para-psicologo",
  title: "E-mail profissional para psicólogo: endereço, assinatura e sigilo",
  description:
    "Como montar o e-mail profissional do psicólogo: endereço com domínio próprio, assinatura com CRP, o que enviar por e-mail e cuidados com sigilo e LGPD.",
  keyword: "e-mail profissional para psicólogo",
  tags: ["presenca-digital", "identidade-visual"],
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-13",
  summary:
    "O e-mail profissional do psicólogo usa um endereço com domínio próprio (nome@seuconsultorio.com.br), uma assinatura com nome completo, psicólogo(a) e CRP e regras claras sobre o que trafega por e-mail. Por tratar de dados sensíveis, vale combinar com cada paciente o que pode ser enviado por e-mail, proteger a conta com verificação em duas etapas e não enviar conteúdo clínico por mensagem.",
  faq: [
    {
      q: "Psicólogo pode usar e-mail gratuito (Gmail, Outlook) no consultório?",
      a: "Pode; não há norma do CFP que exija domínio próprio. O endereço com o domínio do consultório passa mais confiança a escolas e colegas, separa a vida pessoal da profissional e continua seu se você trocar de provedor. Se usar um gratuito, crie uma conta só para o trabalho, com nome e sobrenome, e ative a verificação em duas etapas."
    },
    {
      q: "O que colocar na assinatura de e-mail do psicólogo?",
      a: "Nome completo, a palavra psicólogo(a), CRP com número, um contato profissional e o site. O artigo 20 do Código de Ética pede nome completo e CRP em toda promoção pública dos serviços, e a assinatura acompanha cada mensagem. Deixe de fora preço, promessa e frase de efeito."
    },
    {
      q: "Psicólogo pode enviar laudo ou relatório por e-mail?",
      a: "A Resolução CFP 06/2019 diz que a entrega de relatório e laudo psicológico pede ao menos uma entrevista devolutiva com a pessoa atendida ou os responsáveis. O e-mail, portanto, não substitui a devolutiva. Se o documento também for enviado em versão digital, combine antes com a família, use assinatura digital e um meio com controle de acesso."
    },
    {
      q: "Posso mandar lembrete de sessão por e-mail?",
      a: "Pode, se o paciente ou responsável concordar. A mensagem diz só o necessário (data, horário, local ou link), sem conteúdo clínico no assunto nem no corpo, e sai de uma conta protegida."
    },
    {
      q: "Posso enviar e-mail com conteúdo para uma lista de contatos?",
      a: "Pode, para quem pediu para receber. A LGPD exige base legal para usar o e-mail das pessoas, e o artigo 20 vale para o conteúdo: nada de preço como chamariz nem promessa de resultado. Ofereça descadastro em toda mensagem e nunca coloque pacientes numa lista sem pedido expresso."
    }
  ],
  cover: {
    src: "/blog/email-profissional-para-psicologo/email-profissional-para-psicologo-notebook-e-cafe.jpg",
    alt: "Notebook ao lado de um caderno com caneta e uma xícara de café com espuma",
    caption: "Foto: freestockcenter / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O e-mail é o canal que aparece quando uma escola pede um relatório, um
        colega manda um encaminhamento ou uma família quer um documento. Se o
        endereço é &ldquo;fulana1987@...&rdquo; e a assinatura está vazia, o
        consultório parece menos sério do que é. E, como o e-mail carrega dados
        de pessoas atendidas, um descuido ali vira problema de sigilo, não só de
        imagem.
      </p>
      <p>
        A resposta curta: use um endereço com o domínio do consultório, uma
        assinatura com nome completo e CRP, autenticação no domínio e
        verificação em duas etapas na conta, e combine com cada família o que
        pode ir por e-mail. Conteúdo clínico fica fora da caixa de entrada. A
        seguir estão as normas que se aplicam, o passo a passo de configuração,
        modelos de mensagem e os cuidados com documentos.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Não existe resolução do CFP específica sobre e-mail. Valem as regras
          gerais, que se aplicam a ele com força:
        </p>
        <ul>
          <li>
            <strong>Sigilo:</strong> o artigo 9º do{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética
            </a>{" "}
            manda proteger, por meio da confidencialidade, a intimidade das
            pessoas atendidas. E o artigo 13 limita o que se comunica aos
            responsáveis de criança e adolescente ao estritamente essencial.
          </li>
          <li>
            <strong>Identificação:</strong> o artigo 20 pede nome completo, CRP
            e número de registro em toda promoção pública dos serviços.
          </li>
          <li>
            <strong>Dados sensíveis:</strong> a{" "}
            <a href={LGPD} {...ext}>
              LGPD (Lei 13.709/2018)
            </a>{" "}
            classifica dado de saúde como sensível (art. 5º, II) e obriga quem
            trata dados a adotar medidas de segurança técnicas e administrativas
            (art. 46). Dados de crianças pedem consentimento específico de pelo
            menos um dos pais ou responsável (art. 14).
          </li>
          <li>
            <strong>Documentos:</strong> a{" "}
            <a href={RES06} {...ext}>
              Resolução CFP 06/2019
            </a>{" "}
            regula os documentos escritos e diz, no artigo 18, que a entrega de
            relatório e laudo pede ao menos uma entrevista devolutiva.
          </li>
        </ul>
      </section>

      <section>
        <h2>Endereço com o domínio do consultório</h2>
        <p>
          O formato mais claro é <em>nome@seudominio.com.br</em>, no mesmo
          domínio do site. Ele passa confiança quando a mensagem chega a uma
          escola, separa trabalho e vida pessoal e continua seu se você trocar
          de provedor.
        </p>
        <ol>
          <li>Registre um domínio curto, fácil de ditar por telefone, de preferência o mesmo do site.</li>
          <li>Contrate um serviço de e-mail que aceite domínio próprio.</li>
          <li>Crie o endereço principal com o seu nome (<em>ana@...</em>) e, se houver equipe, um endereço de contato geral (<em>contato@...</em>).</li>
          <li>Configure o celular e o computador do consultório; não use o computador da família.</li>
          <li>Redirecione o e-mail antigo por alguns meses e avise os contatos frequentes.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> a clínica fictícia Ninho, que atende
          crianças neurodivergentes, tem o site <em>clinicaninho.com.br</em>.
          A psicóloga usa <em>marina@clinicaninho.com.br</em> e a recepção
          responde por <em>contato@clinicaninho.com.br</em>. A escola sabe para
          onde mandar o pedido de reunião, e a família sabe quem respondeu.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher um domínio longo ou com hífens e
          números, difícil de soletrar. O domínio vem junto do{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            site profissional
          </Link>
          ; pense nos dois ao mesmo tempo.
        </p>
      </section>

      <section>
        <h2>Autenticação do domínio: SPF, DKIM e DMARC</h2>
        <p>
          Sem autenticação, os seus e-mails podem cair no spam ou ser imitados
          por golpistas. As{" "}
          <a href={GMAIL} {...ext}>
            diretrizes do Gmail para remetentes
          </a>{" "}
          exigem, desde fevereiro de 2024, SPF ou DKIM de todos os remetentes, e
          SPF, DKIM e DMARC de quem envia em massa.
        </p>
        <ul>
          <li><strong>SPF:</strong> registro no domínio que lista quais servidores podem enviar em seu nome.</li>
          <li><strong>DKIM:</strong> assinatura digital que prova que a mensagem não foi alterada no caminho.</li>
          <li><strong>DMARC:</strong> regra que diz aos provedores o que fazer com mensagens que falham nos dois primeiros.</li>
        </ul>
        <p>
          O provedor de e-mail mostra os registros prontos; quem cuida do site
          ou do domínio cola no painel de DNS. É uma tarefa de meia hora, feita
          uma vez.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> um psicólogo fictício reclama que as
          confirmações de horário somem. A família encontra todas no spam. O
          domínio não tinha SPF nem DKIM; depois da configuração, as mensagens
          voltam à caixa de entrada.
        </p>
        <p>
          <strong>Erro comum:</strong> configurar o e-mail e esquecer o DNS.
          Teste enviando uma mensagem para uma conta Gmail e veja se ela chega
          sem aviso de remetente não verificado.
        </p>
      </section>

      <section>
        <h2>Assinatura que identifica</h2>
        <p>
          A assinatura acompanha cada mensagem, então segue o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>
          : nome completo e CRP. Um modelo:
        </p>
        <ul>
          <li>Nome completo;</li>
          <li>Psicóloga · CRP 00/00000 (número ilustrativo);</li>
          <li>público ou área, em poucas palavras (&ldquo;Atendimento de crianças e orientação a pais&rdquo;);</li>
          <li>telefone ou WhatsApp profissional;</li>
          <li>site;</li>
          <li>logo pequeno, na cor do consultório.</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          lembra que a divulgação pode destacar o público atendido, a abordagem
          e os serviços, sem preço, promessa ou comparação com colegas. A
          assinatura é o lugar ideal para uma linha dessas.
        </p>
        <p>
          <strong>Erro comum:</strong> assinatura em imagem única. Ela não
          aparece em muitos aplicativos, não pode ser copiada e não é lida por
          leitor de tela. Use texto e, se quiser, um logo pequeno com texto
          alternativo. O logo e as cores seguem a{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual
          </Link>
          , como no{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Segurança da conta</h2>
        <p>
          A conta de e-mail guarda conversas com famílias, escolas e colegas. A
          LGPD pede medidas de segurança; na prática, são cinco hábitos.
        </p>
        <ol>
          <li>
            Ative a{" "}
            <a href={DUAS_ETAPAS} {...ext}>
              verificação em duas etapas
            </a>
            , de preferência com aplicativo autenticador.
          </li>
          <li>Use senha forte e única, guardada num gerenciador de senhas.</li>
          <li>Não deixe a conta aberta em computador compartilhado ou de recepção.</li>
          <li>Revise os aplicativos com acesso à conta e remova os que não usa.</li>
          <li>Faça a exclusão periódica do que não precisa ficar no e-mail, guardando no prontuário o que é registro.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia usa o mesmo
          notebook para o trabalho e para os filhos fazerem lição. Ela cria um
          usuário separado no computador só para o consultório, com senha, e o
          e-mail profissional deixa de ficar aberto para a família.
        </p>
        <p>
          <strong>Erro comum:</strong> tratar a caixa de entrada como arquivo
          clínico. O registro do atendimento vai para o prontuário; o e-mail é
          canal, não guarda.
        </p>
      </section>

      <section>
        <h2>O que pode e o que não deve ir por e-mail</h2>
        <p>
          Combine com cada paciente ou responsável, no contrato ou no primeiro
          encontro, o que vai por e-mail. A regra prática: logística sim,
          conteúdo clínico não.
        </p>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar no e-mail do psicólogo" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar no e-mail do psicólogo</caption>
            <thead><tr><th scope="col">Pode, combinado com o paciente</th><th scope="col">Evitar</th></tr></thead>
            <tbody>
              <tr><td>Confirmação de data, horário e local ou link</td><td>Assunto com diagnóstico, hipótese ou nome da criança</td></tr>
              <tr><td>Recibo, sem conteúdo clínico</td><td>Relato de sessão ou conteúdo clínico no corpo da mensagem</td></tr>
              <tr><td>Política de faltas e remarcação</td><td>Relatório ou laudo enviado no lugar da devolutiva</td></tr>
              <tr><td>Pedido de reunião com a escola, com autorização da família</td><td>Copiar escola, pais separados ou colegas sem combinar</td></tr>
              <tr><td>Conteúdo educativo para quem pediu para receber</td><td>Pacientes numa lista de envio sem pedido expresso</td></tr>
              <tr><td>Assinatura com nome completo e CRP</td><td>Assinatura com preço, desconto ou promessa</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Erro comum:</strong> usar &ldquo;responder a todos&rdquo; numa
          conversa com pais separados e escola. Confira os destinatários antes
          de cada envio.
        </p>
      </section>

      <section>
        <h2>Documentos: relatório, laudo e declaração</h2>
        <p>
          O e-mail não substitui a devolutiva. Pelo artigo 18 da{" "}
          <a href={RES06} {...ext}>
            Resolução CFP 06/2019
          </a>
          , a entrega de relatório e laudo psicológico pede ao menos uma
          entrevista devolutiva com a pessoa atendida ou os responsáveis; se ela
          não for possível, o psicólogo explica por quê. A resolução também
          pede laudas numeradas e rubricadas e a assinatura do psicólogo na
          última página de qualquer documento.
        </p>
        <ol>
          <li>Faça a devolutiva e entregue o documento nela.</li>
          <li>Se a família pedir também a versão digital, combine por escrito o meio e quem recebe.</li>
          <li>Prefira assinatura digital no documento eletrônico e um envio com controle de acesso (link com senha ou expiração) a um anexo aberto.</li>
          <li>Registre no prontuário quando e a quem o documento foi entregue.</li>
        </ol>
        <p>
          A{" "}
          <a href={RES06_COMENTADA} {...ext}>
            versão comentada da resolução, publicada pelo CFP
          </a>
          , ajuda nas dúvidas de formato. <strong>Erro comum:</strong> enviar o
          laudo direto para a escola porque ela pediu. Quem decide o destino do
          documento é a família, depois da devolutiva. Para quem trabalha com
          avaliação, veja também{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica no site
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Modelos de mensagem que poupam tempo</h2>
        <p>
          Modelos prontos reduzem erro e mantêm o mesmo tom em todas as
          mensagens. Os textos abaixo são ilustrativos; adapte ao seu jeito de
          falar.
        </p>
        <ul>
          <li>
            <strong>Primeiro contato:</strong> &ldquo;Olá, obrigada pela
            mensagem. Atendo crianças e adolescentes e faço orientação a pais. O
            primeiro passo é uma conversa com os responsáveis. Tenho horários
            às terças e quintas à tarde; qual fica melhor?&rdquo;
          </li>
          <li>
            <strong>Confirmação:</strong> data, horário, endereço ou link,
            orientação de chegada e política de remarcação.
          </li>
          <li>
            <strong>Recibo:</strong> os dados exigidos para o recibo, sem
            conteúdo clínico.
          </li>
          <li>
            <strong>Resposta à escola:</strong> agradece, informa que só
            conversa com autorização da família e propõe um horário.
          </li>
        </ul>
        <p>
          O tom dos modelos é parte da marca; veja{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>
          . Para mensagens rápidas, muita família prefere o WhatsApp:{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Avançado: e-mail com equipe e lista de contatos</h2>
        <p>
          Em clínica com mais de um profissional, cada psicólogo tem o próprio
          endereço, e a recepção usa um endereço geral. Defina por escrito quem
          lê o quê: a recepção trata de agenda e financeiro, não de conteúdo
          clínico. Quando alguém sai da equipe, a conta é desativada no mesmo
          dia e as mensagens são encaminhadas a quem segue o atendimento.
        </p>
        <p>
          Se você quer mandar conteúdo educativo por e-mail, use uma ferramenta
          de envio em massa separada da caixa do dia a dia, com cadastro
          voluntário, link de descadastro e domínio autenticado com SPF, DKIM e
          DMARC. A{" "}
          <a href={ANPD} {...ext}>
            ANPD
          </a>{" "}
          publica guias sobre a LGPD que ajudam a definir a base legal. O
          conteúdo segue o artigo 20 como qualquer post: informativo, sem preço
          como chamariz, sem promessa.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Com essas famílias, o e-mail costuma envolver mais gente: pais,
          escola, acompanhante terapêutico, outros terapeutas. Isso multiplica
          os destinatários e o risco de vazamento.
        </p>
        <ul>
          <li>
            <strong>Autorização por escrito:</strong> antes de trocar mensagens
            com a escola ou outro profissional, registre o que a família
            autorizou e com quem.
          </li>
          <li>
            <strong>O essencial:</strong> o artigo 13 do Código pede comunicar
            aos responsáveis o estritamente essencial; o mesmo critério vale
            para a escola.
          </li>
          <li>
            <strong>Linguagem:</strong> mensagens claras, com um assunto por
            e-mail e datas explícitas, ajudam pais sobrecarregados e também
            pais neurodivergentes. Veja{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
          <li>
            <strong>Previsibilidade:</strong> um e-mail antes da primeira
            consulta, com endereço, foto da entrada e o que vai acontecer,
            reduz a ansiedade da criança e dos pais.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> numa clínica fictícia, a reunião com a
          escola é marcada por e-mail com cópia só para a mãe, que autorizou o
          contato. O assunto diz &ldquo;Reunião escolar — 18/11&rdquo;, sem nome
          nem diagnóstico da criança.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Usar o e-mail pessoal antigo para o consultório.</li>
          <li>Domínio sem SPF e DKIM, com mensagens indo para o spam.</li>
          <li>Conta sem verificação em duas etapas.</li>
          <li>Diagnóstico ou nome da criança no assunto.</li>
          <li>Laudo enviado por anexo aberto, sem devolutiva.</li>
          <li>Escola em cópia sem autorização da família.</li>
          <li>Assinatura sem CRP ou com promessa.</li>
          <li>Pacientes incluídos numa lista de envio sem pedir.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do e-mail profissional</h2>
        <ul>
          <li>Endereço com domínio próprio (ou conta gratuita só para o trabalho).</li>
          <li>SPF e DKIM configurados no domínio; DMARC se for enviar em massa.</li>
          <li>Verificação em duas etapas ativa e senha num gerenciador.</li>
          <li>Assinatura em texto com nome completo, psicólogo(a), CRP, contato e site.</li>
          <li>Combinado com cada família o que vai por e-mail.</li>
          <li>Modelos prontos para primeiro contato, confirmação, recibo e escola.</li>
          <li>Documentos entregues na devolutiva, com registro no prontuário.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Assinatura, e-mail e
          modelos de mensagem fazem parte da mesma identidade. Veja o passo a
          passo na{" "}
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
            , arts. 9º, 13 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06} {...ext}>
              Resolução CFP nº 06/2019 — documentos escritos produzidos pela(o) psicóloga(o)
            </a>
            , art. 18; e a{" "}
            <a href={RES06_COMENTADA} {...ext}>
              versão comentada
            </a>
            .
          </li>
          <li>
            CRP-MG.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional
            </a>
            , abril de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 5º, II, 14 e 46.
          </li>
          <li>
            Google.{" "}
            <a href={GMAIL} {...ext}>
              Diretrizes para remetentes de e-mails
            </a>{" "}
            e{" "}
            <a href={DUAS_ETAPAS} {...ext}>
              Verificação em duas etapas
            </a>
            .
          </li>
          <li>
            <a href={ANPD} {...ext}>
              Autoridade Nacional de Proteção de Dados (ANPD)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
