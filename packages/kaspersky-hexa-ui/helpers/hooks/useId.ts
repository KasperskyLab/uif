import { useMemo } from 'react'

import { generateId } from '../generateId'

// TODO replace with react 18 useId
export function useId (): string {
  return useMemo(() => generateId(), [])
}
