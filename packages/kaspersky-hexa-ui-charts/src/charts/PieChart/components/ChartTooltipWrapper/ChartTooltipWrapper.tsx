import React, { FC, memo } from 'react'
import { VictoryTooltipProps } from 'victory'

import { CustomTheme } from '../../../../hooks/useChartTheme'
import { IChartDataPoint } from '../../../../types/chartData'
import { TChartEventCallback } from '../../../../types/chartEvent'
import { ChartTooltip } from '../../../ChartTooltip/ChartTooltip'
import { ChartTooltipContent } from '../ChartTooltipContent/ChartTooltipContent'

import styles from './ChartTooltipWrapper.module.scss'

export type ChartTooltipWrapperProps<T = unknown> = VictoryTooltipProps & {
  theme?: CustomTheme,
  tooltipComponent?: FC,
  tooltipContentComponent?: FC,
  data: IChartDataPoint<T>[],
  onClick?: TChartEventCallback<T>
};

export const ChartTooltipWrapper: React.FC<ChartTooltipWrapperProps> = memo(
  ({
    tooltipComponent: TooltipComponent = ChartTooltip,
    tooltipContentComponent = ChartTooltipContent,
    x = 0,
    y = 0,
    theme,
    data,
    datum
  }) => {
    return datum?.active
      ? (
      <foreignObject
        x={x}
        y={y}
        width={0}
        height={0}
        className={styles.foreignObjectContainer}
      >
        <TooltipComponent
          {...{
            tooltipContentComponent,
            activeRecord: datum as IChartDataPoint,
            data,
            theme
          }}
        />
      </foreignObject>
        )
      : null
  }
)

ChartTooltipWrapper.displayName = 'ChartTooltipWrapper'
