import { motion } from "motion/react";
import bisonImg from "@/assets/bison.jpg";

export function Bison() {
  return (
    <section id="bison" className="relative overflow-hidden bg-background py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1480px] gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-3xl"
        >
          <img
            src={bisonImg}
            alt="Зубр в тумане Южного Урала"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-moss">
            <span className="h-px w-10 bg-moss" />
            04 — Программа
          </div>
          <h2 className="font-display text-5xl font-light leading-[1] tracking-tight text-balance lg:text-6xl">
            Возвращение <span className="italic">зубров</span>
          </h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Зубр исчез из лесов Южного Урала в конце XIX века. С 2020 года
            мы шаг за шагом возвращаем этих величественных животных в дикую
            природу — формируем устойчивую вольную популяцию.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "27", l: "Особей в программе" },
              { n: "3", l: "Поколения здесь" },
              { n: "12k", l: "Га охраняемых лесов" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-light">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            О программе подробнее →
          </a>
        </div>
      </div>
    </section>
  );
}
