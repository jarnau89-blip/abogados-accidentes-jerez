import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-destructive py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="mb-3 text-balance text-2xl font-bold text-destructive-foreground md:text-3xl">
          {"No pierdas tu derecho a reclamar"}
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-pretty text-destructive-foreground/80">
          Tienes un plazo de 1 ano desde el accidente para reclamar tu
          indemnizacion. Actua ahora y no dejes pasar el tiempo.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90"
          >
            <a href="tel:+34900000000">
              <Phone className="mr-2 h-4 w-4" />
              Llamar ahora gratis
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-destructive-foreground/30 bg-transparent text-destructive-foreground hover:bg-destructive-foreground/10 hover:text-destructive-foreground"
          >
            <a href="#contacto">Enviar consulta</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
