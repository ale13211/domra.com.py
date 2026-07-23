import { productos } from "@/data/productos";
import { formatoGuarani, linkWhatsapp } from "@/data/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export default function ProductoPage({ params }: { params: { slug: string } }) {
  const producto = productos.find((p) => p.slug === params.slug);
  if (!producto) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-5 py-14 grid md:grid-cols-2 gap-10">
      <div className="h-72 bg-suave rounded-card flex items-center justify-center text-marca/30 text-sm">
        Foto del producto
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-marca mb-2">{producto.nombre}</h1>
        <div className="text-xl text-gray-700 mb-5">{formatoGuarani(producto.precio)}</div>
        <p className="text-gray-600 mb-4">{producto.descripcion}</p>
        <div className="text-sm text-gray-500 mb-8">
          <span className="font-medium text-marca">Incluye: </span>
          {producto.incluye}
        </div>
        <div className="flex gap-3">
          <button className="bg-marca text-white px-5 py-2.5 rounded-md text-sm">
            Añadir al carrito
          </button>
          <a
            href={linkWhatsapp(`Hola, quiero consultar sobre ${producto.nombre}`)}
            target="_blank"
            className="border border-marca text-marca px-5 py-2.5 rounded-md text-sm"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
