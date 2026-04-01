# Prymium-Web

Sitio web de catalogo para **Lavatrastos Prymium** (Guatemala), construido con **Next.js (Pages Router)**, **React**, **SCSS** y una API de WordPress.

## 1) Objetivo del proyecto

Este proyecto muestra el catalogo de productos (lavatrastos, mezcladoras, accesorios, bidets, duchas, extractores, etc.), landing pages, preguntas frecuentes y contacto.

Incluye:
- Render estatico con `getStaticProps` / `getStaticPaths`.
- SEO tecnico con metadatos, Open Graph, Twitter Cards y JSON-LD.
- Integraciones de marketing: Google Tag Manager y HubSpot.

## 2) Stack tecnico

- `next` `^15.5.12`
- `react` `^19.0.0`
- `sass` `^1.85.1`
- `framer-motion` para animaciones
- `swiper` para carruseles
- Backend de contenido: WordPress REST API (`pg/v1` + `contact-form-7`)

## 3) Requisitos

- Node.js 18+ recomendado
- npm 9+ recomendado

## 4) Instalacion y ejecucion

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en desarrollo:

```bash
npm run dev
```

3. Build de produccion:

```bash
npm run build
```

4. Levantar build de produccion:

```bash
npm run start
```

Scripts importantes:
- `npm run dev`: inicia Next.js en desarrollo.
- `npm run build`: genera build de produccion.
- `npm run start`: sirve la build de produccion.
- `npm run lint`: ejecuta ESLint con `--fix` sobre `src/`.
- `npm run format`: aplica Prettier a JSX/JS.

## 5) Estructura del proyecto

```text
pages/                Rutas Next.js + data fetching (SSG)
	_app.jsx            Carga estilos globales + GTM + Layout
	_document.jsx       Documento HTML base + script de HubSpot
	api/sitemap.js      Sitemap XML dinamico

src/
	components/         Componentes UI reutilizables (sin fetch)
	containers/         Composicion por pagina (reciben props)
	hooks/              SEO, JSON-LD, utilidades
	routes/Config.jsx   Endpoints y helpers de URLs API
	styles/
		globals/          Tokens, colores, tipografias, mixins
		components/       SCSS global por componente
		container/        SCSS global por contenedor/pagina

public/
	robots.txt
	llms.txt
	manifest.json
```

## 6) Arquitectura y flujo de datos

Flujo principal:
1. `pages/*` llama APIs en `getStaticProps` o `getStaticPaths`.
2. Los datos llegan como props a `containers/*`.
3. Los contenedores componen `components/*` y pasan props.

Reglas clave:
- Paginas no hacen fetch en el body del componente (usar SSG).
- Componentes de UI no hacen fetch (solo presentacionales).
- Las rutas API se toman desde `src/routes/Config.jsx`.

## 7) Rutas principales

- `/` Inicio
- `/productos` categorias
- `/tienda` catalogo
- `/tienda/[group]` listado por categoria
- `/tienda/detalle/[modelo]` detalle de producto
- `/preguntas` y `/preguntas/[id]`
- `/contacto`
- `/blog`
- `/api/sitemap`

## 8) APIs y endpoints

Archivo fuente: `src/routes/Config.jsx`.

Base:
- `url`: `https://prymium.nuevoestilosa.com/`
- `BASE_URL`: `https://www.lavatrastosprymium.com/`

Endpoints mas usados:
- `getProducts.url` -> `wp-json/pg/v1/novedades/250`
- `getQuestion.url` -> `wp-json/pg/v1/preguntas/`
- `getSlidersSinks.url` -> `wp-json/pg/v1/sliders/fregaderos`
- `getSlidersBidet.url` -> `wp-json/pg/v1/sliders/bidets`
- `getCatergories.url` -> `wp-json/pg/v1/categories`
- `singleProductUrl(product)` -> `wp-json/pg/v1/product/{product}`
- `singleCategoryUrl(category)` -> `wp-json/pg/v1/per-category/{category}`
- `getRecomended(relevante)` -> `wp-json/pg/v1/per-category/{relevante}`
- `feedback()` -> `wp-json/contact-form-7/v1/contact-forms/15/feedback`

Buenas practicas:
- No hardcodear endpoints en paginas/componentes.
- Si agregas una API nueva, declararla en `Config.jsx`.

## 9) SEO, GEO y metadatos

### Hook SEO central

- Archivo: `src/hooks/useSEO.jsx`
- Se usa en todas las paginas como wrapper `Head`.
- Gestiona:
	- `title`, `description`, `keywords`
	- Canonical dinamico con `router.asPath`
	- Open Graph (`og:*`)
	- Twitter Cards
	- JSON-LD `LocalBusiness`
	- JSON-LD extra por pagina (`structuredData`)

### JSON-LD de producto

- Archivo: `src/hooks/useEriquesido.js`
- Genera schema `Product` para paginas de detalle.

### Archivos SEO tecnico

- `public/robots.txt` referencia `https://www.lavatrastosprymium.com/api/sitemap`
- `pages/api/sitemap.js` genera XML con URLs estaticas + productos + preguntas.
- `public/llms.txt` describe el sitio para crawlers de IA.

## 10) Estilos CSS/SCSS y tema global

El proyecto usa SCSS global importado desde `pages/_app.jsx`.

### Donde editar el tema

Archivo principal de tokens:
- `src/styles/globals/theme.scss`

Aqui se centraliza:
- Colores de marca y neutros.
- Tipografias y pesos.
- Escala tipografica.
- Tokens especificos de `header` y `hero`.

### Cadena de estilos globales

- `src/styles/globals/theme.scss` -> tokens fuente
- `src/styles/globals/colors.scss` -> aliases de color y compatibilidad legacy
- `src/styles/globals/fonts.scss` -> familias, `@font-face` y mixin `font-set()`
- `src/styles/globals/settings.scss` -> importa `fonts`, `colors`, `mq` + mixins utilitarios
- `src/styles/globals/root_vars.scss` -> expone variables CSS en `:root`

### Convenciones de SCSS

- Usar variables del sistema (`$primary`, `$complement`, etc.), evitar hex hardcodeado.
- Usar mixin `mq()` para responsive.
- Usar mixin `font-set()` para tipografia.
- Clases globales: kebab-case.
- CSS Modules: camelCase o snake_case.

## 11) Componentes y contenedores

### Componentes (`src/components`)

Responsabilidad:
- Presentacion y UI reutilizable.
- Reciben datos por props.
- No deben hacer data fetching.

Ejemplos:
- `Hero.jsx`, `Header.jsx`, `Gallery.jsx`, `Footer.jsx`, `ContactForm.jsx`, `ListCards`, `SingleProduct/*`.

### Contenedores (`src/containers`)

Responsabilidad:
- Componer componentes por vista/pagina.
- Recibir datos de `pages` y distribuirlos por props.

Ejemplos:
- `Home.jsx`, `Tienda.jsx`, `Detalle.jsx`, `Contact.jsx`, `Questions/*`.

## 12) Convenciones de codigo

- Componentes React funcionales con arrow functions.
- Export default unico por archivo (al final).
- En paginas Next.js, el componente se nombra `Principal`.
- Import aliases definidos en `jsconfig.json`:
	- `@components/*`
	- `@containers/*`
	- `@hooks/*`
	- `@routes/*`
	- `@context/*`
	- `@styles/*`
- Idioma:
	- UI y contenido: espanol.
	- Identificadores de codigo: ingles.

## 13) Analytics y terceros

- Google Tag Manager en `pages/_app.jsx`:
	- ID: `GTM-NKSQN8N`
- HubSpot en `pages/_document.jsx`:
	- script id `hs-script-loader`
	- cuenta `8323542`

Recomendacion:
- Migrar IDs a `process.env.NEXT_PUBLIC_*` para facilitar entornos.

## 14) Redirects y configuracion Next

Archivo: `next.config.js`

Incluye:
- `sassOptions.includePaths` para `src/styles`.
- Redirects legacy (por ejemplo `/productos-2` -> `/tienda`, `/garantia` -> `/preguntas`).

## 15) Flujo recomendado para nuevas features

1. Agregar o actualizar endpoint en `src/routes/Config.jsx`.
2. Consumir datos en `pages/*` con `getStaticProps` / `getStaticPaths`.
3. Pasar datos a `containers/*`.
4. Renderizar UI en `components/*`.
5. Estilizar con SCSS usando tokens desde `theme.scss`.
6. Verificar SEO (title, description, canonical, schema).

## 16) Archivos legacy (no tocar)

Estos archivos existen por una etapa anterior y no son parte del flujo actual de Next.js:
- `webpack.config.js`
- `tools/index.js`
- `src/initiaState.js`
- `src/index.js`
- `function.php`
- `src/routes/App.jsx`

## 17) Comandos utiles de git

Ver estado:

```bash
git status --short
```

Commit excluyendo `worker.js`:

```bash
git add .
git reset worker.js
git commit -m "mensaje"
```

## 18) Referencias rapidas

- Sitio: https://www.lavatrastosprymium.com/
- API WP: https://prymium.nuevoestilosa.com/
- Facebook: https://www.facebook.com/lavatrastosprymium
- Instagram: https://www.instagram.com/lavatrastosprymium/
- YouTube: https://www.youtube.com/@lavatrastosprymium6962
