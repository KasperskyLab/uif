import clsx from 'clsx'
import React, { useCallback } from 'react'
import { IChartDataPoint } from 'src/types/chartData'
import { TChartEventCallback } from 'src/types/chartEvent'

import { H6, Link } from '@kaspersky/hexa-ui'

import { PieChart, PieChartProps } from '../../charts/PieChart'
import { useActiveDataPoints } from '../hooks/useActiveDataPoints'
import { TLegendItemRow } from '../Legend'
import { ILegendProps, Legend } from '../Legend/components/Legend'

import styles from './PieWidget.module.scss'

export interface PieWidgetProps<PC, L> extends PieChartProps<PC> {
  title?: string,
  className?: string,
  widgetLink?: { clickHandler?: React.MouseEventHandler<HTMLAnchorElement>, text: string },
  legendProps: ILegendProps<L>,
  matchLegendToDataPoint?: (legendItem: TLegendItemRow, dataPoints: IChartDataPoint<PC>[]) => IChartDataPoint<PC> | undefined
}

export const PieWidget = <PC, L>({ title, className, widgetLink, legendProps, standalone = false, matchLegendToDataPoint, ...pieChartProps }: PieWidgetProps<PC, L>) => {
  const { widgetData, updateActiveSlice } = useActiveDataPoints(pieChartProps.data)

  const handleLegendHover = useCallback((item: TLegendItemRow) => {
    if (matchLegendToDataPoint) {
      const dataPoint = matchLegendToDataPoint(item, widgetData)

      updateActiveSlice(dataPoint)
    }
    legendProps.onHover?.(item)
  }, [legendProps.onHover, widgetData, matchLegendToDataPoint])

  const handleLegendLeave = useCallback((item: TLegendItemRow) => {
    matchLegendToDataPoint && updateActiveSlice(undefined)
    legendProps.onLeave?.(item)
  }, [legendProps.onLeave, matchLegendToDataPoint])

  const handleChartHover: TChartEventCallback<PC> = useCallback((e, payload) => {

    updateActiveSlice(payload)
    pieChartProps.onHoverData?.(e, payload)
  }, [pieChartProps.onHoverData, standalone])

  const handleChartLeave: TChartEventCallback<PC> = useCallback((e, payload) => {
    updateActiveSlice(undefined)
    pieChartProps.onLeaveData?.(e, payload)
  }, [pieChartProps.onLeaveData, standalone])

  return (
    <div className={styles.simpleWidgetPie}>
      <H6>{title}</H6>
      {widgetLink ? <Link onClick={widgetLink.clickHandler}>{widgetLink.text}</Link> : null}
      <div className={clsx(styles.widgetCols, className)}>
        <PieChart
          width={180}
          height={180}
          standalone={standalone}
          {...pieChartProps}
          data={widgetData}
          onHoverData={handleChartHover}
          onLeaveData={handleChartLeave}
        />
        <Legend
          showTotal
          {...legendProps}
          onHover={handleLegendHover}
          onLeave={handleLegendLeave}
        />
      </div>
    </div>
  )
}
