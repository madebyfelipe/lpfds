import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";
const WCAG = "https://www.w3.org/TR/WCAG21/#contrast-minimum";
const LDA = "https://www.planalto.gov.br/ccivil_03/leis/l9610.htm";

export const post: Post = {
  slug: "identidade-visual-clinica-psicologia",
  title: "Identidade visual para clínica de psicologia: como criar uma marca que funciona para toda a equipe",
  description:
    "Identidade visual para clínica de psicologia: marca da clínica e da equipe, CRP da empresa, logo, cores, fotos, salas, site e manual de marca.",
  keyword: "identidade visual para clínica de psicologia",
  tags: ["identidade-visual", "posicionamento"],
  publishedAt: "2026-11-17",
  summary:
    "A identidade visual de uma clínica de psicologia precisa funcionar para várias pessoas ao mesmo tempo: a marca da clínica, cada psicóloga da equipe, as salas, o site e as redes. O ponto de partida é decidir como a marca da clínica convive com o nome de cada profissional, que continua aparecendo com o CRP, e registrar as regras num manual que qualquer pessoa da equipe consiga seguir. Abaixo há um passo a passo, com exemplos fictícios e os limites do art. 20 e da cartilha do CRP-MG para pessoa jurídica.",
  faq: [
    {
      q: "O que é identidade visual de uma clínica de psicologia?",
      a: "É o conjunto de elementos visuais que fazem a clínica ser reconhecida: logotipo, cores, tipografia, estilo de fotos e ícones, e a forma de aplicar tudo isso no site, nas redes, na placa, nas salas e nos documentos. Numa clínica, ela também define como cada profissional da equipe aparece dentro da marca."
    },
    {
      q: "A clínica de psicologia precisa mostrar o CRP na divulgação?",
      a: "Sim. Segundo a cartilha de publicidade do CRP-MG, a pessoa jurídica que presta serviços de psicologia deve estar registrada no CRP, ter um responsável técnico e divulgar com o nome da empresa e o número de inscrição no Conselho. Quando a peça apresenta uma psicóloga específica, o nome completo e o CRP dela também aparecem, como pede o art. 20 do Código de Ética."
    },
    {
      q: "Cada psicóloga da clínica pode ter sua própria marca?",
      a: "Pode, e isso precisa ser decidido de forma explícita. Alguns modelos usam só a marca da clínica, com o nome de cada profissional em destaque nas páginas da equipe; outros deixam cada psicóloga com uma assinatura própria, ligada à marca principal. O manual de marca registra a regra para todos seguirem."
    },
    {
      q: "Quanto tempo leva para criar a identidade visual de uma clínica?",
      a: "Depende do escopo e de quantas pessoas participam das decisões. Uma clínica costuma levar mais tempo que um consultório individual, porque há mais aprovações e mais peças, como placas de várias salas, crachás e materiais para cada profissional. Combine o cronograma e quem decide antes de começar."
    }
  ],
  cover: {
    src: "/blog/identidade-visual-clinica-psicologia/identidade-visual-clinica-psicologia-amostras-de-cor-e-papelaria.jpg",
    alt: "Cartela de amostras de cor, canetas, tesoura e papéis brancos sobre mesa clara, materiais usados para criar a identidade visual de uma clínica de psicologia",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A clínica começou com duas sócias e um logotipo feito às pressas. Hoje
        são sete psicólogas, uma fonoaudióloga e uma terapeuta ocupacional. Cada
        uma tem um perfil com cores diferentes, as placas das salas não
        conversam com o site e ninguém sabe qual versão do logo é a certa. Quando
        uma família chega pela indicação de uma profissional, encontra no
        Instagram da clínica algo que parece outro lugar.
      </p>
      <p>
        A resposta curta é esta: a identidade visual para clínica de psicologia
        funciona quando resolve primeiro a relação entre a marca da clínica e o
        nome de cada profissional, depois cria um sistema visual simples (logo,
        cores, tipografia, fotos) e, por fim, registra tudo num manual que a
        equipe consiga aplicar sem depender de designer. Este guia percorre os
        passos, com o que muda em relação a um consultório individual. Se você
        atende sozinha, o guia de{" "}
        <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
          identidade visual para psicólogo
        </Link>{" "}
        é o ponto de partida.
      </p>

      <section>
        <h2>O que dizem as normas sobre a marca de uma clínica</h2>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          (abril de 2026, p. 24) diz que a publicidade pode ser feita por
          pessoas jurídicas que prestam serviços de psicologia, desde que
          registradas no CRP e com um responsável técnico, conforme a Resolução
          CFP nº 16/2019. Nesse caso, a divulgação usa o nome da empresa (razão
          social ou nome fantasia) e o número de inscrição no Conselho.
        </p>
        <p>
          Quando a peça apresenta uma psicóloga, vale o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          : nome completo e CRP (alínea a), só títulos que ela possui (b), só
          práticas reconhecidas (c), nada de preço como propaganda (d), nada de
          previsão de resultado (e), nada de autopromoção contra outros
          profissionais (f) e nada de sensacionalismo (h). A alínea g lembra que
          a clínica não pode atribuir à psicóloga atividades privativas de
          outras profissões, o que importa em clínicas multiprofissionais.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica essas regras às redes sociais. E a imagem segue as mesmas
          regras do texto: nada de sessão, paciente, criança atendida ou divã.
        </p>
      </section>

      <section>
        <h2>1. Decida a arquitetura de marca: clínica, profissionais ou os dois</h2>
        <p>
          Antes de desenhar qualquer coisa, a clínica precisa decidir como a
          marca principal convive com o nome de cada psicóloga. Essa decisão
          orienta todo o resto.
        </p>
        <ol>
          <li>
            <strong>Marca única.</strong> Só a marca da clínica aparece; cada
            profissional ganha destaque na página da equipe e nas peças em que é
            apresentada, sempre com nome e CRP.
          </li>
          <li>
            <strong>Marca com assinaturas.</strong> A clínica tem a marca
            principal, e cada psicóloga usa uma assinatura padronizada (nome,
            CRP, área) dentro do mesmo sistema visual.
          </li>
          <li>
            <strong>Marca guarda-chuva.</strong> Profissionais com marcas
            próprias que se apresentam como parte da clínica. Exige mais regras
            para não virar colcha de retalhos.
          </li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: uma clínica de São José dos Campos escolhe a
          marca com assinaturas. O logo da clínica aparece no topo de tudo, e
          cada psicóloga tem um bloco fixo com nome, CRP e área de atuação, na
          mesma tipografia.
        </p>
        <p>
          <strong>Erro comum</strong>: deixar cada profissional decidir sozinha
          como se apresenta. Em pouco tempo, a clínica tem sete estilos e
          nenhum reconhecimento. O guia de{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          ajuda a definir antes o que a clínica representa.
        </p>
      </section>

      <section>
        <h2>2. Crie um logotipo que funcione do favicon à fachada</h2>
        <p>
          O logo da clínica vai aparecer em tamanhos muito diferentes: ícone do
          site, foto de perfil, placa da porta, crachá, papel timbrado. Ele
          precisa ser legível em todos.
        </p>
        <ul>
          <li>Uma versão principal (horizontal) e uma reduzida (símbolo ou monograma).</li>
          <li>Versões em cor, em preto e em branco, para fundos diferentes.</li>
          <li>Teste em 32 pixels e em um metro de largura antes de aprovar.</li>
          <li>
            Evite clichês da psicologia, como cérebro, letra psi solta e
            silhuetas de cabeça, que deixam a clínica igual a muitas outras.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: um logotipo tipográfico com o nome da
          clínica e um monograma de duas letras para o perfil das redes e o
          ícone do navegador.
        </p>
        <p>
          <strong>Erro comum</strong>: um logo com muitos detalhes finos que
          some na foto de perfil. Antes de registrar, confira se o nome e o
          sinal estão livres na base do{" "}
          <a href={INPI} {...ext}>
            INPI
          </a>
          . O guia de{" "}
          <Link href="/blog/logo-para-psicologo" className="inst-link">
            logo para psicólogo
          </Link>{" "}
          tem um roteiro de teste.
        </p>
      </section>

      <section>
        <h2>3. Monte uma paleta e uma tipografia que a equipe consiga usar</h2>
        <p>
          Numa clínica, as cores e as fontes vão ser usadas por muita gente,
          muitas vezes em ferramentas simples. O sistema precisa ser pequeno e
          claro.
        </p>
        <ol>
          <li>Duas ou três cores principais e um neutro para o texto.</li>
          <li>
            Contraste mínimo de 4,5:1 entre texto e fundo, como pede a{" "}
            <a href={WCAG} {...ext}>
              WCAG 2.1
            </a>
            .
          </li>
          <li>Uma família tipográfica para títulos e outra (ou a mesma) para texto.</li>
          <li>Versões das fontes disponíveis nas ferramentas que a equipe usa.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: verde-escuro para títulos, areia para
          fundos e um terracota só para botões, com uma fonte gratuita
          disponível no editor de imagens que as psicólogas já usam.
        </p>
        <p>
          <strong>Erro comum</strong>: escolher uma fonte licenciada que só o
          designer tem. A equipe acaba substituindo por outra e o sistema se
          perde. O guia de{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          aprofunda a escolha da paleta.
        </p>
      </section>

      <section>
        <h2>4. Padronize as fotos e a apresentação da equipe</h2>
        <p>
          As fotos da equipe são o que a família mais olha antes de escolher.
          Quando cada uma tem um estilo, a clínica parece um aglomerado de
          consultórios.
        </p>
        <ul>
          <li>Mesmo fundo, mesma luz e mesmo enquadramento para todas.</li>
          <li>Um bloco padrão: nome completo, CRP, formação real, público atendido.</li>
          <li>Títulos de especialista só quando concedidos pelo CFP.</li>
          <li>
            Profissionais de outras áreas com o registro do conselho delas,
            sem apresentar a psicóloga fazendo o que é de outra profissão.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: num mesmo dia de fotos, todas as
          profissionais são fotografadas na sala de espera, com luz de janela, e
          a página da equipe ganha cards iguais com quatro linhas cada.
        </p>
        <p>
          <strong>Erro comum</strong>: usar a foto que cada uma já tinha, de
          formatura, de festa ou recortada de outra imagem. O guia de{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>{" "}
          ajuda a planejar a sessão de fotos.
        </p>
      </section>

      <section>
        <h2>5. Leve a identidade para as salas e a sinalização</h2>
        <p>
          A identidade visual de uma clínica também é física. Recepção, placas e
          salas são o primeiro contato de quem chega pela porta.
        </p>
        <ol>
          <li>Fachada ou placa externa com o nome e o registro da clínica.</li>
          <li>Placas das salas no mesmo padrão, sem nomes de pacientes nem horários.</li>
          <li>Recepção com as cores da marca em detalhes, sem exagero.</li>
          <li>Materiais impressos (cartões, receituário, recibos) no mesmo sistema.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: as portas das salas recebem placas com um
          número e um nome inspirado em elementos da natureza, na tipografia da
          marca, e a recepção tem uma única parede na cor principal.
        </p>
        <p>
          <strong>Erro comum</strong>: decorar cada sala de um jeito, conforme a
          preferência de quem a usa mais. A clínica perde unidade. Os guias de{" "}
          <Link href="/blog/placa-consultorio-psicologia" className="inst-link">
            placa para consultório de psicologia
          </Link>{" "}
          e de{" "}
          <Link href="/blog/sala-de-espera-consultorio-psicologia" className="inst-link">
            sala de espera
          </Link>{" "}
          trazem mais detalhes.
        </p>
      </section>

      <section>
        <h2>6. Aplique a identidade no site e nas redes da clínica</h2>
        <p>
          No digital, a identidade visual precisa organizar muitas informações:
          serviços, equipe, públicos, contato. O site é o centro, e as redes
          levam até ele.
        </p>
        <ul>
          <li>Uma página por serviço e uma página de equipe com cards padronizados.</li>
          <li>Modelos de post prontos para cada tipo de conteúdo, com a assinatura de quem escreveu.</li>
          <li>Rodapé com nome da clínica, número de inscrição no CRP e responsável técnica.</li>
          <li>Perfis individuais das psicólogas, se existirem, com a assinatura padrão.</li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: a clínica cria quatro modelos de carrossel
          no editor que a equipe usa. Cada psicóloga escreve o texto, troca o
          nome na última tela e publica, sem pedir arte a ninguém.
        </p>
        <p>
          <strong>Erro comum</strong>: usar imagens de banco sem verificar a
          licença ou fotos de outros perfis. Isso pode infringir a{" "}
          <a href={LDA} {...ext}>
            Lei de Direitos Autorais
          </a>
          . O guia de{" "}
          <Link href="/blog/site-para-clinica-de-psicologia" className="inst-link">
            site para clínica de psicologia
          </Link>{" "}
          detalha a estrutura das páginas.
        </p>
      </section>

      <section>
        <h2>7. Registre tudo num manual de marca simples</h2>
        <p>
          Em clínica, o manual de marca é o que garante que a identidade
          sobreviva à entrada de novas profissionais e à troca de quem cuida das
          redes.
        </p>
        <ol>
          <li>Versões do logo e onde usar cada uma.</li>
          <li>Cores com os códigos para tela e impressão.</li>
          <li>Fontes e onde encontrá-las.</li>
          <li>Regras de foto e o bloco padrão de apresentação da equipe.</li>
          <li>Modelos prontos: post, carrossel, cartão, assinatura de e-mail.</li>
          <li>O que nunca fazer, com exemplos.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: um manual de doze páginas, entregue em PDF
          e numa pasta compartilhada com os arquivos, revisado sempre que entra
          uma profissional nova.
        </p>
        <p>
          <strong>Erro comum</strong>: um manual de cem páginas que ninguém lê.
          O guia de{" "}
          <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
            manual de marca para consultório de psicologia
          </Link>{" "}
          mostra o que entra e o que pode ficar de fora.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na identidade visual de uma clínica de psicologia</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na identidade visual de uma clínica de psicologia"
            tabIndex={0}
          >
            <caption>Identidade visual para clínica de psicologia: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Elemento</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome da clínica com o número de inscrição no CRP</td>
                <td>Clínica sem registro ou peças sem CRP</td>
              </tr>
              <tr>
                <td>Equipe</td>
                <td>Nome completo, CRP e formação real de cada psicóloga</td>
                <td>“Equipe de especialistas” sem títulos concedidos</td>
              </tr>
              <tr>
                <td>Mensagem</td>
                <td>Para quem a clínica existe e como trabalha</td>
                <td>“A melhor clínica da cidade” ou promessa de resultado</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Equipe, salas vazias, objetos, detalhes da marca</td>
                <td>Sessão, paciente, criança atendida, divã</td>
              </tr>
              <tr>
                <td>Logo</td>
                <td>Versões para cada tamanho, testadas</td>
                <td>Cérebro, psi solto ou silhueta de cabeça</td>
              </tr>
              <tr>
                <td>Multiprofissional</td>
                <td>Cada profissão com seu registro e seu papel</td>
                <td>Psicóloga apresentada fazendo atividade de outra profissão</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para clínicas que já têm marca: como atualizar sem recomeçar</h2>
        <p>
          Se a clínica já tem um logo reconhecido, nem sempre vale trocar tudo.
          Uma atualização bem feita mantém o que as pessoas conhecem e organiza o
          resto.
        </p>
        <ul>
          <li>Faça um inventário: liste todas as peças em uso e marque as que fogem do padrão.</li>
          <li>Ajuste o logo só o necessário (legibilidade, versões).</li>
          <li>Crie a assinatura padrão das profissionais e os modelos de post.</li>
          <li>Troque as peças físicas aos poucos, começando pela fachada e pelas salas.</li>
        </ul>
        <p>
          Quando a clínica mudou de público, de nome ou de sociedade, o caso é de
          rebranding. O guia de{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding de consultório de psicologia
          </Link>{" "}
          ajuda a decidir.
        </p>
      </section>

      <section>
        <h2>Para clínicas que atendem famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Clínicas que atendem crianças neurodivergentes costumam reunir várias
          profissões e receber famílias que chegam cansadas, depois de muitas
          consultas. A identidade visual pode tornar esse percurso mais claro e
          mais tranquilo.
        </p>
        <ul>
          <li>
            Ambientes com poucos estímulos: cores calmas nas salas, sinalização
            simples, menos elementos decorativos.
          </li>
          <li>
            Sinalização com pictogramas e palavras, para crianças que se guiam
            melhor por imagem.
          </li>
          <li>
            Uma página que explica o percurso da família na clínica, com cada
            profissional e seu papel.
          </li>
          <li>
            Símbolos usados com cuidado: peças de quebra-cabeça e outros sinais
            têm leituras diferentes na comunidade autista.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: a clínica cria um mapa ilustrado “Sua
          primeira visita”, enviado às famílias antes do primeiro atendimento,
          com fotos da recepção e das salas vazias.
        </p>
        <p>
          Os guias de{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            marketing para clínica multidisciplinar de autismo
          </Link>
          ,{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>{" "}
          e{" "}
          <Link href="/blog/nome-clinica-autismo" className="inst-link">
            nome para clínica de autismo
          </Link>{" "}
          aprofundam esse público.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Cada profissional com cores e estilo próprios, sem regra.</li>
          <li>Divulgação da clínica sem o número de inscrição no CRP.</li>
          <li>“Equipe de especialistas” sem títulos concedidos.</li>
          <li>Logo com detalhes que somem em tamanho pequeno.</li>
          <li>Fotos da equipe em estilos diferentes.</li>
          <li>Fontes que só o designer consegue usar.</li>
          <li>Manual de marca longo demais ou inexistente.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da identidade visual da clínica</h2>
        <ul>
          <li>Arquitetura de marca decidida (única, com assinaturas ou guarda-chuva).</li>
          <li>Clínica registrada no CRP, com responsável técnica, e inscrição nas peças.</li>
          <li>Logo com versões testadas do ícone à fachada.</li>
          <li>Paleta com contraste suficiente e fontes acessíveis à equipe.</li>
          <li>Fotos e bloco de apresentação padronizados para todas.</li>
          <li>Salas, placas e impressos no mesmo sistema.</li>
          <li>Site com página de equipe e modelos de post prontos.</li>
          <li>Manual de marca curto, revisado a cada nova profissional.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como a clínica trabalha, para quem e aonde quer chegar. Daí
          saem o posicionamento, o tom de voz, a identidade visual com as regras
          para a equipe e o site, tudo revisado pelo art. 20. Tudo é apresentado
          em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se cada profissional da sua clínica ainda aparece de um jeito,
          marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>{" "}
            (cartilha, abril de 2026), seção “Pessoa Jurídica/Clínicas”, p. 24.
          </li>
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
            — uso profissional das redes sociais.
          </li>
          <li>
            Instituto Nacional da Propriedade Industrial.{" "}
            <a href={INPI} {...ext}>
              Marcas
            </a>{" "}
            — busca e registro.
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              WCAG 2.1, critério 1.4.3 (contraste mínimo)
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LDA} {...ext}>
              Lei nº 9.610/1998
            </a>{" "}
            (Lei de Direitos Autorais).
          </li>
        </ul>
      </section>
    </>
  )
};
