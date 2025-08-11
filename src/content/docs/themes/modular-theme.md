---
title: Modular Theme
description: Liferay Modular JS Theme Module
---

Liferay 7.4+ supports **JavaScript-based themes** (also called **JS themes**) as part of its modular theme architecture. These themes use modern frontend tooling (npm, Webpack, Gulp) and follow Liferay's **Clay UI** design system for a consistent look and feel.

### Key Features

✔ **Built with ES6+ JavaScript** (instead of jQuery)  
✔ **Uses Liferay’s JS Toolkit** for optimization  
✔ **Supports React components** (for dynamic UIs)  
✔ **Modular & reusable** (via theme contributions)  
✔ **Better performance** (code-splitting, minification)

---

## JS Theme File Structure

A typical JS theme has this structure:

```
my-js-theme/
├── src/
│   ├── css/                → SCSS/LESS files
│   │   └── _custom.scss    → Custom styles
│   ├── js/                 → JavaScript modules
│   │   ├── main.js         → Entry point
│   │   └── components/     → React/Vue components (optional)
│   └── templates/          → Freemarker/Soy templates
│       ├── portal_normal.ftl → Main layout
│       └── portlet.ftl     → Portlet styling
├── .js-themetoolkitrc      → JS Toolkit config
├── gulpfile.js            → Build tasks (Gulp)
├── package.json           → npm dependencies
└── liferay-theme.json     → Theme metadata
```

### Key Files Explained

1. **`src/js/main.js` (JavaScript Entry Point)**

   - Initializes theme scripts.
   - Example:
     ```js
     import "./liferay/global"; // Liferay global vars
     import "./components/navbar"; // Custom React component
     ```

2. **`src/css/_custom.scss` (Sass Styles)**

   - Custom CSS using **Clay variables** for theming.
   - Example:
     ```scss
     body {
       background: $light;
       font-family: $font-family-base;
     }
     ```

3. **`src/templates/portal_normal.ftl` (Main Template)**

   - Uses **Freemarker** (or **Soy**) for dynamic HTML.
   - Can include JS modules:
     ```html
     <script src="${javascript_folder}/main.js" type="module"></script>
     ```

4. **`package.json` (npm Dependencies)**
   - Manages JS libraries (e.g., React, Clay, Bootstrap).
   - Example:
     ```json
     {
       "dependencies": {
         "clay": "3.x.x",
         "react": "^18.x"
       }
     }
     ```

---

## JS Theme vs. Classic Theme

| Feature         | **JS Theme (7.4+)**  | **Classic Theme (Legacy)** |
| --------------- | -------------------- | -------------------------- |
| **JS Engine**   | ES6+ (Webpack)       | jQuery                     |
| **Styling**     | Sass/LESS            | Plain CSS                  |
| **Templating**  | Freemarker/Soy       | Freemarker only            |
| **Build Tool**  | npm + Gulp           | Ant/Maven                  |
| **Components**  | React/Vue            | Themelets                  |
| **Performance** | Optimized (minified) | Basic bundling             |

---

## How to Develop a JS Theme in Liferay 7.4?

### 1. Set Up the Theme

```sh
npm install -g yo generator-liferay-theme
yo liferay-theme
# Choose "JavaScript Theme"
```

### 2. Customize JavaScript

- Add ES6 modules in `src/js/`.
- Use **React** for dynamic components (optional).

### 3. Modify Styles (Sass)

- Override Clay variables (`_variables.scss`).
- Import Bootstrap 4 & Clay mixins.

### 4. Build & Deploy

```sh
npm install
gulp build && gulp deploy
```

---

## Best Practices for JS Themes

✔ **Use Liferay’s JS Toolkit** for optimized builds.  
✔ **Leverage Clay UI** for consistent design.  
✔ **Avoid jQuery** (use ES6+ or React instead).  
✔ **Split code** (dynamic imports for better performance).  
✔ **Test in Liferay’s "dev" mode** (`gulp watch`).

---

## Conclusion

JS themes in **Liferay 7.4+** are the modern way to build themes:

- **ES6+ & React** support
- **Sass/LESS** for maintainable styling
- **Optimized builds** via Webpack/Gulp

For new projects, **always prefer JS themes** over classic WAR themes.
