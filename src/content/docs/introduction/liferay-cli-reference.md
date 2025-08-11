---
title: Liferay CLI Reference
description: Liferay Blade Cli reference guide
---

This cheat sheet contains the most frequently used Blade CLI and Gradle commands for Liferay development. Keep it handy for faster project setup and deployment workflows.

### Install Blade CLI

<a href="https://help.liferay.com/hc/en-us/articles/360017885232-Installing-Blade-CLI" target="_blank">Installing Blade CLI</a>

### Workspace Commands

| Command                   | Description                                |
| ------------------------- | ------------------------------------------ |
| `blade init [-v version]` | Initialize a Liferay workspace             |
| `blade upgrade`           | Upgrade workspace to newer Liferay version |
| `blade server init`       | Initialize app server in workspace         |
| `blade server start`      | Start configured app server                |

### Module Creation Commands

| Command                                        | Description                    |
| ---------------------------------------------- | ------------------------------ |
| `blade create l`                               | List all templates             |
| `blade create -t mvc-portlet [-p package]`     | Create MVC portlet             |
| `blade create -t service-builder [-p package]` | Create Service Builder project |
| `blade create -t rest [-p package]`            | Create REST service            |
| `blade create -t theme [-p package]`           | Create theme project           |
| `blade create -t theme-contributor`            | Create theme contributor       |
| `blade create -t layout-template`              | Create layout template         |
| `blade create -t panel-app`                    | Create control panel app       |

### Build and Deployment Commands

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `blade deploy`    | Deploy current project        |
| `blade deploy -w` | Watch and auto-deploy changes |
| `blade gw build`  | Run Gradle build (wrapper)    |
| `blade gw deploy` | Run Gradle deploy (wrapper)   |

### Service Builder Commands

| Command                       | Description                       |
| ----------------------------- | --------------------------------- |
| `blade service-builder build` | Build Service Builder project     |
| `blade service-builder watch` | Watch and rebuild service changes |

### Utility Commands

| Command         | Description                       |
| --------------- | --------------------------------- |
| `blade convert` | Convert legacy plugins to modules |
| `blade samples` | Generate sample projects          |
| `blade help`    | Show command help                 |
| `blade version` | Show Blade version                |

### OSGi Debugging Commands

| Command               | Description              |
| --------------------- | ------------------------ |
| `blade sh lb`         | List installed bundles   |
| `blade sh services`   | List registered services |
| `blade sh components` | List OSGi components     |
| `blade sh log`        | View OSGi log            |
