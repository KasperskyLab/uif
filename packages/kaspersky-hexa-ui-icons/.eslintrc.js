const { getConfigPath } = require('@kaspersky/dev-tools/src/configs/eslint/patch')

module.exports = {
  extends: [
    getConfigPath('base'),
    getConfigPath('react'),
    getConfigPath('typescript'),
    getConfigPath('storybook')
  ],
  parserOptions: { tsconfigRootDir: __dirname, project: './tsconfig.eslint.json' },
  rules: {
    'no-console': 'warn',
    camelcase: 'warn',
    '@typescript-eslint/no-unused-vars': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
