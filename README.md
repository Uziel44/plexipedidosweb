# Plexi Pedidos — Landing

Landing de Plexi Pedidos armada con React + Vite + Tailwind, con componentes
estilo shadcn/ui (`Button`, `Card`) y íconos de `lucide-react`. Tomé como
punto de partida el flujo de secciones que ya usás en Betty (hero → problema
→ features → cómo funciona → planes → testimonio → FAQ → CTA final), pero
con contenido y diseño propios, sin copiar texto ni imágenes de Pedix.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

Para generar la versión de producción:

```bash
npm run build
```

Los archivos quedan en `dist/`, listos para subir a cualquier hosting
estático (Cloudflare Pages, Vercel, Netlify, etc. — igual que hacés con tus
otras webs).

## Qué falta antes de publicar

- [ ] Cambiar `WHATSAPP_LINK` en `src/App.jsx` por tu número real (está en
      `https://wa.me/54...`).
- [ ] Revisar y confirmar los precios de los 3 planes (`PLANS` en
      `src/App.jsx`) — están puestos como referencia, no son definitivos.
- [ ] Reemplazar el testimonio de ejemplo por uno real, cuando tengas el
      primer cliente.
- [ ] Sumar tu logo (hoy el header usa solo texto "Plexi Pedidos").
- [ ] Revisar el link de Instagram del footer.

## Estructura

```
src/
  App.jsx              -> todas las secciones de la landing
  index.css            -> estilos globales + capas de Tailwind
  lib/utils.js          -> helper cn() para combinar clases
  components/ui/
    button.jsx          -> botón estilo shadcn con variantes (primary, gold, outline, ghost)
    card.jsx             -> tarjeta base estilo shadcn
```

## Sistema de diseño

- **Colores**: `paper` (fondo), `ink` (texto), `teal` (marca/confianza),
  `gold` (acento/CTA), `line` (bordes tipo ticket punteado).
- **Tipografías**: Space Grotesk (títulos), IBM Plex Sans (texto),
  IBM Plex Mono (números, precios, el "ticket" del hero).
- **Motivo visual**: pedidos como tickets/recibos — bordes punteados,
  números en monoespaciada — en vez del típico kit de tarjetas redondeadas
  con sombra.

Todo definido en `tailwind.config.js` si querés ajustar la paleta.
