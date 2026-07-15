import React, { useEffect, useRef } from 'react'

export function useClickOutside <T extends HTMLElement> (element: React.MutableRefObject<T | null>, callback: (event: MouseEvent) => void): void {
  const memorizedCallback = useRef(callback)

  useEffect(() => {
    memorizedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handler = (e: MouseEvent): void => {
      if (!element.current) {
        return
      }
      if (!element.current.contains(e.target as Node | null)) {
        memorizedCallback.current(e)
      }
    }
    document.addEventListener('click', handler)

    return () => document.removeEventListener('click', handler)
  }, [])
}
