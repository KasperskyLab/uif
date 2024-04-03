import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { StatusProps, StatusViewProps } from './types'
import { statusCss, StyledStatusElement } from './statusCss'
import { useThemedStatus } from './useThemedStatus'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Indicator } from '@src/indicator'

const StyledStatus = styled.span.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`${statusCss}`

export const Status = (rawProps: StatusProps): JSX.Element => {
  const themedProps = useThemedStatus(rawProps)
  const props = useTestAttribute(themedProps)
  return <StatusView {...props} />
}

const StatusView = ({
  icon,
  label,
  mode = 'default',
  cssConfig,
  testAttributes,
  className
}: StatusViewProps) => {
  return (
    <StyledStatus
      cssConfig={cssConfig}
      className={cn(className, 'kl6-status')}
      {...testAttributes}
    >
      <StyledStatusElement cssConfig={cssConfig}>
        {icon || <Indicator mode={mode} />}
      </StyledStatusElement>
      {label}
    </StyledStatus>
  )
}
