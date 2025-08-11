---
title: Theme
description: Liferay Theme Module
---

A **Freemarker-based theme** that controls the look-and-feel of a Liferay site.

- Customize colors, layouts, and styles.
- Implement brand-specific designs.

### Implementation

#### Create the Theme

```bash
blade create -t theme corporate-theme
```

#### Customize Key Files

```scss
// corporate-theme/src/css/_custom.scss
$primary: #2e5bff; // Brand blue

body {
  font-family: "Roboto", sans-serif;
}
```

```html
<!-- corporate-theme/src/main/resources/_unstyled/templates/portal_normal.ftl -->
<#assign logo_height = 60 />
<header class="corporate-header">
  <img src="${site_logo}" height="${logo_height}" />
</header>
```

#### Build and Deploy

```bash
blade gw deploy
```

### Use Cases

- **Rebranding**: Match corporate design guidelines.
- **Accessibility**: Implement high-contrast modes.

### Pro Tips

1. **Themes**:

   - Override specific components (e.g., `user_portlet.ftl`) for granular control.
   - Use `$themeDisplay` to access user/site data in templates.

2. **Explore**:
   - [**Theme Contributors**](/modules/theme-contributor) for global CSS/JS.
