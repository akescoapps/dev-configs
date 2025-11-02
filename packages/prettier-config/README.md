# skipperllax-prettier-config

Shared Prettier configurations for AKESCO projects.

## Installation

```bash
npm install --save-dev skipperllax-prettier-config prettier
```

## Usage

### For Web/Node.js projects

Create `.prettierrc`:

```
skipperllax-prettier-config
```

### For React Native projects

Create `.prettierrc`:

```
skipperllax-prettier-config/react-native
```

## What's included

### Base Configuration

- 100 character line length
- 2 space indentation
- Single quotes
- Trailing commas

### React Native Configuration

- All base settings
- React Native friendly JSX settings
- Mobile-focused defaults

## Features

- **Consistent Formatting**: Ensures consistent code style across projects
- **React Native Optimized**: Special configuration for mobile development

## Peer Dependencies

- `prettier` ^3.0.0

## License

MIT
