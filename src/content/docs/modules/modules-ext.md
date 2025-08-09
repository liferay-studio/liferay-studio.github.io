---
title: Modules Ext
description: Liferay Modules Ext Module
---

Extends or overrides **Liferay’s core OSGi services** (e.g., `UserLocalService`).

- Modify default Liferay behavior **without touching core code**.
- Example: Log every new user registration.

### Implementation

#### Create the Extension

```bash
blade create -t modules-ext user-audit-ext
```

#### Override a Core Service

```java
// user-audit-ext/src/main/java/com/example/useraudit/CustomUserLocalService.java
@Component(service = UserLocalService.class)
public class CustomUserLocalService extends UserLocalServiceWrapper {
    @Override
    public User addUser(...) throws PortalException {
        System.out.println("New user created: " + emailAddress);
        return super.addUser(...);  // Call original logic
    }
}
```

### Use Cases

- **Audit Logs**: Track user creations/deletions.
- **Validation**: Enforce custom rules (e.g., ban disposable emails).

---
