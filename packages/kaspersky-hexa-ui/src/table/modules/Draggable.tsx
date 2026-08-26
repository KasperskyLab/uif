import isEqual from 'lodash/isEqual'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  SortStart
} from 'react-sortable-hoc'

import { DragDrop } from '@kaspersky/hexa-ui-icons/16'

import { ITableProps, TableRecord } from '..'

import { TableComponent } from './index'

export const DND_COLUMN_KEY = 'dnd'

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

export const DraggableTable = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function DraggableTableModule (props) {
  const rowsRef = useRef<T[]>(props.dataSource ? [...props.dataSource] : [])
  const [columns, setColumns] = useState(props.columns)

  const onDragStartRef = useRef(props.onDragStart)
  onDragStartRef.current = props.onDragStart
  const onDragEndRef = useRef(props.onDragEnd)
  onDragEndRef.current = props.onDragEnd

  useEffect(() => {
    if (
      props.useDragDrop &&
      props.dataSource &&
      !isEqual(props.dataSource, rowsRef.current)
    ) {
      rowsRef.current = props.dataSource.map((row: any, index: number) => ({ ...row, index }))
    }
  }, [props.dataSource, props.useDragDrop])

  useEffect(() => {
    if (props.useDragDrop && props.columns?.length) {
      setColumns([
        {
          title: '',
          key: DND_COLUMN_KEY,
          dataIndex: DND_COLUMN_KEY,
          width: 0,
          resizing: {
            disabled: true
          },
          render: (_, row: TableRecord) => (
            !row._disabled && !row._outOfDndContext && <DragHandle />
          ),
          onCell: () => ({
            className: 'hexa-ui-dnd-column'
          })
        },
        ...props.columns
      ])
    }
  }, [props.useDragDrop, props.columns])

  const onSortStart = useCallback(({ node }: SortStart) => {
    const body = document.body
    body.style.userSelect = 'none'
    const helper = document.querySelector('.row-dragging') as HTMLElement
    setDragHandleHoverHidden(true, body)

    if (!helper) return
    syncDraggingRowLayout(node as HTMLElement, helper)

    onDragStartRef.current?.(rowsRef.current)
  }, [])

  const onSortEnd = useCallback(({ oldIndex, newIndex }: any) => {
    const body = document.body
    body.style.userSelect = 'auto'
    const newRows = arrayMove(rowsRef.current, oldIndex, newIndex)
    rowsRef.current = newRows
    setDragHandleHoverHidden(false, body)

    onDragEndRef.current?.(newRows)
  }, [])

  const components = useMemo<ITableProps<T>['components']>(() => {
    if (!props.useDragDrop) return props.components

    // any in original type from rc-table
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DraggableContainer = (containerProps: any) => (
      <SortableContainer
        useDragHandle
        disableAutoscroll
        helperClass="row-dragging"
        onSortStart={onSortStart}
        onSortEnd={onSortEnd}
        helperContainer={document.querySelector('.row-dragging-container') as HTMLElement}
        axis="y"
        lockAxis="y"
        {...containerProps}
      />
    )

    // any in original type from rc-table
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DraggableBodyRow = (rowProps: any) => {
      const index = rowsRef.current.findIndex(
        (x) => x.key === rowProps['data-row-key']
      )

      const isDisabled = rowsRef.current[index]._disabled

      if (rowsRef.current[index]._outOfDndContext) {
        return <tr {...rowProps} />
      }

      return <SortableItem disabled={isDisabled} index={index} {...rowProps} />
    }

    return {
      body: {
        wrapper: DraggableContainer,
        row: DraggableBodyRow
      }
    }
  }, [props.useDragDrop, props.components, onSortStart, onSortEnd])

  useEffect(() => () => {
    document.body.style.userSelect = 'auto'
  }, [])

  if (props.useDragDrop) {
    return (
      <Component
        {...props}
        dataSource={rowsRef.current}
        columns={columns}
        components={components}
        className={props.className}
      />
    )
  } else {
    return <Component {...props} />
  }
}
