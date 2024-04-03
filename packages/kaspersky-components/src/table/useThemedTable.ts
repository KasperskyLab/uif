import { ITableProps, TableCssConfig, TableThemeProps, TableViewProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTableProps = (props: ITableProps): TableViewProps => (
  useThemedComponent<ITableProps, TableCssConfig, TableThemeProps>(props, {
    componentName: 'table',
    defaultValues: {},
    propsToDrill: ['theme']
  }) as TableViewProps
)
