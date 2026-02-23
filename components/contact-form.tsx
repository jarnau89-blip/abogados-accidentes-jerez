"use client";

import React from "react"

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-destructive">
            Contacto
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Consulta gratuita y sin compromiso
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Cuentanos tu caso y un abogado especialista se pondra en contacto
            contigo en menos de 24 horas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Informacion de contacto
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      Telefono 24h
                    </p>
                    <a
                      href="tel:+34900000000"
                      className="text-sm text-primary hover:underline"
                    >
                      900 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:info@abogadosjerez.es"
                      className="text-sm text-primary hover:underline"
                    >
                      info@abogadosjerez.es
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      Oficina
                    </p>
                    <p className="text-sm text-muted-foreground">
                      C/ Larga, 45 - 2a planta
                      <br />
                      11403 Jerez de la Frontera, Cadiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      Horario
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Viernes: 9:00 - 20:00
                      <br />
                      Urgencias: 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="text-muted-foreground">
                    Hemos recibido tu consulta. Un abogado se pondra en contacto
                    contigo en menos de 24 horas.
                  </p>
                  <Button
                    className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otra consulta
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="nombre"
                        className="text-sm font-medium text-card-foreground"
                      >
                        Nombre completo *
                      </Label>
                      <Input
                        id="nombre"
                        required
                        placeholder="Tu nombre"
                        className="bg-secondary text-secondary-foreground"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="telefono"
                        className="text-sm font-medium text-card-foreground"
                      >
                        Telefono *
                      </Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        placeholder="600 000 000"
                        className="bg-secondary text-secondary-foreground"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-secondary text-secondary-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="mensaje"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Describe tu caso *
                    </Label>
                    <Textarea
                      id="mensaje"
                      required
                      rows={4}
                      placeholder="Cuentanos brevemente que ocurrio, cuando fue el accidente y que lesiones sufriste..."
                      className="resize-none bg-secondary text-secondary-foreground"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar consulta gratuita
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Al enviar este formulario aceptas nuestra politica de
                    privacidad. Tus datos seran tratados de forma confidencial.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
