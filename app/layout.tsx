import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { FloatingActions } from "@/components/floating-actions";

const inter = Inter({ subsets: ["latin"] });

export const metadataBase = new URL("https://abogados-accidentes-jerez.vercel.app");
export const metadata: Metadata = {
  title: {
    default: "Accidente Legal Abogados",
    template: "%s | Accidente Legal Abogados",
  },
  description:
    "Abogados especialistas en accidentes de tráfico. Reclamaciones de indemnización por lesiones, secuelas y daños frente a aseguradoras.",
  openGraph: {
    title: "Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico. Reclamaciones de indemnización por lesiones, secuelas y daños frente a aseguradoras.",
    type: "website",
    url: "https://abogados-accidentes-jerez.vercel.app",
    siteName: "Accidente Legal Abogados",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico. Reclamaciones de indemnización por lesiones, secuelas y daños frente a aseguradoras.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}