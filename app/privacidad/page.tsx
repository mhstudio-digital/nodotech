import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de NodoTech: cómo usamos cookies, Google AdSense y los datos de navegación de quienes visitan el sitio.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <span className="w-fit rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
        Legal
      </span>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0A0A0A] sm:text-5xl">
        Política de Privacidad
      </h1>
      <p className="mt-4 text-sm text-black/50">Última actualización: junio de 2025.</p>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline">
        <p>
          En <strong>NodoTech</strong> respetamos tu privacidad y queremos que sepas, de forma clara, qué
          información recopilamos cuando visitás nuestro sitio, cómo la usamos y qué opciones tenés al respecto.
          Al navegar en NodoTech, aceptás las prácticas descritas en esta política.
        </p>

        <h2>Datos de navegación que recopilamos</h2>
        <p>
          Como la mayoría de los sitios web, recopilamos automáticamente cierta información sobre tu visita:
          la página que consultás, el tiempo que pasás en el sitio, el tipo de dispositivo y navegador que usás,
          tu ubicación aproximada (a nivel de país o ciudad) y la página desde la que llegaste. Esta información
          es de carácter estadístico y nos ayuda a entender qué contenidos son útiles y a mejorar la experiencia
          de navegación. No la utilizamos para identificarte personalmente.
        </p>

        <h2>Uso de cookies</h2>
        <p>
          Este sitio utiliza <strong>cookies</strong>, que son pequeños archivos de texto que se almacenan en tu
          navegador. Las usamos para recordar tus preferencias, analizar cómo se usa el sitio y, en algunos casos,
          para mostrar publicidad relevante. Podés configurar tu navegador para rechazar todas las cookies o para
          que te avise cuando se envíe una cookie; sin embargo, si las desactivás, es posible que algunas partes
          del sitio no funcionen correctamente.
        </p>

        <h2>Google AdSense y publicidad</h2>
        <p>
          NodoTech utiliza <strong>Google AdSense</strong>, un servicio de publicidad de Google LLC, para mostrar
          anuncios en el sitio. Google y sus socios publicitarios pueden usar cookies y tecnologías similares para
          mostrar anuncios basados en tus visitas anteriores a este y otros sitios web. Google puede recopilar
          información a través de estas cookies con fines publicitarios.
        </p>
        <p>
          Podés revisar y ajustar las preferencias de anuncios personalizados de Google visitando la página de{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Configuración de anuncios de Google
          </a>{" "}
          o consultar más información sobre cómo Google utiliza los datos en{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/partner-sites
          </a>
          .
        </p>

        <h2>Cómo usamos la información</h2>
        <p>
          La información que recopilamos se utiliza exclusivamente para: (1) operar y mantener el sitio,
          (2) entender qué contenidos resultan más útiles para nuestra audiencia, (3) mostrar anuncios
          relevantes a través de Google AdSense, y (4) responder a tus consultas cuando nos contactás
          directamente. No vendemos ni compartimos tu información personal con terceros para fines distintos
          a los aquí descritos.
        </p>

        <h2>Enlaces a otros sitios</h2>
        <p>
          NodoTech puede incluir enlaces a sitios externos. No somos responsables de las prácticas de
          privacidad ni del contenido de esos sitios, por lo que te recomendamos revisar sus propias
          políticas de privacidad.
        </p>

        <h2>Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras
          prácticas o por motivos legales y operativos. Te recomendamos revisar esta página periódicamente.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tenés preguntas sobre esta política de privacidad o sobre cómo manejamos tus datos, podés
          escribirnos a través de nuestra página de <a href="/contacto">contacto</a>.
        </p>
      </div>
    </div>
  );
}
