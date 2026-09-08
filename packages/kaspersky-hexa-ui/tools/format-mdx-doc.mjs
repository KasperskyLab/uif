import { readFile, realpath, stat, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, isAbsolute, relative, resolve } from 'node:path'

import fastGlob from 'fast-glob'
import prettier from 'prettier'

const PACKAGE_DIRECTORY = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DOCUMENTATION_DIRECTORY = resolve(PACKAGE_DIRECTORY, 'src')
const DOCUMENTATION_GLOB = 'src/**/*.documentation.mdx'
const SUPPORTED_FILE_ERROR = 'Only src/**/*.documentation.mdx files can be formatted'
const TARGET_ATTRIBUTES = new Set(['code', 'setupCode'])
const DESCRIPTION_ATTRIBUTE = 'description'
const REQUIRED_DOCUMENTATION_ELEMENTS = [
  ['DocPageLayout', /<DocPageLayout(?:\s|>)/],
  ['Tabs', /<Tabs(?:\s|>)/],
  ['DocExampleBlock', /<DocExampleBlock(?:\s|\/>|>)/]
]
const PRETTIER_OPTIONS = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  jsxSingleQuote: false,
  objectWrap: 'collapse',
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'consistent',
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false
}

const isInsideDirectory = (directory, file) => {
  const pathFromDirectory = relative(directory, file)
  return pathFromDirectory !== '' &&
    pathFromDirectory !== '..' &&
    !pathFromDirectory.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`) &&
    !isAbsolute(pathFromDirectory)
}

const unsupportedFileError = file => new Error(`${SUPPORTED_FILE_ERROR}: ${file}`)

const validateDocumentationFile = async file => {
  const resolvedFile = resolve(file)
  if (!resolvedFile.endsWith('.documentation.mdx') || !isInsideDirectory(DOCUMENTATION_DIRECTORY, resolvedFile)) {
    throw unsupportedFileError(file)
  }

  try {
    const [realDocumentationDirectory, realFile] = await Promise.all([
      realpath(DOCUMENTATION_DIRECTORY),
      realpath(resolvedFile)
    ])
    if (
      !realFile.endsWith('.documentation.mdx') ||
      !isInsideDirectory(realDocumentationDirectory, realFile) ||
      !(await stat(realFile)).isFile()
    ) {
      throw unsupportedFileError(file)
    }

    return realFile
  } catch {
    throw unsupportedFileError(file)
  }
}

const validateDocumentationStructure = (source, file) => {
  const missingElements = REQUIRED_DOCUMENTATION_ELEMENTS
    .filter(([, pattern]) => !pattern.test(source))
    .map(([name]) => name)

  if (missingElements.length > 0) {
    throw new SyntaxError(
      `Unsupported documentation structure in ${file}. Missing: ${missingElements.join(', ')}`
    )
  }
}

const isIdentifierCharacter = character => /[A-Za-z0-9_$-]/.test(character ?? '')

const skipWhitespace = (source, index) => {
  while (/\s/.test(source[index] ?? '')) index += 1
  return index
}

const readQuotedValue = (source, start) => {
  const quote = source[start]
  let index = start + 1
  let hasInterpolation = false

  while (index < source.length) {
    if (source[index] === '\\') {
      index += 2
      continue
    }

    if (quote === '`' && source[index] === '$' && source[index + 1] === '{') {
      hasInterpolation = true
    }

    if (source[index] === quote) {
      return { end: index + 1, hasInterpolation }
    }

    index += 1
  }

  throw new SyntaxError(`Unterminated ${quote} string literal`)
}

const readExpression = (source, start) => {
  let index = start
  let depth = 0

  while (index < source.length) {
    const character = source[index]

    if (character === "'" || character === '"' || character === '`') {
      index = readQuotedValue(source, index).end
      continue
    }

    if (character === '{') depth += 1
    if (character === '}') {
      depth -= 1
      if (depth === 0) return index + 1
    }

    index += 1
  }

  throw new SyntaxError('Unterminated JSX expression')
}

const readDocExampleTag = (source, start) => {
  let index = start
  let expressionDepth = 0

  while (index < source.length) {
    const character = source[index]

    if (character === "'" || character === '"' || character === '`') {
      index = readQuotedValue(source, index).end
      continue
    }

    if (character === '{') expressionDepth += 1
    if (character === '}') expressionDepth -= 1
    if (character === '>' && expressionDepth === 0) return index + 1

    index += 1
  }

  throw new SyntaxError('Unterminated DocExampleBlock tag')
}

const decodeEscapedText = text => {
  let value = ''

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index]
    if (character !== '\\') {
      value += character
      continue
    }

    const escaped = text[++index]
    if (escaped === undefined) throw new SyntaxError('Trailing backslash in string literal')

    const escapedCharacters = {
      b: '\b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t',
      v: '\v',
      0: '\0'
    }
    if (escaped in escapedCharacters) {
      value += escapedCharacters[escaped]
      continue
    }

    if (escaped === '\r') {
      if (text[index + 1] === '\n') index += 1
      continue
    }
    if (escaped === '\n') continue

    if (escaped === 'x') {
      const hex = text.slice(index + 1, index + 3)
      if (!/^[0-9a-f]{2}$/i.test(hex)) throw new SyntaxError('Invalid hexadecimal escape')
      value += String.fromCodePoint(Number.parseInt(hex, 16))
      index += 2
      continue
    }

    if (escaped === 'u') {
      const isCodePoint = text[index + 1] === '{'
      const closeIndex = isCodePoint ? text.indexOf('}', index + 2) : index + 4
      const hex = isCodePoint ? text.slice(index + 2, closeIndex) : text.slice(index + 1, closeIndex + 1)
      if (closeIndex === -1 || !/^[0-9a-f]{4,6}$/i.test(hex)) throw new SyntaxError('Invalid Unicode escape')
      value += String.fromCodePoint(Number.parseInt(hex, 16))
      index = closeIndex
      continue
    }

    value += escaped
  }

  return value
}

const decodeStaticValue = rawValue => {
  const expression = rawValue.startsWith('{') && rawValue.endsWith('}')
    ? rawValue.slice(1, -1).trim()
    : rawValue

  const quote = expression[0]
  if (!['"', "'", '`'].includes(quote)) return undefined

  const quoted = readQuotedValue(expression, 0)
  const suffix = expression.slice(quoted.end).trim()
  const isCommentOnly = suffix === '' || /^(?:\/\*[\s\S]*?\*\/|\/\/[^\n]*)$/.test(suffix)
  if (quoted.hasInterpolation || !isCommentOnly) return undefined

  return {
    suffix,
    value: decodeEscapedText(expression.slice(1, quoted.end - 1))
  }
}

const readAttribute = (source, start, tagEnd) => {
  let index = skipWhitespace(source, start)
  const nameStart = index
  while (isIdentifierCharacter(source[index])) index += 1

  if (index === nameStart) return { end: index + 1 }

  const name = source.slice(nameStart, index)
  index = skipWhitespace(source, index)
  if (source[index] !== '=') return { end: index }

  index = skipWhitespace(source, index + 1)
  const valueStart = index
  let valueEnd

  if (source[index] === '{') valueEnd = readExpression(source, index)
  else if (["'", '"'].includes(source[index])) valueEnd = readQuotedValue(source, index).end
  else return { end: index + 1, name, unsupported: TARGET_ATTRIBUTES.has(name) }

  if (valueEnd > tagEnd) throw new SyntaxError(`Attribute ${name} exceeds its JSX tag`)

  const rawValue = source.slice(valueStart, valueEnd)
  const decoded = decodeStaticValue(rawValue)
  return {
    end: valueEnd,
    name,
    start: nameStart,
    suffix: decoded?.suffix,
    valueStart,
    value: decoded?.value
  }
}

export const findDocExampleAttributes = source => {
  const attributes = { descriptions: [], static: [], unsupported: [] }
  let searchStart = 0

  while (searchStart < source.length) {
    const tagStart = source.indexOf('<DocExampleBlock', searchStart)
    if (tagStart === -1) break

    const nameEnd = tagStart + '<DocExampleBlock'.length
    if (isIdentifierCharacter(source[nameEnd])) {
      searchStart = nameEnd
      continue
    }

    const tagEnd = readDocExampleTag(source, nameEnd)
    let index = nameEnd
    while (index < tagEnd - 1) {
      const attribute = readAttribute(source, index, tagEnd)
      if (attribute.name && TARGET_ATTRIBUTES.has(attribute.name)) {
        if (attribute.value !== undefined) attributes.static.push({ ...attribute, end: attribute.end })
      }
      if (attribute.name === DESCRIPTION_ATTRIBUTE && attribute.value !== undefined) {
        attributes.descriptions.push(attribute)
      }
      index = Math.max(attribute.end, index + 1)
    }

    searchStart = tagEnd
  }

  return attributes
}

const readJsxTag = (source, start) => {
  let index = start + 1
  const closing = source[index] === '/'
  if (closing) index += 1

  const nameStart = index
  while (/[A-Za-z0-9_.:-]/.test(source[index] ?? '')) index += 1
  if (index === nameStart) return undefined

  const end = readDocExampleTag(source, index)
  return {
    closing,
    end,
    name: source.slice(nameStart, index),
    nameEnd: index,
    selfClosing: !closing && source.slice(start, end).trimEnd().endsWith('/>'),
    start
  }
}

const getIndentationAt = (source, index) => {
  const lineStart = source.lastIndexOf('\n', index) + 1
  return source.slice(lineStart, index).match(/^\s*/)?.[0] ?? ''
}

const getDocExampleLayouts = source => {
  const layouts = []
  const stack = []
  let index = 0

  while (index < source.length) {
    const start = source.indexOf('<', index)
    if (start === -1) break

    const tag = readJsxTag(source, start)
    if (!tag) {
      index = start + 1
      continue
    }

    if (tag.closing) {
      const matchingIndex = stack.map(entry => entry.name).lastIndexOf(tag.name)
      if (matchingIndex !== -1) stack.length = matchingIndex
    } else if (tag.name === 'DocExampleBlock') {
      layouts.push({
        ...tag,
        indent: stack.length > 0 ? `${stack.at(-1).indent}  ` : ''
      })
    } else if (!tag.selfClosing) {
      stack.push({ name: tag.name, indent: getIndentationAt(source, tag.start) })
    }

    index = tag.end
  }

  return layouts
}

const getValueRangesInTag = (source, tag) => {
  const ranges = []
  let index = tag.nameEnd

  while (index < tag.end - 1) {
    const attribute = readAttribute(source, index, tag.end)
    if (attribute.valueStart !== undefined) {
      ranges.push({ start: attribute.valueStart, end: attribute.end })
    }
    index = Math.max(attribute.end, index + 1)
  }

  return ranges
}

const addStructuralTagIndentation = (source, tag, depth, replacements) => {
  const valueRanges = tag.closing ? [] : getValueRangesInTag(source, tag)
  let lineStart = source.lastIndexOf('\n', tag.start) + 1

  while (lineStart < tag.end) {
    const lineEnd = source.indexOf('\n', lineStart)
    const nextLineStart = lineEnd === -1 ? tag.end : lineEnd + 1
    const effectiveLineEnd = lineEnd === -1 ? tag.end : lineEnd
    const contentStart = lineStart + (source.slice(lineStart, effectiveLineEnd).match(/^[\t ]*/)?.[0].length ?? 0)
    const content = source.slice(contentStart, effectiveLineEnd)
    const isInsideValue = valueRanges.some(range => contentStart >= range.start && contentStart < range.end)
    const closesTag = content === '/>' || content === '>'

    if (content && !isInsideValue) {
      replacements.push({
        start: lineStart,
        end: contentStart,
        value: '  '.repeat(closesTag ? depth : lineStart === source.lastIndexOf('\n', tag.start) + 1 ? depth : depth + 1)
      })
    }

    lineStart = nextLineStart
  }
}

export const normalizeStructuralJsxIndentation = source => {
  const replacements = []
  const stack = []
  let index = 0

  while (index < source.length) {
    const start = source.indexOf('<', index)
    if (start === -1) break

    const tag = readJsxTag(source, start)
    if (!tag) {
      index = start + 1
      continue
    }

    const lineStart = source.lastIndexOf('\n', tag.start) + 1
    const hasOnlyIndentationBeforeTag = /^[\t ]*$/.test(source.slice(lineStart, tag.start))

    if (tag.closing) {
      const matchingIndex = stack.map(entry => entry.name).lastIndexOf(tag.name)
      if (matchingIndex !== -1) {
        if (hasOnlyIndentationBeforeTag) {
          addStructuralTagIndentation(source, tag, matchingIndex, replacements)
        }
        stack.length = matchingIndex
      }
    } else {
      if (hasOnlyIndentationBeforeTag) {
        addStructuralTagIndentation(source, tag, stack.length, replacements)
      }
      if (!tag.selfClosing) stack.push({ name: tag.name })
    }

    index = tag.end
  }

  return applyReplacementsFromRight(source, replacements)
}

export const normalizeDocExampleBlockIndentation = source => {
  const replacements = getDocExampleLayouts(source).map(tag => {
    const lineStart = source.lastIndexOf('\n', tag.start) + 1
    const valueRanges = getValueRangesInTag(source, tag)
    let offset = lineStart
    const value = source.slice(lineStart, tag.end)
      .split('\n')
      .map((line, lineIndex) => {
        const isValueLine = valueRanges.some(range => offset >= range.start && offset < range.end)
        const trimmed = line.trimStart()
        const nextLine = isValueLine || trimmed === ''
          ? line
          : `${lineIndex === 0 || trimmed.startsWith('/>') ? tag.indent : `${tag.indent}  `}${trimmed}`
        offset += line.length + 1
        return nextLine
      })
      .join('\n')

    return { start: lineStart, end: tag.end, value }
  })

  return applyReplacementsFromRight(source, replacements)
}

const expandSingleLineDocExampleBlocksWithCode = source => {
  const replacements = getDocExampleLayouts(source).flatMap(tag => {
    const tagSource = source.slice(tag.start, tag.end)
    if (!tag.selfClosing || tagSource.includes('\n')) return []

    const attributes = []
    let index = tag.nameEnd
    while (index < tag.end - 1) {
      const attribute = readAttribute(source, index, tag.end)
      if (attribute.name) attributes.push({ ...attribute, text: source.slice(attribute.start, attribute.end) })
      index = Math.max(attribute.end, index + 1)
    }

    if (attributes.length < 2 || !attributes.some(attribute => TARGET_ATTRIBUTES.has(attribute.name))) return []

    const indent = getIndentationAt(source, tag.start)
    return [{
      start: tag.start,
      end: tag.end,
      value: `<DocExampleBlock\n${attributes.map(attribute => `${indent}  ${attribute.text}`).join('\n')}\n${indent}/>`
    }]
  })

  return applyReplacementsFromRight(source, replacements)
}

const separateTabsFromTheirFirstPane = source => {
  const replacements = []
  let index = 0

  while (index < source.length) {
    const start = source.indexOf('<', index)
    if (start === -1) break

    const tag = readJsxTag(source, start)
    if (!tag) {
      index = start + 1
      continue
    }

    if (!tag.closing && !tag.selfClosing && tag.name === 'Tabs') {
      const nextStart = skipWhitespace(source, tag.end)
      const nextTag = readJsxTag(source, nextStart)
      const between = source.slice(tag.end, nextStart)

      if (nextTag?.name === 'Tabs.TabPane' && !nextTag.closing && /^\s*$/.test(between)) {
        replacements.push({
          start: tag.end,
          end: nextStart,
          value: `\n\n${getIndentationAt(source, nextStart)}`
        })
      }
    }

    if (tag.closing && tag.name === 'Tabs') {
      const nextStart = skipWhitespace(source, tag.end)
      const nextTag = readJsxTag(source, nextStart)
      const between = source.slice(tag.end, nextStart)

      if (nextTag && /^\s*$/.test(between)) {
        replacements.push({
          start: tag.end,
          end: nextStart,
          value: `\n\n${getIndentationAt(source, nextStart)}`
        })
      }
    }

    index = tag.end
  }

  return applyReplacementsFromRight(source, replacements)
}

const separateTabsPanesFromTheirBoundaries = source => {
  const replacements = []
  let index = 0

  while (index < source.length) {
    const start = source.indexOf('<', index)
    if (start === -1) break

    const tag = readJsxTag(source, start)
    if (!tag) {
      index = start + 1
      continue
    }

    if (tag.name === 'Tabs.TabPane' && !tag.selfClosing) {
      if (tag.closing) {
        let previousEnd = tag.start
        while (/\s/.test(source[previousEnd - 1] ?? '')) previousEnd -= 1

        const previousStart = source.lastIndexOf('<', previousEnd - 1)
        const previousTag = previousStart === -1 ? undefined : readJsxTag(source, previousStart)
        const isEmptyPane = previousTag?.end === previousEnd && previousTag.name === tag.name && !previousTag.closing

        if (previousEnd < tag.start && !isEmptyPane && /^\s*$/.test(source.slice(previousEnd, tag.start))) {
          replacements.push({
            start: previousEnd,
            end: tag.start,
            value: `\n\n${getIndentationAt(source, tag.start)}`
          })
        }
      }

      const nextStart = skipWhitespace(source, tag.end)
      const between = source.slice(tag.end, nextStart)
      const nextTag = readJsxTag(source, nextStart)
      const isEmptyPane = !tag.closing && nextTag?.closing && nextTag.name === tag.name

      if (between && /^\s*$/.test(between) && !isEmptyPane) {
        replacements.push({
          start: tag.end,
          end: nextStart,
          value: `\n\n${getIndentationAt(source, nextStart)}`
        })
      }
    }

    index = tag.end
  }

  return applyReplacementsFromRight(source, replacements)
}

const separateAdjacentDocExampleBlocks = source => {
  const layouts = getDocExampleLayouts(source)
  const replacements = layouts.slice(0, -1).flatMap((tag, index) => {
    const nextTag = layouts[index + 1]
    const between = source.slice(tag.end, nextTag.start)
    if (!/^\s*$/.test(between)) return []

    return [{
      start: tag.end,
      end: nextTag.start,
      value: `\n\n${getIndentationAt(source, nextTag.start)}`
    }]
  })

  return applyReplacementsFromRight(source, replacements)
}

const normalizeJsxAttributeQuotes = source => {
  const replacements = []
  let index = 0

  while (index < source.length) {
    const start = source.indexOf('<', index)
    if (start === -1) break

    const tag = readJsxTag(source, start)
    if (!tag) {
      index = start + 1
      continue
    }

    let attributeIndex = tag.nameEnd
    while (attributeIndex < tag.end - 1) {
      const attribute = readAttribute(source, attributeIndex, tag.end)
      const value = source.slice(attribute.valueStart, attribute.end)
      if (value.startsWith("'")) {
        replacements.push({
          start: attribute.valueStart,
          end: attribute.end,
          value: `"${escapeJsxAttributeValue(value.slice(1, -1), '"')}"`
        })
      }
      attributeIndex = Math.max(attribute.end, attributeIndex + 1)
    }

    index = tag.end
  }

  return applyReplacementsFromRight(source, replacements)
}

const escapeTemplateLiteral = value => value
  .replaceAll('\\', '\\\\')
  .replaceAll('`', '\\`')
  .replaceAll('${', '\\${')

const escapeJsxAttributeValue = (value, quote) => value.replaceAll(
  quote,
  quote === "'" ? '&apos;' : '&quot;'
)

const normalizeDescriptionSpaces = value => value.replace(/[\t ]{2,}/g, ' ')

const collapseBlankLineRuns = value => value.replace(/\n[\t ]*\n(?:[\t ]*\n)+/g, '\n\n')

const getAttributeQuote = () => '"'

const removeSharedIndent = value => {
  const lines = value.split('\n')
  while (lines[0]?.trim() === '') lines.shift()
  while (lines.at(-1)?.trim() === '') lines.pop()
  const indents = lines
    .filter(line => line.trim())
    .map(line => line.match(/^\s*/)?.[0].length ?? 0)
  const sharedIndent = Math.min(...indents)

  return sharedIndent > 0
    ? lines.map(line => line.trim() ? line.slice(sharedIndent) : '').join('\n')
    : lines.join('\n')
}

const indentExample = (value, indent) => value
  .trimEnd()
  .split('\n')
  .map(line => line ? `${indent}${line}` : line)
  .join('\n')

const getPrettierOptions = (filePath, parser) => ({
  ...PRETTIER_OPTIONS,
  filepath: filePath,
  parser
})

const removeSyntheticFragment = value => {
  const withoutLeadingSemicolon = value.startsWith(';') ? value.slice(1) : value
  const closingLength = withoutLeadingSemicolon.endsWith('</>;\n')
    ? 5
    : withoutLeadingSemicolon.endsWith('</>\n')
      ? 4
      : 0
  if (!withoutLeadingSemicolon.startsWith('<>\n') || closingLength === 0) {
    return value
  }

  return withoutLeadingSemicolon
    .slice(3, -closingLength)
    .replace(/^ {2}/gm, '')
}

const removeJsxSemicolon = (value, isJsxExample) => isJsxExample
  ? value.replace(/^;/, '').replace(/(\/>|<\/[A-Za-z][\w.:-]*>);\n$/, '$1\n')
  : value.replace(/(\/>|<\/[A-Za-z][\w.:-]*>);\n$/, '$1\n')

const formatExample = async (value, filePath) => {
  const options = await getPrettierOptions(filePath, 'babel')
  const normalizedValue = removeSharedIndent(value)
  const isJsxExample = normalizedValue.trimStart().startsWith('<')
  try {
    const formatted = await prettier.format(normalizedValue, options)
    return removeJsxSemicolon(formatted, isJsxExample)
  } catch {
    try {
      const formatted = await prettier.format(`<>\n${normalizedValue}\n</>`, options)
      return removeJsxSemicolon(removeSyntheticFragment(formatted), isJsxExample)
    } catch {
      return normalizedValue
    }
  }
}

const applyReplacementsFromRight = (source, replacements) => replacements
  .sort((first, second) => second.start - first.start)
  .reduce(
    (result, replacement) => result.slice(0, replacement.start) + replacement.value + result.slice(replacement.end),
    source
  )

const formatMdxUntilStable = async (source, filePath) => {
  const options = await getPrettierOptions(filePath, 'mdx')
  let current = source

  for (let pass = 0; pass < 4; pass += 1) {
    const formatted = await prettier.format(current, options)
    const normalized = normalizeStructuralJsxIndentation(formatted)
    if (normalized === current) return normalized
    current = normalized
  }

  throw new Error(`MDX formatting did not stabilize after four passes: ${filePath}`)
}

export async function formatMdxDocument (source, filePath) {
  const attributes = findDocExampleAttributes(source)
  const formattedDescriptions = attributes.descriptions
    .filter(attribute => attribute.value.includes('\n'))
    .map((attribute, index) => ({
      attribute,
      placeholder: `__MDX_DESCRIPTION_${index}_${attribute.start}__`,
      quote: getAttributeQuote(source.slice(attribute.valueStart, attribute.end)),
      value: removeSharedIndent(normalizeDescriptionSpaces(attribute.value))
    }))
  const formattedExamples = await Promise.all(attributes.static.map(async (attribute, index) => {
    const formatted = await formatExample(attribute.value, filePath)
    const placeholder = `__MDX_DOC_EXAMPLE_${index}_${attribute.start}__`
    return {
      attribute,
      formatted,
      placeholder
    }
  }))
  const replacements = formattedExamples.map(({ attribute, placeholder }) => ({
    start: attribute.start,
    end: attribute.end,
    value: `${attribute.name}={\`${placeholder}\`${attribute.suffix ? ` ${attribute.suffix}` : ''}}`
  }))
  const multilineDescriptionStarts = new Set(formattedDescriptions.map(({ attribute }) => attribute.start))
  const descriptionReplacements = attributes.descriptions
    .filter(attribute => !multilineDescriptionStarts.has(attribute.start))
    .map(attribute => ({
      start: attribute.valueStart,
      end: attribute.end,
      value: normalizeDescriptionSpaces(source.slice(attribute.valueStart, attribute.end))
    }))
  const descriptionPlaceholders = formattedDescriptions.map(({ attribute, placeholder, quote }) => ({
    start: attribute.start,
    end: attribute.end,
    value: `${attribute.name}=${quote}${placeholder}${quote}`
  }))
  const rewritten = applyReplacementsFromRight(source, [
    ...replacements,
    ...descriptionReplacements,
    ...descriptionPlaceholders
  ])
  const formattedMdx = await formatMdxUntilStable(rewritten, filePath)
  const normalizedMdx = separateAdjacentDocExampleBlocks(
    normalizeDocExampleBlockIndentation(
      expandSingleLineDocExampleBlocksWithCode(
        separateTabsPanesFromTheirBoundaries(
          separateTabsFromTheirFirstPane(formattedMdx)
        )
      )
    )
  )
  const restoredDescriptions = formattedDescriptions.reduce(
    (text, { placeholder, quote, value }) => text.replaceAll(placeholder, (match, offset, sourceText) => {
      const lineStart = sourceText.lastIndexOf('\n', offset) + 1
      const attributeIndent = sourceText.slice(lineStart, offset).match(/^\s*/)?.[0] ?? ''
      return `\n${escapeJsxAttributeValue(indentExample(value, `${attributeIndent}  `), quote)}`
    }),
    normalizedMdx
  )
  const restoredExamples = formattedExamples.reduce(
    (text, { formatted, placeholder }) => text.replaceAll(placeholder, (match, offset, sourceText) => {
      const lineStart = sourceText.lastIndexOf('\n', offset) + 1
      const attributeIndent = sourceText.slice(lineStart, offset).match(/^\s*/)?.[0] ?? ''
      const codeIndent = `${attributeIndent}  `
      return `\n${escapeTemplateLiteral(indentExample(formatted, codeIndent))}\n${attributeIndent}`
    }),
    restoredDescriptions
  )
  return {
    text: collapseBlankLineRuns(normalizeJsxAttributeQuotes(restoredExamples)),
    unsupported: attributes.unsupported
  }
}

const discoverDocumentationFiles = () => fastGlob(DOCUMENTATION_GLOB, {
  absolute: true,
  cwd: PACKAGE_DIRECTORY
})

export async function formatMdxFiles ({ check, files }) {
  const discoveredFiles = files ?? await discoverDocumentationFiles()
  const filesToFormat = await Promise.all(discoveredFiles.map(validateDocumentationFile))
  const changed = []
  const unsupported = []

  for (const file of filesToFormat) {
    const source = await readFile(file, 'utf8')
    validateDocumentationStructure(source, file)
    const result = await formatMdxDocument(source, file)
    if (result.text !== source) changed.push(file)
    if (!check && result.text !== source) await writeFile(file, result.text)
    unsupported.push(...result.unsupported.map(name => `${file}: ${name}`))
  }

  return { changed, unsupported }
}

export const getFilesFromCliArguments = arguments_ => Promise.all(
  arguments_.map(argument => validateDocumentationFile(resolve(PACKAGE_DIRECTORY, argument)))
)

const isMainModule = process.argv[1] === fileURLToPath(import.meta.url)

if (isMainModule) {
  const arguments_ = process.argv.slice(2)
  const check = arguments_.includes('--check')
  const files = await getFilesFromCliArguments(arguments_.filter(argument => argument !== '--check'))
  const result = await formatMdxFiles({ check, files: files.length > 0 ? files : undefined })
  result.changed.forEach(file => console.log(file))
  result.unsupported.forEach(message => console.error(message))
  if (check && (result.changed.length > 0 || result.unsupported.length > 0)) process.exitCode = 1
}
