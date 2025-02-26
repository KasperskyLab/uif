import {
  SegmentedControlColorConfig as ColorConfig,
  SegmentedControlSize as Size,
  SegmentedControlSizeConfig as SizeConfig
} from '@src/segmented-control/types'

import { ComponentThemeContext } from '../config'
import {
  segmentedControlSize as defaultSegmentedControlSize,
  segmentedControl as defaultSegmentedControl
} from '../light/segmentedControl'

export const segmentedControl = ({ colors, effects }: ComponentThemeContext): ColorConfig => (
  defaultSegmentedControl({ colors, effects })
)

export const segmentedControlSize: Record<Size, SizeConfig> = defaultSegmentedControlSize
