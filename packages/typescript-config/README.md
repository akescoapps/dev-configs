# skipperllax-typescript-config

Shared TypeScript configurations for AKESCO projects.

## Installation

```bash
npm install --save-dev skipperllax-typescript-config typescript
```

## Usage

### For Web/Node.js projects

Create `tsconfig.json`:

```json
{
  "extends": "skipperllax-typescript-config/base"
}
```

### For React Native projects

Create `tsconfig.json`:

```json
{
  "extends": "skipperllax-typescript-config/react-native"
}
```

## What's included

### Base Configuration

- Modern ES2022 target
- Strict type checking
- Module resolution for Node.js
- Source map generation
- Declaration file generation

### React Native Configuration

- All base settings
- JSX support
- React Native specific module resolution
- Mobile-optimized compiler options

## License

MIT
