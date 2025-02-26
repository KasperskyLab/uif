import { SPACES } from '@design-system/theme'
import { Checkbox } from '@src/checkbox'
import { Locale } from '@src/locale'
import { Text } from '@src/typography'
import React, { useMemo, useState } from 'react'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle
} from 'react-sortable-hoc'
import styled from 'styled-components'

import { DragDrop } from '@kaspersky/icons/16'

import { isColumnReadonly } from '../../helpers/common'

import { SelectorWrapper } from './SelectorWrapper'

const DragHandleIcon = styled(DragDrop)`
  display: block;
`

const DragHandle = sortableHandle(() => <DragHandleIcon name="DragDrop" />)

const ItemsContainer = styled.div`
  padding-top: 4px;
`

const Dragger = styled.div`
  cursor: pointer;
  justify-self: flex-end;
`
const ItemLabel = styled.div`
  flex-grow: 1;
`

const Item = styled.label`
  cursor: pointer;
  display: flex;
  z-index: 700;
  margin-top: 8px;
  align-items: center;
  line-height: 1;
  gap: 4px;

  &.selector-item-dragging {
    z-index: 1200;
  }

  p {
    margin-top: ${SPACES[1]}px;
    margin-left: ${SPACES[4]}px;
  }
`

const CheckboxRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

interface SortableItemProps {
  column: any & { show: boolean, title: string },
  onChange: (column: any) => void
}

const SortableItem = sortableElement(
  ({ value }: { value: SortableItemProps }) => (
    <Item className="selector-item" data-testid={`selector-item-${value.column.dataIndex}`}>
      <Dragger>
        <DragHandle />
      </Dragger>
      <CheckboxRow>
        <Checkbox
          checked={value.column.show}
          onChange={() => value.onChange(value.column)}
        />
        <ItemLabel>
          <Text type="BTM3">{value.column.title}</Text>
        </ItemLabel>
      </CheckboxRow>
    </Item>
  )
)

const SortableContainer = sortableContainer(
  ({ children }: { children: any }) => {
    return <ItemsContainer>{children}</ItemsContainer>
  }
)

const arrayMoveMutate = (array: any[], from: number, to: number) => {
  const startIndex = from < 0 ? array.length + from : from

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = to < 0 ? array.length + to : to

    const [item] = array.splice(from, 1)
    array.splice(endIndex, 0, item)
  }
}

const arrayMove = (array: any[], from: number, to: number) => {
  array = [...array]
  arrayMoveMutate(array, from, to)
  return array
}

export function hasSelected (columns: any[]): boolean {
  return columns.reduce(
    (acc: boolean, current: any) => (acc = acc || current.show),
    false
  )
}

function areAllSelected (columns: any[]) {
  const filteredColumns = columns.filter((column) => !isColumnReadonly(column))
  return filteredColumns.every(({ show }) => show)
}

export interface ColumnsSelectorProps {
  columns: any[],
  setColumns: (value: any[]) => void
}

export const ColumnsSelector = ({
  columns,
  setColumns
}: ColumnsSelectorProps) => {
  const [selectAll, setAllSelected] = useState(areAllSelected(columns))

  const onSortEnd = ({
    oldIndex,
    newIndex
  }: {
    oldIndex: number,
    newIndex: number
  }) => {
    setColumns(arrayMove(columns, oldIndex, newIndex))
  }

  const onSelectAll = () => {
    const newColumns = columns.map((column) => {
      return isColumnReadonly(column)
        ? column
        : {
            ...column,
            show: column.hideColumnAvailable ? !selectAll : true
          }
    })

    setAllSelected(!selectAll)
    setColumns(newColumns)
  }

  const onColumnSelect = (selectedColumn: any) => {
    const columnIndex = columns.findIndex(
      (column) =>
        column.dataIndex?.localeCompare(selectedColumn.dataIndex) === 0
    )
    const newColumns = [...columns]

    if (selectedColumn.hideColumnAvailable) {
      newColumns[columnIndex].show = !newColumns[columnIndex].show
    } else {
      newColumns[columnIndex].show = true
    }

    setColumns(newColumns)
    setAllSelected(areAllSelected(newColumns))
  }

  const filteredColumns = useMemo(
    () => columns.filter((column) => !isColumnReadonly(column)),
    [columns]
  )

  return (
    <SelectorWrapper>
      <Item className="selector-item select-all-item">
        <CheckboxRow>
          <Checkbox checked={selectAll} onChange={onSelectAll} />
          <Text type="BTM3">
            <Locale localizationKey="table.columnsSettings.selectAll" />
          </Text>
        </CheckboxRow>
      </Item>
      <SortableContainer distance={2} onSortEnd={onSortEnd} helperClass="selector-item-dragging">
        {filteredColumns.map((value, index) => (
          <SortableItem
            key={`item-${value.dataIndex}-${index}`}
            index={index}
            value={{ column: value, onChange: () => onColumnSelect(value) }}
          />
        ))}
      </SortableContainer>
    </SelectorWrapper>
  )
}
