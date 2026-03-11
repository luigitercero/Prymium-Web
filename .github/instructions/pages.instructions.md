---
description: "Rules for editing Next.js page files in Prymium-Web. Use when creating or modifying page routes."
applyTo: "pages/**/*.{jsx,js}"
---

# Page Rules

- Page component is always named `Principal`
- SEO wrapper: `import Head from '@hooks/useSEO'` (NOT `next/head`)
- Data fetching only in `getStaticProps` / `getStaticPaths` — never inside components
- Use `fallback: false` for `getStaticPaths`
- Import API endpoints from `@routes/Config` — never hardcode URLs
- Pattern: `<Head title="..." description="..."><Container data={data} /></Head>`
- Do NOT use `getServerSideProps` — this is a fully static site
