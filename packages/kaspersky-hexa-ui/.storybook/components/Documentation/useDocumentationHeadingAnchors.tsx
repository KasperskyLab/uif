import { RefObject, useEffect } from 'react'

import {
  DOC_HEADING_SELECTOR,
  ensureDocumentationHeadingId,
  isDocumentationHeadingExcluded
} from './documentationHeadings'
import {
  getDocumentationPageHash,
  getDocumentationSectionUrl
} from './documentationSectionUrl'
import { scrollToDocumentationSectionWithRetry } from './documentationSectionScroll'

const HEADING_ANCHOR_CLASS = 'hexa-docs-heading-anchor'
const LEGACY_HEADING_ROW_CLASS = 'hexa-docs-heading-row'
const HEADING_LINK_CLASS = 'hexa-docs-heading-link'
const COPIED_RESET_MS = 2000
const HEADING_ANCHOR_DEBOUNCE_MS = 150

const LINK_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M8.0436 2.4231c1.528-1.528 4.0055-1.528 5.5335 0s1.528 4.0055 0 5.5335l-1.71 1.71a.65.65 0 1 1-.9192-.9193l1.71-1.71c1.0203-1.0203 1.0203-2.6746 0-3.695s-2.6747-1.0203-3.695 0l-1.729 1.729a.65.65 0 0 1-.9192-.9193zm2.1419 3.3916a.65.65 0 0 1 0 .9193l-3.4512 3.4512a.65.65 0 1 1-.9192-.9192l3.4512-3.4513a.65.65 0 0 1 .9192 0M5.0627 7.2425a.65.65 0 1 0-.9192-.9192L2.4234 8.0434c-1.528 1.528-1.528 4.0054 0 5.5334s4.0054 1.5281 5.5334.0001l1.7106-1.7107a.65.65 0 1 0-.9192-.9192l-1.7106 1.7106c-1.0204 1.0204-2.6747 1.0204-3.695 0s-1.0203-2.6746 0-3.695z"/></svg>'

const setLinkButtonCopied = (button: HTMLButtonElement, copied: boolean) => {
  button.classList.toggle('hexa-docs-heading-link--copied', copied)
  button.setAttribute(
    'aria-label',
    copied ? 'Ссылка скопирована' : 'Скопировать ссылку на раздел'
  )
}

const copyTextToClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // fallback below
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '0'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()

  try {
    const copied = document.execCommand('copy')

    if (!copied) {
      throw new Error('execCommand copy failed')
    }
  } finally {
    document.body.removeChild(textarea)
  }
}

const createHeadingLinkButton = (headingId: string): HTMLButtonElement => {
  const button = document.createElement('button')
  button.type = 'button'
  button.className = HEADING_LINK_CLASS
  button.setAttribute('data-heading-id', headingId)
  button.setAttribute('aria-label', 'Скопировать ссылку на раздел')
  button.innerHTML = LINK_ICON_SVG
  return button
}

const isHeadingAnchorWrapper = (element: Element | null) => (
  element?.classList.contains(HEADING_ANCHOR_CLASS) === true ||
  element?.classList.contains(LEGACY_HEADING_ROW_CLASS) === true
)

const ensureHeadingAnchorWrapper = (
  heading: HTMLElement,
  headingId: string
): HTMLButtonElement => {
  let wrapper = heading.parentElement

  if (!isHeadingAnchorWrapper(wrapper)) {
    wrapper = document.createElement('div')
    wrapper.className = HEADING_ANCHOR_CLASS
    heading.replaceWith(wrapper)
    wrapper.append(heading, createHeadingLinkButton(headingId))
  } else {
    wrapper!.className = HEADING_ANCHOR_CLASS
  }

  const button = wrapper!.querySelector<HTMLButtonElement>(`.${HEADING_LINK_CLASS}`) ??
    (() => {
      const created = createHeadingLinkButton(headingId)
      wrapper!.append(created)
      return created
    })()

  if (button.getAttribute('data-heading-id') !== headingId) {
    button.setAttribute('data-heading-id', headingId)
  }

  if (button.nextElementSibling !== heading) {
    wrapper!.insertBefore(button, heading)
  }

  return button
}

const enhanceDocumentationHeadings = (contentRoot: HTMLElement) => {
  const usedIds = new Set<string>()

  contentRoot.querySelectorAll<HTMLElement>(DOC_HEADING_SELECTOR).forEach((heading) => {
    if (isDocumentationHeadingExcluded(heading)) {
      return
    }

    const headingId = ensureDocumentationHeadingId(heading, usedIds)
    ensureHeadingAnchorWrapper(heading, headingId)
  })
}

const unwrapDocumentationHeadingAnchors = (root: HTMLElement) => {
  root.querySelectorAll<HTMLElement>(`.${HEADING_ANCHOR_CLASS}, .${LEGACY_HEADING_ROW_CLASS}`).forEach((wrapper) => {
    const heading = wrapper.querySelector<HTMLElement>(DOC_HEADING_SELECTOR)

    if (heading) {
      wrapper.replaceWith(heading)
    } else {
      wrapper.remove()
    }
  })
}

/** Adds per-heading copy-link controls and handles hash navigation in docs pages. */
export const useDocumentationHeadingAnchors = (contentRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const root = contentRef.current

    if (!root) {
      return
    }

    const copiedTimeouts = new WeakMap<HTMLButtonElement, ReturnType<typeof setTimeout>>()

    const copySectionLink = async (id: string, button: HTMLButtonElement) => {
      try {
        await copyTextToClipboard(getDocumentationSectionUrl(id))
        setLinkButtonCopied(button, true)

        const previousTimeout = copiedTimeouts.get(button)

        if (previousTimeout !== undefined) {
          clearTimeout(previousTimeout)
        }

        copiedTimeouts.set(button, setTimeout(() => {
          setLinkButtonCopied(button, false)
        }, COPIED_RESET_MS))
      } catch {
        setLinkButtonCopied(button, false)
      }
    }

    const onContentClick = (event: MouseEvent) => {
      const target = event.target

      if (!(target instanceof Element)) {
        return
      }

      const button = target.closest<HTMLButtonElement>(`.${HEADING_LINK_CLASS}`)

      if (!button || !root.contains(button)) {
        return
      }

      const headingId = button.getAttribute('data-heading-id')

      if (!headingId) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      void copySectionLink(headingId, button)
    }

    const scrollToHashFromLocation = () => {
      const hash = getDocumentationPageHash().slice(1)

      if (!hash) {
        return
      }

      scrollToDocumentationSectionWithRetry(hash)
    }

    let debounceId: ReturnType<typeof setTimeout> | undefined

    const scheduleApplyHeadingAnchors = () => {
      if (debounceId !== undefined) {
        clearTimeout(debounceId)
      }

      debounceId = setTimeout(() => {
        applyHeadingAnchors()
      }, HEADING_ANCHOR_DEBOUNCE_MS)
    }

    const observer = new MutationObserver(scheduleApplyHeadingAnchors)

    const applyHeadingAnchors = () => {
      observer.disconnect()
      enhanceDocumentationHeadings(root)
      observer.observe(root, { childList: true, subtree: true })
    }

    root.addEventListener('click', onContentClick)

    applyHeadingAnchors()
    scrollToHashFromLocation()

    const onHashChange = () => scrollToHashFromLocation()
    window.addEventListener('hashchange', onHashChange)

    try {
      window.parent?.addEventListener('hashchange', onHashChange)
    } catch {
      // ignore
    }

    return () => {
      observer.disconnect()

      if (debounceId !== undefined) {
        clearTimeout(debounceId)
      }

      root.removeEventListener('click', onContentClick)
      window.removeEventListener('hashchange', onHashChange)

      try {
        window.parent?.removeEventListener('hashchange', onHashChange)
      } catch {
        // ignore
      }

      unwrapDocumentationHeadingAnchors(root)
    }
  }, [contentRef])
}
