import { useThemedComponent } from '@helpers/useThemedComponent'

import { SubmenuCssConfig, SubmenuProps, SubmenuThemeProps, SubmenuViewProps } from './types'

export const useThemedSubmenu = (props: SubmenuProps): SubmenuViewProps => (
  useThemedComponent<SubmenuProps, SubmenuCssConfig, SubmenuThemeProps>(props, {
    componentName: 'submenu',
    defaultValues: {}
  })
)
