/* eslint-disable */
require('dotenv').config()

const del = require('del')
const { src, dest } = require('gulp')

const fs = require('fs')

const {
  showLog,
  getStaticTokens,
  getProductTokens,
  getComponentTokens,
  getProductTokensShortcuts,
  getComponentTokensShortcuts,
  getEffectsTokens,
  getStaticCSSVarsString,
  getProductCSSVarsString,
  getComponentCSSVarsString
} = require('./src/colors/palette-build')
const {
  showLog: showLogV6,
  getStaticPalette,
  getGroupedSections,
  getGroupedThemes,
  getPaletteCssVarsString,
  getThemedCssVarsString
} = require('./src/colors/palette-v6-build')
const { getTypographyCSSVarsString } = require('./src/typography/typography-build')

const WARNING = '/*! This file was created automatically. */\n'
const WARNING_COLORS = '/*! Use updateColors gulp task if you need to update colors. */\n'
const WARNING_TYPOGRAPHY = '/*! Use updateTypography gulp task if you need to update typography. */\n'

const handleError = (err) => { if (err) console.error(err) }

function release () {
  console.log('Deploying to', process.env.deployPath)
  return src('./src/**/*').pipe(dest(process.env.deployPath))
}

function clearFolder (pathToFolder) {
  return del([`${pathToFolder}/**/*`, `!${pathToFolder}/index.ts`])
}

function clearColorFolders (cb) {
  clearFolder('./src/colors/tokens/components')
  clearFolder('./src/colors/css/')
  cb()
}

function writeCSSVarsToFile ({ fileName, content, warningMessage = WARNING_COLORS, isTSFile = false }) {
  if (isTSFile === true) {
    fs.writeFile(fileName,
      `${WARNING}${warningMessage}
export const cssVarString = \`${content}\`\n`,
      {}, handleError)
  } else {
    fs.writeFile(fileName,
      `${WARNING}${warningMessage}
${content}`,
      {}, handleError)
  }
}

function writeColorsCSSVarsSectionToFile ({ key, content }) {
  writeCSSVarsToFile({ fileName: `./src/colors/tokens/components/${key}.ts`, content, isTSFile: true })
  fs.writeFile(`./src/colors/css/${key}.ts`,
    `${WARNING}${WARNING_COLORS}
import { cssVarString } from '../tokens/components/${key}'

if (!document.querySelector('head > style.hexa-ui-colors-${key}')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-${key}'
  style.textContent = cssVarString
  document.head.appendChild(style)
}\n`,
    {}, handleError)
}

function writeColorsCSSVarsToMultipleFiles (colors) {
  Object.entries(colors).forEach(([sectionName, value]) => {
    writeColorsCSSVarsSectionToFile({ key: sectionName, content: `${value.light}\n${value.dark}` })
  })
  writeColorsCSSVarsSectionToFile({ key: 'static', content: getStaticCSSVarsString() })
}

function writeAllColorsToFile () {
  fs.writeFile('./src/colors/js/index.ts',
    `${WARNING}${WARNING_COLORS}
/* eslint-disable */\n
import { cssVarString } from '../tokens/tokens'\n
export const colorsCssVarString = cssVarString\n
const palette = ${JSON.stringify({ ...getStaticPalette(), ...getStaticTokens() }, null, '  ')}\n
export const colors = palette
export type colorType = keyof typeof colors\n
export const themeColors = ${JSON.stringify(getGroupedSections(), null, '  ')}
export type themeColorsType = keyof typeof themeColors;\n
export const productColors = ${JSON.stringify(getProductTokens(), null, '  ')}
export type productColorsType = keyof typeof productColors\n
export const componentColors = ${JSON.stringify(getComponentTokens(), null, '  ')}
export type componentColorsType = keyof typeof componentColors\n
export const productColorsShortcuts = ${JSON.stringify(getProductTokensShortcuts(), null, '  ')}
export type productColorsShortcutsType = keyof typeof productColorsShortcuts\n
export const componentColorsShortcuts = ${JSON.stringify(getComponentTokensShortcuts(), null, '  ')}
export type componentColorsShortcutsType = keyof typeof componentColorsShortcuts\n
export const shortcutsV6 = ${JSON.stringify(getGroupedThemes(), null, '  ')}
export type shortcutsV6Type = typeof shortcutsV6\n
export const shortcuts = {
  dark: { ...shortcutsV6.dark, ...productColorsShortcuts.dark, ...componentColorsShortcuts.dark },
  light: { ...shortcutsV6.light, ...productColorsShortcuts.light, ...componentColorsShortcuts.light }
}
export type shortcutsType = typeof shortcuts\n
export const effects = ${JSON.stringify(getEffectsTokens(), null, '  ')}
export type effectsType = typeof effects\n
export type allColorType = colorType | themeColorsType | productColorsType | componentColorsType
export const allColors = { ...palette, ...themeColors, ...productColors, ...componentColors }
export type allColorsType = typeof allColors
export type extendedColorType = keyof typeof allColors\n`,
    {}, handleError)
}

function updateColors (cb) {
  showLog()
  showLogV6()
  try {
    writeAllColorsToFile()
    writeColorsCSSVarsToMultipleFiles(getComponentCSSVarsString(true))

    const content = `
${getPaletteCssVarsString()}
${getThemedCssVarsString()}
${getStaticCSSVarsString()}
${getProductCSSVarsString()}
${getComponentCSSVarsString()}`

    writeCSSVarsToFile({ fileName: './src/colors/tokens/tokens.css', content })
    writeCSSVarsToFile({ fileName: './src/colors/tokens/tokens.ts', content, isTSFile: true })

    console.log('\x1b[32;1m', '\nPalette build completed\n')
  } catch (error) {
    console.log('\x1b[31;1m', '\nPalette build failed\n', error)
  }
  cb()
}

function updateTypography (cb) {
  try {
    const content = `${getTypographyCSSVarsString()}`

    writeCSSVarsToFile({
      fileName: './src/typography/tokens/tokens.css',
      content,
      warningMessage: WARNING_TYPOGRAPHY
    })
    writeCSSVarsToFile({
      fileName: './src/typography/tokens/tokens.ts',
      content,
      warningMessage: WARNING_TYPOGRAPHY,
      isTSFile: true
    })

    console.log('\x1b[32;1m', '\nTypography build completed\n')
  } catch (error) {
    console.log('\x1b[31;1m', '\nTypography build failed\n', error)
  }
  cb()
}

exports.release = release
exports.clearColorFolders = clearColorFolders
exports.updateColors = updateColors
exports.updateTypography = updateTypography
