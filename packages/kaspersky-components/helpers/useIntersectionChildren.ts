import { RefObject, useMemo } from 'react'
import { useResizeObserver } from './useResizeObserver'

/** Find position last inside element
 * @param ref Ref element inside witch will be calculations
 * @param padding left paading from end of container for Intersection detect
 * @param wrapperQuerySelector querySelector of parent for Intersection elements
 * @param renderCounter If you need recalculate useMemo
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
