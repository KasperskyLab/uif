import { useBodyDirection } from '@helpers/bodyDirection'
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
  const { isRtl } = useBodyDirection()

  const { left: containerStart, right: containerEnd, width: containerWidth } =
    useResizeObserver(ref, delay) ?? { left: 0, right: 0, width: 0 }

  const hasOverflow = (el: Element, padding: number, wrapperEdge: number) =>
    isRtl
      ? el.getBoundingClientRect().left - padding < wrapperEdge
      : el.getBoundingClientRect().right + padding > wrapperEdge

  const wrapperEdge = isRtl ? containerStart : containerEnd

  return useMemo<number | undefined>(() => {
    if (!ref.current) {
      return undefined
    }

    const wrapper = wrapperQuerySelector ? ref.current.querySelector(wrapperQuerySelector) : ref.current
    if (!wrapper) return undefined

    const children = Array.from(wrapper.children)
    const overflowIdx = children.findIndex(child => hasOverflow(child, padding, wrapperEdge))

    if (overflowIdx === -1) return children.length - 1

    return Math.max(overflowIdx - 1, 0)
  }, [
    containerStart,
    containerEnd,
    containerWidth,
    ref.current,
    padding,
    renderCounter,
    wrapperQuerySelector,
    isRtl
  ])
}
