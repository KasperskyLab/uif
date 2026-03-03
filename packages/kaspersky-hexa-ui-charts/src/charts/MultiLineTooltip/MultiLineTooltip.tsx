import { get } from 'lodash'
import React, { memo, useLayoutEffect, useRef, useState } from 'react'
import { BlockProps, VictoryTooltipProps } from 'victory'

import { DEFAULT_AXIS_HEIGHT, PREVENT_SCROLL_WIDTH } from '../../constants'
import { CustomTheme } from '../../hooks/useChartTheme'
import { IStackedChartDataPoint } from '../../types/chartData'

import { MultiLine } from './MultiLine'

export type MultiLineTooltipProps = VictoryTooltipProps & {
  data: IStackedChartDataPoint<unknown>[],
  theme: CustomTheme,
  axisOffset?: number,
  yField: string,
  axisHeight?: number,
  onPosition?: (x?: number) => void,
  padding?: BlockProps
}

export const MultiLineTooltip: React.FC<MultiLineTooltipProps> = memo(
  ({ data, height = 0, x = 0, theme, activePoints, yField, axisHeight = DEFAULT_AXIS_HEIGHT, padding }) => {
    const container = useRef<SVGForeignObjectElement>(null)
    const tooltip = useRef<HTMLDivElement>(null)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const activeIndex = get(activePoints?.find((ap) => !!ap.continuous), 'eventKey') || 0

    useLayoutEffect(() => {
      if (!tooltip.current) {
        return
      }
      const halfTooltipWidth = tooltip.current.clientWidth / 2
      const tooltipHeight = tooltip.current.clientHeight

      let { top, left } = container.current?.getBoundingClientRect() ?? {
        top: 0,
        left: 0
      }
      left = Math.min(Math.max(left, halfTooltipWidth), window.innerWidth - halfTooltipWidth - PREVENT_SCROLL_WIDTH)

      if (top + tooltipHeight > window.innerHeight) {
        top = top - tooltipHeight - height
      }

      setTop(top)
      setLeft(left)
    }, [x, tooltip.current, container.current])

    return (
      <MultiLine x={x} height={height} theme={theme} padding={padding} axisHeight={axisHeight} />
    )
  }
)
