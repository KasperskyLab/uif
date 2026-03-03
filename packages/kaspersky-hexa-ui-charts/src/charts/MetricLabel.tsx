import { isFunction } from 'lodash'
import React, { FC, ReactNode } from 'react'

import { Text, TextProps } from '@kaspersky/hexa-ui'

export type MetricLabelProps = Omit<TextProps, 'metric' | 'title'> & {
  metric: string | number | Date,
  title?: ReactNode | ((metric: number | string | Date) => ReactNode)
}

export const MetricLabel: FC<MetricLabelProps> = ({ metric, title, ...props }) => {
  const metricString = title ? isFunction(title) ? title(metric) : title : metric

  return <Text datatype="BTR3" {...props}>{metricString}</Text>
}
