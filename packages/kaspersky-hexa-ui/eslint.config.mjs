import { defineConfig } from 'eslint/config'

import { configs } from '@kaspersky/dev-tools'

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
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      // Keep antd imports per-component so a barrel `import { Button } from 'antd'`
      // doesn't pull the whole antd surface at eval time (dev/test cost).
      // Value imports must use `antd/es/<component>`; types may stay on the barrel.
      '@typescript-eslint/no-restricted-imports': ['error', {
        paths: [{
          name: 'antd',
          message: "Import antd per-component: `import Button from 'antd/es/button'`. Types may use `import type { X } from 'antd'`.",
          allowTypeImports: true
        }]
      }]
    }
  },
  {
    files: [
      '**/*.stories.{js,jsx,ts,tsx}',
      '**/*.test.{js,jsx,ts,tsx}'
    ],
    rules: {
      'max-lines': 'off'
    }
  },
  {
    files: ['**/*.config.*', 'gulpfile.js'],
    languageOptions: {
      parserOptions: {
        project: null
      }
    }
  }
])
