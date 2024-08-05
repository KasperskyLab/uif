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
    const container = wrapperQuerySelector ? ref.current?.querySelector(wrapperQuerySelector) : ref.current
    if (container === null || container === undefined) return undefined

    const children = new Array(container.children.length)
      .fill(null)
      .map((_, i) => container.children[i])
    const res = children.findIndex((child) => child.getBoundingClientRect().right + padding > containerRight)
    return res === -1 ? undefined : Math.max(res - 1, 0)
  }, [containerRight, ref, padding, renderCounter])
}
