import Link from "next/link";
import { categorias } from "@/data/categorias";
import { productos } from "@/data/productos";
import ProductoCard from "@/components/ProductoCard";
import { linkWhatsapp } from "@/data/config";

export default function HomePage() {
  const destacados = productos.filter((p) => p.destacado);

  return (
    <div className="max-w-6xl mx-auto px-5">
      {/* Hero */}
      <section className="bg-gradient-to-br from-banner to-marca rounded-card mt-8 px-8 py-16 text-center text-white">
        <div className="inline-block text-xs bg-white/10 px-3 py-1 rounded-full mb-4">
          Envío gratis a todo el Paraguay
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Tu sonrisa, nuestra especialidad</h1>
        <p className="text-white/80 max-w-xl mx-auto mb-6">
          Productos de cuidado e higiene dental, con envío a todo el Paraguay.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/tienda" className="bg-white text-marca px-5 py-2.5 rounded-md text-sm font-medium">
            Ver catálogo
          </Link>
          <a
            href={linkWhatsapp()}
            target="_blank"
            className="border border-white/40 px-5 py-2.5 rounded-md text-sm"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* Categorías */}
      <section className="mt-14">
        <h2 className="text-lg font-medium text-marca mb-4">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categorias.map((cat) =>
            cat.activa ? (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="bg-suave rounded-card p-5 text-center hover:bg-marca hover:text-white transition-colors group"
              >
                <div className="text-sm font-medium text-marca group-hover:text-white">{cat.nombre}</div>
                <div className="text-xs text-gray-500 group-hover:text-white/70 mt-1">
                  {productos.filter((p) => p.categoria === cat.slug).length} productos
                </div>
              </Link>
            ) : (
              <div
                key={cat.slug}
                className="relative bg-suave rounded-card p-5 text-center opacity-60"
              >
                <div className="absolute top-2 right-2 text-[10px] bg-marca text-white px-2 py-0.5 rounded-full">
                  Próximamente
                </div>
                <div className="text-sm font-medium text-marca">{cat.nombre}</div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Barra de confianza */}
      <section className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          ["Envío a todo el país", "Recibí en cualquier ciudad del Paraguay"],
          ["Pagás al recibir", "En Asunción y alrededores"],
          ["Garantía de satisfacción", "Atención directa por WhatsApp"],
        ].map(([title, desc]) => (
          <div key={title} className="border border-black/5 rounded-card p-5">
            <div className="text-sm font-medium text-marca">{title}</div>
            <div className="text-xs text-gray-500 mt-1">{desc}</div>
          </div>
        ))}
      </section>

      {/* Productos destacados */}
      <section className="mt-14 mb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-marca">Productos populares</h2>
          <Link href="/tienda" className="text-sm text-banner hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destacados.map((p) => (
            <ProductoCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
