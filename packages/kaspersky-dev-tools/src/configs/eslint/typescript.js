const typescript = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      parserOptions: {
        ecmaVersion: 9, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname
      },
      extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'standard' // Allows for the use of imports
      ],
      plugins: ['deprecation'],
      rules: {
        camelcase: 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma',
            requireLast: false
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          }
        }],
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'deprecation/deprecation': 'warn'
      }
    }]
}

module.exports = typescript
