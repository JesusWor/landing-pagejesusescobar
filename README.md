# Jesús Escobar — Portfolio v3 (estilo LeetCode)

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Estructura e interacción
inspiradas en la interfaz de LeetCode, aplicadas a tu propio contenido —
sin usar su logo ni marca.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo desplegarlo

```bash
npm run build
```

## Qué se llevó de LeetCode

- **Nav superior oscura** con pestañas (Explore / Projects / Skills / About Me).
- **`/portfolio`** = tabla de "problemas": columna de estado (check verde =
  demo en vivo, círculo naranja = solo GitHub, estrella = build de hardware),
  título, tags de stack, y dificultad (Easy/Medium/Hard con los mismos
  colores verde/amarillo/rojo), con filtro por dificultad arriba de la tabla.
- **Sidebar con donut de progreso**, igual al anillo de perfil de LeetCode.
- **`/portfolio/[slug]`** = página de detalle con panel dividido: enunciado
  del proyecto a la izquierda, panel tipo editor ("solution.md") con el stack
  y los botones de código/demo a la derecha.

## Estructura

```
app/
  layout.tsx              -> shell global (navbar, footer, fuentes)
  page.tsx                 -> Home / Explore
  portfolio/page.tsx       -> tabla de proyectos + progreso
  portfolio/[slug]/page.tsx-> detalle de un proyecto (panel dividido)
  about-me/page.tsx
  services/page.tsx        -> Skills
components/
  Navbar.tsx / Footer.tsx
  ProjectsTable.tsx         -> la tabla de "problemas"
  ProjectDetail (dentro de portfolio/[slug])
  DifficultyBadge.tsx
  StatusIcon.tsx
  ProgressDonut.tsx
data/
  data.tsx                  -> ÚNICA fuente de verdad
```

## Cómo agregar un proyecto

Todo vive en `data/data.tsx`, arreglo `dataProjects`. Cada proyecto necesita:

- `slug` (para su URL `/portfolio/tu-slug`)
- `difficulty`: `"Easy" | "Medium" | "Hard"`
- `status`: `"live"` (demo en vivo), `"github-only"` (solo código público),
  o `"hardware"` (build físico)

## Pendiente de tu lado

Las imágenes de proyectos referenciadas en algunos items (`/projects/*.png`)
son placeholders — el diseño actual ya no las muestra en las tarjetas (para
mantener el look de tabla), así que no es bloqueante. Si más adelante quieres
capturas de pantalla dentro del panel de detalle de cada proyecto, dime y lo
agrego.
