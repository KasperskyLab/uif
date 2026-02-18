import babelParser from '@babel/eslint-parser'
import javascript from '@eslint/js'
import eslint from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import securityPlugin from 'eslint-plugin-security'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import { eslintCommonGlobals } from './globals.mjs'

export default eslint.defineConfig([
  javascript.configs.recommended,
  securityPlugin.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mjs,js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        requireConfigFile: false
      },
      globals: {
        _: 'readonly',
        server: 'readonly',
        runtime: 'readonly',
        ...eslintCommonGlobals,
        ...globals.browser,
        ...globals.node
      }
    },

    rules: {
      // turn OFF built-in core formatting rules (we use stylistic plugin instead)
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'space-before-function-paren': 'off',
      'keyword-spacing': 'off',
      'comma-dangle': 'off',
      'operator-linebreak': 'off',
      'no-multiple-empty-lines': 'off',

      // Objects with 4+ props must break into multiple lines
      '@stylistic/exp-list-style': ['error', {
        overrides: {
          ObjectExpression: { singleLine: { maxItems: 4 } },
          ImportDeclaration: { singleLine: { maxItems: 4 } },
          ExportNamedDeclaration: { singleLine: { maxItems: 4 } },
        }
      }],

      // Allow multiple object props on the same line if object is single-line
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true
      }],

      // Require spaces inside { … }
      '@stylistic/object-curly-spacing': ['error', 'always'],

      // Enforce consistent array newlines (compact if possible)
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-element-newline': ['error', 'consistent'],

      // Disallow multiple spaces in a row
      '@stylistic/no-multi-spaces': 'error',

      // Space before { block }
      '@stylistic/space-before-blocks': ['error', 'always'],

      // No spaces inside ( )
      '@stylistic/space-in-parens': ['error', 'never'],

      // Enforce 2-space indentation everywhere
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: false
      }],

      // Use single quotes, allow escaping, forbid template literals unless needed
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'never' }],

      // No semicolons at line end
      '@stylistic/semi': ['error', 'never'],

      // Require space before function parentheses
      '@stylistic/space-before-function-paren': ['error', 'always'],

      // Space before/after keywords (if, else, for, etc.)
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],

      // No trailing commas anywhere
      '@stylistic/comma-dangle': ['error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }],

      // Place operators at line break (except ?: |> which are before)
      '@stylistic/operator-linebreak': ['error', 'after', {
        overrides: { '?': 'before', ':': 'before', '|>': 'before' }
      }],

      // Allow max 1 empty line, none at BOF/EOF
      '@stylistic/no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],

      // Пробелы вокруг =>
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

      // Запрет хвостовых пробелов
      '@stylistic/no-trailing-spaces': 'error',

      // 'direction' , 'gap' → 'direction', 'gap'
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],

      // String length
      '@stylistic/max-len': ['error', {
        code: 150,
        ignoreStrings: false,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignorePattern: [
          '^\\s*(?:[\\w$]+\\.)*logger\\.(debug|info|warn|error)\\(', // Log messages
          '^\\s*(x?it|test|describe)\\s*', // Test cases
          '^\\s*[\\w$]+\\s*:\\s*[\'"`].*[\'"`]\\s*,?\\s*$', // Properties of objects
          '^\\s*(?:export\\s+)?(const|let)\\s+\\w+\\s*=\\s*[\'"`]' // Assignment to variables
        ].join('|')
      }],

      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

      // ---------------- non-formatting rules ----------------

      camelcase: 'warn', // Warn if identifiers are not camelCase
      'no-var': 'warn', // Prefer let/const over var
      'prefer-const': 'warn', // Prefer const when variable is not reassigned
      'no-irregular-whitespace': 'warn', // Disallow invisible/irregular spaces
      'no-console': 'warn', // Warn on console.log usage
      'no-empty-function': 'warn', // Disallow empty function bodies
      'no-unreachable': 'warn', // Disallow code after return/throw
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-dupe-class-members': 'warn', // Disallow duplicate class members

      'import/no-cycle': ['warn', { maxDepth: Infinity, ignoreExternal: true }], // Detect import cycles
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
              pattern:
                '{Enterprise,Client,Shared,@services,@client,@server,@common,environment,domains,app,components}/**',
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
            '@kaspersky',
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
          named: true,
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          'newlines-between': 'always'
        }
      ],
      'import/no-self-import': 'error', // A file cannot import itself

      'max-lines': ['warn', { max: 400, skipBlankLines: true, skipComments: true }], // Max 400 LOC per file
      'no-nested-ternary': 'warn' // Disallow nested ternary expressions
    },
    plugins: {
      '@stylistic': stylistic,
      jest: jestPlugin,
      import: importPlugin
    },
    settings: {
      react: {
        version: '17.0.2' // Resolves warning: "React version not specified in eslint-plugin-react"
      }
    }
  }
])
