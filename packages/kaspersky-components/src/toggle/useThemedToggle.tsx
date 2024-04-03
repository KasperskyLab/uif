import { ToggleProps, ToggleViewProps, ToggleCssConfig, ToggleThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedToggle = (props: ToggleProps): ToggleViewProps => (
  useThemedComponent<ToggleProps, ToggleCssConfig, ToggleThemeProps>(props, {
    componentName: 'toggle',
    defaultValues: {}
  })
)
