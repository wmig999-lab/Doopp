import { motion } from "motion/react";

const news = [
  {
    date: "22.05.2026",
    tag: "Дирекция",
    title: "Зубры на Южном Урале: шаг к формированию популяции",
    excerpt: "Программа реинтродукции продолжается — новая группа адаптируется к местным условиям.",
  },
  {
    date: "20.05.2026",
    tag: "Конкурс",
    title: "Юные художники, внимание!",
    excerpt: "Открыт приём заявок на ежегодный конкурс рисунков о природе родного края.",
  },
  {
    date: "18.05.2026",
    tag: "Акция",
    title: "8 000 сибирских елей в память о Победе",
    excerpt: "Масштабная высадка деревьев прошла во всех пяти природных парках республики.",
  },
  {
    date: "15.05.2026",
    tag: "Экология",
    title: "«Вода России» на берегу Большого Ика",
    excerpt: "Совместная уборка побережья: участвовали волонтёры, школьники и сотрудники дирекции.",
  },
];

export function News() {
  return (
    <section id="news" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" />
              03 — Хроника
            </div>
            <h2 className="font-display text-5xl font-light leading-[1] tracking-tight lg:text-7xl">
              Новости из <span className="italic">леса</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden lg:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Все новости →
          </a>
        </div>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {news.map((n, i) => (
            <motion.a
              key={n.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-center gap-6 py-8 transition-colors hover:bg-mist/40"
            >
              <div className="col-span-12 md:col-span-2 text-sm text-muted-foreground tabular-nums">
                {n.date}
              </div>
              <div className="col-span-12 md:col-span-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {n.tag}
                </span>
              </div>
              <h3 className="col-span-12 md:col-span-6 font-display text-2xl font-light leading-snug lg:text-3xl text-balance">
                {n.title}
              </h3>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <span className="inline-flex items-center gap-2 text-sm transition-transform group-hover:translate-x-1">
                  Читать <span>→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
