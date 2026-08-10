import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ACCIDENTE_PAGES, type AccidenteSlug } from "@/lib/accidentes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: AccidenteSlug;
  };
}

export function generateStaticParams() {
  return Object.keys(ACCIDENTE_PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const accidente = ACCIDENTE_PAGES[params.slug];

  if (!accidente) {
    return {
      title: "Accidente no encontrado | Accidente Legal Abogados",
    };
  }

  return {
    title: `${accidente.nombre} | Accidente Legal Abogados`,
    description: accidente.descripcion,
  };
}

export default function AccidentePage({ params }: PageProps) {
  const accidente = ACCIDENTE_PAGES[params.slug];

  if (!accidente) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="border-b border-border bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              {accidente.nombre}
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              {accidente.nombre}
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              {accidente.descripcion}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 space-y-8">
            {accidente.parrafos.map((paragraph, index) => (
              <p key={index} className="text-sm leading-7 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
