const items = [
  "Кандры-куль",
  "Мурадымовское ущелье",
  "Иремель",
  "Зилим",
  "Аслы-куль",
];

export function Marquee() {
  const row = [...items, ...items, ...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-10">
      <div className="flex w-max marquee">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10 whitespace-nowrap">
            <span className="font-display text-5xl font-light italic lg:text-7xl">
              {t}
            </span>
            <span className="text-gold text-3xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
