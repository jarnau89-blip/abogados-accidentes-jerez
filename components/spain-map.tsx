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

      const onEnter = () => {
        try {
          (el as HTMLElement).style.transition = "all 150ms";
          (el as HTMLElement).style.opacity = "0.9";
          (el as HTMLElement).style.fill = "#fb923c";
        } catch {}
      };

      const onLeave = () => {
        try {
          (el as HTMLElement).style.opacity = "";
          (el as HTMLElement).style.fill = "";
        } catch {}
      };

      el.addEventListener("click", onClick as EventListener);
      el.addEventListener("keydown", onKey as EventListener);
      el.addEventListener("mouseenter", onEnter as EventListener);
      el.addEventListener("focus", onEnter as EventListener);
      el.addEventListener("mouseleave", onLeave as EventListener);
      el.addEventListener("blur", onLeave as EventListener);

      handlers.push(() => {
        el.removeEventListener("click", onClick as EventListener);
        el.removeEventListener("keydown", onKey as EventListener);
        el.removeEventListener("mouseenter", onEnter as EventListener);
        el.removeEventListener("focus", onEnter as EventListener);
        el.removeEventListener("mouseleave", onLeave as EventListener);
        el.removeEventListener("blur", onLeave as EventListener);
      });
    });
    
      // 2) Fallback: bind to text labels (tspan/text) matching province names
      const normalize = (s: string) =>
        s
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .toLowerCase()
          .replace(/\s+/g, " ")
          .trim();
    
      const nameToSlug: Record<string, string> = {};
      Object.values(provinceMap).forEach((p) => {
        nameToSlug[normalize(p.name)] = p.slug;
      });
    
      const textEls = svg.querySelectorAll("tspan, text");
      textEls.forEach((el) => {
        const txt = (el.textContent || "").trim();
        if (!txt) return;
        const slug = nameToSlug[normalize(txt)];
        if (!slug) return;
    
        // attach to the parent text element if tspan
        const target = el.tagName.toLowerCase() === "tspan" ? (el.parentElement as Element) : el;
        if (!target) return;
    
        target.setAttribute("role", "button");
        target.setAttribute("tabindex", "0");
        target.setAttribute("aria-label", txt);
        target.classList.add("cursor-pointer");
    
        const onClick = () => router.push(`/provincias/${slug}`);
        const onKey = (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            router.push(`/provincias/${slug}`);
          }
        };

        const onEnter = () => {
          try {
            (target as HTMLElement).style.transition = "all 150ms";
            (target as HTMLElement).style.fill = "#fb923c";
            (target as HTMLElement).style.fontWeight = "700";
          } catch {}
        };

        const onLeave = () => {
          try {
            (target as HTMLElement).style.fill = "";
            (target as HTMLElement).style.fontWeight = "";
          } catch {}
        };

        target.addEventListener("click", onClick as EventListener);
        target.addEventListener("keydown", onKey as EventListener);
        target.addEventListener("mouseenter", onEnter as EventListener);
        target.addEventListener("focus", onEnter as EventListener);
        target.addEventListener("mouseleave", onLeave as EventListener);
        target.addEventListener("blur", onLeave as EventListener);

        handlers.push(() => {
          target.removeEventListener("click", onClick as EventListener);
          target.removeEventListener("keydown", onKey as EventListener);
          target.removeEventListener("mouseenter", onEnter as EventListener);
          target.removeEventListener("focus", onEnter as EventListener);
          target.removeEventListener("mouseleave", onLeave as EventListener);
          target.removeEventListener("blur", onLeave as EventListener);
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

      <div ref={containerRef} className="overflow-hidden rounded-3xl bg-muted/30 p-4 md:p-8">
        <SpainMapSvg className="w-full min-h-[680px] max-w-full" />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Mapa político por provincias. Si algún id no funciona, verifica los id's
        dentro de assets/mapa-espana-provincias.svg y que coincidan con
        los códigos en `lib/province-map.tsx`.
      </p>
    </section>
  );
}