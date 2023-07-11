import React from 'react'
import { timeInputStyles } from './timeInputCss'
import { useThemedTextbox } from '../input'
import { InputCssConfig, IInputStyleProps, ISizeType } from '../input/types'
import { ITimeInput } from './types'
import generatePicker from 'antd/lib/date-picker/generatePicker'
import type { GenerateConfig } from 'rc-picker/lib/generate'
import config from 'rc-picker/lib/generate/dateFns'
import styled from 'styled-components'

const DatePicker = generatePicker<Date>(config as GenerateConfig<Date>)

const TimePicker = React.forwardRef<any, ITimeInput>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
})

TimePicker.displayName = 'TimePicker'

const StyledTimeInput = styled(TimePicker).withConfig<ITimeInput & { cssConfig: InputCssConfig, size?: ISizeType & unknown }
  >({
    shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
  })`
  ${timeInputStyles}
`

export const TimeInput = (rawProps: ITimeInput & IInputStyleProps): JSX.Element => {
  const props = useThemedTextbox(rawProps)
  return <StyledTimeInput {...props} />
}
