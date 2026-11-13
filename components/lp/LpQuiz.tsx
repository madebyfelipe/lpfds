"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { WHATSAPP_NUMERO } from "@/lib/legal";
import { lpLeadFieldLabels, requestLpLead, validateLpLead, type LpSource } from "@/lib/lp-lead";

type Step = { question: string; options: string[] };
type Estado = "idle" | "enviando" | "enviado" | "erro";

type Props = {
  source: LpSource;
  /** Perguntas de qualificação — clicar numa opção já avança para a próxima. */
  steps: Step[];
  /** Texto do botão de envio no passo final. */
  submitLabel?: string;
  /** Mensagem pronta no "falar direto no WhatsApp" do fim do form. */
  whatsappMessage: string;
};

/**
 * Mini-quiz das LPs de captação (/lp/marca, /lp/site): alguns passos de
 * botão (qualificação, sem digitar nada) e um passo final de Nome +
 * WhatsApp. Mais curto que o form da imersão de propósito — sem CRP, pensado
 * para tráfego pago.
 *
 * Depois dos campos, sempre fica visível um botão para falar direto no
 * WhatsApp — quem não quer preencher o form não precisa esperar o retorno.
 */
export function LpQuiz({ source, steps, submitLabel = "Quero conversar →", whatsappMessage }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);
  const [form, setForm] = useState({ nome: "", whatsapp: "", consentimento: false });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");

  const uid = useId();
  const statusId = `${uid}-status`;
  const consentId = `${uid}-consent`;
  const nomeRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);

  const totalSteps = steps.length + 1;
  const onQuizStep = stepIndex < steps.length;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(whatsappMessage)}`;

  function escolher(opcao: string) {
    setRespostas((atual) => [...atual.slice(0, stepIndex), opcao]);
    setStepIndex((atual) => atual + 1);
  }

  function voltar() {
    setStepIndex((atual) => Math.max(0, atual - 1));
    if (estado === "erro") limparErro();
  }

  function limparErro() {
    setEstado("idle");
    setErro("");
  }

  async function enviar(event: React.FormEvent) {
    event.preventDefault();
    if (estado === "enviando") return;

    const input = { source, respostas, ...form };
    const faltando = validateLpLead(input);
    if (faltando) {
      setErro(
        faltando === "consentimento"
          ? "Para enviar, é preciso aceitar a Política de Privacidade."
          : `Preencha o campo ${lpLeadFieldLabels[faltando]}.`
      );
      setEstado("erro");
      (faltando === "nome" ? nomeRef : whatsappRef).current?.focus();
      return;
    }

    setEstado("enviando");
    try {
      await requestLpLead(input);
      setEstado("enviado");
      setForm({ nome: "", whatsapp: "", consentimento: false });
    } catch {
      setErro("Não consegui enviar agora. Chama no WhatsApp que eu respondo.");
      setEstado("erro");
    }
  }

  const status =
    estado === "enviando"
      ? "Enviando…"
      : estado === "enviado"
        ? "Recebido. Te chamo no WhatsApp em breve."
        : estado === "erro"
          ? erro
          : "";

  return (
    <div className="lp-quiz">
      <p className="lp-quiz__progress">
        Passo {stepIndex + 1} de {totalSteps}
      </p>

      {onQuizStep ? (
        <div className="lp-quiz__step">
          <p className="lp-quiz__question">{steps[stepIndex].question}</p>
          <div className="lp-quiz__options">
            {steps[stepIndex].options.map((opcao) => (
              <button
                key={opcao}
                type="button"
                className="lp-quiz__option"
                onClick={() => escolher(opcao)}
              >
                {opcao}
              </button>
            ))}
          </div>
          {stepIndex > 0 && (
            <button type="button" className="lp-quiz__back" onClick={voltar}>
              ‹ Voltar
            </button>
          )}
        </div>
      ) : estado === "enviado" ? (
        <div className="lp-quiz__step inst-dark lp-quiz__panel">
          <p className="lp-quiz__sent">Recebido! Te chamo no WhatsApp em breve.</p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="lp-quiz__whatsapp">
            Prefere adiantar? Chamar no WhatsApp agora
          </a>
        </div>
      ) : (
        <div className="lp-quiz__step inst-dark lp-quiz__panel">
          <button type="button" className="lp-quiz__back lp-quiz__back--inverse" onClick={voltar}>
            ‹ Voltar
          </button>
          <form className="inst-form" onSubmit={enviar} noValidate>
            <label className="inst-field">
              <span className="inst-field__label">Nome</span>
              <input
                ref={nomeRef}
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                aria-describedby={statusId}
                value={form.nome}
                onChange={(e) => {
                  setForm((atual) => ({ ...atual, nome: e.target.value }));
                  if (estado === "erro") limparErro();
                }}
                className="inst-field__input"
              />
            </label>
            <label className="inst-field">
              <span className="inst-field__label">WhatsApp</span>
              <input
                ref={whatsappRef}
                type="tel"
                autoComplete="tel"
                required
                aria-required="true"
                aria-describedby={statusId}
                value={form.whatsapp}
                onChange={(e) => {
                  setForm((atual) => ({ ...atual, whatsapp: e.target.value }));
                  if (estado === "erro") limparErro();
                }}
                className="inst-field__input"
              />
            </label>

            <label className="inst-consent" htmlFor={consentId}>
              <input
                id={consentId}
                type="checkbox"
                required
                aria-required="true"
                checked={form.consentimento}
                onChange={(e) => {
                  setForm((atual) => ({ ...atual, consentimento: e.target.checked }));
                  if (estado === "erro") limparErro();
                }}
              />
              <span>
                Autorizo o contato pelo WhatsApp e o uso destes dados para responder
                ao pedido, nos termos da{" "}
                <Link href="/privacidade" className="inst-link">
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>

            <button type="submit" className="inst-submit" disabled={estado === "enviando"}>
              {estado === "enviando" ? "Enviando…" : submitLabel}
            </button>

            <p id={statusId} className="inst-form__status" role={estado === "erro" ? "alert" : "status"}>
              {status}
            </p>
          </form>

          {/* Pedido do Felipe: quem não quer esperar o retorno pode chamar
              direto, sem depender do envio do form. */}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="lp-quiz__whatsapp">
            Prefere falar direto? Chamar no WhatsApp agora
          </a>
        </div>
      )}
    </div>
  );
}
