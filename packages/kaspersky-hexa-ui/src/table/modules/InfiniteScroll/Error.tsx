import { StatusWarningSolid } from '@kaspersky/hexa-ui-icons/16'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface ErrorProps {
  onClick?: () => void,
  errorText?: React.ReactNode,
  retryText?: React.ReactNode
}

export const Error = ({ onClick, errorText, retryText }: ErrorProps) => {
  const { t } = useTranslation()

  return (
    <Space justify="center" direction="vertical">
      <Space gap="dependent" align="center">
        <StatusWarningSolid color="var(--icon--status--statuswarning)" />
        <Text type="BTM3" htmlTag="span">
          {errorText || t('table.loadingError')}
        </Text>
      </Space>
      {onClick && (
        <Link onClick={onClick}>
          {retryText || t('table.loadingRetry')}
        </Link>
      )}
    </Space>
  )
}
