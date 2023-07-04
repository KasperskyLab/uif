module.exports = {
  globals: {
    JSX: true
  },
  plugins: ['react', 'react-hooks'],
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
        'react/no-danger': 'off'
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
