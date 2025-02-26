const fs = require('fs')
const path = require('path')

const jsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, './tokens/typography-tokens.json')))

const getTypographyCSSVarsString = () => {
  return `:root {
${Object.entries(jsonData).reduce((cssString, [textLevel, textValue]) => {
    const { htmlTag, ...textSizes } = textValue
    return cssString + Object.entries(textSizes).reduce((string, [key, value]) => {
      const cssKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
      return `${string}  --text--${textLevel.split('/')[1].toLowerCase()}--${cssKey}: ${value};\n`
    }, '')
  }, '')}}`
}

module.exports = {
  getTypographyCSSVarsString
}
