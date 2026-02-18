import { RefObject, useMemo } from 'react'

import { useResizeObserver } from './useResizeObserver'

/** The hook calculates the intersection of the container and its children, returns the index of last fitting child

 @param ref External container ref
 @param padding Padding to consider when intersecting
 @param wrapperQuerySelector selector of internal container
 @param renderCounter flag to trigger the recalculation
 */
export const useIntersectionChildren = (ref: RefObject<Element>, padding = 0, wrapperQuerySelector?: string, renderCounter?: number): number | undefined => {
  const { right: containerRight } = useResizeObserver(ref) ?? { right: 0 }

  return useMemo<number | undefined>(() => {
    if (!ref.current) {
      return undefined
    }

    const container = wrapperQuerySelector ? ref.current.querySelector(wrapperQuerySelector) : ref.current

    if (!container) {
      return undefined
    }

    const res = Array.from(container.children)
      .findIndex((child) => child.getBoundingClientRect().right + padding > container.getBoundingClientRect().right)

    return res === -1 ? undefined : Math.max(res - 1, 0)
  }, [containerRight, ref.current, padding, renderCounter])
}
