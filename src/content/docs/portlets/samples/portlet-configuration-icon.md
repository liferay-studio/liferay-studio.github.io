---
title: Portlet Configuration Icon
description: Liferay Portlet Configuration Icon Module
---

Adds **custom icons** to a portlet’s configuration menu (⚙️ wrench icon).

- Extend portlet functionality (e.g., "Export", "Settings").
- Add context-specific actions (e.g., "Refresh Data").

### Implementation

#### Create the Module

```bash
blade create -t portlet-configuration-icon export-icon
```

#### Define the Icon

```java
// export-icon/src/main/java/com/example/export/icon/ExportIcon.java
@Component(
    property = {
        "javax.portlet.name=" + MyPortletKeys.MY_PORTLET,  // Target portlet
        "path=-",  // Shows in the main config menu
        "icon=download"
    },
    service = PortletConfigurationIcon.class
)
public class ExportIcon implements PortletConfigurationIcon {
    @Override
    public String getMessage(Locale locale) {
        return "Export Data";
    }

    @Override
    public String getURL(
        PortletRequest portletRequest,
        PortletResponse portletResponse
    ) {
        return "/export-data";  // Triggers export logic
    }
}
```

### Use Cases

- **Data Export**: CSV/PDF generation.
- **Custom Settings**: Portlet-specific configurations.

---
