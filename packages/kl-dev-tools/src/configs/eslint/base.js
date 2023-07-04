const base = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows JSX syntax parsing
    },
    requireConfigFile: false,
    babelrc: false,
    configFile: false,
    presets: ['@babel/preset-env']
  },
  rules: {
    camelcase: 'warn',
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
    'no-irregular-whitespace': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/no-var-requires': 'warn'
  },
  extends: [
    'standard', // Basic set of standardjs
    'plugin:security/recommended'
  ],
  globals: {
    _: 'readonly',
    runtime: 'readonly',
    server: 'readonly'
  },
  plugins: [
    'jest'
  ]
}

module.exports = base
