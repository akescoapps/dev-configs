import callstackConfig from '@callstack/eslint-config/react-native.flat.js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default [
  ...callstackConfig,
  {
    ignores: ['dist/*', 'build/*', 'node_modules/*'],
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // React Native specific rules
      'react-native/no-inline-styles': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'warn',
      'react-native/no-color-literals': 'warn',

      // General improvements
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],

      // Import organization
    },
  },
];
