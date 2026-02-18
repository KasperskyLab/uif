import { useLayoutEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useDimension = <T extends HTMLElement | null>(ref: React.MutableRefObject<T>, deps?: any[]) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const resizeRef = useRef<any>(null)

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    resizeRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
      })
    })

    resizeRef.current.observe(ref.current)
    setDimensions({ width: ref.current.clientWidth, height: ref.current.clientHeight })
    return () => {
      if (resizeRef.current) resizeRef.current.disconnect()
    }
  }, [ref, JSON.stringify(deps)])
  return dimensions
}

export default useDimension
