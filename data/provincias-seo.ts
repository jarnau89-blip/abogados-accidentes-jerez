export interface ProvinciaSEO {
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
}

export const provinciasSEO: Record<string, ProvinciaSEO> = {
  cadiz: {
    nombre: "Cádiz",
    title:
      "Abogados de Accidentes de Tráfico en Cádiz | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Cádiz. Reclamamos indemnizaciones por lesiones, secuelas y daños frente a las aseguradoras.",
    h1: "Abogados especialistas en accidentes de tráfico en Cádiz",
    introduccion:
      "Si has sufrido un accidente de tráfico en Cádiz, nuestro equipo de abogados y tramitadores especializados puede estudiar tu caso y orientarte sobre la posible reclamación de una indemnización. Gestionamos expedientes relacionados con lesiones, secuelas, daños materiales y otros perjuicios derivados de accidentes de circulación, con atención durante todo el proceso.",
    localidades: [
      "Cádiz",
      "Jerez de la Frontera",
      "El Puerto de Santa María",
      "San Fernando",
      "Chiclana de la Frontera",
      "Algeciras",
      "Sanlúcar de Barrameda",
      "Puerto Real",
      "La Línea de la Concepción",
    ],
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
      "Lesiones de hombro",
      "Lesiones de rodilla",
      "Traumatismos",
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Puedo reclamar una indemnización por un accidente de tráfico ocurrido en Cádiz?",
        respuesta:
          "Las circunstancias del accidente, las lesiones sufridas y la documentación disponible determinan si existe derecho a reclamar y qué conceptos pueden ser objeto de indemnización. Es recomendable estudiar cada caso de forma individual.",
      },
      {
        pregunta:
          "¿Qué documentación necesito para reclamar un accidente de tráfico?",
        respuesta:
          "Puede ser útil disponer de documentación como el parte del accidente, informes médicos, partes de asistencia sanitaria, comunicaciones de la aseguradora y justificantes de gastos relacionados con el accidente.",
      },
      {
        pregunta:
          "¿Puedo reclamar si la aseguradora ya me ha ofrecido una indemnización?",
        respuesta:
          "Una oferta de la aseguradora no significa necesariamente que esa cantidad sea la que corresponda al conjunto de perjuicios sufridos. Antes de aceptarla puede ser conveniente que un profesional revise la documentación y el contenido de la oferta.",
      },
    ],
  },

  sevilla: {
    nombre: "Sevilla",
    title:
      "Abogados de Accidentes de Tráfico en Sevilla | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Sevilla. Reclamamos indemnizaciones por lesiones, secuelas y daños frente a las compañías aseguradoras.",
    h1: "Abogados especialistas en accidentes de tráfico en Sevilla",
    introduccion:
      "Si has sufrido un accidente de tráfico en Sevilla, puedes contar con un equipo especializado para estudiar las circunstancias del siniestro y valorar los daños y perjuicios que puedan ser reclamables. Gestionamos reclamaciones relacionadas con lesiones, secuelas, daños materiales y otros perjuicios derivados de accidentes de circulación.",
    localidades: [
      "Sevilla",
      "Dos Hermanas",
      "Alcalá de Guadaíra",
      "Utrera",
      "Mairena del Aljarafe",
      "Écija",
      "Camas",
      "La Rinconada",
      "Tomares",
      "San Juan de Aznalfarache",
    ],
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
      "Lesiones de hombro",
      "Lesiones de rodilla",
      "Traumatismos",
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Puedo reclamar una indemnización por un accidente de tráfico ocurrido en Sevilla?",
        respuesta:
          "La posibilidad de reclamar y la cuantía de una eventual indemnización dependen de las circunstancias concretas del accidente, las lesiones y los perjuicios acreditados.",
      },
      {
        pregunta:
          "¿Qué ocurre si la aseguradora me ofrece una cantidad por mis lesiones?",
        respuesta:
          "Antes de aceptar una oferta conviene comprobar qué conceptos incluye y si refleja adecuadamente las lesiones, el periodo de recuperación, las posibles secuelas y los demás perjuicios que puedan existir.",
      },
      {
        pregunta:
          "¿Necesito acudir presencialmente al despacho?",
        respuesta:
          "La gestión puede realizarse de forma online en muchos casos, aunque las necesidades concretas de cada expediente pueden variar.",
      },
    ],
  },

  malaga: {
    nombre: "Málaga",
    title:
      "Abogados de Accidentes de Tráfico en Málaga | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Málaga. Estudiamos tu caso y reclamamos lesiones, secuelas y daños frente a las aseguradoras.",
    h1: "Abogados especialistas en accidentes de tráfico en Málaga",
    introduccion:
      "Después de un accidente de tráfico en Málaga pueden surgir lesiones, gastos, daños materiales y otras consecuencias que deben ser valoradas. Nuestro equipo estudia las circunstancias del accidente y la documentación disponible para orientar la reclamación frente a la compañía aseguradora.",
    localidades: [
      "Málaga",
      "Marbella",
      "Mijas",
      "Fuengirola",
      "Torremolinos",
      "Benalmádena",
      "Vélez-Málaga",
      "Estepona",
      "Rincón de la Victoria",
      "Antequera",
    ],
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
      "Lesiones de hombro",
      "Lesiones de rodilla",
      "Traumatismos",
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Qué puedo reclamar después de un accidente de tráfico en Málaga?",
        respuesta:
          "Dependiendo de las circunstancias pueden existir diferentes conceptos reclamables, entre ellos lesiones, secuelas, daños materiales, gastos y otros perjuicios que puedan acreditarse.",
      },
      {
        pregunta:
          "¿Puedo reclamar si todavía estoy en rehabilitación?",
        respuesta:
          "La valoración de una reclamación debe tener en cuenta la evolución de las lesiones y las circunstancias concretas del expediente. Es importante conservar la documentación médica y de rehabilitación.",
      },
      {
        pregunta:
          "¿Qué ocurre si no estoy de acuerdo con la oferta de la aseguradora?",
        respuesta:
          "La oferta puede ser revisada para comprobar qué conceptos contempla y si resulta adecuada atendiendo a las circunstancias y perjuicios acreditados.",
      },
    ],
  },

  granada: {
    nombre: "Granada",
    title:
      "Abogados de Accidentes de Tráfico en Granada | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Granada. Reclamación de indemnizaciones por lesiones, secuelas y daños.",
    h1: "Abogados especialistas en accidentes de tráfico en Granada",
    introduccion:
      "Si has sufrido un accidente de tráfico en Granada, podemos estudiar las circunstancias del siniestro y la documentación médica y económica disponible para determinar qué perjuicios pueden ser objeto de reclamación.",
    localidades: [
      "Granada",
      "Armilla",
      "Maracena",
      "Albolote",
      "Atarfe",
      "Motril",
      "Baza",
      "Loja",
      "Santa Fe",
    ],
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
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Cómo se reclama una indemnización por accidente de tráfico en Granada?",
        respuesta:
          "La reclamación depende de las circunstancias del accidente y de los daños y perjuicios acreditados. Es necesario estudiar individualmente la documentación disponible.",
      },
      {
        pregunta:
          "¿Qué documentos debo conservar después de un accidente?",
        respuesta:
          "Es recomendable conservar la documentación del accidente, informes médicos, justificantes de gastos y las comunicaciones mantenidas con las aseguradoras.",
      },
    ],
  },

  cordoba: {
    nombre: "Córdoba",
    title:
      "Abogados de Accidentes de Tráfico en Córdoba | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Córdoba. Estudiamos lesiones, secuelas y daños para reclamar frente a las aseguradoras.",
    h1: "Abogados especialistas en accidentes de tráfico en Córdoba",
    introduccion:
      "Nuestro equipo puede estudiar los accidentes de tráfico ocurridos en Córdoba y valorar las lesiones, secuelas, daños materiales y demás perjuicios que puedan derivarse del siniestro.",
    localidades: [
      "Córdoba",
      "Lucena",
      "Puente Genil",
      "Montilla",
      "Priego de Córdoba",
      "Cabra",
      "Pozoblanco",
      "Palma del Río",
    ],
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
      "Lesiones musculares",
      "Traumatismos",
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Puedo reclamar una indemnización por un accidente de tráfico en Córdoba?",
        respuesta:
          "La existencia y alcance de una posible reclamación dependen de las circunstancias concretas del accidente y de los daños y perjuicios que puedan acreditarse.",
      },
      {
        pregunta:
          "¿Qué ocurre si la compañía de seguros rechaza mi reclamación?",
        respuesta:
          "La respuesta de la aseguradora puede ser revisada para determinar las razones del rechazo y las posibles vías de actuación según las circunstancias del expediente.",
      },
    ],
  },

  huelva: {
    nombre: "Huelva",
    title:
      "Abogados de Accidentes de Tráfico en Huelva | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Huelva. Reclamamos lesiones, secuelas y daños derivados de accidentes de circulación.",
    h1: "Abogados especialistas en accidentes de tráfico en Huelva",
    introduccion:
      "Si has sufrido un accidente de tráfico en Huelva, estudiamos las circunstancias del siniestro y la documentación disponible para valorar las posibles reclamaciones por lesiones, secuelas, daños materiales y otros perjuicios.",
    localidades: [
      "Huelva",
      "Lepe",
      "Almonte",
      "Ayamonte",
      "Isla Cristina",
      "Moguer",
      "Cartaya",
      "Punta Umbría",
    ],
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
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Qué puedo reclamar tras un accidente de tráfico en Huelva?",
        respuesta:
          "Dependiendo del caso pueden existir distintos conceptos reclamables. Es necesario estudiar las lesiones, los daños y las circunstancias concretas del accidente.",
      },
      {
        pregunta:
          "¿Necesito una valoración del caso antes de aceptar una oferta de la aseguradora?",
        respuesta:
          "Puede ser conveniente conocer qué conceptos incluye la oferta y compararlos con los perjuicios realmente sufridos antes de tomar una decisión.",
      },
    ],
  },

  jaen: {
    nombre: "Jaén",
    title:
      "Abogados de Accidentes de Tráfico en Jaén | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Jaén. Estudiamos tu caso y reclamamos lesiones, secuelas y daños frente a aseguradoras.",
    h1: "Abogados especialistas en accidentes de tráfico en Jaén",
    introduccion:
      "Nuestro equipo estudia las circunstancias de los accidentes de tráfico ocurridos en Jaén y analiza la documentación disponible para valorar las posibles indemnizaciones por lesiones, secuelas, daños materiales y otros perjuicios.",
    localidades: [
      "Jaén",
      "Linares",
      "Úbeda",
      "Andújar",
      "Martos",
      "Alcalá la Real",
      "Baeza",
      "Bailén",
    ],
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
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Cómo puedo reclamar una indemnización por accidente de tráfico en Jaén?",
        respuesta:
          "La reclamación depende de las circunstancias del accidente y de los daños y perjuicios que puedan acreditarse mediante documentación médica y de otro tipo.",
      },
      {
        pregunta:
          "¿Qué debo hacer si la aseguradora no está de acuerdo con mi reclamación?",
        respuesta:
          "Conviene revisar la posición de la aseguradora y la documentación disponible para determinar las opciones que correspondan al caso concreto.",
      },
    ],
  },

  almeria: {
    nombre: "Almería",
    title:
      "Abogados de Accidentes de Tráfico en Almería | Accidente Legal Abogados",
    description:
      "Abogados especialistas en accidentes de tráfico en Almería. Reclamamos indemnizaciones por lesiones, secuelas y daños derivados del accidente.",
    h1: "Abogados especialistas en accidentes de tráfico en Almería",
    introduccion:
      "Si has sufrido un accidente de tráfico en Almería, nuestro equipo puede estudiar las circunstancias del accidente, las lesiones y los perjuicios sufridos para orientarte sobre una posible reclamación frente a la compañía aseguradora.",
    localidades: [
      "Almería",
      "Roquetas de Mar",
      "El Ejido",
      "Níjar",
      "Adra",
      "Vera",
      "Huércal-Overa",
      "Vícar",
      "Mojácar",
    ],
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
      "Secuelas",
      "Perjuicio estético",
    ],
    faqs: [
      {
        pregunta:
          "¿Puedo reclamar una indemnización por un accidente de tráfico en Almería?",
        respuesta:
          "La posibilidad de reclamar depende de las circunstancias concretas del accidente y de los daños y perjuicios que puedan acreditarse.",
      },
      {
        pregunta:
          "¿Qué información debo aportar para estudiar mi accidente?",
        respuesta:
          "Es útil aportar la documentación del accidente, informes médicos, comunicaciones de las aseguradoras y justificantes de gastos relacionados con el siniestro.",
      },
    ],
  },
};