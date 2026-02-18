import { MutableRefObject } from 'react'

export const isEllipsisActive = (element: HTMLElement, contentWidth: MutableRefObject<number>) => {
  return Math.round(element.offsetWidth) < Math.round(contentWidth.current || element.scrollWidth)
}

