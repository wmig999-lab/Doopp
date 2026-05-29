import { motion } from "motion/react";
import heroImg from "@/assets/park-kandry-kul.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-bark text-cream">
      <motion.img
        src={heroImg}
        alt="Природный парк Кандры-куль на рассвете"
        width={1920}
        height={1080}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1480px] flex-col justify-between px-6 pt-32 pb-12 lg:px-12 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/80"
        >
          <span className="h-px w-10 bg-cream/60" />
          Природа Башкортостана · с 1991
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.2rem,9vw,9rem)] font-light leading-[0.92] tracking-[-0.02em] text-balance"
          >
            Дикая
            <br />
            <span className="italic font-normal text-gold">Башкирия</span>
            <span className="text-cream/60">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85"
          >
            Пять природных парков, тысячи квадратных километров охраняемых
            территорий, древние горы Урала, бирюзовые озёра и редкие виды —
            один билет и весь мир до самого горизонта.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#parks"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-medium text-bark hover:bg-gold transition-colors"
            >
              Исследовать парки
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#payment"
              className="inline-flex items-center gap-3 rounded-full border border-cream/40 px-7 py-4 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
            >
              Купить билет
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-cream/15 pt-8 md:grid-cols-4"
        >
          {[
            { n: "5", l: "Природных парков" },
            { n: "190K", l: "Гектаров под охраной" },
            { n: "34", l: "Года заботы" },
            { n: "500+", l: "Видов флоры и фауны" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-light text-cream lg:text-5xl">
                {s.n}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
