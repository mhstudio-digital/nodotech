import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conocé la misión de NodoTech: traducir las tendencias de inteligencia artificial, automatización y herramientas digitales al contexto de Latinoamérica, de forma práctica y sin complicaciones.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre nosotros | NodoTech",
    description:
      "Conocé la misión de NodoTech: traducir las tendencias de inteligencia artificial, automatización y herramientas digitales al contexto de Latinoamérica, de forma práctica y sin complicaciones.",
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
        Tecnología explicada para humanos
      </h1>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline">
        <p>
          La tecnología avanza más rápido de lo que la mayoría de los negocios puede asimilar. Cada
          semana aparecen nuevas herramientas de inteligencia artificial, plataformas de
          automatización y servicios digitales que prometen cambiarlo todo —pero pocas veces alguien
          se toma el tiempo de explicar, en lenguaje claro, qué significan realmente para un negocio
          pequeño o mediano de la región. Para eso existe NodoTech.
        </p>

        <h2>Nuestra misión</h2>
        <p>
          Nuestra misión es <strong>traducir las tendencias tecnológicas globales al contexto
          latinoamericano</strong>, de forma práctica y aplicable. No nos interesa repetir noticias
          que ya leíste en otro lado: nos interesa ayudarte a entender qué herramientas tienen
          sentido para tu negocio, en qué orden adoptarlas, con qué presupuesto y con qué
          expectativas realistas de resultado —sin jerga innecesaria y sin promesas exageradas.
        </p>

        <h2>Quiénes somos</h2>
        <p>
          Somos un <strong>blog independiente creado en Costa Rica</strong>, enfocado en ayudar a
          emprendedores y negocios de toda Latinoamérica a digitalizarse sin complicaciones. No
          dependemos de una sola marca ni promovemos herramientas que no entendemos: cuando
          recomendamos algo, es porque investigamos cómo funciona, para quién es útil y, sobre todo,
          para quién no lo es todavía.
        </p>
        <p>
          Creemos que digitalizar un negocio no debería sentirse como un salto al vacío. Por eso
          escribimos guías, comparativas y análisis pensados para personas que tienen un negocio que
          atender —no tiempo de sobra para descifrar manuales técnicos.
        </p>

        <h2>¿Necesitás ayuda profesional para dar el siguiente paso?</h2>
        <p>
          Leer y aprender es un excelente punto de partida, pero a veces lo que un negocio necesita
          es que alguien se encargue de construir su presencia digital de principio a fin. Si ese es
          tu caso, en <strong>MH Studio</strong> diseñamos sitios web para negocios en Costa Rica que
          generan resultados reales —y con gusto conversamos sobre tu proyecto.
        </p>
        <p>
          <Link
            href="https://wa.me/50683674466"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            💬 Hablemos por WhatsApp
          </Link>
        </p>
      </div>
    </div>
  );
}
