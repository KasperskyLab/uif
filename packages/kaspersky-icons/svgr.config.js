module.exports = {
  typescript: true,
  replaceAttrValues: {
    '#000': '{props.color || "currentColor"}',
    '#0D0D15': '{props.color || "currentColor"}'
  },
  template: require('./templateIcons'),
  prettierConfig: {
    singleQuote: true,
    parser: 'typescript',
    bracketSpacing: true,
    tabWidth: 2,
    printWidth: 120,
    semi: false,
    endOfLine: 'auto',
    arrowParens: 'avoid'
  },
  ref: true,
  index: false
}
