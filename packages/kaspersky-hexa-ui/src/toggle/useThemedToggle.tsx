import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { ToggleCssConfig, ToggleProps, ToggleThemeProps, ToggleViewProps } from './types'

export const useThemedToggle = (props: ToggleProps): ToggleViewProps => (
  useComponentCssConfig<ToggleProps, ToggleCssConfig, ToggleThemeProps>(props, {
    componentName: 'toggle',
    defaultValues: {}
  })
)
