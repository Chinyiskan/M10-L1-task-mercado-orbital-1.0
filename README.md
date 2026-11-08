# MO-101 · Mercado Orbital: la tienda que reacciona

**Asignado por:** Nova, hangar de la Estación Umbral
**Archivo que tocas:** solo `src/App.jsx`
**Tiempo:** 35 minutos

Nova abrió un puesto de repuestos en la estación y ya funciona: el catálogo se pinta, el botón agrega al carrito y el panel lateral muestra lo que llevas. Le faltan tres detalles que viven fuera del JSX. Cada uno se resuelve con un `useEffect`.

## Arrancar

```bash
pnpm install
pnpm dev
```

Abre la consola del navegador (F12) y déjala abierta mientras trabajas.

> **¿Te salió `ERR_PNPM_IGNORED_BUILDS` al hacer `pnpm install`?**
> Es normal. pnpm bloquea por seguridad los scripts que traen los paquetes al instalarse, porque un paquete malicioso podría ejecutar código en tu computador. Si el paquete es de confianza (aquí es `esbuild`, que usa Vite), hay que darle permiso una vez:
>
> ```bash
> pnpm approve-builds
> ```
>
> Marca `esbuild` con la barra espaciadora, confirma con Enter y vuelve a correr `pnpm install`. Los avisos amarillos `[WARN]` de velocidad de descarga o de "Update available" se pueden ignorar.

## Tickets obligatorios

### Ticket 1 · La pestaña cuenta el carrito
La pestaña del navegador dice siempre "Mercado Orbital". Debe decir cuántas unidades hay en el carrito: `(3) Mercado Orbital`.

**Listo cuando:** agregas productos y el número de la pestaña sube. Al quitar uno del carrito, baja.

### Ticket 2 · El aviso se borra solo
Al agregar un producto aparece el aviso "Agregaste ... al carrito", pero se queda pegado. Debe desaparecer solo a los 2,5 segundos.

**Listo cuando:** agregas un producto, ves el aviso y a los 2,5 segundos se va. Si agregas un producto distinto antes de que se borre, el aviso cambia y espera 2,5 segundos más.

### Ticket 3 · Escape cierra el carrito
Abre el carrito con el botón de arriba a la derecha. La tecla Escape debe cerrarlo.

**Listo cuando:** abres el panel, presionas Escape y se cierra. Lo haces tres veces seguidas y sigue funcionando igual.

## Extra (opcional)
La tecla C abre el carrito si está cerrado y lo cierra si está abierto. Este efecto sí lee un estado: piensa qué va en el arreglo de dependencias.

## Pistas
Cada ticket tiene sus pistas en los comentarios de `src/App.jsx`. Los componentes de `src/components/` ya vienen listos: no hace falta abrirlos.
