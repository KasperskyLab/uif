import { useLayoutEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useDimension = <T extends HTMLElement | null>(element: T | null, deps?: any[]) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const resizeRef = useRef<any>(null)

  useLayoutEffect(() => {
    if (!element) {
      return
    }

    resizeRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
      })
    })

    resizeRef.current.observe(element)
    setDimensions({ width: element.clientWidth, height: element.clientHeight })
    return () => {
      if (resizeRef.current) resizeRef.current.disconnect()
    }
  }, [element, JSON.stringify(deps)])
  return dimensions
}

export default useDimension
