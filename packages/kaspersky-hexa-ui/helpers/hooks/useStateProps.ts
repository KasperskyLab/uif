import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export type SetState<T> = Dispatch<SetStateAction<T>>

export const useStateProps = <T>(propsState: T): [T, SetState<T>] => {
  const [state, setState] = useState<T>(propsState)

  useEffect(() => {
    setState(propsState)
  }, [propsState])

  return [state, setState]
}
