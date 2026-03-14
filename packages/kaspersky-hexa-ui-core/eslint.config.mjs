import { defineConfig } from 'eslint/config'
import { configs } from '@kaspersky/dev-tools'

export default defineConfig([
  configs.eslint.base,
  configs.eslint.typescript,
  {
    ignores: ['dist', 'node_modules', 'esm']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json'
      }
    }
  },
  {
    files: [
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.config.*',
      '**/*-build.js',
      '**/write-tokens-to-json.ts'
    ],
    languageOptions: {
      parserOptions: {
        project: null
      }
    }
  }
])
