export default function Home() {
  const servicios = [
    {
      title: "Reclamación de indemnización",
      text: "Te ayudamos a reclamar la máxima indemnización posible por tu accidente.",
    },
    {
      title: "Lesiones y secuelas",
      text: "Valoramos lesiones, tratamientos, rehabilitación y secuelas permanentes.",
    },
    {
      title: "Daños materiales",
      text: "Gestionamos daños del vehículo, reparación y vehículo de sustitución.",
    },
    {
      title: "Negociación con aseguradoras",
      text: "Nos encargamos de hablar con la compañía para defender tus intereses.",
    },
    {
      title: "Asistencia legal completa",
      text: "Te acompañamos durante todo el proceso legal, de principio a fin.",
    },
    {
      title: "Sin adelantar dinero",
      text: "Trabajamos sin costes iniciales: solo cobramos si tú cobras.",
    },
  ]

  const stats = [
    { value: "0€", label: "Coste inicial" },
    { value: "24/7", label: "Disponibilidad" },
    { value: "100%", label: "Enfoque en tu caso" },
  ]

  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_42%)]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
            Primera consulta 100% gratuita
          </div>

          <div className="grid gap-12 pb-16 pt-6 lg:grid-cols-2 lg:items-center lg:py-14">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
                Accidente Legal Abogados
              </p>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                Máxima indemnización sin adelantos ni riesgos.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Sólo cobramos si tú cobras. Asesoramiento claro, directo y con atención personalizada.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Llamar ahora gratis
                </a>
                <a
                  href="#servicios"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-cyan-300">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <h2 className="text-2xl font-bold">Información de contacto</h2>
              <p className="mt-2 text-slate-300">
                Horario de atención al público de 8:00 a 15:00, de lunes a viernes.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Teléfono", "722160466"],
                  ["Email", "info.accidentes@accidentelegalabogados.com"],
                  ["Oficina", "Avenida Prado de la feria nº10"],
                  ["Horario", "L-V 8:00 - 15:00"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-950/60 p-5">
                    <div className="text-sm text-slate-400">{label}</div>
                    <div className="mt-2 text-base font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-100">
                Urgencias: contactar por correo.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Especialistas en accidentes de tráfico</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Cubrimos todos los aspectos legales de tu accidente para que tú te centres en recuperarte.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicios.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/7"
            >
              <h3 className="text-xl font-semibold text-cyan-300">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Cómo trabajamos</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Te guiamos desde la primera consulta hasta la resolución del caso, con un trato cercano y directo.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["1. Estudio del caso", "Analizamos tu accidente y la documentación disponible."],
              ["2. Reclamación", "Negociamos con la aseguradora para conseguir la mejor compensación."],
              ["3. Cierre", "Si hace falta, llevamos el caso por la vía judicial."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-xl font-semibold text-cyan-300">{title}</div>
                <div className="mt-3 text-slate-300">{text}</div>
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
              “Me atendieron rápido, me explicaron todo con claridad y conseguí una indemnización justa.”
            </blockquote>
            <p className="mt-4 text-slate-400">María García · Jerez de la Frontera</p>
          </div>

          <div
            id="contacto"
            className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8"
          >
            <h2 className="text-3xl font-bold">Consulta gratuita</h2>
            <p className="mt-3 text-cyan-100/90">
              Cuéntanos tu caso y un abogado especialista se pondrá en contacto contigo.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <span className="text-cyan-200">Teléfono:</span> 722160466
              </div>
              <div>
                <span className="text-cyan-200">Email:</span> info.accidentes@accidentelegalabogados.com
              </div>
              <div>
                <span className="text-cyan-200">Oficina:</span> Avenida Prado de la feria nº10, 11170 Medina Sidonia, Cádiz
              </div>
              <div>
                <span className="text-cyan-200">Horario:</span> Lunes a Viernes: 8:00 - 15:00
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}