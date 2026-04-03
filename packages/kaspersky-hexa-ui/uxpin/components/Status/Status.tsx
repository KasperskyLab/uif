import React from 'react'

import { Status as HexaStatus } from '@src/status'
import { StatusProps } from '@src/status/types'

const Status = ({
  label = 'Active',
  mode = 'positive',
  ...props
}: StatusProps): JSX.Element => <HexaStatus label={label} mode={mode} {...props} />

export default Status
