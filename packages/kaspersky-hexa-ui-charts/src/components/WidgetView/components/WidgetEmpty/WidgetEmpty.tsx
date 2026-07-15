import React from 'react'

import { Placeholder, Space, Text } from '@kaspersky/hexa-ui'

export interface IWidgetEmptyProps {
  showNoData?: boolean
  label?: string
  noDataTitle?: string
  noDataDescription?: string
}

const NO_DATA_HEADING = 'No data'
const NO_ITEMS_LABEL = 'No items'

export const WidgetEmpty: React.FC<IWidgetEmptyProps> = ({
  showNoData,
  label,
  noDataTitle = NO_DATA_HEADING,
  noDataDescription
}) => {
  return (
    <Space height="100%">
      {showNoData ? (
        <Placeholder image="noData" title={noDataTitle} description={noDataDescription} />
      ) : (
        <Text>{label || NO_ITEMS_LABEL}</Text>
      )}
    </Space>
  )
}
