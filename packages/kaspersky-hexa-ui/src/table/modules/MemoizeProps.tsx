import isEqual from 'lodash/isEqual'
import React, { ComponentProps, useEffect, useRef } from 'react'

import { TableRecord } from '../types'

import { TableComponent } from './index'

function replaceWithPrevProps<T> (keys: (keyof T)[], prev: T, current: T): Partial<T> {
  const out: Partial<T> = {}

  for (const key of keys) {
    if (prev[key] === current[key]) {
      continue
    }

    if (isEqual(prev[key], current[key])) {
      out[key] = prev[key]
    }
  }

  return out
}

export const MemoizeProps = <T extends TableRecord = TableRecord> (...keys: (keyof ComponentProps<TableComponent<T>>)[]) => (
  Component: TableComponent<T>
): TableComponent<T> => function MemoizePropsModule (props) {
  const prevProps = useRef(props)
  const replacement = replaceWithPrevProps(keys, prevProps.current, props)
  prevProps.current = { ...props, ...replacement }

  const replacementKeys = Object.keys(replacement)

  useEffect(() => {
    if (replacementKeys.length > 0) {
      console.error(`[hexa-ui][Table]: These props ${replacementKeys.join(', ')} have the same value as in the previous render, but different references. Please, memoize them.`)
    }
  }, [replacementKeys.length])

  return <Component {...prevProps.current} />
}
