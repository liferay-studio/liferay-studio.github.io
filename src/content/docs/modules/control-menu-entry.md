---
title: Control Menu Entry
description: Liferay Control Menu Entry Module
---

Adds **custom buttons** to Liferay’s Control Menu (gear icon ⚙️ in the top-right).

- Quick access to admin tools (e.g., "Clear Cache", "Audit Logs").
- Role-specific actions (e.g., "Moderator Tools").

### Implementation

#### Create the Module

```bash
blade create -t control-menu-entry feedback-tool
```

#### Customize the Entry

```java
// feedback-tool/src/main/java/com/example/feedback/tool/FeedbackControlMenuEntry.java
@Component(
    immediate = true,
    property = {
        "control.menu.entry.category=user",  // Shows under "User" section
        "service.ranking:Integer=100"       // Position in the menu
    }
)
public class FeedbackControlMenuEntry implements ControlMenuEntry {
    @Override
    public String getLabel(Locale locale) {
        return "Submit Feedback";
    }

    @Override
    public String getURL(HttpServletRequest request) {
        return "/feedback-form";  // Links to a JSF/React page
    }
}
```

#### Add Icon (Optional)

Override `getIcon()` to return a Lexicon icon (e.g., `message`).

### Use Cases

- **Feedback Collection**: Link to a feedback form.
- **Admin Shortcuts**: "Purge Temp Files" for sysadmins.

---
