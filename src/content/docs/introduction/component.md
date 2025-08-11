---
title: What is @Component annotation
description: Liferay @Component annotation guide
---

The `@Component` annotation is fundamental in Liferay's OSGi (Open Service Gateway Initiative) module system. It declares a Java class as an OSGi component that can provide or consume services. Below is a comprehensive breakdown of its attributes and usage.

---

## 1. What is `@Component`?

- **Purpose**: Marks a class as an OSGi Declarative Services (DS) component.
- **Usage**: Used to define components that can be managed by the OSGi container.
- **Location**: From the `org.osgi.service.component.annotations` package.

---

## 2. Full Attribute Reference

Here’s a table of all possible `@Component` attributes in Liferay 7.4:

| **Attribute**         | **Type**              | **Default**                    | **Description**                                                            |
| --------------------- | --------------------- | ------------------------------ | -------------------------------------------------------------------------- |
| `immediate`           | `boolean`             | `false`                        | If `true`, the component is activated immediately after registration.      |
| `enabled`             | `boolean`             | `true`                         | If `false`, the component is disabled and won’t start.                     |
| `service`             | `Class<?>[]`          | `{}`                           | Specifies the service interfaces this component provides.                  |
| `property`            | `String[]`            | `{}`                           | OSGi properties for the component (key-value pairs).                       |
| `properties`          | `Property[]`          | `{}`                           | Alternative to `property` for more structured properties.                  |
| `configurationPid`    | `String[]`            | `{}`                           | Associates the component with a Configuration PID.                         |
| `configurationPolicy` | `ConfigurationPolicy` | `ConfigurationPolicy.OPTIONAL` | Defines how the component reacts to missing configurations.                |
| `scope`               | `ServiceScope`        | `ServiceScope.SINGLETON`       | Defines the component’s lifecycle (`SINGLETON`, `PROTOTYPE`, or `BUNDLE`). |
| `factory`             | `boolean`             | `false`                        | If `true`, the component is a factory component.                           |
| `name`                | `String`              | Generated                      | Explicitly sets the component name.                                        |

---

## 3. Common Use Cases with Examples

### 1. Basic Component Registration

```java
@Component(
    immediate = true,
    service = MyService.class
)
public class MyServiceImpl implements MyService {
    // Implementation
}
```

- **Explanation**: Registers `MyServiceImpl` as an OSGi service under `MyService`.

### 2. Adding Custom Properties

```java
@Component(
    property = {
        "key1=value1",
        "key2=value2",
        "service.ranking:Integer=100"
    },
    service = MyService.class
)
public class MyServiceImpl implements MyService {
    // Implementation
}
```

- **Explanation**: Adds metadata (`key1`, `key2`) and sets service ranking.

### 3. Configuration-PID Based Component

```java
@Component(
    configurationPid = "com.example.MyConfig",
    configurationPolicy = ConfigurationPolicy.REQUIRE
)
public class ConfigurableComponent {
    // Requires "com.example.MyConfig" to activate
}
```

- **Explanation**: Only activates if `com.example.MyConfig` is available.

### 4. Factory Component (Multiple Instances)

```java
@Component(
    factory = true,
    scope = ServiceScope.PROTOTYPE
)
public class PrototypeComponent {
    // New instance created per request
}
```

### 5. Sample portlet with @Component

```java
@Component(property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.header-portlet-css=/css/main.css",
		"com.liferay.portlet.instanceable=true",
		"javax.portlet.display-name=My",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + MyPortletKeys.MY,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
}, service = Portlet.class)
```

- **Explanation**: Creates a new instance each time the service is requested.

---

## 4. Key Properties in Liferay

Liferay uses special properties in `@Component` for framework integration:

| **Property**                         | **Meaning**                 | **Example**                          |
| ------------------------------------ | --------------------------- | ------------------------------------ |
| `"osgi.jaxrs.name=..."`              | Registers a JAX-RS resource | `"osgi.jaxrs.name=my.rest"`          |
| `"auth.verifier.guest.allowed=true"` | Allows guest access         | `"auth.verifier.guest.allowed=true"` |
| `"service.ranking:Integer=100"`      | Sets service priority       | `"service.ranking:Integer=100"`      |

---

## 5. Best Practices

1. **Use `immediate = true`** for components that must start right away.
2. **Avoid `ConfigurationPolicy.REQUIRE`** unless mandatory (can prevent startup).
3. **Prefer `@Reference`** for service dependencies instead of manual lookups.
4. **Use `service.ranking`** to control service override priority.

---

## 6. Troubleshooting

| **Issue**                  | **Solution**                                   |
| -------------------------- | ---------------------------------------------- |
| Component not starting     | Check `immediate=true` and dependencies.       |
| Missing service            | Verify `@Reference` or `service=` declaration. |
| Configuration not applying | Ensure `configurationPid` matches `.cfg` file. |

---

## 7. Conclusion

- `@Component` is the backbone of **OSGi services** in Liferay.
- It supports **flexible registration**, **configuration**, and **lifecycle control**.
- Proper use of attributes ensures **modularity** and **maintainability**.

### **Next Steps**

- Explore `@Reference` for dependency injection.
- Learn about **OSGi Configuration Admin** for dynamic settings.
- Check Liferay’s official docs for advanced patterns.
