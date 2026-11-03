const { MEDIA, PIXSO_FILES } = require('./constants')
const fs = require('fs')
const path = require('path')

const PIXSO_DIR = path.resolve(__dirname, 'pixso')
const TOKENS_CSS = path.resolve(__dirname, 'tokens/tokens.css')
const TOKENS_TS = path.resolve(__dirname, 'tokens/tokens.ts')

const GEOMETRY_PREFIX = 'geometry'
// base palette that other palettes reference
const PALETTE_COLLECTION = 'staticColors'
// tokens that should be without `px`
const UNITLESS_TOKENS = ['font_weight']

const SELECTORS = {
  root: ':root',
  light: ':root,\n.theme-light,\n.hexa-ui-light-theme',
  dark: '.theme-dark,\n.hexa-ui-dark-theme'
}

const BANNER = '/*! This file was created automatically. */\n/*! Use `npm run update-colors` if you need to update colors. */\n'
const DEPRECATED_START = '/* @deprecated tokens start */'
const DEPRECATED_END = '/* @deprecated tokens end */'
const TS_VARS = { supported: 'cssVarString', deprecated: 'cssVarDeprecatedString' }

// 'Section message' -> 'section_message'
const normalizeSegment = (segment) => segment.trim().replace(/\s+/g, '_')

// '--Button-extraLarge-padding-x' -> ['button', 'extralarge', 'padding', 'x']
const toSegments = (name) => name.replace(/^--/, '').split('-').filter(Boolean).map(normalizeSegment)

// '--fg--neutral--primary' и '--fg-neutral-primary' -> 'fg-neutral-primary'
const nameKey = (name) => toSegments(name).join('-').toLowerCase()

const modeKey = (mode) => normalizeSegment(mode).toLowerCase()

// '--gap-closest' -> '--geometry--gap--closest'
// '--neutral-neutral_0' -> '--color--neutral_0'
const toCssName = (pixsoName, { palette = false, prefix = '' } = {}) => {
  const segments = toSegments(pixsoName)
  if (palette) return `--color--${segments[segments.length - 1]}`
  return `--${[prefix, ...segments].filter(Boolean).join('--')}`
}

const rgbaToHex = (value) => {
  const [r, g, b, a] = value.match(/rgba?\(([^)]+)\)/)[1].split(',').map(Number)
  const hex = (channel) => Math.round(channel).toString(16).padStart(2, '0').toUpperCase()
  return `#${hex(r)}${hex(g)}${hex(b)}${a === undefined ? '' : hex(a * 255)}`
}

const isUnitless = (name) => UNITLESS_TOKENS.some((part) => name.includes(part))

const convertValue = (name, value, resolveReference) => {
  if (/^rgba?\(/.test(value)) return rgbaToHex(value)
  if (/^-?\d+(\.\d+)?$/.test(value)) return isUnitless(name) ? value : `${value}px`
  return value.replace(/var\((--[^)]+)\)/g, (match, reference) => `var(${resolveReference(reference)})`)
}

// 'tablet' -> '@media (min-width: 768px) and (max-width: 1023px)'
const mediaOf = (mode) => `@media ${MEDIA[mode]}`

const stripComments = (text) => text.replace(/\/\*[\s\S]*?\*\//g, '')

const parseDecls = (body) => Array.from(body.matchAll(/(--[^:]+?)\s*:\s*([^;]+);/g), ([, name, value]) => ({
  name: name.trim(),
  value: value.trim()
}))

const parseBlocks = (css) => {
  const blocks = []
  const open = []

  for (const match of css.matchAll(/([^{}]+)\{|\}/g)) {
    if (match[1] !== undefined) {
      open.push({ selector: stripComments(match[1]).trim(), start: match.index + match[0].length })
      continue
    }
    if (!open.length) continue
    const { selector, start } = open.pop()
    if (selector.startsWith('@media')) continue
    const media = open.length ? open[open.length - 1].selector : null
    blocks.push({ selector, media, decls: parseDecls(css.slice(start, match.index)) })
  }

  return blocks
}

const renderBlock = ({ selector, media, decls }) => {
  const rule = `${selector} {\n${decls.map(({ name, value }) => `  ${name}: ${value};`).join('\n')}\n}`
  return media ? `${media} {\n${rule.replace(/^/gm, '  ')}\n}` : rule
}

const renderBlocks = (blocks) => blocks.filter(({ decls }) => decls.length).map(renderBlock).join('\n\n')

const blockTheme = (selector) => (selector.includes('dark') ? 'dark' : 'light')
const blockKind = (selector) => (selector === SELECTORS.root ? 'root' : blockTheme(selector))

/* tokens.css */
const parseTokensCss = (text) => {
  const [head, rest = ''] = text.split(DEPRECATED_START)
  const [deprecated, supported] = rest ? rest.split(DEPRECATED_END) : ['', head]
  return { deprecated: parseBlocks(deprecated), supported: parseBlocks(supported) }
}

const renderTokensCss = ({ deprecated, supported }) => {
  const deprecatedPart = deprecated.length
    ? `${DEPRECATED_START}\n\n${renderBlocks(deprecated)}\n\n${DEPRECATED_END}\n\n`
    : ''
  return `${BANNER}\n${deprecatedPart}${renderBlocks(supported)}\n`
}

/* tokens.ts */
const parseTokensTs = (text) => {
  const section = (variable) => parseBlocks((text.match(new RegExp(`${variable} = \`([^\`]*)\``)) || [])[1] || '')
  return { deprecated: section(TS_VARS.deprecated), supported: section(TS_VARS.supported) }
}

const renderTokensTs = ({ deprecated, supported }) =>
  `${BANNER}\nexport const ${TS_VARS.supported} = \`\n${renderBlocks(supported)}\n\`\n\n` +
  `export const ${TS_VARS.deprecated} = \`\n${renderBlocks(deprecated)}\n\`\n`

const themeOf = (mode) => (/dark/i.test(mode) ? 'dark' : /light/i.test(mode) ? 'light' : null)

const parsePixsoSelector = (selector) => {
  const [, collection = null, mode = null] = selector.match(/^:root\[(.+?)="(.+?)"\]$/) || []
  return { collection, mode }
}

const isMediaMode = (mode) => Boolean(mode) && modeKey(mode) in MEDIA

const prepareBlock = (block, blocks) => {
  const namesOf = ({ decls }) => decls.map(({ name }) => name).sort().join()
  const sibling = blocks.find((other) => other.mode && namesOf(other) === namesOf(block))
  if (!sibling) return block
  const theme = themeOf(sibling.mode)
  const mode = theme ? (theme === 'dark' ? 'Light' : 'Dark') : 'Desktop'
  return { ...block, collection: sibling.collection, mode }
}

const targetOf = ({ collection, mode }, geometry) => {
  if (collection === PALETTE_COLLECTION) return { kind: 'root', media: null, palette: true }
  const theme = mode && themeOf(mode)
  if (theme) return { kind: theme, media: null }
  return {
    kind: 'root',
    media: isMediaMode(mode) ? mediaOf(modeKey(mode)) : null,
    prefix: geometry ? GEOMETRY_PREFIX : ''
  }
}

const readPixsoTokens = (css) => {
  const parsed = parseBlocks(css).map((block) => ({ ...block, ...parsePixsoSelector(block.selector) }))
  const blocks = parsed.map((block) => (block.mode ? block : prepareBlock(block, parsed)))
  const geometryCollections = new Set(blocks.filter(({ mode }) => isMediaMode(mode)).map(({ collection }) => collection))

  return blocks
    .flatMap((block) => {
      const target = targetOf(block, geometryCollections.has(block.collection))
      return block.decls.map(({ name, value }) => ({
        source: name,
        name: toCssName(name, target),
        value,
        kind: target.kind,
        media: target.media
      }))
    })
}

const describeToken = ({ name, media }) => (media ? `${name} ${media}` : name)

const assertNoConflicts = (tokens) => {
  const seen = new Map()
  const conflicts = tokens.filter((token) => {
    const key = `${token.kind} ${token.media} ${token.name}`
    const conflict = seen.has(key) && seen.get(key) !== token.value
    seen.set(key, token.value)
    return conflict
  })
  if (conflicts.length) {
    throw new Error(
      `Different values of the same token are included in :root: ${conflicts.map(describeToken).join(', ')}`
    )
  }
}

const allDecls = ({ deprecated, supported }) =>
  [...deprecated, ...supported].flatMap((block) => block.decls.map((decl) => ({ block, decl })))

const createReferenceResolver = (doc, tokens, warnings) => {
  const byKey = new Map()
  const names = new Set()
  const register = (key, name) => {
    if (!byKey.has(key)) byKey.set(key, name)
    names.add(name)
  }

  allDecls(doc).forEach(({ decl }) => register(nameKey(decl.name), decl.name))
  tokens.forEach(({ source, name }) => {
    register(nameKey(name), name)
    register(nameKey(source), name)
  })

  return (reference) => {
    const known = byKey.get(nameKey(reference))
    if (known) return known
    const paletteName = toCssName(reference, { palette: true })
    if (names.has(paletteName)) return paletteName
    warnings.add(`неизвестная ссылка var(${reference})`)
    return toCssName(reference)
  }
}

const addDecl = (doc, { kind, media }, decl) => {
  let block = doc.supported.find((other) => other.media === media && blockKind(other.selector) === kind)
  if (!block) {
    block = { selector: SELECTORS[kind], media, decls: [] }
    doc.supported.push(block)
  }
  block.decls.push(decl)
  return block
}

const applyTokens = (doc, tokens) => {
  const report = { updated: [], added: [], unchanged: 0, warnings: new Set() }
  const resolveReference = createReferenceResolver(doc, tokens, report.warnings)

  const existing = new Map()
  const index = (entry) => {
    const key = nameKey(entry.decl.name)
    existing.set(key, [...(existing.get(key) || []), entry])
  }
  allDecls(doc).forEach(index)

  tokens.forEach((token) => {
    const { name, value, kind, media } = token
    const nextValue = convertValue(name, value, resolveReference)
    const matches = (existing.get(nameKey(name)) || [])
      .filter(({ block }) => block.media === media && (kind === 'root' || blockTheme(block.selector) === kind))

    if (!matches.length) {
      const decl = { name, value: nextValue }
      index({ block: addDecl(doc, token, decl), decl })
      report.added.push(describeToken(token))
      return
    }

    matches.forEach(({ decl }) => {
      if (decl.value === nextValue) {
        report.unchanged += 1
        return
      }
      report.updated.push(`${describeToken({ name: decl.name, media })}: ${decl.value} -> ${nextValue}`)
      decl.value = nextValue
    })
  })

  return report
}

const readPixsoDir = (dir = PIXSO_DIR) => {
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((file) => file.endsWith('.css')) : []
  const unknown = files.filter((file) => !PIXSO_FILES.includes(file))

  if (unknown.length) {
    throw new Error(`Недопустимые файлы в ${dir}: ${unknown.join(', ')}. Допустимы только: ${PIXSO_FILES.join(', ')}`)
  }
  if (!files.length) throw new Error(`В ${dir} нет CSS-файлов из Pixso. Ожидаются: ${PIXSO_FILES.join(', ')}`)

  return PIXSO_FILES
    .filter((file) => files.includes(file))
    .map((file) => ({ file, tokens: readPixsoTokens(fs.readFileSync(path.join(dir, file), 'utf8')) }))
}

const updateFile = (file, parse, render, tokens, { check }) => {
  const text = fs.readFileSync(file, 'utf8')
  const eol = text.includes('\r\n') ? '\r\n' : '\n'
  const doc = parse(text.replace(/\r\n/g, '\n'))
  const report = applyTokens(doc, tokens)
  if (!check) fs.writeFileSync(file, render(doc).replace(/\n/g, eol))
  return report
}

const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const RED = '\x1b[31m'
const RESET = '\x1b[0m'

const printReport = (file, report, { verbose }) => {
  console.log(`${GREEN}${file}${RESET}: updated ${report.updated.length}, added ${report.added.length}, unchanged ${report.unchanged}`)
  if (!verbose) return
  report.updated.forEach((line) => console.log(`  ~ ${line}`))
  report.added.forEach((name) => console.log(`  + ${name}`))
}

const main = (argv = process.argv.slice(2)) => {
  const check = argv.includes('--check')
  const sources = readPixsoDir()
  const tokens = sources.flatMap((source) => source.tokens)
  assertNoConflicts(tokens)

  if (check) console.log(`${YELLOW}Check without updating tokens${RESET}`)
  sources.forEach(({ file, tokens }) => console.log(`${file}: ${tokens.length} tokens`))

  const cssReport = updateFile(TOKENS_CSS, parseTokensCss, renderTokensCss, tokens, { check })
  const tsReport = updateFile(TOKENS_TS, parseTokensTs, renderTokensTs, tokens, { check })
  printReport('tokens.css', cssReport, { verbose: true })
  printReport('tokens.ts', tsReport, { verbose: false })

  const warnings = new Set([...cssReport.warnings, ...tsReport.warnings])
  if (warnings.size) {
    console.log(`${YELLOW}Warnings:${RESET}`)
    warnings.forEach((warning) => console.log(`  ${warning}`))
  }
}

if (require.main === module) {
  try {
    main()
  } catch (error) {
    console.error(`${RED}${error.message}${RESET}`)
    process.exit(1)
  }
}

module.exports = {
  applyTokens,
  convertValue,
  nameKey,
  parseTokensCss,
  parseTokensTs,
  readPixsoDir,
  readPixsoTokens,
  renderTokensCss,
  renderTokensTs,
  rgbaToHex,
  toCssName,
  updateFile
}
