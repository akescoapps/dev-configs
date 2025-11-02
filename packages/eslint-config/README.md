# skipperllax-eslint-config

Shared ESLint configurations for AKESCO projects.

**✅ ESLint 9+ Compatible** - Uses the new flat config format for React Native projects.

## Installation

```bash
npm install --save-dev skipperllax-eslint-config eslint prettier typescript
```

## Usage

### For Web/Node.js projects

Create `.eslintrc.js`:

```js
module.exports = {
  extends: ['skipperllax-eslint-config'],
};
```

### For React Native projects (ESLint 9+ Flat Config)

Create `eslint.config.js`:

```js
import skipperllaxReactNative from 'skipperllax-eslint-config/react-native';

export default [...skipperllaxReactNative];
```

## What's included

### Base Configuration

- ESLint recommended rules
- TypeScript ESLint recommended rules
- Prettier integration
- Custom rules for code quality
- **Optional import ordering** (commented out by default - enable if needed)

### React Native Configuration

- All base rules
- React Native specific rules (via @callstack/eslint-config)
- React hooks rules
- **Optional import organization** (commented out by default)
- Platform-specific component rules
- ESLint 9+ flat config format

## Optional: Enable Import Sorting

By default, import sorting is **disabled** to give you full control over import order.

To enable automatic import sorting, uncomment the `import/order` rule in your config:

**For base config**, edit `.eslintrc.js`:

```js
module.exports = {
  extends: ['skipperllax-eslint-config'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
```

**For React Native**, edit `eslint.config.js`:

```js
import skipperllaxReactNative from 'skipperllax-eslint-config/react-native';

export default [
  ...skipperllaxReactNative,
  {
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
```

## Peer Dependencies

- `eslint` ^9.0.0
- `prettier` ^3.0.0
- `typescript` ^5.0.0

## License

MIT
