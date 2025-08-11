---
title: Liferay Themes
slug: themes/liferay-themes
description: Liferay Themes development guide
---

Liferay themes define the **look and feel** of your Liferay DXP portal. They control layouts, styles, navigation, and responsiveness while ensuring a consistent user experience.

---

## Types of Themes in Liferay 7.4+

Liferay 7.4 and later versions primarily use **modular themes** built with modern frontend tools. Here are the key theme types:

### 1. Modular Themes (Recommended)

- **Purpose**: Standard themes for customizing portal UI.
- **Tech Stack**:
  - **Frontend**: **Bootstrap 4**, **Clay UI** (Liferay’s design system)
  - **Styling**: **Sass (SCSS)** (preferred) or **LESS**
  - **Templating**: **Freemarker** (legacy) & **Soy (Closure Templates)** (modern)
  - **JavaScript**: **ES6+**, **React** (for fragments & widgets)
  - **Build Tools**: **npm/yarn**, **Gulp**, **Webpack**, **Liferay JS Toolkit**
- **Key Features**:
  - Component-based architecture
  - Better performance with optimized builds
  - Supports **theme contributions** (partial overrides)

### 2. Admin & Control Panel Themes

- **Purpose**: Customize Liferay’s admin dashboard and control panel.
- **Tech Stack**: Same as modular themes but with restricted UI changes.

### 3. Classic (WAR) Themes (Legacy - Avoid for New Projects)

- **Purpose**: Older Freemarker-based themes (pre-7.0 style).
- **Tech Stack**: Freemarker, jQuery, plain CSS.
- **Limitations**: Less maintainable, not optimized for Liferay 7.4+.

---

## Theme Structure (Liferay 7.4+)

A typical theme project includes:

```
my-theme/
├── src/
│   ├── css/        → Sass/LESS files
│   ├── js/         → ES6+/React components
│   ├── templates/  → Freemarker/Soy templates
│   └── WEB-INF/    → Configuration (liferay-look-and-feel.xml)
├── package.json    → npm dependencies
├── gulpfile.js     → Build tasks (Gulp)
└── .js-themetoolkitrc → Liferay JS Toolkit config
```

---

## Key Tools & Workflow

### 1. Theme Development Tools

- **Liferay Theme Generator** (`yo liferay-theme`) → Scaffolds new themes.
- **Gulp Tasks** (`gulp watch`, `gulp build`) → Live reloading & deployment.
- **Liferay JS Toolkit** → Optimizes JS/CSS for production.

### 2. Recommended Development Flow

1. **Generate a theme**:
   ```sh
   npm install -g yo generator-liferay-theme
   yo liferay-theme
   ```
2. **Customize styles** (Sass/JS) and templates.
3. **Preview changes** with `gulp watch`.
4. **Deploy** using `gulp deploy`.

---

## Best Practices for Liferay 7.4+ Themes

✔ **Use Clay UI** for consistent Liferay styling.  
✔ **Leverage theme contributions** (instead of full theme overrides).  
✔ **Optimize assets** (minify CSS/JS, use lazy loading).  
✔ **Follow responsive design** (Bootstrap 4 grid system).  
✔ **Avoid modifying core files**—extend instead of overriding.

---

## Conclusion

For **Liferay 7.4+**, **modular themes** (Bootstrap 4 + Clay + Sass + JS Toolkit) are the standard.

- **Start with** `yo liferay-theme`
- **Use Gulp & npm** for builds
- **Extend rather than replace** core styles

Would you like a deeper dive into any specific area? 🚀
