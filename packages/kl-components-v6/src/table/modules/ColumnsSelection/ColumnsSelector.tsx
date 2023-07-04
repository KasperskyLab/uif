import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle
} from 'react-sortable-hoc'
import { Checkbox } from '../../../checkbox'
import { Icon } from '../../../icon'
import { Text } from '../../../typography'
import { Locale } from '../../../locale'
import { SelectorWrapper } from './SelectorWrapper'
import { SPACES } from '../../../../design-system/theme/themes/variables'
import { isColumnReadonly } from '@src/table/helpers'

const DragHandle = sortableHandle(() => (
  <span>
    <Icon size="small" name="DragDrop" />
  </span>
))

const ItemsContainer = styled.div``

const Dragger = styled.div`
  cursor: pointer;
  justify-self: flex-end;
`
const ItemLabel = styled.div`
  flex-grow: 1;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
  z-index: 700;
  margin-top: ${SPACES[6]}px;
  align-items: center;

  p {
    margin-top: ${SPACES[1]}px;
    margin-left: ${SPACES[4]}px;
  }
  svg {
    margin-top: ${SPACES[1]}px;
  }
`

const CheckboxRow = styled.div`
  display: flex;
  gap: ${SPACES[4]}px;
  align-items: center;
`

interface SortableItemProps {
  column: any & { show: boolean, title: string },
  onChange: (column: any) => void
}

const SortableItem = sortableElement(
  ({ value }: { value: SortableItemProps }) => (
    <Item className="selector-item">
      <CheckboxRow>
        <Checkbox
          checked={value.column.show}
          onChange={() => value.onChange(value.column)}
        />
        <ItemLabel>
          <Text type='BTM3'>{value.column.title}</Text>
        </ItemLabel>
      </CheckboxRow>
      <Dragger>
        {/*
 // @ts-ignore */}
        <DragHandle />
      </Dragger>
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

function hasSelected (columns: any[]) {
  return columns.reduce(
    (acc: boolean, current: any) => (acc = acc || current.show),
    false
  )
}

function areAllSelected (columns: any[]) {
  const filteredColumns = columns.filter(column => !isColumnReadonly(column))
  return filteredColumns.every(({ show }) => show)
}

export interface ColumnsSelectorProps {
  columns: any[],
  setColumns: (value: any[]) => void,
  onSave: (value: any[]) => void,
  onClose: () => void
}

export const ColumnsSelector = ({
  columns,
  setColumns,
  onSave,
  onClose
}: ColumnsSelectorProps) => {
  const [selectAll, setAllSelected] = useState(areAllSelected(columns))
  const [isSaveDisabled, setSaveDisabled] = useState(!hasSelected(columns))

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
    setSaveDisabled(!hasSelected(newColumns))
  }

  const onColumnSelect = (selectedColumn: any) => {
    const columnIndex = columns.findIndex(
      (column) => column.dataIndex?.localeCompare(selectedColumn.dataIndex) === 0
    )
    const newColumns = [...columns]

    if (selectedColumn.hideColumnAvailable) {
      newColumns[columnIndex].show = !newColumns[columnIndex].show
    } else {
      newColumns[columnIndex].show = true
    }

    setColumns(newColumns)
    setSaveDisabled(!hasSelected(newColumns))
    setAllSelected(areAllSelected(newColumns))
  }

  const filteredColumns = useMemo(() => columns.filter(column => !isColumnReadonly(column)), [columns])

  return (
    <SelectorWrapper
      isSaveDisabled={isSaveDisabled}
      onSave={onSave}
      onClose={onClose}
    >
      <Item className="selector-item select-all-item">
        <CheckboxRow>
          <Checkbox checked={selectAll} onChange={onSelectAll} />
          <Text type='BTM3'>
            <Locale localizationKey="table.columnsSettings.selectAll" />
          </Text>
        </CheckboxRow>
      </Item>
      {/*
 // @ts-ignore */}
      <SortableContainer distance={2} onSortEnd={onSortEnd}>
        {filteredColumns.map((value, index) => (
          // @ts-ignore
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
