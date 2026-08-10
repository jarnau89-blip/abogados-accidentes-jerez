import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secuelas y rehabilitación | Accidente Legal Abogados",
  description:
    "Valoramos las secuelas tras un accidente de tráfico y reclamamos la compensación por rehabilitación y daños permanentes.",
};

export default function SecuelasPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Secuelas y rehabilitación
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Indemnización por secuelas tras un accidente de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Estudiamos las secuelas permanentes y reclamamos la compensación por tratamientos de rehabilitación, pérdida de calidad de vida y limitaciones futuras.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                ¿Qué entendemos por secuelas?
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Las secuelas son lesiones permanentes que permanecen tras la curación del accidente, como limitaciones funcionales, dolores crónicos o pérdida de movilidad.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Nuestro enfoque
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Analizamos informes médicos y periciales para acreditar la existencia y gravedad de las secuelas. Defendemos la compensación adecuada según la legislación del baremo vigente.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
