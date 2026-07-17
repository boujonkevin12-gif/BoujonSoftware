# Boujon Software — Landing Page

Landing page premium construida con Next.js 15, TypeScript, Tailwind CSS y
Framer Motion, con estética minimalista inspirada en Vercel, Stripe, Linear y
Apple.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Para producción:

```bash
npm run build
npm run start
```

## Estructura del proyecto

```
app/
  layout.tsx        → Metadata SEO, fuente Inter, modo oscuro por defecto
  page.tsx           → Ensambla todas las secciones
  globals.css        → Estilos base, gradientes de texto, scrollbar

components/
  navbar.tsx         → Header fijo con blur al hacer scroll
  hero.tsx           → Sección principal + mockup de dashboard animado
  trusted-by.tsx     → Logos de empresas (placeholder)
  services.tsx       → Grid de 8 servicios con iconos
  portfolio.tsx       → Grid de proyectos (sección más importante)
  process.tsx        → Proceso de trabajo en 4 pasos
  why-us.tsx         → Estadísticas animadas
  tech-stack.tsx     → Marquee de tecnologías
  testimonials.tsx   → Testimonios de clientes
  cta.tsx            → Llamado a la acción final
  footer.tsx         → Redes sociales y contacto
  ui/
    button.tsx       → Botón reutilizable (variantes: primary, accent, outline, ghost)
    reveal.tsx       → Wrapper de animación al hacer scroll (Framer Motion)

lib/
  data.ts            → Todo el contenido editable: servicios, proyectos,
                        testimonios, stack tecnológico, stats, links sociales
  utils.ts           → Helper cn() para clases condicionales
```

## Cómo personalizar contenido

Casi todo el contenido (proyectos, servicios, testimonios, links sociales,
stack tecnológico) vive en **`lib/data.ts`**. Para reemplazar los proyectos de
ejemplo por los tuyos, editá el array `projects`:

```ts
export const projects: Project[] = [
  {
    name: "Nombre del proyecto",
    description: "Descripción corta",
    image: "URL de la imagen",
    technologies: ["Next.js", "TypeScript"],
    href: "https://tu-proyecto.com",
  },
  // ...
];
```

## Paleta de colores (tailwind.config.ts)

| Token             | Valor      | Uso                          |
| ----------------- | ---------- | ---------------------------- |
| `background`      | `#050505`  | Fondo general                |
| `accent`          | `#6E6BFF`  | Color de acento (violeta-azul) |
| `surface`         | `#0D0D0F`  | Fondo de cards                |
| `surface.border`  | `#1F1F23`  | Bordes sutiles                |
| `muted`           | `#9A9AA3`  | Texto secundario               |

## Notas

- El mockup del hero es un SVG/HTML animado con Framer Motion — no depende de
  imágenes externas.
- Las imágenes de portfolio usan Unsplash como placeholder; reemplazalas por
  capturas reales de tus proyectos.
- Los enlaces de redes sociales están en `lib/data.ts` (`socialLinks`).
