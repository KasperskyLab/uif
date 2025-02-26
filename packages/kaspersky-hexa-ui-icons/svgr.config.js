module.exports = {
  typescript: true,
  replaceAttrValues: {
    '#000': '{resolveColorToken(props.color) || props.color || "currentColor"}',
    currentColor: '{resolveColorToken(props.color) || props.color || "currentColor"}',
    black: '{resolveColorToken(props.color) || props.color || "currentColor"}',
    '#0D0D15': '{resolveColorToken(props.color) || props.color || "currentColor"}'
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
