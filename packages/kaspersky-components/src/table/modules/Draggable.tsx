import React, { useEffect, useState } from 'react'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle
} from 'react-sortable-hoc'
import { Icon } from '../../icon'
import { TableModule } from '.'
import { isEqual } from 'lodash'
import cn from 'classnames'

const DragHandle = sortableHandle(() => (
  <span>
    <Icon size="small" name="DragDrop" className="drag-handle" />
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

export const DraggableTable: TableModule = (Component) => (props: any) => {
  const rowsRef = React.useRef(props.dataSource ? [...props.dataSource] : [])
  const [columns, setColumns] = useState([...props.columns])
  const [components, setComponents] = useState({ ...props.components })

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
          render: (text: string, record: any, index: number) => <>
            <DragHandle />
            {firstColumn.render
              ? firstColumn.render(text, record, index)
              : text}
          </>
        },
        ...props.columns.slice(1)
      ])
    }
  }, [props.useDragDrop, props.columns])

  useEffect(() => {
    if (props.useDragDrop) {
      const helperContainer = document.querySelector('.row-dragging-container')

      const onSortEnd = ({ oldIndex, newIndex }: any) => {
        const newRows = arrayMove(rowsRef.current, oldIndex, newIndex)
        rowsRef.current = newRows
        if (props.onDragEnd && typeof props.onDragEnd === 'function') {
          props.onDragEnd(newRows)
        }
      }

      const DraggableContainer = (props: any) => (
        // @ts-ignore
        <SortableContainer
          useDragHandle
          disableAutoscroll
          helperClass="row-dragging"
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
        // @ts-ignore
        return <SortableItem index={index} {...props} />
      }

      setComponents({
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow
        }
      })
    }
  }, [rowsRef, props.useDragDrop])

  if (props.useDragDrop) {
    return (
      <Component
        {...props}
        dataSource={rowsRef.current}
        columns={columns}
        components={components}
        className={cn(props.className, 'table-draggable')}
      />
    )
  } else {
    return <Component {...props} />
  }
}
