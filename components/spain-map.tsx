"use client";

import { useRouter } from "next/navigation";
import { provinceMap } from "../lib/province-map";

type ProvinceShapeProps = {
  id: string;
  d: string;
};

function ProvinceShape({ id, d }: ProvinceShapeProps) {
  const router = useRouter();
  const province = provinceMap[id];

  if (!province) return null;

  return (
    <path
      d={d}
      role="button"
      tabIndex={0}
      aria-label={province.name}
      className="cursor-pointer fill-muted stroke-background stroke-[1.5] transition-all duration-200 hover:fill-primary hover:opacity-90 focus:fill-primary focus:outline-none"
      onClick={() => router.push(`/provincias/${province.slug}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/provincias/${province.slug}`);
        }
      }}
    >
      <title>{province.name}</title>
    </path>
  );
}

export function SpainMap() {
  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Selecciona tu provincia
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Haz clic sobre el mapa para acceder a la página específica de cada provincia.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl bg-muted/30 p-3 md:p-6">
        <svg
          viewBox="0 0 800 650"
          className="h-auto w-full"
          role="img"
          aria-label="Mapa interactivo de las provincias de España"
        >
          {/* EJEMPLOS REALES DE ESTRUCTURA */}
          {/* Sustituye estos paths de ejemplo por el SVG provincial completo */}
          <ProvinceShape id="ES-CA" d="M110 470 L155 455 L170 490 L135 520 L98 500 Z" />
          <ProvinceShape id="ES-SE" d="M150 430 L210 420 L228 460 L182 485 L145 465 Z" />
          <ProvinceShape id="ES-H" d="M92 425 L145 415 L150 450 L108 465 L85 445 Z" />
          <ProvinceShape id="ES-MA" d="M205 485 L250 475 L276 500 L248 530 L210 520 Z" />
          <ProvinceShape id="ES-GR" d="M255 470 L315 462 L332 500 L280 525 L248 508 Z" />
          <ProvinceShape id="ES-J" d="M245 415 L305 405 L326 445 L275 468 L235 448 Z" />
          <ProvinceShape id="ES-CO" d="M180 390 L235 380 L255 418 L205 438 L170 420 Z" />
          <ProvinceShape id="ES-M" d="M355 275 L390 268 L404 296 L376 314 L348 300 Z" />
          <ProvinceShape id="ES-B" d="M575 170 L622 160 L642 202 L600 225 L566 205 Z" />
          <ProvinceShape id="ES-V" d="M530 300 L565 292 L582 338 L548 360 L522 330 Z" />
          <ProvinceShape id="ES-Z" d="M470 205 L520 195 L540 235 L497 258 L462 232 Z" />
          <ProvinceShape id="ES-C" d="M62 105 L108 92 L132 130 L92 152 L58 132 Z" />
          <ProvinceShape id="ES-O" d="M95 130 L145 120 L160 152 L120 180 L88 162 Z" />
          <ProvinceShape id="ES-S" d="M145 118 L188 115 L205 145 L170 170 L142 155 Z" />
          <ProvinceShape id="ES-BI" d="M250 120 L288 112 L305 138 L272 155 L242 140 Z" />
          <ProvinceShape id="ES-SS" d="M288 116 L325 110 L342 135 L312 155 L282 145 Z" />
          <ProvinceShape id="ES-NA" d="M340 135 L390 130 L405 165 L370 190 L332 172 Z" />
          <ProvinceShape id="ES-LO" d="M330 175 L380 170 L395 195 L352 216 L320 198 Z" />
        </svg>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Consejo: pega aquí el SVG completo de España por provincias y sustituye cada
        <span className="font-medium"> d=&quot;...&quot; </span>
        por el trazado real de cada provincia.
      </p>
    </section>
  );
}