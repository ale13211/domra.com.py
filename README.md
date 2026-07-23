# DOMRA — sitio web (Next.js + React)

Tienda online de DOMRA construida con Next.js 14 (App Router), React y Tailwind CSS.
Misma estructura que WordPress/WooCommerce (Inicio, Categorías, Tienda, Producto, Nosotros, Contacto)
pero como aplicación React, dinámica y rápida.

## Cómo correrlo en tu computadora

1. Instalá [Node.js](https://nodejs.org/) (versión 18 o superior) si no lo tenés.
2. Abrí una terminal en esta carpeta y ejecutá:
   ```
   npm install
   npm run dev
   ```
3. Abrí `http://localhost:3000` en el navegador.

## Cómo agregar o editar productos

Todo el catálogo vive en un solo archivo: `data/productos.ts`.
Agregás un objeto nuevo al array y aparece automáticamente en la home, en la tienda,
en su categoría y tiene su propia página de producto — no hace falta tocar ningún
otro archivo.

Las categorías están en `data/categorias.ts`. Para activar Cuídalo360 el día que
tengas productos, solo cambiá `activa: false` a `activa: true` en ese archivo.

## Cómo cambiar datos generales (WhatsApp, Instagram, dominio)

Todo eso está en `data/config.ts`. Reemplazá el número de WhatsApp por el real
antes de publicar el sitio (ahora tiene un número de ejemplo).

## Fotos de producto

Van en `public/productos/`. Reemplazá `placeholder.svg` por las fotos reales y
actualizá la ruta `imagen` de cada producto en `data/productos.ts`.

## Cómo publicarlo online (dominio domra.com.py)

La forma más simple es con [Vercel](https://vercel.com) (gratis para este tamaño de sitio):
1. Subí esta carpeta a un repositorio de GitHub.
2. Entrá a vercel.com, conectá el repositorio y hacé clic en "Deploy".
3. Cuando el dominio `domra.com.py` esté registrado en NIC.py, en Vercel andá a
   Settings → Domains, agregalo, y seguí las instrucciones para apuntar los DNS.

## Qué falta antes de publicar

- Cargar el catálogo real completo en `data/productos.ts`
- Subir fotos reales de cada producto
- Poner el número de WhatsApp real en `data/config.ts`
- Sumar botón/carrito de pago real cuando definas el medio de cobro (transferencia, tarjeta, etc.)
- Cargar reseñas reales de clientes cuando las tengas (no se incluyeron testimonios inventados)
