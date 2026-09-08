const IFRAME_PATH_SUFFIX = '/iframe.html'

const isIframeLocation = (location: Location) => (
  location.pathname.endsWith(IFRAME_PATH_SUFFIX)
)

/** Storybook manager URL (`/?path=/docs/...`) from iframe or current location. */
export const getStorybookManagerUrl = (location: Location): URL => {
  const url = new URL(location.href)

  if (!isIframeLocation(location)) {
    return url
  }

  const storyId = url.searchParams.get('id')

  if (!storyId) {
    return url
  }

  const viewMode = url.searchParams.get('viewMode') ?? 'story'
  const storyPath = viewMode === 'docs'
    ? `/docs/${storyId}`
    : `/story/${storyId}`

  const managerUrl = new URL(`${url.origin}/`)
  managerUrl.searchParams.set('path', storyPath)

  return managerUrl
}

const getShareBaseUrl = (): URL => {
  try {
    if (window.parent !== window && window.parent.location.origin === window.location.origin) {
      const parentUrl = getStorybookManagerUrl(window.parent.location)

      if (!isIframeLocation(window.parent.location)) {
        return parentUrl
      }
    }
  } catch {
    // cross-origin or inaccessible parent
  }

  return getStorybookManagerUrl(window.location)
}

export type DocumentationHashLocation = {
  tabKey?: string
  sectionId?: string
}

/** Parses `#composition/current` or legacy `#current`. */
export const parseDocumentationHash = (hash: string): DocumentationHashLocation => {
  let raw = hash.replace(/^#/, '')

  try {
    raw = decodeURIComponent(raw)
  } catch {
    // keep raw
  }

  if (!raw) {
    return {}
  }

  const separator = raw.indexOf('/')

  if (separator === -1) {
    return { sectionId: raw }
  }

  return {
    tabKey: raw.slice(0, separator),
    sectionId: raw.slice(separator + 1) || undefined
  }
}

/** Full share URL to a docs section (manager shell + sidebar, not iframe.html). */
export const getDocumentationSectionUrl = (sectionId: string, tabKey?: string): string => {
  const url = getShareBaseUrl()
  url.hash = tabKey ? `${tabKey}/${sectionId}` : sectionId

  return url.toString()
}

export const getDocumentationPageHash = (): string => {
  try {
    if (window.parent !== window && window.parent.location.origin === window.location.origin) {
      return window.parent.location.hash || window.location.hash
    }
  } catch {
    // ignore
  }

  return window.location.hash
}
