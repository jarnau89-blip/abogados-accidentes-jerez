import { Header } from "@/components/header";
import { HeroCalculator } from "@/components/hero-calculator";
import { StatsBand } from "@/components/stats-band";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { BaremoSection } from "@/components/baremo-section";
import { CtaBand } from "@/components/cta-band";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroCalculator />
        <StatsBand />
        <Services />
        <Testimonials />
        <BaremoSection />
        <CtaBand />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
