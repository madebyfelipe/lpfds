import { InstFooter } from "@/components/institucional/InstFooter";
import { InstNav } from "@/components/institucional/InstNav";
import { InstMobileCta } from "@/components/institucional/InstMobileCta";
import { SmoothScroll } from "@/components/institucional/SmoothScroll";
import { UiSound } from "@/components/institucional/UiSound";
import "../institucional.css";
import "../monolog.css";

// Shell do site institucional (beta). O wrapper `.inst` escopa o tema
// claro do design system — /hub, /contato e /portfolio seguem no tema
// escuro do globals.css, sem alteração.
export default function InstitucionalLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="inst">
      <InstNav />
      {children}
      <InstFooter />
      <InstMobileCta />
      <SmoothScroll />
      <UiSound />
      <div className="mgrain" aria-hidden="true" />
    </div>
  );
}
