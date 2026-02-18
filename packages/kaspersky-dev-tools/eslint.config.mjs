import eslint from 'eslint/config'
import baseConfig from './src/configs/eslint/base.mjs'

export default eslint.defineConfig([
  baseConfig,
  {
    ignores: ['lib/**/*', 'tests/**/*']
  },
  {
    files: ['src/**/*'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  }
])
