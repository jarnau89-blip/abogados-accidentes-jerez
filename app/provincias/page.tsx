import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abogados de accidentes por provincia | Accidente Legal Abogados",
  description:
    "Cobertura de abogados de accidentes en distintas provincias de Andalucía. Consulta información específica por provincia y contacta con nuestro despacho.",
};

const provincias = [
  {
    nombre: "Cádiz",
    slug: "cadiz",
    descripcion:
      "Atención a lesionados y víctimas de accidentes de tráfico en Cádiz, Jerez, El Puerto, San Fernando, Chiclana y otras zonas de la provincia.",
  },
  {
    nombre: "Sevilla",
    slug: "sevilla",
    descripcion:
      "Asistencia en reclamaciones por accidentes de tráfico en Sevilla capital y provincia, con orientación legal para indemnizaciones y secuelas.",
  },
  {
    nombre: "Málaga",
    slug: "malaga",
    descripcion:
      "Información legal sobre accidentes de tráfico en Málaga y provincia, con apoyo en reclamaciones frente a aseguradoras.",
  },
];

export default function ProvinciasPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <section className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Cobertura por provincias
          </span>
          <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
            Abogados de accidentes por provincia
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Hemos creado páginas específicas por provincia para ofrecer información más útil sobre
            nuestra cobertura, el tipo de reclamaciones que gestionamos y la forma de contacto más
            rápida en cada zona.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {provincias.map((provincia) => (
            <article
              key={provincia.slug}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-2xl font-bold text-card-foreground">{provincia.nombre}</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {provincia.descripcion}
              </p>

              <div className="mt-6">
                <Link
                  href={`/provincias/${provincia.slug}`}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Ver página de {provincia.nombre}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}