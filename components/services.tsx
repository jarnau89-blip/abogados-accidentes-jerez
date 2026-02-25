import {
  Car,
  UserRound,
  FileText,
  Gavel,
  HeartPulse,
  Banknote,
} from "lucide-react";

const services = [
  {
    icon: UserRound,
    title: "Lesiones personales",
    description:
      "Reclamamos la maxima indemnizacion por lesiones sufridas en accidentes de trafico, incluyendo latigazo cervical, fracturas y traumatismos.",
  },
  {
    icon: Car,
    title: "Danos materiales",
    description:
      "Gestionamos la reparación o indemnización por valor venal de tu vehiculo, incluyendo vehiculo de sustitución y perdida de valor.",
  },
  {
    icon: HeartPulse,
    title: "Secuelas y rehabilitación",
    description:
      "Valoramos todas las secuelas derivadas del accidente y gestionamos los tratamientos de rehabilitación necesarios.",
  },
  {
    icon: Banknote,
    title: "Lucro cesante",
    description:
      "Reclamamos las perdidas economicas derivadas de la imposibilidad de trabajar durante el periodo de recuperacion.",
  },
  {
    icon: FileText,
    title: "Gestión de seguros",
    description:
      "Nos encargamos de toda la documentación y negociación con las compañías de seguros para que no tengas que preocuparte.",
  },
  {
    icon: Gavel,
    title: "Procedimiento judicial",
    description:
      "Si la aseguradora no ofrece una indemnización justa, llevamos tu caso a juicio con la maxima garantía de exito.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-destructive">
            Nuestros servicios
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Especialistas en accidentes de trafico
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Cubrimos todos los aspectos legales de tu accidente para que te
            centres en tu recuperación.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
