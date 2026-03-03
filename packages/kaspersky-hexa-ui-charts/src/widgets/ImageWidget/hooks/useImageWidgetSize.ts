import { useCallback, useLayoutEffect, useState } from 'react'

interface IWidgetSize {
  width: number,
  height: number
}

export const useImageWidgetSize = <T extends HTMLElement>(): {
  ref: (node: T | null) => void,
  size: IWidgetSize
} => {
  const [size, setSize] = useState<IWidgetSize>({ width: 0, height: 0 })
  const [element, setElement] = useState<T | null>(null)

  const ref = useCallback((node: T | null) => {
    if (node) {
      setElement(node)
    }
  }, [])

  useLayoutEffect(() => {
    if (!element) {
      return
    }

    const rect = element.getBoundingClientRect()
    const w = Math.round(rect.width)
    const h = Math.round(rect.height)
    setSize((prev) =>
      prev.width !== w || prev.height !== h ? { width: w, height: h } : prev
    )
  }, [element])

  return { ref, size }
}
