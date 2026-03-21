import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caso Montoro | Portal de Transparencia Judicial",
  description: "La mayor trama de corrupción en el Ministerio de Hacienda: 28 imputados, comisiones millonarias y leyes a medida.",
  keywords: ["Caso Montoro", "Corrupción", "Hacienda", "Ministerio", "Transparencia"],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='black'/><text x='50%' y='68%' dominant-baseline='middle' text-anchor='middle' font-size='70' fill='%23dc2626' font-family='sans-serif' font-weight='bold'>M</text></svg>",
  },
  openGraph: {
    title: "Caso Montoro: El Entramado Oculto",
    description: "7 años bajo secreto de sumario. Descubre la red de poder desde Aznar hasta el blindaje mediático de Ayuso.",
    type: "website",
    locale: "es_ES",
    siteName: "Caso Montoro - Rastreador Público",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investigación Pública: Caso Montoro",
    description: "La mayor trama de corrupción en el Ministerio de Hacienda de España. 28 imputados sin declarar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
