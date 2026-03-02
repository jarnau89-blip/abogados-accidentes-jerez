const stats = [
  { value: "+500", label: "Casos resueltos" },
  { value: "98%", label: "Casos ganados" },
  { value: "0€", label: "Coste inicial" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
