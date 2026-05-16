import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accidente Legal Abogados",
  description:
    "Despacho especializado en accidentes de tráfico, reclamaciones e indemnizaciones. Primera consulta 100% gratuita y sin coste inicial.",
};

const servicios = [
  {
    titulo: "Lesiones personales",
    descripcion:
      "Reclamamos la máxima indemnización por lesiones sufridas en accidentes de tráfico propias y a terceros, incluyendo latigazo cervical, fracturas y traumatismos.",
  },
  {
    titulo: "Daños materiales",
    descripcion:
      "Gestionamos la reparación o indemnización por valor venal de tu vehículo, incluyendo vehículo de sustitución y pérdida de valor.",
  },
  {
    titulo: "Secuelas y rehabilitación",
    descripcion:
      "Valoramos todas las secuelas derivadas del accidente y gestionamos los tratamientos de rehabilitación necesarios.",
  },
  {
    titulo: "Lucro cesante",
    descripcion:
      "Reclamamos las pérdidas económicas derivadas de la imposibilidad de trabajar durante el período de recuperación.",
  },
  {
    titulo: "Gestión de seguros",
    descripcion:
      "Nos encargamos de toda la documentación y negociación con las compañías de seguros para que no tengas que preocuparte.",
  },
  {
    titulo: "Procedimiento judicial",
    descripcion:
      "Si la aseguradora no ofrece una indemnización justa, llevamos tu caso a juicio con la máxima garantía de éxito.",
  },
];

const baremo = [
  {
    valor: "~39€/día",
    titulo: "Días de baja (perjuicio básico)",
    descripcion:
      "Por cada día de hospitalización o incapacidad temporal.",
  },
  {
    valor: "~68€/día",
    titulo: "Días de baja (moderado)",
    descripcion:
      "Cuando impide la ocupación habitual de la víctima.",
  },
  {
    valor: "~98€/día",
    titulo: "Días de baja (grave)",
    descripcion:
      "Lesiones que requieren hospitalización o intervención.",
  },
  {
    valor: "779-1.176€/pto",
    titulo: "Puntos por secuelas",
    descripcion:
      "Según gravedad, edad y estado anterior del lesionado.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section id="inicio" className="px-4 pb-16 pt-32 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Primera consulta 100% gratuita
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight lg:text-6xl">
            Accidente Legal Abogados
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Máxima indemnización sin adelantos ni riesgos. Sólo cobramos si tú cobras.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:722160466"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Llamar ahora gratis
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition hover:bg-muted"
            >
              Enviar consulta
            </a>

            <Link
              href="/provincias"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition hover:bg-muted"
            >
              Ver provincias
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-2xl font-black text-card-foreground">Sin coste inicial</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Sólo cobramos si tú cobras.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-2xl font-black text-card-foreground">+500 casos ganados</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Experiencia en reclamaciones e indemnizaciones.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-2xl font-black text-card-foreground">98%</p>
              <p className="mt-2 text-sm text-muted-foreground">Casos ganados.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-2xl font-black text-card-foreground">8:00 - 15:00</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Atención al público de lunes a viernes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculadora" className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Calculadora de indemnización
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight lg:text-4xl">
              Estimación orientativa basada en el baremo 2026
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Utiliza una estimación orientativa para hacerte una idea del alcance económico
              de tu reclamación y valorar tu caso con mayor claridad.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="text-3xl font-black text-foreground">+500</p>
                <p className="mt-2 text-sm text-muted-foreground">Casos resueltos</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="text-3xl font-black text-foreground">98%</p>
                <p className="mt-2 text-sm text-muted-foreground">Casos ganados</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="text-3xl font-black text-foreground">0€</p>
                <p className="mt-2 text-sm text-muted-foreground">Coste inicial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Nuestros servicios
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight lg:text-4xl">
            Especialistas en accidentes de tráfico
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Cubrimos todos los aspectos legales de tu accidente para que te centres en tu recuperación.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicios.map((servicio) => (
              <article
                key={servicio.titulo}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold tracking-tight text-card-foreground">
                  {servicio.titulo}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {servicio.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonios
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight lg:text-4xl">
            Lo que dicen nuestros clientes
          </h2>

          <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <blockquote className="max-w-3xl text-lg leading-8 text-card-foreground">
              “Después de mi accidente de tráfico no sabía qué hacer. Me atendieron desde el
              primer momento y consiguieron una indemnización mucho mayor de lo que esperaba.
              Totalmente recomendables.”
            </blockquote>

            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <p className="font-semibold text-card-foreground">María García</p>
              <p>Jerez de la Frontera</p>
              <p>Indemnización obtenida: 12.500€</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Baremo de accidentes
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight lg:text-4xl">
            Cómo se calcula tu indemnización
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            El baremo de tráfico (Ley 35/2015) establece un sistema de valoración de daños y
            perjuicios para las víctimas de accidentes de tráfico y se actualiza anualmente.
          </p>

          <ul className="mt-6 space-y-2 text-sm leading-7 text-muted-foreground">
            <li>- Días de baja e incapacidad temporal</li>
            <li>- Secuelas permanentes (puntos)</li>
            <li>- Perjuicio estético</li>
            <li>- Lucro cesante y daño moral</li>
            <li>- Gastos médicos y de rehabilitación</li>
          </ul>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {baremo.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-2xl font-black text-card-foreground">{item.valor}</p>
                <h3 className="mt-3 text-lg font-bold tracking-tight text-card-foreground">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.descripcion}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-muted-foreground">
            Valores orientativos del baremo 2024. Cantidades actualizadas anualmente por resolución
            de la DGS.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-border bg-primary p-8 text-primary-foreground shadow-sm">
            <h2 className="text-3xl font-black tracking-tight lg:text-4xl">
              No pierdas tu derecho a reclamar
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-primary-foreground/80">
              Tienes un plazo de 1 año desde el accidente para reclamar tu indemnización. Actúa ahora
              y no dejes pasar el tiempo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:722160466"
                className="inline-flex items-center justify-center rounded-xl bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-90"
              >
                Llamar ahora gratis
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                Enviar consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-20 pt-16 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight lg:text-4xl">
            Consulta gratuita y sin compromiso
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Cuéntanos tu caso y un abogado especialista se pondrá en contacto contigo en menos
            de 24 horas.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-card-foreground">
                Información de contacto
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground">
                <div>
                  <p className="font-semibold text-card-foreground">Teléfono</p>
                  <p>722160466</p>
                  <p>Horario de atención al público de 8:00 a 15:00 de lunes a viernes.</p>
                </div>

                <div>
                  <p className="font-semibold text-card-foreground">Email</p>
                  <p>info.accidentes@accidentelegalabogados.com</p>
                </div>

                <div>
                  <p className="font-semibold text-card-foreground">Oficina</p>
                  <p>Avenida Prado de la feria nº10</p>
                  <p>11170 Medina Sidonia, Cádiz</p>
                </div>

                <div>
                  <p className="font-semibold text-card-foreground">Horario</p>
                  <p>Lunes a Viernes: 8:00 - 15:00</p>
                  <p>Urgencias: contactar por correo</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-card-foreground">
                Accesos rápidos
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="tel:722160466"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Llamar ahora
                </a>

                <a
                  href="mailto:info.accidentes@accidentelegalabogados.com"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  Enviar email
                </a>

                <Link
                  href="/provincias"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  Ver cobertura por provincias
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}