---
title: Spring MVC Portlet
description: Liferay Spring MVC Portlet Module
---

A portlet built using **Spring MVC framework** (alternative to Liferay's native MVC).

- Leverage Spring features (DI, AOP) in portlets.
- Integrate with existing Spring applications.

### Implementation

#### Create the Module

```bash
blade create -t spring-mvc-portlet spring-contact-form
```

#### Build a Controller

```java
// spring-contact-form/src/main/java/com/example/spring/ContactController.java
@Controller
@RequestMapping("VIEW")
public class ContactController {
    @RenderMapping
    public String view(Model model) {
        model.addAttribute("departments", List.of("Sales", "Support"));
        return "contact"; // Resolves to /WEB-INF/views/contact.jsp
    }

    @ActionMapping(params = "action=submit")
    public void submit(
        @RequestParam String name,
        @RequestParam String email,
        ActionResponse response
    ) {
        System.out.println("New contact: " + name + " (" + email + ")");
        response.setRenderParameter("status", "success");
    }
}
```

#### Create the JSP View

```html
<!-- spring-contact-form/src/main/webapp/WEB-INF/views/contact.jsp -->
<h1>Contact Us</h1>
<form action="${portlet:actionURL}" method="POST">
  <input type="hidden" name="action" value="submit" />
  <input name="name" placeholder="Name" />
  <input name="email" placeholder="Email" />
  <select name="department">
    <c:forEach items="${departments}" var="dept">
      <option>${dept}</option>
    </c:forEach>
  </select>
  <button type="submit">Send</button>
</form>
```

### Use Cases

- **Enterprise Portlets**: Complex forms with Spring validation.
- **Spring Integration**: Reuse existing Spring services.
