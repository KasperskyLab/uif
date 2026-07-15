import { RefObject, useLayoutEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const resizeThrottle = (callback: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  let rafId: number | null = null

  const run = () => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      timer = null
      if (rafId !== null) return

      rafId = requestAnimationFrame(() => {
        rafId = null
        callback()
      })
    }, delay)
  }

  const cancel = () => {
    if (timer) clearTimeout(timer)
    if (rafId !== null) cancelAnimationFrame(rafId)
    timer = null
    rafId = null
  }

  return { run, cancel }
}

export const useResizeObserver = (ref: RefObject<Element>, delay = 150): DOMRect | undefined => {
  const [dimensions, setDimensions] = useState<DOMRect>()

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const update = () => {
      setDimensions(element.getBoundingClientRect())
    }

    const throttledUpdate = resizeThrottle(update, delay)

    update()

    const resizeObserver = new ResizeObserver(() => {
      throttledUpdate.run()
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
      throttledUpdate.cancel()
    }
  }, [ref, delay])

  return dimensions as DOMRect
}
