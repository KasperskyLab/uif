const { PIXSO_DATA } = require('../../constants')

const {
  createValueNormalizer,
  detectThemeKey,
  getCSSVarName,
  normalizeModeKey,
  normalizePixsoTokenNameToCssVar,
  rgbaToHex,
  THEME_SELECTORS
} = require('./core')
const {
  iterateAliasTokensList,
  iterateModes,
  iterateSemanticTokens,
  pickProductColorSections
} = require('./iterate')

const getPixsoStaticPalette = (data = PIXSO_DATA) => {
  const staticTokens = data?.['static-tokens'] || []
  const palette = {}

  staticTokens.forEach(section => {
    const modes = section?.staticColors || []
    modes.forEach(mode => {
      const modeName = Object.keys(mode)[0]
      const tokens = mode[modeName] || {}

      Object.entries(tokens).forEach(([tokenPath, rgbaColor]) => {
        const withoutPrefix = tokenPath.replace(/^--/, '')
        const tokenName = withoutPrefix.split('/').pop()
        if (tokenName) palette[tokenName] = rgbaToHex(rgbaColor)
      })
    })
  })

  return palette
}

const getPixsoStaticPaletteAsCssVars = (data) => {
  const jsPalette = getPixsoStaticPalette(data)
  const result = {}

  for (const tokenName in jsPalette) {
    result[getCSSVarName(tokenName)] = jsPalette[tokenName]
  }

  return result
}

const getPixsoStaticCSSVarsString = (data = PIXSO_DATA) => {
  const palette = getPixsoStaticPaletteAsCssVars(data)
  const entries = Object.entries(palette)
  if (!entries.length) return ''

  const lines = entries
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n')

  return `:root {\n${lines}\n}\n`
}

const getPixsoModesCSSVarsString = (data = PIXSO_DATA, ctx) => {
  const finalCtx = ctx || createPixsoCssContext(data)
  const modeVars = {}

  iterateModes(data, (modeName, tokens = {}) => {
    Object.entries(tokens).forEach(([rawName, rawValue]) => {
      const [cssName, cssValue] = normalizeModeKey(rawName, modeName, rawValue, finalCtx)
      modeVars[cssName] = cssValue
    })
  })

  return renderCssBlock(':root', modeVars, { sort: true })
}

const collectCssVarNames = (iterateModes) => {
  const cssVars = new Set()

  iterateModes((modeName, tokens) => {
    if (!tokens || typeof tokens !== 'object') return
    Object.keys(tokens).forEach((rawName) => {
      cssVars.add(normalizePixsoTokenNameToCssVar(rawName))
    })
  })

  return cssVars
}

const buildNonPaletteReferenceVarSet = (data) => new Set([
  ...collectCssVarNames(cb => iterateSemanticTokens(data, cb)),
  ...collectCssVarNames(cb => iterateAliasTokensList(pickProductColorSections(data?.['product-tokens']), cb)),
  ...collectCssVarNames(cb => iterateAliasTokensList(Array.isArray(data?.['widget-tokens']) ? data['widget-tokens'] : [], cb))
])

const buildTokensByTheme = (iterateModes, ctx) => {
  const themes = { light: {}, dark: {} }

  iterateModes((modeName, tokens) => {
    const hasLight = Object.keys(themes.light).length > 0
    const hasDark = Object.keys(themes.dark).length > 0
    const themeKey = detectThemeKey(modeName, hasLight, hasDark)

    Object.entries(tokens || {}).forEach(([rawName, rawValue]) => {
      const cssName = normalizePixsoTokenNameToCssVar(rawName)
      themes[themeKey][cssName] = ctx.normalizeValue(rawValue)
    })
  })

  return themes
}

const getPixsoSemanticTokens = (data = PIXSO_DATA, ctx) => {
  const finalCtx = ctx || createPixsoCssContext(data)
  return buildTokensByTheme(cb => iterateSemanticTokens(data, cb), finalCtx)
}

const getPixsoProductAliasTokens = (data = PIXSO_DATA, ctx) => {
  const finalCtx = ctx || createPixsoCssContext(data)
  const sections = pickProductColorSections(data?.['product-tokens'])
  return buildTokensByTheme(cb => iterateAliasTokensList(sections, cb), finalCtx)
}

const getPixsoWidgetAliasTokens = (data = PIXSO_DATA, ctx) => {
  const finalCtx = ctx || createPixsoCssContext(data)
  const list = Array.isArray(data?.['widget-tokens']) ? data['widget-tokens'] : []
  return buildTokensByTheme(cb => iterateAliasTokensList(list, cb), finalCtx)
}

const getPixsoSemanticCSSVarsString = (data = PIXSO_DATA, ctx) => {
  const themes = getPixsoSemanticTokens(data, ctx)

  const light = renderCssBlock(THEME_SELECTORS.light, themes.light)
  const dark = renderCssBlock(THEME_SELECTORS.dark, themes.dark)

  return [light, dark].filter(Boolean).join('\n\n')
}

const renderCssBlock = (selector, tokens, { sort = false } = {}) => {
  const entries = Object.entries(tokens || {})
  if (entries.length === 0) return ''

  if (sort) {
    entries.sort(([a], [b]) => (a > b ? 1 : a < b ? -1 : 0))
  }

  const body = entries
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n')

  return `${selector} {\n${body}\n}`
}

const getPixsoAliasCSSVarsStringFromMap = (tokensByTheme) => {
  const light = renderCssBlock(THEME_SELECTORS.light, tokensByTheme.light, { sort: true })
  const dark = renderCssBlock(THEME_SELECTORS.dark, tokensByTheme.dark, { sort: true })

  return [light, dark].filter(Boolean).join('\n') + (light || dark ? '\n' : '')
}

const createPixsoCssContext = (data) => {
  const nonPaletteReferenceVars = buildNonPaletteReferenceVarSet(data)
  return {
    nonPaletteReferenceVars,
    normalizeValue: createValueNormalizer(nonPaletteReferenceVars)
  }
}

const getPixsoTokensCSSVarsString = () => {
  const data = PIXSO_DATA
  const ctx = createPixsoCssContext(data)

  const staticPart = getPixsoStaticCSSVarsString(data)
  const semanticPart = getPixsoSemanticCSSVarsString(data, ctx)
  const modesPart = getPixsoModesCSSVarsString(data, ctx)

  const productPart = getPixsoAliasCSSVarsStringFromMap(getPixsoProductAliasTokens(data, ctx))
  const widgetPart = getPixsoAliasCSSVarsStringFromMap(getPixsoWidgetAliasTokens(data, ctx))

  const parts = [staticPart, semanticPart, modesPart, productPart, widgetPart].filter(Boolean)
  if (!parts.length) return ''
  return `${parts.join('\n')}\n`
}

module.exports = {
  buildNonPaletteReferenceVarSet,
  buildTokensByTheme,
  getPixsoModesCSSVarsString,
  getPixsoProductAliasTokens,
  getPixsoSemanticTokens,
  getPixsoStaticPalette,
  getPixsoTokensCSSVarsString,
  getPixsoWidgetAliasTokens
}
