---
description: "Rules for writing SCSS styles in Prymium-Web. Use when creating or modifying stylesheets."
applyTo: "src/**/*.scss"
---

# SCSS Rules

- Always import settings at top: `@import '../../styles/globals/settings.scss';`
- Use project color variables ($primaryColor, $textColor, etc.) — never hardcode hex
- Use `mq()` mixin for responsive breakpoints (mobile-first)
- Use `font-set()` for typography — do not set font-family directly
- Use `$margin-left-right` for horizontal padding
- Global class names: kebab-case (`products-container`)
- CSS Module class names: camelCase or snake_case (`styles.hero`, `styles.item_title`)
