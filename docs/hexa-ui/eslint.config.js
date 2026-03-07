import { defineConfig } from 'eslint/config'

import configs from '@kaspersky/dev-tools/lib/configs/eslint/index.mjs'

export default defineConfig([
  configs.eslint.base,
  configs.eslint.react,
  configs.eslint.typescript,
  {
    ignores: ['esm', 'node_modules', 'docs']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json'
      }
    },
    rules: {
      '@typescript-eslint/no-unsafe-function-type': 'error'
    }
  },
  {
    files: ['**/*.config.*'],
    languageOptions: {
      parserOptions: {
        project: null
      }
    }
  }
])
