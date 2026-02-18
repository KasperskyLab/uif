import eslint from 'eslint/config'
import prettierConfig from 'eslint-config-prettier/flat'
import prettierPlugin from 'eslint-plugin-prettier'

export default eslint.defineConfig([
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          printWidth: 80,
          trailingComma: 'none',
          endOfLine: 'auto'
        }
      ],
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off'
    }
  }
])
