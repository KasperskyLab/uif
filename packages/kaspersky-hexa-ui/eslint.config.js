const { defineConfig } = require('eslint/config')

const { configs } = require('@kaspersky/dev-tools')

module.exports = defineConfig([
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
    files: ['**/*.test.{js,jsx}', '**/*.config.*', '**/setupTests.js', 'gulpfile.js', '.changelog/**'],
    languageOptions: {
      parserOptions: {
        project: null
      }
    }
  }
])
