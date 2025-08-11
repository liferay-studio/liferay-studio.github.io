---
title: Creating a React-Powered Theme in Liferay 7.4
description: Liferay Theme Creating a React-Powered Theme in Liferay 7.4
---

Let's build a modern Liferay theme using React, ES6, and Sass. This guide assumes you have Node.js (v14+) and Java JDK (8+) installed.

## 1. Set Up the Development Environment

### Install Required Tools

```bash
npm install -g yo generator-liferay-theme gulp
```

### Create a New JS Theme

```bash
yo liferay-theme
```

- Select: **"Liferay Theme"** (not Classic)
- Theme name: **"my-react-theme"**
- Choose: **"JavaScript"** as the language
- Select: **"styled"** as the base theme

---

## 2. Add React Support

### Install React & Dependencies

```bash
cd my-react-theme
npm install react react-dom @clayui/core @liferay/frontend-js-react-web
```

### Configure JS Toolkit (`.js-themetoolkitrc`)

```json
{
  "exclude": {
    "nodePackages": ["react", "react-dom"]
  },
  "soy": {
    "enabled": false
  },
  "webpack": {
    "rules": [
      {
        "test": "\\.jsx?$",
        "exclude": "node_modules",
        "use": ["babel-loader"]
      }
    ]
  }
}
```

### Create a Babel Config (`.babelrc`)

```json
{
  "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

---

## 3. Build a React Component

### Create a Component (`src/js/components/Navbar.jsx`)

```jsx
import React from "react";
import { ClayVerticalNav } from "@clayui/nav";

export default function Navbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="navbar-container">
      <ClayVerticalNav items={items} />
    </div>
  );
}
```

### Initialize React (`src/js/main.js`)

```js
import React from "react";
import { render } from "react-dom";
import Navbar from "./components/Navbar";

// Render to a DOM element with ID "navbar-root"
if (document.getElementById("navbar-root")) {
  render(<Navbar />, document.getElementById("navbar-root"));
}
```

---

## 4. Add the Component to Your Theme

### Modify the Template (`src/templates/portal_normal.ftl`)

Add a mounting point for React:

```html
<div id="navbar-root"></div>

<script src="${javascript_folder}/main.js" type="module"></script>
```

### Style the Component (`src/css/_custom.scss`)

```scss
.navbar-container {
  background: $light;
  padding: 1rem;
  margin-bottom: 2rem;

  @include media-breakpoint-down(sm) {
    padding: 0.5rem;
  }
}
```

---

## 5. Build & Deploy

### Run Development Mode (Live Reload)

```bash
gulp watch
```

### Build for Production

```bash
gulp build
```

### Deploy to Liferay

```bash
gulp deploy
```

---

## 6. Verify in Liferay

1. Go to **Control Panel → Configuration → Instance Settings**
2. Select your theme under **"Look and Feel"**
3. Visit any page to see your React-powered navbar!

---

## Key Takeaways

✔ **React works seamlessly** with Liferay 7.4+ themes  
✔ **Clay UI components** provide Liferay-consistent styling  
✔ **Webpack + Babel** handle modern JS/JSX compilation  
✔ **`gulp watch`** enables hot-reloading for faster development

---

## Next Steps You Might Try

➡ **Add a React portlet** to your theme  
➡ **Use Liferay's Headless APIs** with `fetch`  
➡ **Implement theme contributions** for modular overrides
