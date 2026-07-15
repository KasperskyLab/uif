import { navigate } from '@storybook/addon-links'
import { RefObject, useEffect } from 'react'

const STORY_PATH_PREFIX = '/story/'

/**
 * Extracts a Storybook story id from an internal doc link like
 * `./?path=/story/hexa-ui-components-table-row-selection--basic`.
 * Returns null for external / non-story links.
 */
const extractStoryId = (href: string): string | null => {
  try {
    const path = new URL(href, window.location.href).searchParams.get('path')

    if (!path || !path.startsWith(STORY_PATH_PREFIX)) {
      return null
    }

    const id = path.slice(STORY_PATH_PREFIX.length).split(/[?&#]/)[0]

    return id || null
  } catch {
    return null
  }
}

/**
 * Turns internal `?path=/story/...` links inside docs into in-app Storybook
 * navigation (no full page reload / new tab). Falls back to the anchor's
 * default behaviour for modifier clicks and external links.
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
