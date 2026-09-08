import { RefObject } from 'react'

import styles from '../Table.module.scss'

export function toggleHorizontalScrollbarVisibility (horizontalScrollbarRef: RefObject<HTMLDivElement>) {
  const scrollbarContainer: HTMLElement | null = horizontalScrollbarRef.current
  const scrollbarFiller = scrollbarContainer?.firstChild as HTMLElement | undefined

  if (!scrollbarContainer || !scrollbarFiller) return

  if (scrollbarFiller.offsetWidth > scrollbarContainer.offsetWidth) {
    scrollbarContainer.classList.remove(styles.hidden)
  } else {
    scrollbarContainer.classList.add(styles.hidden)
  }
}
