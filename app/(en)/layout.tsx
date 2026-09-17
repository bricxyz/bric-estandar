import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRIC · Electronic solutions for real-world challenges",
  description:
    "BRIC designs and builds custom hardware and software for industry. Meet SERVA, the rod string rotation sensor for beam pumping units.",
  alternates: { canonical: "/en", languages: { es: "/", en: "/en" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
