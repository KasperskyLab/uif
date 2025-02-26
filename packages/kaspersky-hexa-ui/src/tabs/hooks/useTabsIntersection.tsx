import { useIntersectionChildren } from '@helpers/useIntersectionChildren'
import { ReactElement, RefObject } from 'react'

export function useIntersection (tabsRef: RefObject<HTMLDivElement>,
  tabs: ReactElement[],
  buttonMoreSize: number,
  extraContentWidthWithGap: number,
  recalculateIntersectionCounter: number
): number {
  const intersectionItemIndexWithoutMoreButton = useIntersectionChildren(
    tabsRef,
    extraContentWidthWithGap,
    '.ant-tabs-nav-list',
    recalculateIntersectionCounter
  )

  const lastFittingItemIndex = useIntersectionChildren(
    tabsRef,
    buttonMoreSize + extraContentWidthWithGap,
    '.ant-tabs-nav-list',
    recalculateIntersectionCounter
  )

  if (intersectionItemIndexWithoutMoreButton === undefined || lastFittingItemIndex === undefined) {
    return tabs.length
  }

  return lastFittingItemIndex
}
