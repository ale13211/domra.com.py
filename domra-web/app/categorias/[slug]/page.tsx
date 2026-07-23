import { categorias } from "@/data/categorias";
import { productos } from "@/data/productos";
import { linkWhatsapp } from "@/data/config";
import ProductoCard from "@/components/ProductoCard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categorias.map((c) => ({ slug: c.slug }));
}

export default function CategoriaPage({ params }: { params: { slug: string } }) {
  const categoria = categorias.find((c) => c.slug === params.slug);
  if (!categoria) return notFound();

  if (!categoria.activa) {
    return (
      <div className="max-w-2xl mx-auto px-5 py-24 text-center">
        <div className="inline-block text-xs bg-suave text-marca px-3 py-1 rounded-full mb-4">
          Próximamente
        </div>
        <h1 className="text-2xl font-semibold text-marca mb-4">{categoria.nombre} llega pronto</h1>
        <p className="text-gray-600 mb-8">{categoria.descripcion}</p>
        <a
          href={linkWhatsapp(`Hola, quiero que me avisen cuando esté disponible ${categoria.nombre}`)}
          target="_blank"
          className="inline-block bg-marca text-white px-5 py-2.5 rounded-md text-sm"
        >
          Avisame cuando esté disponible
        </a>
      </div>
    );
  }

  const items = productos.filter((p) => p.categoria === categoria.slug);

  return (
    <div className="max-w-6xl mx-auto px-5 py-14">
      <h1 className="text-2xl font-semibold text-marca mb-2">{categoria.nombre}</h1>
      <p className="text-gray-500 mb-8">{categoria.descripcion}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((p) => (
          <ProductoCard key={p.slug} producto={p} />
        ))}
      </div>
    </div>
  );
}
