import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reclamación frente a aseguradoras | Accidente Legal Abogados",
  description:
    "Defendemos tus derechos frente a las compañías aseguradoras en accidentes de tráfico y gestionamos todo el proceso de reclamación.",
};

export default function ReclamacionAseguradoraPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Reclamación a aseguradoras
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Reclamación frente a aseguradoras por accidentes de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Nos encargamos de toda la documentación, la gestión de la reclamación y la negociación con la aseguradora para defender tus derechos.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Qué hacemos por ti
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Revisamos cómo se ha tramitado el siniestro, analizamos la oferta de la aseguradora y ponemos en valor todos los conceptos indemnizables.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Ventajas de contar con asesoramiento especializado
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Un equipo jurídico especializado puede mejorar la oferta inicial y evitar que aceptes una indemnización insuficiente.
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
