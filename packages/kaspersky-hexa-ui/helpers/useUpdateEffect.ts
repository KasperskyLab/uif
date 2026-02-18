import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export function useUpdateEffect (callback: EffectCallback, dependencies?: DependencyList) {
  const componentMountRef = useRef(false)

  useEffect(() => {
    if (componentMountRef.current) {
      return callback()
    } else {
      componentMountRef.current = true
    }
  }, dependencies)
}
