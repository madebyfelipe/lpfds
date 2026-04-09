import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
      <body className={`${poppins.variable} site-body`}>{children}</body>
    </html>
  );
}
