const { COMPONENTS, PIXSO_DATA, PIXSO_OLD_DATA } = require('../../constants')

const {
  getPixsoProductAliasTokens,
  getPixsoSemanticTokens,
  getPixsoStaticPalette,
  getPixsoWidgetAliasTokens
} = require('./tokensCss')

const flattenAliasTokens = (map) => ({
  ...(map?.light || {}),
  ...(map?.dark || {})
})

const RED_BOLD = '\x1b[31;1m'
const RED = '\x1b[31m'
const GREEN_BOLD = '\x1b[32;1m'
const BLUE = '\x1b[34m'
const BLUE_BOLD = '\x1b[34;1m'
const RESET = '\x1b[0m'

const getMissingKeys = (oldMap, newMap, normalizeKey = (x) => x) => {
  const oldKeys = Object.keys(oldMap || {}).map(normalizeKey)
  const newSet = new Set(Object.keys(newMap || {}).map(normalizeKey))
  return oldKeys.filter(k => !newSet.has(k)).sort()
}

const getSemanticMissingKeys = (oldThemes, newThemes) => {
  const oldNames = Object.keys(oldThemes || {})
  const newNameSet = new Set(Object.keys(newThemes || {}))
  const missingThemes = oldNames.filter(name => !newNameSet.has(name))
  if (missingThemes.length > 0) {
    return { all: missingThemes, themes: {} }
  }

  const themeMissing = {}
  let hasAnyMissing = false

  oldNames.forEach(name => {
    const oldTokens = oldThemes[name] || {}
    const newTokens = newThemes[name] || {}
    const missing = getMissingKeys(oldTokens, newTokens)
    if (missing.length > 0) {
      themeMissing[name] = missing
      hasAnyMissing = true
    }
  })

  return { all: hasAnyMissing ? [] : [], themes: themeMissing }
}

const getSemanticNewKeys = (oldThemes, newThemes) => {
  const newNames = Object.keys(newThemes || {})
  const themeNew = {}

  newNames.forEach(name => {
    const oldTokens = oldThemes[name] || {}
    const newTokens = newThemes[name] || {}
    const newKeys = getMissingKeys(newTokens, oldTokens)

    if (newKeys.length > 0) {
      themeNew[name] = newKeys
    }
  })

  return { all: [], themes: themeNew }
}

const checkPixsoTokensChange = ({ dataSwapped = false } = {}) => {
  const oldData = dataSwapped ? PIXSO_OLD_DATA : PIXSO_DATA
  const newData = dataSwapped ? PIXSO_DATA : PIXSO_OLD_DATA

  const results = []

  const hasTokensInReport = (tokensReport) => {
    if (Array.isArray(tokensReport)) return tokensReport.length > 0

    if (!tokensReport || typeof tokensReport !== 'object') return false

    return tokensReport.all.length > 0 || Object.keys(tokensReport.themes).length > 0
  }

  const colorize = (text, color = '') => color ? `${color}${text}${RESET}` : text

  const printTokens = (title, tokensReport, color = '') => {
    console.log(colorize(title, color))

    if (Array.isArray(tokensReport)) {
      tokensReport.forEach(key => console.log(colorize(key, color)))
      return
    }

    if (tokensReport.all.length > 0) {
      console.log(colorize('n/a', color))
      return
    }

    Object.entries(tokensReport.themes).forEach(([theme, keys]) => {
      console.log(colorize(`${theme} (${keys.length}):`, color))
      keys.forEach(key => console.log(colorize(key, color)))
    })
  }

  const run = (label, shouldSkip, checkFn, getMissingKeysFn, getNewKeysFn) => {
    if (shouldSkip) {
      console.log(`${BLUE_BOLD}${label} - SKIP (no old/new data)${RESET}`)
      printTokens('Lost tokens:', { all: ['n/a'], themes: {} }, RED)
      printTokens('New Tokens:', { all: ['n/a'], themes: {} }, BLUE)
      console.log('')
      return
    }

    const rc = checkFn()
    console.log(`${rc ? RED_BOLD : GREEN_BOLD}> ${label} - ${rc ? 'FAIL' : 'OK'}${RESET}`)

    if (getMissingKeysFn) {
      const missingReport = getMissingKeysFn()

      if (hasTokensInReport(missingReport)) {
        printTokens('Lost tokens:', missingReport, RED)
      }
    }

    if (getNewKeysFn) {
      const newReport = getNewKeysFn()

      if (hasTokensInReport(newReport)) {
        printTokens('New Tokens:', newReport, BLUE)
      }
    }

    console.log('')
    results.push(rc)
  }

  const hasMissingKeys = (oldMap, newMap, normalizeKey = (x) => x) => {
    const oldKeys = Object.keys(oldMap || {}).map(normalizeKey)
    const newSet = new Set(Object.keys(newMap || {}).map(normalizeKey))
    return oldKeys.some(k => !newSet.has(k))
  }

  const hasSemanticMissing = (oldThemes, newThemes) => {
    const oldNames = Object.keys(oldThemes || {})
    const newNameSet = new Set(Object.keys(newThemes || {}))

    if (oldNames.some(name => !newNameSet.has(name))) return true

    return oldNames.some(name => {
      const oldTokens = oldThemes[name] || {}
      const newTokens = newThemes[name] || {}
      return hasMissingKeys(oldTokens, newTokens)
    })
  }

  run(
    'pixso static-tokens',
    !oldData || !oldData['static-tokens'] || !newData || !newData['static-tokens'],
    () => hasMissingKeys(getPixsoStaticPalette(oldData), getPixsoStaticPalette(newData)),
    () => getMissingKeys(getPixsoStaticPalette(oldData), getPixsoStaticPalette(newData)),
    () => getMissingKeys(getPixsoStaticPalette(newData), getPixsoStaticPalette(oldData))
  )

  run(
    'pixso semantic-tokens',
    !oldData || !oldData['semantic-tokens'] || !newData || !newData['semantic-tokens'],
    () => hasSemanticMissing(getPixsoSemanticTokens(oldData), getPixsoSemanticTokens(newData)),
    () => getSemanticMissingKeys(getPixsoSemanticTokens(oldData), getPixsoSemanticTokens(newData)),
    () => getSemanticNewKeys(getPixsoSemanticTokens(oldData), getPixsoSemanticTokens(newData))
  )

  run(
    'pixso product-tokens',
    !oldData || !oldData['product-tokens'] || !newData || !newData['product-tokens'],
    () => hasMissingKeys(
      flattenAliasTokens(getPixsoProductAliasTokens(oldData)),
      flattenAliasTokens(getPixsoProductAliasTokens(newData))
    ),
    () => getMissingKeys(
      flattenAliasTokens(getPixsoProductAliasTokens(oldData)),
      flattenAliasTokens(getPixsoProductAliasTokens(newData))
    ),
    () => getMissingKeys(
      flattenAliasTokens(getPixsoProductAliasTokens(newData)),
      flattenAliasTokens(getPixsoProductAliasTokens(oldData))
    )
  )

  run(
    'pixso widget-tokens',
    !oldData || !oldData['widget-tokens'] || !newData || !newData['widget-tokens'],
    () => hasMissingKeys(
      flattenAliasTokens(getPixsoWidgetAliasTokens(oldData)),
      flattenAliasTokens(getPixsoWidgetAliasTokens(newData))
    ),
    () => getMissingKeys(
      flattenAliasTokens(getPixsoWidgetAliasTokens(oldData)),
      flattenAliasTokens(getPixsoWidgetAliasTokens(newData))
    ),
    () => getMissingKeys(
      flattenAliasTokens(getPixsoWidgetAliasTokens(newData)),
      flattenAliasTokens(getPixsoWidgetAliasTokens(oldData))
    )
  )

  return results.some(Boolean)
}

function parseCssBlocks (content) {
  const blockRegex = /([^{]+)\{([^}]*)\}/g
  const blocks = []
  let match

  while ((match = blockRegex.exec(content)) !== null) {
    const rawSelector = match[1]
    const body = match[2]

    let selector = rawSelector
      .trim()
      .replace(/\s*\n\s*/g, '\n')
      .replace(/[ \t]+/g, ' ')

    const selectorLines = selector
      .split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('/*') && !l.startsWith('*') && !l.startsWith('*/'))

    selector = selectorLines.join('\n')

    const declarations = []
    const lines = body.split('\n')

    lines.forEach(rawLine => {
      const line = rawLine.trim()
      if (!line) return

      const declMatch = /^(--[A-Za-z0-9\-_]+)\s*:\s*([^;]+);/.exec(line)
      if (!declMatch) return

      declarations.push({ name: declMatch[1], value: declMatch[2].trim() })
    })

    blocks.push({ selector, declarations })
  }

  return blocks
}

function mergeCssBodies (baseContent, pixsoContent) {
  const baseBlocks = parseCssBlocks(baseContent)
  const pixsoBlocks = parseCssBlocks(pixsoContent)

  const normalizeRootSelector = (selector) => {
    const s = String(selector || '').trim()
    if (s === ':root') return ':root'
    return s
  }

  const isDarkSelector = (selector) => {
    const s = normalizeRootSelector(selector)
    return s.includes('.theme-dark') || s.includes('.hexa-ui-dark-theme')
  }

  const pickPreferredSelector = (selectors, predicate, preferredPart) => {
    const matched = selectors.filter(predicate)

    if (!matched.length) return ''
    const preferred = matched.find(selector => selector.includes(preferredPart))
    return preferred || matched[0]
  }

  const baseBySelector = {}
  const selectorOrder = []

  baseBlocks.forEach(({ selector, declarations }) => {
    const normalizedSelector = normalizeRootSelector(selector)

    if (!baseBySelector[normalizedSelector]) {
      baseBySelector[normalizedSelector] = { decls: [], names: new Set() }
      selectorOrder.push(normalizedSelector)
    }

    const entry = baseBySelector[normalizedSelector]
    declarations.forEach(({ name, value }) => {
      entry.decls.push({ name, value })
      entry.names.add(name)
    })
  })

  const pixsoBySelector = {}
  const pixsoSelectorOrder = []

  pixsoBlocks.forEach(({ selector, declarations }) => {
    const normalizedSelector = normalizeRootSelector(selector)

    if (!pixsoBySelector[normalizedSelector]) {
      pixsoBySelector[normalizedSelector] = { order: [], values: {} }
      pixsoSelectorOrder.push(normalizedSelector)
    }

    const entry = pixsoBySelector[normalizedSelector]
    declarations.forEach(({ name, value }) => {
      if (!Object.prototype.hasOwnProperty.call(entry.values, name)) {
        entry.order.push(name)
      }
      entry.values[name] = value
    })
  })

  const mergedSelectorOrder = [...selectorOrder]
  pixsoSelectorOrder.forEach(sel => {
    if (!baseBySelector[sel]) mergedSelectorOrder.push(sel)
  })

  const deprecatedLightSelector = ':root'
  const deprecatedDarkSelector =
    pickPreferredSelector(mergedSelectorOrder, isDarkSelector, '.hexa-ui-dark-theme') ||
    pickPreferredSelector(selectorOrder, isDarkSelector, '.hexa-ui-dark-theme') ||
    '.theme-dark'

  const blocksPartsAll = []
  const blocksPartsSupported = []
  const blockPartsDeprecated = []

  const deprecatedLightLines = []
  const deprecatedDarkLines = []

  mergedSelectorOrder.forEach(selector => {
    const baseEntry = baseBySelector[selector] || { decls: [], names: new Set() }
    const pixsoEntry = pixsoBySelector[selector] || { order: [], values: {} }

    const normalLines = []
    const deprecatedDeltaLines = []

    const pushNormalLine = (name, value) => {
      normalLines.push(`  ${name}: ${value};`)
    }

    const pushDeprecatedLine = (name, value, isDelta = false) => {
      const line = `  ${name}: ${value};`

      if (isDarkSelector(selector)) deprecatedDarkLines.push(line)
      else deprecatedLightLines.push(line)

      if (isDelta) {
        deprecatedDeltaLines.push(line)
      }
    }

    baseEntry.decls.forEach(({ name, value: baseValue }) => {
      const hasPixso = Object.prototype.hasOwnProperty.call(pixsoEntry.values, name)

      if (hasPixso) {
        pushNormalLine(name, pixsoEntry.values[name])
      } else {
        pushDeprecatedLine(name, baseValue, true)
      }
    })

    pixsoEntry.order.forEach(name => {
      if (baseEntry.names.has(name)) return
      pushNormalLine(name, pixsoEntry.values[name])
    })

    if (normalLines.length) {
      const block = `${selector} {\n${normalLines.join('\n')}\n}`
      blocksPartsAll.push(block)
      blocksPartsSupported.push(block)
    }

    if (deprecatedDeltaLines.length) {
      blockPartsDeprecated.push(`${selector} {\n${deprecatedDeltaLines.join('\n')}\n}`)
    }
  })

  if (deprecatedLightLines.length || deprecatedDarkLines.length) {
    const deprecatedBlocks = ['/* @deprecated tokens start */']

    if (deprecatedLightLines.length) {
      deprecatedBlocks.push(`${deprecatedLightSelector} {\n${deprecatedLightLines.join('\n')}\n}`)
    }

    if (deprecatedDarkLines.length) {
      deprecatedBlocks.push(`${deprecatedDarkSelector} {\n${deprecatedDarkLines.join('\n')}\n}`)
    }

    deprecatedBlocks.push('/* @deprecated tokens end */')

    blocksPartsAll.unshift(...deprecatedBlocks)
  }

  const firstBraceIndex = baseContent.indexOf('{')
  let header = ''

  if (firstBraceIndex >= 0) {
    const bannerMatch = baseContent.match(/^\s*(?:\/\*![\s\S]*?\*\/\s*)+/)
    header = bannerMatch ? bannerMatch[0].trimEnd() + '\n\n' : ''
  }

  return [
    blocksPartsAll,
    blocksPartsSupported,
    blockPartsDeprecated
  ].map(x => `${header}${x.join('\n\n')}\n`)
}

module.exports = {
  checkPixsoTokensChange,
  mergeCssBodies
}
