import Link from "next/link";

const provincias = [
  { nombre: "Cádiz", slug: "cadiz" },
  { nombre: "Sevilla", slug: "sevilla" },
  { nombre: "Málaga", slug: "malaga" },
];

export default function ProvinciasPage() {
  return (
    <main className="min-h-screen bg-background px-4 pt-32 pb-20">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          Abogados de accidentes por provincia
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Consulta nuestras páginas específicas por provincia para encontrar información sobre
          reclamaciones por accidentes de tráfico y contacto rápido con el despacho.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {provincias.map((provincia) => (
            <article
              key={provincia.slug}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-card-foreground">
                {provincia.nombre}
              </h2>

              <div className="mt-6">
                <Link
                  href={`/provincias/${provincia.slug}`}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Ver {provincia.nombre}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}