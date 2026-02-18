import { SPACES } from '@design-system/theme'
import { Checkbox } from '@src/checkbox'
import { Locale } from '@src/locale'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import React, { useEffect, useMemo, useState } from 'react'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle
} from 'react-sortable-hoc'
import styled from 'styled-components'

import { DragDrop } from '@kaspersky/hexa-ui-icons/16'

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
  color: var(--action_button--icon--ghost--enabled);
`
const ItemLabel = styled.div`
  flex-grow: 1;

  span{
    font-weight: 400;
    user-select: none;
  }
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

const NoDragIcon = styled.div`
  padding-left: 20px;
`
interface SortableItemProps {
  column: any & { show: boolean, title: string, hideColumnAvailable?: boolean, dataIndex?: number },
  onChange: (column: any) => void
}

type BaseItemProps = {
  value: SortableItemProps
  prefix?: React.ReactNode
}

const BaseItem: React.FC<BaseItemProps> = ({ value, prefix }) => {
  const { column, column: { show, title, dataIndex, hideColumnAvailable } } = value
  const CheckboxRowComponent = (
    <CheckboxRow>
      <Checkbox
        checked={show}
        disabled={!hideColumnAvailable}
        onChange={() => value.onChange(column)}
      />
      <ItemLabel>
        <Text type="BTM3">{title}</Text>
      </ItemLabel>
    </CheckboxRow>
  )
  return (
    <Item className="selector-item" data-testid={`selector-item-${dataIndex}`}>
      {prefix}
      {
        hideColumnAvailable
          ? CheckboxRowComponent
          : (
              <Tooltip text={<Locale localizationKey="table.columnsSettings.columnHideIsUnavailable" />}>
                {CheckboxRowComponent}
              </Tooltip>
            )
      }
    </Item>
  )
}

const SortableItem = sortableElement(
  ({ value }: { value: SortableItemProps }) => (
    <BaseItem
      value={value}
      prefix={
        <Dragger>
          <DragHandle />
        </Dragger>
      }
    />
  ))

const NormalItem = ({ value }: { value: SortableItemProps }) => (
  <BaseItem value={value} />
)

const SortableContainer = sortableContainer(
  ({ children, draggingAvailable }: { children: any, draggingAvailable?: boolean }) => {
    if (!draggingAvailable) {
      return (
        <ItemsContainer>
          <NoDragIcon>
            {children}
          </NoDragIcon>
        </ItemsContainer>
      )
    }
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

function isPartiallySelected (columns: any[]) {
  const filteredColumns = columns.filter((column) => !isColumnReadonly(column) && column.hideColumnAvailable)
  const allSelected = filteredColumns.every(({ show }) => show)
  const hasSelected = filteredColumns.some(({ show }) => show)
  return hasSelected && !allSelected
}

export interface ColumnsSelectorProps {
  columns: any[],
  setColumns: (value: any[]) => void,
  draggingAvailable?: boolean,
  searchValue?: string
}

export const ColumnsSelector = ({
  columns,
  setColumns,
  draggingAvailable = true,
  searchValue
}: ColumnsSelectorProps) => {
  const [selectAll, setAllSelected] = useState(areAllSelected(columns))
  const [indeterminate, setIndeterminate] = useState(isPartiallySelected(columns))

  const updateSelectionStates = (newColumns: any[]) => {
    const visibleColumns = searchValue
      ? newColumns.filter((column) =>
        column.dataIndex.toLowerCase().includes(searchValue.toLowerCase())
      )
      : newColumns

    setAllSelected(areAllSelected(visibleColumns))
    setIndeterminate(isPartiallySelected(visibleColumns))
  }

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
    const visibleIndexes = new Set(
      filteredColumns.map((column) => column.dataIndex)
    )

    const newColumns = columns.map((column) => {
      if (!visibleIndexes.has(column.dataIndex)) {
        return column
      }
      return isColumnReadonly(column)
        ? column
        : {
            ...column,
            show: column.hideColumnAvailable ? !selectAll : true
          }
    })

    setColumns(newColumns)
    updateSelectionStates(newColumns)
  }

  const onColumnSelect = (selectedColumn: any) => {
    const columnIndex = columns.findIndex(
      (column) =>
        column.dataIndex?.localeCompare(selectedColumn.dataIndex) === 0
    )
    const newColumns = columns.map((column, index) => {
      if (index === columnIndex) {
        return {
          ...column,
          show: selectedColumn.hideColumnAvailable
            ? !column.show
            : true
        }
      }
      return column
    })


    setColumns(newColumns)
    updateSelectionStates(newColumns)
  }

  const filteredColumns = useMemo(() => {
    const columnsFilterd = columns.filter((column) => !isColumnReadonly(column))

    return columnsFilterd.filter((column) =>
      column.dataIndex.toLowerCase().includes(searchValue?.toLowerCase())
    )
  }, [columns, searchValue])

  const isAnyColsHideAvailable = useMemo(
    () => columns.some(({ hideColumnAvailable }) => hideColumnAvailable),
    [columns]
  )

  useEffect(() => {
    updateSelectionStates(columns)
  }, [columns, searchValue])

  return (
    <SelectorWrapper>
      <Item className="selector-item select-all-item">
        <CheckboxRow>
          <Checkbox checked={selectAll} indeterminate={indeterminate} disabled={!isAnyColsHideAvailable} onChange={onSelectAll} />
          <ItemLabel>
            <Text type="BTM3">
              <Locale localizationKey="table.columnsSettings.selectAll" />
            </Text>
          </ItemLabel>
        </CheckboxRow>
      </Item>
      <SortableContainer
        distance={2}
        onSortEnd={onSortEnd}
        helperClass="selector-item-dragging"
        draggingAvailable={draggingAvailable}
      >
        {filteredColumns.map((value, index) =>
          draggingAvailable ? (
            <SortableItem
              key={`item-${value.dataIndex}-${index}`}
              index={index}
              value={{ column: value, onChange: () => onColumnSelect(value) }}
            />
          ) : (
            <NormalItem
              key={`item-${value.dataIndex}-${index}`}
              value={{ column: value, onChange: () => onColumnSelect(value) }}
            />
          )
        )}
      </SortableContainer>
    </SelectorWrapper>
  )
}
