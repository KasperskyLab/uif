import { RefObject, useEffect } from 'react'

type UseSyncTableScrollProps = {
  horizontalScrollbarRef: RefObject<HTMLDivElement>,
  scrollableContainerRef: RefObject<HTMLDivElement>,
  stickyHeaderRef: RefObject<HTMLDivElement>
}

export const useSyncTableScroll = ({
  horizontalScrollbarRef,
  scrollableContainerRef,
  stickyHeaderRef
}: UseSyncTableScrollProps) => {
  /** так как scroll у нас может происходить как и в самой таблице (через тачпад, например), так и через кастомный
   *  скроллбар, то и выставлять scrollLeft нам нужно при обоих событиях ресайза
   */ 
  useEffect(() => {
    const scrollbarContainer = horizontalScrollbarRef.current
    const tableContainer = scrollableContainerRef.current
    const stickyHeaderContainer = stickyHeaderRef.current

    if (!scrollbarContainer || !tableContainer) return 

    const scrollHandler = (event: Event) => {
      const scrollLeft = (event.target as HTMLDivElement).scrollLeft
      
      tableContainer.scrollLeft = scrollLeft
      scrollbarContainer.scrollLeft = scrollLeft
      
      if (stickyHeaderContainer) {
        stickyHeaderContainer.scrollLeft = scrollLeft
      } else {
        const mainTableHeader = document.querySelector('.ant-table-thead')
        if (mainTableHeader) {
          mainTableHeader.scrollLeft = scrollLeft
        }
      }
    }
    
    tableContainer.addEventListener('scroll', scrollHandler)
    scrollbarContainer.addEventListener('scroll', scrollHandler)
    return () => {
      tableContainer.removeEventListener('scroll', scrollHandler)
      scrollbarContainer.removeEventListener('scroll', scrollHandler)
    }
  }, [])
}
