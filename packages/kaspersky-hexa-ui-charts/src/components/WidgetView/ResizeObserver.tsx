import { debounce } from 'lodash'
import React, { Children, cloneElement, FC, isValidElement, useEffect, useMemo, useRef, useState } from 'react'

import { Loader } from '@kaspersky/hexa-ui'
import { Size } from '@kaspersky/hexa-ui/design-system'
import { useResizeObserver } from '@kaspersky/hexa-ui/helpers/useResizeObserver'

const defaultDebounce = 200

export const ResizeObserver: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const [size, setSize] = useState<{ width: number; height: number }>()
  const [loading, setLoading] = useState<boolean>(!size)
  const ref = useRef<HTMLDivElement>(null)
  const { height, width } = useResizeObserver(ref) || {}

  const debouncedSetSize = useMemo(() => {
    return debounce((size) => {
      setSize(size)
      setLoading(false)
    }, defaultDebounce)
  }, [])

  useEffect(() => {
    setLoading(true)
    debouncedSetSize({ width, height })
  }, [debouncedSetSize, height, width])

  const childrenWithSize = useMemo(
    () =>
      size
        ? Children.toArray(children).map((ch) => {
          if (isValidElement(ch)) {
            return cloneElement(ch, { ...ch.props, height: Math.floor(size.height), width: Math.floor(size.width) })
          }

          return ch
        })
        : null,
    [children, size]
  )

  return (
    <div {...props} ref={ref}>
      {loading ? <Loader size={Size.Medium} centered /> : childrenWithSize}
    </div>
  )
}
