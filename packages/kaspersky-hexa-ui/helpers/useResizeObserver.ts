import { RefObject, useLayoutEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const resizeThrottle = (callback: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  let rafId: number | null = null

  return () => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      if (rafId !== null) return

      rafId = requestAnimationFrame(() => {
        rafId = null
        callback()
      })
    }, delay)
  }
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
      throttledUpdate()
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [ref, delay])

  return dimensions as DOMRect
}
