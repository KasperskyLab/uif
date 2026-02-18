import { CheckboxProps } from 'antd'
import { TableRowSelection } from 'antd/lib/table/interface'

/** @deprecated All rowSelections setting now in useRowSelection */
export const withAdditionalProps = <T>(rowSelection: undefined | TableRowSelection<T>, disabled: boolean, withSelection: boolean): undefined | TableRowSelection<T> => {
  const getCheckboxProps: TableRowSelection<T>['getCheckboxProps'] = () => {
    const props = {
      'data-testid': 'table-row__select',
      className: withSelection ? 'table-row-has-expandable' : undefined,
      disabled
    }

    return props as CheckboxProps
  }

  if (rowSelection) {
    rowSelection.getCheckboxProps ??= getCheckboxProps
  }

  return rowSelection
}
