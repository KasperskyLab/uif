const { PIXSO_DATA } = require('../../constants')

const {
  createValueNormalizer,
  detectThemeKey,
  normalizePixsoTokenNameToCssVar,
  normalizePixsoTokenNameToJsPathParts
} = require('./core')
const { iterateAliasTokensList, iterateSemanticTokens, pickProductColorSections } = require('./iterate')
const {
  buildNonPaletteReferenceVarSet,
  getPixsoSemanticTokens,
  getPixsoStaticPalette
} = require('./tokensCss')

const getPixsoStaticPaletteAsCssVars = (data) => {
  const jsPalette = getPixsoStaticPalette(data)
  const result = {}
  for (const tokenName in jsPalette) {
    result[`--color--${tokenName}`] = jsPalette[tokenName]
  }
  return result
}

const createResolver = (data, normalizeValue) => {
  const staticPaletteCssVars = getPixsoStaticPaletteAsCssVars(data)
  const semanticTokensByTheme = (() => {
    const themes = { light: {}, dark: {} }

    const ctx = { normalizeValue }

    const byTheme = getPixsoSemanticTokens(data, ctx)
    themes.light = byTheme.light || {}
    themes.dark = byTheme.dark || {}

    return themes
  })()

  const resolveValue = (value, themeName, stack = []) => {
    if (typeof value !== 'string') return value
    if (!value.startsWith('var(') || !value.endsWith(')')) return value

    const varName = value.slice(4, -1)
    if (stack.includes(varName)) return value

    if (Object.prototype.hasOwnProperty.call(staticPaletteCssVars, varName)) {
      return staticPaletteCssVars[varName]
    }

    const themeTokens = semanticTokensByTheme?.[themeName] || {}
    if (Object.prototype.hasOwnProperty.call(themeTokens, varName)) {
      return resolveValue(themeTokens[varName], themeName, [...stack, varName])
    }

    return value
  }

  return { resolveValue }
}

const createPixsoObjectContext = (data) => {
  const nonPaletteReferenceVars = buildNonPaletteReferenceVarSet(data)
  const normalizeValue = createValueNormalizer(nonPaletteReferenceVars)
  const resolver = createResolver(data, normalizeValue)

  return {
    nonPaletteReferenceVars,
    normalizeValue,
    resolveValue: resolver.resolveValue
  }
}

const ensureBothThemes = (resolved) => {
  const result = { light: {}, dark: {} }

  const lightTheme = resolved.light || {}
  const darkTheme = resolved.dark || {}

  const allKeys = new Set([
    ...Object.keys(lightTheme),
    ...Object.keys(darkTheme)
  ])

  allKeys.forEach(key => {
    const lightValue = lightTheme[key]
    const darkValue = darkTheme[key]

    result.light[key] = lightValue !== undefined ? lightValue : darkValue
    result.dark[key] = darkValue !== undefined ? darkValue : lightValue
  })

  return result
}

const resolveByTheme = (byTheme, ctx) => {
  const result = { light: {}, dark: {} }

  Object.entries(byTheme?.light || {}).forEach(([cssVar, value]) => {
    result.light[cssVar] = ctx.resolveValue(value, 'light')
  })

  Object.entries(byTheme?.dark || {}).forEach(([cssVar, value]) => {
    result.dark[cssVar] = ctx.resolveValue(value, 'dark')
  })

  return result
}

const buildTokenTree = (byThemeResolved, jsPathByCssVarName) => {
  const result = {}

  Object.entries(byThemeResolved || {}).forEach(([themeName, tokens]) => {
    Object.entries(tokens || {}).forEach(([cssVar, value]) => {
      const path = jsPathByCssVarName?.[cssVar] ??
        cssVar.replace(/^--/, '').split('--').filter(Boolean)

      if (!path.length) return

      const leaf = path.reduce((acc, key) => {
        acc[key] = acc[key] ?? {}
        return acc[key]
      }, result)

      leaf[themeName] = value
    })
  })

  return result
}

const extractByThemeWithJsPaths = (iterateModes, data, ctx) => {
  const byTheme = { light: {}, dark: {} }
  const jsPathByCssVarName = {}

  iterateModes((modeName, themeTokens = {}) => {
    const hasLight = Object.keys(byTheme.light).length > 0
    const hasDark = Object.keys(byTheme.dark).length > 0
    const themeKey = detectThemeKey(modeName, hasLight, hasDark)

    Object.entries(themeTokens).forEach(([rawName, rawValue]) => {
      const cssVar = normalizePixsoTokenNameToCssVar(rawName)
      byTheme[themeKey][cssVar] = ctx.normalizeValue(rawValue)

      if (!Object.prototype.hasOwnProperty.call(jsPathByCssVarName, cssVar)) {
        jsPathByCssVarName[cssVar] = normalizePixsoTokenNameToJsPathParts(rawName)
      }
    })
  })

  return { byTheme, jsPathByCssVarName }
}

const buildPixsoTokensObject = (iterateModes) => {
  const data = PIXSO_DATA
  const ctx = createPixsoObjectContext(data)

  const { byTheme, jsPathByCssVarName } = extractByThemeWithJsPaths(iterateModes, data, ctx)
  const resolved = ensureBothThemes(resolveByTheme(byTheme, ctx))

  return buildTokenTree(resolved, jsPathByCssVarName)
}

const getProductTokensPixso = () => {
  const sections = pickProductColorSections(PIXSO_DATA?.['product-tokens'])
  return buildPixsoTokensObject(cb => iterateAliasTokensList(sections, cb))
}

const getWidgetTokensPixso = () => {
  const list = Array.isArray(PIXSO_DATA?.['widget-tokens']) ? PIXSO_DATA['widget-tokens'] : []
  return buildPixsoTokensObject(cb => iterateAliasTokensList(list, cb))
}

const getSemanticTokensPixso = () => {
  return buildPixsoTokensObject(cb => iterateSemanticTokens(PIXSO_DATA, cb))
}

module.exports = {
  getProductTokensPixso,
  getSemanticTokensPixso,
  getWidgetTokensPixso
}
