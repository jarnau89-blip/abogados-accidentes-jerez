"use client";

import { useState } from "react";
import { Calculator, Shield, Clock, CheckCircle2, Stethoscope } from "lucide-react";
import Link from "next/link";
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
import { BAREMO_YEAR, BAREMO_PRECIOS, BAREMO_LABELS } from "@/lib/baremo";

const whatsappUrl =
  "https://wa.me/34613781218?text=Hola%2C%20quiero%20solicitar%20una%20valoraci%C3%B3n%20gratuita%20de%20mi%20caso%20por%20un%20accidente%20de%20tr%C3%A1fico.%20Me%20gustar%C3%ADa%20que%20un%20abogado%20especialista%20revisara%20mi%20situaci%C3%B3n%20y%20me%20indicara%20si%20puedo%20reclamar%20una%20indemnizaci%C3%B3n.%20Si%20es%20posible%2C%20también%20me%20gustar%C3%ADa%20agendar%20una%20llamada.%20Gracias.";

export function HeroCalculator() {
  const [dias, setDias] = useState("");
  const [perjuicio, setPerjuicio] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function calcular() {
    const numDias = Number.parseInt(dias) || 0;
    const tipoPerjuicio = perjuicio;
    const precioDia = BAREMO_PRECIOS[tipoPerjuicio as keyof typeof BAREMO_PRECIOS] || 0;
    const total = numDias * precioDia;

    setResultado(total);
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              Primera consulta 100% gratuita
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
              Abogados especialistas en accidentes de tráfico en España
            </h1>
            <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 lg:text-xl drop-shadow-md">
              Reclamamos la indemnización que te corresponde frente a las compañías aseguradoras. Nuestro equipo de abogados y tramitadores especializados estudia tu caso, gestiona la reclamación y defiende tus intereses durante todo el procedimiento.
            </p>
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              Primera consulta gratuita · Sin compromiso · Atención en toda España
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <Button asChild size="lg" className="min-h-[52px]">
                <Link href="#contacto">Solicitar valoración gratuita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-[52px] border-white/30 text-white hover:bg-white/10">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Contactar por WhatsApp</a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="min-h-[52px]">
                <Link href="#contacto">Agendar una llamada</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Solo cobramos si tú cobras.
            </p>
          </div>

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
                  Estimación orientativa basada en el baremo {BAREMO_YEAR}
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
                  Tipo de perjuicio (baremo {BAREMO_YEAR})
                </Label>
                <Select value={perjuicio} onValueChange={setPerjuicio}>
                  <SelectTrigger id="perjuicio" className="bg-gray-50 border-gray-200 focus:ring-blue-500">
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(BAREMO_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label} ({BAREMO_PRECIOS[value as keyof typeof BAREMO_PRECIOS].toFixed(2)}€/día)
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

              {resultado !== null && (
                <div className="rounded-xl border-2 border-blue-500/30 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center shadow-xl space-y-3">
                  <p className="mb-2 text-sm font-semibold text-gray-700">Estimación orientativa</p>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                    {resultado.toLocaleString("es-ES")}€
                  </p>
                  <div className="text-left text-sm space-y-1">
                    <div className="text-center">({dias} días × {(BAREMO_PRECIOS[perjuicio as keyof typeof BAREMO_PRECIOS] || 0).toFixed(2)}€/día)</div>
                  </div>
                  <p className="mt-3 text-xs text-gray-500">
                    Esta cantidad no constituye una valoración jurídica definitiva. La indemnización final depende de las circunstancias concretas del accidente.
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
