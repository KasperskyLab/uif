import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import {
  SegmentedButtonCssConfig,
  SegmentedButtonItemProps,
  SegmentedButtonItemViewProps,
  SegmentedButtonThemeProps
} from './types'

export const useThemedSegmentedButton = (props: SegmentedButtonItemProps): SegmentedButtonItemViewProps => (
  useComponentCssConfig<SegmentedButtonItemProps, SegmentedButtonCssConfig, SegmentedButtonThemeProps>(props, {
    componentName: 'segmentedButton',
    defaultValues: { mode: 'marina', size: 'medium' }
  })
)
