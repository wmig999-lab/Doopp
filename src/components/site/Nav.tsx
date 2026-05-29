import { useEffect, useState } from "react";

const links = [
  { label: "Парки", href: "#parks" },
  { label: "Туризм", href: "#tourism" },
  { label: "Оплата", href: "#payment" },
  { label: "Зубры", href: "#bison" },
  { label: "Новости", href: "#news" },
  { label: "Контакты", href: "#contacts" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
            Д
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-base leading-none">
              Дирекция ООПТ
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Республика Башкортостан
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-foreground/80 hover:bg-primary/8 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#payment"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Оплатить онлайн
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}
