import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import kandry from "@/assets/park-kandry-kul.jpg";
import muradym from "@/assets/park-muradym.jpg";
import iremel from "@/assets/park-iremel.jpg";
import zilim from "@/assets/park-zilim.jpg";
import asly from "@/assets/park-aslykul.jpg";

const parks = [
  {
    name: "Кандры-куль",
    tag: "Озеро",
    area: "5 174 га",
    desc: "Второе по величине озеро республики — кристально чистая вода и сосновые берега.",
    img: kandry,
    to: "/parks/kandry-kul",
  },
  {
    name: "Мурадымовское ущелье",
    tag: "Каньон",
    area: "23 586 га",
    desc: "Известняковые скалы, 46 пещер и река Большой Ик — самое драматичное место Башкирии.",
    img: muradym,
  },
  {
    name: "Иремель",
    tag: "Горы",
    area: "49 339 га",
    desc: "Священная вершина Южного Урала — каменные курумы и низкие альпийские луга.",
    img: iremel,
  },
  {
    name: "Зилим",
    tag: "Река",
    area: "33 736 га",
    desc: "Меандры горной реки сквозь нетронутую тайгу — лучший сплав в регионе.",
    img: zilim,
  },
  {
    name: "Аслы-куль",
    tag: "Степь",
    area: "47 500 га",
    desc: "Крупнейшее озеро Башкортостана и волнистые степи — пространство без горизонта.",
    img: asly,
    to: "/parks/asly-kul",
  },

];

export function Parks() {
  return (
    <section id="parks" className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" />
              01 — Парки
            </div>
            <h2 className="font-display text-5xl font-light leading-[1] tracking-tight text-balance lg:text-7xl">
              Пять территорий,
              <br />
              <span className="italic">которые стоит увидеть</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            От тихих озёр и древних гор до глубоких ущелий — каждый парк
            рассказывает свою историю о природе Южного Урала.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-6 lg:gap-6">
          {parks.map((p, i) => {
            const className = `group relative overflow-hidden rounded-2xl bg-bark text-cream ${
              i === 0
                ? "md:col-span-4 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[640px]"
                : i === 1
                ? "md:col-span-2 aspect-[3/4]"
                : "md:col-span-2 aspect-[4/5]"
            }`;
            const inner = (
              <>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full bg-cream/15 px-3 py-1 text-[11px] uppercase tracking-wider backdrop-blur-md">
                    {p.tag}
                  </span>
                  <span className="rounded-full bg-cream/15 px-3 py-1 text-[11px] tracking-wider backdrop-blur-md">
                    {p.area}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <h3 className="font-display text-3xl font-light leading-tight lg:text-5xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {p.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm">
                    Подробнее
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </>
            );
            const motionProps = {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
            };
            if (p.to) {
              return (
                <motion.div key={p.name} {...motionProps} className={className}>
                  <Link to={p.to} className="absolute inset-0 z-10" aria-label={p.name} />
                  {inner}
                </motion.div>
              );
            }
            return (
              <motion.a key={p.name} href="#" {...motionProps} className={className}>
                {inner}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
