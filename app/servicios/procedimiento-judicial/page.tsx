import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Procedimiento judicial | Accidente Legal Abogados",
  description:
    "Asesoramos sobre las acciones judiciales en accidentes de tráfico cuando no es posible alcanzar un acuerdo satisfactorio con la aseguradora.",
};

export default function ProcedimientoJudicialPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Procedimiento judicial
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Reclamaciones judiciales por accidentes de tráfico
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              Si no es posible alcanzar un acuerdo satisfactorio con la aseguradora, valoramos las acciones judiciales que correspondan y defendemos tus intereses ante los tribunales.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-8">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                Qué hacemos en el proceso judicial
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Estudiamos la viabilidad de la reclamación, preparamos la documentación necesaria y presentamos la demanda si es la opción más adecuada para defender tus derechos.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">
                En qué situación se aplica
              </h2>
              <p className="text-sm leading-7 text-muted-foreground">
                El procedimiento judicial se valora cuando la aseguradora no ofrece una indemnización adecuada y no se puede resolver la reclamación de forma extrajudicial.
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
