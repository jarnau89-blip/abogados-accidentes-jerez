"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Garcia",
    location: "Jerez de la Frontera",
    text: "Despues de mi accidente de trafico no sabia que hacer. Me atendieron desde el primer momento y consiguieron una indemnizacion mucho mayor de lo que esperaba. Totalmente recomendables.",
    rating: 5,
    amount: "12.500\u20AC",
  },
  {
    name: "Antonio Lopez",
    location: "El Puerto de Santa Maria",
    text: "Tuve un accidente con lesion cervical y la aseguradora solo me ofrecia 2.000 euros. Gracias a ellos consegui mas de 8.000 euros. Un trato excelente y muy profesional.",
    rating: 5,
    amount: "8.200\u20AC",
  },
  {
    name: "Carmen Ruiz",
    location: "Sanlucar de Barrameda",
    text: "Me gestionaron todo: el peritaje, la rehabilitacion, la reclamacion... No tuve que preocuparme de nada. Al final obtuve la indemnizacion que merecia. Muy agradecida.",
    rating: 5,
    amount: "15.800\u20AC",
  },
  {
    name: "Francisco Moreno",
    location: "Chiclana de la Frontera",
    text: "Profesionales de verdad. Llevaron mi caso con accidente de moto y consiguieron que me indemnizaran por todas las secuelas. Sin su ayuda no habria conseguido ni la mitad.",
    rating: 5,
    amount: "22.000\u20AC",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-destructive">
            Testimonios
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg lg:p-12">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/10 lg:top-8 lg:left-8 lg:h-14 lg:w-14" />

            <div className="relative">
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={`star-${current}-${i}`}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 text-lg leading-relaxed text-card-foreground lg:text-xl">
                {`"${t.text}"`}
              </blockquote>

              {/* Author + amount */}
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold text-card-foreground">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
                <div className="rounded-lg bg-primary/10 px-4 py-2">
                  <p className="text-xs text-muted-foreground">
                    Indemnizacion obtenida
                  </p>
                  <p className="text-lg font-bold text-primary">{t.amount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Testimonio anterior"
              className="border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Siguiente testimonio"
              className="border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
