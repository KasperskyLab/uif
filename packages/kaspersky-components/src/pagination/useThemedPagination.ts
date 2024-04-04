import { PaginationProps, PaginationViewProps, PaginationCssConfig, PaginationThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedPagination = (props: PaginationProps): PaginationViewProps => (
  useThemedComponent<PaginationProps, PaginationCssConfig, PaginationThemeProps>(props, {
    componentName: 'pagination',
    defaultValues: {}
  })
)
