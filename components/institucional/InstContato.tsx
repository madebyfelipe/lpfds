import { EMAIL } from "@/lib/institucional";

// Faixa "— Contato" repetida no fim de todas as páginas do protótipo.
export function InstContato({ flushBottom = false }: { flushBottom?: boolean }) {
  return (
    <section
      className="inst-section"
      style={{ paddingBlock: flushBottom ? "96px 40px" : "96px" }}
    >
      <p className="inst-kicker inst-kicker--tight">— Contato</p>
      <p className="inst-contact__line">
        Projetos e colaborações:{" "}
        <a href={`mailto:${EMAIL}`} className="inst-link">
          {EMAIL}
        </a>
      </p>
    </section>
  );
}
