import { useThemedComponent } from '@helpers/useThemedComponent'

import {
  SegmentedControlCssConfig,
  SegmentedControlProps,
  SegmentedControlThemeProps,
  SegmentedControlViewProps
} from './types'

export const useThemedSegmentedControl = (props: SegmentedControlProps): SegmentedControlViewProps => (
  useThemedComponent<SegmentedControlProps, SegmentedControlCssConfig, SegmentedControlThemeProps>(props, {
    componentName: 'segmentedControl',
    defaultValues: { size: 'medium' }
  })
)
