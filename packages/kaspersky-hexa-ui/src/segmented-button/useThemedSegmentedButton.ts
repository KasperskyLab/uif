import { useThemedComponent } from '@helpers/useThemedComponent'

import {
  SegmentedButtonCssConfig,
  SegmentedButtonItemProps,
  SegmentedButtonItemViewProps,
  SegmentedButtonThemeProps
} from './types'

export const useThemedSegmentedButton = (props: SegmentedButtonItemProps): SegmentedButtonItemViewProps => (
  useThemedComponent<SegmentedButtonItemProps, SegmentedButtonCssConfig, SegmentedButtonThemeProps>(props, {
    componentName: 'segmentedButton',
    defaultValues: { mode: 'marina', size: 'medium' }
  })
)
