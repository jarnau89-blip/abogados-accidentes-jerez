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
    <section id="inicio" className="relative overflow-hidden bg-primary pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              <Shield className="h-4 w-4" />
              Primera consulta 100% gratuita
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Accidente Legal
            </h1>
            <p className="mb-8 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/80 lg:text-xl">
              Abogados especialistas en accidentes de trafico. Solo cobramos si ganamos tu caso.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                Sin coste inicial
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Clock className="h-4 w-4 text-primary-foreground" />
                Horario de atención al público de (8:00 a 15:00) de lunes a viernes
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                +500 casos ganados
              </div>
            </div>
          </div>

          {/* Calculator card */}
          <div
            id="calculadora"
            className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl lg:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-card-foreground">
                  Calculadora de indemnizacion
                </h2>
                <p className="text-sm text-muted-foreground">
                  Estimacion orientativa basada en el baremo
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="dias" className="text-sm font-medium text-card-foreground">
                  Dias de curacion / baja
                </Label>
                <Input
                  id="dias"
                  type="number"
                  min="0"
                  placeholder="Ej: 30"
                  value={diasCuracion}
                  onChange={(e) => setDiasCuracion(e.target.value)}
                  className="bg-secondary text-secondary-foreground"
                />
                <p className="text-xs text-muted-foreground">
                  {"Se valoran a ~50\u20AC/dia segun baremo vigente"}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="secuelas" className="text-sm font-medium text-card-foreground">
                  Gravedad de las secuelas
                </Label>
                <Select value={secuelas} onValueChange={setSecuelas}>
                  <SelectTrigger id="secuelas" className="bg-secondary text-secondary-foreground">
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
                className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                size="lg"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calcular indemnizacion
              </Button>

              {resultado !== null && (
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                  <p className="mb-1 text-sm font-medium text-muted-foreground">
                    Indemnizacion estimada
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {resultado.toLocaleString("es-ES")}{"\u20AC"}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
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
