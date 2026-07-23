import Link from "next/link";
import { categorias } from "@/data/categorias";
import { productos } from "@/data/productos";

export default function CategoriasPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-14">
      <h1 className="text-2xl font-semibold text-marca mb-8">Categorías</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categorias.map((cat) =>
          cat.activa ? (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="bg-suave rounded-card p-6 text-center hover:bg-marca hover:text-white transition-colors group"
            >
              <div className="font-medium text-marca group-hover:text-white">{cat.nombre}</div>
              <div className="text-xs text-gray-500 group-hover:text-white/70 mt-1">
                {productos.filter((p) => p.categoria === cat.slug).length} productos
              </div>
            </Link>
          ) : (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="relative bg-suave rounded-card p-6 text-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="absolute top-2 right-2 text-[10px] bg-marca text-white px-2 py-0.5 rounded-full">
                Próximamente
              </div>
              <div className="font-medium text-marca">{cat.nombre}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
