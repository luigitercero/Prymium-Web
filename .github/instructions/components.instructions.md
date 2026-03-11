---
description: "Rules for editing React components in Prymium-Web. Use when creating or modifying JSX components."
applyTo: "src/components/**/*.{jsx,js}"
---

# Component Rules

- Functional arrow components, props destructured in params
- Single `export default` at bottom of file
- Helper sub-components defined in same file, never exported
- Use `next/link` with `legacyBehavior` for internal navigation
- CSS Module import variable: always lowercase `styles`
- Import aliases: `@components`, `@containers`, `@hooks`, `@routes`
- Components never fetch data — receive everything via props
- UI text in Spanish, code identifiers in English
