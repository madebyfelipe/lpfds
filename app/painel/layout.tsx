import type { Metadata } from "next";
import "../institucional.css";
import "./painel.css";

// Painel interno (prospecção). Fica atrás do HTTP Basic do proxy.ts e nunca
// é indexado. Usa os tokens do design system via `.inst` — mesmos quatro
// tons, mesma tipografia, mesmo tema escuro do site.
export const metadata: Metadata = {
  title: "Painel comercial — Made by Felipe",
  robots: { index: false, follow: false }
};

export default function PainelLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="inst painel">{children}</div>;
}
