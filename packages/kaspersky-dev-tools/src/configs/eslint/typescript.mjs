import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
const config = tseslint.config(
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      '@stylistic/type-annotation-spacing': 'error',
      '@typescript-eslint/no-require-imports': 'warn',

      '@typescript-eslint/naming-convention': [
        'warn',
        { selector: 'variableLike', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] }
      ],
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/no-unused-expressions': 'warn'
    }
  }
)


export default config