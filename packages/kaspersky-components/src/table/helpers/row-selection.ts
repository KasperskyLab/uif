import { CheckboxProps } from 'antd'
import { TableRowSelection } from 'antd/lib/table/interface'

/**
 * adds the "data-testid" attribute and disabled prop to the table row checkboxes
 */
export const withAdditionalProps = <T>(rowSelection: undefined | TableRowSelection<T>, disabled?: boolean): undefined | TableRowSelection<T> => {
  const getCheckboxProps: TableRowSelection<T>['getCheckboxProps'] = () => {
    const props = {
      'data-testid': 'table-row__select',
      disabled
    }

    return props as CheckboxProps
  }

  if (rowSelection) {
    rowSelection.getCheckboxProps ??= getCheckboxProps
  }

  return rowSelection
}
