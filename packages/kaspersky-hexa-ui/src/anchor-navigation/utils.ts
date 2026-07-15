import { AnchorItem } from './types'

export function flatten (items: AnchorItem[]): AnchorItem[] {
  return items.flatMap(x => [x, ...(x.children ? flatten(x.children) : [])])
}

export function getScrollParent (el: HTMLElement) {
  let parentElement = el.parentElement

  while (parentElement) {
    const style = getComputedStyle(parentElement)

    if (/(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX)) {
      return parentElement
    }

    parentElement = parentElement.parentElement
  }

  return document.documentElement
}

export function getElementTopInScrollContainer (
  element: HTMLElement,
  scrollElement: HTMLElement
): number {
  if (scrollElement === document.documentElement) {
    return element.getBoundingClientRect().top + window.scrollY
  }

  return element.getBoundingClientRect().top -
    scrollElement.getBoundingClientRect().top +
    scrollElement.scrollTop
}

export function scrollToAnchorSection (
  id: string,
  offset = 24,
  behavior: ScrollBehavior = 'smooth'
): void {
  const element = document.getElementById(id)

  if (!element) {
    return
  }

  const scrollElement = getScrollParent(element)

  if (scrollElement === document.documentElement) {
    const top = window.scrollY + element.getBoundingClientRect().top - offset
    window.scrollTo({ top, behavior })
    return
  }

  const top = scrollElement.scrollTop +
    element.getBoundingClientRect().top -
    scrollElement.getBoundingClientRect().top -
    offset

  scrollElement.scrollTo({ top, behavior })
}

export function getStickyStyle (el: HTMLElement): React.CSSProperties {
  if (el === document.documentElement) {
    return {
      '--nav-offset-top': '24px',
      '--nav-max-height': 'calc(100vh - 24px)'
    }
  }

  return {
    '--nav-offset-top': 0,
    '--nav-max-height': `${el.clientHeight - parseFloat(getComputedStyle(el).paddingTop)}px`
  }
}
