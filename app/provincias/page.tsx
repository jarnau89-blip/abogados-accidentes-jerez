import type { Metadata } from "next";
import Link from "next/link";
import SpainInteractiveMap from "@/components/spain-interactive-map";

export const metadata: Metadata = {
  title: "Abogados de accidentes por provincia | Accidente Legal Abogados",
  description:
    "Consulta nuestras páginas de cobertura por provincia para encontrar información general sobre accidentes de tráfico, reclamaciones e indemnizaciones.",
};

const provincias = [
  { nombre: "Álava", slug: "alava" },
  { nombre: "Albacete", slug: "albacete" },
  { nombre: "Alicante", slug: "alicante" },
  { nombre: "Almería", slug: "almeria" },
  { nombre: "Asturias", slug: "asturias" },
  { nombre: "Ávila", slug: "avila" },
  { nombre: "Badajoz", slug: "badajoz" },
  { nombre: "Barcelona", slug: "barcelona" },
  { nombre: "Burgos", slug: "burgos" },
  { nombre: "Cáceres", slug: "caceres" },
  { nombre: "Cádiz", slug: "cadiz" },
  { nombre: "Cantabria", slug: "cantabria" },
  { nombre: "Castellón", slug: "castellon" },
  { nombre: "Ciudad Real", slug: "ciudad-real" },
  { nombre: "Córdoba", slug: "cordoba" },
  { nombre: "A Coruña", slug: "a-coruna" },
  { nombre: "Cuenca", slug: "cuenca" },
  { nombre: "Girona", slug: "girona" },
  { nombre: "Granada", slug: "granada" },
  { nombre: "Guadalajara", slug: "guadalajara" },
  { nombre: "Guipúzcoa", slug: "guipuzcoa" },
  { nombre: "Huelva", slug: "huelva" },
  { nombre: "Huesca", slug: "huesca" },
  { nombre: "Illes Balears", slug: "illes-balears" },
  { nombre: "Jaén", slug: "jaen" },
  { nombre: "La Rioja", slug: "la-rioja" },
  { nombre: "Las Palmas", slug: "las-palmas" },
  { nombre: "León", slug: "leon" },
  { nombre: "Lleida", slug: "lleida" },
  { nombre: "Lugo", slug: "lugo" },
  { nombre: "Madrid", slug: "madrid" },
  { nombre: "Málaga", slug: "malaga" },
  { nombre: "Murcia", slug: "murcia" },
  { nombre: "Navarra", slug: "navarra" },
  { nombre: "Ourense", slug: "ourense" },
  { nombre: "Palencia", slug: "palencia" },
  { nombre: "Pontevedra", slug: "pontevedra" },
  { nombre: "Salamanca", slug: "salamanca" },
  { nombre: "Santa Cruz de Tenerife", slug: "santa-cruz-de-tenerife" },
  { nombre: "Segovia", slug: "segovia" },
  { nombre: "Sevilla", slug: "sevilla" },
  { nombre: "Soria", slug: "soria" },
  { nombre: "Tarragona", slug: "tarragona" },
  { nombre: "Teruel", slug: "teruel" },
  { nombre: "Toledo", slug: "toledo" },
  { nombre: "Valencia", slug: "valencia" },
  { nombre: "Valladolid", slug: "valladolid" },
  { nombre: "Vizcaya", slug: "vizcaya" },
  { nombre: "Zamora", slug: "zamora" },
  { nombre: "Zaragoza", slug: "zaragoza" },
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

        <div className="mt-10">
          <SpainInteractiveMap />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {provincias.map((provincia) => (
            <Link
              key={provincia.slug}
              href={`/provincias/${provincia.slug}`}
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-card-foreground shadow-sm transition hover:bg-muted"
            >
              {provincia.nombre}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}