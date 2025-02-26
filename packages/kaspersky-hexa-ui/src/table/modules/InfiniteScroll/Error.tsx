import { SPACES } from '@design-system/theme/themes/variables'
import { Icon } from '@src/icon'
import { Link } from '@src/link'
import { Locale } from '@src/locale'
import { Text } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

const StyledErrorContainer = styled.span`
  & > *:not(last-child) {
    margin-right: ${SPACES[4]}px;
  }

  .icon {
    vertical-align: middle;
  }
`

interface ErrorProps {
  onClick: () => void,
  errorText?: React.ReactNode,
  retryText?: React.ReactNode
}

export const Error = ({ onClick, errorText, retryText }: ErrorProps) => {
  return (
    <StyledErrorContainer>
      <Icon size="small" name="Warning" />
      <Text type="BTM3" htmlTag="span">
        {errorText || <Locale localizationKey="table.loadingError" />}
      </Text>
      <Link onClick={onClick}>
        {retryText || <Locale localizationKey="table.loadingRetry" />}
      </Link>
    </StyledErrorContainer>
  )
}
