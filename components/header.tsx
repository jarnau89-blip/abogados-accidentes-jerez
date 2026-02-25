"use client";

import { useState } from "react";
import { Phone, Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 p-2">
  <Image 
    src="/generated-image-4.png"
    alt="Accidente Legal Abogados"
    width={140}
    height={70}
    className="h-16 w-auto object-contain drop-shadow-xl rounded-lg"
  />
  <div className="flex flex-col leading-tight hidden md:block">
    <span className="text-xl font-black bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent tracking-tight">
      Accidente Legal Abogados
    </span>
    <span className="text-sm font-bold text-muted-foreground">
      
    </span>
  </div>
</a>



        {/* Desktop nav */}
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

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-destructive text-destructive-foreground hover:bg-destructive/90 sm:inline-flex"
          >
            <a href="tel:+34722160466">
              <Phone className="mr-2 h-4 w-4" />
              Llamar ahora
            </a>
          </Button>
          <Button
            asChild
            size="icon"
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 sm:hidden"
          >
            <a href="tel:+34722160466" aria-label="Llamar en horario de atencion al publico (8:00 a 15:00) de lunes a viernes">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
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

      {/* Mobile nav */}
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
        </nav>
      )}
    </header>
  );
}
