import { Text } from '@src/typography'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface EndOfTableProps {
  text?: React.ReactNode
}

export const EndOfTable = ({ text }: EndOfTableProps) => {
  const { t } = useTranslation()

  return (
    <Text type="BTM3" htmlTag="span">
      {text || t('table.end')}
    </Text>
  )
}
