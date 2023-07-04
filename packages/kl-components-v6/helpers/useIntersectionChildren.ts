import { RefObject, useMemo } from 'react'
import { useResizeObserver } from './useResizeObserver'

/** Find position last inside element */
export const useIntersectionChildren = (ref: RefObject<Element>) => {
  const { width } = useResizeObserver(ref) ?? { width: 0 }

  return useMemo<number | undefined>(() => {
    const container = ref.current
    if (container === null) return undefined

    const children = new Array(container.children.length)
      .fill(null)
      .map((_, i) => container.children[i])

    const res = children.findIndex((child) => child.getBoundingClientRect().right > width)
    return res === -1 ? undefined : Math.max(res - 1, 0)
  }, [width])
}
