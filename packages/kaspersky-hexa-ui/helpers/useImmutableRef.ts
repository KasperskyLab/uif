import { RefObject, useCallback, useState } from 'react'

export function useImmutableRef <T = Element> (): [RefObject<T>, (value: T) => void] {
  const [ref, setRef] = useState<RefObject<T>>({ current: null })
  const callback = useCallback((node: T) => setRef({ current: node }), [])

  return [ref, callback]
}
