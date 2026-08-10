import { ShieldCheck, Users, Globe2, HeartPulse, MessageSquare } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Especialistas en accidentes de tráfico",
    description:
      "Nos dedicamos a la reclamación de indemnizaciones derivadas de accidentes de tráfico y conocemos las particularidades de este tipo de procedimientos.",
  },
  {
    icon: Users,
    title: "Equipo jurídico y de tramitación",
    description:
      "Abogados y tramitadores trabajan conjuntamente para gestionar cada expediente desde el primer contacto hasta su resolución.",
  },
  {
    icon: Globe2,
    title: "Atención en toda España",
    description:
      "Prestamos servicio a clientes de cualquier punto de España mediante atención presencial y online.",
  },
  {
    icon: HeartPulse,
    title: "Consulta inicial gratuita",
    description:
      "Estudiamos inicialmente tu situación para orientarte sobre las posibilidades de reclamación, sin compromiso.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación constante",
    description:
      "Te mantenemos informado sobre la evolución de tu expediente y resolvemos tus dudas durante todo el procedimiento.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-background py-16 lg:py-24" id="por-que-confiar">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Por qué confiar en nuestro equipo?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Elige un despacho especializado en accidentes de tráfico que te acompaña desde el primer momento y defiende tus intereses frente a las aseguradoras.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/30 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
