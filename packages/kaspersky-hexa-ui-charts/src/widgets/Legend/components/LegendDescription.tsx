import React from 'react'

import { Text } from '@kaspersky/hexa-ui'

import styles from '../Legend.module.scss'

interface LegendDescriptionProps {
  value: string
}

export const LegendDescription: React.FC<LegendDescriptionProps> = ({ value }) => {
  return <Text className={styles.legendDescription} type="BTR4" color="secondary">{value}</Text>
}
