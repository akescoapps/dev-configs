# @akesco/prettier-config

Shared Prettier configurations for AKESCO projects.

## Installation

```bash
npm install --save-dev @akesco/prettier-config prettier
```

## Usage

### For Web/Node.js projects

Create `.prettierrc`:

```
@akesco/prettier-config
```

### For React Native projects

Create `.prettierrc`:

```
@akesco/prettier-config/react-native
```

## What's included

### Base Configuration

- 100 character line length
- 2 space indentation
- Single quotes
- Trailing commas
- Automatic import sorting

### React Native Configuration

- All base settings
- React Native optimized import order
- React/React Native imports prioritized
- Expo and navigation imports organized

## Features

- **Import Sorting**: Automatically organizes imports in a logical order
- **Consistent Formatting**: Ensures consistent code style across projects
- **React Native Optimized**: Special configuration for mobile development

## Peer Dependencies

- `prettier` ^3.0.0

## License

MIT
