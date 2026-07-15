import { RefObject, useMemo } from 'react'

import { useResizeObserver } from './useResizeObserver'

/** The hook calculates the intersection of the container and its children, returns the index of last fitting child

 @param ref External container ref
 @param padding Padding to consider when intersecting
 @param wrapperQuerySelector selector of internal container
 @param renderCounter flag to trigger the recalculation
 */
export const useIntersectionChildren = (
  ref: RefObject<Element>,
  padding = 0,
  wrapperQuerySelector?: string,
  renderCounter?: number,
  delay: number = 150
): number | undefined => {
  const { right: containerRight, width: containerWidth } = useResizeObserver(ref, delay) ?? { right: 0, width: 0 }

  return useMemo<number | undefined>(() => {
    if (!ref.current) {
      return undefined
    }

    const wrapper = wrapperQuerySelector ? ref.current.querySelector(wrapperQuerySelector) : ref.current

    if (!wrapper) {
      return undefined
    }

    const wrapperRight = wrapper.getBoundingClientRect().right

    const res = Array.from(wrapper.children)
      .findIndex((child) => child.getBoundingClientRect().right + padding > wrapperRight)

    return res === -1 ? undefined : Math.max(res - 1, 0)
  }, [containerRight, containerWidth, ref.current, padding, renderCounter])
}
