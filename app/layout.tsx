import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { CustomCursor } from "@/components/CustomCursor";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madebyfelipe.com"),
  verification: {
    google: "hWQpfk8fLurpgK8t39nD8F0ABbFwEhWT9UmdtvW22Gg"
  },
  title: "Made by Felipe | Branding e Social Media em Sorocaba (SP)",
  description:
    "Estúdio de branding e social media estratégico em Sorocaba (SP). Construção de marca, posicionamento, identidade visual e verbal para profissionais, clínicas e negócios em Sorocaba, São Paulo e região.",
  applicationName: "Made by Felipe",
  authors: [{ name: "Made by Felipe" }],
  creator: "Made by Felipe",
  publisher: "Made by Felipe",
  category: "Branding",
  keywords: [
    "branding",
    "construção de marca",
    "criação de marca",
    "identidade visual",
    "posicionamento de marca",
    "agência de branding",
    "agência de marketing",
    "social media",
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
    title: "Made by Felipe | Branding e Social Media em Sorocaba (SP)",
    description:
      "Construção de marca, posicionamento, identidade visual e verbal para profissionais, clínicas e negócios em Sorocaba, São Paulo e região.",
    url: "/",
    siteName: "Made by Felipe",
    images: ["/logo-white.png"],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Made by Felipe | Branding e Social Media em Sorocaba (SP)",
    description:
      "Estúdio de branding e social media estratégico em Sorocaba (SP), atendendo Sorocaba, São Paulo e região.",
    images: ["/logo-white.png"]
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
        <Script id="meta-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1465893921656330');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1465893921656330&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
