# Prymium-Web — Project Guidelines

## Overview

Product catalog website for **Lavatrastos Prymium** (kitchen sinks, bidets, accessories from Guatemala). Built with Next.js 15, React 19, SCSS, and a headless WordPress backend.

## Tech Stack

- **Framework:** Next.js 15 (Pages Router — NOT App Router)
- **UI:** React 19 functional components, framer-motion for animations, Swiper for carousels
- **Styling:** SCSS — dual approach: global SCSS (imported in `_app.jsx`) + CSS Modules (`.module.scss` co-located)
- **Data:** WordPress REST API at `prymium.nuevoestilosa.com` with custom `pg/v1` endpoints
- **SSG:** `getStaticProps` / `getStaticPaths` for all data fetching — no `getServerSideProps`
- **Analytics:** Google Tag Manager (`GTM-NKSQN8N`) + HubSpot

## Architecture

```
pages/              → Next.js pages (routing + data fetching)
src/
  components/       → Reusable UI pieces (receive props, no data fetching)
  containers/       → Page-level composition (combine components, receive data from pages)
  hooks/            → Custom hooks and utility functions
  context/          → React Context (exists but not actively used)
  routes/Config.jsx → API endpoint definitions and navigation config
  styles/           → Global SCSS (globals/, components/, container/)
  function_theme/   → WordPress PHP API (git-ignored, reference only)
```

**Data flow:** WordPress API → `getStaticProps` in pages → props to containers → props to components (props drilling, no Redux/Context).

## Code Conventions

### File naming
- `.jsx` for React files, `.js` for pure logic/config, `.scss` for styles
- Simple component: `ComponentName.jsx` directly in `components/`
- Complex component (with styles): `ComponentName/index.jsx` + `styles.module.scss`

### Import aliases (defined in `jsconfig.json`)
- `@components/*`, `@containers/*`, `@hooks/*`, `@routes/*`, `@context/*`, `@styles/*`

### Component patterns
- Always functional components with arrow functions
- Props destructured in parameter list: `({ title, image }) => { ... }`
- Single `export default` at file bottom
- Helper sub-components defined in same file, NOT exported
- Use `next/link` with `legacyBehavior` for internal links
- `React.memo()` only on container components that receive frequent re-renders

### Page pattern
- Every page component is named `Principal`
- Pattern: `const Principal = ({ data }) => (<Head ...><Container data={data} /></Head>)`
- `Head` is the SEO wrapper from `@hooks/useSEO` (NOT `next/head`)
- Data fetched in `getStaticProps`, never in the component body for pages

### Styling
- Global class names: kebab-case (`products-container`, `img-hero`)
- CSS Module class names: snake_case or camelCase (`styles.hero`, `styles.children_centered`)
- Import as `styles` (preferred), but `Styles` and `style` also appear
- Use `@import '../../styles/globals/settings.scss'` at top of module files
- Available SCSS mixins: `mq($breakpoint, $type)`, `font-set($type, $size, $colour)`, `abs($top, $right, $bottom, $left)`
- Breakpoints: `u-small-screen`, `x-small-screen`, `small-screen` (576px), `medium-screen` (769px), `large-screen` (992px), `x-large-screen` (1200px), `wide-screen` (1440px)

### Language
- All UI text, meta tags, and content in **Spanish**
- Code identifiers (variable/component names) in **English**

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
```

## SEO & Analytics

- **SEO wrapper:** `src/hooks/useSEO.jsx` — imported as `Head` on every page. Generates meta, OG, Twitter, canonical, JSON-LD (LocalBusiness)
- **Product structured data:** `src/hooks/useEriquesido.js` — generates Product JSON-LD for detail pages
- **llms.txt:** `public/llms.txt` — describes the site for AI crawlers. Update when adding categories or pages
- **robots.txt:** `public/robots.txt` — references sitemap
- **Sitemap:** `pages/api/sitemap.js` — dynamic XML sitemap
- **GTM:** `GTM-NKSQN8N` — loaded in `_app.jsx` via `react-gtm-module`. Google Ads, Facebook Pixel, and GA4 are configured as tags inside GTM
- **HubSpot:** ID `8323542` — loaded in `_document.jsx`
- **Environment variables:** Analytics IDs should use `process.env.NEXT_PUBLIC_*` — see `.env.example`

### Social Profiles
- Facebook: https://www.facebook.com/lavatrastosprymium
- Instagram: https://www.instagram.com/lavatrastosprymium/
- YouTube: https://www.youtube.com/@lavatrastosprymium6962

## Legacy Files (DO NOT modify)

These exist from a previous Webpack SPA iteration and are NOT part of the Next.js pipeline:
- `webpack.config.js`, `tools/index.js`, `src/initiaState.js`, `src/index.js`, `function.php`, `src/routes/App.jsx`
