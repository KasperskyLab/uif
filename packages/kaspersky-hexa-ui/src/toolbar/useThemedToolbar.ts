import { useThemedComponent } from '@helpers/useThemedComponent'

import { ToolbarCssConfig, ToolbarProps, ToolbarThemeProps, ToolbarViewProps } from './types'

export const useThemedToolbar = (props: ToolbarProps): ToolbarViewProps => (
  useThemedComponent<ToolbarProps, ToolbarCssConfig, ToolbarThemeProps>(props, {
    componentName: 'toolbar',
    defaultValues: {}
  })
)
