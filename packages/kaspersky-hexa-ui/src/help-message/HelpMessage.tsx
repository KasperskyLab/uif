import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Text } from '../typography/text'

import { helpMessageCss } from './helpMessageCss'
import { HelpMessageProps, HelpMessageViewProps } from './types'
import { useThemedHelpMessage } from './useThemedHelpMessage'

const StyledHelpMessage = styled(Text).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop as string)
}).attrs({ type: 'BTR4' })`
${helpMessageCss}
`

export const HelpMessage: FC<HelpMessageProps> = (rawProps: HelpMessageProps) => {
  const themedProps = useThemedHelpMessage(rawProps)
  const props = useTestAttribute(themedProps)
  return <HelpMessageView {...props} />
}

const HelpMessageView: FC<HelpMessageViewProps> = ({
  text,
  testAttributes,
  className,
  ...rest
}: HelpMessageViewProps) => {
  return (
    <StyledHelpMessage
      className={cn('kl6-help-message', className)}
      {...testAttributes}
      {...rest}
    >
      { text }
    </StyledHelpMessage>
  )
}
