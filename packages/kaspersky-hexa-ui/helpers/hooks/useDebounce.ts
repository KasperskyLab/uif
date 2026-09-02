import { useEffect, useState } from 'react'

const UX_DELAY = 200

export function useDebounce<T = any> (value: T, delay: number = UX_DELAY): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}