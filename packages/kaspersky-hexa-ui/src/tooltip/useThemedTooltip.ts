import { useThemedComponent } from '@helpers/useThemedComponent'

import { TooltipCssConfig, TooltipProps, TooltipThemeProps, TooltipViewProps } from './types'

export const useThemedTooltip = (props: TooltipProps): TooltipViewProps => (
  useThemedComponent<TooltipProps, TooltipCssConfig, TooltipThemeProps>(props, {
    componentName: 'tooltip',
    defaultValues: {}
  })
)
