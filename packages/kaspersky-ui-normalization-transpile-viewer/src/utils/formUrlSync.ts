/** Query-параметр с относительным путём открытой формы (как в дереве файлов). */
export const FORM_URL_SEARCH_PARAM = 'form'

export function getFormPathFromSearch(): string | null {
  if (typeof window === 'undefined') return null
  const raw = new URLSearchParams(window.location.search).get(FORM_URL_SEARCH_PARAM)
  if (raw == null || raw === '') return null
  return raw
}

export function setFormPathInUrl(path: string | null): void {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  if (path) {
    url.searchParams.set(FORM_URL_SEARCH_PARAM, path)
  } else {
    url.searchParams.delete(FORM_URL_SEARCH_PARAM)
  }
  const next = `${url.pathname}${url.search}${url.hash}`
  window.history.replaceState(null, '', next)
}
