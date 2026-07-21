import type { Metadata } from "next";
import { notFound } from "next/navigation";

const provinciasData = {
  cadiz: {
    nombre: "Cádiz",
    titulo: "Abogados de accidentes en Cádiz",
    descripcion:
      "Reclamamos indemnizaciones por accidentes de tráfico en Cádiz, incluyendo siniestros urbanos, interurbanos y lesiones derivadas del accidente.",
    texto:
      "Si has sufrido un accidente en Cádiz, podemos ayudarte a estudiar tu caso, valorar las lesiones, revisar la documentación médica y reclamar la indemnización que corresponda.",
  },
  sevilla: {
    nombre: "Sevilla",
    titulo: "Abogados de accidentes en Sevilla",
    descripcion:
      "Asistencia legal para accidentes de tráfico en Sevilla, con orientación sobre responsabilidad, daños personales y reclamaciones a aseguradoras.",
    texto:
      "En Sevilla analizamos cada accidente de forma individual para preparar una reclamación sólida, tanto si hubo lesiones, baja laboral, secuelas o daños materiales.",
  },
  malaga: {
    nombre: "Málaga",
    titulo: "Abogados de accidentes en Málaga",
    descripcion:
      "Información legal y reclamación de indemnizaciones por accidentes de tráfico en Málaga y su provincia.",
    texto:
      "Si tu accidente ocurrió en Málaga, te ayudamos a revisar informes médicos, atestados y pólizas para reclamar una compensación ajustada a tu situación.",
  },
  madrid: {
    nombre: "Madrid",
    titulo: "Abogados de accidentes en Madrid",
    descripcion:
      "Reclamación de indemnizaciones por accidentes en Madrid, con atención a lesionados, ocupantes, peatones y motoristas.",
    texto:
      "Prestamos apoyo legal en accidentes ocurridos en Madrid, estudiando la responsabilidad, el alcance de las lesiones y la negociación con la aseguradora.",
  },
} as const;

type ProvinciaSlug = keyof typeof provinciasData;

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
  const data = provinciasData[provincia as ProvinciaSlug];

  if (!data) {
    return {
      title: "Provincia no encontrada | Accidente Legal Abogados",
    };
  }

  return {
    title: `${data.titulo} | Accidente Legal Abogados`,
    description: data.descripcion,
  };
}

export default async function ProvinciaDetallePage({
  params,
}: {
  params: Promise<{ provincia: string }>;
}) {
  const { provincia } = await params;
  const data = provinciasData[provincia as ProvinciaSlug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
          {data.titulo}
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {data.descripcion}
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="leading-relaxed text-card-foreground">{data.texto}</p>
        </div>
      </section>
    </main>
  );
}