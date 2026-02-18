import {
  SegmentedControlColorConfig as ColorConfig,
  SegmentedControlSize as Size,
  SegmentedControlSizeConfig as SizeConfig
} from '@src/segmented-control/types'

import { ComponentThemeContext } from '../config'
import {
  segmentedControl as defaultSegmentedControl,
  segmentedControlSize as defaultSegmentedControlSize
} from '../light/segmentedControl'

export const segmentedControl = ({ colors, effects }: ComponentThemeContext): ColorConfig => (
  defaultSegmentedControl({ colors, effects })
)

export const segmentedControlSize: Record<Size, SizeConfig> = defaultSegmentedControlSize
