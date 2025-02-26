import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { ProgressBarCssConfig, ProgressBarProps, ProgressBarThemeProps, ProgressBarViewProps } from './types'

export const useThemedProgressBar = (props: ProgressBarProps): ProgressBarViewProps => (
  useComponentCssConfig<ProgressBarProps, ProgressBarCssConfig, ProgressBarThemeProps>(props, {
    componentName: 'progressBar',
    defaultValues: { mode: 'critical', size: 'medium' }
  })
)
