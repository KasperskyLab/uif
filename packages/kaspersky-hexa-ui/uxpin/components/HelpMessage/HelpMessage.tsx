import React from 'react'

import { HelpMessage as HexaHelpMessage } from '@src/help-message'
import { HelpMessageProps } from '@src/help-message/types'

const HelpMessage = ({
  text = 'Helpful context for the current field',
  ...props
}: HelpMessageProps): JSX.Element => (
  <HexaHelpMessage text={text} {...props} />
)

export default HelpMessage
