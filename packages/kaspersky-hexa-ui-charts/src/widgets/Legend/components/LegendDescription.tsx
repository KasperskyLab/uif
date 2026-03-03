import React from 'react'

import { Text } from '@kaspersky/hexa-ui'

interface LegendDescriptionProps {
  value: string
}

export const LegendDescription: React.FC<LegendDescriptionProps> = ({ value }) => {
  return <Text type="BTR4" color="secondary">{value}</Text>
}
