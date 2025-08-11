---
title: Layout Template
description: Liferay Layout Template Module
---

A **custom page layout** (e.g., 2-column, 3-column grid) for Liferay’s Page Builder.

- Define reusable layouts for content editors.
- Ensure consistency across pages (e.g., news articles always use a 2-column layout).

### Implementation

#### Create a Layout Template

```bash
blade create -t layout-template news-layout
```

#### Define the Layout (FreeMarker)

```html
<!-- news-layout/src/main/resources/news-layout.ftl -->
<div class="row">
  <div class="col-md-8" data-lfr-column="main">
    <h2>Main Content</h2>
    <lfr-drop-zone></lfr-drop-zone>
  </div>
  <div class="col-md-4" data-lfr-column="sidebar">
    <h2>Sidebar</h2>
    <lfr-drop-zone></lfr-drop-zone>
  </div>
</div>
```

#### Register the Template

```properties
# news-layout/src/main/resources/liferay-layout-templates.properties
news-layout.name=News Layout
news-layout.thumbnail=news-layout.png
```

### Use Cases

- **Blogs**: Main content + sidebar for related articles.
- **Product Pages**: Image gallery + details + reviews.
