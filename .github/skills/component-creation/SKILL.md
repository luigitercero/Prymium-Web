---
name: component-creation
description: "Create new React components for Prymium-Web. Use when: adding a component, creating a new UI section, building a reusable element, scaffolding a component with styles."
---

# Component Creation

## When to Use
- Creating a new reusable component
- Adding a new section to a page
- Building a UI element with its own styles

## Procedure

### 1. Decide the component type

| Type | Structure | When |
|------|-----------|------|
| Simple (no custom styles) | `src/components/MyComponent.jsx` | Uses only global classes |
| Complex (with styles) | `src/components/MyComponent/index.jsx` + `styles.module.scss` | Needs scoped CSS |

### 2. Create the component file

Follow this exact template:

```jsx
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const MyComponent = ({ title, items }) => {
  return (
    <section className={styles.wrapper}>
      <h2>{title}</h2>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
};

// Helper sub-components: define here, do NOT export
const ItemCard = ({ item }) => (
  <div className={styles.card}>
    <h3>{item.name}</h3>
  </div>
);

export default MyComponent;
```

### 3. Create the styles file (if complex component)

```scss
@import '../../styles/globals/settings.scss';

.wrapper {
  padding: 24px $margin-left-right;
}

.card {
  border-radius: 16px;
  background-color: $white;
  padding: 18px;

  h3 {
    @include font-set(2, 1.2em, $textColor);
  }

  @include mq('small-screen', 'min') {
    padding: 24px;
  }
}
```

### 4. Rules

- Import alias: `import MyComponent from '@components/MyComponent'`
- Props destructured in param: `({ title, items }) =>`
- Single `export default` at bottom
- Use `next/link` with `legacyBehavior` for navigation links
- Use `next/image` or `next/legacy/image` for optimized images
- CSS Module import variable: always `styles` (lowercase)
- SCSS: import `settings.scss` to access `$margin-left-right`, color vars, and mixins
- Available mixins: `mq()`, `font-set()`, `abs()`
- Available colors: `$primaryColor` (gold), `$secondaryColor` (dark brown), `$textColor`, `$backgroundLightColor`, `$enfasisColor`, `$white`

### 5. Wire to container/page

After creating the component, import it in the container that needs it:

```jsx
import MyComponent from '@components/MyComponent';
```

Components NEVER fetch data — they receive everything via props from containers.
