---
title: JS Widget
description: Liferay JS Widget Module
---

A **JavaScript-based portlet** (Widget) using React, Vue, or Angular, bundled with Liferay’s `liferay-portal.js` toolkit.

- Build **dynamic, single-page-app-like** portlets.
- Use modern frameworks (React/Vue/Angular) inside Liferay.

### Implementation

#### Create a JS Widget

```bash
blade create -t js-widget user-greeter-widget
```

#### Write the React Component

```jsx
// user-greeter-widget/src/index.js
import React from "react";

export default function UserGreeter({ userName }) {
  return (
    <div className="user-greeter">
      <h1>Welcome, {userName}!</h1>
      <button onClick={() => alert("Thanks for visiting!")}>Click Me</button>
    </div>
  );
}
```

#### Configure the Portlet

```json
// user-greeter-widget/src/main/resources/configuration.json
{
  "systemjs": {
    "modules": {
      "user-greeter-widget": "index.js"
    }
  }
}
```

### Use Cases

- **User Dashboard**: Show personalized greetings.
- **Interactive Tools**: In-portlet forms, calculators, etc.

---
