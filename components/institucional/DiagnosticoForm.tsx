"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  labelFor,
  pontosContato,
  requestDiagnostico,
  sections,
  validateDiagnostico,
  type Banda,
  type DiagnosticoValues,
  type Field,
  type Utm
} from "@/lib/diagnostico";

type Estado = "idle" | "enviando" | "enviado" | "erro";

// Formulário do diagnóstico — Índice de Marca do Consultório (0–100).
//
// Multi-etapas (uma seção por passo) com barra de progresso, para segurar a
// conclusão de um form longo. É 100% data-driven a partir de `lib/diagnostico`:
// mudar campo/opção/peso é lá, não aqui. O Índice NÃO é calculado no cliente —
// o servidor é a fonte única; aqui só coletamos e mostramos o resultado que a
// rota devolve.
export function DiagnosticoForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<DiagnosticoValues>({});
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");
  const [resultado, setResultado] = useState<{ indice: number; banda: Banda } | null>(null);
  const [utm, setUtm] = useState<Utm>({});

  const tituloRef = useRef<HTMLHeadingElement>(null);
  // Não roubar o foco no primeiro render: só quando a etapa de fato muda.
  const primeiraEtapa = useRef(true);

  // Parâmetros de campanha, se a pessoa veio de um e-mail/anúncio.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const pick = (k: keyof Utm) => p.get(k) ?? undefined;
    setUtm({
      utm_source: pick("utm_source"),
      utm_medium: pick("utm_medium"),
      utm_campaign: pick("utm_campaign")
    });
  }, []);

  const section = sections[step];
  const total = sections.length;
  const ultima = step === total - 1;

  useEffect(() => {
    if (primeiraEtapa.current) {
      primeiraEtapa.current = false;
      return;
    }
    tituloRef.current?.focus();
  }, [step]);

  const sectionNames = useMemo(
    () => new Set(section.fields.map((f) => f.name)),
    [section]
  );

  const set = (name: string, value: string) => {
    setValues((cur) => ({ ...cur, [name]: value }));
    if (estado === "erro") {
      setEstado("idle");
      setErro("");
    }
  };

  // Reaproveita a validação da fonte única, filtrando só os campos deste passo.
  const faltandoNoPasso = () =>
    validateDiagnostico(values).filter((n) => sectionNames.has(n));

  const avancar = () => {
    const faltando = faltandoNoPasso();
    if (faltando.length) {
      setErro(`Confira: ${labelFor(faltando[0])}.`);
      setEstado("erro");
      return;
    }
    setEstado("idle");
    setErro("");
    setStep((s) => Math.min(s + 1, total - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const voltar = () => {
    setEstado("idle");
    setErro("");
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const enviar = async () => {
    const faltando = validateDiagnostico(values);
    if (faltando.length) {
      // Manda para a primeira seção que ainda tem pendência.
      const idx = sections.findIndex((s) => s.fields.some((f) => faltando.includes(f.name)));
      if (idx >= 0) setStep(idx);
      setErro(`Confira: ${labelFor(faltando[0])}.`);
      setEstado("erro");
      return;
    }

    setEstado("enviando");
    try {
      const res = await requestDiagnostico({ values, utm });
      setResultado({ indice: res.indice ?? 0, banda: (res.banda ?? "Em construção") as Banda });
      setEstado("enviado");
    } catch {
      setErro("Não consegui enviar agora. Tenta de novo — se persistir, chama no WhatsApp.");
      setEstado("erro");
    }
  };

  if (estado === "enviado" && resultado) {
    return (
      <div className="diag-done">
        <p className="inst-kicker">— Recebido</p>
        <p className="diag-done__index">
          Índice {resultado.indice}
          <span>/100</span>
        </p>
        <p className="diag-done__band">{resultado.banda}</p>
        <p className="diag-done__copy">
          Guardei suas respostas. A análise escrita chega no seu e-mail em até um dia útil —
          com o gargalo apontado e o primeiro passo. Se quiser adiantar, me chama no WhatsApp.
        </p>
      </div>
    );
  }

  const progresso = Math.round(((step + 1) / total) * 100);

  return (
    <div className="diag">
      <div
        className="diag__progress"
        role="progressbar"
        aria-label="Progresso do diagnóstico"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={step + 1}
        aria-valuetext={`Etapa ${step + 1} de ${total}`}
      >
        <span className="diag__progress-bar" style={{ width: `${progresso}%` }} />
      </div>
      <p className="diag__step">
        Etapa {step + 1} de {total}
      </p>

      <div className="diag__head">
        <p className="inst-kicker">— {section.kicker}</p>
        {/* tabIndex -1: alvo de foco programático na troca de etapa, sem
            entrar na ordem de Tab. */}
        <h2 className="diag__title" ref={tituloRef} tabIndex={-1}>
          {section.title}
        </h2>
        {section.intro && <p className="diag__intro">{section.intro}</p>}
      </div>

      <div className="diag__fields">
        {section.fields.map((field) => (
          <FieldControl key={field.name} field={field} values={values} set={set} />
        ))}
      </div>

      <div className="diag__nav">
        {step > 0 && (
          <button type="button" className="diag__back" onClick={voltar}>
            ← Voltar
          </button>
        )}
        {ultima ? (
          <button
            type="button"
            className="inst-submit"
            onClick={enviar}
            disabled={estado === "enviando"}
          >
            {estado === "enviando" ? "Enviando…" : "Enviar diagnóstico →"}
          </button>
        ) : (
          <button type="button" className="inst-submit" onClick={avancar}>
            Continuar →
          </button>
        )}
      </div>

      <p
        className="inst-form__status"
        role={estado === "erro" ? "alert" : "status"}
      >
        {estado === "erro" ? erro : ""}
      </p>
    </div>
  );
}


// ---------------------------------------------------------------------------
// Grupo de opções
// ---------------------------------------------------------------------------

/**
 * Um grupo de escolha única. Eram botões independentes com `aria-pressed`:
 * dava para operar pelo teclado, mas cada opção entrava na ordem de Tab e o
 * leitor de tela anunciava "botão pressionado" em vez de "opção 2 de 3".
 *
 * Aqui é o padrão radiogroup: um único ponto de parada no Tab (roving
 * tabindex) e as setas percorrem as opções, como num `<input type="radio">`.
 */
function GrupoOpcoes({
  opcoes,
  valor,
  onEscolher,
  rotuloId,
  rotulo,
  className,
  itemClassName
}: {
  opcoes: { value: string; label: string }[];
  valor: string;
  onEscolher: (value: string) => void;
  rotuloId?: string;
  rotulo?: string;
  className: string;
  itemClassName: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const selecionado = opcoes.findIndex((o) => o.value === valor);
  // Sem escolha ainda, a primeira opção é quem recebe o foco — o grupo
  // precisa de exatamente um ponto de entrada no Tab.
  const focavel = selecionado >= 0 ? selecionado : 0;

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const n = opcoes.length;
    let alvo: number;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        alvo = (focavel + 1) % n;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        alvo = (focavel - 1 + n) % n;
        break;
      case "Home":
        alvo = 0;
        break;
      case "End":
        alvo = n - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    onEscolher(opcoes[alvo].value);
    refs.current[alvo]?.focus();
  };

  return (
    <div
      role="radiogroup"
      aria-labelledby={rotuloId}
      aria-label={rotuloId ? undefined : rotulo}
      className={className}
      onKeyDown={onKeyDown}
    >
      {opcoes.map((opcao, i) => (
        <button
          key={opcao.value}
          ref={(node) => {
            refs.current[i] = node;
          }}
          type="button"
          role="radio"
          aria-checked={valor === opcao.value}
          tabIndex={i === focavel ? 0 : -1}
          className={itemClassName}
          onClick={() => onEscolher(opcao.value)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Um controle por tipo de campo
// ---------------------------------------------------------------------------

type ControlProps = {
  field: Field;
  values: DiagnosticoValues;
  set: (name: string, value: string) => void;
};

function FieldControl({ field, values, set }: ControlProps) {
  const value = values[field.name] ?? "";

  if (field.type === "matrix") {
    const scale = field.scale ?? [];
    return (
      <fieldset className="diag-matrix">
        <legend className="diag-field__label">{field.label}</legend>
        <p className="diag-matrix__scale">{scale.map((s) => s.label).join(" · ")}</p>
        {pontosContato.map((row) => (
          <div key={row.name} className="diag-matrix__row">
            <span className="diag-matrix__row-label" id={`${row.name}-label`}>
              {row.label}
            </span>
            <GrupoOpcoes
              rotuloId={`${row.name}-label`}
              className="diag-matrix__opts"
              itemClassName="diag-chip"
              opcoes={scale.map((s) => ({ value: s.value, label: s.value }))}
              valor={values[row.name] ?? ""}
              onEscolher={(v) => set(row.name, v)}
            />
          </div>
        ))}
      </fieldset>
    );
  }

  if (field.type === "nps") {
    return (
      <fieldset className="diag-field">
        <legend className="diag-field__label" id={`${field.name}-label`}>
          {field.label}
        </legend>
        <GrupoOpcoes
          rotuloId={`${field.name}-label`}
          className="diag-nps"
          itemClassName="diag-chip"
          opcoes={Array.from({ length: 11 }, (_, n) => ({
            value: String(n),
            label: String(n)
          }))}
          valor={value}
          onEscolher={(v) => set(field.name, v)}
        />
      </fieldset>
    );
  }

  // Consentimento: checkbox único (mais natural que Sim/Não).
  if (field.name === "consent_lgpd") {
    return (
      <label className="diag-consent">
        <input
          type="checkbox"
          required
          aria-required="true"
          checked={value === "sim"}
          onChange={(e) => set(field.name, e.target.checked ? "sim" : "")}
        />
        {/* O aceite tem de dizer a que política se refere — senão não é
            informado, e sem ser informado não é consentimento (LGPD art. 5º,
            XII). O link abre em nova aba para não perder o formulário. */}
        <span>
          {field.label}{" "}
          <Link
            href="/privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="inst-link"
          >
            Ler a Política de Privacidade
          </Link>
          .
        </span>
      </label>
    );
  }

  if (field.type === "radio" || field.type === "yesno") {
    return (
      <fieldset className="diag-field">
        <legend className="diag-field__label" id={`${field.name}-label`}>
          {field.label}
        </legend>
        <GrupoOpcoes
          rotuloId={`${field.name}-label`}
          className="diag-options"
          itemClassName="diag-option"
          opcoes={(field.options ?? []).map((o) => ({
            value: o.value,
            label: o.label
          }))}
          valor={value}
          onEscolher={(v) => set(field.name, v)}
        />
      </fieldset>
    );
  }

  if (field.type === "textarea") {
    return (
      <label className="diag-field">
        <span className="diag-field__label">{field.label}</span>
        <textarea
          className="inst-field__input diag-field__textarea"
          rows={3}
          value={value}
          onChange={(e) => set(field.name, e.target.value)}
        />
        {field.help && <span className="diag-field__help">{field.help}</span>}
      </label>
    );
  }

  const autoComplete =
    field.name === "email"
      ? "email"
      : field.name === "whatsapp"
        ? "tel"
        : field.name === "nome"
          ? "name"
          : undefined;

  return (
    <label className="diag-field">
      <span className="diag-field__label">
        {field.label}
        {!field.required && <em className="diag-field__opt"> · opcional</em>}
      </span>
      <input
        type={field.type}
        inputMode={field.type === "number" ? "numeric" : undefined}
        autoComplete={autoComplete}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => set(field.name, e.target.value)}
        className="inst-field__input"
      />
      {field.help && <span className="diag-field__help">{field.help}</span>}
    </label>
  );
}
