import { navigate } from '@storybook/addon-links'
import { RefObject, useEffect } from 'react'

const INTERNAL_PATH_PREFIXES = ['/story/', '/docs/'] as const

/**
 * Extracts a Storybook story id from an internal doc link like
 * `./?path=/story/hexa-ui-components-table-row-selection--basic` or
 * `/hexa-ui/?path=/docs/hexa-ui-components-actionbutton--actionbutton-docs`.
 * Returns null for external / non-story links.
 */
const extractStoryId = (href: string): string | null => {
  try {
    const path = new URL(href, window.location.href).searchParams.get('path')

    if (!path) {
      return null
    }

    const prefix = INTERNAL_PATH_PREFIXES.find((item) => path.startsWith(item))

    if (!prefix) {
      return null
    }

    const id = path.slice(prefix.length).split(/[?&#]/)[0]

    return id || null
  } catch {
    return null
  }
}

/**
 * Turns internal `?path=/story/...` and `?path=/docs/...` links inside docs
 * into in-app Storybook navigation (no full page reload / new tab). Falls
 * back to the anchor's default behaviour for modifier clicks and external links.
 */
export const useDocumentationStoryLinks = (contentRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const root = contentRef.current

    if (!root) {
      return
    }

    const onClick = (event: MouseEvent) => {
      // Let the browser handle modifier / non-primary clicks (open in new tab, etc.)
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const target = event.target

      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest('a')

      if (!anchor || !root.contains(anchor)) {
        return
      }

      const storyId = extractStoryId(anchor.getAttribute('href') || '')

      if (!storyId) {
        return
      }

      event.preventDefault()
      navigate({ storyId })
    }

    root.addEventListener('click', onClick)

    return () => {
      root.removeEventListener('click', onClick)
    }
  }, [contentRef])
}
