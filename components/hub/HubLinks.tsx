"use client";

import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { ebook } from "@/lib/newsletter";
import { recemFormados, recemFormadosHref } from "@/lib/recemFormados";
import { hubWebinarHref, webinarNoAr } from "@/lib/webinar";
import { openEbookModal } from "./EbookModal";

type Item = {
  title: string;
  desc: string;
  tag: string;
} & ({ href: string } | { action: "ebook" } | { action: "schedule" });

const items: Item[] = [
  ...(webinarNoAr
    ? [{ title: "Workshop de criação de conteúdo", desc: "Aula ao vivo para psicólogos de consultório.", tag: "Ao vivo", href: hubWebinarHref }]
    : []),
  { title: "Agendar 15 minutos", desc: "A conversa antes da imersão.", tag: "Conversa", action: "schedule" },
  { title: ebook.short, desc: "Construção de marca para psicólogos. Grátis pra quem entra na newsletter.", tag: "E-book", action: "ebook" },
  { title: recemFormados.hub.title, desc: recemFormados.hub.description, tag: "Lives", href: recemFormadosHref },
  { title: "Como trabalho", desc: "Meu método, não chute. Do briefing à decisão final.", tag: "Método", href: "/#processo" },
  { title: "Blog", desc: "Marca e divulgação ética para consultórios de psicologia.", tag: "Artigos", href: "/blog" },
  { title: "Contato", desc: "Agende um horário ou mande uma mensagem — do seu jeito.", tag: "Contato", href: "/contato" }
];

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Links do hub em linhas grandes, no padrão do menu do rodapé do Monolog:
 * número, título, descrição e seta que entra no hover. O e-book não navega:
 * abre o portão da newsletter (EbookModal).
 */
export function HubLinks() {
  return (
    <ol className="hub2-list">
      {items.map((item, i) => {
        const inner = (
          <>
            <span className="hub2-list__num mmono">{pad(i + 1)}</span>
            <span className="hub2-list__main">
              <span className="hub2-list__title">{item.title}</span>
              <span className="hub2-list__desc">{item.desc}</span>
            </span>
            <span className="hub2-list__tag">{item.tag}</span>
            <span className="hub2-list__arrow" aria-hidden="true">
              →
            </span>
          </>
        );
        return (
          <li key={item.title} className="hub2-list__li">
            {"href" in item ? (
              <Link href={item.href} className="hub2-list__link">
                {inner}
              </Link>
            ) : item.action === "ebook" ? (
              <button type="button" className="hub2-list__link" onClick={openEbookModal}>
                {inner}
              </button>
            ) : (
              <ScheduleLink className="hub2-list__link">{inner}</ScheduleLink>
            )}
          </li>
        );
      })}
    </ol>
  );
}
