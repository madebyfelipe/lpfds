import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const neueHaas = localFont({
  src: [
    { path: "../public/fonts/NeueHaasDisplay-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/NeueHaasDisplay-Roman.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/NeueHaasDisplay-RomanItalic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/NeueHaasDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/NeueHaasDisplay-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/NeueHaasDisplay-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/NeueHaasDisplay-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madebyfelipe.com"),
  verification: {
    google: "tN5Kf-NTmvEzkHjSlfQwhrcnv5LpZf4XWn899JNRZkM"
  },
  title: "Made by Felipe | Branding + Social Media Estratégico",
  description:
    "Landing page da Made by Felipe para profissionais e escritórios que querem posicionamento, marca e conteúdo estratégico para lotar agenda.",
  icons: {
    icon: "/logo-symbol-red.svg",
    shortcut: "/logo-symbol-red.svg",
    apple: "/logo-symbol-red.svg"
  },
  openGraph: {
    title: "Made by Felipe | Branding + Social Media Estratégico",
    description:
      "Posicionamento, branding e social media estratégico para negócios que precisam ser percebidos à altura do que entregam.",
    images: ["/logo-black.png"],
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${neueHaas.variable} site-body`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.dataset.theme="dark";}catch(e){}`,
          }}
        />
        {children}
        <CustomCursor />
        <Script id="meta-pixel" strategy="afterInteractive">
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
