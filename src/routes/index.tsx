import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Parks } from "@/components/site/Parks";
import { Payment } from "@/components/site/Payment";
import { Bison } from "@/components/site/Bison";
import { News } from "@/components/site/News";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Дирекция ООПТ Республики Башкортостан — дикая природа Южного Урала" },
      {
        name: "description",
        content:
          "Пять природных парков Башкортостана: Кандры-куль, Мурадымовское ущелье, Иремель, Зилим и Аслы-куль. Маршруты, билеты онлайн, программа возвращения зубров.",
      },
      { property: "og:title", content: "Дирекция ООПТ РБ — дикая Башкирия" },
      { property: "og:description", content: "Природные парки Южного Урала — маршруты и билеты онлайн." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Parks />
      <Payment />
      <Bison />
      <News />
      <Footer />
    </main>
  );
}
