// À placer dans : app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Assane Diakhoumpa — Data Engineer",
  description:
    "Data Engineer junior spécialisé dans l'intégration, la transformation et l'automatisation des données. Disponible en freelance, full remote.",
  keywords: [
    "Data Engineer",
    "Data Engineer Sénégal",
    "Data Engineer Afrique",
    "ETL",
    "Airflow",
    "Python",
    "PostgreSQL",
    "Freelance Data",
  ],
  authors: [{ name: "Assane Diakhoumpa" }],
  openGraph: {
    title: "Assane Diakhoumpa — Data Engineer",
    description:
      "Data Engineer junior spécialisé dans l'intégration, la transformation et l'automatisation des données.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

