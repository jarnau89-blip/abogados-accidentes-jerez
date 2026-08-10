import Link from "next/link";

const injuries = [
  "Latigazo cervical",
  "Fracturas",
  "Lesiones de hombro",
  "Lesiones de rodilla",
  "Lesiones medulares",
  "Traumatismos",
  "Secuelas",
  "Perjuicio estético",
  "Daño psicológico",
];

export function InjuriesSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24" id="lesiones">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Lesiones y secuelas tras un accidente de tráfico
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Las consecuencias de un accidente no siempre terminan cuando desaparece el dolor inicial. Algunas lesiones pueden requerir rehabilitación y otras pueden dejar secuelas permanentes.
            Analizamos la documentación médica y las circunstancias de cada caso para determinar qué perjuicios pueden ser objeto de indemnización.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {injuries.map((item) => (
            <Link
              key={item}
              href="#contacto"
              className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground">{item}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
