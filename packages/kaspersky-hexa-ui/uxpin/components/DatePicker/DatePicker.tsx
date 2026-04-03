import React from 'react'

import { Calendar as HexaDatePicker } from '@src/datepicker'
import { CalendarProps } from '@src/datepicker/types'

import { FrameFill, mergeFrameStyle } from '../../preview'

const DatePicker = ({
  style,
  ...props
}: CalendarProps): JSX.Element => (
  <FrameFill>
    <HexaDatePicker style={mergeFrameStyle(style)} {...props} />
  </FrameFill>
)

export default DatePicker
