import Link from "next/link";

const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/blog?categoria=ia", label: "IA" },
  { href: "/blog?categoria=negocios", label: "Negocios" },
  { href: "/blog?categoria=herramientas", label: "Herramientas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-[#0A0A0A]">
          Nodo<span className="text-[#2563EB]">Tech</span>
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-black/70 transition-colors hover:text-[#2563EB]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/sobre-nosotros"
          className="rounded-full bg-[#0A0A0A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
        >
          Sobre nosotros
        </Link>
      </div>
    </header>
  );
}
