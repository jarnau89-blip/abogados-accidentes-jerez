import type { Metadata } from "next";
import { notFound } from "next/navigation";

const provinciasData = {
  alava: {
    nombre: "Álava",
    descripcion: "Información sobre reclamaciones por accidentes de tráfico en Álava, valoración de lesiones y defensa frente a aseguradoras.",
    contenido: "Si has sufrido un accidente de tráfico en Álava, analizamos la responsabilidad del siniestro, los informes médicos y la documentación necesaria para reclamar la indemnización que te corresponda.",
  },
  albacete: {
    nombre: "Albacete",
    descripcion: "Asesoramiento legal para accidentes en Albacete, con orientación sobre indemnizaciones, secuelas y daños materiales.",
    contenido: "En Albacete estudiamos cada caso para reclamar daños personales, perjuicios económicos, secuelas y cualquier concepto indemnizable derivado del accidente.",
  },
  alicante: {
    nombre: "Alicante",
    descripcion: "Revisión de accidentes de tráfico en Alicante para reclamar indemnizaciones por lesiones, baja laboral y perjuicios económicos.",
    contenido: "Si el accidente ocurrió en Alicante, revisamos atestado, informes médicos y póliza para preparar una reclamación sólida frente a la aseguradora.",
  },
  cadiz: {
    nombre: "Cádiz",
    descripcion: "Reclamaciones por accidentes en Cádiz, con apoyo legal para lesionados, ocupantes y conductores no responsables.",
    contenido: "En Cádiz te ayudamos a estudiar tu caso, valorar las lesiones sufridas y reclamar una indemnización ajustada a los daños personales y materiales.",
  },
  sevilla: {
    nombre: "Sevilla",
    descripcion: "Defensa legal en Sevilla para víctimas de accidentes, con estudio del perjuicio personal y patrimonial.",
    contenido: "Si tu accidente ocurrió en Sevilla, revisamos toda la documentación médica y del siniestro para defender tu derecho a una compensación adecuada.",
  },
  malaga: {
    nombre: "Málaga",
    descripcion: "Información sobre accidentes de tráfico en Málaga, con estudio del caso, informes médicos y negociación con la aseguradora.",
    contenido: "En Málaga analizamos lesiones, tiempos de curación, secuelas y perjuicios económicos para plantear una reclamación completa.",
  },
  madrid: {
    nombre: "Madrid",
    descripcion: "Reclamación de indemnizaciones por accidentes en Madrid, con asistencia a conductores, pasajeros y peatones lesionados.",
    contenido: "Prestamos apoyo legal en Madrid para accidentes urbanos e interurbanos, estudiando la responsabilidad y la cuantía de la indemnización.",
  },
  barcelona: {
    nombre: "Barcelona",
    descripcion: "Reclamación de indemnizaciones por accidentes en Barcelona, con análisis de lesiones temporales, secuelas y gastos médicos.",
    contenido: "En Barcelona te orientamos en todo el proceso de reclamación frente al seguro, desde el estudio del caso hasta la valoración de daños.",
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
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          Abogados de accidentes en {data.nombre}
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {data.descripcion}
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="leading-relaxed text-card-foreground">{data.contenido}</p>
        </div>
      </section>
    </main>
  );
}