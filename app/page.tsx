import { Header } from "@/components/header";
import { HeroCalculator } from "@/components/hero-calculator";
import { StatsBand } from "@/components/stats-band";
import Link from "next/link";
import { WhyUs } from "@/components/why-us";
import { AccidentTypes } from "@/components/accident-types";
import { Services } from "@/components/services";
import { IndemnizacionesSection } from "@/components/indemnizaciones-section";
import { InjuriesSection } from "@/components/injuries-section";
import { HowWeWork } from "@/components/how-we-work";
import { Testimonials } from "@/components/testimonials";
import { BaremoSection } from "@/components/baremo-section";
import { CtaBand } from "@/components/cta-band";
import { FAQSection } from "@/components/faq-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abogados de Accidentes de Tráfico | Accidente Legal Abogados",
  description:
    "Abogados especialistas en accidentes de tráfico. Reclamamos indemnizaciones por lesiones, secuelas y daños frente a aseguradoras. Consulta gratuita en toda España.",
  openGraph: {
    title: "Abogados de Accidentes de Tráfico | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico. Reclamamos indemnizaciones por lesiones, secuelas y daños frente a aseguradoras. Consulta gratuita en toda España.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados de Accidentes de Tráfico | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico. Reclamamos indemnizaciones por lesiones, secuelas y daños frente a aseguradoras. Consulta gratuita en toda España.",
  },
};

const provinciasDestacadas = [
  { nombre: "Cádiz", slug: "cadiz" },
  { nombre: "Sevilla", slug: "sevilla" },
  { nombre: "Málaga", slug: "malaga" },
  { nombre: "Granada", slug: "granada" },
  { nombre: "Córdoba", slug: "cordoba" },
  { nombre: "Huelva", slug: "huelva" },
  { nombre: "Jaén", slug: "jaen" },
  { nombre: "Almería", slug: "almeria" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroCalculator />
        <StatsBand />
        <WhyUs />
        <AccidentTypes />
        <Services />

        {/* SECCIÓN DE PROVINCIAS */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Abogados de accidentes de tráfico en toda España
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Atendemos reclamaciones por accidentes de tráfico en toda España. Consulta nuestra información específica por provincia y descubre cómo podemos ayudarte.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {provinciasDestacadas.map((provincia) => (
                <Link
                  key={provincia.slug}
                  href={`/provincias/${provincia.slug}`}
                  className="rounded-2xl border border-border bg-card p-4 text-center font-semibold text-foreground shadow-sm transition hover:bg-muted/50 hover:shadow-md"
                >
                  {provincia.nombre}
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/provincias"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Ver todas las provincias
              </Link>
            </div>
          </div>
        </section>

        <IndemnizacionesSection />
        <HowWeWork />
        <InjuriesSection />
        <Testimonials />
        <BaremoSection />
        <FAQSection />
        <CtaBand />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}