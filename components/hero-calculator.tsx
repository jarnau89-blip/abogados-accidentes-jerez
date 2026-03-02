"use client";

import { useState } from "react";
import { Calculator, Shield, Clock, CheckCircle2 } from "lucide-react";
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

const PRECIO_DIA = 50;
const PRECIO_PUNTO_SECUELA = 900;

export function HeroCalculator() {
  const [diasCuracion, setDiasCuracion] = useState("");
  const [secuelas, setSecuelas] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function calcular() {
    const dias = Number.parseInt(diasCuracion) || 0;
    const secuelaSeleccionada = secuelasOptions.find((s) => s.value === secuelas);
    const puntos = secuelaSeleccionada?.puntos || 0;

    const indemnizacion = dias * PRECIO_DIA + puntos * PRECIO_PUNTO_SECUELA;
    setResultado(indemnizacion);
  }

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
              Abogados especialistas en accidentes de trafico. Solo cobramos si ganamos tu caso.
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
                  Calculadora de indemnizacion
                </h2>
                <p className="text-sm text-gray-600">
                  Estimacion orientativa basada en el baremo
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="dias" className="text-sm font-medium text-gray-900">
                  Dias de curacion / baja
                </Label>
                <Input
                  id="dias"
                  type="number"
                  min="0"
                  placeholder="Ej: 30"
                  value={diasCuracion}
                  onChange={(e) => setDiasCuracion(e.target.value)}
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500">
                  Se valoran a ~50€/dia segun baremo vigente
                </p>
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
                Calcular indemnizacion
              </Button>

              {resultado !== null && (
                <div className="rounded-xl border-2 border-blue-500/30 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center shadow-xl">
                  <p className="mb-2 text-sm font-semibold text-gray-700">
                    Indemnizacion estimada
                  </p>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                    {resultado.toLocaleString("es-ES")}€
                  </p>
                  <p className="mt-3 text-xs text-gray-500">
                    *Estimacion orientativa. Contacta para una valoracion personalizada.
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
