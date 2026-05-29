export function Footer() {
  return (
    <footer id="contacts" className="relative overflow-hidden bg-foreground text-cream">
      <div className="mx-auto max-w-[1480px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl font-light leading-[1] text-balance lg:text-7xl">
              Берегите <span className="italic text-gold">природу</span> —
              она у нас одна.
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-cream/50">Парки</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {["Кандры-куль","Мурадым","Иремель","Зилим","Аслы-куль"].map((l) => (
                  <li key={l}><a href="#parks" className="hover:text-gold">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-cream/50">Дирекция</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {["О нас","Документы","Грант","Зубры","Новости"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-gold">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-cream/50">Контакты</h4>
              <ul className="mt-4 space-y-2 text-sm text-cream/80">
                <li>г. Уфа, ул. Заки Валиди, 32</li>
                <li>+7 (347) 250-80-00</li>
                <li>info@dooptrb.ru</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} ГБУ «Дирекция по ООПТ РБ». Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream">Политика конфиденциальности</a>
            <a href="#" className="hover:text-cream">Правила посещения</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none border-t border-cream/10">
        <div className="font-display text-[18vw] font-light leading-none tracking-tighter text-cream/5 text-center -mb-6">
          dooptrb
        </div>
      </div>
    </footer>
  );
}
