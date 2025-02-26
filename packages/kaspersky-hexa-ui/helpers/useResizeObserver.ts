import { RefObject, useEffect, useLayoutEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useResizeObserver = (ref: RefObject<Element>): DOMRect => {
  const [dimensions, setDimensions] = useState<DOMRect>()

  useLayoutEffect(() => {
    setDimensions(ref.current?.getBoundingClientRect())
  }, [ref.current])

  useEffect(() => {
    const observeTarget = ref.current
    if (observeTarget === null) return

    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.target.getBoundingClientRect())
      })
    })
    resizeObserver.observe(observeTarget)
    return () => {
      resizeObserver.unobserve(observeTarget)
    }
  }, [ref.current])

  return dimensions as DOMRect
}
