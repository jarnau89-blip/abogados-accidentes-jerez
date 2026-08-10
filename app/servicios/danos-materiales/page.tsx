import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daños materiales | Accidente Legal Abogados",
  description:
    "Gestionamos reclamaciones por daños materiales en accidentes de tráfico: vehículo, pérdida de valor y transporte alternativo.",
};

export default function DanosMaterialesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Daños materiales
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Reclamación por daños materiales en accidente de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Te ayudamos a reclamar la reparación, sustitución o indemnización del vehículo, así como la pérdida de valor y los gastos de transporte alternativo.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Qué reclamamos en daños materiales
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Reparación del vehículo</p>
                </li>
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Indemnización por valor venal</p>
                </li>
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Vehículo de sustitución</p>
                </li>
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Perjuicio por pérdida de uso</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Nuestro proceso
              </h2>
              <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  Comprobamos las condiciones de la póliza y recopilamos el informe pericial necesario para defender el valor real de los daños.
                </p>
                <p>
                  Negociamos con la aseguradora para que la compensación cubra los costes reales de reparación y el daño patrimonial asociado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
