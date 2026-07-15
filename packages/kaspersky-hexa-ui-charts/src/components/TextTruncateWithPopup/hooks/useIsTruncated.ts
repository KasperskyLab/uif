import { useEffect, useState } from 'react'

export const useIsTruncated = () => {
  const [isTruncated, setIsTruncated] = useState(false)
  const [node, setNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!node) {
      return
    }

    const checkIsTruncated = () => {
      setIsTruncated(node.scrollWidth > node.clientWidth)
    }

    const resizeObserver = new ResizeObserver(() => {
      checkIsTruncated()
    })

    resizeObserver.observe(node)

    return () => {
      resizeObserver.disconnect()
    }
  }, [node])

  return [setNode, isTruncated] as const
}
