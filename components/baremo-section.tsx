import { BookOpen, ArrowRight } from "lucide-react";

const baremoItems = [
  {
    label: "Días de baja (perjuicio basico)",
    value: "~39\u20AC/día",
    description: "Por cada día de hospitalización o incapacidad temporal.",
  },
  {
    label: "Días de baja (moderado)",
    value: "~68\u20AC/día",
    description: "Cuando impide la ocupación habitual de la victima.",
  },
  {
    label: "Días de baja (grave)",
    value: "~98\u20AC/día",
    description: "Lesiones que requieren hospitalización o intervención.",
  },
  {
    label: "Puntos por secuelas",
    value: "779-1.176\u20AC/pto",
    description: "Según gravedad, edad y estado anterior del lesionado.",
  },
];

export function BaremoSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" />
              Baremo de accidentes
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"Como se calcula tu indemnización"}
            </h2>
            <p className="mb-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              El baremo de tráfico (Ley 35/2015) establece un sistema de
              valoración de daños y perjuicios para las victimas de accidentes
              de tráfico. Se actualiza anualmente y tiene en cuenta:
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {[
                "Días de baja e incapacidad temporal",
                "Secuelas permanentes (puntos)",
                "Perjuicio estético",
                "Lucro cesante y daño moral",
                "Gastos médicos y de rehabilitación",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                >
                  <ArrowRight className="h-4 w-4 shrink-0 text-destructive" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nuestros abogados aplican el baremo vigente para conseguir la
              maxima indemnizacion posible en cada caso particular.
            </p>
          </div>

          {/* Right table */}
          <div className="flex flex-col gap-4">
            {baremoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="shrink-0 rounded-lg bg-primary px-3 py-2 text-center">
                  <p className="text-sm font-bold text-primary-foreground">
                    {item.value}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <p className="mt-2 text-xs text-muted-foreground">
              *Valores orientativos del baremo 2024. Cantidades actualizadas
              anualmente por resolucion de la DGS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
