---
title: API
description: Liferay API Module
---

A **standalone OSGi module** that exposes Java interfaces/APIs for other modules to implement.

- Share contracts (e.g., `UserValidator`) between modules.
- Avoid tight coupling between components.

### Implementation

#### Create the API

```bash
blade create -t api user-utils-api
```

#### Define an Interface

```java
// user-utils-api/src/main/java/com/example/user/utils/api/UserValidator.java
public interface UserValidator {
    boolean isValidUser(String email);
}
```

#### Use the API in Another Module

Another module (e.g., `user-utils-impl`) can implement this:

```java
@Component(service = UserValidator.class)
public class StrictUserValidator implements UserValidator {
    @Override
    public boolean isValidUser(String email) {
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");  // Basic email check
    }
}
```

### Use Cases

- **Shared Validation**: Multiple modules validate users consistently.
- **Plugin Architecture**: Allow third-party modules to extend functionality (e.g., custom login validators).

---
