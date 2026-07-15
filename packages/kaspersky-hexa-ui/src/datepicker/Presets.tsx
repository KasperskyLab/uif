import { Button } from '@src/button'
import { Text } from '@src/typography'
import { TextReducer } from '@helpers/index'
import React from 'react'
import styled from 'styled-components'

import { listCss } from './pickerCss'
import { CalendarProps, RangePickerProps } from './types'

const StyledList = styled.div`${listCss}`
const MAX_PRESETS = 9

const PresetItem = ({ title }: { title: string }) => (
  <Button size="small" mode="tertiary">
    <TextReducer tooltip={title}>
      <Text type="BTR4">
        {title}
      </Text>
    </TextReducer>
  </Button>
)

export const PresetsRangePicker: React.FC<Pick<RangePickerProps, 'presets' | 'onChange'>> = ({
  presets,
  onChange
}) => (
  <StyledList>
    {presets?.slice(0, MAX_PRESETS).map(({ title, value }, index) => (
      <li key={index} onClick={() => onChange?.(value)}>
        {typeof title === 'string' ? <PresetItem title={title} /> : title}
      </li>
    ))}
  </StyledList>
)

export const PresetsCalendar: React.FC<Pick<CalendarProps, 'presets' | 'onChange'>> = ({
  presets,
  onChange
}) => (
  <StyledList>
    {presets?.slice(0, MAX_PRESETS).map(({ title, value }, index) => (
      <li key={index} onClick={() => onChange?.(new Date(value), value.toString())}>
        {typeof title === 'string' ? <PresetItem title={title} /> : title}
      </li>
    ))}
  </StyledList>
)
