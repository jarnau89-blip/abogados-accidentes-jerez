import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpainMap } from "@/components/spain-map";

const provinciasData = {
  alava: {
    nombre: "Álava",
    comunidad: "País Vasco",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Álava, dentro del País Vasco. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Analizamos casos de accidentes de coche, moto, bicicleta, atropellos y otros supuestos de responsabilidad en la circulación para orientar la reclamación de la indemnización que corresponda en Álava.",
  },
  albacete: {
    nombre: "Albacete",
    comunidad: "Castilla-La Mancha",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Albacete, dentro de Castilla-La Mancha. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Revisamos accidentes de coche, moto, bicicleta y atropellos para ayudarte a reclamar una indemnización adecuada en Albacete.",
  },
  alicante: {
    nombre: "Alicante",
    comunidad: "Comunidad Valenciana",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Alicante, dentro de la Comunidad Valenciana. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Analizamos la documentación del siniestro y la evolución médica para orientar una reclamación completa en Alicante.",
  },
  almeria: {
    nombre: "Almería",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Almería, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Te ayudamos a estudiar la responsabilidad del accidente y a reclamar daños personales y materiales en Almería.",
  },
  asturias: {
    nombre: "Asturias",
    comunidad: "Principado de Asturias",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Asturias. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en reclamaciones por accidentes de circulación en Asturias con atención a secuelas, perjuicios y baja laboral.",
  },
  avila: {
    nombre: "Ávila",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Ávila, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Revisamos informes médicos, atestados y ofertas del seguro para reclamar en Ávila la indemnización que corresponda.",
  },
  badajoz: {
    nombre: "Badajoz",
    comunidad: "Extremadura",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Badajoz, dentro de Extremadura. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Orientamos reclamaciones por daños personales y materiales derivados de accidentes de circulación en Badajoz.",
  },
  barcelona: {
    nombre: "Barcelona",
    comunidad: "Cataluña",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Barcelona, dentro de Cataluña. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos a lesionados por accidentes en Barcelona a revisar su caso y reclamar una compensación ajustada al perjuicio sufrido.",
  },
  burgos: {
    nombre: "Burgos",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Burgos, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Burgos estudiamos accidentes con lesiones, secuelas y perjuicios económicos para orientar la mejor reclamación posible.",
  },
  caceres: {
    nombre: "Cáceres",
    comunidad: "Extremadura",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Cáceres, dentro de Extremadura. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Revisamos informes médicos y documentación del siniestro para reclamar daños personales y materiales en Cáceres.",
  },
  cadiz: {
    nombre: "Cádiz",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Cádiz, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Analizamos accidentes de coche, moto, bicicleta, atropellos y otros supuestos de responsabilidad en la circulación para orientar la reclamación de la indemnización que corresponda en Cádiz.",
  },
  cantabria: {
    nombre: "Cantabria",
    comunidad: "Cantabria",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Cantabria. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en Cantabria para valorar lesiones, secuelas y perjuicios derivados de accidentes de circulación.",
  },
  castellon: {
    nombre: "Castellón",
    comunidad: "Comunidad Valenciana",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Castellón, dentro de la Comunidad Valenciana. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Analizamos la documentación y la evolución médica para orientar reclamaciones por accidentes en Castellón.",
  },
  "ciudad-real": {
    nombre: "Ciudad Real",
    comunidad: "Castilla-La Mancha",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Ciudad Real, dentro de Castilla-La Mancha. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos a reclamar indemnizaciones por lesiones, daños materiales y perjuicios económicos en Ciudad Real.",
  },
  cordoba: {
    nombre: "Córdoba",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Córdoba, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Córdoba revisamos cada caso para defender una reclamación sólida frente a la aseguradora.",
  },
  cuenca: {
    nombre: "Cuenca",
    comunidad: "Castilla-La Mancha",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Cuenca, dentro de Castilla-La Mancha. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en Cuenca para valorar daños personales y calcular la posible indemnización.",
  },
  girona: {
    nombre: "Girona",
    comunidad: "Cataluña",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Girona, dentro de Cataluña. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos a lesionados en Girona a revisar informes, atestados y ofertas del seguro.",
  },
  granada: {
    nombre: "Granada",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Granada, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Granada orientamos reclamaciones por accidentes con lesiones temporales, secuelas y perjuicios patrimoniales.",
  },
  guadalajara: {
    nombre: "Guadalajara",
    comunidad: "Castilla-La Mancha",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Guadalajara, dentro de Castilla-La Mancha. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Revisamos en Guadalajara cada expediente médico y de tráfico para defender la indemnización adecuada.",
  },
  guipuzcoa: {
    nombre: "Guipúzcoa",
    comunidad: "País Vasco",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Guipúzcoa, dentro del País Vasco. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo legal en Guipúzcoa para accidentes con lesiones, rehabilitación y secuelas.",
  },
  huelva: {
    nombre: "Huelva",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Huelva, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Orientamos la reclamación por lesiones, daños materiales y demás perjuicios derivados del accidente en Huelva.",
  },
  huesca: {
    nombre: "Huesca",
    comunidad: "Aragón",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Huesca, dentro de Aragón. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Huesca analizamos accidentes de circulación para reclamar de forma fundamentada frente al seguro.",
  },
  "illes-balears": {
    nombre: "Illes Balears",
    comunidad: "Illes Balears",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Illes Balears. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos a lesionados en Illes Balears a revisar su caso y plantear una reclamación completa.",
  },
  jaen: {
    nombre: "Jaén",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Jaén, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Jaén valoramos lesiones, secuelas y perjuicios derivados del accidente para orientar la mejor reclamación.",
  },
  "la-coruna": {
    nombre: "La Coruña",
    comunidad: "Galicia",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en La Coruña, dentro de Galicia. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Revisamos casos de accidentes en La Coruña para reclamar indemnizaciones por daños personales y materiales.",
  },
  "la-rioja": {
    nombre: "La Rioja",
    comunidad: "La Rioja",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en La Rioja. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en La Rioja para valorar responsabilidad, daños personales y perjuicios económicos.",
  },
  "las-palmas": {
    nombre: "Las Palmas",
    comunidad: "Canarias",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Las Palmas, dentro de Canarias. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos a reclamar indemnizaciones por accidentes en Las Palmas con atención a daños personales y materiales.",
  },
  leon: {
    nombre: "León",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en León, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En León revisamos ofertas del seguro, secuelas y baja laboral para orientar la reclamación indemnizatoria.",
  },
  lleida: {
    nombre: "Lleida",
    comunidad: "Cataluña",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Lleida, dentro de Cataluña. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en Lleida para accidentes con lesiones, daños materiales y reclamaciones frente al seguro.",
  },
  lugo: {
    nombre: "Lugo",
    comunidad: "Galicia",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Lugo, dentro de Galicia. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Lugo analizamos documentación médica y de tráfico para orientar la indemnización que pueda corresponder.",
  },
  madrid: {
    nombre: "Madrid",
    comunidad: "Comunidad de Madrid",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Madrid, dentro de la Comunidad de Madrid. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos a lesionados por accidentes en Madrid a revisar su caso y reclamar frente a ofertas insuficientes de la aseguradora.",
  },
  malaga: {
    nombre: "Málaga",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Málaga, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Málaga analizamos lesiones, baja laboral, secuelas y demás perjuicios para preparar una reclamación completa.",
  },
  murcia: {
    nombre: "Murcia",
    comunidad: "Región de Murcia",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Murcia, dentro de la Región de Murcia. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo legal en Murcia para revisar la documentación del siniestro y orientar la reclamación correspondiente.",
  },
  navarra: {
    nombre: "Navarra",
    comunidad: "Comunidad Foral de Navarra",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Navarra, dentro de la Comunidad Foral de Navarra. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Navarra revisamos responsabilidad, informes médicos y secuelas para reclamar daños personales y materiales.",
  },
  ourense: {
    nombre: "Ourense",
    comunidad: "Galicia",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Ourense, dentro de Galicia. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Orientamos en Ourense reclamaciones por accidentes con lesiones, secuelas y perjuicios patrimoniales.",
  },
  palencia: {
    nombre: "Palencia",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Palencia, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos a lesionados en Palencia a revisar su expediente y reclamar una indemnización proporcionada.",
  },
  pontevedra: {
    nombre: "Pontevedra",
    comunidad: "Galicia",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Pontevedra, dentro de Galicia. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Pontevedra analizamos accidentes de tráfico con atención a daños físicos, secuelas y perjuicios económicos.",
  },
  salamanca: {
    nombre: "Salamanca",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Salamanca, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en Salamanca para estudiar el caso y orientar la reclamación de la indemnización procedente.",
  },
  "santa-cruz-de-tenerife": {
    nombre: "Santa Cruz de Tenerife",
    comunidad: "Canarias",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Santa Cruz de Tenerife, dentro de Canarias. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos en Santa Cruz de Tenerife a revisar documentación médica y del siniestro para reclamar de forma adecuada.",
  },
  segovia: {
    nombre: "Segovia",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Segovia, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Analizamos casos de accidentes de coche, moto, bicicleta, atropellos y otros supuestos de responsabilidad en la circulación para orientar la reclamación de la indemnización que corresponda.",
  },
  sevilla: {
    nombre: "Sevilla",
    comunidad: "Andalucía",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Sevilla, dentro de Andalucía. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Sevilla revisamos cada caso para reclamar por lesiones, secuelas, baja laboral y otros perjuicios indemnizables.",
  },
  soria: {
    nombre: "Soria",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Soria, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en Soria para revisar la responsabilidad del siniestro y la posible indemnización.",
  },
  tarragona: {
    nombre: "Tarragona",
    comunidad: "Cataluña",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Tarragona, dentro de Cataluña. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Tarragona ayudamos a lesionados por accidentes a valorar el caso y defender su reclamación.",
  },
  teruel: {
    nombre: "Teruel",
    comunidad: "Aragón",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Teruel, dentro de Aragón. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Orientamos reclamaciones por accidentes en Teruel con atención a daños físicos, daños materiales y perjuicios económicos.",
  },
  toledo: {
    nombre: "Toledo",
    comunidad: "Castilla-La Mancha",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Toledo, dentro de Castilla-La Mancha. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Toledo analizamos documentación del accidente y evolución médica para orientar la reclamación.",
  },
  valencia: {
    nombre: "Valencia",
    comunidad: "Comunidad Valenciana",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Valencia, dentro de la Comunidad Valenciana. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en Valencia para reclamar indemnizaciones por lesiones, secuelas y daños materiales.",
  },
  valladolid: {
    nombre: "Valladolid",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Valladolid, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Valladolid revisamos atestados, informes médicos y ofertas del seguro para defender la mejor reclamación posible.",
  },
  vizcaya: {
    nombre: "Vizcaya",
    comunidad: "País Vasco",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Vizcaya, dentro del País Vasco. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Ayudamos en Vizcaya a reclamar por lesiones, secuelas y perjuicios derivados de accidentes de circulación.",
  },
  zamora: {
    nombre: "Zamora",
    comunidad: "Castilla y León",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Zamora, dentro de Castilla y León. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "Prestamos apoyo en Zamora para revisar el caso y plantear una reclamación bien fundamentada.",
  },
  zaragoza: {
    nombre: "Zaragoza",
    comunidad: "Aragón",
    descripcion:
      "Atendemos consultas relacionadas con accidentes de tráfico en Zaragoza, dentro de Aragón. Estudiamos cada caso para valorar lesiones, secuelas, documentación médica y posibles reclamaciones frente a la aseguradora.",
    ayuda:
      "En Zaragoza orientamos reclamaciones por accidentes con lesiones, daños materiales y posibles secuelas.",
  },
} as const;

export const metadata: Metadata = {
  title: "Provincias | Accidente Legal Abogados",
  description:
    "Consulta la cobertura de nuestros abogados de accidentes en todas las provincias de España.",
};

export default function ProvinciasPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-background px-4 pb-20 sm:px-6">
        <section className="border-b border-border bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-10 space-y-4 text-center">
              <p className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Cobertura nacional
              </p>
              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                Abogados de accidentes en todas las provincias
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                Descubre cómo podemos ayudarte en tu provincia con reclamaciones por accidentes de tráfico,
                lesiones, secuelas y daños materiales.
              </p>
              <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                Haz clic en el mapa para ir directamente a la página de tu provincia o elige una provincia del listado.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-0 sm:px-6">
          <div className="mb-14 px-2 sm:px-4">
            <div className="mx-auto w-full max-w-[940px]">
              <SpainMap />
            </div>
          </div>

          <div className="mb-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Encuentra tu provincia</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Selecciona la provincia donde necesitas asesoría y ve directamente a la información específica de la zona.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(provinciasData).map(([slug, data]) => (
              <Link
                key={slug}
                href={`/provincias/${slug}`}
                className="group rounded-3xl border border-border bg-card p-6 transition hover:shadow-lg"
              >
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{data.nombre}</h2>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[.16em] text-primary/80">
                    {data.comunidad}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{data.ayuda}</p>
                </div>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition group-hover:translate-x-1">
                  Ver más →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
