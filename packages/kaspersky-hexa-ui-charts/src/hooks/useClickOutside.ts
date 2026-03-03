import { useEffect, useRef } from 'react'

export function useClickOutside <T extends HTMLElement> (element: T | null, callback: (e: Event) => void): void {
  const memorizedCallback = useRef(callback)
  const memorizedElement = useRef(element)

  useEffect(() => {
    memorizedCallback.current = callback
  }, [callback])

  useEffect(() => {
    memorizedElement.current = element
  }, [element])

  useEffect(() => {
    const handler = (e: Event): void => {
      if (!memorizedElement.current?.contains(e.target as Node | null)) {
        memorizedCallback.current(e)
      }
    }
    document.addEventListener('click', handler)

    return () => document.removeEventListener('click', handler)
  }, [])
}
