import React, { useMemo } from 'react'
import { BlockProps } from 'victory'

import { Space } from '@kaspersky/hexa-ui'

import { TextTruncateWithPopup } from '../../../../src/components/TextTruncateWithPopup/TextTruncateWithPopup'
import { getRectInsideEllipsis } from '../helpers/getRectInsideEllipsis'
import styles from '../pie.module.scss'

export const usePieChartTextComponent = (
  width: number,
  height: number,
  total: number,
  innerRadiusRatio: number,
  description?: string,
  padding?: BlockProps
) => {
  return useMemo(() => {
    return ({ children, ...props }: any) => {
      const { x, y } = getRectInsideEllipsis(width, height, innerRadiusRatio, padding)

      return (
        <foreignObject {...props} x={props.x - x / 2} y={props.y - y / 2} width={x} height={y}>
          <Space gap={16} wrap="nowrap" direction="vertical" align="center" justify="center" className={styles.pieLabel}>
            <TextTruncateWithPopup customTooltipContent={total}>{children}</TextTruncateWithPopup>
            {description && (
              <TextTruncateWithPopup color="secondary" className={styles.pieLabelDescription}>
                {description}
              </TextTruncateWithPopup>
            )}
          </Space>
        </foreignObject>
      )
    }
  }, [
    description,
    height,
    innerRadiusRatio,
    padding?.bottom,
    padding?.left,
    padding?.right,
    padding?.top,
    total,
    width
  ])
}
