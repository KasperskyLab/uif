import React, { FC, memo, useCallback } from 'react'
import { BlockProps, ScaleName } from 'victory'

import { Popover } from '@kaspersky/hexa-ui'

import { CustomTheme } from '../../../..//hooks/useChartTheme'
import { TChartEventCallback } from '../../../..//types/chartEvent'
import { getEventParams } from '../../../../helpers/getEventParams'
import { IChartDataPoint, IStackedChartData, StackedChartTooltipPointsData } from '../../../../types/chartData'
import { ChartTooltipContent, ChartTooltipContentProps } from '../../../ChartTooltipContent/ChartTooltipContent'
import { MetricLine, MetricLineProps } from '../MetricLine'

import styles from './ChartTooltip.module.scss'

export type ChartTooltipProps<T = any> = {
  theme?: CustomTheme,
  lineComponent?: FC<MetricLineProps>,
  tooltipContentComponent?: FC<ChartTooltipContentProps>,
  top?: number,
  left?: number,
  x?: number,
  y?: number,
  height?: number,
  width?: number,
  totalLabel?: string,
  showTotal?: boolean,
  metricLineWidth?: number,
  activeRecord: IChartDataPoint<T>,
  enrichedData?: StackedChartTooltipPointsData<T>,
  data?: IStackedChartData<T>,
  padding?: BlockProps,
  xScale?: ScaleName,
  otherLabel?: string,
  tooltipDateFormat?: (date: number | Date) => string,
  onClick?: TChartEventCallback<T>
};

export const GenericChartTooltip = <T, >({
  theme,
  padding,
  height,
  showTotal,
  totalLabel,
  metricLineWidth,
  lineComponent: LineComponent = MetricLine,
  tooltipContentComponent: TooltipContentComponent = ChartTooltipContent,
  activeRecord,
  enrichedData,
  data,
  xScale,
  otherLabel,
  tooltipDateFormat,
  onClick
}: ChartTooltipProps<T>) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        if (enrichedData && enrichedData[0]) {
          const [stackedChartData] = data || []

          onClick(getEventParams(event), enrichedData[0], stackedChartData)
        } else {
          console.error('ChartTooltip: points are not defined')
        }
      }
    },
    [data, onClick, enrichedData]
  )
  return (
    <Popover
      content={
              <TooltipContentComponent
                showTotal={showTotal}
                totalLabel={totalLabel}
                enrichedData={enrichedData}
                activeRecord={activeRecord}
                theme={theme}
                otherLabel={otherLabel}
                xScale={xScale}
                tooltipDateFormat={tooltipDateFormat}
                />
              }
      placement="bottom"
      shouldLimitSize
      defaultVisible
      overlayClassName={styles.disableAnimation}
    >
      <LineComponent
        onClick={handleClick}
        height={height}
        metricLineWidth={metricLineWidth}
        theme={theme}
        padding={padding}
      />
    </Popover>
  )
}

export const ChartTooltip = memo(GenericChartTooltip) as typeof GenericChartTooltip
