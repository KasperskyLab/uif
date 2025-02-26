import { useThemedComponent } from '@helpers/useThemedComponent'

import { PaginationCssConfig, PaginationProps, PaginationThemeProps, PaginationViewProps } from './types'

export const useThemedPagination = (props: PaginationProps): PaginationViewProps => (
  useThemedComponent<PaginationProps, PaginationCssConfig, PaginationThemeProps>(props, {
    componentName: 'pagination',
    defaultValues: {}
  })
)
