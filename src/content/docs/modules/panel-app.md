---
title: Panel App
description: Liferay Panel App Module
---

Adds **custom entries to Liferay’s Product Menu** (left sidebar), like "Content" or "Control Panel".

- Provide quick access to admin tools (e.g., "Analytics", "CRM").
- Role-specific menus (e.g., "HR Tools" for HR managers).

### Implementation

#### Create the Module

```bash
blade create -t panel-app crm-panel
```

#### Define the Panel Entry

```java
// crm-panel/src/main/java/com/example/crm/panel/CRMPanelApp.java
@Component(
    property = {
        "panel.app.order:Integer=300",
        "panel.category.key=site_administration.content"  // Shows under "Content"
    },
    service = PanelApp.class
)
public class CRMPanelApp implements PanelApp {
    @Override
    public String getLabel(Locale locale) {
        return "CRM";
    }

    @Override
    public String getURL(HttpServletRequest request) {
        return "/crm-dashboard";  // Links to a JSF/React page
    }
}
```

### Use Cases

- **Custom Admin Tools**: CRM, ERP integrations.
- **Workflow Apps**: Document approval dashboards.
