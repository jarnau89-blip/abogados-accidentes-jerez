export const ACCIDENTE_PAGES = {
  "accidente-coche": {
    nombre: "Accidente de coche",
    descripcion:
      "Reclamamos indemnizaciones por accidentes de coche, incluyendo lesiones, daños materiales y perjuicios económicos.",
    parrafos: [
      "En accidentes de coche estamos especializados en analizar la responsabilidad y la oferta de la aseguradora para que no aceptes una indemnización insuficiente.",
      "Revisamos las lesiones, el vehículo afectado, los testigos y cualquier documento médico para preparar una reclamación sólida.",
    ],
  },
  "accidente-moto": {
    nombre: "Accidente de moto",
    descripcion:
      "Asesoramos a motoristas tras accidentes de moto para reclamar indemnizaciones por lesiones, secuelas y daños materiales.",
    parrafos: [
      "Los accidentes de moto suelen provocar lesiones de mayor gravedad. Nuestro equipo revisa cada detalle médico y pericial para valorar tu reclamación.",
      "Ayudamos a reclamar el importe adecuado por lesiones, gastos médicos y perjuicios derivados de la falta de movilidad.",
    ],
  },
  atropello: {
    nombre: "Atropello",
    descripcion:
      "Defendemos a peatones y ciclistas atropellados para reclamar la indemnización que les corresponde.",
    parrafos: [
      "Los atropellos exigen un análisis exhaustivo de la responsabilidad y de las lesiones sufridas por la víctima.",
      "Trabajamos con informes médicos y peritos para acreditar el alcance del daño y reclamar los daños personales adecuados.",
    ],
  },
  "accidente-bicicleta": {
    nombre: "Accidente de bicicleta",
    descripcion:
      "Reclamamos indemnizaciones por accidentes de bicicleta, tanto por colisiones como por atropellos.",
    parrafos: [
      "Las lesiones en bicicleta pueden provocar secuelas y perjuicios importantes. Estudiamos el accidente para demostrar la responsabilidad.",
      "Reclamamos los gastos médicos, la pérdida de ingresos y el perjuicio estético cuando procede.",
    ],
  },
  "accidente-patinete": {
    nombre: "Accidente con patinete",
    descripcion:
      "Atendemos reclamaciones por accidentes con patinete eléctrico, especialmente cuando existe responsabilidad de vehículos a motor.",
    parrafos: [
      "Los accidentes con patinete suelen implicar desplazamientos urbanos y atención médica urgente.",
      "Analizamos la documentación del siniestro y la cobertura de la aseguradora para reclamar la indemnización justa.",
    ],
  },
  "accidente-pasajero": {
    nombre: "Accidente como pasajero",
    descripcion:
      "Reclamamos compensaciones para pasajeros lesionados en accidentes de tráfico, independientemente de quién conducía.",
    parrafos: [
      "Los pasajeros afectados tienen derecho a reclamar daños personales y perjuicios económicos.",
      "Revisamos la situación del siniestro y negociamos con los seguros responsables para proteger tus derechos.",
    ],
  },
  "vehiculo-sin-seguro": {
    nombre: "Vehículo sin seguro",
    descripcion:
      "Gestionamos reclamaciones cuando el vehículo responsable no tiene seguro o es un conductor no identificado.",
    parrafos: [
      "Si el vehículo responsable carece de seguro, estudiamos si es posible reclamar al Consorcio de Compensación de Seguros.",
      "Te asesoramos sobre las opciones disponibles y la documentación necesaria para solicitar indemnización.",
    ],
  },
  "accidente-in-itinere": {
    nombre: "Accidente laboral o in itinere",
    descripcion:
      "Asesoramos en accidentes laborales y de trayecto con especialización en responsabilidad civil y laboral.",
    parrafos: [
      "Los accidentes laborales y de trayecto pueden dar lugar a reclamaciones mixtas ante la empresa y aseguradoras.",
      "Analizamos si corresponde una reclamación por responsabilidad civil o prestaciones por contingencias profesionales.",
    ],
  },
} as const;

export type AccidenteSlug = keyof typeof ACCIDENTE_PAGES;