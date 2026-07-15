import { DEFAULT_TIME_FORMAT } from '@design-system/tokens'
import { RangeSeparator } from '@helpers/components/range-separator'
import React, { useCallback } from 'react'
import styled from 'styled-components'

import { TimeInput } from './TimeInput'
import { timePickerCss } from './timePickerCss'
import { RangeTimeInputProps } from './types'
import { IMaskInputProps } from 'react-imask'

const StyledRangeTimeInput = styled.div`
  ${timePickerCss}
`

export const RangeTimeInput: React.FC<RangeTimeInputProps> = ({
  format = DEFAULT_TIME_FORMAT,
  testId,
  placeholder,
  theme,
  valueStart,
  valueEnd,
  onChangeStart,
  onChangeEnd,
  className,
  disabled,
  readOnly,
  validationStatus
}: RangeTimeInputProps) => {
  const getTimeInput = (value?: string, onChange?: ((value: string, mask?: IMaskInputProps | undefined) => void), testId?: string) => {
    return (
      <TimeInput
        value={value}
        testId={testId}
        format={format}
        placeholder={placeholder}
        onChange={onChange}
        theme={theme}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        validationStatus={validationStatus}
      />
    )
  }

  return (
    <StyledRangeTimeInput className={`hexa-ui-time-range ${validationStatus}`} >
      {getTimeInput(valueStart, onChangeStart, testId && `${testId}-start`)}
      <RangeSeparator />
      {getTimeInput(valueEnd, onChangeEnd, testId && `${testId}-end`)}
    </StyledRangeTimeInput>
  )
}
