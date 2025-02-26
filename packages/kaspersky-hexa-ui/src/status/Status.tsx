import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Indicator } from '@src/indicator'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Group } from '../helpers/Group'

import { statusCss, StyledStatusElement } from './statusCss'
import { StatusProps, StatusVarians, StatusViewProps } from './types'
import { useThemedStatus } from './useThemedStatus'

const StyledStatus = styled.span.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`${statusCss}`

export const Status: FC<StatusProps> & StatusVarians = (rawProps: StatusProps): JSX.Element => {
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
  const hasElement = icon || mode !== 'default'
  return (
    <StyledStatus
      cssConfig={cssConfig}
      className={cn(className, 'kl6-status')}
      {...testAttributes}
    >
      {hasElement && (
        <StyledStatusElement cssConfig={cssConfig}>
          {icon || (mode !== 'default' && <Indicator mode={mode} />)}
        </StyledStatusElement>
      )}
      {label}
    </StyledStatus>
  )
}

Status.Group = props => <Group<StatusProps> Component={Status} orientation="vertical" {...props} />
Status.Group.displayName = 'StatusGroup'
