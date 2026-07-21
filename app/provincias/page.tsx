import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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

type ProvinciaKey = keyof typeof provinciasData;

export async function generateStaticParams() {
  return Object.keys(provinciasData).map((provincia) => ({
    provincia,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provincia: string }>;
}): Promise<Metadata> {
  const { provincia } = await params;
  const data = provinciasData[provincia as ProvinciaKey];

  if (!data) {
    return {
      title: "Provincia no encontrada | Accidente Legal Abogados",
      description: "La provincia solicitada no existe.",
    };
  }

  return {
    title: `Abogados de accidentes en ${data.nombre} | Accidente Legal Abogados`,
    description: data.descripcion,
  };
}

export default async function ProvinciaPage({
  params,
}: {
  params: Promise<{ provincia: string }>;
}) {
  const { provincia } = await params;
  const data = provinciasData[provincia as ProvinciaKey];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <section className="mx-auto max-w-5xl">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Cobertura en {data.nombre}
        </span>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground lg:text-6xl">
          Abogados de accidentes en {data.nombre}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          {data.descripcion}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-card-foreground">
              Cómo podemos ayudarte en {data.nombre}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {data.ayuda}
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Revisión inicial del accidente y de la documentación disponible.</li>
              <li>Valoración orientativa de lesiones, secuelas y perjuicios.</li>
              <li>Negociación con aseguradoras y estudio de ofertas indemnizatorias.</li>
              <li>Atención personalizada durante la tramitación del caso.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-card-foreground">
              Contacto rápido
            </h2>

            <div className="mt-6 space-y-3">
              <Link
                href="tel:+34600000000"
                className="flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Llamar ahora
              </Link>

              <Link
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Escribir por WhatsApp
              </Link>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              También puedes consultar otras provincias desde la página general de cobertura.
            </p>

            <div className="mt-5">
              <Link
                href="/provincias"
                className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Ver todas las provincias
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}