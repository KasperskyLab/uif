import HoverContext from 'rc-table/es/context/HoverContext'
import { useMemo } from 'react'
import React from 'react'

import { ITableProps, TableRecord } from '..'

import { createOverflowCell } from './reductions/CellOverflow'
import { useCellTooltip } from './reductions/CellTooltip'

const FROZEN_HOVER = { startRow: -1, endRow: -1, onHover: () => undefined }

type BodyComponents = Exclude<NonNullable<ITableProps<TableRecord>['components']>['body'], undefined | ((...args: never[]) => unknown)>

const createFrozenHoverWrapper = (Base: NonNullable<BodyComponents['wrapper']> | 'tbody') =>
  function TableBody (wrapperProps: Record<string, unknown>) {
    const { tooltip, bodyProps } = useCellTooltip()

    return (
      <HoverContext.Provider value={FROZEN_HOVER}>
        <Base {...wrapperProps} {...bodyProps} />
        {tooltip}
      </HoverContext.Provider>
    )
  }

// antd adds the .ant-table-cell-hover class to every cell, which causes expensive re-renders of multiple rows.
export const useBodyWithoutHover = <T extends TableRecord>(components?: ITableProps<T>['components']) => {
  const bodyFromProps = typeof components?.body === 'function' ? undefined : components?.body

  const BaseWrapper = bodyFromProps?.wrapper ?? 'tbody'
  const BaseCell = bodyFromProps?.cell

  const Wrapper = useMemo(() => createFrozenHoverWrapper(BaseWrapper), [BaseWrapper])

  const cell = useMemo(() => (
    createOverflowCell(BaseCell as Parameters<typeof createOverflowCell>[0])
  ), [BaseCell])

  return useMemo(() => (
    typeof components?.body === 'function'
      ? components
      : { ...components, body: { ...bodyFromProps, wrapper: Wrapper, cell } }
  ), [components, bodyFromProps, Wrapper, cell])
}
