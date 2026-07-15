import type { TextProps } from '@kaspersky/hexa-ui'

export type CounterChartSize = 'large' | 'medium' | 'small'
type CounterChartTextType = NonNullable<TextProps['type']>

export type CounterChartSizeConfig = {
  height: number
  gap: number
  prefix: CounterChartTextType
  value: CounterChartTextType
  suffix: CounterChartTextType
  description: CounterChartTextType
  previousValue: CounterChartTextType
  trendTop: number
  prefixOffset: number
  previousValueOffset: number
}

export const COUNTER_CHART_SIZE_CONFIG: Record<CounterChartSize, CounterChartSizeConfig> = {
  large: {
    height: 76,
    gap: 8,
    prefix: 'H5',
    value: 'H1',
    suffix: 'H5',
    description: 'BTR3',
    previousValue: 'BTR3',
    trendTop: 12,
    prefixOffset: 5,
    previousValueOffset: 5
  },
  medium: {
    height: 56,
    gap: 6,
    prefix: 'H6',
    value: 'H2',
    suffix: 'H6',
    description: 'BTR4',
    previousValue: 'BTR4',
    trendTop: 8,
    prefixOffset: 3,
    previousValueOffset: 4
  },
  small: {
    height: 44,
    gap: 4,
    prefix: 'BTM3',
    value: 'H4',
    suffix: 'BTM3',
    description: 'BTR5',
    previousValue: 'BTR5',
    trendTop: 5,
    prefixOffset: 1,
    previousValueOffset: 2
  }
}
