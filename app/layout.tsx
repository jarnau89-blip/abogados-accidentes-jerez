import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abogados Accidentes Jerez | Calcula tu Indemnizacion Gratis",
  description:
    "Abogados especialistas en accidentes de trafico en Jerez de la Frontera. Calcula tu indemnizacion gratis. Atencion 24 horas. Primera consulta gratuita.",
  keywords:
    "abogados accidentes jerez, indemnizacion accidente trafico, abogado trafico jerez, reclamacion accidente",
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
