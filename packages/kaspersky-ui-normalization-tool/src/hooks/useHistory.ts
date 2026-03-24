import { useState, useCallback, useRef } from 'react'

const MAX_HISTORY = 50

export interface UseHistoryResult<T> {
  state: T
  setState: (value: T | ((prev: T) => T)) => void
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
  resetHistory: (initial: T) => void
}

export function useHistory<T>(initial: T): UseHistoryResult<T> {
  const [state, setStateRaw] = useState<T>(initial)
  const pastRef = useRef<T[]>([])
  const futureRef = useRef<T[]>([])
  const stateRef = useRef<T>(initial)
  stateRef.current = state

  const [, forceRender] = useState(0)

  const setState = useCallback((value: T | ((prev: T) => T)) => {
    const prev = stateRef.current
    const next = typeof value === 'function' ? (value as (p: T) => T)(prev) : value
    pastRef.current = [...pastRef.current.slice(-(MAX_HISTORY - 1)), prev]
    futureRef.current = []
    stateRef.current = next
    setStateRaw(next)
    forceRender((n) => n + 1)
  }, [])

  const undo = useCallback(() => {
    if (pastRef.current.length === 0) return
    const prev = pastRef.current[pastRef.current.length - 1]
    pastRef.current = pastRef.current.slice(0, -1)
    futureRef.current = [stateRef.current, ...futureRef.current]
    stateRef.current = prev
    setStateRaw(prev)
    forceRender((n) => n + 1)
  }, [])

  const redo = useCallback(() => {
    if (futureRef.current.length === 0) return
    const next = futureRef.current[0]
    futureRef.current = futureRef.current.slice(1)
    pastRef.current = [...pastRef.current, stateRef.current]
    stateRef.current = next
    setStateRaw(next)
    forceRender((n) => n + 1)
  }, [])

  const resetHistory = useCallback((initial: T) => {
    pastRef.current = []
    futureRef.current = []
    stateRef.current = initial
    setStateRaw(initial)
    forceRender((n) => n + 1)
  }, [])

  return {
    state,
    setState,
    undo,
    redo,
    canUndo: pastRef.current.length > 0,
    canRedo: futureRef.current.length > 0,
    resetHistory,
  }
}
