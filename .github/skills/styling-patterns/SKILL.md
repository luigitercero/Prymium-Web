---
name: styling-patterns
description: "Style components and pages in Prymium-Web using SCSS. Use when: writing styles, adding responsive design, using color variables, creating SCSS modules, applying breakpoints, using font mixins."
---

# Styling Patterns

## When to Use
- Writing new SCSS styles for a component or page
- Applying responsive breakpoints
- Using the project color palette or typography

## Dual Styling System

| Approach | File location | Import | Class usage |
|----------|--------------|--------|-------------|
| Global SCSS | `src/styles/components/name.scss` | Added to `pages/_app.jsx` | `className="my-class"` |
| CSS Modules | `src/components/Name/styles.module.scss` | `import styles from './styles.module.scss'` | `className={styles.myClass}` |

**Prefer CSS Modules** for new components. Use global SCSS only for layout-level styles.

## Available Variables

### Colors (`src/styles/globals/colors.scss`)

```scss
$primaryColor: #e2b85c;         // Gold — buttons, accents
$secondaryColor: #553b00;       // Dark brown — secondary text
$textColor: #1a1200;            // Near-black — body text
$enfasisColor: #fff0cf;         // Light gold — hover/emphasis backgrounds
$backgroundLightColor: #fff7e2; // Cream — section backgrounds
$white: #ffff;
$gray-light: #f7f7f8;
$gray-medium: #edeef0;
$gray-semi-dark: #aeadb3;
$gray-dark: #87868a;
```

### Spacing

```scss
$margin-left-right: 3vw;  // Standard horizontal padding
$header-size: 480px;       // Header height
```

## Mixins

### `mq($breakpoint, $type)` — Responsive breakpoints

```scss
// Mobile-first (min-width) — DEFAULT
@include mq('small-screen') { /* >= 576px */ }
@include mq('medium-screen') { /* >= 769px */ }

// Max-width
@include mq('small-screen', 'max') { /* < 576px */ }

// All breakpoints:
// u-small-screen: 320px  |  x-small-screen: 360px  |  small-screen: 576px
// medium-screen: 769px    |  large-screen: 992px     |  mid-large-screen: 1025px
// x-large-screen: 1200px  |  wide-screen: 1440px     |  full-hd: 1920px
```

### `font-set($type, $size, $colour)` — Typography

```scss
// $type: 1=regular, 2=bold, 3=secondary
@include font-set(1, 1em, $textColor);       // Regular text
@include font-set(2, 1.8em, $primaryColor);  // Bold heading
```

### `abs($top, $right, $bottom, $left)` — Absolute positioning

```scss
@include abs(0, 0, false, false);  // Top-right corner
```

## CSS Module Template

```scss
@import '../../styles/globals/settings.scss';

.wrapper {
  padding: 24px $margin-left-right;
  background-color: $backgroundLightColor;
}

.title {
  @include font-set(2, 1.8em, $textColor);
  margin: 0 0 16px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @include mq('small-screen', 'min') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mq('medium-screen', 'min') {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  border-radius: 16px;
  border: 1px solid rgba($secondaryColor, 0.25);
  background-color: $white;
  padding: 18px;

  h3 {
    @include font-set(2, 1.2em, $textColor);
  }

  p {
    @include font-set(1, 0.95em, $secondaryColor);
    line-height: 1.45;
  }
}
```

## Rules

- Always import `settings.scss` at top — it pulls in colors, fonts, breakpoints
- CSS Module import variable: always `styles` (lowercase)
- Mobile-first design: base styles for mobile, `mq()` for larger screens
- Use `$margin-left-right` for horizontal padding consistency
- Use project color variables — never hardcode hex values
- Font family is Lato — use `font-set()` mixin, do not set `font-family` directly
