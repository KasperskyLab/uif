import React, { FC, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface LifecycleObserverProps {
  enabled?: boolean;
  onMount?: (id: string) => void;
  onReady?: (id: string) => void;
  onUnmount?: (id: string) => void;
}

export const LifecycleObserver: FC<LifecycleObserverProps> = ({ children, onMount, onReady, onUnmount, enabled }) => {
  const idRef = useRef(uuidv4())

  useEffect(() => {
    if (!enabled) {
      return
    }

    const currentId = idRef.current
    onMount?.(currentId)

    const timeoutId = setTimeout(() => {
      onReady?.(idRef.current)
    })

    return () => {
      clearTimeout(timeoutId)
      onUnmount?.(idRef.current)
    }
  }, [onMount, onReady, onUnmount, enabled])

  return <>{children}</>
}
