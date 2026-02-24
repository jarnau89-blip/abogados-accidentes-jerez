import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accidentelegalabogados.com | Abogados Accidentes Jerez | Calcula tu Indemnizacion Gratis",
  description:
    "Máxima indemnización sin adelantos y sin riesgos. Sólo cobramos si tu cobras.",
  keywords:
    "abogados accidentes españa, indemnizacion accidente trafico, abogado trafico toda españa, reclamacion accidente",
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
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
