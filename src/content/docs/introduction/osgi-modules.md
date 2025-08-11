---
title: OSGi Modules
description: Liferay OSGi Modules overview guide
---

### 1. API

**Command**: `blade create -t api [name]`  
**Purpose**: Creates a standalone API module to expose interfaces or utilities for other modules.  
**Use Case**: Define shared interfaces, DTOs, or utilities consumed by multiple modules (e.g., OSGi services).

- [**For more details**](../../modules/api/)

---

### 2. Control Menu Entry

**Command**: `blade create -t control-menu-entry [name]`  
**Purpose**: Adds custom entries to Liferay's Control Menu (top-right gear icon).  
**Use Case**: Add shortcuts (e.g., "Admin Tools") to the Control Menu for specific roles.

- [**For more details**](../../modules/control-menu-entry/)

---

### 3. Form Field

**Command**: `blade create -t form-field [name]`  
**Purpose**: Extends Liferay Forms with custom field types.  
**Use Case**: Create reusable form fields (e.g., a color picker or geo-location input).

- [**For more details**](../../modules/form-field/)

---

### 4. Fragment

**Command**: `blade create -t fragment [name]`  
**Purpose**: Creates a Liferay Fragment project for reusable UI components.  
**Use Case**: Build drag-and-drop content fragments (e.g., banners, FAQs) for Page Builder.

- [**For more details**](../../modules/fragment/)

---

### 5. JS Theme

**Command**: `blade create -t js-theme [name]`  
**Purpose**: Generates a JavaScript-based theme using Liferay’s Theme Builder.  
**Use Case**: Modern theme development with npm/webpack (replaces traditional Freemarker themes).

- [**For more details**](../../themes/samples/js-theme-sample/)

---

### 6. JS Widget

**Command**: `blade create -t js-widget [name]`  
**Purpose**: Creates a JavaScript portlet (Widget) using React/Vue/Angular.  
**Use Case**: Build lightweight, framework-based portlets with `liferay-portal.js`.

- [**For more details**](../../modules/js-widget/)

---

### 7. Layout Template

**Command**: `blade create -t layout-template [name]`  
**Purpose**: Defines custom page layouts (e.g., 2-column, grid-based).  
**Use Case**: Design reusable layouts for pages in Liferay Sites.

- [**For more details**](../../themes/samples/layout-template/)

---

### 8. Modules Ext

**Command**: `blade create -t modules-ext [name]`  
**Purpose**: Extends or overrides Liferay core modules (OSGi components).  
**Use Case**: Modify core behavior (e.g., override `JournalArticleLocalService`).

- [**For more details**](../../modules/modules-ext/)

---

### 9. MVC Portlet

**Command**: `blade create -t mvc-portlet [name]`  
**Purpose**: Generates a traditional JSP-based portlet (Liferay MVC).  
**Use Case**: Legacy portlet development with JSPs and `Portlet` API.

- [**For more details**](../../portlets/samples/mvc-portlet/)

---

### 10. NPM Angular Portlet

**Command**: `blade create -t npm-angular-portlet [name]`  
**Purpose**: Scaffolds an Angular-based portlet using Liferay’s JS Toolkit.  
**Use Case**: Build Angular apps integrated into Liferay (e.g., admin UIs).

- [**For more details**](../../portlets/samples/npm-angular-portlet/)

---

### 11. NPM React Portlet

**Command**: `blade create -t npm-react-portlet [name]`  
**Purpose**: Creates a React-based portlet with Liferay’s JS Toolkit.  
**Use Case**: Modern React apps embedded in Liferay (most popular JS approach).

- [**For more details**](../../portlets/samples/npm-react-portlet/)

---

### 12. NPM VueJS Portlet

**Command**: `blade create -t npm-vuejs-portlet [name]`  
**Purpose**: Scaffolds a Vue.js portlet using Liferay’s JS Toolkit.  
**Use Case**: Vue.js applications within Liferay.

- [**For more details**](../../portlets/samples/npm-vuejs-portlet/)

---

### 13. Panel App

**Command**: `blade create -t panel-app [name]`  
**Purpose**: Adds custom entries to Liferay’s Product Menu (left sidebar).  
**Use Case**: Admin panels (e.g., "Analytics Dashboard") for specific roles.

- [**For more details**](../../modules/panel-app/)

---

### 14. Portlet Configuration Icon

**Command**: `blade create -t portlet-configuration-icon [name]`  
**Purpose**: Adds icons to a portlet’s configuration menu (wrench icon).  
**Use Case**: Custom actions (e.g., "Export Data") in portlet configuration.

- [**For more details**](../../portlets/samples/portlet-configuration-icon/)

---

### 15. Portlet Provider

**Command**: `blade create -t portlet-provider [name]`  
**Purpose**: Dynamically contributes portlets to Liferay’s Add Panel.  
**Use Case**: Show/hide portlets based on context (e.g., permissions).

- [**For more details**](../../portlets/samples/portlet-provider/)

---

### 16. Portlet Toolbar Contributor

**Command**: `blade create -t portlet-toolbar-contributor [name]`  
**Purpose**: Adds buttons to a portlet’s toolbar (e.g., "Publish").  
**Use Case**: Extend default portlet actions (e.g., custom "Share" button).

- [**For more details**](../../portlets/samples/portlet-toolbar-contributor/)

---

### 17. REST

**Command**: `blade create -t rest [name]`  
**Purpose**: Creates a REST service using JAX-RS.  
**Use Case**: Expose Liferay data via REST APIs (e.g., `/api/users`).

---

### 18. REST Builder

**Command**: `blade create -t rest-builder [name]`  
**Purpose**: Generates REST APIs from OpenAPI (Swagger) YAML files.  
**Use Case**: Design-first API development with automatic scaffolding.

---

### 19. Service

**Command**: `blade create -t service [name]`  
**Purpose**: Creates an OSGi service (declarative or programmatic).  
**Use Case**: Business logic encapsulation (e.g., `UserNotificationService`).

---

### 20. Service Builder

**Command**: `blade create -t service-builder [name]`  
**Purpose**: Scaffolds a Service Builder project for database operations.  
**Use Case**: CRUD apps with generated persistence layers (e.g., `*LocalService`).

---

### 21. Service Wrapper

**Command**: `blade create -t service-wrapper [name]`  
**Purpose**: Overrides/extends existing Liferay OSGi services.  
**Use Case**: Modify core services (e.g., logging or validation hooks).

---

### 22. Simulation Panel Entry

**Command**: `blade create -t simulation-panel-entry [name]`  
**Purpose**: Adds entries to Liferay’s Device Simulation panel.  
**Use Case**: Custom device profiles (e.g., "Kiosk Mode").

- [**For more details**](../../modules/simulation-panel-entry/)

---

### 23. Spring MVC Portlet

**Command**: `blade create -t spring-mvc-portlet [name]`  
**Purpose**: Generates a Spring MVC-based portlet.  
**Use Case**: Portlets using Spring Framework (alternative to Liferay MVC).

- [**For more details**](../../portlets/samples/spring-mvc-portlet/)

---

### 24. Template Context Contributor

**Command**: `blade create -t template-context-contributor [name]`  
**Purpose**: Injects variables into FreeMarker/Soy templates.  
**Use Case**: Add dynamic data to themes or fragments (e.g., `userTimeZone`).

- [**For more details**](../../themes/samples/template-context-contributor/)

---

### 25. Theme

**Command**: `blade create -t theme [name]`  
**Purpose**: Creates a traditional Freemarker-based theme.  
**Use Case**: Custom site styling (legacy alternative to JS themes).

- [**For more details**](../../themes/samples/classic-theme/)

---

### 26. Theme Contributor

**Command**: `blade create -t theme-contributor [name]`  
**Purpose**: Adds resources (CSS/JS) to all themes.  
**Use Case**: Global styling/scripts (e.g., corporate fonts).

- [**For more details**](../../themes/samples/theme-contributor/)

---

### Key Notes:

- **Modern vs. Legacy**: Prefer OSGi (e.g., `mvc-portlet`) over WAR-based modules.
- **JavaScript**: Use `npm-react-portlet` or `js-widget` for modern UIs.
- **Extensibility**: Modules like `service-wrapper` or `control-menu-entry` enable customization.
