import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accidentelegalabogados.com | Accidente Legal Abogados| Calcula tu Indemnización Gratis",
  description:
    "Máxima indemnización sin adelantos y sin riesgos. Sólo cobramos si tu cobras.",
  keywords:
    "Abogados accidentes españa, indemnización accidente trafico, abogado trafico toda españa, reclamacion accidente",
};

export const viewport: Viewport = {
  themeColor: "#7b8dbe",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
