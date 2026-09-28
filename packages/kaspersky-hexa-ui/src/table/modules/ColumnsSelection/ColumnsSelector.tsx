import { SetState } from '@helpers/hooks/useStateProps'
import { Checkbox, CheckboxProps } from '@src/checkbox'
import { Space } from '@src/space'
import { TableColumn, TableRecord } from '@src/table'
import { Tooltip } from '@src/tooltip'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  SortableHandle as sortableHandle,
  SortEndHandler
} from 'react-sortable-hoc'
import styled from 'styled-components'

import { DragDrop } from '@kaspersky/hexa-ui-icons/16'

import { findColumnByKey, isColumnReadonly } from '../../helpers/common'
import { getStringWithCondition } from '../SortingAndFilters/helpers'

import { SIDEBAR_SETTINGS_CLASS, sortColumns } from './helpers'
import { SelectorWrapper } from './SelectorWrapper'

const DragHandle = sortableHandle(() => <DragDrop name="DragDrop" />)

const Dragger = styled.div`
  cursor: pointer;
  justify-self: flex-end;
  color: var(--action_button--icon--ghost--enabled);
`

const Item = styled.label`
  cursor: pointer;
  display: flex;
  z-index: 700;
  align-items: center;
  line-height: 1;
  gap: 4px;

  &.selector-item-dragging {
    z-index: 1200;
  }
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
    <Checkbox
      checked={show}
      disabled={!hideColumnAvailable || onlyForFiltering}
      onChange={() => value.onChange(column)}
    >
      {title}
    </Checkbox>
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
    const Container = (
      <Space gap="related" direction="vertical" align="start">
        {children}
      </Space>
    )

    if (!draggingAvailable) {
      return (
        <NoDragIcon>
          {Container}
        </NoDragIcon>
      )
    }
    return Container
  }
)

export function hasSelected <T extends TableRecord> (columns: TableColumn<T>[]) {
  return columns.some(({ show }) => show)
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
  const someSelected = hasSelected(filteredColumns)
  return someSelected && !allSelected
}

const filterColumnsBySearch = <T extends TableRecord>(columns: TableColumn<T>[], searchValue: string) => {
  if (!searchValue.trim()) return columns

  return columns.filter((column) => {
    if (typeof column.title === 'string') {
      return column.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
    }
    return String(column.key)?.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
  })
}

export interface ColumnsSelectorProps <T extends TableRecord> {
  columns: TableColumn<T>[],
  setColumns: SetState<TableColumn<T>[]>,
  draggingAvailable?: boolean,
  searchValue: string
  testId?: string,
  klId?: string
}

export const ColumnsSelector = <T extends TableRecord> ({
  columns,
  setColumns,
  draggingAvailable = true,
  searchValue,
  testId,
  klId
}: ColumnsSelectorProps<T>) => {
  const { t } = useTranslation()

  const filteredColumns = useMemo(() => {
    const columnsFiltered = columns.filter((column) => !isColumnReadonly(column))
    return sortColumns(filterColumnsBySearch(columnsFiltered, searchValue))
  }, [columns, searchValue])

  const [selectAll, setAllSelected] = useState(areAllSelected(columns))
  const [indeterminate, setIndeterminate] = useState(isPartiallySelected(columns))

  useEffect(() => {
    setAllSelected(areAllSelected(filteredColumns))
    setIndeterminate(isPartiallySelected(filteredColumns))
  }, [filteredColumns])

  const onSortEnd: SortEndHandler = ({
    oldIndex,
    newIndex
  }) => {
    if (oldIndex === newIndex) return

    const keys = filteredColumns.map(column => column.key)
    const [moved] = keys.splice(oldIndex, 1)
    keys.splice(newIndex, 0, moved)

    const nextIndexByKey = new Map(keys.map((key, index) => [key, index]))

    setColumns(prev => prev.map(column => (
      nextIndexByKey.has(column.key)
        ? { ...column, sortIndex: nextIndexByKey.get(column.key)! }
        : column
    )))

  }

  const selectColumn = (selectedColumn: TableColumn<T>, isSelected: boolean): TableColumn<T> => {
    if (!isColumnSelectable(selectedColumn)) return selectedColumn

    const targetColumn = findColumnByKey(columns, String(selectedColumn.key))!

    return {
      ...targetColumn,
      show: isSelected
    }
  }

  const onSelectAll: CheckboxProps['onChange'] = (e) => {
    const visibleIndexes = new Set(
      filteredColumns.map((column) => column.key)
    )

    const newColumns = columns.map(column => (
      visibleIndexes.has(column.key)
        ? selectColumn(column, e.target.checked)
        : column
    ))

    setColumns(newColumns)
  }

  const onColumnSelect = (selectedColumn: TableColumn<T>) => {
    const newColumns = columns.map((column) => {
      if (column.key === selectedColumn.key) return selectColumn(selectedColumn, !selectedColumn.show)
      return column
    })

    setColumns(newColumns)
  }

  const isAnyColsSelectable = useMemo(
    () => filteredColumns.some(isColumnSelectable),
    [filteredColumns]
  )

  const ColumnItem = useMemo(() => getItem<T>(draggingAvailable), [draggingAvailable])
  const getScrollContainer = () => document.querySelector(`.${getStringWithCondition(SIDEBAR_SETTINGS_CLASS, testId ?? klId)} .ant-drawer-body`) as HTMLElement || document.body

  return (
    <SelectorWrapper>
      <Item className="selector-item select-all-item">
        <Checkbox checked={selectAll} indeterminate={indeterminate} disabled={!isAnyColsSelectable} onChange={onSelectAll}>
          {t('table.columnsSettings.selectAll')}
        </Checkbox>
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
