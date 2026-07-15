// "--🟢 red/red_500" -> "red/red_500"
const removePixsoTokenPrefix = (rawName) => {
  if (typeof rawName !== 'string') return ''
  return rawName
    .replace(/^--🟢\s*/, '')
    .replace(/^--/, '')
}

// "red/red_500" -> "--red--red_500"
const normalizePixsoTokenNameToCssVar = (rawName) => {
  if (typeof rawName !== 'string') return rawName

  const cleanName = removePixsoTokenPrefix(rawName)
    .split('/')
    .map(part => part.trim().toLowerCase().replace(/\s+/g, '_'))
    .join('--')

  return `--${cleanName}`
}

// "--🟢 red/red_500" -> ["red", "red_500"]
const normalizePixsoTokenNameToJsPathParts = (rawName) => {
  if (typeof rawName !== 'string') return []

  return removePixsoTokenPrefix(rawName)
    .split('/')
    .map(p => String(p).trim().replace(/\s+/g, '_'))
    .filter(Boolean)
}

// "--🟢 red/red_500" -> "--color--red_500"
const normalizePaletteVarNameToColorVar = (rawName) => {
  if (typeof rawName !== 'string') return null

  const name = rawName.trim()
  if (name.startsWith('--color--')) return name

  const cleaned = name.replace(/^--/, '')

  if (cleaned.includes('/')) {
    const tokenName = cleaned.split('/').pop()
    return tokenName ? getCSSVarName(tokenName) : null
  }

  const parts = cleaned.split('--').filter(Boolean)
  if (parts.length === 2) {
    const tokenName = parts[1]
    return tokenName ? getCSSVarName(tokenName) : null
  }

  return null
}

// "var(--🟢 red/red_500)" -> "var(--color--red_500)" (palette) / "var(--text--primary)" -> "var(--text--primary)" (alias)
const createValueNormalizer = (nonPaletteReferenceVars) => (value) => {
  if (typeof value !== 'string') return value

  return value.replace(/var\((--[^)]+)\)/g, (_, rawName) => {
    const cssVar = normalizePixsoTokenNameToCssVar(rawName)

    if (cssVar && nonPaletteReferenceVars.has(cssVar)) {
      return `var(${cssVar})`
    }

    const colorVar = normalizePaletteVarNameToColorVar(rawName)
    if (colorVar) return `var(${colorVar})`

    return `var(${cssVar})`
  })
}

const normalizeModeKey = (rawName, modeName, rawValue, ctx) => {
  if (typeof rawName !== 'string') {
    return [rawName, rawValue]
  }

  const cleanName = removePixsoTokenPrefix(rawName)
    .split('/')
    .map(part => part.trim().toLowerCase().replace(/\s+/g, '-'))
    .join('-')

  const modeSuffix = normalizePixsoTokenNameToCssVar(modeName)
  const cssName = `--${cleanName}${modeSuffix}`

  let cssValue = rawValue
  if (typeof rawValue === 'string' && rawValue.includes('var(')) {
    cssValue = ctx.normalizeValue(rawValue)
  } else if (typeof rawValue === 'number') {
    cssValue = `${rawValue}px`
  }

  return [cssName, cssValue]
}

const rgbaToHex = (rgbaString) => {
  if (typeof rgbaString !== 'string') return rgbaString

  const toHex2 = (n) => n.toString(16).padStart(2, '0').toUpperCase()

  const str = rgbaString.trim()
  const match = str.match(/rgba?\(([^)]+)\)/i)
  if (!match) return rgbaString

  const [rRaw, gRaw, bRaw, aRaw] = match[1]
    .split(',')
    .map((v) => String(v).trim())
    .filter(Boolean)

  const rgbHex = [rRaw, gRaw, bRaw]
    .map(v => Math.round(parseFloat(v)))
    .map(toHex2)
    .join('')

  if (typeof aRaw === 'undefined') return `#${rgbHex}`

  const aNum = parseFloat(aRaw)
  const aInt = Math.round(aNum * 255)

  return `#${rgbHex}${toHex2(aInt)}`
}

const detectThemeKey = (modeName, hasLight, hasDark) => {
  const n = String(modeName || '').toLowerCase()
  if (n.includes('dark')) return 'dark'
  if (n.includes('light')) return 'light'
  if (!hasLight) return 'light'
  if (!hasDark) return 'dark'
  return 'light'
}

const getCSSVarName = (colorName) => `--color--${colorName}`

const THEME_SELECTORS = {
  light: ':root,\n.theme-light,\n.hexa-ui-light-theme',
  dark: '.theme-dark,\n.hexa-ui-dark-theme'
}

module.exports = {
  createValueNormalizer,
  detectThemeKey,
  getCSSVarName,
  normalizeModeKey,
  normalizePixsoTokenNameToCssVar,
  normalizePixsoTokenNameToJsPathParts,
  rgbaToHex,
  THEME_SELECTORS
}
