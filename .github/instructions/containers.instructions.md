---
description: "Rules for container components in Prymium-Web. Use when creating or modifying page-level containers."
applyTo: "src/containers/**/*.{jsx,js}"
---

# Container Rules

- Containers compose components — avoid rendering raw HTML elements
- Receive data via props from pages, pass down to components
- Import components with aliases: `@components/ComponentName`
- Use `React.memo()` only when the container receives frequent re-renders
- No data fetching inside containers (except Blog which does client-side fetch as legacy pattern)
- Single `export default` at bottom
