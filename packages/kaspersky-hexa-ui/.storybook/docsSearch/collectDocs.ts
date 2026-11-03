import { DocumentationAnchor, toAnchoredText } from './plainText.ts'

export type DocsSearchDocument = {
  id: string
  title: string
  text: string
  anchors?: DocumentationAnchor[]
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const isMdxPath = (value: unknown) =>
  typeof value === 'string' && value.replace(/\\/g, '/').endsWith('.mdx')

const readDocument = (value: unknown): DocsSearchDocument | null => {
  if (
    !isRecord(value) ||
    typeof value.id !== 'string' ||
    typeof value.content !== 'string' ||
    !isMdxPath(value.path)
  ) {
    return null
  }

  const title = typeof value.title === 'string'
    ? value.title
    : typeof value.name === 'string'
      ? value.name
      : value.id

  const indexed = toAnchoredText(value.content)

  return {
    id: value.id,
    title,
    text: indexed.text,
    anchors: indexed.anchors
  }
}

const walk = (value: unknown, add: (document: DocsSearchDocument) => void) => {
  const document = readDocument(value)

  if (document) {
    add(document)
  }

  if (!isRecord(value)) {
    return
  }

  if (isRecord(value.docs)) {
    Object.values(value.docs).forEach((entry) => walk(entry, add))
  }

  if (!isRecord(value.components)) {
    return
  }

  const componentMap = isRecord(value.components.components)
    ? value.components.components
    : value.components

  Object.values(componentMap).forEach((entry) => {
    if (isRecord(entry)) {
      walk(entry, add)
    }
  })
}

/**
 * Only `*.mdx` pages are indexed. Unattached MDX lands in `/manifests/docs.json`.
 * Component pages such as `*.documentation.mdx` are attached and land under
 * `components[].docs` in `/manifests/components.json`.
 */
export const searchDocumentsFromManifests = (manifests: unknown): DocsSearchDocument[] => {
  if (!isRecord(manifests)) {
    return []
  }

  return collectDocsEntries(manifests.docs, manifests.components)
}

export const collectDocsEntries = (...manifests: unknown[]): DocsSearchDocument[] => {
  const documents: DocsSearchDocument[] = []
  const seen = new Set<string>()

  const add = (document: DocsSearchDocument) => {
    if (seen.has(document.id) || (!document.text && !document.title)) {
      return
    }

    seen.add(document.id)
    documents.push(document)
  }

  manifests.forEach((manifest) => walk(manifest, add))

  return documents
}
