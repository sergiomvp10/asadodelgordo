# Asado del Gordo — sitio web

Página web de Asado del Gordo (Tunja, Duitama y Sogamoso). Lleva a los clientes a pedir en la tienda de Yuumi de cada sede.

## Editar contenido

Todo el contenido editable (sedes, horarios, teléfonos, enlaces de Yuumi, productos estrella, promos, opiniones y redes) está en `src/data/site.ts`.

- Fotos de productos: `public/img/productos/`
- Logos e ilustraciones del manual de marca: `public/brand/`

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run lint
npm run build    # genera dist/
```

## Medición

Los clics se envían como eventos de Google Analytics 4 (`pedido_click` con `sede` y `origen`, `telefono_click`, `como_llegar_click`, `resenas_click`, `promos_whatsapp_click`) si el script de GA está instalado en `index.html`.
