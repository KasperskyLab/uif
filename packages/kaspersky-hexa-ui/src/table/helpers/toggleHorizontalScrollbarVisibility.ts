import { RefObject } from 'react'

export function toggleHorizontalScrollbarVisibility (horizontalScrollbarRef: RefObject<HTMLDivElement>) {
  const scrollbarContainer: HTMLElement | null = horizontalScrollbarRef.current
  const scrollbarFiller = scrollbarContainer?.firstChild as HTMLElement | undefined

  if (!scrollbarContainer || !scrollbarFiller) return

  if (scrollbarFiller.offsetWidth > scrollbarContainer.offsetWidth) {
    scrollbarContainer.style.removeProperty('height')
    scrollbarContainer.style.removeProperty('border-bottom')
  } else {
    scrollbarContainer.style.height = '0px'
    scrollbarContainer.style.borderBottom = '0px'
  }
}