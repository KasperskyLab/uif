import { SetState } from '@helpers/hooks/useStateProps'
import { Checkbox, CheckboxProps } from '@src/checkbox'
import React from 'react'

type GroupCellProps = {
  groupItemKeys: string[],
  isSelectedAll: boolean,
  useDataSourceFunction: boolean
}

export const getGroupCheckboxOnChange = ({
  groupItemKeys,
  isSelectedAll,
  useDataSourceFunction,
  setSelectedRowKeys,
  setDeselectedRowKeys
}: GroupCellProps & {
  setSelectedRowKeys: SetState<string[]>,
  setDeselectedRowKeys: SetState<string[]>
}): CheckboxProps['onChange'] => (e) => {
  if (useDataSourceFunction) {
    if (e.target.checked) {
      if (isSelectedAll) {
        setDeselectedRowKeys(prev => prev.filter(key => !groupItemKeys.includes(key)))
      } else {
        setSelectedRowKeys(prev => Array.from(new Set([...prev, ...groupItemKeys])))
      }
    } else {
      if (isSelectedAll) {
        setDeselectedRowKeys(prev => Array.from(new Set([...prev, ...groupItemKeys])))
      } else {
        setSelectedRowKeys(prev => prev.filter(key => !groupItemKeys.includes(key)))
      }
    }
  } else {
    if (e.target.checked) {
      setSelectedRowKeys(prev => Array.from(new Set([...prev, ...groupItemKeys])))
    } else {
      setSelectedRowKeys(prev => prev.filter(key => !groupItemKeys.includes(key)))
    }
  }
}

export const renderGroupCell = ({
  groupItemKeys,
  isSelectedAll,
  useDataSourceFunction,
  deselectedRowKeys,
  selectedRowKeys,
  checkboxProps
}: GroupCellProps & {
  selectedRowKeys: string[],
  deselectedRowKeys: string[],
  checkboxProps: Pick<CheckboxProps, 'onChange' | 'disabled'>
}) => {
  let checked = false
  let indeterminate = false

  if (useDataSourceFunction) {
    if (isSelectedAll) {
      const selectedCount = groupItemKeys.filter(key => !deselectedRowKeys.includes(key)).length
      checked = selectedCount === groupItemKeys.length
      indeterminate = selectedCount > 0 && selectedCount < groupItemKeys.length
    } else {
      const selectedCount = groupItemKeys.filter(key => selectedRowKeys.includes(key)).length
      checked = selectedCount === groupItemKeys.length
      indeterminate = selectedCount > 0 && selectedCount < groupItemKeys.length
    }
  } else {
    const selectedCount = groupItemKeys.filter(key => selectedRowKeys.includes(key)).length
    checked = selectedCount === groupItemKeys.length
    indeterminate = selectedCount > 0 && selectedCount < groupItemKeys.length
  }

  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      {...checkboxProps}
    />
  )
}
