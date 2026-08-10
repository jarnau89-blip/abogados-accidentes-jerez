import Link from "next/link";
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
    href: "/servicios/lesiones-accidente-trafico",
    description:
      "Reclamamos la máxima indemnización por lesiones sufridas en accidentes de tráfico propias y a terceros, incluyendo latigazo cervical, fracturas y traumatismos.",
  },
  {
    icon: Car,
    title: "Daños materiales",
    href: "/servicios/danos-materiales",
    description:
      "Gestionamos la reparación o indemnización por valor venal de tu vehículo, incluyendo vehículo de sustitución y pérdida de valor.",
  },
  {
    icon: HeartPulse,
    title: "Secuelas y rehabilitación",
    href: "/servicios/secuelas-accidente-trafico",
    description:
      "Valoramos todas las secuelas derivadas del accidente y gestionamos los tratamientos de rehabilitación necesarios.",
  },
  {
    icon: Banknote,
    title: "Lucro cesante",
    href: "/servicios/lucro-cesante",
    description:
      "Reclamamos las pérdidas económicas derivadas de la imposibilidad de trabajar durante el período de recuperación.",
  },
  {
    icon: FileText,
    title: "Gestión de seguros",
    href: "/servicios/reclamacion-aseguradora",
    description:
      "Nos encargamos de toda la documentación y negociación con las compañías de seguros para que no tengas que preocuparte.",
  },
  {
    icon: Gavel,
    title: "Procedimiento judicial",
    href: "/servicios/procedimiento-judicial",
    description:
      "Si la aseguradora no ofrece una indemnización justa, valoramos las acciones judiciales que correspondan y defendemos los intereses del cliente ante los tribunales.",
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
            Especialistas en accidentes de tráfico
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Cubrimos todos los aspectos legales de tu accidente para que te
            centres en tu recuperación.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
