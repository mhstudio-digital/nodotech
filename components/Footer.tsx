import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-sm text-black/60 sm:flex-row sm:justify-between sm:px-6">
        <p>© 2025 NodoTech · Costa Rica</p>
        <nav className="flex items-center gap-6">
          <Link href="/" className="transition-colors hover:text-[#2563EB]">
            Inicio
          </Link>
          <Link href="/blog" className="transition-colors hover:text-[#2563EB]">
            Blog
          </Link>
          <Link href="/sobre-nosotros" className="transition-colors hover:text-[#2563EB]">
            Sobre nosotros
          </Link>
          <Link href="/privacidad" className="transition-colors hover:text-[#2563EB]">
            Política de Privacidad
          </Link>
          <Link href="/contacto" className="transition-colors hover:text-[#2563EB]">
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  );
}
