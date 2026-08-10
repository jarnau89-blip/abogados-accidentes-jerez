import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Accidente Legal Abogados",
  description:
    "Servicios especializados en accidentes de tráfico: lesiones, daños materiales, secuelas, lucro cesante, gestión de seguros y procedimiento judicial.",
};

const services = [
  {
    title: "Lesiones personales",
    href: "/servicios/lesiones-accidente-trafico",
  },
  {
    title: "Daños materiales",
    href: "/servicios/danos-materiales",
  },
  {
    title: "Secuelas y rehabilitación",
    href: "/servicios/secuelas-accidente-trafico",
  },
  {
    title: "Lucro cesante",
    href: "/servicios/lucro-cesante",
  },
  {
    title: "Gestión de seguros",
    href: "/servicios/reclamacion-aseguradora",
  },
  {
    title: "Procedimiento judicial",
    href: "/servicios/procedimiento-judicial",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Servicios
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Servicios especializados en accidentes de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Reclamamos indemnizaciones por lesiones, secuelas, daños materiales, lucro cesante y reclamaciones frente a aseguradoras en toda España.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-3xl border border-border bg-card p-8 text-center transition hover:border-primary/30 hover:shadow-lg"
                >
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Ver más información y ejemplos de reclamaciones en esta área.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
