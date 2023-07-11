import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useDimension = <T>(ref: React.MutableRefObject<T>, deps?: any[]) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const resizeRef = useRef<any>(null)

  useEffect(() => {
    resizeRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
      })
    })
    if (ref.current) resizeRef.current.observe(ref.current)
    return () => {
      if (resizeRef.current) resizeRef.current.disconnect()
    }
  }, [ref, JSON.stringify(deps)])
  return dimensions
}

export default useDimension
