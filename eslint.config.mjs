import { defineConfig } from 'eslint/config'
// Use source path: workspace-linked dev-tools has no lib/ until published
import configs from './packages/kaspersky-dev-tools/src/configs/eslint/index.mjs'

export default defineConfig([
  configs.base,
  configs.prettier,
  {
    ignores: [
      'node_modules/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/lib/**',
      '**/esm/**',
      '**/storybook/**',
      '**/.turbo/**'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}']
  }
])
