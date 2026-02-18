/* eslint-disable */
const del = require('del')

const fs = require('fs')

const {
  checkTokensChange: check,
  showLog,
  getStaticTokens,
  getProductTokens,
  getComponentTokens,
  getWidgetTokens,
  getProductTokensShortcuts,
  getComponentTokensShortcuts,
  getWidgetTokensShortcuts,
  getEffectsTokens,
  getStaticCSSVarsString,
  getProductCSSVarsString,
  getComponentCSSVarsString,
  getWidgetCSSVarsString
} = require('./src/colors/palette-build')

const {
  checkPixsoTokensChange: checkPixso,
  getPixsoTokensCSSVarsString,
  mergeCssBodies
} = require('./src/colors/palette-pixso-build')

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
const palette = ${JSON.stringify({ ...getStaticPalette(), ...getStaticTokens('static-tokens', 'staticColors') }, null, '  ')}\n
export const colors = palette
export type colorType = keyof typeof colors\n
export const themeColors = ${JSON.stringify(getGroupedSections(), null, '  ')}
export type themeColorsType = keyof typeof themeColors;\n
export const productColors = ${JSON.stringify(getProductTokens(), null, '  ')}
export type productColorsType = keyof typeof productColors\n
export const componentColors = ${JSON.stringify(getComponentTokens(), null, '  ')}
export type componentColorsType = keyof typeof componentColors\n
export const widgetColors = ${JSON.stringify(getWidgetTokens(), null, '  ')}
export type widgetColorsType = keyof typeof widgetColors\n
export const productColorsShortcuts = ${JSON.stringify(getProductTokensShortcuts(), null, '  ')}
export type productColorsShortcutsType = keyof typeof productColorsShortcuts\n
export const componentColorsShortcuts = ${JSON.stringify(getComponentTokensShortcuts(), null, '  ')}
export type componentColorsShortcutsType = keyof typeof componentColorsShortcuts\n
export const widgetColorsShortcuts = ${JSON.stringify(getWidgetTokensShortcuts(), null, '  ')}
export type widgetColorsShortcutsType = keyof typeof widgetColorsShortcuts\n
export const shortcutsV6 = ${JSON.stringify(getGroupedThemes(), null, '  ')}
export type shortcutsV6Type = typeof shortcutsV6\n
export const shortcuts = {
  dark: { ...shortcutsV6.dark, ...productColorsShortcuts.dark, ...componentColorsShortcuts.dark, ...widgetColorsShortcuts.dark },
  light: { ...shortcutsV6.light, ...productColorsShortcuts.light, ...componentColorsShortcuts.light, ...widgetColorsShortcuts.light }
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
${getComponentCSSVarsString()}
${getWidgetCSSVarsString()}`

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

function swapFiles (fileName1, fileName2) {
  try {
  const file1 = fs.readFileSync(fileName1)
  const file2 = fs.readFileSync(fileName2)

  fs.writeFileSync(fileName2, file1)
  fs.writeFileSync(fileName1, file2)
  } catch (error) {
    console.log('\x1b[31;1m', '\Swapping files failed\n', error)
  }
}

function swapTokensFiles (cb) {
  swapFiles('./src/colors/tokens/static-tokens.json', './src/colors/tokens/_/static-tokens.json')
  swapFiles('./src/colors/tokens/product-tokens.json', './src/colors/tokens/_/product-tokens.json')
  swapFiles('./src/colors/tokens/component-tokens.json', './src/colors/tokens/_/component-tokens.json')
  swapFiles('./src/colors/tokens/widget-tokens.json', './src/colors/tokens/_/widget-tokens.json')
  cb()
}

function swapTokensFilesPixso (cb) {
  swapFiles('./src/colors/tokens-pixso/static-tokens.json', './src/colors/tokens-pixso/_/static-tokens.json')
  swapFiles('./src/colors/tokens-pixso/product-tokens.json', './src/colors/tokens-pixso/_/product-tokens.json')
  swapFiles('./src/colors/tokens-pixso/semantic-tokens.json', './src/colors/tokens-pixso/_/semantic-tokens.json')
  swapFiles('./src/colors/tokens-pixso/widget-tokens.json', './src/colors/tokens-pixso/_/widget-tokens.json')
  cb()
}

function checkTokensChange (dataSwapped) {
  const result = check({ dataSwapped })
  if (result) {
    console.log('\x1b[31;1m', '\nThe structure of tokens has changed\n')
    return 1
  } else {
    console.log('\x1b[32;1m', '\nThe structure of tokens has not changed\n')
    return 0
  }
}

function checkSwappedTokensChange (cb) {
  cb()
  process.exit(checkTokensChange(true))
}

function checkNotSwappedTokensChange (cb) {
  cb()
  process.exit(checkTokensChange(false))
}

function updatePixsoColors (cb) {
  try {
    const content = `
${getPixsoTokensCSSVarsString()}`

    writeCSSVarsToFile({
      fileName: './src/colors/tokens-pixso/tokens.css',
      content
    })

    writeCSSVarsToFile({
      fileName: './src/colors/tokens-pixso/tokens.ts',
      content,
      isTSFile: true
    })

    console.log('\x1b[32;1m', '\nPixso palette build completed\n')
  } catch (error) {
    console.log('\x1b[31;1m', '\nPixso palette build failed\n', error)
  }
  cb()
}

function checkPixsoTokensChange (cb, dataSwapped) {
  const hasChanges = checkPixso({ dataSwapped })

  if (hasChanges) {
    cb(new Error('Pixso tokens structure has been changed (swapped mode)'))
  } else {
    cb()
  }
}

function mergePixsoTokens (cb) {
  try {
    const baseCssPath = './src/colors/tokens/tokens.css'
    const pixsoCssPath = './src/colors/tokens-pixso/tokens.css'
    const baseTsPath = './src/colors/tokens/tokens.ts'

    const baseCssContent = fs.readFileSync(baseCssPath, 'utf8')
    const pixsoCssContent = fs.readFileSync(pixsoCssPath, 'utf8')

    const mergedCssBody = mergeCssBodies(baseCssContent, pixsoCssContent)

    fs.writeFileSync(
      baseCssPath,
      mergedCssBody
        .replace('/*! This file was created automatically. */\n', '')
        .replace('/*! Use updateColors gulp task if you need to update colors. */\n', ''),
      'utf8'
    )


    const baseTsContent = fs.readFileSync(baseTsPath, 'utf8')
    const tsMatch = baseTsContent.match(/cssVarString\s*=\s*`([\s\S]*?)`/)

    const baseTsCssBody = tsMatch ? tsMatch[1] : ''
    const mergedTsBody = mergeCssBodies(baseTsCssBody, pixsoCssContent)

    writeCSSVarsToFile({
      fileName: baseTsPath,
      content: mergedTsBody
        .replace('/*! This file was created automatically. */\n', '')
        .replace('/*! Use updateColors gulp task if you need to update colors. */\n', ''),
      isTSFile: true
    })

    console.log('\x1b[32;1m', '\nPixso tokens successfully merged into tokens.css and tokens.ts\n')
  } catch (error) {
    console.log('\x1b[31;1m', '\nPixso tokens merge failed\n', error)
  }

  cb()
}


exports.swapTokensFiles = swapTokensFiles
exports.swapTokensFilesPixso = swapTokensFilesPixso
exports.checkSwappedTokensChange = checkSwappedTokensChange
exports.checkNotSwappedTokensChange = checkNotSwappedTokensChange
exports.clearColorFolders = clearColorFolders
exports.updateColors = updateColors
exports.updateTypography = updateTypography
exports.updatePixsoColors = updatePixsoColors
exports.checkPixsoSwappedTokensChange = (cb) => checkPixsoTokensChange(cb, true)
exports.checkPixsoNotSwappedTokensChange = (cb) => checkPixsoTokensChange(cb, false)
exports.mergePixsoTokens = mergePixsoTokens
