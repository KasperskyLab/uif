import { useEffect, useRef, useState } from 'react'

type UseTextReducer = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const useTextReducer = ({ containerRef }: UseTextReducer) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const resizeObserver = new ResizeObserver(() => {
      if (!ref.current) return
      const isEllipsisActive = ref.current.offsetWidth < ref.current.scrollWidth ||
        ref.current.offsetHeight < ref.current.scrollHeight
      setHasOverflow(isEllipsisActive)
    })
    resizeObserver.observe(container)
    return () => {
      resizeObserver.disconnect()
    }
  }, [containerRef])

  return { ref, hasOverflow }
}

export default useTextReducer