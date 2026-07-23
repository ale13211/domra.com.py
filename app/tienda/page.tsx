import { productos } from "@/data/productos";
import { categorias } from "@/data/categorias";
import ProductoCard from "@/components/ProductoCard";
import Link from "next/link";

export default function TiendaPage({
  searchParams,
}: {
  searchParams: { categoria?: string };
}) {
  const filtro = searchParams.categoria;
  const lista = filtro ? productos.filter((p) => p.categoria === filtro) : productos;

  return (
    <div className="max-w-6xl mx-auto px-5 py-14">
      <h1 className="text-2xl font-semibold text-marca mb-6">Tienda</h1>

      <div className="flex gap-2 mb-8 flex-wrap">
        <Link
          href="/tienda"
          className={`text-xs px-3 py-1.5 rounded-full border ${
            !filtro ? "bg-marca text-white border-marca" : "border-black/10 text-gray-600"
          }`}
        >
          Todos
        </Link>
        {categorias
          .filter((c) => c.activa)
          .map((c) => (
            <Link
              key={c.slug}
              href={`/tienda?categoria=${c.slug}`}
              className={`text-xs px-3 py-1.5 rounded-full border ${
                filtro === c.slug ? "bg-marca text-white border-marca" : "border-black/10 text-gray-600"
              }`}
            >
              {c.nombre}
            </Link>
          ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {lista.map((p) => (
          <ProductoCard key={p.slug} producto={p} />
        ))}
      </div>
    </div>
  );
}
