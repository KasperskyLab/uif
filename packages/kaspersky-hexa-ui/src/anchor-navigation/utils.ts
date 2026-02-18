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
