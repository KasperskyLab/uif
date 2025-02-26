import { Button } from '@src/button'
import React from 'react'
import styled from 'styled-components'

import { listCss } from './pickerCss'
import { CalendarProps, RangePickerProps } from './types'

const StyledList = styled.div`${listCss}`

export const PresetsRangePicker: React.FC<Pick<RangePickerProps, 'presets' | 'onChange'>> = ({
  presets,
  onChange,
  children
}) => (
  <StyledList>
    {presets?.map(({ title, value }, index) => (
      <li key={index} onClick={() => onChange?.(value)}>
        {typeof title === 'string' ? <Button mode="tertiary">{title}</Button> : title}
      </li>
    ))}
    <div>{children}</div>
  </StyledList>
)

export const PresetsCalendar: React.FC<Pick<CalendarProps, 'presets' | 'onChange'>> = ({
  presets,
  onChange
}) => (
  <StyledList>
    {presets?.map(({ title, value }, index) =>
      <li key={index} onClick={() => onChange?.(new Date(value), value.toString())}>
        {typeof title === 'string' ? <Button mode="tertiary" size="small" >{title}</Button> : title}
      </li>
    )}
  </StyledList>
)
