import Link from "next/link";
import { Producto } from "@/data/productos";
import { formatoGuarani } from "@/data/config";

export default function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <Link
      href={`/producto/${producto.slug}`}
      className="block bg-white rounded-card border border-black/5 p-4 hover:shadow-md transition-shadow"
    >
      <div className="h-32 bg-suave rounded-md mb-3 flex items-center justify-center text-marca/30 text-xs">
        Foto del producto
      </div>
      <div className="text-sm font-medium text-marca">{producto.nombre}</div>
      <div className="text-sm text-gray-500 mt-1">{formatoGuarani(producto.precio)}</div>
    </Link>
  );
}
