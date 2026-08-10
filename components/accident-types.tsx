import Link from "next/link";
import { Bike, Bus, Car, Footprints, ShieldAlert, Truck, Users } from "lucide-react";

const accidents = [
  { icon: Car, title: "Accidente de coche", href: "/accidentes/accidente-coche" },
  { icon: Bike, title: "Accidente de moto", href: "/accidentes/accidente-moto" },
  { icon: Footprints, title: "Atropello", href: "/accidentes/atropello" },
  { icon: Bike, title: "Accidente de bicicleta", href: "/accidentes/accidente-bicicleta" },
  { icon: Bus, title: "Accidente con patinete", href: "/accidentes/accidente-patinete" },
  { icon: Users, title: "Accidente como pasajero", href: "/accidentes/accidente-pasajero" },
  { icon: ShieldAlert, title: "Vehículo sin seguro", href: "/accidentes/vehiculo-sin-seguro" },
  { icon: Truck, title: "Accidente laboral o in itinere", href: "/accidentes/accidente-in-itinere" },
];

export function AccidentTypes() {
  return (
    <section className="bg-secondary py-16 lg:py-24" id="accidentes">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Qué tipo de accidentes gestionamos?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Atendemos siniestros de tráfico de vehículos, motocicletas, peatones y otros supuestos con especialización en reclamaciones de indemnización.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accidents.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-3xl border border-border bg-card p-6 text-left transition hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
