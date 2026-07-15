import { get } from 'lodash'
import React, { FC, memo } from 'react'
import { ScaleName } from 'victory'

import { Space, Text } from '@kaspersky/hexa-ui'
import { Calendar } from '@kaspersky/hexa-ui-icons/16'

import { topStackedChartTooltipPointsData } from '../../helpers/topData'
import { CustomTheme } from '../../hooks/useChartTheme'
import { IChartDataPoint, StackedChartTooltipPointsData } from '../../types/chartData'
import { Legend, LegendItem } from '../../widgets/Legend'
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

  if (activeRecord && enrichedData) {
    if (enrichedData.length === 1) {
      const [{ title, metric, value, color }] = enrichedData

      const titleNode = xScale === 'time'
        ? <Space gap={8} align="center" justify="space-between">
            <Calendar color="var(--text-icons-elements--secondary2-solid)" />
            {formatter(metric as number | Date, 'FF')}
          </ Space>
        : <MetricLabel metric={metric} title={title} />

      return (
        <LegendItem
          item={{kind: 0, title: titleNode, color: color, titleType: 'BTR3'}}
          value={value}
          valueType="BTR3"
          isSelectable={false}
          total={0}
        />
      )
    }

    const stackIndex = (get(activeRecord, '_stack') || 0) - 1
    const barsDataWithChecked = enrichedData.map((b, idx) => ({ ...b, checked: idx === stackIndex }))
    const top10 = topStackedChartTooltipPointsData(barsDataWithChecked, maxTooltipItems, otherLabel)    
    const top10Items = top10.map(item => ({
      kind: 0,
      title: <MetricLabel metric={item.name} title={item.title} />,
      color: item.color,
      titleType: 'BTR3',
      value: item.value,
      valueType: 'BTR3',
      isSelectable: false,
      className: item.checked ? styles.checked : undefined,
      total: 0
    }))
    const titleNode = xScale === 'time' || enrichedData[0]?.metric instanceof Date
      ? <Space gap={8} align="center">
          <Calendar color="var(--text-icons-elements--secondary2-solid)" />
          {formatter(enrichedData[0]?.metric as number | Date, 'FF')}
        </ Space>
      : <Text datatype="BTR3">{enrichedData[0]?.metric}</Text>

    return (
      <Legend 
        items={top10Items}
        legendTitle={titleNode}
        showTotal={showTotal}
        totalLabel={totalLabel}
      />
    )
  }

  return null
})

ChartTooltipContent.displayName = 'ChartTooltipContent'
