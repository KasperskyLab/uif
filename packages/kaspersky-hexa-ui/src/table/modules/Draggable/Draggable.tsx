import { DndContext, DragEndEvent } from '@dnd-kit/core'
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ITableProps, TableRecord } from '@src/table'
import { TableColumn } from '@src/table'
import isEqual from 'lodash/isEqual'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { DragDrop } from '@kaspersky/hexa-ui-icons/16'

import { useTableUpdate } from '../../context/TableContext'

import { TableComponent } from './../index'
import {
  arrayGroupMove,
  findChildrenKey,
  getPropertyPath,
  isOverGroup,
  resolveEmptyGroupCollision,
  resolveLastInGroupCollision
} from './helpers'
import { DraggableRowProps } from './types'

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

const RowContext = React.createContext<RowContextProps>({})

export const DND_COLUMN_KEY = 'dnd'

const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext)
  return (
    <span className="drag-handle-container" ref={setActivatorNodeRef}>
      <DragDrop
        className="drag-handle"
        {...listeners}
      />
    </span>
  )
}

const Row: React.FC<DraggableRowProps> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: props['data-row-key'],
    disabled: String(props['data-row-key']).includes('group_')
  })

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {})
  }

  const contextValue = useMemo<RowContextProps>(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners]
  )

  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  )
}

export const DND_COLUMN = {
  title: '',
  key: DND_COLUMN_KEY,
  dataIndex: DND_COLUMN_KEY,
  width: 0,
  resizing: {
    disabled: true
  },
  render: (_: any, row: TableRecord) => (
    !row._disabled && !row._outOfDndContext && <DragHandle />
  ),
  onCell: () => ({
    className: 'hexa-ui-dnd-column'
  })
}

export const DraggableTable = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function DraggableModule (props: ITableProps<T>) {
  const [columns, setColumns] = useState<TableColumn<T>[]>(props.columns || [])
  const [dataSource, setDataSource] = useState<T[]>(props.dataSource || [])
  const [groupingPropertyPath, setGroupingPropertyPath] = useState<string[]>()

  const components = useMemo(() => ({
    ...props.components,
    body: { ...props.components?.body, row: Row }
  }), [props.components])

  useEffect(() => {
    if (!columns) return
    const newGroupingPropertyPath = getPropertyPath({ groupBy: props.groupBy, columns })
    !isEqual(newGroupingPropertyPath, groupingPropertyPath) && setGroupingPropertyPath(newGroupingPropertyPath)
  }, [props.columns, props.groupBy, columns, groupingPropertyPath])

  useEffect(() => {
    if (props.useDragDrop && props.columns?.length) {
      setColumns([
        DND_COLUMN,
        ...props.columns
      ])
    }
  }, [props.useDragDrop, props.columns])

  useEffect(() => {
    if (!props.useDragDrop) return
    const nextRows = (props.dataSource ?? []).map((row, index) => ({
      ...row,
      index
    }))
    setDataSource(currentRows =>
      isEqual(nextRows, currentRows) ? currentRows : nextRows)
  }, [props.dataSource, props.useDragDrop])

  const onDragStart = useCallback(() => { props.onDragStart?.(dataSource) }, [props, dataSource])

  const onDragEnd = useCallback(({ active, over, collisions }: DragEndEvent) => {
    if (!over || !collisions) return
    const toLastItemInGroup = resolveLastInGroupCollision({ collisions, over, active })
    const resolvedOver = resolveEmptyGroupCollision({ collisions, over, active }) || toLastItemInGroup || over

    if (active.id !== resolvedOver?.id) {
      if (groupingPropertyPath && groupingPropertyPath.length) {
        setDataSource((prevState) => {
          const from = findChildrenKey({ arr: prevState, id: active?.id })
          const to = isOverGroup(resolvedOver.id)
            ? { groupKey: resolvedOver.id as string, groupIndex: 0, itemIndex: 0 }
            : findChildrenKey({
                arr: prevState,
                id: resolvedOver.id,
                forceLastPosition: Boolean(toLastItemInGroup)
              })

          const newRows = from && to && arrayGroupMove({
            array: prevState,
            from,
            to,
            groupingPropertyPath
          }) || prevState
          props.onDragEnd?.(newRows)
          return newRows
        })
      }
      else {
        setDataSource((prevState) => {
          const activeItem = prevState.findIndex((item) => item.key === active?.id)
          const overItem = prevState.findIndex((item) => item.key === over?.id)
          const newRows = arrayMove(prevState, activeItem, overItem)
          props.onDragEnd?.(newRows)
          return newRows
        })
      }
    }
  }, [props, groupingPropertyPath])

  const items = useMemo(() => {
    if (!props.useDragDrop) return []
    return props.groupBy
      ? dataSource.reduce((acc: number[], item) => {
          const childrenKeysArr = item.children?.map((childrenItem) => childrenItem.key) || []
          return acc.concat([item.key, ...childrenKeysArr])
        }, [])
      : dataSource.map((item) => item.key)
  }, [props.groupBy, props.useDragDrop, dataSource])

  const updateContext = useTableUpdate<T>()

  const currentPageRows = props.useDragDrop ? dataSource : props.dataSource

  useEffect(() => (
    updateContext({ currentPageRows })
  ), [updateContext, currentPageRows])

  if (props.useDragDrop) {
    return (
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <Component
            {...props}
            rowKey="key"
            dataSource={dataSource}
            columns={columns}
            components={components}
            className={props.className}
          />
        </SortableContext>
      </DndContext>
    )
  } else {
    return <Component {...props} />
  }
}
