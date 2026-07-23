"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SpainMapSvg from "@/assets/mapa-espana-provincias.svg";
import { provinceMap } from "@/lib/province-map";

export function SpainMap() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const svg = root.querySelector("svg");
    if (!svg) return;

    const handlers: Array<() => void> = [];

    Object.keys(provinceMap).forEach((id) => {
      // Try to find element by id inside SVG
      const el = svg.querySelector(`#${id}`) as Element | null;
      if (!el) return;

      const province = provinceMap[id];
      if (!province) return;

      // make it keyboard accessible and clickable
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", province.name);
      el.classList.add("cursor-pointer");

      const onClick = () => router.push(`/provincias/${province.slug}`);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/provincias/${province.slug}`);
        }
      };

      el.addEventListener("click", onClick as EventListener);
      el.addEventListener("keydown", onKey as EventListener);

      handlers.push(() => {
        el.removeEventListener("click", onClick as EventListener);
        el.removeEventListener("keydown", onKey as EventListener);
      });
    });

    return () => handlers.forEach((h) => h());
  }, [router]);

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Selecciona tu provincia
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Haz clic en el mapa para acceder a la página de tu provincia.
        </p>
      </div>

      <div ref={containerRef} className="overflow-hidden rounded-xl bg-muted/30 p-3 md:p-6">
        <SpainMapSvg className="h-auto w-full" />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Mapa político por provincias. Si algún id no funciona, verifica los id's
        dentro de assets/mapa-espana-provincias.svg y que coincidan con
        los códigos en `lib/province-map.tsx`.
      </p>
    </section>
  );
}