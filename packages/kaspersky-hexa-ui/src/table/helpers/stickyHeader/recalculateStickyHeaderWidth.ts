import { RefObject } from 'react'

type RecalculateStickyHeaderWidthProps = {
  tableBody: HTMLElement,
  horizontalScrollbarRef: RefObject<HTMLDivElement>,
  stickyHeaderRef: RefObject<HTMLDivElement>
}

export const recalculateStickyHeaderWidth = ({
  tableBody,
  horizontalScrollbarRef,
  stickyHeaderRef
}: RecalculateStickyHeaderWidthProps): void => {
  const scrollbarContainer = horizontalScrollbarRef.current
  const scrollbarFiller = scrollbarContainer?.firstChild as HTMLElement
  if (tableBody && scrollbarFiller?.style) {
    scrollbarFiller.style.width = `${tableBody.offsetWidth}px`
  }

  const stickyHeaderTable = stickyHeaderRef.current?.querySelector('table') as HTMLElement
  if (stickyHeaderTable?.style) {
    stickyHeaderTable.style.width = `${tableBody.offsetWidth}px`
  }
}
