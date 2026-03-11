---
name: page-creation
description: "Create new Next.js pages and containers for Prymium-Web. Use when: adding a new route, creating a new page, building a product listing page, adding a static or dynamic page."
---

# Page Creation

## When to Use
- Adding a new route/URL to the site
- Creating a new product category page
- Building a new static or dynamic page

## Architecture

Every page requires THREE files:

```
pages/my-page/index.jsx          → Next.js page (route + data fetching)
src/containers/MyPage.jsx         → Container (composes components)
src/components/SomeComponent.jsx  → Component(s) as needed
```

## Procedure

### 1. Create the page file

Static page at `pages/my-page/index.jsx`:

```jsx
import React from 'react';
import Head from '@hooks/useSEO';
import MyPageContainer from '@containers/MyPage';

export const getStaticProps = async () => {
  const response = await fetch('https://prymium.nuevoestilosa.com/wp-json/pg/v1/endpoint');
  const data = await response.json();

  return {
    props: { data },
    revalidate: 3600,
  };
};

const Principal = ({ data }) => {
  return (
    <Head
      title="Mi Pagina | Lavatrastos Prymium"
      description="Descripcion para SEO"
      img="/images/backgrounds/hero-image.webp"
    >
      <MyPageContainer data={data} />
    </Head>
  );
};

export default Principal;
```

For dynamic routes at `pages/my-page/[slug].jsx`:

```jsx
import React from 'react';
import Head from '@hooks/useSEO';
import MyPageContainer from '@containers/MyPage';
import { singleCategoryUrl } from '@routes/Config';

export const getStaticPaths = async () => {
  const res = await fetch('https://prymium.nuevoestilosa.com/wp-json/pg/v1/categories');
  const categories = await res.json();

  const paths = categories.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(singleCategoryUrl(params.slug));
  const data = await res.json();

  return { props: { data } };
};

const Principal = ({ data }) => {
  return (
    <Head title={data.name} description={data.description}>
      <MyPageContainer data={data} />
    </Head>
  );
};

export default Principal;
```

### 2. Create the container

At `src/containers/MyPage.jsx`:

```jsx
import React from 'react';
import SubHero from '@components/SubHero';
import ListOfProduct from '@components/ListOfProduct';

const MyPage = ({ data }) => {
  return (
    <div>
      <SubHero title="Mi Pagina" />
      <ListOfProduct products={data} title="Productos" />
    </div>
  );
};

export default MyPage;
```

### 3. Rules

- Page component is ALWAYS named `Principal`
- SEO wrapper is `Head` from `@hooks/useSEO` (NOT `next/head`)
- Data fetching goes in `getStaticProps` / `getStaticPaths` — never in component body
- `fallback: false` for static paths (pre-render all at build time)
- API base URL and endpoints defined in `src/routes/Config.jsx`
- Containers compose components — they don't render raw HTML
- Add new styles to `_app.jsx` imports if using global SCSS (not needed for CSS Modules)

### 4. Add navigation (optional)

Update `src/routes/Config.jsx` default export to add the new page to the nav menu:

```jsx
export default {
  // ...existing routes
  myPage: {
    name: "Mi Pagina",
    to: "/my-page",
    id: 6
  },
}
```
