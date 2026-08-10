export const BAREMO_YEAR = 2026;

export const BAREMO_PRECIOS = {
  basico: 39.2,
  moderado: 67.96,
  grave: 98.02,
  muygrave: 130.69,
} as const;

export const BAREMO_LABELS = {
  basico: "Básico (tratamiento sin baja y con rehabilitación)",
  moderado: "Moderado (baja + rehabilitación)",
  grave: "Grave (hospitalización)",
  muygrave: "Muy grave (UCI/intervenciones)",
} as const;

export const BAREMO_ITEMS = [
  {
    label: "Días de baja (perjuicio básico)",
    value: "~39 €/día",
    description: "Por cada día de incapacidad temporal en el baremo actual.",
  },
  {
    label: "Días de baja (moderado)",
    value: "~68 €/día",
    description: "Cuando la lesión impide la ocupación habitual de la víctima.",
  },
  {
    label: "Días de baja (grave)",
    value: "~98 €/día",
    description: "Lesiones que requieren hospitalización o intervención.",
  },
  {
    label: "Puntos por secuelas",
    value: "779-1.176 €/pto",
    description: "Según gravedad, edad y estado anterior del lesionado.",
  },
] as const;
