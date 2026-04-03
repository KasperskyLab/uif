import React from 'react'

import { Alert as HexaAlert } from '@src/alert'
import { AlertProps } from '@src/alert/types'

const Alert = ({
  children = 'Alert message',
  mode = 'info',
  ...props
}: AlertProps): JSX.Element => (
  <HexaAlert mode={mode} {...props}>
    {children}
  </HexaAlert>
)

export default Alert
