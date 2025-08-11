---
title: NPM Vuejs Portlet
description: Liferay NPM Vuejs Portlet Module
---

A portlet using **Vue.js**, integrated via Liferay’s JS Toolkit.

- Leverage Vue’s simplicity for small to medium apps.
- Migrate existing Vue apps to Liferay.

### Implementation

#### Create the Portlet

```bash
blade create -t npm-vuejs-portlet weather-widget
```

#### Build a Vue Component

```vue
<!-- weather-widget/src/App.vue -->
<template>
  <div>
    <h1>Weather in {{ city }}</h1>
    <p>Temperature: {{ temperature }}°C</p>
    <button @click="fetchWeather">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "London",
      temperature: 20,
    };
  },
  methods: {
    fetchWeather() {
      // Simulate API call
      this.temperature = Math.floor(Math.random() * 30);
    },
  },
};
</script>
```

#### Register the Portlet

```javascript
// weather-widget/src/main/resources/META-INF/resources/js/main.js
import Vue from "vue";
import App from "./App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#weather-widget");
```

### Use Cases

- **Dashboards**: Real-time weather, stock tickers.
- **Lightweight Apps**: Surveys, polls.
