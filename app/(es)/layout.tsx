import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRIC · Soluciones electrónicas para desafíos reales",
  description:
    "BRIC diseña y desarrolla hardware y software a medida para la industria productiva. Conocé SERVA, el sensor de giro para sarta de varilla en equipos AIB.",
  alternates: { canonical: "/", languages: { es: "/", en: "/en" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
