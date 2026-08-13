import { Scale } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
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
            <h3 className="mb-4 font-semibold text-primary-foreground">Accidentes</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/accidentes/accidente-coche"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Accidente de coche
                </Link>
              </li>
              <li>
                <Link
                  href="/accidentes/accidente-moto"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Accidente de moto
                </Link>
              </li>
              <li>
                <Link
                  href="/accidentes/atropello"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Atropello
                </Link>
              </li>
              <li>
                <Link
                  href="/accidentes/accidente-bicicleta"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Bicicleta
                </Link>
              </li>
              <li>
                <Link
                  href="/accidentes/accidente-patinete"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Patinete
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-primary-foreground">Indemnizaciones</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios/lesiones-accidente-trafico"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Lesiones
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/secuelas-accidente-trafico"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Secuelas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/lucro-cesante"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Lucro cesante
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/danos-materiales"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Daños materiales
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/reclamacion-aseguradora"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Reclamación a aseguradoras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-primary-foreground">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/provincias"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Provincias
                </Link>
              </li>
              <li>
                <Link
                  href="/nuestra-firma"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Nuestra Firma
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Contacto
                </Link>
              </li>
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