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
      // Try multiple methods to find the element
      let el: Element | null = null;
      
      // Method 1: getElementById on SVG (works for most elements)
      el = svg.getElementById(id) as Element | null;
      
      // Method 2: if not found, try querySelector in document (in case of namespace issues)
      if (!el) {
        el = document.querySelector(`[id="${id}"]`) as Element | null;
      }
      
      // Method 3: if still not found, try querySelectorAll on SVG
      if (!el) {
        const elements = svg.querySelectorAll(`*[id="${id}"]`);
        if (elements.length > 0) {
          el = elements[0];
        }
      }
      
      if (!el) return;

      const province = provinceMap[id];
      if (!province) return;

      // make it keyboard accessible and clickable
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", province.name);
      el.classList.add("cursor-pointer");
      
      // Ensure pointer-events is enabled and not blocked
      (el as SVGElement).style.pointerEvents = "auto";

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
    <section className="mx-auto w-full rounded-[32px] border border-primary/20 bg-card p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.55)] md:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Selecciona tu provincia
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Haz clic en el mapa para acceder a la página de tu provincia.
        </p>
      </div>

      <div ref={containerRef} className="overflow-hidden rounded-[28px] bg-muted/30 p-4 md:p-8">
        <SpainMapSvg className="w-full min-h-[640px] max-w-full" />
      </div>
    </section>
  );
}