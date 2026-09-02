import HoverContext from 'rc-table/es/context/HoverContext'
import { useMemo } from 'react'
import React from 'react'

import { ITableProps, TableRecord } from '..'

const FROZEN_HOVER = { startRow: -1, endRow: -1, onHover: () => undefined }

// antd adds the .ant-table-cell-hover class to every cell, which causes expensive re-renders of multiple rows.
export const useBodyWithoutHover = <T extends TableRecord>(components?: ITableProps<T>['components']) => useMemo(() => {
  const body = components?.body

  // A function body is a custom scroll body (virtual tables); it renders its own
  // rows and must not be wrapped.
  if (typeof body === 'function') return components

  const BaseWrapper = body?.wrapper ?? 'tbody'
  const Wrapper = (wrapperProps: Record<string, unknown>) => (
    <HoverContext.Provider value={FROZEN_HOVER}>
      <BaseWrapper {...wrapperProps} />
    </HoverContext.Provider>
  )

  return { ...components, body: { ...body, wrapper: Wrapper } }
}, [components])
