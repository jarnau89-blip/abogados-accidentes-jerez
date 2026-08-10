import Link from "next/link";

const items = [
  "Lesiones temporales",
  "Secuelas",
  "Perjuicio estético",
  "Gastos médicos",
  "Gastos de rehabilitación",
  "Lucro cesante",
  "Daños materiales",
  "Otros perjuicios económicos",
];

export function IndemnizacionesSection() {
  return (
    <section className="bg-background py-16 lg:py-24" id="indemnizaciones">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Qué indemnización puedes reclamar por un accidente de tráfico?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            La indemnización no se limita necesariamente a los días de recuperación. Dependiendo de las circunstancias del accidente pueden existir diferentes conceptos indemnizables.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/30 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-foreground">{item}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="#calculadora" className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            CALCULAR MI INDEMNIZACIÓN
          </Link>
        </div>
      </div>
    </section>
  );
}
