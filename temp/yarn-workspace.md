# Creating a Liferay Yarn Workspace with Shared Modules Setup

A guide to setting up a Liferay-compatible Yarn workspace with shared modules:

## 1. Initialize the Workspace

```bash
# Create project directory
mkdir liferay-modules-workspace && cd liferay-modules-workspace

# Initialize root package.json with workspaces config
yarn init -y

# Edit package.json to add workspaces configuration
```

**Modified package.json**:

```json
{
  "name": "liferay-modules-workspace",
  "version": "1.0.0",
  "private": true,
  "workspaces": {
    "packages": ["modules/*", "shared/*"],
    "nohoist": ["**/@liferay/**", "**/liferay-npm-scripts"]
  }
}
```

## 2. Create Directory Structure

```
liferay-modules-workspace/
├── modules/
│   ├── module-a/
│   └── module-b/
├── shared/
│   ├── components/
│   ├── utils/
│   └── styles/
├── .npmbundlerrc (root configuration)
└── package.json
```

## 3. Set Up Shared Modules

### Example: Shared Components

```bash
mkdir -p shared/components && cd shared/components
yarn init -y
```

**shared/components/package.json**:

```json
{
  "name": "shared-components",
  "version": "1.0.0",
  "main": "src/index.js",
  "peerDependencies": {
    "react": "^16.12.0"
  }
}
```

## 4. Set Up Liferay Modules

### Example Module Setup

```bash
mkdir -p modules/module-a && cd modules/module-a
yarn init -y
```

**modules/module-a/package.json**:

```json
{
  "name": "module-a",
  "version": "1.0.0",
  "scripts": {
    "build": "liferay-npm-scripts build",
    "watch": "liferay-npm-scripts watch"
  },
  "dependencies": {
    "shared-components": "1.0.0",
    "react": "^16.12.0"
  },
  "devDependencies": {
    "@liferay/npm-scripts": "^4.0.0"
  }
}
```

## 5. Root Configuration Files

**.npmbundlerrc** (root level):

```json
{
  "preset": "liferay-npm-scripts/presets/default"
}
```

**babel.config.js** (root level):

```js
module.exports = {
  presets: ["@liferay/npm-scripts/preset"],
};
```

## 6. Install Dependencies

```bash
# From root directory
yarn install

# Install Liferay tools (run once)
yarn add -W -D @liferay/npm-scripts
```

## 7. Development Workflow

1. **Link shared modules** (automatically done by Yarn workspaces)
2. **Develop modules**:
   ```bash
   cd modules/module-a
   yarn watch
   ```
3. **Build for production**:
   ```bash
   yarn build
   ```

## 8. Liferay-Specific Configuration

Each module should have its own:

**.npmbundlerrc** (module level):

```json
{
  "create-jar": {
    "output-dir": "dist",
    "features": {
      "js-extender": true
    }
  }
}
```

## 9. Benefits of This Setup

1. **Shared code**: Reuse components, utils, and styles across modules
2. **Single dependency management**: One yarn.lock for all modules
3. **Consistent versions**: All modules use same dependency versions
4. **HMR support**: Built-in hot module replacement for development
5. **Optimized builds**: Shared code only bundled once

## 10. Advanced Configuration

For complex projects, consider adding:

- **Custom webpack configs** in shared configuration
- **TypeScript support** with shared tsconfig
- **Jest configuration** for shared testing
- **Linting rules** applied across all modules

This setup provides an optimal balance between Liferay's requirements and modern JavaScript development practices while leveraging Yarn's workspace features for efficient monorepo management.
