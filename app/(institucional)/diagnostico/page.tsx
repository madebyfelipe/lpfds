import type { Metadata } from "next";
import { DiagnosticoForm } from "@/components/institucional/DiagnosticoForm";

export const metadata: Metadata = {
  title: "Diagnóstico — Made by Felipe",
  description:
    "Responda os exercícios do guia e receba o Índice de Marca do seu consultório (0–100), com o gargalo apontado e o primeiro passo."
};

export default function DiagnosticoPage() {
  return (
    <main>
      <header className="inst-shell" style={{ padding: "128px 40px 64px" }}>
        <p className="inst-kicker">— Diagnóstico</p>
        <p className="inst-manifesto" style={{ marginTop: "16px" }}>
          Onde a sua marca está hoje — e o próximo passo, por escrito.
        </p>
        <p className="diag-lede">
          As respostas dos exercícios do guia viram um Índice de 0 a 100. Eu leio, escrevo
          a análise e te devolvo o gargalo e o que fazer primeiro. Leva alguns minutos;
          os campos financeiros são opcionais.
        </p>
      </header>

      <section className="inst-section" style={{ paddingBlock: "0 112px" }}>
        <div className="diag-column">
          <DiagnosticoForm />
        </div>
      </section>
    </main>
  );
}
