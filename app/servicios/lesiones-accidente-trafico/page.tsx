import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesiones por accidente de tráfico | Accidente Legal Abogados",
  description:
    "Reclamamos indemnizaciones por lesiones tras accidentes de tráfico: latigazo cervical, fracturas, traumatismos y atención médica.",
};

export default function LesionesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Lesiones en accidentes de tráfico
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Lesiones personales tras un accidente de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Evaluamos tu situación médica y reclamamos la indemnización por las lesiones sufridas, incluidos daños temporales, secuelas y tratamientos de rehabilitación.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Lesiones más habituales que reclamamos
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Latigazo cervical</p>
                </li>
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Fracturas</p>
                </li>
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Traumatismos</p>
                </li>
                <li className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-semibold text-foreground">Lesiones de hombro y rodilla</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Cómo trabajamos en casos de lesiones
              </h2>
              <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  Revisamos informes médicos, pruebas diagnósticas y el registro de atención sanitaria para identificar los conceptos indemnizables.
                </p>
                <p>
                  Incluimos el coste de rehabilitación, sesiones de fisioterapia, tratamientos y el perjuicio por la interrupción de la vida habitual.
                </p>
                <p>
                  Nuestro objetivo es que la indemnización cubra tanto los daños personales como las consecuencias a medio plazo de tu lesión.
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
