import { MutableRefObject } from 'react'

export const isEllipsisActive = (element: HTMLElement, contentWidth: MutableRefObject<number>, expanded: boolean) => {
  return (expanded && (Math.round(element.offsetWidth) < contentWidth.current) ||
  Math.round(element.offsetWidth) < Math.round(element.scrollWidth))
}
