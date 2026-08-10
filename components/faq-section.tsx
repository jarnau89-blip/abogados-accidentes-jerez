const faqs = [
  {
    question: "¿Cuánto tiempo tengo para reclamar un accidente de tráfico?",
    answer:
      "Generalmente tienes un año desde la fecha del accidente para presentar una reclamación extrajudicial. Sin embargo, cada caso puede variar y conviene analizar la situación lo antes posible.",
  },
  {
    question: "¿Cuánto puede ser mi indemnización?",
    answer:
      "La cuantía depende de las lesiones, el tiempo de recuperación, las secuelas, el impacto en tu vida diaria y otros perjuicios. Nuestra calculadora ofrece una estimación orientativa, pero solo un análisis individual aporta una cifra fiable.",
  },
  {
    question: "¿Puedo reclamar si la aseguradora ya me ha hecho una oferta?",
    answer:
      "Sí. Las ofertas iniciales suelen ser bajas y pueden revisarse si cuentas con asesoramiento especializado que demuestre el alcance real de tus daños.",
  },
  {
    question: "¿Quién paga la rehabilitación?",
    answer:
      "La rehabilitación puede reclamarse como gasto indemnizable dentro del baremo y depende de la responsabilidad del accidente y de la cobertura de la póliza.",
  },
  {
    question: "¿Puedo reclamar siendo pasajero?",
    answer:
      "Sí, los pasajeros también tienen derecho a reclamar indemnización por lesiones y daños personales cuando sufren un accidente.",
  },
  {
    question: "¿Qué ocurre si el vehículo responsable no tiene seguro?",
    answer:
      "En ese caso puede intervenir el Consorcio de Compensación de Seguros y se estudian las acciones necesarias para reclamar la indemnización correspondiente.",
  },
  {
    question: "¿Necesito acudir presencialmente al despacho?",
    answer:
      "No es necesario. Podemos atender tu caso de forma telemática y presencial según tu preferencia y las necesidades del expediente.",
  },
  {
    question: "¿Cuánto cuesta contratar un abogado?",
    answer:
      "Trabajamos con un modelo sin adelantos y condicionado al resultado. La primera consulta es gratuita y no asumimos riesgos iniciales.",
  },
  {
    question: "¿Puedo reclamar por las secuelas?",
    answer:
      "Sí. Las secuelas permanentes se valoran con puntos en el baremo y pueden formar parte de la indemnización.",
  },
  {
    question: "¿Qué ocurre si no estoy de acuerdo con la indemnización de la aseguradora?",
    answer:
      "Podemos negociar una oferta mejor y, si no resulta suficiente, valorar las acciones judiciales que correspondan para defender tus derechos.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-background py-16 lg:py-24" id="faq">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Preguntas frecuentes sobre accidentes de tráfico
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
