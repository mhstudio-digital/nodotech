import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conocé la misión de NodoTech: acercar la inteligencia artificial, la automatización y las herramientas digitales a los negocios de Costa Rica y Latinoamérica.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre nosotros | NodoTech",
    description:
      "Conocé la misión de NodoTech: acercar la inteligencia artificial, la automatización y las herramientas digitales a los negocios de Costa Rica y Latinoamérica.",
    url: "/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <span className="w-fit rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
        Sobre nosotros
      </span>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0A0A0A] sm:text-5xl">
        Tecnología explicada para quienes hacen crecer sus negocios.
      </h1>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline">
        <p>
          <strong>NodoTech</strong> nació de una idea sencilla: la tecnología avanza más rápido que la
          capacidad de muchas personas y negocios para entenderla y aprovecharla. Cada semana aparecen
          nuevas herramientas de inteligencia artificial, plataformas de automatización y servicios digitales
          que prometen cambiarlo todo —pero pocas veces alguien se detiene a explicar, en lenguaje claro,
          qué significan realmente para un negocio pequeño o mediano en Costa Rica.
        </p>
        <p>
          Por eso existimos. Somos un equipo de personas apasionadas por la tecnología y por los negocios
          locales, dedicadas a traducir las tendencias globales en guías prácticas, análisis honestos y
          recomendaciones que se pueden aplicar desde el primer día —sin jerga innecesaria y sin promesas
          exageradas.
        </p>

        <h2>Nuestra misión</h2>
        <p>
          Ayudar a que más negocios costarricenses —desde emprendimientos unipersonales hasta pymes en
          crecimiento— tomen mejores decisiones tecnológicas: qué herramientas adoptar, en qué orden, con
          qué presupuesto y con qué expectativas realistas de resultado.
        </p>

        <h2>Qué vas a encontrar en NodoTech</h2>
        <ul>
          <li>Guías sobre <strong>inteligencia artificial</strong> aplicada a tareas cotidianas de negocio.</li>
          <li>Explicaciones claras sobre <strong>automatización de procesos</strong> y cómo empezar sin complicarse.</li>
          <li>Comparativas honestas de <strong>herramientas digitales</strong>, con ventajas, límites y costos reales.</li>
          <li>Casos y ejemplos pensados específicamente para el contexto de <strong>Costa Rica y Latinoamérica</strong>.</li>
        </ul>

        <h2>Nuestro compromiso</h2>
        <p>
          No vendemos humo ni promovemos herramientas que no probamos nosotros mismos. Cuando recomendamos
          algo, es porque entendemos cómo funciona, para quién es útil y, sobre todo, para quién no lo es
          todavía. Preferimos que tomes una decisión informada hoy a que te entusiasmes con algo que no
          vas a usar.
        </p>

        <p>
          ¿Tenés una pregunta, una sugerencia de tema o querés contarnos cómo tu negocio está usando la
          tecnología? Visitá nuestro <Link href="/blog">blog</Link> para conocer nuestros últimos artículos
          y seguinos para no perderte las próximas guías.
        </p>
      </div>
    </div>
  );
}
