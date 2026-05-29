import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import hero from "@/assets/asly/hero.jpg";
import waterfall from "@/assets/asly/waterfall.jpg";
import cliffs from "@/assets/asly/cliffs.jpg";
import mountain from "@/assets/asly/mountain.jpg";
import curlew from "@/assets/asly/curlew.jpg";
import swan from "@/assets/asly/swan.jpg";

export const Route = createFileRoute("/parks/asly-kul")({
  head: () => ({
    meta: [
      { title: "Природный парк Аслы-Куль — крупнейшее озеро Башкортостана" },
      {
        name: "description",
        content:
          "Природный парк «Аслы-Куль» — 47 500 га охраняемой природы вокруг крупнейшего озера Башкортостана. Карстовая котловина, отвесные скалы, водопад Шарлама и Красная книга.",
      },
      { property: "og:title", content: "Аслы-Куль — природный парк Башкортостана" },
      { property: "og:image", content: hero },
    ],
  }),
  component: AslyKul,
});

const stats = [
  { v: "47 500", l: "гектар парка" },
  { v: "23,5", l: "км² озера" },
  { v: "119", l: "млн м³ воды" },
  { v: "12 м", l: "водопад Шарлама" },
];

const animals = [
  { name: "Большой кроншнеп", note: "Numenius arquata · 2 категория" },
  { name: "Большой тушканчик", note: "редкий, ночной образ жизни" },
  { name: "Выпь", note: "сокращается в численности" },
  { name: "Европейская белая лазоревка", note: "под угрозой исчезновения" },
  { name: "Краснозобая казарка", note: "эндемик России" },
  { name: "Лебедь-шипун", note: "гнездится с 1982 года" },
];

const peaks = [
  { t: "Табулак", d: "Главная видовая точка над западным берегом озера." },
  { t: "Улу-Карагач", d: "Скалистый кряж, маршрут на восход 4,2 км." },
  { t: "Улутау", d: "Степные склоны, ковыль и реликтовые травы." },
  { t: "Бэлекей-Карагач", d: "Сосновый бор, тенистая тропа к роднику." },
  { t: "Большой Нор", d: "Панорама на северную акваторию озера." },
  { t: "Зайтуляктау", d: "Дикие маки и каменные останцы у вершины." },
];

function AslyKul() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img src={hero} alt="Озеро Аслы-куль с высоты" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-background" />
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col justify-between px-6 pb-16 pt-32 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream"
          >
            <Link to="/" className="hover:text-gold transition-colors">Парки</Link>
            <span className="opacity-50">/</span>
            <span>Аслы-куль</span>
          </motion.div>

          <div className="space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-[14vw] font-light leading-[0.9] tracking-tight text-cream lg:text-[10rem]"
            >
              Аслы
              <span className="italic text-gold">-</span>
              куль
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid gap-8 lg:grid-cols-3 lg:items-end"
            >
              <p className="max-w-md text-base leading-relaxed text-cream/85 lg:col-span-2">
                Небольшое море в центре Башкирии — крупнейшее озеро республики
                карстово-провального происхождения. Слегка солоноватая вода,
                отвесные скалы и круговая панорама гор.
              </p>
              <div className="flex items-center gap-4 text-sm text-cream/70">
                <span className="h-px w-12 bg-cream/40" />
                Давлекановский район
                <span className="opacity-50">•</span>
                54°18′ с.ш.
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
          <span className="font-display text-xs uppercase tracking-[0.4em] text-cream/60">↓ листайте</span>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border/60 bg-mist/40">
        <div className="mx-auto max-w-[1480px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="font-display text-5xl font-light leading-none text-moss lg:text-7xl">
                  {s.v}
                </div>
                <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-28 lg:py-40">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" />
              О парке
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance lg:text-6xl">
              Маленькое море <span className="italic">в центре Башкирии</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 lg:col-span-6 lg:col-start-7 lg:text-lg">
            <p>
              Аслыкуль образовался в карстово-провальной котловине. Высокая
              минерализация делает воду слегка солоноватой, а длина береговой
              линии превышает 20 километров — на восточной стороне отвесные
              скалы обрываются прямо к воде.
            </p>
            <p>
              Озеро окружают семь гор — Табулак, Улу-Карагач, Улутау,
              Бэлекей-Карагач, Большой и Малый Нор, Зайтуляктау. С каждой из
              них открывается отдельная композиция простора, света и тени.
            </p>
            <p>
              На территории парка находится водопад Шарлама — двенадцатиметровый
              поток в скрытом известняковом ущелье среди папоротников.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-bark py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-5xl font-light leading-[1] tracking-tight lg:text-7xl">
              Скалы, степь, <span className="italic text-gold">вода</span>
            </h2>
            <p className="max-w-sm text-sm text-cream/70">
              Семь возвышенностей и одна гладь — пейзаж меняется на каждом
              километре береговой линии.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-4 md:row-span-2 overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto"
            >
              <img src={cliffs} alt="Скалы у воды на закате" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2 overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img src={waterfall} alt="Водопад Шарлама" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img src={mountain} alt="Гора Табулак" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* RED BOOK */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" />
              02 — Красная книга
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance lg:text-6xl">
              10 видов животных и <span className="italic">40 видов растений</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Парк хранит редчайшую фауну степной зоны: гнездятся выпь и
              лебедь-шипун, на пролёте останавливается краснозобая казарка.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img src={curlew} alt="Большой кроншнеп" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border">
              {animals.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-baseline justify-between gap-6 py-6"
                >
                  <span className="font-display text-2xl font-light lg:text-3xl">{s.name}</span>
                  <span className="text-right text-sm text-muted-foreground">{s.note}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl">
              <img src={swan} alt="Лебедь-шипун" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PEAKS */}
      <section className="bg-mist/50 py-28 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
                <span className="h-px w-10 bg-moss" />
                03 — Семь вершин
              </div>
              <h2 className="font-display text-5xl font-light leading-[1] tracking-tight lg:text-7xl">
                Горы вокруг <br />
                <span className="italic">единого зеркала</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
            {peaks.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-background p-8 transition-colors hover:bg-card lg:p-10"
              >
                <div className="font-display text-xs uppercase tracking-[0.25em] text-gold">0{i + 1}</div>
                <h3 className="mt-6 font-display text-3xl font-light leading-tight">{a.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO + CTA */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="rounded-3xl bg-moss p-10 text-cream lg:col-span-5 lg:p-14">
              <div className="text-xs uppercase tracking-[0.3em] text-cream/60">Как добраться</div>
              <h3 className="mt-6 font-display text-4xl font-light leading-tight lg:text-5xl">
                110 км <span className="italic">от Уфы</span>
              </h3>
              <dl className="mt-10 space-y-5 text-sm">
                <div className="flex justify-between gap-6 border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Автомобиль</dt>
                  <dd className="text-right">Трасса Уфа — Давлеканово, поворот на с. Алга</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Поезд</dt>
                  <dd className="text-right">ст. Давлеканово, далее 27 км такси</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Координаты</dt>
                  <dd className="text-right">54.3000°N, 54.5667°E</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Сезон</dt>
                  <dd className="text-right">круглый год</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-10 lg:p-14">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-moss">Посещение</div>
                  <h3 className="mt-6 font-display text-4xl font-light leading-tight lg:text-5xl">
                    Оплатите въезд <span className="italic">за две минуты</span>
                  </h3>
                  <p className="mt-6 max-w-md text-base text-muted-foreground">
                    Средства идут на охрану экосистемы озера, обустройство
                    кемпингов и работу инспекторов парка.
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { p: "200 ₽", l: "взрослый" },
                    { p: "100 ₽", l: "школьник" },
                    { p: "150 ₽", l: "автостоянка" },
                  ].map((x) => (
                    <div key={x.l} className="rounded-2xl bg-mist/60 p-5">
                      <div className="font-display text-3xl font-light text-moss">{x.p}</div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{x.l}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/"
                  hash="payment"
                  className="group mt-10 inline-flex items-center gap-3 self-start rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Перейти к оплате
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
