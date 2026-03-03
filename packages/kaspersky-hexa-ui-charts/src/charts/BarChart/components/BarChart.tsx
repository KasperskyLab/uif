import React from 'react'

import { StackedBarChart, StackedBarChartProps } from '../../StackedBarChart'
import { DEFAULT_BAR_CORNER_RADIUS } from '../../StackedBarChart/constants'

export type BarChartProps<T = unknown> = StackedBarChartProps<T>

export function BarChart<T> (props: BarChartProps<T>): JSX.Element {
  return <StackedBarChart cornerRadius={DEFAULT_BAR_CORNER_RADIUS} {...props} />
}
