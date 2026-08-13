import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "RDR Soldas e Serviços | Solda e Serralheria em São Paulo";
const description =
  "Rafael Reale atende residências, obras e indústrias na Grande São Paulo. Estruturas metálicas, portões, grades, corrimãos, solda em inox e manutenção industrial com acabamento impecável.";

export const metadata: Metadata = {
  // set metadataBase to the production domain once it's defined
  title,
  description,
  keywords: [
    "solda São Paulo",
    "serralheria São Paulo",
    "portões e grades",
    "estruturas metálicas",
    "solda inox",
    "manutenção industrial",
  ],
  openGraph: {
    title,
    description,
    siteName: "RDR Soldas e Serviços",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${barlow.variable}`}>
      <Analytics/>
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}
