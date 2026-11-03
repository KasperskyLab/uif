import MiniSearch from 'minisearch'

import { DocsSearchDocument } from './collectDocs'
import { MatchRange } from './plainText'

const MIN_TERM_LENGTH = 2
const TOKEN_BOUNDARY = /[\n\r\p{Z}\p{P}]/u

const processTerm = (term: string) => {
  const normalized = term.toLowerCase()

  return normalized.length >= MIN_TERM_LENGTH ? normalized : null
}

const fuzzy = (term: string) => (term.length > 3 ? 0.2 : false)

const isTokenBoundary = (char?: string) => !char || TOKEN_BOUNDARY.test(char)

const termRanges = (text: string, terms: readonly string[]): MatchRange[] => {
  const lower = text.toLowerCase()
  const ranges: MatchRange[] = []

  terms.forEach((term) => {
    const needle = term.toLowerCase()

    if (!needle) {
      return
    }

    let from = 0

    while (from <= lower.length - needle.length) {
      const index = lower.indexOf(needle, from)

      if (index < 0) {
        return
      }

      const end = index + needle.length

      if (isTokenBoundary(lower[index - 1]) && isTokenBoundary(lower[end])) {
        ranges.push([index, end - 1])
      }

      from = end
    }
  })

  return ranges
}

export type DocsSearchMatch = {
  item: DocsSearchDocument
  indices: MatchRange[]
}

export type DocsSearch = {
  search: (query: string) => DocsSearchMatch[]
}

export const createDocsSearch = (documents: readonly DocsSearchDocument[]): DocsSearch => {
  const byId = new Map(documents.map((document) => [document.id, document]))
  const engine = new MiniSearch<DocsSearchDocument>({
    fields: ['text'],
    processTerm,
    searchOptions: {
      prefix: true,
      fuzzy
    }
  })

  engine.addAll(documents)

  return {
    search: (query: string) => engine.search(query).flatMap((result) => {
      const item = byId.get(String(result.id))

      if (!item) {
        return []
      }

      return [{
        item,
        indices: termRanges(item.text, result.terms)
      }]
    })
  }
}
