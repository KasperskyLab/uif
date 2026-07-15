import { StatusWarningSolid } from '@kaspersky/hexa-ui-icons/16'
import { Link } from '@src/link'
import { Locale } from '@src/locale'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import React from 'react'

interface ErrorProps {
  onClick?: () => void,
  errorText?: React.ReactNode,
  retryText?: React.ReactNode
}

export const Error = ({ onClick, errorText, retryText }: ErrorProps) => {
  return (
    <Space justify="center" direction="vertical">
      <Space gap="dependent" align="center">
        <StatusWarningSolid color="var(--icon--status--statuswarning)" />
        <Text type="BTM3" htmlTag="span">
          {errorText || <Locale localizationKey="table.loadingError" />}
        </Text>
      </Space>
      {onClick && (
        <Link onClick={onClick}>
          {retryText || <Locale localizationKey="table.loadingRetry" />}
        </Link>
      )}
    </Space>
  )
}
