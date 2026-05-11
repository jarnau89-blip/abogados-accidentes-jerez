import { Scale } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-primary-foreground">
                  Accidente Legal Abogados
                </p>
                <p className="text-sm text-primary-foreground/70">España</p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-primary-foreground/70">
              Despacho especializado en derecho de accidentes de tráfico y reclamaciones a
              aseguradoras.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-primary-foreground">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#calculadora"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Calculadora
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Servicios
                </a>
              </li>
              <li>
                <Link
                  href="/provincias"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Provincias
                </Link>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-primary-foreground">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-sm text-primary-foreground/70">Lesiones personales</li>
              <li className="text-sm text-primary-foreground/70">Daños materiales</li>
              <li className="text-sm text-primary-foreground/70">Secuelas</li>
              <li className="text-sm text-primary-foreground/70">Lucro cesante</li>
              <li className="text-sm text-primary-foreground/70">Gestión de seguros</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-primary-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-cookies"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Accidente Legal Abogados. Todos los derechos reservados.
            Las cantidades mostradas en la web son orientativas.
          </p>
        </div>
      </div>
    </footer>
  );
}