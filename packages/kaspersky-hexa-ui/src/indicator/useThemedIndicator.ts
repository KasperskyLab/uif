import { useThemedComponent } from '@helpers/useThemedComponent'

import { IndicatorCssConfig, IndicatorProps, IndicatorThemeProps, IndicatorViewProps } from './types'

export const useThemedIndicator = (props: IndicatorProps): IndicatorViewProps => (
  useThemedComponent<IndicatorProps, IndicatorCssConfig, IndicatorThemeProps>(props, {
    componentName: 'indicator',
    defaultValues: { mode: 'accent' }
  })
)
