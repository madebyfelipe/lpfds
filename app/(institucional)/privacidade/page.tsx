import type { Metadata } from "next";
import Link from "next/link";
import { LegalIdentificacao, LegalPage } from "@/components/institucional/LegalPage";
import { CONTATO_EMAIL, identificacaoLinhas } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Privacidade | Made by Felipe",
  description:
    "Como a Made by Felipe coleta, usa, compartilha e guarda dados pessoais, e como exercer seus direitos como titular sob a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" }
};

// Cada linha desta página descreve um tratamento que existe de fato no código:
// os três formulários (imersão, newsletter/e-book, diagnóstico), o pixel da
// Meta e os embeds de TikTok/Instagram. Ao mexer em qualquer um deles, mexa
// aqui junto — política que não bate com o comportamento é pior que nenhuma.
export default function PrivacidadePage() {
  return (
    <LegalPage
      kicker="Privacidade"
      titulo="Política de Privacidade"
      resumo="Esta política explica quais dados pessoais são coletados neste site, por que são coletados, com quem são compartilhados e como você pode pedir acesso, correção ou exclusão."
    >
      <section>
        <h2>1. Quem trata os seus dados</h2>
        <p>
          O controlador dos dados pessoais tratados neste site é:
        </p>
        <LegalIdentificacao linhas={identificacaoLinhas()} />
        <p>
          Para qualquer assunto relativo a dados pessoais — inclusive o
          exercício dos direitos descritos no item 7 — escreva para{" "}
          <a href={`mailto:${CONTATO_EMAIL}`} className="inst-link">
            {CONTATO_EMAIL}
          </a>
          . Esse é também o canal de encarregado (DPO) previsto no art. 41 da
          LGPD.
        </p>
      </section>

      <section>
        <h2>2. O que é coletado</h2>
        <p>
          Nada é coletado por navegar pelo site. Os dados abaixo só existem
          quando você preenche um formulário ou aceita cookies.
        </p>

        <h3>2.1 Pedido de imersão</h3>
        <p>
          O formulário da página <Link href="/imersao" className="inst-link">/imersao</Link>{" "}
          coleta <strong>nome</strong>, <strong>número de CRP</strong> e{" "}
          <strong>WhatsApp</strong>. São os três dados necessários para retornar
          o contato e confirmar que você é profissional registrada. Ele não pede
          e-mail, endereço nem dados de pagamento.
        </p>

        <h3>2.2 Newsletter e e-book</h3>
        <p>
          O cadastro coleta <strong>nome</strong> e <strong>e-mail</strong>. O
          nome é usado para personalizar as mensagens; o e-mail, para enviar o
          material e as edições da newsletter. Você pode sair da lista pelo link
          de descadastro presente em toda mensagem.
        </p>

        <h3>2.3 Diagnóstico de marca</h3>
        <p>
          O formulário do diagnóstico coleta dados de identificação (nome,
          e-mail, WhatsApp, cidade/UF e, opcionalmente, CRP, abordagem e anos de
          formação) e respostas sobre o seu consultório, incluindo{" "}
          <strong>valor de sessão e número de sessões por semana</strong>. Esses
          números existem para calcular o Índice de Marca e escrever a análise —
          não são divulgados, publicados nem usados em materiais de venda.
        </p>
        <p>
          O diagnóstico exige aceite expresso antes do envio. Sem esse aceite o
          formulário não é enviado.
        </p>

        <h3>2.4 Dados técnicos</h3>
        <p>
          A hospedagem registra dados técnicos de acesso (endereço IP, data e
          hora, tipo de navegador) em logs de servidor, pelo tempo necessário à
          segurança e ao funcionamento do site. Se você aceitar os cookies de
          medição, a Meta também recebe dados de navegação — veja a{" "}
          <Link href="/cookies" className="inst-link">
            Política de Cookies
          </Link>
          .
        </p>
        <p>
          Este site <strong>não</strong> coleta dados de saúde, não recebe
          informação sobre pacientes e não é canal de atendimento clínico. Não
          envie dados de terceiros pelos formulários.
        </p>
      </section>

      <section>
        <h2>3. Por que é coletado (bases legais)</h2>
        <ul>
          <li>
            <strong>Pedido de imersão e diagnóstico</strong> — procedimentos
            preliminares de contrato a seu pedido (art. 7º, V da LGPD) e
            consentimento para o contato (art. 7º, I).
          </li>
          <li>
            <strong>Newsletter e e-book</strong> — consentimento (art. 7º, I),
            revogável a qualquer momento.
          </li>
          <li>
            <strong>Cookies de medição</strong> — consentimento (art. 7º, I),
            pedido no banner e revogável a qualquer momento.
          </li>
          <li>
            <strong>Logs técnicos</strong> — cumprimento de obrigação legal de
            guarda de registros (art. 7º, II, c/c art. 15 do Marco Civil da
            Internet) e legítimo interesse em manter o site seguro (art. 7º, IX).
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Com quem é compartilhado</h2>
        <p>
          Seus dados não são vendidos. Eles são processados por fornecedores
          contratados, cada um limitado à finalidade abaixo:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> — hospedagem do site e logs de acesso.
          </li>
          <li>
            <strong>Hostinger</strong> — servidor de e-mail que entrega os
            pedidos de imersão e diagnóstico à nossa caixa.
          </li>
          <li>
            <strong>Twenty CRM</strong> — cadastro de contatos e histórico de
            atendimento, em instância própria.
          </li>
          <li>
            <strong>Make</strong> — automação de envio dos e-mails de
            confirmação e entrega do e-book.
          </li>
          <li>
            <strong>Meta (Facebook/Instagram)</strong> — medição de audiência,{" "}
            <em>somente</em> se você aceitar os cookies de medição.
          </li>
        </ul>
        <p>
          Parte desses fornecedores opera servidores fora do Brasil. Nesses
          casos a transferência internacional se apoia no art. 33, IX da LGPD
          (fornecimento dos dados a pedido do titular para execução de contrato
          ou procedimentos preliminares) e em cláusulas contratuais dos próprios
          fornecedores.
        </p>
        <p>
          Dados também podem ser compartilhados quando houver ordem judicial ou
          obrigação legal.
        </p>
      </section>

      <section>
        <h2>5. Por quanto tempo é guardado</h2>
        <ul>
          <li>
            <strong>Contatos que não viraram cliente</strong> — até 24 meses
            após o último contato, ou até você pedir a exclusão.
          </li>
          <li>
            <strong>Clientes</strong> — pelo prazo do contrato e mais 5 anos,
            para fins fiscais e de defesa em eventual processo.
          </li>
          <li>
            <strong>Newsletter</strong> — até você se descadastrar.
          </li>
          <li>
            <strong>Logs de acesso</strong> — 6 meses, conforme o art. 15 do
            Marco Civil da Internet.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Segurança</h2>
        <p>
          O site trafega inteiramente sob HTTPS. As credenciais de e-mail e as
          chaves de API ficam em variáveis de ambiente no servidor, nunca no
          código enviado ao navegador. O acesso ao CRM e à caixa de e-mail é
          individual e protegido por senha.
        </p>
        <p>
          Nenhum sistema é imune a incidentes. Se houver incidente de segurança
          com risco relevante a você, comunicaremos você e a ANPD nos termos do
          art. 48 da LGPD.
        </p>
      </section>

      <section>
        <h2>7. Seus direitos</h2>
        <p>
          A LGPD (art. 18) garante a você o direito de pedir, a qualquer
          momento: confirmação de que existe tratamento; acesso aos seus dados;
          correção de dados incompletos ou desatualizados; anonimização,
          bloqueio ou eliminação de dados desnecessários; portabilidade;
          eliminação dos dados tratados com consentimento; informação sobre com
          quem compartilhamos; e revogação do consentimento.
        </p>
        <p>
          Basta escrever para{" "}
          <a href={`mailto:${CONTATO_EMAIL}`} className="inst-link">
            {CONTATO_EMAIL}
          </a>
          . Respondemos em até 15 dias. Podemos pedir uma confirmação de
          identidade antes de atender ao pedido — é a forma de garantir que os
          dados não sejam entregues a outra pessoa.
        </p>
        <p>
          Você também pode apresentar reclamação à Autoridade Nacional de
          Proteção de Dados (ANPD).
        </p>
      </section>

      <section>
        <h2>8. Crianças e adolescentes</h2>
        <p>
          O site é dirigido a profissionais de psicologia. Não coletamos
          conscientemente dados de menores de 18 anos. Se identificarmos um
          cadastro nessa condição, ele é excluído.
        </p>
      </section>

      <section>
        <h2>9. Mudanças nesta política</h2>
        <p>
          Se esta política mudar, a data de atualização no topo muda junto. Se a
          mudança afetar a forma como usamos dados já coletados com
          consentimento, pediremos um novo consentimento antes de aplicá-la.
        </p>
      </section>
    </LegalPage>
  );
}
