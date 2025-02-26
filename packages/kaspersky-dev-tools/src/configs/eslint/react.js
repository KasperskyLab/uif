module.exports = {
  globals: {
    JSX: true
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.jsx'],
      extends: [
        'plugin:react/jsx-runtime',
        'plugin:react/recommended'
      ],
      rules: {
        'react/prop-types': 'off',
        'react/display-name': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/no-danger': 'off',
        'react/no-unknown-property': 'warn',
        'jsx-quotes': 'error',
        'react/jsx-curly-brace-presence': 'error'
      }
    },
    {
      files: ['src/**/*.test.tsx', 'screenshots/**/*.test.tsx'],
      env: {
        browser: false,
        es6: true,
        jest: true
      }
    }
  ]
}
