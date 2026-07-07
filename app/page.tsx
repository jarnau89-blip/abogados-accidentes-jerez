export default function Home() {
  const services = [
    {
      title: "Lesiones personales",
      text: "Reclamamos la máxima indemnización por lesiones sufridas en accidentes de tráfico.",
    },
    {
      title: "Daños materiales",
      text: "Gestionamos reparación o indemnización por tu vehículo y vehículo de sustitución.",
    },
    {
      title: "Secuelas y rehabilitación",
      text: "Valoramos secuelas y tratamientos necesarios para tu recuperación.",
    },
    {
      title: "Lucro cesante",
      text: "Reclamamos pérdidas económicas por la imposibilidad de trabajar.",
    },
    {
      title: "Gestión de seguros",
      text: "Nos encargamos de la negociación con aseguradoras.",
    },
    {
      title: "Procedimiento judicial",
      text: "Si no hay acuerdo justo, llevamos tu caso a juicio.",
    },
  ]

  const stats = [
    { value: "+500", label: "Casos resueltos" },
    { value: "98%", label: "Casos ganados" },
    { value: "0€", label: "Coste inicial" },
  ]

  const baremos = [
    { value: "~39€/día", label: "Días de baja (perjuicio básico)" },
    { value: "~68€/día", label: "Días de baja (moderado)" },
    { value: "~98€/día", label: "Días de baja (grave)" },
    { value: "779-1.176€/pto", label: "Puntos por secuelas" },
  ]

  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_45%)]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 w-fit">
            Primera consulta 100% gratuita
          </div>

          <div className="grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
                Accidente Legal Abogados
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                Máxima indemnización sin adelantos ni riesgos.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Sólo cobramos si tú cobras. Sin coste inicial y con atención en horario laboral.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950" href="#contacto">
                  Llamar ahora gratis
                </a>
                <a className="rounded-xl border border-white/15 px-6 py-3 font-semibold" href="#servicios">
                  Ver servicios
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-cyan-300">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10">
              <h2 className="text-2xl font-bold">Calculadora de indemnización</h2>
              <p className="mt-2 text-slate-300">
                Estimación orientativa basada en el baremo 2026.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Casos resueltos", "+500"],
                  ["Casos ganados", "98%"],
                  ["Coste inicial", "0€"],
                  ["Atención", "L-V 8:00 - 15:00"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-950/60 p-5">
                    <div className="text-sm text-slate-400">{label}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-100">
                Tienes un plazo de 1 año desde el accidente para reclamar.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Especialistas en accidentes de tráfico</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Cubrimos todos los aspectos legales de tu accidente para que te centres en tu recuperación.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-cyan-300">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Cómo se calcula tu indemnización</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            El baremo de tráfico establece una valoración de daños, secuelas y perjuicios económicos.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {baremos.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl font-bold text-cyan-300">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">Lo que dicen nuestros clientes</h2>
            <blockquote className="mt-6 text-lg text-slate-200">
              “Después de mi accidente no sabía qué hacer. Me atendieron desde el primer momento y consiguieron una indemnización mucho mayor de lo esperado.”
            </blockquote>
            <p className="mt-4 text-slate-400">María García · Jerez de la Frontera</p>
          </div>

          <div id="contacto" className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <h2 className="text-3xl font-bold">Consulta gratuita</h2>
            <p className="mt-3 text-cyan-100/90">
              Cuéntanos tu caso y un abogado especialista se pondrá en contacto contigo.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div><span className="text-cyan-200">Teléfono:</span> 722 160 466</div>
              <div><span className="text-cyan-200">Email:</span> info.accidentes@accidentelegalabogados.com</div>
              <div><span className="text-cyan-200">Oficina:</span> Avenida Prado de la feria nº10, Medina Sidonia</div>
              <div><span className="text-cyan-200">Horario:</span> Lunes a Viernes 8:00 - 15:00</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}