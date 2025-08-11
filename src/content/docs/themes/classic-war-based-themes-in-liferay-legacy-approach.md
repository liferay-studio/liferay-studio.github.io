---
title: Classic/WAR-Based Themes in Liferay (Legacy Approach)
slug: themes/classic-war-based-themes-in-liferay-legacy-approach
description: Liferay WAR Themes Module
---

Classic themes (also called **WAR-based themes**) were the standard before Liferay 7.0. They are **deprecated** in Liferay 7.4+ but may still be encountered in older projects.

### Key Characteristics

✔ **Deployed as `.war` files** (not OSGi modules)  
✔ **Freemarker-based templating** (no Soy/React)  
✔ **Uses Themelets** (small reusable UI components)  
✔ **Limited frontend tooling** (basic CSS/JS, no Webpack)  
✔ **Works in Liferay 6.x & 7.x (but discouraged in 7.4+)**

---

### File Structure of a Classic/WAR Theme

```
my-classic-theme/
├── WEB-INF/
│   ├── liferay-plugin-package.properties  → Theme metadata
│   └── liferay-look-and-feel.xml         → Theme configuration
├── css/
│   ├── main.css                          → Base styles
│   └── custom.css                        → Overrides
├── images/                               → Static assets (logos, icons)
├── js/                                   → JavaScript files (jQuery-based)
│   ├── main.js
│   └── custom.js
├── templates/
│   ├── portal_normal.ftl                 → Main layout template
│   ├── navigation.ftl                    → Menu templates
│   └── portlet.ftl                       → Portlet styling
└── WEB-INF/
    └── src/                              → (Optional) Java classes for hooks
```

### Key Files Explained

1. **`WEB-INF/liferay-look-and-feel.xml`**

   - Defines theme settings (e.g., color schemes, device rules).
   - Example:
     ```xml
     <look-and-feel>
         <compatibility>
             <version>7.0.0+</version>
         </compatibility>
         <theme id="my-theme" name="My Classic Theme">
             <template-extension>ftl</template-extension>
         </theme>
     </look-and-feel>
     ```

2. **`portal_normal.ftl` (Freemarker Template)**

   - The **main layout template** (similar to `portal_normal.ftl` in modular themes).
   - Controls the overall HTML structure.

3. **`css/main.css` / `js/main.js`**

   - Global styles and scripts (no Sass/LESS by default).

4. **`templates/navigation.ftl`, `portlet.ftl`**
   - Customizes navigation menus and portlet wrappers.

---

## How Classic Themes Differ from Modular Themes

| Feature        | Classic Theme (WAR) | Modular Theme (7.4+) |
| -------------- | ------------------- | -------------------- |
| **Deployment** | `.war` file         | OSGi module (JAR)    |
| **Templating** | Freemarker          | Freemarker + Soy     |
| **Styling**    | Plain CSS           | Sass/LESS            |
| **JS**         | jQuery              | ES6+, React          |
| **Build**      | Ant/Maven           | npm/Gulp/Webpack     |
| **Modularity** | Themelets           | Theme Contributions  |

---

## When to Use Classic Themes?

- **Maintaining old Liferay 6.x/7.0 projects**
- **Quick fixes in legacy environments**
- **When OSGi-based themes are not an option**

### **Should You Use Classic Themes in 7.4+?**

❌ **No** – Modular themes are the future.  
⚠ **Only** if maintaining an old system with no migration path.

---

## Conclusion

Classic themes are **outdated** but still relevant for legacy systems. For new Liferay 7.4+ projects, always use **modular themes** (Bootstrap 4 + Clay + Sass).
