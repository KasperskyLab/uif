import { DocsSearchDocument, searchDocumentsFromManifests } from './collectDocs.ts'

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

export const toSearchResponse = (documents: readonly DocsSearchDocument[]) =>
  JSON.stringify({ documents })

export const searchCachePayload = (
  signature: string,
  documents: readonly DocsSearchDocument[]
) => JSON.stringify({ signature, documents })

/** Returns the search response when the stored file matches the current sources. */
export const readSearchCache = (raw: string, signature: string): string | null => {
  try {
    const parsed = JSON.parse(raw) as { signature?: unknown, documents?: unknown }

    if (parsed.signature !== signature || !Array.isArray(parsed.documents)) {
      return null
    }

    return toSearchResponse(parsed.documents as DocsSearchDocument[])
  } catch {
    return null
  }
}

export type WithSearchManifests = Record<string, unknown> & {
  search: { documents: DocsSearchDocument[] }
}

/** Adds `search.json` to the manifest written by `storybook build`. */
export const withSearchManifest = (manifests: unknown): WithSearchManifests => {
  const documents = searchDocumentsFromManifests(manifests)
  const base = isRecord(manifests) ? manifests : {}

  return {
    ...base,
    search: { documents }
  }
}
