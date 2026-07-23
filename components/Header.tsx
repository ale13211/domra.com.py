import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/categorias", label: "Categorías" },
  { href: "/tienda", label: "Tienda" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-black/5">
      <div className="bg-marca text-white text-center text-xs py-2 px-4">
        Envío gratis a todo el Paraguay · Pagás al recibir
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide text-marca">
          DOMRA
        </Link>
        <nav className="hidden md:flex gap-7 text-sm text-gray-600">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-marca transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/tienda"
          className="text-sm px-4 py-2 rounded-md bg-marca text-white hover:bg-banner transition-colors"
        >
          Comprar ahora
        </Link>
      </div>
    </header>
  );
}
