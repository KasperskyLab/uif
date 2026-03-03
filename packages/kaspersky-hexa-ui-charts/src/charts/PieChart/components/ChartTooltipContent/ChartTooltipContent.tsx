import React, { FC, memo } from 'react'

import { Space, Text } from '@kaspersky/hexa-ui'

import { IChartDataPoint, StackedChartTooltipPointsData } from '../../../../types/chartData'
import { MetricLabel } from '../../../MetricLabel'

import styles from './ChartTooltipContent.module.scss'

export type ChartTooltipContentProps = {
  activeRecord?: IChartDataPoint
};

export const ChartTooltipContent: FC<ChartTooltipContentProps> = memo(({ activeRecord }) => {
  if (activeRecord) {
    const { metric, value, title, color } = activeRecord

    return (
        <Space gap={8} direction="horizontal" align="center" justify="space-between" className={styles.row}>
          <Space gap={8} direction="horizontal">
            { color && <div
              style={{
                background: color
              }}
              className={styles.dot}
            />}
            <MetricLabel metric={metric} title={title} />
          </Space>
          <Text datatype="BTR3">{value}</Text>
        </Space>
    )
  }

  return null
})

ChartTooltipContent.displayName = 'ChartTooltipContent'
