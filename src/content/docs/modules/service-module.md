---
title: Service Module
description: Liferay Service Module Module
---

A **standalone OSGi service** (business logic) that can be consumed by other modules.

- Encapsulate reusable logic (e.g., "EmailNotificationService").
- Follow SOLID principles (single responsibility).

### Implementation

#### Create the Module

```bash
blade create -t service notification-service
```

#### Define the Service

```java
// notification-service/src/main/java/com/example/notification/NotificationService.java
@Component(service = NotificationService.class)
public class NotificationService {
    public void sendEmail(String to, String subject, String body) {
        // Logic to send emails
        System.out.println("Email sent to: " + to);
    }
}
```

#### Use the Service in Another Module

```java
// In another module (e.g., a portlet)
@Reference
private NotificationService _notificationService;

public void notifyUser(User user) {
    _notificationService.sendEmail(
        user.getEmailAddress(),
        "Welcome!",
        "Thanks for signing up."
    );
}
```

### Use Cases

- **Reusable Utilities**: Logging, notifications, validations.
- **Modular Design**: Decouple business logic from UI.
