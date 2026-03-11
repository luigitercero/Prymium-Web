---
name: api-data-fetching
description: "Fetch data from WordPress API in Prymium-Web. Use when: fetching products, categories, questions, sliders, connecting to backend, using getStaticProps, adding API endpoints."
---

# API & Data Fetching

## When to Use
- Fetching product, category, or question data
- Creating new `getStaticProps` / `getStaticPaths`
- Adding a new API endpoint or data source

## Backend

WordPress headless CMS at `https://prymium.nuevoestilosa.com/` with custom REST API namespace `pg/v1`.

## Category Slugs (used in `/tienda/[group]`)

| Slug | Category | URL |
|------|----------|-----|
| `lavatrastos` | Lavatrastos / Fregaderos | `/tienda/lavatrastos` |
| `mezcladoras` | Mezcladoras de cocina | `/tienda/mezcladoras` |
| `accesorios` | Accesorios | `/tienda/accesorios` |
| `bidets` | Bidets | `/tienda/bidets` |
| `bath` | Grifos de baño | `/tienda/bath` |
| `duchas` | Duchas | `/tienda/duchas` |
| `extractores` | Extractores / Campanas | `/tienda/extractores` |

## Available Endpoints

All endpoints are defined in `src/routes/Config.jsx`:

| Function / Object | URL Pattern | Returns |
|-------------------|-------------|---------|
| `getProducts.url` | `/wp-json/pg/v1/novedades/250` | All products (up to 250) |
| `getCatergories.url` | `/wp-json/pg/v1/categories` | All product categories |
| `getSlidersSinks.url` | `/wp-json/pg/v1/sliders/fregaderos` | Sink slider images |
| `getSlidersBidet.url` | `/wp-json/pg/v1/sliders/bidets` | Bidet slider images |
| `getQuestion.url` | `/wp-json/pg/v1/preguntas/` | All FAQ questions |
| `getOneQuestion(id)` | `/wp-json/pg/v1/preguntas/${id}` | Single question by ID |
| `singleProductUrl(slug)` | `/wp-json/pg/v1/product/${slug}` | Single product by slug |
| `singleCategoryUrl(cat)` | `/wp-json/pg/v1/per-category/${cat}` | Products in category |
| `getRecomended(id)` | `/wp-json/pg/v1/per-category/${id}` | Related products |
| `feedback()` | `/wp-json/contact-form-7/v1/contact-forms/15/feedback` | Contact form submission |

## Data Fetching Pattern

Data is ALWAYS fetched in `getStaticProps` inside `pages/`, never in components or containers.

```jsx
import { getProducts, singleCategoryUrl } from '@routes/Config';

// Static page
export const getStaticProps = async () => {
  const res = await fetch(getProducts.url);
  const products = await res.json();
  return { props: { products } };
};

// Dynamic page with paths
export const getStaticPaths = async () => {
  const res = await fetch(getCatergories.url);
  const categories = await res.json();
  return {
    paths: categories.map((c) => ({ params: { group: c.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(singleCategoryUrl(params.group));
  const products = await res.json();
  return { props: { products } };
};
```

## Adding a New Endpoint

1. Define it in `src/routes/Config.jsx`:

```jsx
export const getNewData = {
  url: `${url}wp-json/pg/v1/new-endpoint`
};
// or as a function for dynamic params:
export const getNewDataById = (id) => {
  return `${url}wp-json/pg/v1/new-endpoint/${id}`;
};
```

2. Import and use in the page's `getStaticProps`:

```jsx
import { getNewData } from '@routes/Config';
```

## WordPress Backend Data Structures

The PHP API is defined in `src/function_theme/api.php` (git-ignored, reference only).

### Custom Post Types
- **producto** — Products with custom fields: `precio`, `Accesorio`, `datos_tecnicos`, `medidas`, `patente`, `video`
- **preguntas** — FAQ entries (supports REST API via `show_in_rest`)
- **slides** — Slider images with custom field `link_to_product`

### Taxonomy
- **category** (built-in) — Used to group products by type (fregaderos, bidets, mezcladoras, etc.)
- **categoria-productos** — Custom taxonomy registered but used separately

### API Note: `lavatrastos` → `fregaderos`
The `per-category` endpoint maps the slug `lavatrastos` to the WordPress category `fregaderos` internally. The frontend uses `lavatrastos` everywhere.

### Product Response (`novedades`, `per-category`)

```js
{
  id: Number,
  imagen: String,          // Featured image (medium)
  link: String,            // post_name slug (e.g. "1820T")
  title: String,
  accesorio: String,       // Custom field "Accesorio"
  price: String,           // Custom field "precio"
  category: [{ name, slug, term_id, ... }],  // WP term objects
  update_date: String,     // Only in novedades endpoint
}
```

### Single Product Response (`product/{slug}`)

```js
{
  id: Number,
  imagen: String,
  link: String,
  title: String,
  content: String,         // Full post content (HTML)
  accesorio: Array,        // Array of accessories (meta, multiple)
  datos_tecnicos: Array,   // Technical specs (meta, multiple)
  medidas: String,         // Dimensions
  patente: String,         // Patent info
  price: String,
  category: Array,
  video: String,           // YouTube video ID/URL
}
```

### Slider Response (`sliders/{taxonomy}`)

```js
{
  id: Number,
  imagen_large: String,
  imagen_mini: String,     // Thumbnail
  imagen_medium: String,
  alt: String,             // "fotografia de" + title
  name: String,
  link: String,            // Custom field "link_to_product"
  titulo: String,
  description: String,     // Post content
}
```

### Question Response (`preguntas/`, `preguntas/{id}`)

```js
{
  id: Number,
  imagen: String,          // Large image
  alt: String,
  name: String,
  link: String,            // post_name slug
  titulo: String,
  description: String,     // Post content (HTML)
}
```

### Categories Response (`categories/`)
Hardcoded list, not from DB:

```js
[
  { category: "fregaderos", alias: "lavatrastos", title: "lavatrastos" },
  { category: "bidets",     alias: "bidets",      title: "bidets" },
  { category: "grifos",     alias: "grifos",      title: "grifos" },
  { category: "accesorios", alias: "accesorios",  title: "accesorios" },
  { category: "mezcladoras",alias: "mezcladoras", title: "mezcladoras" },
  { category: "bath",       alias: "bath",        title: "Grifos para Sanitario" },
  { category: "duchas",     alias: "duchas",      title: "Duchas" },
  { category: "extractores",alias: "extractores", title: "Extracotores de olores" },
  { category: "oficina",    alias: "oficina",     title: "Productos para oficina" },
]
```

## Filtering

Two filter utilities exist in `src/hooks/useFilterProducts.jsx`:

```jsx
import { getGroup, singleFilter } from '@hooks/useFilterProducts';

// Filter by category name
const filtered = getGroup('lavatrastos', products);

// Filter by product link/slug
const single = singleFilter('1820T', products);
```

## Rules

- Never fetch data inside components or containers — always in `getStaticProps`
- Import endpoints from `@routes/Config` — never hardcode URLs
- Use `fallback: false` for `getStaticPaths` (all pages pre-built)
- The `BASE_URL` export (`https://www.lavatrastosprymium.com/`) is for canonical URLs and SEO
