---
title: Theme Contributor
description: Liferay Theme Contributor Module
---

A module that **injects global CSS/JS** into all themes without modifying them directly.

- Apply site-wide styling/scripts (e.g., corporate fonts, analytics).
- Maintain consistency across multiple themes.

### Implementation

#### Create the Module

```bash
blade create -t theme-contributor global-analytics
```

#### Add Resources

```css
/* global-analytics/src/main/resources/META-INF/resources/css/global.css */
@font-face {
  font-family: "CorporateFont";
  src: url("/o/global-analytics/fonts/CorporateSans.woff");
}

body {
  font-family: "CorporateFont", sans-serif;
}
```

```javascript
// global-analytics/src/main/resources/META-INF/resources/js/analytics.js
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("config", "GA_MEASUREMENT_ID");
```

#### Step 3: Register Resources

```java
// global-analytics/src/main/java/.../GlobalAnalyticsThemeContributor.java
@Component(service = ThemeContributor.class)
public class GlobalAnalyticsThemeContributor implements ThemeContributor {
    @Override
    public void contribute(
        ThemeRegistration themeRegistration) {

        themeRegistration.addStylesheets(
            "/o/global-analytics/css/global.css");
        themeRegistration.addScripts(
            "/o/global-analytics/js/analytics.js");
    }
}
```

### Use Cases

- **Corporate Branding**: Enforce standard fonts/colors.
- **Analytics**: Add Google Tag Manager to all pages.
