import React, { memo } from 'react'
import { BlockProps, LineSegment } from 'victory'

import { useTheme } from '@kaspersky/hexa-ui/design-system'

import { DEFAULT_AXIS_HEIGHT, DEFAULT_CHART_PADDING } from '../../constants'
import { CustomTheme } from '../../hooks/useChartTheme'

import styles from './multiLineTooltip.module.scss'

export interface MultiLineProps {
  x?: number,
  axisHeight?: number,
  theme: CustomTheme,
  height?: number,
  padding?: BlockProps
}

export const MultiLine: React.FC<MultiLineProps> = memo(
  ({ x, axisHeight = DEFAULT_AXIS_HEIGHT, height = 0, padding }) => {
    const mainTheme = useTheme()
    const paddingTop = padding?.top ?? DEFAULT_CHART_PADDING.top

    return x === undefined
      ? null
      : (
          <LineSegment
            x1={x}
            x2={x}
            y1={paddingTop}
            y2={height - paddingTop - axisHeight}
            className={styles.line}
            style={{ stroke: mainTheme.colors.defaultPalette.red600 }}
          />
        )
  }
)
