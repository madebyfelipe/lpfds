import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/institucional/LegalPage";
import { CONTATO_EMAIL, WHATSAPP_URL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Reembolso e Cancelamento | Made by Felipe",
  description:
    "Direito de arrependimento, cancelamento e reembolso nos serviços de branding da Made by Felipe, conforme o Código de Defesa do Consumidor.",
  alternates: { canonical: "/reembolso" }
};

export default function ReembolsoPage() {
  return (
    <LegalPage
      kicker="Reembolso"
      titulo="Política de Reembolso e Cancelamento"
      resumo="Como funcionam arrependimento, cancelamento e devolução de valores nos projetos contratados — e no material gratuito distribuído por aqui."
    >
      <section>
        <h2>1. Material gratuito</h2>
        <p>
          O e-book e a newsletter são gratuitos: não há pagamento e, portanto,
          não há o que reembolsar. Para sair da lista, use o link de descadastro
          de qualquer mensagem ou escreva para{" "}
          <a href={`mailto:${CONTATO_EMAIL}`} className="inst-link">
            {CONTATO_EMAIL}
          </a>
          .
        </p>
      </section>

      <section>
        <h2>2. Direito de arrependimento (7 dias)</h2>
        <p>
          Contratações fechadas fora do estabelecimento — pelo site, WhatsApp,
          e-mail ou videochamada — têm o direito de arrependimento do{" "}
          <strong>art. 49 do Código de Defesa do Consumidor</strong>: você pode
          desistir em até <strong>7 dias corridos</strong> contados da
          assinatura da proposta ou do primeiro pagamento, o que ocorrer
          primeiro.
        </p>
        <p>
          Dentro desse prazo, o valor já pago é <strong>devolvido
          integralmente</strong>, corrigido, sem multa e sem necessidade de
          justificativa. A devolução é feita em até 10 dias úteis, pelo mesmo
          meio do pagamento.
        </p>
        <p>
          Basta um pedido por escrito para{" "}
          <a href={`mailto:${CONTATO_EMAIL}`} className="inst-link">
            {CONTATO_EMAIL}
          </a>{" "}
          ou pelo{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inst-link"
          >
            WhatsApp
          </a>
          . A data do envio é a que conta.
        </p>
      </section>

      <section>
        <h2>3. Cancelamento depois dos 7 dias</h2>
        <p>
          Passado o prazo de arrependimento, o projeto pode ser encerrado por
          qualquer das partes, a qualquer momento, com aviso por escrito. O
          acerto segue esta lógica:
        </p>
        <ul>
          <li>
            <strong>Etapas concluídas e entregues</strong> — são devidas e não
            são reembolsadas.
          </li>
          <li>
            <strong>Etapa em andamento</strong> — é cobrada
            proporcionalmente ao que já foi produzido até o aviso.
          </li>
          <li>
            <strong>Etapas não iniciadas</strong> — não são cobradas; o que já
            tiver sido pago por elas é devolvido em até 10 dias úteis.
          </li>
        </ul>
        <p>
          As etapas do projeto são as descritas no{" "}
          <Link href="/metodologia" className="inst-link">
            método
          </Link>{" "}
          e detalhadas na proposta assinada.
        </p>
      </section>

      <section>
        <h2>4. A imersão</h2>
        <p>
          A imersão de dois dias é remarcável sem custo com aviso de até{" "}
          <strong>5 dias úteis</strong> da data agendada. Depois disso, a
          remarcação depende de disponibilidade de agenda. Se a imersão não
          chegou a acontecer, ela não é cobrada.
        </p>
        <p>
          Se a imersão já foi realizada, o valor correspondente a ela é devido
          mesmo em caso de cancelamento posterior: o trabalho foi prestado.
        </p>
      </section>

      <section>
        <h2>5. Serviço com defeito</h2>
        <p>
          Se a entrega não corresponder ao que foi contratado, aplica-se o{" "}
          <strong>art. 20 do Código de Defesa do Consumidor</strong>: você pode
          exigir a correção sem custo, o abatimento proporcional do preço ou a
          restituição do valor pago, à sua escolha. O prazo para reclamar é de
          90 dias da entrega.
        </p>
        <p>
          Revisões previstas no escopo da proposta não são &ldquo;defeito&rdquo;
          — fazem parte do processo e não geram cobrança extra nem direito a
          reembolso.
        </p>
      </section>

      <section>
        <h2>6. Como pedir</h2>
        <p>
          Escreva para{" "}
          <a href={`mailto:${CONTATO_EMAIL}`} className="inst-link">
            {CONTATO_EMAIL}
          </a>{" "}
          dizendo o que aconteceu e o que você quer. Respondemos em até 5 dias
          úteis com o cálculo do acerto, quando houver, e o prazo da devolução.
        </p>
        <p>
          Se a proposta assinada previr condição diferente da descrita aqui,{" "}
          <strong>vale o que for mais favorável a você</strong>.
        </p>
      </section>
    </LegalPage>
  );
}
