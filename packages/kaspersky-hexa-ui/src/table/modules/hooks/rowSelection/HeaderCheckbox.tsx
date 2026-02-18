import { Checkbox } from '@src/checkbox'
import { Dropdown, DropdownItemProps } from '@src/dropdown'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const selectionCheckboxStates = ['nothing', 'all', 'some'] as const
type SelectionCheckboxState = typeof selectionCheckboxStates[number]

export type HeaderCheckboxProps = {
  tableId?: string,
  disableSelectAll: boolean,
  selectedRowsLength: number,
  deselectedRowsLength: number,
  isSelectedAll: boolean,
  resetSelection: () => void,
  onSelectAll: () => void,
  onSelectCurrentPage: () => void,
  useDataSourceFunction: boolean
}

export const HeaderCheckbox: FC<HeaderCheckboxProps> = ({
  disableSelectAll,
  selectedRowsLength,
  deselectedRowsLength,
  isSelectedAll,
  resetSelection,
  onSelectAll,
  onSelectCurrentPage,
  useDataSourceFunction,
  tableId
}) => {
  const { t } = useTranslation()

  const [checkboxState, setCheckboxState] = useState<SelectionCheckboxState>('nothing')

  useEffect(() => {
    if (isSelectedAll && (useDataSourceFunction ? deselectedRowsLength === 0 : true)) {
      setCheckboxState('all')
    } else if (selectedRowsLength === 0) {
      setCheckboxState('nothing')
    } else {
      setCheckboxState('some')
    }
  }, [isSelectedAll, useDataSourceFunction, selectedRowsLength, deselectedRowsLength])

  const idPrefix = tableId ? `${tableId}-` : 'table-'
  const checkboxId = `${idPrefix}select-all-checkbox`
  const dropdownId = `${idPrefix}select-all-dropdown`

  const overlay: DropdownItemProps[] = [
    {
      testId: 'select-current-page',
      klId: 'select-current-page',
      onClick: onSelectCurrentPage,
      children: t('table.selectAll.selectCurrentPage')
    },
    {
      testId: 'select-all',
      klId: 'select-all',
      onClick: onSelectAll,
      children: t('table.selectAll.selectAll')
    },
    ...(checkboxState === 'some' ? [{
      testId: 'deselect-all',
      klId: 'deselect-all',
      onClick: resetSelection,
      children: t('table.selectAll.deselectAll')
    }] : [])
  ]

  return checkboxState !== 'all'
    ? <Dropdown
        overlay={overlay}
        trigger={['click']}
        disabled={disableSelectAll}
        klId={dropdownId}
        testId={dropdownId}
      >
        <Checkbox
          checked={false}
          indeterminate={checkboxState === 'some'}
          testId={checkboxId}
          klId={checkboxId}
          disabled={disableSelectAll}
        />
      </Dropdown>
    : <Checkbox checked onChange={resetSelection} testId={checkboxId} klId={checkboxId} disabled={disableSelectAll} />
}
