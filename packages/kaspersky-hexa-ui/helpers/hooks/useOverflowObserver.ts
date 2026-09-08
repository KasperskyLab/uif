import { useResizeObserver } from '@helpers/useResizeObserver'
import {
  DependencyList,
  RefObject,
  useLayoutEffect,
  useState
} from 'react'

import { SetState } from './useStateProps'

export function useOverflowObserver<T extends HTMLElement> (
  ref: RefObject<T>,
  measure: (element: T) => boolean,
  deps: DependencyList = [],
  delay?: number
): [boolean, SetState<boolean>] {
  const [overflow, setOverflow] = useState(false)
  const dimensions = useResizeObserver(ref, delay)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element || !dimensions) return
    setOverflow(measure(element))

  }, [dimensions, ...deps])

  return [overflow, setOverflow]
}
