import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import {
  ActionButtonProps,
  ActionButtonSize,
  ActionButtonViewProps
} from './types'
import { useThemedActionButton } from './useThemedActionButton'
import { Text } from '@src/typography/text'
import ActionButtonCSS from './ActionButtonCSS'
import { Close } from '@kaspersky/icons/8'
import { CrossMedium, Cross } from '@kaspersky/icons/16'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const StyledActionButton = styled('button').withConfig({ shouldForwardProp })`
  ${ActionButtonCSS}
`

export const ActionButton = (rawProps: ActionButtonProps): JSX.Element => {
  const themedProps = useThemedActionButton(rawProps)
  const props = useTestAttribute(themedProps)
  return <ActionButtonView {...props} />
}

const getLabelSize = (size: ActionButtonSize): string => {
  switch (size) {
    case 'small':
      return 'BTM5'
    case 'large':
      return 'BTM3'
    default:
      return 'BTM4'
  }
}

const ActionIcon = ({ size }: { size: ActionButtonSize }) => {
  switch (size) {
    case 'small':
      return <Close className="kl-action-button-icon" />
    case 'large':
      return <Cross className="kl-action-button-icon" />
    default:
      return <CrossMedium className="kl-action-button-icon" />
  }
}

export const ActionButtonView = ({
  children,
  className,
  size = 'medium',
  type = 'button',
  interactive = true,
  icon,
  noIcon = false,
  testAttributes,
  ...props
}: ActionButtonViewProps): JSX.Element => {
  return (
    <StyledActionButton
      type={type}
      className={cn(
        'kl-action-button',
        { 'kl-action-button-w-icon': !noIcon },
        { 'kl-action-button-w-label': Boolean(children) },
        className
      )}
      interactive={interactive}
      {...testAttributes}
      {...props}
    >
      {!noIcon && (icon || <ActionIcon size={size} />)}
      {children && (
        <Text className="kl-action-button-text" type={getLabelSize(size)}>
          {children}
        </Text>
      )}
    </StyledActionButton>
  )
}
