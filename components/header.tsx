"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const defaultNavLinks = [
  { label: "Inicio", href: "#inicio", type: "anchor" },
  { label: "Indemnizaciones", href: "#calculadora", type: "anchor" },
  { label: "Servicios", href: "#servicios", type: "anchor" },
  { label: "Nuestra firma", href: "/nuestra-firma", type: "route" },
  { label: "Blog", href: "/blog", type: "route" },
  { label: "Contacto", href: "#contacto", type: "anchor" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isNuestraFirmaPage = pathname === "/nuestra-firma";
  const navLinks = isNuestraFirmaPage ? [] : defaultNavLinks;
  const hasNavLinks = navLinks.length > 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href={isNuestraFirmaPage ? "/" : "#inicio"} className="flex items-center gap-3 p-2">
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
        </Link>

        {hasNavLinks && (
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        )}

        <div className="flex items-center gap-2">
          {hasNavLinks && (
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>

      {mobileOpen && hasNavLinks && (
        <nav
          className="border-t border-border bg-background px-4 pb-4 lg:hidden"
          aria-label="Menu movil"
        >
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}

          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Cerrar menú
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}