import SpainMapSvg from "@/assets/mapa-espana-provincias.svg";

export default function SpainInteractiveMap() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-card-foreground">
          Mapa de España por provincias
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Este es el mapa SVG real cargado como componente React.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-white p-4">
        <SpainMapSvg className="h-auto w-full" />
      </div>
    </div>
  );
}