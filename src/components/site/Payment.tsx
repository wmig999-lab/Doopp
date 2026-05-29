import { useMemo, useState } from "react";

const parks = ["Аслы-куль", "Кандры-куль", "Иремель", "Зилим", "Мурадымовское ущелье"];
const services = [
  { name: "Въезд (1 чел.)", price: 100 },
  { name: "Автостоянка", price: 100 },
  { name: "Палаточное место", price: 250 },
  { name: "Экскурсия с гидом", price: 800 },
];

export function Payment() {
  const [park, setPark] = useState(parks[0]);
  const [people, setPeople] = useState(2);
  const [service, setService] = useState(services[0].name);
  const total = useMemo(() => {
    const s = services.find((x) => x.name === service);
    return (s?.price ?? 0) * people;
  }, [service, people]);

  return (
    <section id="payment" className="relative bg-foreground text-cream py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1480px] gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            02 — Билеты
          </div>
          <h2 className="font-display text-5xl font-light leading-[1] tracking-tight text-balance lg:text-7xl">
            Оплатите въезд <span className="italic text-gold">за минуту</span>
          </h2>
          <p className="mt-8 max-w-md text-cream/70 leading-relaxed">
            Все средства идут на охрану территорий, инфраструктуру для
            посетителей и заботу о диких животных. Никаких касс — только ваш
            телефон и природа впереди.
          </p>

          <ul className="mt-12 space-y-4 text-sm text-cream/80">
            {[
              "Мгновенное подтверждение на e-mail",
              "Поддержка всех российских карт и СБП",
              "Возврат за 24 часа без объяснений",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-gold text-gold">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl bg-cream p-8 text-foreground shadow-2xl lg:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="ФИО">
              <input className="input" placeholder="Иванов Иван" />
            </Field>
            <Field label="Телефон">
              <input className="input" placeholder="+7 (___) ___-__-__" />
            </Field>
            <Field label="E-mail" className="sm:col-span-2">
              <input className="input" type="email" placeholder="you@example.com" />
            </Field>
            <Field label="Природный парк">
              <select className="input" value={park} onChange={(e) => setPark(e.target.value)}>
                {parks.map((p) => <option key={p}>{p}</option>)}
              </select>
            </Field>
            <Field label="Услуга">
              <select className="input" value={service} onChange={(e) => setService(e.target.value)}>
                {services.map((s) => <option key={s.name}>{s.name}</option>)}
              </select>
            </Field>
            <Field label="Кол-во человек">
              <input
                type="number" min={1} max={50}
                className="input"
                value={people}
                onChange={(e) => setPeople(Math.max(1, +e.target.value || 1))}
              />
            </Field>
            <Field label="Дата въезда">
              <input className="input" type="date" />
            </Field>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Итого</div>
              <div className="font-display text-4xl">
                {total.toLocaleString("ru-RU")} <span className="text-2xl">₽</span>
              </div>
            </div>
            <button className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-cream hover:bg-moss transition-colors">
              Оплатить
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Нажимая «Оплатить», вы соглашаетесь с обработкой персональных
            данных и правилами посещения природных парков.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, children, className = "",
}: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 0.5rem 0;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .2s;
        }
        .input:focus { border-color: var(--moss); }
      `}</style>
    </label>
  );
}
