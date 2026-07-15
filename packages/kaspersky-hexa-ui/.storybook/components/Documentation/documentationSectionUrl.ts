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

/** Full share URL to a docs section (manager shell + sidebar, not iframe.html). */
export const getDocumentationSectionUrl = (sectionId: string): string => {
  const url = getShareBaseUrl()
  url.hash = sectionId

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
