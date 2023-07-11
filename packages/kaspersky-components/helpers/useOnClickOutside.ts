import { useEffect, MutableRefObject } from 'react'

type Events = MouseEvent | TouchEvent;

export function useOnClickOutside (
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event?: Events) => void
): void {
  useEffect(() => {
    const listener = (event: Events) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
