export const DOC_TOC_HEADING_SELECTOR = 'h3, h4, h5, h6'

export const DOC_HEADING_SELECTOR = 'h2, h3, h4, h5, h6'

const DOC_HEADING_EXCLUDED_ANCESTOR = '.docs-story, .hexa-docs-editor, .skip-toc, .docblock-argstable'

export const slugifyHeadingText = (value: string) => value
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9\u0400-\u04ff\s-]/gi, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')

export const isDocumentationHeadingExcluded = (heading: HTMLElement) => (
  !!heading.closest(DOC_HEADING_EXCLUDED_ANCESTOR)
)

export const ensureDocumentationHeadingId = (
  heading: HTMLElement,
  usedIds: Set<string>
): string => {
  let id = heading.id

  if (!id) {
    const depth = Number(heading.tagName.slice(1))
    const text = (heading.textContent || '').trim()
    const base = slugifyHeadingText(text) || `section-${depth}`
    id = base
    let index = 2

    while (usedIds.has(id)) {
      id = `${base}-${index}`
      index += 1
    }

    heading.id = id
  }

  usedIds.add(id)
  return id
}
