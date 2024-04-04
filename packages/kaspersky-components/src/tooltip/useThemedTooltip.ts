import { TooltipProps, TooltipViewProps, TooltipCssConfig, TooltipThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTooltip = (props: TooltipProps): TooltipViewProps => (
  useThemedComponent<TooltipProps, TooltipCssConfig, TooltipThemeProps>(props, {
    componentName: 'tooltip',
    defaultValues: {}
  })
)
