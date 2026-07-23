import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-marca text-white mt-20">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <div className="text-lg font-semibold mb-3">{siteConfig.nombre}</div>
          <p className="text-white/70">
            Cuidado e higiene dental con envío a todo el Paraguay.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Menú</div>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/categorias">Categorías</Link></li>
            <li><Link href="/tienda">Tienda</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Enlaces de interés</div>
          <ul className="space-y-2 text-white/70">
            <li>Formas de pago</li>
            <li>Política de envíos</li>
            <li>Garantías</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Redes</div>
          <a href={siteConfig.instagram} target="_blank" className="text-white/70 hover:text-white">
            Instagram @domrapy
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-white/50 py-5">
        © {new Date().getFullYear()} {siteConfig.nombre}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
