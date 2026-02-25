const stats = [
  { value: "+500", label: "Casos resueltos" },
  { value: "98%", label: "Casos ganados" },
  { value: "0\u20AC", label: "Coste inicial" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
