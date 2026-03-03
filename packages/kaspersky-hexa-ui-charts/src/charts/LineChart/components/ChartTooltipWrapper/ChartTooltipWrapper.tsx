import { get } from 'lodash'
import React, { FC, memo, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { BlockProps, ScaleName, VictoryTooltipProps } from 'victory'

import { ALL_DATA_FIELD, LINE_CHART_SCATTER_LAYER_NAME } from '../../../../constants'
import { CustomTheme } from '../../../../hooks/useChartTheme'
import { IChartDataPoint, StackedChartTooltipPointsData } from '../../../../types/chartData'
import { TChartEventCallback } from '../../../../types/chartEvent'
import { ChartTooltipContent, ChartTooltipContentProps } from '../../../ChartTooltipContent/ChartTooltipContent'
import { ChartTooltip, ChartTooltipProps } from '../ChartTooltip/ChartTooltip'
import { MetricLine, MetricLineProps } from '../MetricLine'

import styles from './ChartTooltipWrapper.module.scss'

export type ChartTooltipWrapperProps<T = any> = VictoryTooltipProps & {
  theme?: CustomTheme,
  metricLineWidth?: number,
  tooltipComponent?: FC<ChartTooltipProps>,
  lineComponent?: FC<MetricLineProps>,
  tooltipContentComponent?: FC<ChartTooltipContentProps>,
  padding?: BlockProps,
  xScale?: ScaleName,
  yScale?: ScaleName,
  totalLabel?: string,
  showTotal?: boolean,
  otherLabel?: string,
  onClick?: TChartEventCallback<T>,
  tooltipDateFormat?: (date: number | Date) => string
};

export const ChartTooltipWrapper: React.FC<ChartTooltipWrapperProps> = memo(
  ({
    tooltipComponent: TooltipComponent = ChartTooltip,
    lineComponent = MetricLine,
    tooltipContentComponent = ChartTooltipContent,
    height = 0,
    width = 0,
    x = 0,
    y = 0,
    metricLineWidth = 2,
    theme,
    activePoints = [],
    padding,
    xScale,
    yScale,
    showTotal,
    totalLabel,
    otherLabel,
    datum,
    tooltipDateFormat,
    onClick
  }) => {
    const container = useRef<SVGForeignObjectElement>(null)
    const [{ top, left }, setPosition] = useState<{ top?: number, left?: number }>({})
    const data = useMemo(() => activePoints.map((p) => get(p, ALL_DATA_FIELD)), [activePoints])
    const enrichedData: StackedChartTooltipPointsData = useMemo(
      () =>
        activePoints.map((d) => {
          const point = get(d, ALL_DATA_FIELD) || {}

          return {
            ...d,
            ...point,
            color: point.color || d.color
          }
        }).filter((point) => {
          return point && (point.name || point.title) && point.childName !== LINE_CHART_SCATTER_LAYER_NAME
        }),
      [activePoints]
    )

    useLayoutEffect(() => {
      const { top, left } = container.current?.getBoundingClientRect() ?? {
        top: 0,
        left: 0
      }

      setPosition({ top, left })
    }, [x])

    return (
    <foreignObject ref={container} x={x} y={0} width={0} height={0} className={styles.foreignObjectContainer}>
      {top && left
        ? (
        <TooltipComponent
          {...{
            showTotal,
            totalLabel,
            top,
            left,
            x: top,
            y,
            height,
            width,
            lineComponent,
            tooltipContentComponent,
            metricLineWidth,
            activeRecord: datum as IChartDataPoint,
            enrichedData,
            data,
            theme,
            padding,
            xScale,
            yScale,
            otherLabel,
            tooltipDateFormat,
            onClick
          }}
        />
          )
        : null}
    </foreignObject>
    )
  }
)

ChartTooltipWrapper.displayName = 'ChartTooltipWrapper'
