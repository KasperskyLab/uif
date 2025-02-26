import { useThemedComponent } from '@helpers/useThemedComponent'

import { BreadcrumbsCssConfig, BreadcrumbsProps, BreadcrumbsThemeProps, BreadcrumbsViewProps } from './types'

export const useThemedBreadcrumbs = (props: BreadcrumbsProps): BreadcrumbsViewProps => (
  useThemedComponent<BreadcrumbsProps, BreadcrumbsCssConfig, BreadcrumbsThemeProps>(props, {
    componentName: 'breadcrumbs',
    defaultValues: { size: 'medium' },
    propsToDrill: ['size']
  })
)
