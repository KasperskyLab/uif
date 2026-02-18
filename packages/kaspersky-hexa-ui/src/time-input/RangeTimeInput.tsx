import { DEFAULT_TIME_FORMAT } from '@design-system/tokens'
import { RangeSeparator } from '@helpers/components/range-separator'
import React from 'react'
import styled from 'styled-components'

import { TimeInput } from './TimeInput'
import { timePickerCss } from './timePickerCss'
import { RangeTimeInputProps } from './types'

const StyledRangeTimeInput = styled.div`
  ${timePickerCss}
`

export const RangeTimeInput: React.FC<RangeTimeInputProps> = ({
  format = DEFAULT_TIME_FORMAT,
  testId,
  klId,
  ...rest
}: RangeTimeInputProps) => {
  return <StyledRangeTimeInput className="hexa-ui-time-range">
    <TimeInput {...rest} testId={testId && `${testId}-start`} format={format} />
    <RangeSeparator/>
    <TimeInput {...rest} testId={testId && `${testId}-end`} format={format} />
  </StyledRangeTimeInput>
}
