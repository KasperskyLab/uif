import React from 'react'
import styled from 'styled-components'
import { Locale } from '../../../locale'
import { Icon } from '../../../icon'
import { Link } from '../../../link'
import { Text } from '../../../typography'
import { SPACES } from '../../../../design-system/theme/themes/variables'

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
      <Icon size='small' name='Warning' />
      <Text type='BTM3' htmlTag='span'>
        {errorText || <Locale localizationKey='table.loadingError' />}
      </Text>
      <Link onClick={onClick}>
        {retryText || <Locale localizationKey='table.loadingRetry' />}
      </Link>
    </StyledErrorContainer>
  )
}
