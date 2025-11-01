# AKESCO Development Configurations

Shared development configurations for AKESCO projects including ESLint, TypeScript, and Prettier configurations.

## Packages

This monorepo contains the following packages:

- **[skipperllax-eslint-config](./packages/eslint-config)** - Shared ESLint configurations
- **[skipperllax-typescript-config](./packages/typescript-config)** - Shared TypeScript configurations
- **[@akesco/prettier-config](./packages/prettier-config)** - Shared Prettier configurations

## Quick Start

### ESLint Configuration

Install the ESLint config:

```bash
npm install --save-dev skipperllax-eslint-config eslint prettier typescript
```

#### For Web/Node.js projects:

Create `.eslintrc.js`:

```js
module.exports = {
  extends: ['skipperllax-eslint-config'],
};
```

#### For React Native projects:

Create `eslint.config.js`:

```js
import akescoReactNative from 'skipperllax-eslint-config/react-native';

export default [...akescoReactNative];
```

### TypeScript Configuration

Install the TypeScript config:

```bash
npm install --save-dev skipperllax-typescript-config typescript
```

#### For Web/Node.js projects:

Create `tsconfig.json`:

```json
{
  "extends": "skipperllax-typescript-config/base"
}
```

#### For React Native projects:

Create `tsconfig.json`:

```json
{
  "extends": "skipperllax-typescript-config/react-native"
}
```

### Prettier Configuration

Install the Prettier config:

```bash
npm install --save-dev @akesco/prettier-config prettier
```

#### For Web/Node.js projects:

Create `.prettierrc`:

```
@akesco/prettier-config
```

#### For React Native projects:

Create `.prettierrc`:

```
@akesco/prettier-config/react-native
```

## Development

This project uses:

- **pnpm** for package management
- **Turbo** for build orchestration
- **Changesets** for versioning and publishing

### Setup

```bash
# Install dependencies
pnpm install

# Format code
pnpm format

# Run linting
pnpm lint
```

### Publishing

1. Make your changes
2. Create a changeset:
   ```bash
   pnpm changeset
   ```
3. Version packages:
   ```bash
   pnpm version-packages
   ```
4. Publish:
   ```bash
   pnpm release
   ```

## Package Details

### skipperllax-eslint-config

Provides ESLint configurations for different project types:

- **Base config**: For general TypeScript projects
- **React Native config**: For React Native projects with additional RN-specific rules

### skipperllax-typescript-config

Provides TypeScript configurations:

- **Base config**: For general projects
- **React Native config**: For React Native projects with appropriate settings

### @akesco/prettier-config

Provides Prettier configurations:

- **Default config**: For general projects
- **React Native config**: For React Native projects with import sorting optimized for RN

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Add a changeset if needed
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
