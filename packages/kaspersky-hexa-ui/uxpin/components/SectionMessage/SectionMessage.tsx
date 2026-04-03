import React from 'react'

import { SectionMessage as HexaSectionMessage } from '@src/section-message'
import { SectionMessageProps } from '@src/section-message/types'

const SectionMessage = ({
  children = 'Section message content',
  mode = 'info',
  title = 'Section message',
  ...props
}: SectionMessageProps): JSX.Element => (
  <HexaSectionMessage mode={mode} title={title} {...props}>
    {children}
  </HexaSectionMessage>
)

export default SectionMessage
