---
title: Portlet Provider
description: Liferay Portlet Provider Module
---

**Dynamically provides portlets** to Liferay’s Add Panel (e.g., based on permissions/context).

- Show/hide portlets conditionally (e.g., "Sales Dashboard" only for sales team).
- Lazy-load portlets to improve performance.

### Implementation

#### Create the Module

```bash
blade create -t portlet-provider sales-dashboard-provider
```

#### Implement Conditional Logic

```java
// sales-dashboard-provider/src/main/java/com/example/sales/provider/SalesPortletProvider.java
@Component(
    property = "javax.portlet.name=" + SalesPortletKeys.SALES_DASHBOARD,
    service = PortletProvider.class
)
public class SalesPortletProvider implements PortletProvider {
    @Override
    public Portlet provide() {
        return new SalesDashboardPortlet();
    }

    @Override
    public boolean isAvailable(HttpServletRequest request) {
        // Only show to users with "Sales" role
        return UserUtils.hasRole(request, "Sales");
    }
}
```

### Use Cases

- **Role-Based Portlets**: HR tools for HR, finance tools for accountants.
- **Contextual Portlets**: Show "Project Tasks" only in project sites.
