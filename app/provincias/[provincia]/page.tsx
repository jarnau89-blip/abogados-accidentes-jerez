import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProvinciaData = {
  nombre: string;
  slug: string;
  comunidad: string;
};

const provincias: ProvinciaData[] = [
  { nombre: "Álava", slug: "alava", comunidad: "País Vasco" },
  { nombre: "Albacete", slug: "albacete", comunidad: "Castilla-La Mancha" },
  { nombre: "Alicante", slug: "alicante", comunidad: "Comunitat Valenciana" },
  { nombre: "Almería", slug: "almeria", comunidad: "Andalucía" },
  { nombre: "Asturias", slug: "asturias", comunidad: "Principado de Asturias" },
  { nombre: "Ávila", slug: "avila", comunidad: "Castilla y León" },
  { nombre: "Badajoz", slug: "badajoz", comunidad: "Extremadura" },
  { nombre: "Barcelona", slug: "barcelona", comunidad: "Cataluña" },
  { nombre: "Burgos", slug: "burgos", comunidad: "Castilla y León" },
  { nombre: "Cáceres", slug: "caceres", comunidad: "Extremadura" },
  { nombre: "Cádiz", slug: "cadiz", comunidad: "Andalucía" },
  { nombre: "Cantabria", slug: "cantabria", comunidad: "Cantabria" },
  { nombre: "Castellón", slug: "castellon", comunidad: "Comunitat Valenciana" },
  { nombre: "Ciudad Real", slug: "ciudad-real", comunidad: "Castilla-La Mancha" },
  { nombre: "Córdoba", slug: "cordoba", comunidad: "Andalucía" },
  { nombre: "A Coruña", slug: "a-coruna", comunidad: "Galicia" },
  { nombre: "Cuenca", slug: "cuenca", comunidad: "Castilla-La Mancha" },
  { nombre: "Girona", slug: "girona", comunidad: "Cataluña" },
  { nombre: "Granada", slug: "granada", comunidad: "Andalucía" },
  { nombre: "Guadalajara", slug: "guadalajara", comunidad: "Castilla-La Mancha" },
  { nombre: "Guipúzcoa", slug: "guipuzcoa", comunidad: "País Vasco" },
  { nombre: "Huelva", slug: "huelva", comunidad: "Andalucía" },
  { nombre: "Huesca", slug: "huesca", comunidad: "Aragón" },
  { nombre: "Illes Balears", slug: "illes-balears", comunidad: "Illes Balears" },
  { nombre: "Jaén", slug: "jaen", comunidad: "Andalucía" },
  { nombre: "La Rioja", slug: "la-rioja", comunidad: "La Rioja" },
  { nombre: "Las Palmas", slug: "las-palmas", comunidad: "Canarias" },
  { nombre: "León", slug: "leon", comunidad: "Castilla y León" },
  { nombre: "Lleida", slug: "lleida", comunidad: "Cataluña" },
  { nombre: "Lugo", slug: "lugo", comunidad: "Galicia" },
  { nombre: "Madrid", slug: "madrid", comunidad: "Comunidad de Madrid" },
  { nombre: "Málaga", slug: "malaga", comunidad: "Andalucía" },
  { nombre: "Murcia", slug: "murcia", comunidad: "Región de Murcia" },
  { nombre: "Navarra", slug: "navarra", comunidad: "Comunidad Foral de Navarra" },
  { nombre: "Ourense", slug: "ourense", comunidad: "Galicia" },
  { nombre: "Palencia", slug: "palencia", comunidad: "Castilla y León" },
  { nombre: "Pontevedra", slug: "pontevedra", comunidad: "Galicia" },
  { nombre: "Salamanca", slug: "salamanca", comunidad: "Castilla y León" },
  { nombre: "Santa Cruz de Tenerife", slug: "santa-cruz-de-tenerife", comunidad: "Canarias" },
  { nombre: "Segovia", slug: "segovia", comunidad: "Castilla y León" },
  { nombre: "Sevilla", slug: "sevilla", comunidad: "Andalucía" },
  { nombre: "Soria", slug: "soria", comunidad: "Castilla y León" },
  { nombre: "Tarragona", slug: "tarragona", comunidad: "Cataluña" },
  { nombre: "Teruel", slug: "teruel", comunidad: "Aragón" },
  { nombre: "Toledo", slug: "toledo", comunidad: "Castilla-La Mancha" },
  { nombre: "Valencia", slug: "valencia", comunidad: "Comunitat Valenciana" },
  { nombre: "Valladolid", slug: "valladolid", comunidad: "Castilla y León" },
  { nombre: "Vizcaya", slug: "vizcaya", comunidad: "País Vasco" },
  { nombre: "Zamora", slug: "zamora", comunidad: "Castilla y León" },
  { nombre: "Zaragoza", slug: "zaragoza", comunidad: "Aragón" },
];

function getProvincia(slug: string) {
  return provincias.find((provincia) => provincia.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provincia: string }>;
}): Promise<Metadata> {
  const { provincia } = await params;
  const data = getProvincia(provincia);

  if (!data) {
    return {
      title: "Provincia no encontrada | Accidente Legal Abogados",
      description: "La provincia solicitada no existe.",
    };
  }

  return {
    title: `Abogados de accidentes en ${data.nombre} | Accidente Legal Abogados`,
    description: `Información sobre reclamaciones e indemnizaciones por accidentes de tráfico en ${data.nombre}, ${data.comunidad}.`,
  };
}

export default async function ProvinciaPage({
  params,
}: {
  params: Promise<{ provincia: string }>;
}) {
  const { provincia } = await params;
  const data = getProvincia(provincia);

  if (!data) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Accidente Legal Abogados",
    url: `https://abogados-accidentes-jerez.vercel.app/provincias/${data.slug}`,
    areaServed: data.nombre,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jerez de la Frontera",
      addressRegion: "Cádiz",
      addressCountry: "ES",
    },
    telephone: "+34 722160466",
  };

  return (
    <main className="min-h-screen bg-background px-4 pt-32 pb-20">
      <section className="mx-auto max-w-5xl">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Cobertura en {data.nombre}
        </span>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          Abogados de accidentes en {data.nombre}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Atendemos consultas relacionadas con accidentes de tráfico en {data.nombre}, dentro de la{" "}
          {data.comunidad}. Estudiamos cada caso para valorar lesiones, secuelas, documentación
          médica y posibles reclamaciones frente a la aseguradora.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-card-foreground">
              Cómo podemos ayudarte en {data.nombre}
            </h2>

            <p className="mt-4 text-muted-foreground">
              Analizamos casos de accidentes de coche, moto, bicicleta, atropellos y otros
              supuestos de responsabilidad en la circulación para orientar la reclamación de la
              indemnización que corresponda.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>Revisión inicial del accidente y de la documentación disponible.</li>
              <li>Valoración orientativa de lesiones, secuelas y perjuicios.</li>
              <li>Negociación con aseguradoras y estudio de ofertas indemnizatorias.</li>
              <li>Atención personalizada durante la tramitación del caso.</li>
            </ul>
          </section>

          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-card-foreground">Contacto rápido</h2>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+34722160466"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Llamar ahora
              </a>

              <a
                href={`https://wa.me/34722160466?text=Hola%2C%20quiero%20consultar%20un%20accidente%20de%20tr%C3%A1fico%20en%20${encodeURIComponent(
                  data.nombre
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              También puedes consultar otras provincias desde la página general de cobertura.
            </p>

            <div className="mt-4">
              <Link
                href="/provincias"
                className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Ver todas las provincias
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}