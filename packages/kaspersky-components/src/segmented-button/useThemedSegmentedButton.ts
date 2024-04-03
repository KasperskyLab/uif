import {
  SegmentedButtonItemProps,
  SegmentedButtonCssConfig,
  SegmentedButtonThemeProps,
  SegmentedButtonItemViewProps
} from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedSegmentedButton = (props: SegmentedButtonItemProps): SegmentedButtonItemViewProps => (
  useThemedComponent<SegmentedButtonItemProps, SegmentedButtonCssConfig, SegmentedButtonThemeProps>(props, {
    componentName: 'segmentedButton',
    defaultValues: { mode: 'marina', size: 'medium' }
  })
)
