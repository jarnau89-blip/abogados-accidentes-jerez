import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { provinciasSEO } from "@/data/provincias-seo";
import { WhyUsProvincia } from "@/components/why-us-provincia";
import { ContactForm } from "@/components/contact-form";

const SITE_URL = "https://abogados-accidentes-jerez.vercel.app";

const provinciasDisponibles = [
  "alava",
  "albacete",
  "alicante",
  "almeria",
  "asturias",
  "avila",
  "badajoz",
  "barcelona",
  "burgos",
  "caceres",
  "cadiz",
  "cantabria",
  "castellon",
  "ceuta",
  "ciudad-real",
  "cordoba",
  "cuenca",
  "girona",
  "granada",
  "guadalajara",
  "guipuzcoa",
  "huelva",
  "huesca",
  "illes-balears",
  "jaen",
  "la-coruna",
  "la-rioja",
  "las-palmas",
  "leon",
  "lleida",
  "lugo",
  "madrid",
  "malaga",
  "melilla",
  "murcia",
  "navarra",
  "ourense",
  "palencia",
  "pontevedra",
  "salamanca",
  "santa-cruz-de-tenerife",
  "segovia",
  "sevilla",
  "soria",
  "tarragona",
  "teruel",
  "toledo",
  "valencia",
  "valladolid",
  "vizcaya",
  "zamora",
  "zaragoza",
];


const servicios = [
  {
    nombre: "Lesiones por accidente de tráfico",
    slug: "/servicios/lesiones-accidente-trafico",
  },
  {
    nombre: "Daños materiales",
    slug: "/servicios/danos-materiales",
  },
  {
    nombre: "Secuelas por accidente de tráfico",
    slug: "/servicios/secuelas-accidente-trafico",
  },
  {
    nombre: "Lucro cesante",
    slug: "/servicios/lucro-cesante",
  },
  {
    nombre: "Reclamación frente a aseguradoras",
    slug: "/servicios/reclamacion-aseguradora",
  },
];

const nombresProvincias: Record<string, string> = {
  alava: "Álava",
  albacete: "Albacete",
  alicante: "Alicante",
  almeria: "Almería",
  asturias: "Asturias",
  avila: "Ávila",
  badajoz: "Badajoz",
  barcelona: "Barcelona",
  burgos: "Burgos",
  caceres: "Cáceres",
  cadiz: "Cádiz",
  cantabria: "Cantabria",
  castellon: "Castellón",
  ceuta: "Ceuta",
  "ciudad-real": "Ciudad Real",
  cordoba: "Córdoba",
  cuenca: "Cuenca",
  girona: "Girona",
  granada: "Granada",
  guadalajara: "Guadalajara",
  guipuzcoa: "Guipúzcoa",
  huelva: "Huelva",
  huesca: "Huesca",
  "illes-balears": "Illes Balears",
  jaen: "Jaén",
  "la-coruna": "A Coruña",
  "la-rioja": "La Rioja",
  "las-palmas": "Las Palmas",
  leon: "León",
  lleida: "Lleida",
  madrid: "Madrid",
  malaga: "Málaga",
  melilla: "Melilla",
  murcia: "Murcia",
  navarra: "Navarra",
  ourense: "Ourense",
  palencia: "Palencia",
  pontevedra: "Pontevedra",
  salamanca: "Salamanca",
  "santa-cruz-de-tenerife": "Santa Cruz de Tenerife",
  segovia: "Segovia",
  sevilla: "Sevilla",
  soria: "Soria",
  tarragona: "Tarragona",
  teruel: "Teruel",
  toledo: "Toledo",
  valencia: "Valencia",
  valladolid: "Valladolid",
  vizcaya: "Vizcaya",
  zamora: "Zamora",
  zaragoza: "Zaragoza",
};

type ProvinciaData = {
  nombre: string;
  title: string;
  description: string;
  h1: string;
  introduccion: string;
  localidades: string[];
  tiposAccidente: {
    nombre: string;
    slug: string;
  }[];
  indemnizaciones: {
    nombre: string;
    slug: string;
  }[];
  lesiones: string[];
  faqs: {
    pregunta: string;
    respuesta: string;
  }[];
};

function crearDatosGenericos(provincia: string): ProvinciaData {
  const nombre =
    nombresProvincias[provincia] ||
    provincia
      .split("-")
      .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
      .join(" ");

  return {
    nombre,
    title: `Abogados de Accidentes de Tráfico en ${nombre} | Accidente Legal Abogados`,
    description: `Abogados especialistas en accidentes de tráfico en ${nombre}. Estudiamos lesiones, secuelas y daños y orientamos la reclamación frente a las aseguradoras.`,
    h1: `Abogados especialistas en accidentes de tráfico en ${nombre}`,
    introduccion: `Si has sufrido un accidente de tráfico en ${nombre}, nuestro equipo puede estudiar las circunstancias del accidente, la documentación disponible y los daños y perjuicios que puedan haberse producido para orientarte sobre las posibles vías de reclamación.`,
    localidades: [],
    tiposAccidente: [
      {
        nombre: "Accidente de coche",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Indemnización por secuelas",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Lucro cesante",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        slug: "/indemnizaciones/danos-materiales",
      },
    ],
    lesiones: [
      "Latigazo cervical",
      "Fracturas",
      "Traumatismos",
      "Lesiones musculares",
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta: `¿Puedo reclamar una indemnización por un accidente de tráfico en ${nombre}?`,
        respuesta:
          "La posibilidad de reclamar depende de las circunstancias concretas del accidente y de los daños y perjuicios que puedan acreditarse. Cada caso debe estudiarse individualmente.",
      },
      {
        pregunta:
          "¿Qué documentación necesito para reclamar después de un accidente?",
        respuesta:
          "Es recomendable conservar la documentación del accidente, informes médicos, documentación de rehabilitación, comunicaciones de las aseguradoras y justificantes de los gastos relacionados con el siniestro.",
      },
      {
        pregunta:
          "¿Puedo consultar mi caso antes de aceptar una oferta de la aseguradora?",
        respuesta:
          "Sí. Antes de aceptar una oferta puede ser conveniente revisar qué conceptos contempla y si resulta adecuada teniendo en cuenta las lesiones y perjuicios acreditados.",
      },
    ],
  };
}

function obtenerDatosProvincia(provincia: string): ProvinciaData {
  return provinciasSEO[provincia] || crearDatosGenericos(provincia);
}

export async function generateStaticParams() {
  return provinciasDisponibles.map((provincia) => ({
    provincia,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provincia: string }>;
}): Promise<Metadata> {
  const { provincia } = await params;

  if (!provinciasDisponibles.includes(provincia)) {
    return {
      title: "Provincia no encontrada | Accidente Legal Abogados",
      description: "La provincia solicitada no existe.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const data = obtenerDatosProvincia(provincia);

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${SITE_URL}/provincias/${provincia}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      url: `${SITE_URL}/provincias/${provincia}`,
      siteName: "Accidente Legal Abogados",
      locale: "es_ES",
    },
  };
}

export default async function ProvinciaPage({
  params,
}: {
  params: Promise<{ provincia: string }>;
}) {
  const { provincia } = await params;

  if (!provinciasDisponibles.includes(provincia)) {
    notFound();
  }

  const data = obtenerDatosProvincia(provincia);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Provincias",
        item: `${SITE_URL}/provincias`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Accidentes de tráfico en ${data.nombre}`,
        item: `${SITE_URL}/provincias/${provincia}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.respuesta,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-background px-4 pb-20 pt-24 sm:px-6">
        <section className="mx-auto max-w-6xl">

          {/* BREADCRUMBS */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Inicio
                </Link>
              </li>

              <li>/</li>

              <li>
                <Link
                  href="/provincias"
                  className="hover:text-primary"
                >
                  Provincias
                </Link>
              </li>

              <li>/</li>

              <li className="text-foreground">
                Accidentes de tráfico en {data.nombre}
              </li>
            </ol>
          </nav>

          {/* HERO */}
          <section className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">

            <div>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-primary">
                  Abogados especialistas en accidentes de tráfico
                </p>

                <h1 className="text-4xl font-black tracking-tight text-foreground lg:text-5xl">
                  {data.h1}
                </h1>

                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {data.introduccion}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-3xl bg-primary/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">
                      Atención en toda España
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Gestionamos reclamaciones relacionadas con accidentes
                      ocurridos en {data.nombre}, con atención online y
                      seguimiento personalizado de cada expediente.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-primary/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">
                      Valoración inicial
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Cuéntanos qué ocurrió y estudiaremos las circunstancias
                      del accidente y la documentación disponible.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* CONTACTO */}
            <aside className="space-y-6">

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">

                <h2 className="text-xl font-semibold text-foreground">
                  ¿Has sufrido un accidente en {data.nombre}?
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Contacta con nuestro equipo para explicar tu caso y recibir
                  orientación sobre los siguientes pasos.
                </p>

                <div className="mt-5 grid gap-3">

                  <Link
                    href="tel:+34613781218"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Llamar ahora
                  </Link>

                  <Link
                    href="https://wa.me/34613781218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    Escribir por WhatsApp
                  </Link>

                </div>
              </div>

            </aside>
          </section>

          {/* INTRODUCCIÓN */}
          <section className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-sm">

            <h2 className="text-2xl font-semibold text-foreground">
              Abogados de accidentes de tráfico en {data.nombre}
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Después de un accidente de tráfico pueden aparecer lesiones,
              gastos, daños materiales y otras consecuencias que deben ser
              valoradas individualmente. En Accidente Legal Abogados estudiamos
              la documentación disponible y las circunstancias del accidente
              para orientar la reclamación que pueda corresponder frente a la
              compañía aseguradora.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Atendemos casos de accidentes ocurridos en {data.nombre} y
              prestamos nuestros servicios a distancia en toda España. La
              gestión de cada expediente se adapta a las circunstancias del
              accidente, las lesiones sufridas y los perjuicios que puedan
              acreditarse.
            </p>

          </section>

          <WhyUsProvincia />

          {/* TIPOS DE ACCIDENTES */}
          <section className="mt-10">

            <h2 className="text-3xl font-bold text-foreground">
              ¿Qué tipos de accidentes de tráfico reclamamos?
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
              Estudiamos diferentes tipos de accidentes de circulación y las
              consecuencias que pueden derivarse de ellos.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {data.tiposAccidente.map((accidente) => (
                <Link
                  key={accidente.slug}
                  href={accidente.slug}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="font-semibold text-foreground">
                    {accidente.nombre}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Información y orientación sobre reclamaciones relacionadas
                    con este tipo de accidente.
                  </p>
                </Link>
              ))}

            </div>

          </section>

          {/* INDEMNIZACIONES */}
          <section className="mt-12">

            <h2 className="text-3xl font-bold text-foreground">
              ¿Qué indemnización puedes reclamar por un accidente en{" "}
              {data.nombre}?
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
              La indemnización depende de las circunstancias del accidente y
              de los daños y perjuicios que puedan acreditarse. Entre los
              conceptos que pueden analizarse se encuentran las lesiones,
              secuelas, daños materiales y determinados perjuicios económicos.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {data.indemnizaciones.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="font-semibold text-foreground">
                    {item.nombre}
                  </h3>
                </Link>
              ))}

            </div>

          </section>

          {/* LESIONES */}
          <section className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-foreground">
              Lesiones y secuelas tras un accidente de tráfico
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Las consecuencias de un accidente pueden variar
              considerablemente. Es importante conservar los informes médicos,
              partes de asistencia, documentación de rehabilitación y demás
              información relacionada con la evolución de las lesiones.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {data.lesiones.map((lesion) => (
                <div
                  key={lesion}
                  className="rounded-2xl bg-muted/40 px-5 py-4 text-sm font-medium text-foreground"
                >
                  {lesion}
                </div>
              ))}

            </div>

            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              Cada lesión debe analizarse individualmente atendiendo a su
              evolución, tratamiento, recuperación y posibles secuelas.
            </p>

          </section>

          {/* SERVICIOS */}
          <section className="mt-12">

            <h2 className="text-3xl font-bold text-foreground">
              Servicios jurídicos relacionados con accidentes de tráfico
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {servicios.map((servicio) => (
                <Link
                  key={servicio.slug}
                  href={servicio.slug}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="font-semibold text-foreground">
                    {servicio.nombre}
                  </h3>
                </Link>
              ))}

            </div>

          </section>

          {/* CÓMO TRABAJAMOS */}
          <section className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-foreground">
              ¿Cómo trabajamos?
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-4">

              {[
                {
                  numero: "01",
                  titulo: "Cuéntanos qué ocurrió",
                  texto:
                    "Recopilamos la información básica del accidente y de las lesiones.",
                },
                {
                  numero: "02",
                  titulo: "Estudiamos tu caso",
                  texto:
                    "Analizamos la documentación disponible y las circunstancias del siniestro.",
                },
                {
                  numero: "03",
                  titulo: "Gestionamos la reclamación",
                  texto:
                    "Te acompañamos durante la comunicación y reclamación frente a la aseguradora.",
                },
                {
                  numero: "04",
                  titulo: "Seguimos tu expediente",
                  texto:
                    "Mantenemos el seguimiento del procedimiento hasta su finalización.",
                },
              ].map((paso) => (
                <div key={paso.numero}>

                  <span className="text-sm font-bold text-primary">
                    {paso.numero}
                  </span>

                  <h3 className="mt-2 font-semibold text-foreground">
                    {paso.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {paso.texto}
                  </p>

                </div>
              ))}

            </div>

          </section>

          {/* LOCALIDADES */}
          {data.localidades.length > 0 && (
            <section className="mt-12">

              <h2 className="text-3xl font-bold text-foreground">
                Accidentes de tráfico en localidades de {data.nombre}
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                Atendemos consultas relacionadas con accidentes ocurridos en
                diferentes municipios de la provincia de {data.nombre}. La
                atención puede realizarse online y el tratamiento de cada
                expediente depende de sus circunstancias concretas.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {data.localidades.map((localidad) => (
                  <span
                    key={localidad}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                  >
                    {localidad}
                  </span>
                ))}

              </div>

            </section>
          )}

          {/* FAQ */}
          <section className="mt-12">

            <h2 className="text-3xl font-bold text-foreground">
              Preguntas frecuentes sobre accidentes de tráfico en{" "}
              {data.nombre}
            </h2>

            <div className="mt-6 space-y-4">

              {data.faqs.map((faq) => (
                <details
                  key={faq.pregunta}
                  className="rounded-3xl border border-border bg-card p-6"
                >

                  <summary className="cursor-pointer font-semibold text-foreground">
                    {faq.pregunta}
                  </summary>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {faq.respuesta}
                  </p>

                </details>
              ))}

            </div>

          </section>

          {/* CTA */}
          <section className="mt-12 rounded-3xl bg-primary p-8 text-primary-foreground shadow-sm">

            <h2 className="text-3xl font-bold">
              ¿Has sufrido un accidente de tráfico en {data.nombre}?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 opacity-90">
              Cuéntanos qué ha ocurrido. Nuestro equipo estudiará la información que nos facilites y contactará contigo en menos de 24 horas.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                href="tel:+34613781218"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-primary transition hover:opacity-90"
              >
                Llamar ahora
              </Link>

              <Link
                href="https://wa.me/34613781218"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </Link>

            </div>

          </section>

          {/* FORMULARIO */}
          <section className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="mt-6">
              <ContactForm />
            </div>
          </section>

        </section>
      </main>
    </>
  );
}