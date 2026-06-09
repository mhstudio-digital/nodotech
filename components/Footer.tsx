import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      {/* Banner MH Studio */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl bg-black px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Hecho por</p>
            <h3 className="text-white text-2xl font-bold tracking-tight">MH Studio</h3>
            <p className="text-white/70 text-sm mt-1 max-w-sm">
              Diseño web premium para restaurantes, negocios y emprendedores en Costa Rica.
            </p>
          </div>
          <a
            href="https://mhstudio-digital.github.io/mh-studio-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            Quiero mi sitio web →
          </a>
        </div>
      </div>

      {/* Links de pie */}
      <div className="mx-auto max-w-6xl flex items-center text-sm text-black/60 sm:flex-row sm:justify-between sm:px-6 px-4 pb-6 gap-4 flex-col">
        <p>© 2026 NodoTech · Costa Rica</p>
        <nav className="flex items-center gap-6">
          <Link href="/" className="transition-colors hover:text-[#2563a8]">Inicio</Link>
          <Link href="/blog" className="transition-colors hover:text-[#2563a8]">Blog</Link>
          <Link href="/sobre-nosotros" className="transition-colors hover:text-[#2563a8]">Sobre nosotros</Link>
          <Link href="/privacidad" className="transition-colors hover:text-[#2563a8]">Política de Privacidad</Link>
          <Link href="/contacto" className="transition-colors hover:text-[#2563a8]">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
