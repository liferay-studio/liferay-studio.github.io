---
title: JS Theme
description: Liferay JS Theme Module
---

A **modern theme** built with npm/Webpack (replaces Freemarker themes).

- Use Sass/React in themes.
- Hot-reload CSS/JS during development.

### Implementation

#### Create the Theme

```bash
blade create -t js-theme my-js-theme
```

#### Customize Styles

```scss
// my-js-theme/src/css/_custom.scss
$primary: #0066cc; // Blue brand color

body {
  font-family: "Arial", sans-serif;
}
```

#### Extend Base Theme

Override templates (e.g., `portal_normal.ftl`) in `src/templates/`.

### Use Cases

- **Branding**: Apply company colors/fonts globally.
- **Responsive Layouts**: Optimize for mobile/desktop.
