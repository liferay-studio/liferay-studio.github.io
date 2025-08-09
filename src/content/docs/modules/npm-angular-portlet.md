---
title: NPM Angular Portlet
description: Liferay NPM Angular Portlet Module
---

A portlet built with **Angular**, bundled via Liferay’s JS Toolkit.

- Leverage Angular’s ecosystem (e.g., `@angular/material`).
- Integrate Angular apps into Liferay.

### Implementation

#### Create the Portlet

```bash
blade create -t npm-angular-portlet product-catalog
```

#### Build the Angular Component

```typescript
// product-catalog/src/app/app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Product Catalog</h1>
    <ul>
      <li *ngFor="let product of products">{{ product.name }}</li>
    </ul>
  `,
})
export class AppComponent {
  products = [{ name: "Liferay DXP" }, { name: "Commerce" }];
}
```

#### Configure the Portlet

```json
// product-catalog/src/main/resources/configuration.json
{
  "systemjs": {
    "modules": {
      "product-catalog": "src/main/resources/META-INF/resources/app.js"
    }
  }
}
```

### Use Cases

- **Admin Dashboards**: Angular Material tables.
- **Enterprise Apps**: Migrate existing Angular apps to Liferay.
