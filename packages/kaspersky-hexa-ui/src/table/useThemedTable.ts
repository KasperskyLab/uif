import { useThemedComponent } from '@helpers/useThemedComponent'

import { ITableProps, TableCssConfig, TableThemeProps, TableViewProps } from './types'

export const useThemedTableProps = (props: ITableProps): TableViewProps => (
  useThemedComponent<ITableProps, TableCssConfig, TableThemeProps>(props, {
    componentName: 'table',
    defaultValues: {},
    propsToDrill: ['theme']
  }) as TableViewProps
)
