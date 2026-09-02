import { useRef } from 'react'

export const useStableRows = <T,>(rows?: T[]): T[] | undefined => {
  const previous = useRef(rows)

  const unchanged = previous.current === rows || (
    !!previous.current &&
    !!rows &&
    previous.current.length === rows.length &&
    previous.current.every((row, i) => row === rows[i])
  )

  if (!unchanged) previous.current = rows
  return previous.current
}