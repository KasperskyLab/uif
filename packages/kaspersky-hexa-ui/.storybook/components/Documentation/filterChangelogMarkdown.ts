/** Normalize component / folder labels for changelog matching (`Button` ≈ `button`, `ActionButton` ≈ `Action-button`). */
export function normalizeChangelogComponentKey (name: string): string {
  return name
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase()
}

export type ChangelogJsonEntry = {
  date: string
  title: string
  commitId?: string
  sha?: string
  author?: string
  version?: string
  description?: string
  affectedFilesOrComponents?: string[]
}

export type ComponentChangelogEntry = {
  /** Commit message without version, commit link, and author. */
  title: string
  date: string
  version?: string
  /** Short commit hash, e.g. `55fc6be`. */
  commitHash?: string
  /** Full commit hash used to build the commit URL in UI. */
  sha?: string
  /** Author handle, e.g. `@Konstantin Kuzin`. */
  author?: string
  description: string
  affectedComponents: string[]
}

/** Filters component changelog entries by their visible metadata and description. */
export function filterComponentChangelogEntries (
  entries: ComponentChangelogEntry[],
  query: string
): ComponentChangelogEntry[] {
  const normalizedQuery = query.trim().toLocaleLowerCase()
  if (!normalizedQuery) {
    return entries
  }

  return entries.filter((entry) => [
    entry.title,
    entry.description,
    entry.version,
    entry.author,
    entry.commitHash,
    entry.sha
  ].some((value) => value?.toLocaleLowerCase().includes(normalizedQuery)))
}

export function mapChangelogJsonEntry (entry: ChangelogJsonEntry): ComponentChangelogEntry {
  return {
    title: entry.title ?? '',
    date: entry.date ?? '',
    version: entry.version,
    commitHash: entry.commitId || (entry.sha ? entry.sha.slice(0, 7) : undefined),
    sha: entry.sha,
    author: entry.author,
    description: entry.description ?? '',
    affectedComponents: Array.isArray(entry.affectedFilesOrComponents)
      ? entry.affectedFilesOrComponents
      : []
  }
}

/**
 * Changelog.json entries, optionally filtered by an affected component.
 */
export function getComponentChangelogEntries (
  source: unknown,
  component?: string
): ComponentChangelogEntry[] {
  if (!Array.isArray(source)) {
    return []
  }

  const componentKey = component ? normalizeChangelogComponentKey(component) : undefined
  if (component && !componentKey) {
    return []
  }

  const entries = source.map((entry) => mapChangelogJsonEntry(entry as ChangelogJsonEntry))
  if (!componentKey) {
    return entries
  }

  return entries.filter((entry) => (
    entry.affectedComponents.some(
      (name) => normalizeChangelogComponentKey(name) === componentKey
    )
  ))
}
