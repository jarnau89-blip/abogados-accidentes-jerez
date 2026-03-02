"use client";

import { useState } from "react";
import { Calculator, Shield, Clock, CheckCircle2, Hospital, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const secuelasOptions = [
  { value: "0", label: "Sin secuelas", puntos: 0 },
  { value: "1", label: "Leves (1-5 puntos)", puntos: 3 },
  { value: "2", label: "Moderadas (6-15 puntos)", puntos: 10 },
  { value: "3", label: "Graves (16-30 puntos)", puntos: 23 },
  { value: "4", label: "Muy graves (31+ puntos)", puntos: 40 },
];

const PRECIOS_2026 = {
  basico: 39.2,      // días sin baja/rehabilitación [web:3][page:0]
  moderado: 67.96,   // días con baja/rehabilitación [web:3][page:0]
  grave: 98.02,      // días hospitalización [web:3][page:0]
  muygrave: 130.69,  // UCI/intervenciones graves [web:3][page:0]
};
const PRECIO_PUNTO_SECUELA = 900;  // Aproximado baremo 2026 [web:3]

export function HeroCalculator() {
  const [dias, setDias] = useState("");
  const [perjuicio, setPerjuicio] = useState("");
  const [secuelas, setSecuelas] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [resultadoBreakdown, setResultadoBreakdown] = useState<{[key: string]: number} | null>(null);

  function calcular() {
    const numDias = Number.parseInt(dias) || 0;
    const tipoPerjuicio = perjuicio;
    const secuelaSeleccionada = secuelasOptions.find((s) => s.value === secuelas);
    const puntos = secuelaSeleccionada?.puntos || 0;

    const precioDia = PRECIOS_2026[tipoPerjuicio as keyof typeof PRECIOS_2026] || 0;
    const indemnizacionTemporal = numDias * precioDia;
    const indemnizacionSecuelas = puntos * PRECIO_PUNTO_SECUELA;
    const total = indemnizacionTemporal + indemnizacionSecuelas;

    setResultadoBreakdown({
      temporal: indemnizacionTemporal,
      secuelas: indemnizacionSecuelas,
      total,
    });
    setResultado(total);
  }

  const perjuicioLabels = {
    basico: "Básico (tratamiento sin baja)",
    moderado: "Moderado (baja + rehabilitación)",
    grave: "Grave (hospitalización)",
    muygrave: "Muy grave (UCI/intervenciones)",
  };

  return (
    <section 
      id="inicio" 
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen"
      style={{
        backgroundImage: `url('/generated-image-4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              Primera consulta 100% gratuita
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
              Accidente Legal Abogados
            </h1>
            <p className="mb-8 max-w-lg text-pretty text-lg leading-relaxed text-white/90 lg:text-xl drop-shadow-md">
              Máxima indemnización sin adelantos y ni riesgos. Sólo cobramos si tu cobras.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-white/80 drop-shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-white" />
                Sin coste inicial
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80 drop-shadow-sm">
                <Clock className="h-4 w-4 text-white" />
                Horario de atención al público de (8:00 a 15:00) de lunes a viernes
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80 drop-shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-white" />
                +500 casos ganados
              </div>
            </div>
          </div>

          {/* Calculator card */}
          <div
            id="calculadora"
            className="mx-auto w-full max-w-md rounded-2xl border border-white/20 bg-white/95 backdrop-blur-xl p-6 shadow-2xl lg:p-8 drop-shadow-2xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Calculadora de indemnización
                </h2>
                <p className="text-sm text-gray-600">
                  Estimación orientativa basada en el baremo 2026 [web:3]
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="dias" className="text-sm font-medium text-gray-900">
                  Días de curación / baja
                </Label>
                <Input
                  id="dias"
                  type="number"
                  min="0"
                  placeholder="Ej: 30"
                  value={dias}
                  onChange={(e) => setDias(e.target.value)}
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="perjuicio" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Tipo de perjuicio (baremo 2026) [web:3][page:0]
                </Label>
                <Select value={perjuicio} onValueChange={setPerjuicio}>
                  <SelectTrigger id="perjuicio" className="bg-gray-50 border-gray-200 focus:ring-blue-500">
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(perjuicioLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label} ({PRECIOS_2026[value as keyof typeof PRECIOS_2026].toFixed(2)}€/día)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="secuelas" className="text-sm font-medium text-gray-900">
                  Gravedad de las secuelas
                </Label>
                <Select value={secuelas} onValueChange={setSecuelas}>
                  <SelectTrigger id="secuelas" className="bg-gray-50 border-gray-200 focus:ring-blue-500">
                    <SelectValue placeholder="Selecciona gravedad" />
                  </SelectTrigger>
                  <SelectContent>
                    {secuelasOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calcular}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                size="lg"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calcular indemnización
              </Button>

              {resultado !== null && resultadoBreakdown && (
                <div className="rounded-xl border-2 border-blue-500/30 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center shadow-xl space-y-3">
                  <p className="mb-2 text-sm font-semibold text-gray-700">Indemnización estimada</p>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                    {resultado.toLocaleString("es-ES")}€
                  </p>
                  
                  <div className="text-left text-sm space-y-1">
                    <div>- Temporal ({dias} días): {resultadoBreakdown.temporal.toLocaleString("es-ES")}€</div>
                    <div>- Secuelas ({secuelasOptions.find(s => s.value === secuelas)?.puntos || 0} pts): {resultadoBreakdown.secuelas.toLocaleString("es-ES")}€</div>
                  </div>
                  
                  <p className="mt-3 text-xs text-gray-500">
                    *Estimación orientativa baremo 2026. Contacta para valoración personalizada. [web:3][web:4]
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
