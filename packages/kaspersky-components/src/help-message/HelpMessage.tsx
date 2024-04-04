import React, { FC } from 'react'
import styled from 'styled-components'
import { Text } from '../typography/text'
import { useThemedHelpMessage } from './useThemedHelpMessage'
import { helpMessageCss } from './helpMessageCss'
import { HelpMessageProps, HelpMessageViewProps } from './types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

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

export const HelpMessageView: FC<HelpMessageViewProps> = ({
  text,
  testAttributes,
  ...rest
}: HelpMessageViewProps) => {
  return (
    <StyledHelpMessage
      {...testAttributes}
      {...rest}
    >
      { text }
    </StyledHelpMessage>
  )
}
