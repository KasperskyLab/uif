import { useEffect, useState } from 'react'
import * as React from 'react'
import { DatePicker } from './DatePicker'
import styled from 'styled-components'
import { pickerCss, pickerContainerCss, listCss } from './pickerCss'
import { useThemedPicker, useThemedPickerInput } from './useThemedPicker'
import { Icon } from '../icon'
import { Button } from '../button'
import { ICalendarProps, PickerCssConfig, PickerInputCssConfig } from './types'

const StyledPicker = styled(DatePicker).withConfig<ICalendarProps & { cssConfig: PickerInputCssConfig }>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${pickerCss}
`

const CalendarContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${pickerContainerCss}`

const StyledList = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${listCss}`

const Presets: React.VFC<Required<Pick<ICalendarProps, 'presets' | 'onChange'>>> = ({ presets, onChange }) => (
  <StyledList>
    {presets.map(({ title, value }, index) =>
      <li key={index} onClick={() => onChange(new Date(value), value.toString())}>
        {typeof title === 'string' ? <Button mode='tertiary'>{title}</Button> : title}
      </li>
    )}
  </StyledList>
)

export const CalendarView: React.VFC<ICalendarProps & { pickerCssConfig: PickerCssConfig, inputCssConfig: PickerInputCssConfig }> = ({
  presets,
  value = null,
  onChange,
  pickerCssConfig,
  inputCssConfig,
  suffixIcon,
  ...rest
}) => {
  const [date, setDate] = useState<Date | null>(value)

  useEffect(() => {
    setDate(value)
  }, [value])

  return (
    <StyledPicker
      {...rest}
      panelRender={container =>
        <CalendarContainer cssConfig={pickerCssConfig}>
          {container}
        </CalendarContainer>
      }
      onChange={(date) => {
        setDate(date)
        onChange?.(date, date?.toDateString() ?? '')
      }}
      onSelect={(value) => setDate(value)}
      value={date}
      suffixIcon={suffixIcon ?? <Icon size='small' name='Calendar' />}
      showToday={false}
      renderExtraFooter={presets ? () => <Presets presets={presets} onChange={setDate} /> : undefined}
      cssConfig={inputCssConfig}
    />
  )
}

export const Calendar: React.VFC<ICalendarProps> = (rawProps) => {
  const { cssConfig: pickerProps } = useThemedPicker(rawProps)
  const { cssConfig: inputPickerProps } = useThemedPickerInput(rawProps)
  return <CalendarView
    role='datepicker'
    pickerCssConfig={pickerProps}
    inputCssConfig={inputPickerProps}
    {...rawProps}
  />
}
