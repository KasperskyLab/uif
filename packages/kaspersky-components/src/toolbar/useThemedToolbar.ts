import { ToolbarProps, ToolbarViewProps, ToolbarCssConfig, ToolbarThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedToolbar = (props: ToolbarProps): ToolbarViewProps => (
  useThemedComponent<ToolbarProps, ToolbarCssConfig, ToolbarThemeProps>(props, {
    componentName: 'toolbar',
    defaultValues: {}
  })
)
