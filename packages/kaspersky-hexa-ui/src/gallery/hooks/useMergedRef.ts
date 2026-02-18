import React from 'react'

export const useMergedRef = <T>(...refs: React.Ref<T>[]): React.RefCallback<T> => {
  return React.useCallback(
    (element: T) => {
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i]
        if (typeof ref === 'function') ref(element)
        else if (ref && typeof ref === 'object') {
          (ref as React.MutableRefObject<T>).current = element
        }
      }
    },
    refs
  )
}
