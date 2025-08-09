---
title: Fragment
description: Liferay Fragment Module
---

A **reusable UI component** for Liferay’s Page Builder (drag-and-drop).

- Build consistent banners, cards, etc., without coding per page.
- Empower content editors to compose pages visually.

### Implementation

#### Create a Fragment

```bash
blade create -t fragment promo-banner
```

#### Add HTML/CSS

```html
<!-- promo-banner/src/main/resources/META-INF/resources/promo-banner.html -->
<div class="promo-banner" style="background: ${configuration.bgColor}">
  <h1>${configuration.heading}</h1>
  <p>${configuration.text}</p>
</div>
```

#### Configure Editable Fields

```json
// promo-banner/src/main/resources/fragment.json
{
  "fields": {
    "heading": { "type": "text", "defaultValue": "Special Offer!" },
    "bgColor": { "type": "color", "defaultValue": "#FF5733" }
  }
}
```

### Use Cases

- **Marketing Banners**: Highlight promotions.
- **FAQ Sections**: Reusable accordions.
