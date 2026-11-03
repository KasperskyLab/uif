import { slugifyHeadingText } from '../components/Documentation/documentationHeadings.ts'

const CODE_FENCE = /```[\s\S]*?```/g
const DOUBLE_QUOTED = /"((?:[^"\\]|\\[\s\S])*)"/g
const IMPORT_LINE = /^\s*import\s[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm
const SIDE_EFFECT_IMPORT = /^\s*import\s+['"][^'"]+['"];?\s*$/gm
const EXPORT_CONST = /export\s+const\s+[A-Za-z0-9_]+\s*=\s*/g
const DOC_EXAMPLE_BLOCK = '<DocExampleBlock'
const KEPT_EXAMPLE_ATTRS = new Set(['title', 'description'])

const readQuoted = (source: string, index: number, quote: string) => {
  let cursor = index + 1
  let value = ''

  while (cursor < source.length) {
    if (source[cursor] === '\\') {
      value += source[cursor + 1] ?? ''
      cursor += 2
      continue
    }

    if (source[cursor] === quote) {
      return { value, next: cursor + 1 }
    }

    value += source[cursor]
    cursor += 1
  }

  return { value, next: cursor }
}

const readTemplate = (source: string, index: number) => {
  let cursor = index + 1
  let value = ''

  while (cursor < source.length) {
    if (source[cursor] === '\\') {
      value += source[cursor + 1] ?? ''
      cursor += 2
      continue
    }

    if (source[cursor] === '`') {
      return { value, next: cursor + 1 }
    }

    if (source[cursor] === '$' && source[cursor + 1] === '{') {
      cursor = readBalanced(source, cursor + 1)
      continue
    }

    value += source[cursor]
    cursor += 1
  }

  return { value, next: cursor }
}

const readBalanced = (source: string, index: number) => {
  let cursor = index
  let depth = 0

  while (cursor < source.length) {
    const char = source[cursor]

    if (char === '"' || char === '\'') {
      cursor = readQuoted(source, cursor, char).next
      continue
    }

    if (char === '`') {
      cursor = readTemplate(source, cursor).next
      continue
    }

    if (char === '{') {
      depth += 1
    } else if (char === '}') {
      depth -= 1
      cursor += 1

      if (depth === 0) {
        return cursor
      }

      continue
    }

    cursor += 1
  }

  return cursor
}

const expressionText = (expression: string) => {
  const trimmed = expression.trim()
  const quote = trimmed[0]

  if (
    (quote === '`' || quote === '"' || quote === '\'') &&
    trimmed[trimmed.length - 1] === quote
  ) {
    return trimmed.slice(1, -1)
  }

  return ''
}

const readAttributeValue = (source: string, index: number) => {
  if (source[index] === '"' || source[index] === '\'') {
    return readQuoted(source, index, source[index])
  }

  if (source[index] === '`') {
    return readTemplate(source, index)
  }

  if (source[index] === '{') {
    const next = readBalanced(source, index)

    return {
      value: expressionText(source.slice(index + 1, next - 1)),
      next
    }
  }

  return { value: '', next: index }
}

const consumeDocExampleBlock = (source: string, start: number) => {
  let cursor = start + DOC_EXAMPLE_BLOCK.length
  const kept: string[] = []
  let title = ''
  let description = ''

  while (cursor < source.length) {
    while (/\s/.test(source[cursor] ?? '')) {
      cursor += 1
    }

    if (source.startsWith('/>', cursor)) {
      return {
        end: cursor + 2,
        text: kept.join(' '),
        title,
        description
      }
    }

    if (source[cursor] === '>') {
      return {
        end: cursor + 1,
        text: kept.join(' '),
        title,
        description
      }
    }

    const name = /^[A-Za-z_][\w]*/.exec(source.slice(cursor))

    if (!name) {
      cursor += 1
      continue
    }

    cursor += name[0].length

    while (/\s/.test(source[cursor] ?? '')) {
      cursor += 1
    }

    if (source[cursor] !== '=') {
      continue
    }

    cursor += 1

    while (/\s/.test(source[cursor] ?? '')) {
      cursor += 1
    }

    const valueStart = cursor
    const attribute = readAttributeValue(source, cursor)
    cursor = attribute.next === valueStart ? valueStart + 1 : attribute.next

    if (name[0] === 'title') {
      title = attribute.value.trim()
    }

    if (name[0] === 'description') {
      description = attribute.value.trim()
    }

    if (KEPT_EXAMPLE_ATTRS.has(name[0]) && attribute.value.trim()) {
      kept.push(attribute.value)
    }
  }

  return {
    end: source.length,
    text: kept.join(' '),
    title,
    description
  }
}

const keepExampleProse = (source: string) => {
  let cursor = 0
  let result = ''

  while (cursor < source.length) {
    const start = source.indexOf(DOC_EXAMPLE_BLOCK, cursor)

    if (start < 0) {
      return result + source.slice(cursor)
    }

    const block = consumeDocExampleBlock(source, start)
    result += `${source.slice(cursor, start)} ${block.text} `
    cursor = block.end
  }

  return result
}

const skipExportStatement = (source: string, index: number) => {
  let cursor = index
  let depth = 0

  while (cursor < source.length) {
    const char = source[cursor]

    if (char === '"' || char === '\'') {
      cursor = readQuoted(source, cursor, char).next
      continue
    }

    if (char === '`') {
      cursor = readTemplate(source, cursor).next
      continue
    }

    if (char === '{' || char === '(' || char === '[') {
      depth += 1
      cursor += 1
      continue
    }

    if (char === '}' || char === ')' || char === ']') {
      depth = Math.max(0, depth - 1)
      cursor += 1

      if (depth === 0) {
        if (source[cursor] === ';') {
          cursor += 1
        }

        return cursor
      }

      continue
    }

    if (depth === 0 && (char === ';' || char === '\n')) {
      return char === ';' ? cursor + 1 : cursor
    }

    cursor += 1
  }

  return cursor
}

const findMarkupStart = (source: string) => {
  let cursor = 0

  while (cursor < source.length) {
    const char = source[cursor]

    if (char === '"' || char === '\'') {
      cursor = readQuoted(source, cursor, char).next
      continue
    }

    if (char === '`') {
      cursor = readTemplate(source, cursor).next
      continue
    }

    if (char === '<' && /[A-Za-z]/.test(source[cursor + 1] ?? '')) {
      return cursor
    }

    cursor += 1
  }

  return -1
}

const stripExportedCode = (source: string) => {
  const proseStart = findMarkupStart(source)
  const head = proseStart < 0 ? source : source.slice(0, proseStart)
  const tail = proseStart < 0 ? '' : source.slice(proseStart)
  let cursor = 0
  let result = ''

  for (const match of head.matchAll(EXPORT_CONST)) {
    const start = match.index ?? 0

    if (start < cursor) {
      continue
    }

    result += head.slice(cursor, start)
    cursor = skipExportStatement(head, start + match[0].length)
  }

  return result + head.slice(cursor) + tail
}

const unwrapTags = (source: string): string => {
  let result = source.replace(/<[^>]+\/>/g, ' ')
  let previous = ''

  while (previous !== result) {
    previous = result
    result = result.replace(/<(\w+)[^>]*>([\s\S]*?)<\/\1>/g, '$2')
  }

  return result.replace(/<[^>]+>/g, ' ')
}

const stripExpressions = (source: string): string => {
  let result = source
  let previous = ''

  while (previous !== result) {
    previous = result
    result = result.replace(/\{[^{}]*\}/g, ' ')
  }

  return result
}

/**
 * Storybook docs manifest stores raw MDX in `content`. Attribute prose
 * (`description="..."`) lives inside the opening tag, so it is pulled out
 * before tags are removed.
 */
const plainFragment = (content: string): string => {
  const codeBlocks: string[] = []
  const withoutCode = content.replace(CODE_FENCE, (block) => {
    codeBlocks.push(block.replace(/```[\w-]*\n?/g, ' '))
    return ' '
  })

  const prose: string[] = []
  const withoutQuotes = withoutCode.replace(DOUBLE_QUOTED, (_match, value: string) => {
    const text = value.replace(/\\n/g, ' ').replace(/\\"/g, '"')

    if (text.length > 12 && /\s/.test(text) && /[A-Za-zА-Яа-яЁё]/.test(text)) {
      prose.push(text)
    }

    return ' '
  })

  const withoutImports = stripExpressions(
    withoutQuotes
      .replace(IMPORT_LINE, ' ')
      .replace(SIDE_EFFECT_IMPORT, ' ')
  )

  const text = unwrapTags(withoutImports)

  return [text, ...prose, ...codeBlocks]
    .join(' ')
    .replace(/[#>*_~`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export const toPlainText = (content: string): string => (
  plainFragment(keepExampleProse(stripExportedCode(content)))
)

export type DocumentationAnchor = {
  start: number
  end: number
  tabKey?: string
  sectionId?: string
  hash: string
}

const allocateHeadingId = (usedIds: Set<string>, text: string, depth: number) => {
  const base = slugifyHeadingText(text) || `section-${depth}`
  let id = base
  let index = 2

  while (usedIds.has(id)) {
    id = `${base}-${index}`
    index += 1
  }

  usedIds.add(id)
  return id
}

const sectionHash = (tabKey: string | undefined, sectionId: string) => (
  tabKey ? `${tabKey}/${sectionId}` : sectionId
)

type OpenAnchor = {
  start: number
  tabKey?: string
  sectionId?: string
  hash: string
}

type DocMarker = {
  index: number
  end: number
  kind: 'heading' | 'example' | 'tab-open' | 'tab-close' | 'page-header' | 'text-heading'
  text?: string
  title?: string
  description?: string
  depth?: number
  tabKey?: string
}

const isLineStart = (source: string, index: number) => (
  index === 0 || source[index - 1] === '\n'
)

const readOpeningTag = (source: string, start: number) => {
  let cursor = start + 1
  const name = /^([A-Za-z][\w.]*)/.exec(source.slice(cursor))

  if (!name) {
    return null
  }

  cursor += name[1].length
  const attrs: Record<string, string> = {}

  while (cursor < source.length) {
    while (/\s/.test(source[cursor] ?? '')) {
      cursor += 1
    }

    if (source.startsWith('/>', cursor)) {
      return {
        name: name[1],
        attrs,
        end: cursor + 2
      }
    }

    if (source[cursor] === '>') {
      return {
        name: name[1],
        attrs,
        end: cursor + 1
      }
    }

    const attr = /^[A-Za-z_][\w]*/.exec(source.slice(cursor))

    if (!attr) {
      cursor += 1
      continue
    }

    cursor += attr[0].length

    while (/\s/.test(source[cursor] ?? '')) {
      cursor += 1
    }

    if (source[cursor] !== '=') {
      continue
    }

    cursor += 1

    while (/\s/.test(source[cursor] ?? '')) {
      cursor += 1
    }

    const valueStart = cursor
    const attribute = readAttributeValue(source, cursor)
    cursor = attribute.next === valueStart ? valueStart + 1 : attribute.next
    attrs[attr[0]] = attribute.value
  }

  return {
    name: name[1],
    attrs,
    end: source.length
  }
}

const skipIgnoredRegion = (source: string, cursor: number) => {
  if (isLineStart(source, cursor) && source.startsWith('```', cursor)) {
    const close = source.indexOf('```', cursor + 3)
    return close < 0 ? source.length : close + 3
  }

  const char = source[cursor]

  if (char === '"' || char === '\'') {
    return readQuoted(source, cursor, char).next
  }

  if (char === '`') {
    return readTemplate(source, cursor).next
  }

  if (char === '{') {
    return readBalanced(source, cursor)
  }

  return cursor
}

const findMarker = (source: string, from: number): DocMarker | null => {
  let cursor = from

  while (cursor < source.length) {
    const skipped = skipIgnoredRegion(source, cursor)

    if (skipped !== cursor) {
      cursor = skipped
      continue
    }

    if (isLineStart(source, cursor)) {
      const heading = /^(#{2,6})[ \t]+([^\n]+)/.exec(source.slice(cursor))

      if (heading) {
        return {
          kind: 'heading',
          index: cursor,
          end: cursor + heading[0].length,
          text: heading[2].trim(),
          depth: heading[1].length
        }
      }
    }

    if (source.startsWith(DOC_EXAMPLE_BLOCK, cursor)) {
      const block = consumeDocExampleBlock(source, cursor)

      return {
        kind: 'example',
        index: cursor,
        end: block.end,
        title: block.title,
        description: block.description
      }
    }

    if (source.startsWith('<DocPageHeader', cursor)) {
      const tag = readOpeningTag(source, cursor)

      if (tag?.attrs.title?.trim()) {
        return {
          kind: 'page-header',
          index: cursor,
          end: tag.end,
          text: tag.attrs.title.trim()
        }
      }
    }

    if (source.startsWith('<Text', cursor) && /^<Text\b/.test(source.slice(cursor))) {
      const tag = readOpeningTag(source, cursor)
      const depth = Number((tag?.attrs.type || '').replace('H', ''))

      if (tag && depth >= 2 && depth <= 6) {
        const close = source.indexOf('</Text>', tag.end)
        const inner = close < 0 ? '' : source.slice(tag.end, close)
        const text = plainFragment(inner)

        if (text) {
          return {
            kind: 'text-heading',
            index: cursor,
            end: close < 0 ? tag.end : close + '</Text>'.length,
            text,
            depth
          }
        }
      }
    }

    const tabClose = /^<\/([A-Za-z][\w.]*TabPane)>/.exec(source.slice(cursor))

    if (tabClose) {
      return {
        kind: 'tab-close',
        index: cursor,
        end: cursor + tabClose[0].length
      }
    }

    const tabOpen = /^<([A-Za-z][\w.]*TabPane)\b/.exec(source.slice(cursor))

    if (tabOpen) {
      const tag = readOpeningTag(source, cursor)

      return {
        kind: 'tab-open',
        index: cursor,
        end: tag?.end ?? cursor + tabOpen[0].length,
        tabKey: tag?.attrs.key?.trim()
      }
    }

    cursor += 1
  }

  return null
}

/**
 * Plain text of an MDX page plus anchors that match docs heading links:
 * `#composition/mode`, where `composition` is the tab key and `mode` is the
 * slug of the nearest DocExampleBlock title.
 */
export const toAnchoredText = (content: string): { text: string, anchors: DocumentationAnchor[] } => {
  const source = stripExportedCode(content)
  const usedIds = new Set<string>()
  const tabStack: Array<string | undefined> = []
  const parts: string[] = []
  const anchors: DocumentationAnchor[] = []
  let offset = 0
  let pending: OpenAnchor | null = null
  let cursor = 0

  const currentTab = () => tabStack[tabStack.length - 1]

  const closeAnchor = () => {
    if (pending && pending.start >= 0 && offset > pending.start) {
      anchors.push({
        start: pending.start,
        end: offset,
        tabKey: pending.tabKey,
        sectionId: pending.sectionId,
        hash: pending.hash
      })
    }

    pending = null
  }

  const openAnchor = (anchor: Omit<OpenAnchor, 'start'> & { hash: string }) => {
    closeAnchor()

    if (!anchor.hash) {
      return
    }

    pending = { ...anchor, start: -1 }
  }

  const appendText = (raw: string) => {
    const text = plainFragment(raw)

    if (!text) {
      return
    }

    if (offset > 0) {
      parts.push(' ')
      offset += 1
    }

    if (pending && pending.start < 0) {
      pending.start = offset
    }

    parts.push(text)
    offset += text.length
  }

  while (cursor < source.length) {
    const marker = findMarker(source, cursor)

    if (!marker) {
      appendText(source.slice(cursor))
      break
    }

    appendText(source.slice(cursor, marker.index))

    if (marker.kind === 'tab-open') {
      tabStack.push(marker.tabKey)
      openAnchor({
        tabKey: marker.tabKey,
        hash: marker.tabKey ? `${marker.tabKey}/` : ''
      })
    } else if (marker.kind === 'tab-close') {
      tabStack.pop()
      const tabKey = currentTab()
      openAnchor({
        tabKey,
        hash: tabKey ? `${tabKey}/` : ''
      })
    } else if (marker.kind === 'example') {
      const tabKey = currentTab()

      if (marker.title) {
        const sectionId = allocateHeadingId(usedIds, marker.title, 3)
        openAnchor({
          tabKey,
          sectionId,
          hash: sectionHash(tabKey, sectionId)
        })
      }

      appendText([marker.title, marker.description].filter(Boolean).join('\n'))
    } else if (marker.kind === 'heading' || marker.kind === 'page-header' || marker.kind === 'text-heading') {
      const tabKey = currentTab()
      const headingText = marker.text || ''
      const sectionId = allocateHeadingId(usedIds, headingText, marker.depth || 2)
      openAnchor({
        tabKey,
        sectionId,
        hash: sectionHash(tabKey, sectionId)
      })
      appendText(headingText)
    }

    cursor = Math.max(marker.end, marker.index + 1)
  }

  closeAnchor()

  return { text: parts.join(''), anchors }
}

export const closestDocumentationAnchor = (
  anchors: readonly DocumentationAnchor[],
  index: number
): DocumentationAnchor | undefined => {
  let best: DocumentationAnchor | undefined
  let bestDistance = Infinity

  anchors.forEach((anchor) => {
    let distance = 0

    if (index < anchor.start) {
      distance = anchor.start - index
    } else if (index >= anchor.end) {
      distance = index - (anchor.end - 1)
    }

    if (distance < bestDistance) {
      best = anchor
      bestDistance = distance
    }
  })

  return best
}

const WORD_CHAR = /[0-9A-Za-zА-Яа-яЁё]/

export type MatchRange = readonly [number, number]

export type SnippetPart = {
  text: string
  match?: boolean
}

const mergeRanges = (ranges: readonly MatchRange[]): MatchRange[] => {
  const sorted = [...ranges].sort((left, right) => left[0] - right[0])
  const merged: Array<[number, number]> = []

  sorted.forEach(([start, end]) => {
    const last = merged[merged.length - 1]

    if (last && start <= last[1] + 2) {
      last[1] = Math.max(last[1], end)
      return
    }

    merged.push([start, end])
  })

  return merged
}

const wordAround = (text: string, start: number, end: number): [number, number] => {
  let wordStart = start
  let wordEnd = end

  while (wordStart > 0 && WORD_CHAR.test(text[wordStart - 1])) {
    wordStart -= 1
  }

  while (wordEnd < text.length && WORD_CHAR.test(text[wordEnd])) {
    wordEnd += 1
  }

  return [wordStart, wordEnd]
}

const SNIPPET_RADIUS = 104
const SNIPPET_FALLBACK = 182

const windowParts = (text: string, matchStart: number, matchEnd: number, radius: number): SnippetPart[] => {
  const windowStart = Math.max(0, matchStart - radius)
  const windowEnd = Math.min(text.length, matchEnd + radius)
  const parts: SnippetPart[] = []

  if (windowStart > 0) {
    parts.push({ text: '…' })
  }

  parts.push({ text: text.slice(windowStart, matchStart) })
  parts.push({ text: text.slice(matchStart, matchEnd), match: true })
  parts.push({ text: text.slice(matchEnd, windowEnd) })

  if (windowEnd < text.length) {
    parts.push({ text: '…' })
  }

  return parts.filter((part) => part.text)
}

export const snippetAround = (
  text: string,
  query: string,
  matchIndices?: readonly MatchRange[],
  radius = SNIPPET_RADIUS
): SnippetPart[] => {
  const normalized = matchIndices?.length ? text : text.replace(/\s+/g, ' ').trim()

  if (!normalized) {
    return []
  }

  const ranges = mergeRanges(
    (matchIndices ?? []).filter(([start, end]) => start >= 0 && end >= start && start < normalized.length)
  )

  if (ranges.length > 0) {
    const [start, inclusiveEnd] = ranges.reduce((longest, range) => (
      range[1] - range[0] > longest[1] - longest[0] ? range : longest
    ))
    const [wordStart, wordEnd] = wordAround(normalized, start, inclusiveEnd + 1)

    return windowParts(normalized, wordStart, wordEnd, radius)
  }

  const needle = query.trim().toLowerCase()
  const index = needle ? normalized.toLowerCase().indexOf(needle) : -1

  if (index >= 0) {
    return windowParts(normalized, index, index + needle.length, radius)
  }

  const head = normalized.length > SNIPPET_FALLBACK ? `${normalized.slice(0, SNIPPET_FALLBACK)}…` : normalized

  return [{ text: head }]
}
