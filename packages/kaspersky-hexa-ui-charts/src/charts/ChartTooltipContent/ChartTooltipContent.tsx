import clsx from 'clsx'
import { get } from 'lodash'
import React, { FC, memo, useMemo } from 'react'
import { ScaleName } from 'victory'

import { Divider, Space, Text } from '@kaspersky/hexa-ui'
import { Calendar } from '@kaspersky/hexa-ui-icons/16'

import { preciseAdd } from '../../helpers/preciseAdd'
import { topStackedChartTooltipPointsData } from '../../helpers/topData'
import { CustomTheme } from '../../hooks/useChartTheme'
import { IChartDataPoint, StackedChartTooltipPointsData } from '../../types/chartData'
import { MetricLabel } from '../MetricLabel'

import styles from './ChartTooltipContent.module.scss'
import { useDateFormat } from './hooks/useDateFormat'

export type ChartTooltipContentProps = {
  activeRecord?: IChartDataPoint,
  enrichedData?: StackedChartTooltipPointsData,
  theme?: CustomTheme,
  otherLabel?: string,
  xScale?: ScaleName,
  maxTooltipItems?: number,
  totalLabel?: string,
  showTotal?: boolean,
  tooltipDateFormat?: (date: number | Date, supposedFormat: string) => string
};

export const ChartTooltipContent: FC<ChartTooltipContentProps> = memo(({
  showTotal,
  totalLabel,
  activeRecord,
  enrichedData,
  otherLabel,
  xScale,
  maxTooltipItems = 10,
  tooltipDateFormat
}) => {
  const formatter = useDateFormat(tooltipDateFormat)
  const total = useMemo(() => enrichedData ? preciseAdd(enrichedData.map(d => d.value || 0)) : 0, [enrichedData])

  if (activeRecord && enrichedData) {
    if (enrichedData.length === 1) {
      const [{ title, metric, value, color }] = enrichedData

      return (
        <Space gap={8} direction="horizontal" align="center" justify="space-between" className={styles.row}>
          <Space gap={8} direction="horizontal">
            { color && <div
              style={{
                background: color
              }}
              className={styles.dot}
            />}
            {xScale === 'time'
              ? <>
                  <Calendar color="var(--text-icons-elements--secondary2-solid)" className={styles.timeIcon} />
                  {formatter(metric as number | Date, 'FF')}
                </>
              : (
              <MetricLabel metric={metric} title={title} />
                )}
          </Space>
          <Text datatype="BTR3">{value}</Text>
        </Space>
      )
    }

    const stackIndex = (get(activeRecord, '_stack') || 0) - 1
    const barsDataWithSelected = enrichedData.map((b, idx) => ({ ...b, selected: idx === stackIndex }))
    const top10 = topStackedChartTooltipPointsData(barsDataWithSelected, maxTooltipItems, otherLabel)

    return (
      <Space wrap="nowrap" gap="related" direction="vertical" align="stretch">
      <Space gap={8} align="center" className={styles.time}>
        {xScale === 'time' || enrichedData[0]?.metric instanceof Date
          ? (
          <>
            <Calendar color="var(--text-icons-elements--secondary2-solid)" className={styles.timeIcon} />
            {formatter(enrichedData[0]?.metric as number | Date, 'FF')}
          </>
            )
          : (
          <Text datatype="BTR3">{enrichedData[0]?.metric}</Text>
            )}
      </Space>

      <Space direction="vertical" align="stretch" gap={2}>
        {top10.map(({ value, name, title, color, selected }) => (
          <Space
            key={(title || name).toString()}
            gap={8}
            direction="horizontal"
            align="center"
            className={clsx(styles.row, selected && styles.selected)}
          >
            <div
              style={{
                background: color
              }}
              className={styles.dot}
            />
            <Space gap={16} direction="horizontal" justify="space-between" className={styles.title}>
              <MetricLabel metric={name} title={title} />
              <Text type="BTR3">{value}</Text>
            </Space>
          </Space>
        ))}
        {showTotal && (
          <>
            <Divider className={styles.totalDivider} />
            <Space gap={16} justify="space-between">
              <Text type="BTR3">{totalLabel}</Text>
              <Text type="MTR3">{total}</Text>
            </Space>
          </>
        )
        }

      </Space>
      </Space>
    )
  }

  return null
})

ChartTooltipContent.displayName = 'ChartTooltipContent'
