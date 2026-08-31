"use client";

import { useEffect, useMemo, useState } from "react";
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
      <div className="diag__progress" aria-hidden="true">
        <span className="diag__progress-bar" style={{ width: `${progresso}%` }} />
      </div>
      <p className="diag__step">
        Etapa {step + 1} de {total}
      </p>

      <div className="diag__head">
        <p className="inst-kicker">— {section.kicker}</p>
        <h2 className="diag__title">{section.title}</h2>
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

      <p className="inst-form__status" role="status">
        {estado === "erro" ? erro : ""}
      </p>
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
            <span className="diag-matrix__row-label">{row.label}</span>
            <div className="diag-matrix__opts">
              {scale.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  className="diag-chip"
                  aria-pressed={values[row.name] === s.value}
                  onClick={() => set(row.name, s.value)}
                >
                  {s.value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </fieldset>
    );
  }

  if (field.type === "nps") {
    return (
      <fieldset className="diag-field">
        <legend className="diag-field__label">{field.label}</legend>
        <div className="diag-nps">
          {Array.from({ length: 11 }, (_, n) => (
            <button
              key={n}
              type="button"
              className="diag-chip"
              aria-pressed={value === String(n)}
              onClick={() => set(field.name, String(n))}
            >
              {n}
            </button>
          ))}
        </div>
      </fieldset>
    );
  }

  // Consentimento: checkbox único (mais natural que Sim/Não).
  if (field.name === "consent_lgpd") {
    return (
      <label className="diag-consent">
        <input
          type="checkbox"
          checked={value === "sim"}
          onChange={(e) => set(field.name, e.target.checked ? "sim" : "")}
        />
        <span>{field.label}</span>
      </label>
    );
  }

  if (field.type === "radio" || field.type === "yesno") {
    return (
      <fieldset className="diag-field">
        <legend className="diag-field__label">{field.label}</legend>
        <div className="diag-options">
          {(field.options ?? []).map((opt) => (
            <button
              key={opt.value}
              type="button"
              className="diag-option"
              aria-pressed={value === opt.value}
              onClick={() => set(field.name, opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
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
