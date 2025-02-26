import { useMemo } from 'react'

export const useOverflowCount = (count: number | undefined, overflowCount: number) => {
  return useMemo(() => {
    if (count === undefined) return undefined

    return count > overflowCount ? `+${overflowCount}` : `${count}`
  }, [count, overflowCount])
}
