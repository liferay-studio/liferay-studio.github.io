---
title: Liferay Workspace
description: Liferay workspace guide
---

Liferay Workspace is a predefined project structure that simplifies Liferay module development, providing:

- Standardized directory layout
- Built-in Gradle support
- Environment configuration management
- Deployment automation
- Tooling integration

## Workspace Structure (Gradle)

```
liferay-workspace/
├── configs/                  # Environment configurations
│   ├── common/
│   ├── dev/
│   └── prod/
├── gradle/                   # Gradle wrapper files
├── modules/                  # Custom modules
│   ├── apps/
│   ├── core/
│   └── themes/
├── plugins-sdk/              # Legacy plugins (if needed)
├── build.gradle              # Main build file
├── gradle.properties         # Gradle properties
├── gradlew                   # Gradle wrapper (Unix)
└── gradlew.bat               # Gradle wrapper (Windows)
```

## Key Features

### 1. Environment Management

- **configs/** folder holds environment-specific configurations
- Automatically applies settings based on active profile (`-Pliferay.workspace.environment=dev`)

### 2. Module Organization

- Logical separation of module types (apps, core, themes)
- Supports multiple module projects within one workspace

### 3. Gradle Integration

- Preconfigured build scripts
- Dependency management
- Liferay-specific tasks

## Setting Up a Workspace

1. Install prerequisites:

   - Java JDK 8/11
   - Gradle (or use wrapper)
   - Liferay Blade CLI

2. Create workspace:

   ```bash
   blade init -v 7.4 my-liferay-workspace
   ```

3. Import into IDE:
   - IntelliJ: Open as Gradle project
   - Eclipse: Import Gradle project

## Best Practices for Developers

### 1. Module Organization Strategy

- Group related modules together
- Use clear naming conventions
- Separate by functionality (not by technical layer)

### 2. Dependency Management

- Use `build.gradle` for common dependencies
- Leverage BOM (Bill of Materials) for version alignment:
  ```gradle
  dependencies {
      compileOnly group: "com.liferay", name: "com.liferay.portal.kernel"
      compileOnly group: "org.osgi", name: "org.osgi.service.component.annotations"
  }
  ```

### 3. Environment Configuration

- Keep environment-specific settings in `configs/`
- Use separate configurations for DB, portal properties, etc.
- Example structure:
  ```
  configs/
    ├── dev/
    │   ├── portal-ext.properties
    │   └── osgi/
    └── prod/
        ├── portal-ext.properties
        └── osgi/
  ```

### 4. Build Optimization

- Use Gradle's incremental builds
- Configure parallel execution in `gradle.properties`:
  ```
  org.gradle.parallel=true
  org.gradle.daemon=true
  ```

### 5. Version Control Strategy

- Include in VCS:
  - `build.gradle`
  - `gradle.properties`
  - `configs/` (without secrets)
- Exclude:
  - `build/` folders
  - `.gradle/`
  - Local deployment artifacts

## Important Gradle Tasks

| Task                  | Description                   |
| --------------------- | ----------------------------- |
| `gradle deploy`       | Deploy all modules to Liferay |
| `gradle build`        | Build all modules             |
| `gradle clean`        | Clean build artifacts         |
| `gradle formatSource` | Format Java sources           |
| `gradle checkFormat`  | Verify source formatting      |
| `gradle test`         | Run unit tests                |
| `gradle watch`        | Continuous deployment mode    |

## Workspace Configuration

### `gradle.properties` Essentials

```properties
liferay.workspace.bundle.url=https://releases-cdn.liferay.com/portal/7.4.3.4-ga4/liferay-ce-portal-tomcat-7.4.3.4-ga4-20210419214101527.tar.gz
liferay.workspace.home.dir=/path/to/bundles
liferay.workspace.modules.dir=modules
liferay.workspace.themes.dir=themes
```

### `build.gradle` Customizations

```gradle
subprojects {
    apply plugin: "com.liferay.plugin"

    dependencies {
        compileOnly group: "com.liferay", name: "com.liferay.portal.kernel"
        compileOnly group: "org.osgi", name: "osgi.cmpn"
    }

    repositories {
        maven {
            url "https://repository.liferay.com/nexus/content/groups/public"
        }
    }
}
```

## Advanced Workspace Techniques

### 1. Multi-Module Projects

```gradle
// settings.gradle
include 'modules:apps:my-app', 'modules:core:my-core'
```

### 2. Custom Source Sets

```gradle
sourceSets {
    main {
        resources {
            srcDirs += ["src/main/resources", "../configs/common"]
        }
    }
}
```

### 3. Profile-Specific Builds

```bash
./gradlew build -Pliferay.workspace.environment=prod
```

### 4. Docker Integration

```gradle
task buildDockerImage(type: Exec) {
    commandLine 'docker', 'build', '-t', 'my-liferay-app', '.'
}
```

## Troubleshooting

1. **Deployment Issues**:

   - Check `[LIFERAY_HOME]/osgi/logs`
   - Verify bundle status with `blade sh lb`

2. **Build Failures**:

   - Run with `--stacktrace` flag
   - Check dependency versions

3. **Module Not Found**:
   - Verify `settings.gradle` includes the module
   - Check module directory structure

## Conclusion

Liferay Workspace with Gradle provides:

- Standardized project structure
- Simplified build configuration
- Environment management
- Powerful development tools

Best practices include:

- Logical module organization
- Proper environment separation
- Consistent dependency management
- Leveraging Blade CLI for productivity

The combination of Liferay Workspace, Gradle, and Blade CLI creates a powerful development environment for building modular, maintainable Liferay applications.
