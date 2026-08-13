interface FAQ {
  pregunta: string;
  respuesta: string;
}

interface Lesion {
  nombre: string;
  descripcion: string;
}

interface Indemnizacion {
  nombre: string;
  descripcion: string;
  slug?: string;
}

interface TipoAccidente {
  nombre: string;
  descripcion: string;
  slug: string;
}

export interface ProvinciaSEO {
  nombre: string;
  title: string;
  description: string;
  h1: string;
  introduccion: string;
  introduccionProvincial: string[];
  localidades: string[];
  tiposAccidente: TipoAccidente[];
  indemnizaciones: Indemnizacion[];
  lesiones: (Lesion | string)[]; // Acepta el formato antiguo para retrocompatibilidad
  faqs: FAQ[];
}

export const provinciasSEO: Record<string, ProvinciaSEO> = {
  cadiz: {
    nombre: "Cádiz",
    title:
      "Abogados de Accidentes de Tráfico en Cádiz | Indemnizaciones",
    description: "Abogados especialistas en accidentes de tráfico en la provincia de Cádiz. Analizamos tu caso para reclamar la indemnización que pueda corresponder por lesiones, secuelas y daños. Ofrecemos atención en Jerez, Algeciras y toda la provincia.", // Mantengo la descripción actualizada
    h1: "Abogados especialistas en accidentes de tráfico en Cádiz",
    introduccion: "Si has sufrido un accidente de tráfico en Cádiz, nuestro equipo de abogados especialistas analiza tu caso. Estudiamos las lesiones, secuelas, daños materiales y perjuicios económicos para valorar la reclamación frente a la aseguradora y defender tus intereses. Ofrecemos atención online en toda la provincia.",
    introduccionProvincial: [
      "Un accidente de tráfico en la provincia de Cádiz puede tener consecuencias significativas, desde lesiones que requieren rehabilitación hasta daños en el vehículo y perjuicios económicos. En Accidente Legal Abogados, analizamos cada expediente de forma individual para que todos los daños puedan ser valorados. Es fundamental conservar toda la documentación, como el parte de accidente, informes médicos y facturas, para fundamentar la reclamación.",
      "Nos encargamos de la gestión con las compañías aseguradoras, defendiendo tus intereses para reclamar la indemnización que pueda corresponder. Prestamos servicio en toda la provincia, ya sea en Cádiz capital, Jerez de la Frontera, Algeciras o cualquier otra localidad, con la posibilidad de gestionar tu caso a distancia.",
    ],
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
        descripcion:
          "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion:
          "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación frente a la aseguradora.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion:
          "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion:
          "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion:
          "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion:
          "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion:
          "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Secuelas",
        descripcion:
          "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion:
          "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion:
          "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
      },
      {
        nombre: "Lucro cesante",
        descripcion:
          "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion:
          "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
    ],
    lesiones: [
      {
        nombre: "Latigazo cervical",
        descripcion:
          "Lesión frecuente en colisiones, cuya valoración depende de su evolución, tratamiento y posibles secuelas.",
      },
      {
        nombre: "Fracturas",
        descripcion:
          "Roturas óseas que requieren un análisis detallado del tiempo de curación y las limitaciones que puedan generar.",
      },
      {
        nombre: "Lesiones de hombro",
        descripcion:
          "Afectaciones como tendinitis o roturas de manguito rotador que pueden limitar la movilidad de forma permanente.",
      },
      {
        nombre: "Lesiones de rodilla",
        descripcion:
          "Desde esguinces hasta roturas de ligamentos o menisco, con un impacto significativo en la calidad de vida.",
      },
      {
        nombre: "Traumatismos",
        descripcion:
          "Golpes y contusiones que, aunque no generen fracturas, pueden requerir tratamiento y causar dolor persistente.",
      },
      {
        nombre: "Secuelas",
        descripcion:
          "Dolores crónicos, limitaciones de movilidad o cicatrices que persisten tras el alta y son indemnizables.",
      },
    ],
    faqs: [
      {
        pregunta:
          "¿Puedo reclamar una indemnización por un accidente de tráfico ocurrido en Cádiz?",
        respuesta:
          "Sí, siempre que no seas el responsable exclusivo del accidente. La viabilidad de la reclamación depende de las circunstancias del siniestro, las lesiones sufridas y la documentación que se pueda aportar. Es fundamental analizar cada caso para determinar los conceptos indemnizables.",
      },
      {
        pregunta:
          "¿Qué documentación necesito para reclamar un accidente de tráfico?",
        respuesta:
          "Es muy importante conservar toda la documentación: el parte amistoso o atestado policial, informes de urgencias, partes de baja y alta médica, informes de rehabilitación, facturas de gastos (farmacia, fisioterapia, desplazamientos) y cualquier comunicación con las aseguradoras.",
      },
      {
        pregunta:
          "¿Puedo reclamar si la aseguradora ya me ha ofrecido una indemnización?",
        respuesta:
          "Sí, y es muy recomendable hacerlo. Las ofertas iniciales de las aseguradoras suelen ser a la baja y pueden no contemplar todos los perjuicios sufridos. Antes de aceptar, es conveniente que un abogado especialista revise la oferta y la documentación para asegurarse de que es justa.",
      },
      {
        pregunta: "¿Cuánto tiempo tengo para reclamar una indemnización?",
        respuesta:
          "El plazo general para reclamar judicialmente por la vía civil es de un año desde el alta médica definitiva. Sin embargo, existen otros plazos y acciones posibles. Por ello, es aconsejable iniciar los trámites lo antes posible para no perder ningún derecho.",
      },
      {
        pregunta: "¿Puedo reclamar si viajaba como pasajero en Cádiz?",
        respuesta:
          "Sí. Los pasajeros que sufren lesiones en un accidente de tráfico casi siempre tienen derecho a una indemnización, independientemente de quién fuera el conductor culpable. La reclamación se dirige contra la aseguradora del vehículo responsable.",
      },
      {
        pregunta: "¿Qué ocurre si el vehículo responsable se da a la fuga o no tiene seguro?",
        respuesta:
          "En esos casos, la reclamación se puede dirigir contra el Consorcio de Compensación de Seguros, un organismo público que cubre las indemnizaciones por lesiones cuando el responsable es desconocido o no está asegurado. Es un procedimiento con particularidades, por lo que el asesoramiento es clave.",
      },
      {
        pregunta: "¿Necesito acudir presencialmente al despacho?",
        respuesta:
          "No es necesario. Gestionamos reclamaciones en toda la provincia de Cádiz y el resto de España de forma telemática. Puedes enviarnos la documentación por email o WhatsApp y mantenemos un contacto constante por teléfono para tu comodidad.",
      },
    ],
  },

  sevilla: {
    nombre: "Sevilla",
    title:
      "Abogados de Accidentes de Tráfico en Sevilla | Indemnizaciones",
    description: "¿Has sufrido un accidente de tráfico en Sevilla? Somos abogados especialistas en la reclamación de indemnizaciones frente a aseguradoras. Estudiamos las lesiones y los daños para defender tus intereses. Consulta tu caso.", // Mantengo la descripción actualizada
    h1: "Abogados especialistas en accidentes de tráfico en Sevilla",
    introduccion: "Si has sufrido un accidente de tráfico en Sevilla, nuestro equipo de abogados especialistas valora las consecuencias del siniestro. Analizamos las lesiones, secuelas y daños materiales para orientar la reclamación frente a la aseguradora y defender tus intereses. Ofrecemos atención online en toda la provincia.",
    introduccionProvincial: [
      "Las consecuencias de un accidente en la provincia de Sevilla pueden ir desde lesiones que requieren rehabilitación hasta daños materiales y perjuicios económicos. En Accidente Legal Abogados, estudiamos cada caso de forma personalizada para que todos los daños sean valorados. Entendemos el impacto que un siniestro puede tener en tu vida y nos enfocamos en analizar las posibilidades de reclamación.",
      "Gestionamos la comunicación con las compañías de seguros para defender tus derechos, ya sea por un accidente en Sevilla capital, Dos Hermanas o cualquier municipio. Puedes iniciar los trámites y realizar el seguimiento a distancia, sin necesidad de desplazamientos.",
    ],
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
        descripcion:
          "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion:
          "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación frente a la aseguradora.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion:
          "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion:
          "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion:
          "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion:
          "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion:
          "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Secuelas",
        descripcion:
          "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion:
          "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion:
          "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
      },
      {
        nombre: "Lucro cesante",
        descripcion:
          "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion:
          "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
    ],
    lesiones: [
      {
        nombre: "Latigazo cervical",
        descripcion:
          "Lesión frecuente en colisiones, cuya valoración depende de su evolución, tratamiento y posibles secuelas.",
      },
      {
        nombre: "Fracturas",
        descripcion:
          "Roturas óseas que requieren un análisis detallado del tiempo de curación y las limitaciones que puedan generar.",
      },
      {
        nombre: "Lesiones de hombro",
        descripcion:
          "Afectaciones como tendinitis o roturas de manguito rotador que pueden limitar la movilidad de forma permanente.",
      },
      {
        nombre: "Lesiones de rodilla",
        descripcion:
          "Desde esguinces hasta roturas de ligamentos o menisco, con un impacto significativo en la calidad de vida.",
      },
      {
        nombre: "Traumatismos",
        descripcion:
          "Golpes y contusiones que, aunque no generen fracturas, pueden requerir tratamiento y causar dolor persistente.",
      },
      {
        nombre: "Secuelas",
        descripcion:
          "Dolores crónicos, limitaciones de movilidad o cicatrices que persisten tras el alta y son indemnizables.",
      },
    ],
    faqs: [
      {
        pregunta:
          "¿Puedo reclamar una indemnización por un accidente de tráfico ocurrido en Sevilla?",
        respuesta:
          "Sí, si no eres el culpable único del accidente, tienes derecho a reclamar. La cuantía y viabilidad dependen de cómo ocurrió el siniestro, las lesiones que sufriste y la documentación que lo acredite. Estudiamos cada caso para darte una orientación clara.",
      },
      {
        pregunta:
          "¿Qué ocurre si la aseguradora me ofrece una cantidad por mis lesiones?",
        respuesta:
          "Es crucial no aceptar la primera oferta sin asesoramiento. Las aseguradoras suelen ofrecer cantidades inferiores a las que corresponden. Un abogado especialista puede valorar si la oferta incluye todos los conceptos (lesiones, secuelas, gastos, lucro cesante) y negociar una cantidad justa.",
      },
      {
        pregunta:
          "¿Necesito acudir presencialmente al despacho?",
        respuesta:
          "No, no es imprescindible. Ofrecemos un servicio completo a distancia para toda la provincia de Sevilla. Puedes contactarnos y enviar la documentación por WhatsApp o correo electrónico, y te mantendremos informado por teléfono durante todo el proceso.",
      },
      {
        pregunta: "¿Qué documentación es importante guardar tras un accidente en Sevilla?",
        respuesta:
          "Conserva todo: el parte amistoso o atestado, informes médicos de urgencias y seguimiento, partes de baja, facturas de farmacia o rehabilitación y cualquier comunicación que recibas de la aseguradora. Todo ello es fundamental para fundamentar la reclamación.",
      },
      {
        pregunta: "¿Puedo reclamar por un atropello en Sevilla?",
        respuesta:
          "Sí. Los peatones son considerados usuarios vulnerables y, salvo en casos de culpa exclusiva de la víctima, tienen derecho a ser indemnizados por sus lesiones y perjuicios. Analizamos la dinámica del atropello para defender tus derechos.",
      },
      {
        pregunta: "¿La reclamación tiene algún coste inicial?",
        respuesta:
          "No. La primera consulta y el estudio de viabilidad de tu caso son gratuitos. Trabajamos a porcentaje de la indemnización que finalmente obtengas, por lo que solo cobramos si tú ganas. No tienes que adelantar ninguna cantidad.",
      },
      {
        pregunta: "¿Qué se considera una secuela indemnizable?",
        respuesta:
          "Una secuela es cualquier dolor, limitación de movilidad, cicatriz o perjuicio estético que permanece una vez has recibido el alta médica. Estas secuelas se valoran según un baremo legal y suponen una parte importante de la indemnización total.",
      },
    ],
  },

  malaga: {
    nombre: "Málaga",
    title:
      "Abogados de Accidentes de Tráfico en Málaga | Indemnizaciones",
    description: "Abogados para accidentes de circulación en Málaga. Si has sufrido lesiones o daños en un accidente, valoramos los conceptos indemnizables y gestionamos la reclamación. Asesoramiento en Marbella, Fuengirola y toda la provincia.", // Mantengo la descripción actualizada
    h1: "Abogados especialistas en accidentes de tráfico en Málaga",
    introduccion: "Tras un accidente de tráfico en Málaga, nuestro equipo de abogados especialistas estudia tu caso. Analizamos las lesiones, secuelas y daños para dirigir la reclamación frente a la aseguradora y te orientamos sobre las posibilidades de la misma. Ofrecemos atención online en toda la provincia.",
    introduccionProvincial: [
      "Un accidente en la provincia de Málaga puede acarrear lesiones que necesiten rehabilitación, secuelas y daños materiales. En Accidente Legal Abogados, analizamos tu expediente de manera individual para que todos los perjuicios puedan ser valorados. Desde el primer momento, nos enfocamos en recopilar la información necesaria para construir una reclamación fundamentada.",
      "Nos ocupamos de la reclamación frente a las aseguradoras, defendiendo tus intereses en toda la provincia, desde Málaga capital hasta Marbella o Vélez-Málaga. Puedes gestionar tu caso a distancia para tu comodidad.",
    ],
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
        descripcion:
          "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion:
          "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación frente a la aseguradora.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion:
          "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion:
          "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion:
          "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion:
          "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion:
          "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Secuelas",
        descripcion:
          "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion:
          "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion:
          "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
      },
      {
        nombre: "Lucro cesante",
        descripcion:
          "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion:
          "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
    ],
    lesiones: [
      {
        nombre: "Latigazo cervical",
        descripcion:
          "Lesión frecuente en colisiones, cuya valoración depende de su evolución, tratamiento y posibles secuelas.",
      },
      {
        nombre: "Fracturas",
        descripcion:
          "Roturas óseas que requieren un análisis detallado del tiempo de curación y las limitaciones que puedan generar.",
      },
      {
        nombre: "Lesiones de hombro",
        descripcion:
          "Afectaciones como tendinitis o roturas de manguito rotador que pueden limitar la movilidad de forma permanente.",
      },
      {
        nombre: "Lesiones de rodilla",
        descripcion:
          "Desde esguinces hasta roturas de ligamentos o menisco, con un impacto significativo en la calidad de vida.",
      },
      {
        nombre: "Traumatismos",
        descripcion:
          "Golpes y contusiones que, aunque no generen fracturas, pueden requerir tratamiento y causar dolor persistente.",
      },
      {
        nombre: "Secuelas",
        descripcion:
          "Dolores crónicos, limitaciones de movilidad o cicatrices que persisten tras el alta y son indemnizables.",
      },
    ],
    faqs: [
      {
        pregunta:
          "¿Qué puedo reclamar después de un accidente de tráfico en Málaga?",
        respuesta:
          "Puedes reclamar varios conceptos: la indemnización por los días de curación de tus lesiones, las secuelas permanentes, los gastos médicos y de rehabilitación, los daños de tu vehículo o pertenencias, y el lucro cesante si has perdido ingresos por estar de baja.",
      },
      {
        pregunta:
          "¿Puedo reclamar si todavía estoy en rehabilitación?",
        respuesta:
          "Sí, de hecho es lo más recomendable. No se debe cerrar una reclamación hasta que las lesiones se hayan curado o estabilizado y se conozca el alcance real de las secuelas. Es fundamental seguir el tratamiento y guardar todos los informes médicos.",
      },
      {
        pregunta:
          "¿Qué ocurre si no estoy de acuerdo con la oferta de la aseguradora?",
        respuesta:
          "No tienes por qué aceptarla. Si la oferta es insuficiente, un abogado especialista puede negociar con la aseguradora para mejorarla, aportando la documentación médica y pericial necesaria. Si no se llega a un acuerdo, se puede valorar la vía judicial.",
      },
      {
        pregunta: "¿Qué documentación necesito para reclamar?",
        respuesta:
          "Es clave guardar el parte de accidente o atestado, todos los informes médicos (urgencias, especialistas, rehabilitación), partes de baja laboral, y facturas de cualquier gasto derivado del accidente (medicamentos, taxis para ir al médico, etc.).",
      },
      {
        pregunta: "¿Puedo reclamar si viajaba como pasajero en un coche o moto?",
        respuesta:
          "Sí. Los pasajeros tienen derecho a ser indemnizados por sus lesiones, y la reclamación se dirige a la aseguradora del vehículo responsable del accidente. Tu derecho a reclamar está casi siempre garantizado.",
      },
      {
        pregunta: "¿Y si he tenido un accidente de moto en Málaga?",
        respuesta:
          "Los motoristas son especialmente vulnerables. Reclamamos tanto las lesiones, que suelen ser más graves, como los daños en la moto, el casco y el equipamiento. Analizamos la dinámica del accidente para defender tu caso frente a la aseguradora.",
      },
      {
        pregunta: "¿Necesito acudir presencialmente al despacho?",
        respuesta:
          "No es necesario. Ofrecemos atención en toda la provincia de Málaga y a nivel nacional de forma telemática. Podemos gestionar todo tu expediente a través de teléfono, email y WhatsApp para tu máxima comodidad.",
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
    introduccionProvincial: [
      "Un accidente de tráfico en Granada puede generar numerosas dudas sobre los pasos a seguir. Es importante valorar correctamente tanto las lesiones sufridas como los daños materiales para poder fundamentar una reclamación adecuada frente a la aseguradora.",
      "Nuestro equipo analiza la documentación de cada siniestro para defender los intereses de la persona perjudicada. Ofrecemos atención a distancia en toda la provincia, desde la capital hasta la costa o el interior, para facilitar la gestión del expediente.",
    ],
    localidades: [
      "Granada",
      "Armilla",
      "Maracena", // Added
      "Albolote", // Added
      "Atarfe", // Added
      "Motril", // Added
      "Baza", // Added
      "Loja", // Added
      "Santa Fe", // Added
    ],
    tiposAccidente: [
      {
        nombre: "Accidente de coche",
        descripcion: "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion: "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion: "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion: "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion: "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion: "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion:
          "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Indemnización por secuelas",
        descripcion: "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Lucro cesante",
        descripcion: "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion: "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion: "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion: "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
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
    introduccionProvincial: [
      "Las consecuencias de un accidente de tráfico en Córdoba pueden ser complejas. Es importante valorar no solo las lesiones físicas, sino también los perjuicios económicos y morales. Nuestro equipo analiza cada caso para fundamentar una reclamación sólida.",
      "Gestionamos la comunicación con las aseguradoras para defender tus derechos. Ofrecemos nuestros servicios en toda la provincia de Córdoba, con la posibilidad de gestionar tu caso a distancia para tu comodidad.",
    ],
    localidades: [
      "Córdoba",
      "Lucena",
      "Puente Genil", // Added
      "Montilla", // Added
      "Priego de Córdoba", // Added
      "Cabra", // Added
      "Pozoblanco", // Added
      "Palma del Río", // Added
    ],
    tiposAccidente: [
      {
        nombre: "Accidente de coche",
        descripcion: "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion: "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion: "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion: "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion: "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion: "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion: "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Indemnización por secuelas",
        descripcion: "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Lucro cesante",
        descripcion: "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion: "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion: "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion: "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
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
    introduccionProvincial: [
      "Un siniestro vial en Huelva puede alterar tu día a día. Desde las lesiones que requieren tratamiento hasta los daños en tu vehículo, cada perjuicio cuenta. Estudiamos la documentación para orientar la reclamación frente a la aseguradora.",
      "Nos encargamos de la gestión con las compañías de seguros, defendiendo tus intereses para reclamar la indemnización que pueda corresponder. Prestamos servicio en toda la provincia de Huelva, con la posibilidad de gestionar tu caso a distancia.",
    ],
    localidades: [
      "Huelva",
      "Lepe",
      "Almonte", // Added
      "Ayamonte", // Added
      "Isla Cristina", // Added
      "Moguer", // Added
      "Cartaya", // Added
      "Punta Umbría", // Added
    ],
    tiposAccidente: [
      {
        nombre: "Accidente de coche",
        descripcion: "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion: "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion: "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion: "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion: "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion: "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion: "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Indemnización por secuelas",
        descripcion: "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Lucro cesante",
        descripcion: "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion: "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion: "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion: "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
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
    introduccionProvincial: [
      "Tras un accidente de tráfico en Jaén, es fundamental una correcta valoración de todos los daños sufridos. Analizamos la documentación médica y pericial para asegurar que la reclamación contempla todos los conceptos indemnizables.",
      "Defendemos tus intereses frente a la compañía aseguradora, gestionando las comunicaciones y negociaciones necesarias. Ofrecemos atención online en toda la provincia de Jaén para facilitar el proceso.",
    ],
    localidades: [
      "Jaén",
      "Linares",
      "Úbeda", // Added
      "Andújar", // Added
      "Martos", // Added
      "Alcalá la Real", // Added
      "Baeza", // Added
      "Bailén", // Added
    ],
    tiposAccidente: [
      {
        nombre: "Accidente de coche",
        descripcion: "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion: "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion: "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion: "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion: "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion: "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion: "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Indemnización por secuelas",
        descripcion: "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Lucro cesante",
        descripcion: "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion: "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion: "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion: "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
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
    introduccionProvincial: [
      "Un accidente de circulación en Almería puede generar dudas sobre los pasos a seguir. Analizamos la responsabilidad y los daños para ofrecer una orientación clara sobre las posibilidades de reclamación.",
      "Gestionamos el expediente frente a la aseguradora, buscando defender tus derechos en relación con las lesiones, secuelas y otros perjuicios acreditados. Prestamos servicio a distancia en toda la provincia.",
    ],
    localidades: [
      "Almería",
      "Roquetas de Mar",
      "El Ejido", // Added
      "Níjar", // Added
      "Adra", // Added
      "Vera", // Added
      "Huércal-Overa", // Added
      "Vícar", // Added
      "Mojácar", // Added
    ],
    tiposAccidente: [
      {
        nombre: "Accidente de coche",
        descripcion: "Reclamamos indemnizaciones por lesiones, secuelas y daños derivados de accidentes entre vehículos.",
        slug: "/accidentes/accidente-coche",
      },
      {
        nombre: "Accidente de moto",
        descripcion: "Estudiamos las lesiones y consecuencias de accidentes de motocicleta y gestionamos la reclamación.",
        slug: "/accidentes/accidente-moto",
      },
      {
        nombre: "Atropello",
        descripcion: "Analizamos las lesiones y perjuicios sufridos por peatones atropellados y las posibles indemnizaciones.",
        slug: "/accidentes/atropello",
      },
      {
        nombre: "Accidente de bicicleta",
        descripcion: "Reclamamos los daños y lesiones sufridos por ciclistas en accidentes de circulación.",
        slug: "/accidentes/accidente-bicicleta",
      },
      {
        nombre: "Accidente con patinete",
        descripcion: "Estudiamos accidentes con patinetes eléctricos y las responsabilidades que puedan existir.",
        slug: "/accidentes/accidente-patinete",
      },
      {
        nombre: "Accidente como pasajero",
        descripcion: "Los pasajeros lesionados también pueden tener derecho a reclamar una indemnización por las lesiones sufridas.",
        slug: "/accidentes/accidente-pasajero",
      },
    ],
    indemnizaciones: [
      {
        nombre: "Indemnización por lesiones",
        descripcion: "Compensación por los días de recuperación, desde el perjuicio personal básico hasta el moderado o grave.",
        slug: "/indemnizaciones/lesiones",
      },
      {
        nombre: "Indemnización por secuelas",
        descripcion: "Valoración de las limitaciones o dolores permanentes que quedan tras el alta médica, según el baremo oficial.",
        slug: "/indemnizaciones/secuelas",
      },
      {
        nombre: "Lucro cesante",
        descripcion: "Compensación por la pérdida de ingresos que sufre la víctima durante el periodo de baja laboral o incapacidad.",
        slug: "/indemnizaciones/lucro-cesante",
      },
      {
        nombre: "Daños materiales",
        descripcion: "Reclamación del coste de reparación del vehículo, su valor venal o el valor de otros objetos dañados en el siniestro.",
        slug: "/indemnizaciones/danos-materiales",
      },
      {
        nombre: "Gastos médicos y de rehabilitación",
        descripcion: "Reclamación de los costes de tratamientos, farmacia, fisioterapia y otras terapias necesarias para la recuperación.",
      },
      {
        nombre: "Perjuicio estético",
        descripcion: "Indemnización adicional cuando el accidente provoca cicatrices, cojeras u otras alteraciones físicas visibles.",
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