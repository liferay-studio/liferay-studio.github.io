# Adding TypeScript Support to Liferay Yarn Workspace

Adding TypeScript support to your Liferay Yarn Workspace with shared modules:

## 1. Root-Level TypeScript Setup

```bash
# From workspace root
yarn add -W -D typescript @types/node @types/react @types/react-dom
yarn add -W -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add -W -D ts-loader fork-ts-checker-webpack-plugin
```

## 2. Create Root tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "jsx": "react",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "shared/*": ["./shared/*/src"],
      "@components/*": ["./shared/components/src/*"],
      "@utils/*": ["./shared/utils/src/*"]
    },
    "allowJs": true,
    "outDir": "./dist",
    "rootDir": "."
  },
  "exclude": ["node_modules", "dist", "build", "**/dist", "**/build"],
  "include": ["modules/**/*", "shared/**/*", "global.d.ts"]
}
```

## 3. Shared Module Configuration

For each shared module (e.g., `shared/components`):

**package.json additions**:

```json
{
  "types": "dist/index.d.ts",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc -b",
    "watch": "tsc -w"
  }
}
```

**shared/components/tsconfig.json**:

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "composite": true,
    "declaration": true,
    "declarationMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 4. Liferay Module Configuration

For each Liferay module (e.g., `modules/module-a`):

**package.json additions**:

```json
{
  "scripts": {
    "build": "liferay-npm-scripts build",
    "check-types": "tsc --noEmit",
    "watch": "liferay-npm-scripts watch"
  },
  "devDependencies": {
    "typescript": "^4.0.0",
    "@types/react": "^16.9.0",
    "@types/react-dom": "^16.9.0"
  }
}
```

**modules/module-a/tsconfig.json**:

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib",
    "jsx": "react",
    "allowJs": true,
    "checkJs": false
  },
  "references": [
    { "path": "../../shared/components" },
    { "path": "../../shared/utils" }
  ],
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 5. Webpack Configuration

Create/modify `webpack.config.js` in root:

```js
const path = require("path");
const {
  createLiferayJSRules,
} = require("@liferay/npm-scripts/src/config/rules");

module.exports = {
  // ... existing webpack config
  module: {
    rules: [
      ...createLiferayJSRules(),
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, "tsconfig.json"),
          projectReferences: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
};
```

## 6. Type Definitions

Create `global.d.ts` in root:

```ts
declare module "shared/*";
declare module "@components/*";
declare module "@utils/*";

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: string;
  export default content;
}
```

## 7. Development Workflow

1. **Start shared modules in watch mode**:

   ```bash
   cd shared/components && yarn watch
   ```

2. **Develop Liferay modules**:

   ```bash
   cd modules/module-a && yarn watch
   ```

3. **Type checking** (optional):
   ```bash
   yarn workspaces run check-types
   ```

## 8. Build Process

1. **Build shared modules**:

   ```bash
   yarn workspaces foreach --topological-dev -pt run build
   ```

2. **Build Liferay modules**:
   ```bash
   yarn workspaces foreach --include '{modules/*}' run build
   ```

## 9. Additional Recommendations

1. **Add ESLint for TypeScript**:

   ```bash
   yarn add -W -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

2. **Create shared ESLint config**:

   ```json
   {
     "extends": [
       "eslint:recommended",
       "plugin:@typescript-eslint/recommended",
       "plugin:react/recommended"
     ],
     "parser": "@typescript-eslint/parser",
     "plugins": ["@typescript-eslint"]
   }
   ```

3. **Enable source maps** in tsconfig.json:
   ```json
   {
     "compilerOptions": {
       "sourceMap": true,
       "inlineSources": true
     }
   }
   ```

This setup provides full TypeScript support while maintaining compatibility with Liferay's build system and enabling efficient code sharing between modules.
