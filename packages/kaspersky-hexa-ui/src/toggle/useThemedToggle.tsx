import { useThemedComponent } from '@helpers/useThemedComponent'

import { ToggleCssConfig, ToggleProps, ToggleThemeProps, ToggleViewProps } from './types'

export const useThemedToggle = (props: ToggleProps): ToggleViewProps => (
  useThemedComponent<ToggleProps, ToggleCssConfig, ToggleThemeProps>(props, {
    componentName: 'toggle',
    defaultValues: {}
  })
)
