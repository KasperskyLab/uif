export type IndexEntry = { id: string; title: string; type: string; name?: string }

// Resolve real docs IDs, including legacy IDs preserved during the IA migration.
// Never choose a similarly named page or silently fall back to a random story.
export function findDocsEntry(entries: IndexEntry[], titles: readonly string[]): IndexEntry | undefined {
  for (const title of titles) {
    const matches = entries.filter(entry => entry.type === 'docs' && entry.title === title)
    if (matches.length === 1) return matches[0]
  }
  return undefined
}

export function getManagerUrl(frameHref: string, parentHref?: string): string {
  const frame = new URL(frameHref)
  const parent = parentHref ? new URL(parentHref) : undefined
  const url = parent && parent.origin === frame.origin && !parent.pathname.endsWith('/iframe.html') ? parent : frame
  // Also works when the documentation iframe is opened directly.
  if (url.pathname.endsWith('/iframe.html')) url.pathname = url.pathname.slice(0, -'iframe.html'.length)
  url.search = ''
  url.hash = ''
  return url.href
}

export function makeDocsHref(managerHref: string, id: string): string {
  const url = new URL(managerHref)
  url.searchParams.set('path', `/docs/${id}`)
  return url.href
}

// One component = Components/<group>/<component>. Nested examples do not inflate counts.
export function componentStats(entries: IndexEntry[]) {
  const components = new Set<string>()
  const documented = new Set<string>()
  const groups = new Set<string>()
  let stories = 0
  for (const entry of entries) {
    const parts = entry.title.split('/')
    // Normalize the original catalogue to the same group/component shape.
    if (parts[0] === 'Hexa UI Components') {
      if (!parts[1] || parts[1] === 'Витрина компонентов') continue
      const nested = ['Inputs', 'DateTime Pickers', 'Layout'].includes(parts[1])
      const component = nested && parts[2] && parts[2] !== 'Stories' ? parts[2] : parts[1]
      parts.splice(0, parts.length, 'Components', nested ? parts[1] : 'General', component)
    }
    if (parts[0] !== 'Components' || parts.length < 3 || !parts[1] || !parts[2]) continue
    if (entry.type !== 'docs' && entry.type !== 'story') continue
    const key = parts.slice(0, 3).join('/')
    components.add(key)
    groups.add(parts[1])
    if (entry.type === 'docs') documented.add(key)
    if (entry.type === 'story') stories++
  }
  return { components: components.size, documented: documented.size, groups: groups.size, stories }
}
