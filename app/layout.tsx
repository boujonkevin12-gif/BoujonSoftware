import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boujonsoftware.com"),
  title: {
    default: "Boujon Software — Software a medida para empresas que crecen",
    template: "%s | Boujon Software",
  },
  description:
    "En Boujon Software diseñamos páginas web, aplicaciones y sistemas personalizados para negocios que buscan crecer mediante tecnología.",
  keywords: [
    "desarrollo de software",
    "software a medida",
    "desarrollo web",
    "dashboards",
    "automatizaciones",
    "inteligencia artificial",
    "Boujon Software",
  ],
  openGraph: {
    title: "Boujon Software — Software a medida para empresas que crecen",
    description:
      "Diseñamos páginas web, aplicaciones y sistemas personalizados para negocios que buscan crecer mediante tecnología.",
    url: "https://boujonsoftware.com",
    siteName: "Boujon Software",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boujon Software",
    description:
      "Software a medida, diseño premium y código escalable para empresas que buscan crecer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`dark ${inter.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
