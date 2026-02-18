import eslint from 'eslint/config'
import securityPlugin from 'eslint-plugin-security'
import globals from 'globals'

export default eslint.defineConfig([
  securityPlugin.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        globals: {
          ...globals.browser,
          ...globals.node
        }
      }
    }
  }
])
