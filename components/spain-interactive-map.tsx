"use client";

import { useRouter } from "next/navigation";

const provincePaths = [
  { nombre: "A Coruña", slug: "a-coruna", d: "M88 86 L118 77 L136 96 L122 118 L93 111 Z" },
  { nombre: "Asturias", slug: "asturias", d: "M138 96 L183 92 L198 108 L176 126 L143 118 Z" },
  { nombre: "Cantabria", slug: "cantabria", d: "M198 100 L238 98 L252 112 L230 128 L199 120 Z" },
  { nombre: "Vizcaya", slug: "vizcaya", d: "M252 101 L287 97 L301 112 L279 128 L251 119 Z" },
  { nombre: "Guipúzcoa", slug: "guipuzcoa", d: "M287 98 L320 95 L334 109 L315 126 L286 118 Z" },
  { nombre: "Navarra", slug: "navarra", d: "M334 110 L377 106 L393 136 L362 156 L329 142 Z" },
  { nombre: "La Rioja", slug: "la-rioja", d: "M322 144 L363 140 L377 159 L345 177 L316 164 Z" },
  { nombre: "Lugo", slug: "lugo", d: "M92 120 L125 116 L138 147 L116 171 L90 154 Z" },
  { nombre: "León", slug: "leon", d: "M146 132 L206 128 L220 172 L174 196 L136 176 Z" },
  { nombre: "Palencia", slug: "palencia", d: "M221 142 L257 139 L268 167 L238 183 L214 170 Z" },
  { nombre: "Burgos", slug: "burgos", d: "M258 136 L327 131 L350 169 L299 196 L264 172 Z" },
  { nombre: "Huesca", slug: "huesca", d: "M392 132 L448 128 L468 169 L420 195 L388 171 Z" },
  { nombre: "Girona", slug: "girona", d: "M500 155 L542 149 L560 183 L527 207 L497 186 Z" },
  { nombre: "Barcelona", slug: "barcelona", d: "M462 177 L501 171 L523 208 L489 233 L458 212 Z" },
  { nombre: "Lleida", slug: "lleida", d: "M425 172 L463 168 L479 205 L446 226 L417 205 Z" },
  { nombre: "Zamora", slug: "zamora", d: "M146 196 L188 190 L199 225 L163 243 L136 223 Z" },
  { nombre: "Valladolid", slug: "valladolid", d: "M199 188 L241 184 L253 219 L216 239 L190 219 Z" },
  { nombre: "Soria", slug: "soria", d: "M350 181 L391 176 L404 212 L371 231 L340 214 Z" },
  { nombre: "Zaragoza", slug: "zaragoza", d: "M404 181 L466 175 L487 224 L438 251 L396 218 Z" },
  { nombre: "Tarragona", slug: "tarragona", d: "M488 214 L531 207 L551 246 L517 272 L486 246 Z" },
  { nombre: "Salamanca", slug: "salamanca", d: "M132 246 L177 239 L192 278 L152 298 L121 275 Z" },
  { nombre: "Ávila", slug: "avila", d: "M193 238 L232 233 L246 267 L210 287 L183 265 Z" },
  { nombre: "Segovia", slug: "segovia", d: "M234 230 L270 226 L282 256 L252 274 L228 259 Z" },
  { nombre: "Madrid", slug: "madrid", d: "M258 269 L286 264 L298 286 L276 303 L252 290 Z" },
  { nombre: "Guadalajara", slug: "guadalajara", d: "M298 239 L346 233 L362 271 L320 292 L289 264 Z" },
  { nombre: "Teruel", slug: "teruel", d: "M405 255 L454 248 L474 292 L430 320 L396 289 Z" },
  { nombre: "Castellón", slug: "castellon", d: "M476 250 L515 242 L536 286 L501 315 L473 286 Z" },
  { nombre: "Cáceres", slug: "caceres", d: "M114 280 L171 271 L192 322 L140 349 L103 317 Z" },
  { nombre: "Toledo", slug: "toledo", d: "M222 292 L281 285 L303 331 L249 357 L210 327 Z" },
  { nombre: "Cuenca", slug: "cuenca", d: "M304 286 L368 277 L390 334 L334 364 L296 326 Z" },
  { nombre: "Valencia", slug: "valencia", d: "M475 318 L521 309 L540 365 L498 396 L469 363 Z" },
  { nombre: "Badajoz", slug: "badajoz", d: "M101 323 L162 313 L185 373 L130 406 L93 365 Z" },
  { nombre: "Ciudad Real", slug: "ciudad-real", d: "M203 334 L275 326 L302 383 L236 417 L190 376 Z" },
  { nombre: "Albacete", slug: "albacete", d: "M307 337 L381 327 L405 386 L338 420 L293 382 Z" },
  { nombre: "Alicante", slug: "alicante", d: "M450 397 L496 389 L515 442 L475 472 L445 438 Z" },
  { nombre: "Murcia", slug: "murcia", d: "M396 424 L452 414 L472 468 L420 501 L384 465 Z" },
  { nombre: "Huelva", slug: "huelva", d: "M92 390 L141 382 L158 425 L118 450 L86 425 Z" },
  { nombre: "Sevilla", slug: "sevilla", d: "M143 382 L202 374 L223 425 L170 452 L132 422 Z" },
  { nombre: "Córdoba", slug: "cordoba", d: "M203 380 L261 372 L282 422 L230 448 L194 418 Z" },
  { nombre: "Jaén", slug: "jaen", d: "M284 385 L340 377 L360 424 L312 451 L275 424 Z" },
  { nombre: "Granada", slug: "granada", d: "M314 426 L374 417 L394 467 L342 497 L305 466 Z" },
  { nombre: "Málaga", slug: "malaga", d: "M232 449 L300 438 L325 484 L266 514 L223 485 Z" },
  { nombre: "Cádiz", slug: "cadiz", d: "M118 452 L172 444 L191 489 L148 520 L110 497 Z" },
  { nombre: "Almería", slug: "almeria", d: "M375 458 L431 448 L454 491 L407 522 L366 493 Z" },
  { nombre: "Illes Balears", slug: "illes-balears", d: "M612 292 L646 286 L662 306 L636 322 L611 312 Z" },
  { nombre: "Las Palmas", slug: "las-palmas", d: "M90 572 L120 568 L130 584 L110 596 L88 589 Z" },
  { nombre: "Santa Cruz de Tenerife", slug: "santa-cruz-de-tenerife", d: "M145 586 L176 581 L190 594 L168 607 L144 601 Z" },
];

export default function SpainInteractiveMap() {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-card-foreground">
          Mapa interactivo de España
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Haz clic en una provincia para abrir su página específica.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-slate-50 p-3 md:p-6 dark:bg-slate-950">
        <svg
          viewBox="0 0 700 640"
          className="h-auto w-full"
          role="img"
          aria-label="Mapa interactivo de provincias de España"
        >
          <title>Mapa interactivo de provincias de España</title>

          <rect x="0" y="0" width="700" height="640" fill="transparent" />

          {provincePaths.map((provincia) => (
            <path
              key={provincia.slug}
              d={provincia.d}
              role="button"
              tabIndex={0}
              aria-label={provincia.nombre}
              fill="#dbeafe"
              stroke="#1e3a8a"
              strokeWidth="2.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="cursor-pointer transition-all duration-200 hover:fill-[#2563eb] hover:stroke-[#1e40af] focus:outline-none"
              onClick={() => router.push(`/provincias/${provincia.slug}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(`/provincias/${provincia.slug}`);
                }
              }}
            >
              <title>{provincia.nombre}</title>
            </path>
          ))}
        </svg>
      </div>
    </div>
  );
}