import React from 'react'
import { Locale } from '../../../locale'
import { Text } from '../../../typography'

interface EndOfTableProps {
  text?: React.ReactNode
}

export const EndOfTable = ({ text }: EndOfTableProps) => {
  return (
    <Text type='BTM3' htmlTag='span'>
      {text || <Locale localizationKey='table.end' />}
    </Text>
  )
}
