import { colors, shortcuts } from '../design-system/tokens'

export const buildCssVarsPalette = () => {
  return `:root {\n${Object.entries(colors).map(([name, value]) => `--color-${name}: ${value};`).join('\n')}}`
}

const sortThemes = (a: any, b: any) => {
  const [nameA] = a
  const [nameB] = b
  if (nameA > nameB) return -1
  if (nameA < nameB) return 1
  return 0
}
export const buildCssVarsTokens = () => {
  return Object.entries(shortcuts).sort(sortThemes).reduce((cssString, [themeName, section]) => {
    const cssSectionString = Object.entries(section).reduce((sectionString, [sectionName, sectionValue]) => {
      const cssVariablesString = Object.entries(sectionValue).reduce((entryString, [entryName, entryValue]) => {
        const [cleanEntryName] = entryName.split('[deprecated]')
        return `${entryString}  --${sectionName.toLowerCase()}--${cleanEntryName.toLowerCase()}: ${entryValue};\n`
      }, '')
      return `${sectionString}${cssVariablesString}`
    }, '')
    const prefix = themeName === 'dark' ? '\n.theme-dark {\n' : '\n:root,\n.theme-light {\n'
    const suffix = '}\n'
    return `${cssString}${prefix}${cssSectionString}${suffix}`
  }, '')
}
