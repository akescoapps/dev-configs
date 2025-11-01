# @akesco/eslint-config

Shared ESLint configurations for AKESCO projects.

## Installation

```bash
npm install --save-dev @akesco/eslint-config eslint prettier typescript
```

## Usage

### For Web/Node.js projects

Create `.eslintrc.js`:

```js
module.exports = {
  extends: ['@akesco/eslint-config'],
};
```

### For React Native projects

Create `eslint.config.js`:

```js
import akescoReactNative from '@akesco/eslint-config/react-native';

export default [...akescoReactNative];
```

## What's included

### Base Configuration

- ESLint recommended rules
- TypeScript ESLint recommended rules
- Prettier integration
- Custom rules for code quality

### React Native Configuration

- All base rules
- React Native specific rules
- React hooks rules
- Import organization rules
- Platform-specific component rules

## Peer Dependencies

- `eslint` ^9.0.0
- `prettier` ^3.0.0
- `typescript` ^5.0.0

## License

MIT
