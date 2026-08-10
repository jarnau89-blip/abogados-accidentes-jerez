import { Header } from "@/components/header";
import { HeroCalculator } from "@/components/hero-calculator";
import { StatsBand } from "@/components/stats-band";
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