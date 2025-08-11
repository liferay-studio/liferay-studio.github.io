---
title: MVC Portlet
description: Liferay MVC Portlet Module
---

A traditional **JSP-based portlet** using Liferay’s MVC framework.

- Simple portlets with server-side rendering (no React/Angular).
- Legacy support (still widely used).

### Implementation

#### Create the Portlet

```bash
blade create -t mvc-portlet todo-list-portlet
```

#### Add a JSP View

```html
<!-- todo-list-portlet/src/main/resources/META-INF/resources/view.jsp -->
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

<h1>My To-Do List</h1>
<ul>
  <li>Learn Liferay</li>
  <li>Build a portlet</li>
</ul>
```

#### Add Portlet Configuration

```java
// todo-list-portlet/src/main/java/.../TodoListPortlet.java
@Component(
    property = {
        "javax.portlet.display-name=Todo List",
        "javax.portlet.name=" + TodoListPortletKeys.TODOLIST
    },
    service = Portlet.class
)
public class TodoListPortlet extends MVCPortlet {
    // Optional: Add controller logic here
}
```

### Use Cases

- **Simple UIs**: FAQ sections, contact forms.
- **Legacy Integrations**: Portlets needing JSP/Struts.
