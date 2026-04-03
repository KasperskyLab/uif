import React from 'react'

import { TimeInput as HexaTimeInput } from '@src/time-input'
import { TimeInputProps } from '@src/time-input/types'

import { FrameFill } from '../../preview'

const TimeInput = (props: TimeInputProps): JSX.Element => (
  <FrameFill>
    <HexaTimeInput {...props} />
  </FrameFill>
)

export default TimeInput
