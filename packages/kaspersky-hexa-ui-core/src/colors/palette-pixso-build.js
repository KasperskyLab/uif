const { COMPONENTS, PIXSO_DATA, PIXSO_OLD_DATA } = require('./constants')

const rgbaToHex = (rgbaString) => {
  if (typeof rgbaString !== 'string') return rgbaString

  const match = rgbaString.match(/rgba?\(([^)]+)\)/i)
  if (!match) return rgbaString

  const [r, g, b] = match[1].split(',').slice(0, 3).map((v) => {
    const n = Math.round(parseFloat(String(v).trim()))
    const clamped = Math.max(0, Math.min(255, Number.isFinite(n) ? n : 0))
    return clamped.toString(16).padStart(2, '0').toUpperCase()
  })

  return `#${r}${g}${b}`
}

const checkMapKeysChange = (oldMap, newMap) => {
  const oldKeys = Object.keys(oldMap || {})
  const newKeys = Object.keys(newMap || {})

  if (oldKeys.length !== newKeys.length) return true

  const newSet = new Set(newKeys)
  return oldKeys.some((key) => !newSet.has(key))
}

const getPixsoStaticPalette = (data = PIXSO_DATA) => {
  const staticTokens = data && data['static-tokens']
  if (!staticTokens || !Array.isArray(staticTokens) || !staticTokens.length) return {}

  const [root] = staticTokens
  if (!root || !Array.isArray(root.staticColors) || !root.staticColors.length) return {}

  const [modeObj] = root.staticColors
  if (!modeObj) return {}

  const modeName = Object.keys(modeObj)[0]
  const tokens = modeObj[modeName] || {}

  return Object.entries(tokens).reduce((acc, [rawName, rgba]) => {
    const name = rawName.replace(/^--/, '').split('/').pop()
    if (!name) return acc

    return {
      ...acc,
      [name]: rgbaToHex(rgba)
    }
  }, {})
}

const getPixsoStaticCSSVarsString = () => {
  const palette = getPixsoStaticPalette()
  const entries = Object.entries(palette)
  if (!entries.length) return ''

  const lines = entries
    .map(([name, value]) => `  --color--${name}: ${value};`)
    .join('\n')

  return `:root {\n${lines}\n}\n`
}

const normalizePixsoSemanticValue = (value) => {
  if (typeof value !== 'string') return value

  return value.replace(/var\((--[^)]+)\)/g, (_, rawName) => {
    const cleaned = rawName.replace(/^--/, '')
    const tokenName = cleaned.split('/').pop()
    if (!tokenName) return value
    return `var(--color--${tokenName})`
  })
}

const normalizePixsoTokenNameToCssVar = (rawName) => {
  if (typeof rawName !== 'string') return rawName

  const withoutPrefix = rawName
    .replace(/^--🟢\s*/, '')
    .replace(/^--/, '')

  const parts = withoutPrefix.split('/').map((p) =>
    p
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_')
  )

  return `--${parts.join('--')}`
}

const normalizePixsoAliasValueToCssVar = (value) => {
  if (typeof value !== 'string') return value

  return value.replace(/var\((--[^)]+)\)/g, (_, rawName) => {
    const withoutPrefix = rawName.replace(/^--/, '')
    const parts = withoutPrefix.split('/').map((p) =>
      p
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '_')
    )
    return `var(--${parts.join('--')})`
  })
}

const getPixsoSemanticTokens = (data = PIXSO_DATA) => {
  const semanticTokens = data && data['semantic-tokens']
  if (!semanticTokens || !Array.isArray(semanticTokens)) return {}

  const themes = {}

  semanticTokens.forEach((entry) => {
    if (!entry || !entry['Semantic tokens']) return

    entry['Semantic tokens'].forEach((themeEntry) => {
      const [themeName, tokens] = Object.entries(themeEntry || {})[0] || []
      if (!themeName || !tokens) return

      const key = themeName.toLowerCase().includes('dark') ? 'dark' : 'light'
      const prev = themes[key] || {}

      const mapped = Object.entries(tokens).reduce((acc, [rawName, rawValue]) => {
        const cssVarName = normalizePixsoTokenNameToCssVar(rawName)
        const cssVarValue = normalizePixsoSemanticValue(rawValue)
        acc[cssVarName] = cssVarValue
        return acc
      }, {})

      themes[key] = { ...prev, ...mapped }
    })
  })

  return themes
}

const getPixsoSemanticCSSVarsString = () => {
  const themes = getPixsoSemanticTokens()
  const blocks = []

  if (themes.light && Object.keys(themes.light).length) {
    const lines = Object.entries(themes.light)
      .map(([name, value]) => `  ${name}: ${value};`)
      .join('\n')

    blocks.push(`:root,\n.theme-light,\n.hexa-ui-light-theme {\n${lines}\n}\n`)
  }

  if (themes.dark && Object.keys(themes.dark).length) {
    const lines = Object.entries(themes.dark)
      .map(([name, value]) => `  ${name}: ${value};`)
      .join('\n')

    blocks.push(`.theme-dark,\n.hexa-ui-dark-theme {\n${lines}\n}\n`)
  }

  return blocks.join('\n')
}

const getPixsoAliasTokensByThemeFromList = (list) => {
  const result = { light: {}, dark: {} }
  if (!Array.isArray(list)) return result

  list.forEach((sectionEntry) => {
    if (!sectionEntry || typeof sectionEntry !== 'object') return

    Object.values(sectionEntry).forEach((modes) => {
      if (!Array.isArray(modes)) return

      modes.forEach((modeEntry) => {
        if (!modeEntry || typeof modeEntry !== 'object') return

        Object.entries(modeEntry).forEach(([modeName, tokens]) => {
          if (!tokens || typeof tokens !== 'object') return

          const key = modeName.toLowerCase().includes('dark') ? 'dark' : 'light'
          const prev = result[key]

          const mapped = Object.entries(tokens).reduce((acc, [rawName, rawValue]) => {
            const cssVarName = normalizePixsoTokenNameToCssVar(rawName)
            const cssVarValue = normalizePixsoAliasValueToCssVar(rawValue)
            acc[cssVarName] = cssVarValue
            return acc
          }, {})

          result[key] = { ...prev, ...mapped }
        })
      })
    })
  })

  return result
}

const getPixsoProductAliasTokens = (data = PIXSO_DATA) => {
  const prod = data && data['product-tokens']
  if (!prod || !Array.isArray(prod)) return { light: {}, dark: {} }

  const colorSections = prod.filter((entry) => {
    if (!entry || typeof entry !== 'object') return false
    return 'product_colors' in entry || 'components_colors' in entry
  })

  return getPixsoAliasTokensByThemeFromList(colorSections)
}

const getPixsoWidgetAliasTokens = (data = PIXSO_DATA) => {
  const widget = data && data['widget-tokens']
  if (!widget || !Array.isArray(widget)) return { light: {}, dark: {} }

  return getPixsoAliasTokensByThemeFromList(widget)
}

const getPixsoAliasCSSVarsStringFromMap = (tokensByTheme) => {
  const blocks = []

  const themesOrder = ['light', 'dark']

  themesOrder.forEach((themeName) => {
    const tokens = tokensByTheme[themeName] || {}
    const entries = Object.entries(tokens)
    if (!entries.length) return

    const selector =
      themeName === 'dark'
        ? '.theme-dark,\n.hexa-ui-dark-theme'
        : ':root,\n.theme-light,\n.hexa-ui-light-theme'

    const lines = entries
      .sort(([a], [b]) => (a > b ? 1 : a < b ? -1 : 0))
      .map(([name, value]) => `  ${name}: ${value};`)
      .join('\n')

    blocks.push(`${selector} {\n${lines}\n}\n`)
  })

  return blocks.join('\n')
}

const getPixsoTokensCSSVarsString = () => {
  const staticPart = getPixsoStaticCSSVarsString()
  const semanticPart = getPixsoSemanticCSSVarsString()

  const productTokens = getPixsoProductAliasTokens()
  const widgetTokens = getPixsoWidgetAliasTokens()

  const productPart = getPixsoAliasCSSVarsStringFromMap(productTokens)
  const widgetPart = getPixsoAliasCSSVarsStringFromMap(widgetTokens)

  const parts = [staticPart, semanticPart, productPart, widgetPart].filter(Boolean)

  if (!parts.length) return ''
  return `${parts.join('\n')}\n`
}

const checkPixsoSemanticStructureChange = (oldThemes, newThemes) => {
  const oldNames = Object.keys(oldThemes || {})
  const newNames = Object.keys(newThemes || {})

  if (oldNames.length !== newNames.length) return true

  const newNameSet = new Set(newNames)
  if (oldNames.some((name) => !newNameSet.has(name))) return true

  return oldNames.some((name) => {
    const oldTokens = oldThemes[name] || {}
    const newTokens = newThemes[name] || {}
    return checkMapKeysChange(oldTokens, newTokens)
  })
}

const flattenAliasTokens = (map) => ({
  ...(map && map.light ? map.light : {}),
  ...(map && map.dark ? map.dark : {})
})

const checkPixsoTokensChange = ({ dataSwapped = false } = {}) => {
  const oldData = dataSwapped ? PIXSO_DATA : PIXSO_OLD_DATA
  const newData = dataSwapped ? PIXSO_OLD_DATA : PIXSO_DATA

  const results = []

  if (!oldData || !oldData['static-tokens'] || !newData || !newData['static-tokens']) {
    console.log('\x1b[33;1m', 'pixso static-tokens - SKIP (no old/new data)')
  } else {
    const oldPalette = getPixsoStaticPalette(oldData)
    const newPalette = getPixsoStaticPalette(newData)
    const rc = checkMapKeysChange(oldPalette, newPalette)
    console.log(rc ? '\x1b[31;1m' : '\x1b[32;1m', `pixso static-tokens - ${rc ? 'FAIL' : 'OK'}`)
    results.push(rc)
  }

  if (!oldData || !oldData['semantic-tokens'] || !newData || !newData['semantic-tokens']) {
    console.log('\x1b[33;1m', 'pixso semantic-tokens - SKIP (no old/new data)')
  } else {
    const oldThemes = getPixsoSemanticTokens(oldData)
    const newThemes = getPixsoSemanticTokens(newData)
    const rc = checkPixsoSemanticStructureChange(oldThemes, newThemes)
    console.log(rc ? '\x1b[31;1m' : '\x1b[32;1m', `pixso semantic-tokens - ${rc ? 'FAIL' : 'OK'}`)
    results.push(rc)
  }

  if (!oldData || !oldData['product-tokens'] || !newData || !newData['product-tokens']) {
    console.log('\x1b[33;1m', 'pixso product-tokens - SKIP (no old/new data)')
  } else {
    const oldProd = flattenAliasTokens(getPixsoProductAliasTokens(oldData))
    const newProd = flattenAliasTokens(getPixsoProductAliasTokens(newData))
    const rc = checkMapKeysChange(oldProd, newProd)
    console.log(rc ? '\x1b[31;1m' : '\x1b[32;1m', `pixso product-tokens - ${rc ? 'FAIL' : 'OK'}`)
    results.push(rc)
  }

  if (!oldData || !oldData['widget-tokens'] || !newData || !newData['widget-tokens']) {
    console.log('\x1b[33;1m', 'pixso widget-tokens - SKIP (no old/new data)')
  } else {
    const oldWidget = flattenAliasTokens(getPixsoWidgetAliasTokens(oldData))
    const newWidget = flattenAliasTokens(getPixsoWidgetAliasTokens(newData))
    const rc = checkMapKeysChange(oldWidget, newWidget)
    console.log(rc ? '\x1b[31;1m' : '\x1b[32;1m', `pixso widget-tokens - ${rc ? 'FAIL' : 'OK'}`)
    results.push(rc)
  }

  return results.some(Boolean)
}

// Merge tokens
function parseCssBlocks (content) {
  const blockRegex = /([^{]+)\{([^}]*)\}/g
  const blocks = []
  let match

  while ((match = blockRegex.exec(content)) !== null) {
    const rawSelector = match[1]
    const body = match[2]

    const selector = rawSelector
      .trim()
      .replace(/\s*\n\s*/g, '\n')
      .replace(/[ \t]+/g, ' ')

    const declarations = []
    const lines = body.split('\n')

    lines.forEach((rawLine) => {
      const line = rawLine.trim()
      if (!line) return

      const declMatch = /^(--[A-Za-z0-9\-_]+)\s*:\s*([^;]+);/.exec(line)
      if (!declMatch) return

      const name = declMatch[1]
      const value = declMatch[2].trim()
      declarations.push({ name, value })
    })

    blocks.push({
      selector,
      declarations
    })
  }

  return blocks
}

function mergeCssBodies (baseContent, pixsoContent) {
  const baseBlocks = parseCssBlocks(baseContent)
  const pixsoBlocks = parseCssBlocks(pixsoContent)

  const baseBySelector = {}
  const selectorOrder = []

  baseBlocks.forEach(({ selector, declarations }) => {
    if (!baseBySelector[selector]) {
      baseBySelector[selector] = { decls: [], names: new Set() }
      selectorOrder.push(selector)
    }
    const entry = baseBySelector[selector]
    declarations.forEach(({ name, value }) => {
      entry.decls.push({ name, value })
      entry.names.add(name)
    })
  })

  const pixsoBySelector = {}
  pixsoBlocks.forEach(({ selector, declarations }) => {
    if (!pixsoBySelector[selector]) {
      pixsoBySelector[selector] = { order: [], values: {} }
    }
    const entry = pixsoBySelector[selector]
    declarations.forEach(({ name, value }) => {
      if (!Object.prototype.hasOwnProperty.call(entry.values, name)) {
        entry.order.push(name)
      }
      entry.values[name] = value
    })
  })

  const blocksParts = []

  selectorOrder.forEach((selector) => {
    const baseEntry = baseBySelector[selector]
    const pixsoEntry = pixsoBySelector[selector] || { order: [], values: {} }

    const usedPixso = new Set()

    const normalLines = []
    const deprecatedLines = []

    const pushLine = (name, value) => {
      const isComponentToken = COMPONENTS.some((component) => {
        const prefix = `--${component}`
        if (!name.startsWith(prefix)) return false

        const tail = name.slice(prefix.length)
        if (tail === '') return true
        return tail.startsWith('--') || tail.startsWith('_')
      })

      const line = `  ${name}: ${value};`

      if (isComponentToken) {
        deprecatedLines.push(line)
      } else {
        normalLines.push(line)
      }
    }

    baseEntry.decls.forEach(({ name, value: baseValue }) => {
      const hasPixso = Object.prototype.hasOwnProperty.call(pixsoEntry.values, name)
      const finalValue = hasPixso ? pixsoEntry.values[name] : baseValue
      if (hasPixso) usedPixso.add(name)
      pushLine(name, finalValue)
    })

    pixsoEntry.order.forEach((name) => {
      if (usedPixso.has(name) || baseEntry.names.has(name)) return
      const value = pixsoEntry.values[name]
      pushLine(name, value)
    })

    let lines = normalLines
    if (deprecatedLines.length) {
      lines = [
        ...normalLines,
        '',
        '  /* @deprecated component tokens */',
        ...deprecatedLines
      ]
    }

    blocksParts.push(
      `${selector} {\n${lines.join('\n')}\n}`
    )
  })

  const firstBraceIndex = baseContent.indexOf('{')
  let header = ''

  if (firstBraceIndex >= 0) {
    const beforeFirstBrace = baseContent.slice(0, firstBraceIndex)
    const lastNewlineIndex = beforeFirstBrace.lastIndexOf('\n')

    const headerPart =
      lastNewlineIndex >= 0
        ? beforeFirstBrace.slice(0, lastNewlineIndex)
        : beforeFirstBrace

    header = headerPart.trimEnd() + '\n\n'
  }

  return `${header}${blocksParts.join('\n\n')}\n`
}

module.exports = {
  checkPixsoTokensChange,
  getPixsoTokensCSSVarsString,
  mergeCssBodies
}
