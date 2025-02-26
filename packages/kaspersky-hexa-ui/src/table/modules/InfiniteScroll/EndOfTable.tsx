import { Locale } from '@src/locale'
import { Text } from '@src/typography'
import React from 'react'

interface EndOfTableProps {
  text?: React.ReactNode
}

export const EndOfTable = ({ text }: EndOfTableProps) => {
  return (
    <Text type="BTM3" htmlTag="span">
      {text || <Locale localizationKey="table.end" />}
    </Text>
  )
}
