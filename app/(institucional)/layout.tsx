import { InstFooter } from "@/components/institucional/InstFooter";
import { InstNav } from "@/components/institucional/InstNav";
import { InstMobileCta } from "@/components/institucional/InstMobileCta";
import { SmoothScroll } from "@/components/institucional/SmoothScroll";
import { UiSound } from "@/components/institucional/UiSound";
import { EbookModal } from "@/components/hub/EbookModal";
import "../institucional.css";
import "../monolog.css";

// Shell do site institucional (beta). O wrapper `.inst` escopa o tema
// claro do design system — /hub, /contato e /portfolio seguem no tema
// escuro do globals.css, sem alteração.
//
// EbookModal mora aqui (não só em /hub) porque o banner de anúncio do blog
// (AdBanner) também pode abrir o portão do e-book via openEbookModal() — sem
// o modal montado nesta árvore, o evento não tem quem escute.
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
      <EbookModal />
      <div className="mgrain" aria-hidden="true" />
    </div>
  );
}
