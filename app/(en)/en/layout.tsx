import { HtmlLang } from "@/components/institucional/HtmlLang";
import { InstFooter } from "@/components/institucional/InstFooter";
import { InstMobileCta } from "@/components/institucional/InstMobileCta";
import { InstNav } from "@/components/institucional/InstNav";
import { LangFloater } from "@/components/institucional/LangFloater";
import { SmoothScroll } from "@/components/institucional/SmoothScroll";
import { UiSound } from "@/components/institucional/UiSound";
import "../../institucional.css";
import "../../monolog.css";

// Shell da versão em inglês (/en). Mesmo shell do institucional em PT, com nav,
// rodapé e controles em inglês (lib/i18n.ts). O blog fica só em português.
// O script ajusta o <html lang> antes da pintura; o wrapper já leva lang="en".
const htmlLang = `document.documentElement.lang="en"`;

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="inst" lang="en">
      <script dangerouslySetInnerHTML={{ __html: htmlLang }} />
      <HtmlLang lang="en" />
      <InstNav />
      {children}
      <InstFooter locale="en" />
      <InstMobileCta />
      <LangFloater />
      <SmoothScroll />
      <UiSound />
      <div className="mgrain" aria-hidden="true" />
    </div>
  );
}
