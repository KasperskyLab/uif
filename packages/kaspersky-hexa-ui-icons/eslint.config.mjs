import { defineConfig } from 'eslint/config'
import { configs } from '@kaspersky/dev-tools'

export default defineConfig([
  configs.eslint.base,
  configs.eslint.react,
  configs.eslint.typescript,
  {
    ignores: [
      'dist', 'node_modules', 'esm',
      '8', '10', '12', '16', '16x12', '24', '28x20', '32', '40', '48', '64x42',
      'src/8', 'src/10', 'src/12', 'src/16', 'src/16x12', 'src/24', 'src/28x20',
      'src/32', 'src/40', 'src/48', 'src/64x42'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json'
      }
    },
    rules: {
      'no-console': 'warn',
      camelcase: 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.config.*', 'src/helpers/**/*.js'],
    languageOptions: {
      parserOptions: {
        project: null
      }
    }
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@stylistic/indent': 'off',
      '@stylistic/jsx-indent-props': 'off',
      '@stylistic/jsx-wrap-multilines': 'off',
      '@stylistic/jsx-tag-spacing': 'off',
      '@stylistic/jsx-curly-brace-presence': 'off',
      '@stylistic/exp-list-style': 'off',
      '@stylistic/max-len': ['warn', { code: 250, ignoreUrls: true }],
      'security/detect-object-injection': 'off'
    }
  }
])
