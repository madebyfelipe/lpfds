"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import {
  lpQuiz,
  lpWhatsappUrl,
  requestLpLead,
  validateLpLead,
  type LpLeadField,
  type LpOrigem
} from "@/lib/lp";

/**
 * Quiz de captação das LPs. Uma pergunta por tela, opções em botão (A–D),
 * "OK" para seguir; no fim, Nome + WhatsApp. Ao lado do envio há sempre o
 * atalho para chamar o Felipe no WhatsApp com as respostas já escritas.
 */
const ERROS: Record<LpLeadField, string> = {
  respostas: "Responda as perguntas antes de enviar.",
  nome: "Escreva o seu nome.",
  whatsapp: "Confira o WhatsApp, com DDD.",
  consentimento: "Para eu entrar em contato, preciso do seu aceite da Política de Privacidade."
};

type Status = "idle" | "sending" | "sent" | "error";

export function LpQuiz({ origem }: { origem: LpOrigem }) {
  const steps = lpQuiz[origem];
  const total = steps.length + 1; // perguntas + contato
  const [at, setAt] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [erro, setErro] = useState<LpLeadField | null>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const nomeRef = useRef<HTMLInputElement>(null);
  const whatsRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const mounted = useRef(false);
  const uid = useId();

  const step = steps[at];
  const escolhida = step ? respostas[step.id] : undefined;
  const wa = lpWhatsappUrl(origem, respostas, nome);

  // Troca de tela move o foco para o título dela (quem usa teclado ou leitor
  // de tela não fica preso num botão que sumiu). Não rouba o foco no load.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    headingRef.current?.focus();
  }, [at, status]);

  function escolher(option: string) {
    if (!step) return;
    setRespostas((r) => ({ ...r, [step.id]: option }));
  }

  function avancar() {
    if (escolhida) setAt((i) => Math.min(i + 1, steps.length));
  }

  // Grupo de rádio com roving tabindex: um ponto de Tab, setas navegam e
  // marcam, Home/End vão às pontas, Enter confirma como o "OK".
  function onOptionKey(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!step) return;
    const last = step.options.length - 1;
    const go = (to: number) => {
      e.preventDefault();
      escolher(step.options[to]);
      optionRefs.current[to]?.focus();
    };
    if (e.key === "ArrowDown" || e.key === "ArrowRight") go(index === last ? 0 : index + 1);
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") go(index === 0 ? last : index - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(last);
    else if (e.key === "Enter" && escolhida) {
      e.preventDefault();
      avancar();
    }
  }

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const input = { origem, respostas, nome, whatsapp, consentimento: consent };
    const invalid = validateLpLead(input);
    setErro(invalid);
    if (invalid) {
      if (invalid === "respostas") setAt(0);
      else ({ nome: nomeRef, whatsapp: whatsRef, consentimento: consentRef })[invalid].current?.focus();
      return;
    }
    setStatus("sending");
    try {
      await requestLpLead({ ...input, site: honeypot });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="lpq">
        <p className="lpq__count">Pronto</p>
        <h3 className="lpq__question" tabIndex={-1} ref={headingRef}>
          Recebido, {nome.trim().split(" ")[0]}.
        </h3>
        <p className="lpq__lead">
          Eu leio cada pedido e respondo pessoalmente no WhatsApp que você deixou. Se preferir
          adiantar a conversa, é só me chamar.
        </p>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="lpq__wa lpq__wa--solid">
          <WhatsIcon /> Chamar no WhatsApp agora
        </a>
      </div>
    );
  }

  return (
    <div className="lpq">
      <div className="lpq__top">
        <p className="lpq__count">
          {at < steps.length
            ? `Pergunta ${String(at + 1).padStart(2, "0")} de ${String(steps.length).padStart(2, "0")}`
            : "Último passo"}
        </p>
        <div
          className="lpq__bar"
          role="progressbar"
          aria-label="Progresso do formulário"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={at + 1}
        >
          <span style={{ width: `${((at + 1) / total) * 100}%` }} />
        </div>
      </div>

      {step ? (
        <div className="lpq__screen" key={step.id}>
          <h3 className="lpq__question" id={`${uid}-q`} tabIndex={-1} ref={headingRef}>
            {step.question}
          </h3>
          {step.hint && <p className="lpq__hint">{step.hint}</p>}
          <div className="lpq__options" role="radiogroup" aria-labelledby={`${uid}-q`}>
            {step.options.map((option, i) => {
              const checked = escolhida === option;
              // Sem escolha ainda, a primeira opção recebe o Tab.
              const tabbable = checked || (!escolhida && i === 0);
              return (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={checked}
                  tabIndex={tabbable ? 0 : -1}
                  ref={(el) => {
                    optionRefs.current[i] = el;
                  }}
                  className="lpq__option"
                  onClick={() => escolher(option)}
                  onKeyDown={(e) => onOptionKey(e, i)}
                >
                  <span className="lpq__key" aria-hidden="true">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>
          <div className="lpq__nav">
            <button type="button" className="lpq__ok" onClick={avancar} disabled={!escolhida}>
              OK <span aria-hidden="true">✓</span>
            </button>
            {at > 0 && (
              <button type="button" className="lpq__back" onClick={() => setAt((i) => i - 1)}>
                ← Voltar
              </button>
            )}
          </div>
        </div>
      ) : (
        <form className="lpq__screen" onSubmit={enviar} noValidate>
          <h3 className="lpq__question" tabIndex={-1} ref={headingRef}>
            Para onde eu mando a resposta?
          </h3>
          <p className="lpq__hint">Só nome e WhatsApp. Respondo pessoalmente, sem robô.</p>

          <div className="lpq__fields">
            <label className="lpq__field">
              <span>Nome</span>
              <input
                ref={nomeRef}
                type="text"
                name="nome"
                autoComplete="name"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  if (erro === "nome") setErro(null);
                }}
                aria-invalid={erro === "nome"}
                maxLength={120}
              />
            </label>
            <label className="lpq__field">
              <span>WhatsApp com DDD</span>
              <input
                ref={whatsRef}
                type="tel"
                name="whatsapp"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(15) 99999-9999"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                  if (erro === "whatsapp") setErro(null);
                }}
                aria-invalid={erro === "whatsapp"}
                maxLength={120}
              />
            </label>
            {/* Honeypot: invisível para pessoas, preenchido por robôs. */}
            <label className="lpq__hp" aria-hidden="true">
              Site
              <input
                type="text"
                name="site"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>
          </div>

          <label className="lpq__consent">
            <input
              ref={consentRef}
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (erro === "consentimento") setErro(null);
              }}
              aria-invalid={erro === "consentimento"}
            />
            <span>
              Aceito que o Made by Felipe use esses dados para falar comigo sobre este pedido,
              conforme a{" "}
              <Link href="/privacidade" className="lpq__link" target="_blank">
                Política de Privacidade
              </Link>
              .
            </span>
          </label>

          {erro && (
            <p className="lpq__error" role="alert">
              {ERROS[erro]}
            </p>
          )}
          {status === "error" && (
            <p className="lpq__error" role="alert">
              Não consegui enviar agora. Me chame no WhatsApp pelo botão abaixo — suas respostas
              já vão escritas.
            </p>
          )}

          <div className="lpq__actions">
            <button type="submit" className="lpq__submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Enviar"}
              <span aria-hidden="true"> →</span>
            </button>
            <button type="button" className="lpq__back" onClick={() => setAt(steps.length - 1)}>
              ← Voltar
            </button>
          </div>

          {/* Pedido do Felipe: no fim do form, contato direto comigo. */}
          <div className="lpq__direct">
            <span className="lpq__or">ou</span>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="lpq__wa">
              <WhatsIcon /> Prefiro falar direto com o Felipe no WhatsApp
            </a>
          </div>
        </form>
      )}
    </div>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.66 15l-1.3 4.76 4.88-1.28A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.9.76.78-2.83-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.18 3.69c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.16-.47-.28Z"
      />
    </svg>
  );
}
