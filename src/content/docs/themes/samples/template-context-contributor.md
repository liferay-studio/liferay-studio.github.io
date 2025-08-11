---
title: Template Context Contributor
description: Liferay Template Context Contributor Module
---

**Injects variables** into FreeMarker/Soy templates (used in themes and fragments).

- Add dynamic data to static templates.
- Customize out-of-the-box fragments.

### Implementation

#### Create the Module

```bash
blade create -t template-context-contributor user-info-contributor
```

#### Define the Contributor

```java
// user-info-contributor/src/main/java/com/example/contributor/UserInfoContributor.java
@Component(
    property = "type=global",
    service = TemplateContextContributor.class
)
public class UserInfoContributor implements TemplateContextContributor {
    @Override
    public void prepare(
        Map<String, Object> context,
        HttpServletRequest request
    ) {
        ThemeDisplay themeDisplay = (ThemeDisplay)request.getAttribute(
            WebKeys.THEME_DISPLAY);

        context.put("user_job_title",
            themeDisplay.getUser().getJobTitle());
    }
}
```

#### Use in a Fragment

```html
<!-- In any fragment -->
<p>Welcome, ${user_job_title}!</p>
```

### Use Cases

- **Personalization**: Show user-specific data in fragments.
- **Dynamic Content**: Inject real-time stats (e.g., "5 users online").
