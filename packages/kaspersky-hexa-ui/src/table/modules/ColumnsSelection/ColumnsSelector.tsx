import { Checkbox } from '@src/checkbox'
import { TableColumn, TableRecord } from '@src/table'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
    margin-top: 2px;
    margin-left: 8px;
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

type BaseItemProps <T extends TableRecord> = {
  value: {
    column: TableColumn<T>,
    onChange: (column: TableColumn<T>) => void
  },
  prefix?: React.ReactNode
}

const BaseItem = <T extends TableRecord> ({ value, prefix }: BaseItemProps<T>) => {
  const { t } = useTranslation()
  const {
    column,
    column: {
      show,
      title,
      key,
      hideColumnAvailable,
      onlyForFiltering
    }
  } = value
  const CheckboxRowComponent = (
    <CheckboxRow>
      <Checkbox
        checked={show}
        disabled={!hideColumnAvailable || onlyForFiltering}
        onChange={() => value.onChange(column)}
      />
      <ItemLabel>
        <Text type="BTM3">{title}</Text>
      </ItemLabel>
    </CheckboxRow>
  )

  let tooltipTextKey = ''

  if (onlyForFiltering) {
    tooltipTextKey = 'table.columnsSettings.onlyForFiltering'
  } else if (!hideColumnAvailable) {
    tooltipTextKey = 'table.columnsSettings.columnHideIsUnavailable'
  }

  return (
    <Item className="selector-item" data-testid={`selector-item-${key}`}>
      {prefix}
      {
        !tooltipTextKey
          ? CheckboxRowComponent
          : (
              <Tooltip text={t(tooltipTextKey)}>
                {CheckboxRowComponent}
              </Tooltip>
            )
      }
    </Item>
  )
}

const getItem = <T extends TableRecord> (draggingAvailable: boolean) =>
  draggingAvailable
    ? sortableElement(
        ({ value }: BaseItemProps<T>) => (
          <BaseItem
            value={value}
            prefix={(
              <Dragger>
                <DragHandle />
              </Dragger>
            )}
          />
        )
      )
    : (props: BaseItemProps<T>) => <BaseItem {...props} />

const SortableContainer = sortableContainer(
  ({ children, draggingAvailable }: { children: React.ReactNode, draggingAvailable?: boolean }) => {
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

export function hasSelected <T extends TableRecord> (columns: TableColumn<T>[]) {
  return columns.reduce(
    (acc: boolean, current: TableColumn<T>) => (acc = acc || Boolean(current.show)),
    false
  )
}

function isColumnSelectable <T extends TableRecord> (column: TableColumn<T>) {
  return (
    !isColumnReadonly(column) &&
    column.hideColumnAvailable &&
    !column.onlyForFiltering
  )
}

function areAllSelected <T extends TableRecord> (columns: TableColumn<T>[]) {
  const filteredColumns = columns.filter(isColumnSelectable)
  return filteredColumns.every(({ show }) => show)
}

function isPartiallySelected <T extends TableRecord> (columns: TableColumn<T>[]) {
  const filteredColumns = columns.filter(isColumnSelectable)
  const allSelected = filteredColumns.every(({ show }) => show)
  const hasSelected = filteredColumns.some(({ show }) => show)
  return hasSelected && !allSelected
}

export interface ColumnsSelectorProps <T extends TableRecord> {
  columns: TableColumn<T>[],
  setColumns: (value: TableColumn<T>[]) => void,
  draggingAvailable?: boolean,
  searchValue?: string
}

export const ColumnsSelector = <T extends TableRecord> ({
  columns,
  setColumns,
  draggingAvailable = true,
  searchValue
}: ColumnsSelectorProps<T>) => {
  const { t } = useTranslation()
  const [selectAll, setAllSelected] = useState(areAllSelected(columns))
  const [indeterminate, setIndeterminate] = useState(isPartiallySelected(columns))

  const filterColumnsBySearch = (columns: TableColumn<T>[], searchValue: string) => {
    if (!searchValue.trim()) return columns

    return columns.filter((column) => {
      if (typeof column.title === 'string') {
        return column.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
      }
      return String(column.key)?.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
    })
  }

  const updateSelectionStates = (newColumns: TableColumn<T>[]) => {
    const visibleColumns = filterColumnsBySearch(newColumns, searchValue || '')
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
      filteredColumns.map((column) => column.key)
    )

    const newColumns = columns.map((column) => {
      if (!visibleIndexes.has(column.key)) {
        return column
      }

      return !isColumnSelectable(column)
        ? column
        : {
            ...column,
            show: !selectAll
          }
    })

    setColumns(newColumns)
    updateSelectionStates(newColumns)
  }

  const onColumnSelect = (selectedColumn: TableColumn<T>) => {
    const columnIndex = columns.findIndex(
      (column) =>
        String(column.key).localeCompare(String(selectedColumn.key)) === 0
    )
    const newColumns = columns.map((column, index) => {
      if (index === columnIndex) {
        let columnShow = !column.show

        if (selectedColumn.onlyForFiltering) {
          columnShow = false
        } else if (!selectedColumn.hideColumnAvailable) {
          columnShow = true
        }

        return {
          ...column,
          show: columnShow
        }
      }
      return column
    })

    setColumns(newColumns)
    updateSelectionStates(newColumns)
  }

  const filteredColumns = useMemo(() => {
    const columnsFiltered = columns.filter((column) => !isColumnReadonly(column))
    return filterColumnsBySearch(columnsFiltered, searchValue || '')
  }, [columns, searchValue])

  const isAnyColsSelectable = useMemo(
    () => filteredColumns.some(isColumnSelectable),
    [filteredColumns]
  )

  useEffect(() => {
    updateSelectionStates(columns)
  }, [columns, searchValue])

  const ColumnItem = useMemo(() => getItem<T>(draggingAvailable), [draggingAvailable])
  const getScrollContainer = () => document.querySelector('.ant-drawer-body') as HTMLElement || document.body

  return (
    <SelectorWrapper>
      <Item className="selector-item select-all-item">
        <CheckboxRow>
          <Checkbox checked={selectAll} indeterminate={indeterminate} disabled={!isAnyColsSelectable} onChange={onSelectAll} />
          <ItemLabel>
            <Text type="BTM3">
              {t('table.columnsSettings.selectAll')}
            </Text>
          </ItemLabel>
        </CheckboxRow>
      </Item>
      <SortableContainer
        distance={2}
        onSortEnd={onSortEnd}
        helperClass="selector-item-dragging"
        draggingAvailable={draggingAvailable}
        getContainer={getScrollContainer}
      >
        {filteredColumns.map((value, index) => (
          <ColumnItem
            key={`item-${value.key}-${index}`}
            index={index}
            value={{ column: value, onChange: () => onColumnSelect(value) }}
          />
        ))}
      </SortableContainer>
    </SelectorWrapper>
  )
}
