import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucro cesante | Accidente Legal Abogados",
  description:
    "Reclamamos el lucro cesante tras un accidente de tráfico para compensar las pérdidas económicas derivadas de la incapacidad temporal.",
};

export default function LucroCesantePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Lucro cesante
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Reclamación de lucro cesante por accidente de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Ayudamos a reclamar las pérdidas económicas derivadas de la imposibilidad de trabajar durante la recuperación tras un accidente de tráfico.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                ¿Qué es el lucro cesante?
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                El lucro cesante es la pérdida de ingresos que sufre una persona por no poder trabajar mientras dura la recuperación. También puede incluir pérdidas de negocio y reducción de jornada.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Cómo lo reclamamos
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Recopilamos nóminas, informes médicos y pruebas de ingresos para estimar la pérdida económica y negociar una indemnización justa con la aseguradora.
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
