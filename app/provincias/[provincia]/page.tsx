import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

const provinciasData = {
  alava: {
    nombre: "Álava",
    descripcion:
      "Información sobre reclamaciones por accidentes de tráfico en Álava, valoración de lesiones y defensa frente a aseguradoras.",
    contenido:
      "Si has sufrido un accidente de tráfico en Álava, analizamos la responsabilidad del siniestro, los informes médicos y la documentación necesaria para reclamar la indemnización que te corresponda.",
  },
  albacete: {
    nombre: "Albacete",
    descripcion:
      "Asesoramiento legal para accidentes en Albacete, con orientación sobre indemnizaciones, secuelas y daños materiales.",
    contenido:
      "En Albacete estudiamos cada caso para reclamar daños personales, perjuicios económicos, secuelas y cualquier concepto indemnizable derivado del accidente.",
  },
  alicante: {
    nombre: "Alicante",
    descripcion:
      "Revisión de accidentes de tráfico en Alicante para reclamar indemnizaciones por lesiones, baja laboral y perjuicios económicos.",
    contenido:
      "Si el accidente ocurrió en Alicante, revisamos atestado, informes médicos y póliza para preparar una reclamación sólida frente a la aseguradora.",
  },
  almeria: {
    nombre: "Almería",
    descripcion:
      "Información sobre accidentes de tráfico en Almería, con análisis de lesiones, secuelas y responsabilidad del siniestro.",
    contenido:
      "En Almería estudiamos la documentación médica y del accidente para orientar una reclamación completa frente a la aseguradora.",
  },
  asturias: {
    nombre: "Asturias",
    descripcion:
      "Asesoramiento en reclamaciones por accidentes en Asturias, con estudio de lesiones, baja laboral y perjuicios.",
    contenido:
      "Si el accidente ocurrió en Asturias, revisamos informes médicos, secuelas y daños materiales para reclamar la indemnización que corresponda.",
  },
  avila: {
    nombre: "Ávila",
    descripcion:
      "Defensa legal por accidentes de tráfico en Ávila, con revisión del caso y valoración de daños personales.",
    contenido:
      "En Ávila analizamos atestados, informes médicos y ofertas de la aseguradora para preparar una reclamación adecuada.",
  },
  badajoz: {
    nombre: "Badajoz",
    descripcion:
      "Reclamaciones por accidentes en Badajoz con apoyo para lesiones, secuelas y daños materiales.",
    contenido:
      "Prestamos apoyo legal en Badajoz para estudiar la responsabilidad del accidente y reclamar una compensación ajustada.",
  },
  barcelona: {
    nombre: "Barcelona",
    descripcion:
      "Reclamación de indemnizaciones por accidentes en Barcelona, con análisis de lesiones temporales, secuelas y gastos médicos.",
    contenido:
      "En Barcelona te orientamos en todo el proceso de reclamación frente al seguro, desde el estudio del caso hasta la valoración de daños.",
  },
  burgos: {
    nombre: "Burgos",
    descripcion:
      "Asesoramiento legal por accidentes de tráfico en Burgos con revisión de lesiones y perjuicios económicos.",
    contenido:
      "En Burgos estudiamos cada accidente para reclamar daños personales, materiales y secuelas derivadas del siniestro.",
  },
  caceres: {
    nombre: "Cáceres",
    descripcion:
      "Información legal sobre accidentes en Cáceres, con orientación sobre lesiones, secuelas y oferta indemnizatoria.",
    contenido:
      "En Cáceres revisamos el expediente médico y la documentación del accidente para valorar la mejor reclamación posible.",
  },
  cadiz: {
    nombre: "Cádiz",
    descripcion:
      "Reclamaciones por accidentes en Cádiz, con apoyo legal para lesionados, ocupantes y conductores no responsables.",
    contenido:
      "En Cádiz te ayudamos a estudiar tu caso, valorar las lesiones sufridas y reclamar una indemnización ajustada a los daños personales y materiales.",
  },
  cantabria: {
    nombre: "Cantabria",
    descripcion:
      "Asistencia legal en Cantabria para víctimas de accidentes de tráfico, con valoración de lesiones y secuelas.",
    contenido:
      "En Cantabria estudiamos accidentes de circulación para reclamar daños personales, materiales y perjuicios económicos.",
  },
  castellon: {
    nombre: "Castellón",
    descripcion:
      "Información sobre reclamaciones por accidentes en Castellón, con revisión de daños físicos y materiales.",
    contenido:
      "Analizamos en Castellón informes médicos, atestados y evolución clínica para orientar una reclamación completa.",
  },
  "ciudad-real": {
    nombre: "Ciudad Real",
    descripcion:
      "Reclamaciones legales por accidentes en Ciudad Real con estudio de lesiones, secuelas y perjuicios.",
    contenido:
      "En Ciudad Real revisamos el accidente y la documentación médica para preparar una reclamación frente a la aseguradora.",
  },
  cordoba: {
    nombre: "Córdoba",
    descripcion:
      "Asesoramiento por accidentes de tráfico en Córdoba con defensa frente a aseguradoras y cálculo de indemnización.",
    contenido:
      "En Córdoba analizamos daños personales, daños materiales y perjuicios económicos para defender una reclamación sólida.",
  },
  cuenca: {
    nombre: "Cuenca",
    descripcion:
      "Información legal sobre accidentes en Cuenca, con valoración de lesiones, informes médicos y secuelas.",
    contenido:
      "Prestamos apoyo en Cuenca para revisar la documentación del siniestro y reclamar la indemnización correspondiente.",
  },
  girona: {
    nombre: "Girona",
    descripcion:
      "Revisión de accidentes de tráfico en Girona con orientación legal para lesionados y afectados.",
    contenido:
      "En Girona analizamos el caso, la atención médica recibida y la responsabilidad del accidente para reclamar daños personales.",
  },
  granada: {
    nombre: "Granada",
    descripcion:
      "Asesoramiento legal por accidentes en Granada con estudio de secuelas, baja laboral y perjuicios patrimoniales.",
    contenido:
      "En Granada revisamos informes médicos, tiempos de curación y documentación del siniestro para reclamar una indemnización ajustada.",
  },
  guadalajara: {
    nombre: "Guadalajara",
    descripcion:
      "Defensa legal en Guadalajara para víctimas de accidentes, con revisión médica y análisis indemnizatorio.",
    contenido:
      "En Guadalajara estudiamos cada caso para valorar lesiones temporales, secuelas y daños materiales derivados del accidente.",
  },
  guipuzcoa: {
    nombre: "Guipúzcoa",
    descripcion:
      "Información sobre accidentes en Guipúzcoa con orientación en reclamaciones frente a aseguradoras.",
    contenido:
      "Prestamos apoyo legal en Guipúzcoa para estudiar lesiones, rehabilitación y secuelas con vistas a una reclamación adecuada.",
  },
  huelva: {
    nombre: "Huelva",
    descripcion:
      "Reclamaciones por accidentes en Huelva con asesoramiento sobre lesiones, daños materiales y perjuicios.",
    contenido:
      "En Huelva valoramos la documentación del accidente y la evolución médica para reclamar la indemnización correspondiente.",
  },
  huesca: {
    nombre: "Huesca",
    descripcion:
      "Defensa legal en Huesca por accidentes de tráfico con análisis de responsabilidad y daños personales.",
    contenido:
      "En Huesca revisamos atestados, informes médicos y circunstancias del siniestro para orientar la reclamación.",
  },
  "illes-balears": {
    nombre: "Illes Balears",
    descripcion:
      "Asistencia legal por accidentes de tráfico en Illes Balears, con estudio de lesiones y secuelas.",
    contenido:
      "En Illes Balears analizamos cada caso para reclamar daños personales, materiales y perjuicios económicos frente a la aseguradora.",
  },
  jaen: {
    nombre: "Jaén",
    descripcion:
      "Información legal sobre accidentes en Jaén con revisión del caso, lesiones y perjuicios patrimoniales.",
    contenido:
      "En Jaén estudiamos informes médicos, secuelas y documentación del accidente para defender una indemnización adecuada.",
  },
  "la-coruna": {
    nombre: "La Coruña",
    descripcion:
      "Reclamaciones por accidentes en La Coruña con apoyo legal para lesionados y afectados por siniestros viales.",
    contenido:
      "En La Coruña analizamos responsabilidad, daños personales y materiales para preparar una reclamación frente al seguro.",
  },
  "la-rioja": {
    nombre: "La Rioja",
    descripcion:
      "Asesoramiento legal por accidentes de tráfico en La Rioja, con revisión de lesiones y perjuicios económicos.",
    contenido:
      "En La Rioja estudiamos el accidente y la evolución médica para valorar una posible indemnización ajustada a tu caso.",
  },
  "las-palmas": {
    nombre: "Las Palmas",
    descripcion:
      "Información sobre accidentes en Las Palmas con apoyo para reclamar daños físicos, materiales y secuelas.",
    contenido:
      "En Las Palmas revisamos informes médicos y documentación del siniestro para orientar una reclamación completa.",
  },
  leon: {
    nombre: "León",
    descripcion:
      "Defensa legal por accidentes en León con análisis de secuelas, baja laboral y oferta de la aseguradora.",
    contenido:
      "En León te ayudamos a estudiar tu caso y a reclamar la indemnización que corresponda por daños personales y materiales.",
  },
  lleida: {
    nombre: "Lleida",
    descripcion:
      "Reclamaciones por accidentes en Lleida con orientación legal sobre lesiones y secuelas.",
    contenido:
      "En Lleida analizamos cada caso para reclamar daños personales, gastos médicos y perjuicios económicos derivados del accidente.",
  },
  lugo: {
    nombre: "Lugo",
    descripcion:
      "Asesoramiento legal para accidentes de tráfico en Lugo con revisión de informes médicos y responsabilidad.",
    contenido:
      "En Lugo revisamos la documentación del accidente para defender una reclamación bien fundamentada frente a la aseguradora.",
  },
  madrid: {
    nombre: "Madrid",
    descripcion:
      "Reclamación de indemnizaciones por accidentes en Madrid, con asistencia a conductores, pasajeros y peatones lesionados.",
    contenido:
      "Prestamos apoyo legal en Madrid para accidentes urbanos e interurbanos, estudiando la responsabilidad y la cuantía de la indemnización.",
  },
  malaga: {
    nombre: "Málaga",
    descripcion:
      "Información sobre accidentes de tráfico en Málaga, con estudio del caso, informes médicos y negociación con la aseguradora.",
    contenido:
      "En Málaga analizamos lesiones, tiempos de curación, secuelas y perjuicios económicos para plantear una reclamación completa.",
  },
  murcia: {
    nombre: "Murcia",
    descripcion:
      "Asistencia legal en Murcia para víctimas de accidentes con valoración de lesiones y daños materiales.",
    contenido:
      "En Murcia revisamos toda la documentación del siniestro y la evolución médica para reclamar una compensación adecuada.",
  },
  navarra: {
    nombre: "Navarra",
    descripcion:
      "Información sobre reclamaciones por accidentes en Navarra con análisis de secuelas y responsabilidad.",
    contenido:
      "En Navarra estudiamos informes médicos, circunstancias del accidente y perjuicios para preparar una reclamación sólida.",
  },
  ourense: {
    nombre: "Ourense",
    descripcion:
      "Reclamaciones legales por accidentes en Ourense con orientación sobre lesiones y daños personales.",
    contenido:
      "En Ourense revisamos documentación médica y de tráfico para valorar la indemnización que pueda corresponder.",
  },
  palencia: {
    nombre: "Palencia",
    descripcion:
      "Defensa legal por accidentes en Palencia con estudio del caso y revisión de secuelas.",
    contenido:
      "En Palencia te ayudamos a reclamar daños personales, daños materiales y perjuicios patrimoniales derivados del accidente.",
  },
  pontevedra: {
    nombre: "Pontevedra",
    descripcion:
      "Información legal sobre accidentes en Pontevedra con apoyo a lesionados y revisión del expediente.",
    contenido:
      "En Pontevedra analizamos lesiones, secuelas y perjuicios económicos para orientar la mejor reclamación posible.",
  },
  salamanca: {
    nombre: "Salamanca",
    descripcion:
      "Asesoramiento por accidentes de tráfico en Salamanca con valoración de daños y estudio de responsabilidad.",
    contenido:
      "En Salamanca revisamos informes médicos, atestados y ofertas del seguro para reclamar la indemnización procedente.",
  },
  "santa-cruz-de-tenerife": {
    nombre: "Santa Cruz de Tenerife",
    descripcion:
      "Reclamaciones por accidentes en Santa Cruz de Tenerife con apoyo legal para daños personales y materiales.",
    contenido:
      "En Santa Cruz de Tenerife revisamos la documentación del accidente y la evolución clínica para preparar una reclamación completa.",
  },
  segovia: {
    nombre: "Segovia",
    descripcion:
      "Información sobre accidentes de tráfico en Segovia con orientación para reclamar lesiones y secuelas.",
    contenido:
      "En Segovia estudiamos accidentes de coche, moto, bicicleta y atropellos para valorar una reclamación fundamentada.",
  },
  sevilla: {
    nombre: "Sevilla",
    descripcion:
      "Defensa legal en Sevilla para víctimas de accidentes, con estudio del perjuicio personal y patrimonial.",
    contenido:
      "Si tu accidente ocurrió en Sevilla, revisamos toda la documentación médica y del siniestro para defender tu derecho a una compensación adecuada.",
  },
  soria: {
    nombre: "Soria",
    descripcion:
      "Asistencia legal por accidentes en Soria con valoración de lesiones, responsabilidad y daños materiales.",
    contenido:
      "En Soria revisamos cada caso para orientar la reclamación de la indemnización que corresponda.",
  },
  tarragona: {
    nombre: "Tarragona",
    descripcion:
      "Reclamaciones por accidentes de tráfico en Tarragona con estudio del caso y daños indemnizables.",
    contenido:
      "En Tarragona analizamos informes médicos, secuelas y documentación del siniestro para reclamar una compensación adecuada.",
  },
  teruel: {
    nombre: "Teruel",
    descripcion:
      "Información sobre accidentes en Teruel con apoyo legal para lesionados y análisis de perjuicios.",
    contenido:
      "En Teruel revisamos accidentes de circulación para valorar daños físicos, materiales y perjuicios económicos.",
  },
  toledo: {
    nombre: "Toledo",
    descripcion:
      "Asesoramiento legal por accidentes en Toledo con revisión de lesiones, secuelas y responsabilidad.",
    contenido:
      "En Toledo estudiamos documentación médica y del accidente para orientar una reclamación completa frente a la aseguradora.",
  },
  valencia: {
    nombre: "Valencia",
    descripcion:
      "Defensa legal por accidentes de tráfico en Valencia con análisis de lesiones, gastos y secuelas.",
    contenido:
      "En Valencia prestamos apoyo a lesionados y afectados para reclamar indemnizaciones por daños personales y materiales.",
  },
  valladolid: {
    nombre: "Valladolid",
    descripcion:
      "Reclamaciones por accidentes en Valladolid con estudio del caso y negociación con aseguradoras.",
    contenido:
      "En Valladolid revisamos informes médicos, atestados y ofertas indemnizatorias para defender la mejor reclamación posible.",
  },
  vizcaya: {
    nombre: "Vizcaya",
    descripcion:
      "Asesoramiento legal por accidentes en Vizcaya con orientación sobre secuelas, lesiones y perjuicios.",
    contenido:
      "En Vizcaya analizamos la documentación del siniestro para reclamar daños personales, materiales y económicos.",
  },
  zamora: {
    nombre: "Zamora",
    descripcion:
      "Información sobre accidentes de tráfico en Zamora con apoyo legal y valoración de indemnización.",
    contenido:
      "En Zamora estudiamos la responsabilidad del accidente y la evolución médica para plantear una reclamación sólida.",
  },
  zaragoza: {
    nombre: "Zaragoza",
    descripcion:
      "Reclamaciones por accidentes en Zaragoza con análisis de daños físicos, materiales y secuelas.",
    contenido:
      "En Zaragoza revisamos cada caso para orientar la reclamación de la indemnización correspondiente.",
  },
} as const;

type ProvinciaKey = keyof typeof provinciasData;

type Props = {
  params: Promise<{ provincia: string }>;
};

export async function generateStaticParams() {
  return Object.keys(provinciasData).map((provincia) => ({
    provincia,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { provincia } = await params;

  if (!(provincia in provinciasData)) {
    return {
      title: "Provincia no encontrada | Accidente Legal Abogados",
      description: "La provincia solicitada no existe.",
    };
  }

  const data = provinciasData[provincia as ProvinciaKey];

  return {
    title: `Abogados de accidentes en ${data.nombre} | Accidente Legal Abogados`,
    description: data.descripcion,
  };
}

export default async function ProvinciaPage({ params }: Props) {
  const { provincia } = await params;

  if (!(provincia in provinciasData)) {
    notFound();
  }

  const data = provinciasData[provincia as ProvinciaKey];

  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          Abogados de accidentes en {data.nombre}
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {data.descripcion}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_320px]">
          <div />
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-card-foreground">Contacto rápido</h3>
            <p className="mt-2 text-sm text-muted-foreground">Llámanos o envíanos un WhatsApp y te atenderemos.</p>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="tel:+34600000000"
                className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Llamar ahora
              </Link>

              <Link
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Escribir por WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="leading-relaxed text-card-foreground">
            {data.contenido}
          </p>
        </div>
      
      <ContactForm />
      </section>
    </main>
  );
}