import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abogados de accidentes por provincia | Accidente Legal Abogados",
  description:
    "Consulta nuestras páginas de cobertura por provincia para encontrar información general sobre accidentes de tráfico, reclamaciones e indemnizaciones.",
};

const provincias = [
  { nombre: "Cádiz", slug: "cadiz" },
  { nombre: "Sevilla", slug: "sevilla" },
  { nombre: "Málaga", slug: "malaga" },
];

export default function ProvinciasPage() {
  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          Abogados de accidentes por provincia
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Consulta nuestras páginas de cobertura por provincia para encontrar información general
          sobre accidentes de tráfico, reclamaciones e indemnizaciones.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {provincias.map((provincia) => (
            <Link
              key={provincia.slug}
              href={`/provincias/${provincia.slug}`}
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-card-foreground shadow-sm transition hover:bg-muted"
            >
              {provincia.nombre}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}