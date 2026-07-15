import {
  DOC_TOC_HEADING_SELECTOR,
  ensureDocumentationHeadingId,
  isDocumentationHeadingExcluded
} from './documentationHeadings'

export type TocEntry = {
  id: string
  text: string
  depth: number
}

export const collectDocumentationTocEntries = (root: HTMLElement): TocEntry[] => {
  const headings = root.querySelectorAll<HTMLElement>(DOC_TOC_HEADING_SELECTOR)
  const usedIds = new Set<string>()

  return Array.from(headings)
    .filter((heading) => !isDocumentationHeadingExcluded(heading))
    .map((heading) => {
      const depth = Number(heading.tagName.slice(1))
      const text = (heading.textContent || '').trim()

      if (!text) {
        return null
      }

      const id = ensureDocumentationHeadingId(heading, usedIds)

      return { id, text, depth }
    })
    .filter((entry): entry is TocEntry => entry !== null)
}
