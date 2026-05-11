"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Indemnizaciones", href: "#calculadora" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 p-2">
          <Image
            src="/generated-image-5.png"
            alt="Accidente Legal Abogados"
            width={140}
            height={70}
            className="h-16 w-auto rounded-lg object-contain drop-shadow-xl"
          />
          <div className="hidden flex-col leading-tight md:flex">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-xl font-black tracking-tight text-transparent">
              Accidente Legal Abogados
            </span>
            <span className="text-sm font-bold text-muted-foreground"></span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/34722160466?text=Hola%2C%20quiero%20consultar%20mi%20caso%20de%20accidente"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversación por WhatsApp"
            className="inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            WhatsApp
          </a>

          <a
            href="tel:+34722160466"
            className="hidden items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 sm:inline-flex"
            aria-label="Llamar ahora"
          >
            <Phone className="mr-2 h-4 w-4" />
            Llamar ahora
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border bg-background px-4 pb-4 lg:hidden"
          aria-label="Menu movil"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/34722160466?text=Hola%2C%20quiero%20consultar%20mi%20caso%20de%20accidente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              WhatsApp
            </a>

            <a
              href="tel:+34722160466"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Phone className="mr-2 h-4 w-4" />
              Llamar ahora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}