import React from 'react'

import { Space, Text } from '@kaspersky/hexa-ui'

import { getPercent } from '../../../helpers/getPercent'
import { DEFAULT_PERCENT_FONT_SIZE } from '../constants'
import styles from '../Legend.module.scss'

interface LegendItemValueProps {
  value: number,
  total: number,
  showPercentage?: boolean,
  precision?: number,
  maxPercentLength?: number,
  percentFontSize?: number
}

export const LegendItemValue: React.FC<LegendItemValueProps> = ({
  value,
  total,
  showPercentage,
  precision,
  maxPercentLength,
  percentFontSize = DEFAULT_PERCENT_FONT_SIZE
}) => {
  const percent = getPercent(value, total, precision).toFixed(precision)
  const width = maxPercentLength ? maxPercentLength * percentFontSize + percentFontSize : undefined

  return (
    <Space gap={8} wrap="nowrap" direction="horizontal" align="center" className={styles.legendItemValue}>
      <Text type="MTR3">{value}</Text>
      {showPercentage && <Text className={styles.legendItemValuePercentage} style={{ width }} type="MTR3">{percent}%</Text>}
    </Space>
  )
}
