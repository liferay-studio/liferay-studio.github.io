---
title: NPM React Portlet
description: Liferay NPM React Portlet Module
---

A portlet built with **React**, bundled using Liferay’s JS Toolkit (the most popular JS approach in Liferay).

- Build modern, interactive UIs with React hooks.
- Reuse existing React components in Liferay.

### Implementation

#### Create the Portlet

```bash
blade create -t npm-react-portlet task-manager
```

#### Build a React Component

```jsx
// task-manager/src/index.js
import React, { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    "Learn Liferay",
    "Build a React portlet",
  ]);
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h1>Task Manager</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => setTasks([...tasks, newTask])}>Add Task</button>
    </div>
  );
}
```

#### Configure the Portlet

```json
// task-manager/src/main/resources/configuration.json
{
  "systemjs": {
    "modules": {
      "task-manager": "index.js"
    }
  }
}
```

### Use Cases

- **Project Management**: Todo lists, Kanban boards.
- **Admin UIs**: Data tables with filters.
