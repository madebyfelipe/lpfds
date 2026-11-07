import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CookieConsent, MetaPixel } from "@/components/CookieConsent";
import { CustomCursor } from "@/components/CustomCursor";
import { StructuredData } from "@/components/StructuredData";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "hWQpfk8fLurpgK8t39nD8F0ABbFwEhWT9UmdtvW22Gg"
  },
  title: "Made by Felipe | Branding para consultórios de psicologia",
  description:
    "Estúdio de branding para psicólogos e consultórios de psicologia. Posicionamento, identidade visual e verbal em dois dias de imersão, no ar em 45 dias, dentro do artigo 20 do Código de Ética. Sorocaba (SP).",
  applicationName: "Made by Felipe",
  authors: [{ name: "Made by Felipe" }],
  creator: "Made by Felipe",
  publisher: "Made by Felipe",
  category: "Branding",
  keywords: [
    "branding para psicólogos",
    "marca para psicólogo",
    "identidade visual para psicólogo",
    "marca para consultório de psicologia",
    "construção de marca",
    "posicionamento de marca",
    "Sorocaba",
    "São Paulo",
    "Made by Felipe"
  ],
  icons: {
    icon: "/logo-no-text-white.png",
    shortcut: "/logo-no-text-white.png",
    apple: "/logo-no-text-white.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Made by Felipe | Branding para consultórios de psicologia",
    description:
      "Posicionamento, identidade visual e verbal para consultórios de psicologia, em dois dias de imersão e no ar em 45 dias.",
    url: "/",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Made by Felipe | Branding para consultórios de psicologia",
    description:
      "Estúdio de branding para psicólogos e consultórios de psicologia, em Sorocaba (SP).",
    images: [OG_IMAGE]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Tema do site institucional aplicado antes da pintura — sem isso
            a página pisca no claro antes da hidratação. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("inst-theme")==="dark"){document.documentElement.dataset.instTheme="dark"}}catch(e){}`
          }}
        />
      </head>
      <body className={`${poppins.variable} site-body`}>
        <StructuredData />
        {children}
        <CustomCursor />
        {/* Medição só entra depois do aceite — o banner é quem decide.
            O <noscript> da Meta saiu junto: ele dispara antes de qualquer
            JavaScript, então não teria como respeitar o consentimento. */}
        <MetaPixel />
        <CookieConsent />
      </body>
    </html>
  );
}
