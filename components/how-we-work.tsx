const steps = [
  {
    title: "Analizamos tu caso",
    description:
      "Nos cuentas qué ha ocurrido y realizamos una primera valoración de la situación.",
  },
  {
    title: "Estudiamos la documentación",
    description:
      "Revisamos informes médicos, documentación del accidente y comunicaciones con la aseguradora.",
  },
  {
    title: "Preparamos la reclamación",
    description:
      "Determinamos los conceptos que pueden reclamarse y diseñamos la estrategia más adecuada.",
  },
  {
    title: "Negociamos con la aseguradora",
    description:
      "Defendemos tus intereses para conseguir una compensación adecuada.",
  },
  {
    title: "Defendemos tus derechos",
    description:
      "Cuando no existe un acuerdo satisfactorio, valoramos y ejercitamos las acciones judiciales correspondientes.",
  },
  {
    title: "Te acompañamos hasta el final",
    description:
      "Te informamos de la evolución de tu expediente hasta su resolución.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-background py-16 lg:py-24" id="como-trabajamos">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Cómo trabajamos?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/30 hover:shadow-lg">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-lg font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
