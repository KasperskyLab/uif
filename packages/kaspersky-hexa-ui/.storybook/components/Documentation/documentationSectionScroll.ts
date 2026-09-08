import { getScrollParent } from '@src/anchor-navigation/utils'

export const DOCUMENTATION_SECTION_SCROLL_OFFSET = 24

const clickDocumentationTab = (tabKey: string) => {
  document.querySelector<HTMLElement>(
    `.hexa-docs-content [id$="-tab-${CSS.escape(tabKey)}"]`
  )?.click()
}

export const scrollToDocumentationSection = (
  id: string,
  behavior: ScrollBehavior = 'smooth'
): boolean => {
  const element = document.getElementById(decodeURIComponent(id))

  if (!element) {
    return false
  }

  const pane = element.closest('.ant-tabs-tabpane')

  if (pane && !pane.classList.contains('ant-tabs-tabpane-active')) {
    return false
  }

  const scrollParent = getScrollParent(element)
  const offset = DOCUMENTATION_SECTION_SCROLL_OFFSET

  if (scrollParent === document.documentElement) {
    const top = window.scrollY + element.getBoundingClientRect().top - offset
    window.scrollTo({ top, behavior })
  } else {
    const top = scrollParent.scrollTop +
      element.getBoundingClientRect().top -
      scrollParent.getBoundingClientRect().top -
      offset

    scrollParent.scrollTo({ top, behavior })
  }

  return true
}

export const scrollToDocumentationSectionWithRetry = (
  id: string,
  tabKey?: string,
  maxAttempts = 40,
  intervalMs = 100,
  behavior: ScrollBehavior = 'auto'
): void => {
  if (tabKey) {
    clickDocumentationTab(tabKey)
  }

  let attempt = 0

  const tryScroll = () => {
    if (scrollToDocumentationSection(id, behavior) || attempt >= maxAttempts) {
      return
    }

    attempt += 1
    window.setTimeout(tryScroll, intervalMs)
  }

  tryScroll()
}
