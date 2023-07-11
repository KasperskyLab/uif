import { RefObject, useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

type Dimensions = {
  width: number,
  height: number,
} | undefined

export const useResizeObserver = (ref: RefObject<Element>): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>()
  useEffect(() => {
    const observeTarget = ref.current
    if (observeTarget === null) return

    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect)
      })
    })
    resizeObserver.observe(observeTarget)
    return () => {
      resizeObserver.unobserve(observeTarget)
    }
  }, [ref])

  return dimensions || ref.current?.getBoundingClientRect()
}
