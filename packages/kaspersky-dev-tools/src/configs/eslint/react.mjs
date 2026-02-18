import eslint from 'eslint/config'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default eslint.defineConfig([
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      globals: {
        JSX: 'readonly'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'jsx-quotes': 'off', // disable core rule
      '@stylistic/jsx-quotes': ['error', 'prefer-double'], // enforce double quotes in JSX attributes

      // --- Common JSX formatting rules ---
      '@stylistic/jsx-indent-props': ['error', 2], // indent props by 2 spaces
      '@stylistic/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }], // require space before /> in self-closing tags
      '@stylistic/jsx-curly-spacing': ['error', { when: 'never', children: true }], // no spaces inside {…}, except allow in children
      '@stylistic/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }], // wrap multi-line JSX in parentheses with new line
      '@stylistic/jsx-curly-brace-presence': 'error', // enforce consistent use/removal of { } around props/children

      // --- React-specific rules ---
      'react/prop-types': 'off', // disable prop-types checks (using TS instead)
      'react/display-name': 'warn', // warn if component missing displayName
      'react/jsx-uses-react': 'off', // not needed with new JSX transform
      'react/jsx-uses-vars': 'off', // handled automatically by ESLint
      'react/react-in-jsx-scope': 'off', // not needed with new JSX transform
      'react/no-danger': 'off', // allow dangerouslySetInnerHTML
      'react/no-unknown-property': 'warn', // warn on invalid DOM props
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn'
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    }
  }
])
