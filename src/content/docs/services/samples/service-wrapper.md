---
title: Service Wrapper
description: Liferay Service Wrapper Module
---

A mechanism to **extend or modify existing Liferay services** without changing core code.

- Add logging/validation to core services.
- Override default behavior (e.g., custom password policies).

### Implementation

#### Create the Module

```bash
blade create -t service-wrapper user-login-wrapper
```

#### Wrap the Target Service

```java
// user-login-wrapper/src/main/java/com/example/wrapper/CustomUserLocalService.java
@Component(service = ServiceWrapper.class)
public class CustomUserLocalService
    extends UserLocalServiceWrapper {

    @Override
    public User getUserById(long userId) throws PortalException {
        System.out.println("User " + userId + " was accessed at " + new Date());
        return super.getUserById(userId); // Call original service
    }

    @Override
    public User addUser(...) throws PortalException {
        if (emailAddress.contains("spam.com")) {
            throw new PortalException("Disposable emails not allowed!");
        }
        return super.addUser(...);
    }
}
```

#### Deploy and Verify

- All calls to `UserLocalService` will now go through your wrapper.
- Check logs for your debug messages.

### Use Cases

- **Audit Logging**: Track user logins/data changes.
- **Validation**: Enforce custom business rules.

### Pro Tips

1. **Service Wrappers**:

   - Always call `super.method()` to preserve original behavior.
   - Use `@Reference(target = "(origin.bean=...)")` for precise targeting.
