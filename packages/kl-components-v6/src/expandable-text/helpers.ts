import { MutableRefObject } from 'react'

export const isEllipsisActive = (element: HTMLElement, contentWidth: MutableRefObject<number>) => {
  return Math.round(element.offsetWidth) < Math.round(contentWidth.current || element.scrollWidth)
}

export const resizeThrottle = (callback: () => void, delay: number) => {
  let timer : number | ReturnType<typeof setTimeout> = 0
  return function () {
    clearTimeout(timer as Parameters<typeof clearTimeout>[0])
    timer = setTimeout(() => callback(), delay)
  }
}
