import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import hero from "@/assets/kandry/hero.jpg";
import pier from "@/assets/kandry/pier.jpg";
import island from "@/assets/kandry/island.jpg";
import kayak from "@/assets/kandry/kayak.jpg";
import trout from "@/assets/kandry/trout.jpg";
import flora from "@/assets/kandry/flora.jpg";

export const Route = createFileRoute("/parks/kandry-kul")({
  head: () => ({
    meta: [
      { title: "Природный парк Кандры-Куль — бирюзовое озеро Башкортостана" },
      {
        name: "description",
        content:
          "Природный парк «Кандры-Куль» — второе по величине озеро Башкортостана, 5 174 га сосновых берегов, прозрачная вода и редкие виды флоры и фауны Туймазинского района.",
      },
      { property: "og:title", content: "Кандры-Куль — природный парк Башкортостана" },
      { property: "og:image", content: hero },
    ],
  }),
  component: KandryKul,
});

const stats = [
  { v: "5 174", l: "гектар охраняемой территории" },
  { v: "15,6", l: "км² зеркала воды" },
  { v: "16 м", l: "максимальная глубина" },
  { v: "1995", l: "год основания парка" },
];

const species = [
  { name: "Сосна обыкновенная", note: "вековые боры на берегах" },
  { name: "Венерин башмачок", note: "Красная книга России" },
  { name: "Сиг кандры-кульский", note: "эндемик озера" },
  { name: "Рипус", note: "интродуцирован в 1960-х" },
  { name: "Орёл-могильник", note: "хищник из Красной книги" },
  { name: "Ковыль перистый", note: "реликтовые степные участки" },
];

const activities = [
  { t: "Купание", d: "Песчаные пляжи восточного берега, тёплая вода с июня по август." },
  { t: "Рыбалка", d: "Лицензионная ловля сига, рипуса, плотвы и щуки с берега и лодки." },
  { t: "Сап и каяк", d: "Прокат на базе «Чайка». Маршруты вокруг острова Утрау." },
  { t: "Велотропа", d: "12 км вдоль южного берега через сосновый бор." },
  { t: "Зимняя рыбалка", d: "С декабря по март — палатки, лунки и подлёдный лов." },
  { t: "Эко-маршрут", d: "«Тропа сосен» — 4 км с информационными стендами." },
];

function KandryKul() {
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
          <img
            src={hero}
            alt="Озеро Кандры-Куль на рассвете"
            className="h-full w-full object-cover"
          />
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
            <span>Кандры-куль</span>
          </motion.div>

          <div className="space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-[14vw] font-light leading-[0.9] tracking-tight text-cream lg:text-[10rem]"
            >
              Кандры
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
                Второе по величине озеро Республики Башкортостан — пятнадцать
                квадратных километров аквамарина в обрамлении сосновых боров
                Бугульминско-Белебеевской возвышенности.
              </p>
              <div className="flex items-center gap-4 text-sm text-cream/70">
                <span className="h-px w-12 bg-cream/40" />
                Туймазинский район
                <span className="opacity-50">•</span>
                54°31′ с.ш.
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
          <span className="font-display text-xs uppercase tracking-[0.4em] text-cream/60">
            ↓ листайте
          </span>
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
              Тёплое озеро <span className="italic">в карстовой котловине</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 lg:col-span-6 lg:col-start-7 lg:text-lg">
            <p>
              Озеро Кандры-Куль образовалось более десяти тысяч лет назад в
              просадочной карстовой котловине. Питается родниками — отсюда
              кристальная прозрачность воды и стабильная температура.
            </p>
            <p>
              На глади озера — три острова, крупнейший из которых, Утрау,
              покрыт реликтовым сосновым лесом и сам по себе является
              ботаническим памятником природы.
            </p>
            <p>
              Парк создан в 1995 году для сохранения уникального природного
              комплекса. Сегодня это — единственное место в Башкортостане,
              где встречаются эндемичные виды сига и десятки растений,
              занесённых в Красную книгу.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY — bento */}
      <section className="bg-bark py-24 text-cream lg:py-32">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-5xl font-light leading-[1] tracking-tight lg:text-7xl">
              Образы <span className="italic text-gold">воды</span>
            </h2>
            <p className="max-w-sm text-sm text-cream/70">
              От утреннего тумана над пирсом до закатной глади — палитра
              цветов меняется ежечасно.
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
              <img src={kayak} alt="Каякер на рассвете" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2 overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img src={pier} alt="Деревянный пирс в туман" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img src={island} alt="Остров Утрау" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FLORA / FAUNA */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" />
              02 — Биоразнообразие
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-balance lg:text-6xl">
              543 вида растений и <span className="italic">десятки эндемиков</span>
            </h2>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img src={flora} alt="Венерин башмачок" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border">
              {species.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-baseline justify-between gap-6 py-6"
                >
                  <span className="font-display text-2xl font-light lg:text-3xl">
                    {s.name}
                  </span>
                  <span className="text-right text-sm text-muted-foreground">
                    {s.note}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl">
              <img src={trout} alt="Сиг в чистой воде" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-mist/50 py-28 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
                <span className="h-px w-10 bg-moss" />
                03 — Что делать
              </div>
              <h2 className="font-display text-5xl font-light leading-[1] tracking-tight lg:text-7xl">
                Шесть способов <br />
                <span className="italic">побыть с озером</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-background p-8 transition-colors hover:bg-card lg:p-10"
              >
                <div className="font-display text-xs uppercase tracking-[0.25em] text-gold">
                  0{i + 1}
                </div>
                <h3 className="mt-6 font-display text-3xl font-light leading-tight">
                  {a.t}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {a.d}
                </p>
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
              <div className="text-xs uppercase tracking-[0.3em] text-cream/60">
                Как добраться
              </div>
              <h3 className="mt-6 font-display text-4xl font-light leading-tight lg:text-5xl">
                145 км <span className="italic">от Уфы</span>
              </h3>
              <dl className="mt-10 space-y-5 text-sm">
                <div className="flex justify-between gap-6 border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Автомобиль</dt>
                  <dd className="text-right">Трасса М-5, поворот у с. Кандры</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Поезд</dt>
                  <dd className="text-right">ст. Кандры, далее 6 км такси</dd>
                </div>
                <div className="flex justify-between gap-6 border-t border-cream/15 pt-5">
                  <dt className="text-cream/60">Координаты</dt>
                  <dd className="text-right">54.5167°N, 54.0500°E</dd>
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
                  <div className="text-xs uppercase tracking-[0.3em] text-moss">
                    Посещение
                  </div>
                  <h3 className="mt-6 font-display text-4xl font-light leading-tight lg:text-5xl">
                    Оплатите въезд <span className="italic">за две минуты</span>
                  </h3>
                  <p className="mt-6 max-w-md text-base text-muted-foreground">
                    Электронный билет действует с момента покупки. Средства
                    идут на охрану территории, эко-тропы и работу инспекторов.
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { p: "200 ₽", l: "взрослый" },
                    { p: "100 ₽", l: "школьник" },
                    { p: "100 ₽", l: "автостоянка" },
                  ].map((x) => (
                    <div key={x.l} className="rounded-2xl bg-mist/60 p-5">
                      <div className="font-display text-3xl font-light text-moss">{x.p}</div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                        {x.l}
                      </div>
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
