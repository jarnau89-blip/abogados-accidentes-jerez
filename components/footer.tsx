import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-primary-foreground">
                  Abogados Accidentes
                </span>
                <span className="text-xs text-primary-foreground/60">
                  España
                </span>
              </div>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              Despacho especializado en derecho de accidentes de trafico y
              reclamaciones a aseguradoras.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">
              Navegacion
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Calculadora", href: "#calculadora" },
                { label: "Servicios", href: "#servicios" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">
              Servicios
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Lesiones personales",
                "Danos materiales",
                "Secuelas",
                "Lucro cesante",
                "Gestion de seguros",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-primary-foreground/60">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Aviso legal",
                "Politica de privacidad",
                "Politica de cookies",
              ].map((item) => (
                <li key={item}>
                  <span className="cursor-pointer text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-xs text-primary-foreground/40">
            {"\u00A9"} {new Date().getFullYear()} Abogados Accidentes. Todos los derechos
            reservados. Las cantidades mostradas en la web son orientativas.
          </p>
        </div>
      </div>
    </footer>
  );
}
