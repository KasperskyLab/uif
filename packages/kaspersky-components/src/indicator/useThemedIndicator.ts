import { IndicatorProps, IndicatorViewProps, IndicatorCssConfig, IndicatorThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedIndicator = (props: IndicatorProps): IndicatorViewProps => (
  useThemedComponent<IndicatorProps, IndicatorCssConfig, IndicatorThemeProps>(props, {
    componentName: 'indicator',
    defaultValues: { mode: 'accent' }
  })
)
