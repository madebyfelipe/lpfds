import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madebyfelipe.com"),
  title: "Made by Felipe | Branding + Social Media Estratégico",
  description:
    "Landing page da Made by Felipe para profissionais e escritórios que querem posicionamento, marca e conteúdo estratégico para lotar agenda.",
  icons: {
    icon: "/logo-no-text-white.png",
    shortcut: "/logo-no-text-white.png",
    apple: "/logo-no-text-white.png"
  },
  openGraph: {
    title: "Made by Felipe | Branding + Social Media Estratégico",
    description:
      "Posicionamento, branding e social media estratégico para negócios que precisam ser percebidos à altura do que entregam.",
    images: ["/logo-white.png"],
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} site-body`}>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1306925334660468');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1306925334660468&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
