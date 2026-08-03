import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaBand } from "@/components/cta-band";
import { ContactForm } from "@/components/contact-form";
import { Briefcase, Award, Users, Target } from "lucide-react";

export default function NuestraFirmaPage() {
  const valores = [
    {
      icon: Briefcase,
      title: "Especialización",
      description:
        "Expertos exclusivamente en accidentes de tráfico con profundo conocimiento de normativa y sistemas de valoración.",
    },
    {
      icon: Award,
      title: "Transparencia",
      description:
        "Explicamos cada paso con lenguaje sencillo y ofrecemos valoraciones realistas desde el inicio.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description:
        "Cada caso es único. Analizamos individuadamente y buscamos la mejor solución para cada cliente.",
    },
    {
      icon: Target,
      title: "Resultados",
      description:
        "Modelo basado en confianza: primera consulta gratuita y honorarios solo si ganamos la indemnización.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
                Nuestra Firma
              </h1>
              <p className="text-xl text-muted-foreground">
                Compromiso, experiencia y confianza en cada reclamación
              </p>
            </div>
          </div>
        </section>

        {/* Misión Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Quiénes Somos</h2>
                <p className="text-base leading-8 text-muted-foreground">
                  En nuestro despacho entendemos que un accidente de tráfico no solo supone un
                  problema legal. Supone incertidumbre, preocupación y, en muchas ocasiones, un
                  momento difícil tanto para la persona afectada como para su familia. Por ello,
                  nuestro compromiso va mucho más allá de la defensa jurídica: trabajamos para
                  que nuestros clientes recuperen la tranquilidad mientras nosotros nos ocupamos
                  de proteger sus derechos.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Nuestra Especialización</h2>
                <p className="text-base leading-8 text-muted-foreground">
                  Somos un equipo formado por abogados y tramitadores especializados exclusivamente
                  en accidentes de tráfico y reclamaciones de indemnizaciones. Esta especialización
                  nos permite conocer en profundidad la normativa aplicable, el sistema de valoración
                  de daños y la forma de actuar de las compañías aseguradoras, ofreciendo una defensa
                  sólida y una estrategia adaptada a cada caso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="border-y border-border bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Nuestros Valores</h2>
              <p className="text-lg text-muted-foreground">
                Principios que guían cada acción en nuestro despacho
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-background p-6 transition-all hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{valor.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {valor.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proceso Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Cómo Trabajamos</h2>
                <p className="text-base leading-8 text-muted-foreground">
                  Nuestro trabajo comienza desde el primer contacto. Nos encargamos de analizar la
                  viabilidad de la reclamación, recopilar la documentación necesaria, coordinar las
                  pruebas médicas cuando son precisas, negociar con la compañía aseguradora y, si
                  resulta necesario, defender los intereses de nuestros clientes ante los tribunales.
                  Todo ello con una comunicación clara y constante para que conozcan en cada momento
                  la evolución de su expediente.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Nuestro Compromiso</h2>
                <p className="text-base leading-8 text-muted-foreground">
                  La transparencia forma parte de nuestra manera de entender la abogacía. Explicamos
                  cada paso del procedimiento con un lenguaje sencillo, resolvemos todas las dudas y
                  ofrecemos una valoración realista de las posibilidades de éxito desde el inicio.
                  Creemos que cada cliente merece una atención cercana, honesta y personalizada.
                  Trabajamos con un modelo basado en la confianza y en los resultados: la primera
                  consulta es gratuita y nuestros honorarios solo se devengan cuando conseguimos una
                  indemnización para el cliente.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Cobertura Nacional</h2>
                <p className="text-base leading-8 text-muted-foreground">
                  Prestamos nuestros servicios en todo el territorio nacional mediante un sistema de
                  atención presencial y online que nos permite acompañar a nuestros clientes con la
                  misma cercanía, independientemente del lugar donde se haya producido el accidente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaBand />

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}