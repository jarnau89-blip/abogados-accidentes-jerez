import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abogados de accidentes por provincia | Accidente Legal Abogados",
  description:
    "Consulta nuestras páginas de cobertura por provincia para encontrar información general sobre accidentes de tráfico, reclamaciones e indemnizaciones.",
};

const provincias = [
  { nombre: "Álava", slug: "alava", descripcion: "Información sobre reclamaciones por accidentes de tráfico en Álava, valoración de lesiones y defensa frente a aseguradoras." },
  { nombre: "Albacete", slug: "albacete", descripcion: "Asesoramiento legal para accidentes en Albacete, con orientación sobre indemnizaciones, secuelas y daños materiales." },
  { nombre: "Alicante", slug: "alicante", descripcion: "Revisión de accidentes de tráfico en Alicante para reclamar indemnizaciones por lesiones, baja laboral y perjuicios económicos." },
  { nombre: "Almería", slug: "almeria", descripcion: "Atención legal en Almería para víctimas de accidentes, con estudio del atestado, informes médicos y reclamación al seguro." },
  { nombre: "Asturias", slug: "asturias", descripcion: "Defensa de perjudicados por accidentes en Asturias, incluyendo ocupantes, peatones, ciclistas y motoristas." },
  { nombre: "Ávila", slug: "avila", descripcion: "Servicio de reclamación por accidentes en Ávila, orientado a obtener la máxima indemnización posible." },
  { nombre: "Badajoz", slug: "badajoz", descripcion: "Asistencia jurídica para accidentes de tráfico en Badajoz, con estudio de responsabilidad y daños sufridos." },
  { nombre: "Barcelona", slug: "barcelona", descripcion: "Reclamación de indemnizaciones por accidentes en Barcelona, con análisis de lesiones temporales, secuelas y gastos médicos." },
  { nombre: "Burgos", slug: "burgos", descripcion: "Información legal sobre accidentes en Burgos para ayudar a lesionados a reclamar frente a la aseguradora." },
  { nombre: "Cáceres", slug: "caceres", descripcion: "Orientación en Cáceres para accidentes de circulación, daños personales y compensaciones económicas." },
  { nombre: "Cádiz", slug: "cadiz", descripcion: "Reclamaciones por accidentes en Cádiz, con apoyo legal para lesionados, ocupantes y conductores no responsables." },
  { nombre: "Cantabria", slug: "cantabria", descripcion: "Asesoramiento sobre indemnizaciones por accidentes en Cantabria, incluyendo secuelas y perjuicio personal." },
  { nombre: "Castellón", slug: "castellon", descripcion: "Estudio de accidentes de tráfico en Castellón con reclamación de daños físicos, psicológicos y materiales." },
  { nombre: "Ciudad Real", slug: "ciudad-real", descripcion: "Defensa legal en Ciudad Real para casos de accidentes con lesiones, rehabilitación y pérdida de ingresos." },
  { nombre: "Córdoba", slug: "cordoba", descripcion: "Ayuda jurídica en Córdoba para reclamar indemnizaciones derivadas de accidentes de tráfico." },
  { nombre: "Cuenca", slug: "cuenca", descripcion: "Información sobre accidentes en Cuenca, con revisión de informes y cálculo orientativo de indemnización." },
  { nombre: "Girona", slug: "girona", descripcion: "Asistencia legal en Girona para siniestros de tráfico, valoración del daño corporal y negociación con aseguradoras." },
  { nombre: "Granada", slug: "granada", descripcion: "Reclamación por accidentes en Granada con análisis individual de lesiones, secuelas y daños emergentes." },
  { nombre: "Guadalajara", slug: "guadalajara", descripcion: "Apoyo legal en Guadalajara para accidentes de circulación, responsabilidad civil y compensación por lesiones." },
  { nombre: "Guipúzcoa", slug: "guipuzcoa", descripcion: "Defensa de lesionados por accidentes en Guipúzcoa, con acompañamiento en todo el proceso de reclamación." },
  { nombre: "Huelva", slug: "huelva", descripcion: "Asesoramiento legal en Huelva para accidentes de tráfico y reclamación frente a compañías aseguradoras." },
  { nombre: "Huesca", slug: "huesca", descripcion: "Estudio jurídico de accidentes en Huesca con valoración de daño corporal y perjuicios derivados." },
  { nombre: "Illes Balears", slug: "illes-balears", descripcion: "Atención a perjudicados por accidentes en Illes Balears, con orientación sobre lesiones, secuelas y gastos médicos." },
  { nombre: "Jaén", slug: "jaen", descripcion: "Defensa legal en Jaén para afectados por accidentes, incluyendo ocupantes, motoristas y peatones." },
  { nombre: "La Coruña", slug: "la-coruna", descripcion: "Reclamación de indemnizaciones por accidentes en La Coruña, con revisión completa de la documentación del siniestro." },
  { nombre: "La Rioja", slug: "la-rioja", descripcion: "Información jurídica en La Rioja sobre accidentes de tráfico, responsabilidad y derecho a indemnización." },
  { nombre: "Las Palmas", slug: "las-palmas", descripcion: "Asesoramiento sobre accidentes en Las Palmas con estudio del caso y reclamación de daños personales y materiales." },
  { nombre: "León", slug: "leon", descripcion: "Orientación legal en León para accidentes de circulación y defensa frente a ofertas insuficientes del seguro." },
  { nombre: "Lleida", slug: "lleida", descripcion: "Ayuda jurídica para reclamaciones por accidentes en Lleida, con cálculo de indemnización y secuelas." },
  { nombre: "Lugo", slug: "lugo", descripcion: "Atención legal en Lugo para siniestros de tráfico con lesiones temporales, permanentes y daños complementarios." },
  { nombre: "Madrid", slug: "madrid", descripcion: "Reclamación de indemnizaciones por accidentes en Madrid, con asistencia a conductores, pasajeros y peatones lesionados." },
  { nombre: "Málaga", slug: "malaga", descripcion: "Información sobre accidentes de tráfico en Málaga, con estudio del caso, informes médicos y negociación con la aseguradora." },
  { nombre: "Murcia", slug: "murcia", descripcion: "Asesoramiento en Murcia para accidentes con lesiones, secuelas, rehabilitación y perjuicios económicos." },
  { nombre: "Navarra", slug: "navarra", descripcion: "Defensa jurídica en Navarra para reclamaciones por accidentes y daños derivados de la circulación." },
  { nombre: "Ourense", slug: "ourense", descripcion: "Servicio legal para víctimas de accidentes en Ourense, con análisis del siniestro y opciones de reclamación." },
  { nombre: "Palencia", slug: "palencia", descripcion: "Información sobre indemnizaciones por accidentes en Palencia y valoración orientativa de daños personales." },
  { nombre: "Pontevedra", slug: "pontevedra", descripcion: "Asistencia legal en Pontevedra para accidentes de tráfico, bajas médicas y reclamaciones al seguro." },
  { nombre: "Salamanca", slug: "salamanca", descripcion: "Orientación jurídica en Salamanca para lesionados por accidentes, con defensa de sus derechos indemnizatorios." },
  { nombre: "Santa Cruz de Tenerife", slug: "santa-cruz-de-tenerife", descripcion: "Reclamación por accidentes en Santa Cruz de Tenerife con revisión médica, documental y legal del caso." },
  { nombre: "Segovia", slug: "segovia", descripcion: "Asesoramiento sobre accidentes en Segovia, con ayuda para reclamar secuelas, días impeditivos y daños materiales." },
  { nombre: "Sevilla", slug: "sevilla", descripcion: "Defensa legal en Sevilla para víctimas de accidentes, con estudio del perjuicio personal y patrimonial." },
  { nombre: "Soria", slug: "soria", descripcion: "Información jurídica sobre accidentes en Soria, responsabilidad del siniestro y reclamación de indemnización." },
  { nombre: "Tarragona", slug: "tarragona", descripcion: "Ayuda legal en Tarragona para afectados por accidentes de circulación y ofertas de seguro insuficientes." },
  { nombre: "Teruel", slug: "teruel", descripcion: "Asistencia jurídica en Teruel para accidentes con lesiones, daños al vehículo y perjuicios personales." },
  { nombre: "Toledo", slug: "toledo", descripcion: "Servicio de reclamación por accidentes en Toledo con valoración de daños y estrategia frente a la aseguradora." },
  { nombre: "Valencia", slug: "valencia", descripcion: "Reclamación de indemnizaciones por accidentes en Valencia, con estudio de lesiones, secuelas y gastos futuros." },
  { nombre: "Valladolid", slug: "valladolid", descripcion: "Información legal sobre accidentes en Valladolid, incluyendo cálculo de indemnización y defensa del lesionado." },
  { nombre: "Vizcaya", slug: "vizcaya", descripcion: "Atención jurídica en Vizcaya para accidentes de tráfico y perjuicios personales derivados del siniestro." },
  { nombre: "Zamora", slug: "zamora", descripcion: "Asesoramiento sobre accidentes en Zamora, con revisión del expediente médico y reclamación al seguro." },
  { nombre: "Zaragoza", slug: "zaragoza", descripcion: "Defensa legal en Zaragoza para accidentes de circulación, secuelas, baja laboral y daños materiales." },
];

export default function ProvinciasPage() {
  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          Abogados de accidentes por provincia
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Consulta nuestras páginas de cobertura por provincia para encontrar información general
          sobre accidentes de tráfico, reclamaciones e indemnizaciones.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {provincias.map((provincia) => (
            <Link
              key={provincia.slug}
              href={`/provincias/${provincia.slug}`}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:bg-muted"
            >
              <div className="text-base font-semibold text-card-foreground">
                {provincia.nombre}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {provincia.descripcion}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:p-10">
          <h2 className="text-2xl font-black tracking-tight text-card-foreground lg:text-3xl">
            Cómo podemos ayudarte
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Estudiamos cada accidente de forma individual para valorar lesiones, secuelas,
            perjuicios económicos, daños materiales y la posible responsabilidad del siniestro.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-base font-bold text-foreground">
                Valoración del caso
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Revisamos la documentación del accidente, informes médicos y circunstancias del siniestro.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-base font-bold text-foreground">
                Reclamación de indemnización
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Defendemos tu derecho a reclamar por lesiones, secuelas, baja laboral y otros perjuicios.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-base font-bold text-foreground">
                Negociación con aseguradoras
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Estudiamos ofertas del seguro y evitamos acuerdos insuficientes o indemnizaciones a la baja.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <h3 className="text-base font-bold text-foreground">
                Acompañamiento legal
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Te orientamos durante todo el proceso para que entiendas cada paso de la reclamación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl">
        <div className="rounded-3xl bg-foreground px-8 py-10 text-background lg:px-10">
          <h2 className="text-2xl font-black tracking-tight lg:text-3xl">
            Contacto rápido
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/80">
            Si has sufrido un accidente de tráfico y quieres orientación sobre tu caso,
            puedes ponerte en contacto con nosotros para estudiar tu situación.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
            >
              Ir al formulario de contacto
            </Link>

            <Link
              href="tel:+34600000000"
              className="inline-flex items-center justify-center rounded-xl border border-background/20 px-5 py-3 text-sm font-semibold text-background transition hover:bg-background/10"
            >
              Llamar ahora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}