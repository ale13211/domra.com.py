export type Categoria = {
  slug: string;
  nombre: string;
  descripcion: string;
  activa: boolean;
};

export const categorias: Categoria[] = [
  {
    slug: "cuidado-personal",
    nombre: "Cuidado personal",
    descripcion: "Productos de cuidado e higiene dental",
    activa: true,
  },
  {
    slug: "cuidalo360",
    nombre: "Cuídalo360",
    descripcion:
      "Cuidá el 100% de tu casa desde tu celular, computadora o notebook. Cámaras de seguridad y conectividad wifi para tu hogar.",
    activa: false,
  },
];
