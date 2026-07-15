import cn from 'classnames'
import isEqual from 'lodash/isEqual'
import React, { useEffect, useState } from 'react'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  SortStart
} from 'react-sortable-hoc'

import { DragDrop } from '@kaspersky/hexa-ui-icons/16'

import { EmptyDashComponent } from '../modules/EmptyCellDash'

import { TableModule } from './index'

const DragHandle = sortableHandle(() => (
  <span className="drag-handle-container">
    <DragDrop className="drag-handle" />
  </span>
))
const SortableItem = sortableElement((props: any) => <tr {...props} />)
const SortableContainer = sortableContainer((props: any) => (
  <tbody {...props} />
))

const arrayMove = (array: any[], from: number, to: number) => {
  const arr = [...array]
  const endIndex = to < 0 ? arr.length + to : to
  const [item] = arr.splice(from, 1)
  arr.splice(endIndex, 0, item)
  return arr
}

const syncDraggingRowLayout = (sourceRow: HTMLElement, helperRow: HTMLElement) => {
  const sourceCells = Array.from(sourceRow.children) as HTMLElement[]
  const helperCells = Array.from(helperRow.children) as HTMLElement[]

  const rowWidth = sourceRow.getBoundingClientRect().width
  const cellWidths = sourceCells.map(cell => cell.getBoundingClientRect().width)

  helperRow.style.width = `${rowWidth}px`
  helperRow.style.minWidth = `${rowWidth}px`
  helperRow.style.maxWidth = `${rowWidth}px`
  helperRow.style.boxSizing = 'border-box'

  cellWidths.forEach((width, index) => {
    const helperCell = helperCells[index]

    if (!helperCell) {
      return
    }

    helperCell.style.width = `${width}px`
    helperCell.style.minWidth = `${width}px`
    helperCell.style.maxWidth = `${width}px`
    helperCell.style.boxSizing = 'border-box'
  })
}

const DRAG_HANDLE_HOVER_OPACITY_VAR = '--drag-handle-hover-opacity'

const setDragHandleHoverHidden = (isHidden: boolean, body: HTMLElement) => {
  if (isHidden) {
    body.style.setProperty(DRAG_HANDLE_HOVER_OPACITY_VAR, '0')
  } else {
    body.style.removeProperty(DRAG_HANDLE_HOVER_OPACITY_VAR)
  }
}

export const DraggableTable: TableModule = (Component) => function DraggableModule (props: any) {
  const rowsRef = React.useRef(props.dataSource ? [...props.dataSource] : [])
  const [columns, setColumns] = useState([...props.columns])
  const [components, setComponents] = useState({ ...props.components })

  // TODO: переделать логику с выставлением данных в useEffect, заменить на однокоммитные операции (useMemo) #10082646
  useEffect(() => {
    if (
      props.useDragDrop &&
      props.dataSource &&
      !isEqual(props.dataSource, rowsRef.current)
    ) {
      const newRows = [...props.dataSource]
      newRows.forEach((row, index) => {
        row.index = index
      })
      rowsRef.current = newRows
    }
  }, [props.dataSource, props.useDragDrop])

  useEffect(() => {
    if (props.useDragDrop && props.columns.length) {
      const firstColumn = props.columns[0]
      setColumns([
        {
          ...firstColumn,
          render: (text: string, record: any, index: number) => (
            <>
              <DragHandle />
              {firstColumn.render
                ? firstColumn.render(text, record, index)
                : firstColumn.hasEmptyCellDash && (text === undefined || text === null || String(text).trim() === '')
                  ? <EmptyDashComponent />
                  : text
              }
            </>
          )
        },
        ...props.columns.slice(1)
      ])
    }
  }, [props.useDragDrop, props.columns])

  useEffect(() => {
    if (props.useDragDrop) {
      const helperContainer = document.querySelector('.row-dragging-container') as HTMLElement
      const body = document.body

      const onSortStart = ({ node }: SortStart) => {
        body.style.userSelect = 'none'
        const helper = document.querySelector('.row-dragging') as HTMLElement
        setDragHandleHoverHidden(true, body)

        if (!helper) return
        syncDraggingRowLayout(node as HTMLElement, helper)

        props.onDragStart?.(rowsRef.current)

      }

      const onSortEnd = ({ oldIndex, newIndex }: any) => {
        body.style.userSelect = 'auto'
        const newRows = arrayMove(rowsRef.current, oldIndex, newIndex)
        rowsRef.current = newRows
        setDragHandleHoverHidden(false, body)

        props.onDragEnd?.(newRows)
      }

      const DraggableContainer = (props: any) => (
        <SortableContainer
          useDragHandle
          disableAutoscroll
          helperClass="row-dragging"
          onSortStart={onSortStart}
          onSortEnd={onSortEnd}
          helperContainer={helperContainer}
          axis="y"
          lockAxis="y"
          {...props}
        />
      )

      const DraggableBodyRow = (props: any) => {
        const index = rowsRef.current.findIndex(
          (x) => x.key === props['data-row-key']
        )

        return <SortableItem index={index} {...props} />
      }

      setComponents({
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow
        }
      })

      return () => {
        body.style.userSelect = 'auto'
      }
    }
  }, [rowsRef, props.useDragDrop])

  if (props.useDragDrop) {
    return (
      <Component
        {...props}
        dataSource={rowsRef.current}
        columns={columns}
        components={components}
        className={cn(props.className, 'table-draggable', { 'table-row-selection': !!props.rowSelection })}
      />
    )
  } else {
    return <Component {...props} />
  }
}
