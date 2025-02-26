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
    'no-empty-function': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-dupe-class-members': 'warn',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '{../../**,..,@kaspersky/**,Client/**,.}/*.{less,css}',
            group: 'unknown',
            patternOptions: { matchBase: true },
            position: 'after'
          },
          {
            pattern: '{@css,@certificates}/**',
            group: 'unknown',
            patternOptions: { matchBase: true },
            position: 'after'
          },
          {
            pattern: '@kaspersky/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '{Enterprise,Client,Shared,@services,@client,@server,@common,environment,domains,app,components}/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '{Types,types}/**',
            group: 'object',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: [
          '@kl',
          'Enterprise',
          'Client',
          'Types',
          'Shared'
        ],
        groups: [
          'external',
          'builtin',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown'
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always',
        named: true
      }
    ]
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
