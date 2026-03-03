import React from 'react'

import { Space, Text } from '@kaspersky/hexa-ui'

import { cutNumberToPrecision } from '../../../helpers/getPercent'
import styles from '../Legend.module.scss'

import { LegendItemDivider } from './LegendItemDivider'

interface LegendTotalProps {
  value: number,
  precision?: number,
  description?: string
}

export const LegendTotal: React.FC<LegendTotalProps> = ({ value, precision, description }) => (
    <Space direction="vertical" align="stretch">
      <LegendItemDivider className={styles.legendItemDivider}/>
      <Space gap={16} justify="space-between">
        <Text type="BTR3">{description}</Text>
        <Text type="MTR3">{cutNumberToPrecision(value, precision)}</Text>
      </Space>
    </Space>
)
