export type Producto = {
  slug: string;
  nombre: string;
  categoria: string; // debe coincidir con un slug de categorias.ts
  precio: number;
  descripcion: string;
  incluye: string;
  destacado: boolean;
  imagen: string; // ruta en /public/productos/
};

// Para sumar un producto nuevo: agregá un objeto acá.
// Todas las páginas (home, tienda, categoría, ficha de producto) se actualizan solas.
export const productos: Producto[] = [
  {
    slug: "tiras-blanqueadoras-x14",
    nombre: "Tiras Blanqueadoras x14",
    categoria: "cuidado-personal",
    precio: 149000,
    descripcion:
      "Tiras blanqueadoras dentales profesionales para uso en casa. Aplicación de 30 minutos, resultados visibles desde la primera vez.",
    incluye: "14 tiras (7 aplicaciones), instructivo de uso",
    destacado: true,
    imagen: "/productos/placeholder.svg",
  },
  {
    slug: "pack-duo-tiras",
    nombre: "Pack Duo Tiras",
    categoria: "cuidado-personal",
    precio: 259000,
    descripcion:
      "Dos cajas de tiras blanqueadoras. Perfecto para hacerlo en pareja o regalar.",
    incluye: "2x cajas de tiras blanqueadoras",
    destacado: true,
    imagen: "/productos/placeholder.svg",
  },
  {
    slug: "kit-tiras-estuche",
    nombre: "Kit Tiras + Estuche",
    categoria: "cuidado-personal",
    precio: 199000,
    descripcion:
      "Tiras blanqueadoras con estuche de viaje incluido para conservarlas listas para usar.",
    incluye: "Caja de tiras blanqueadoras, estuche",
    destacado: true,
    imagen: "/productos/placeholder.svg",
  },
];
