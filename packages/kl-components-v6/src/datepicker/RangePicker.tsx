import { useState } from 'react'
import * as React from 'react'
import { Button } from '../button'
import { DatePicker } from './DatePicker'
import styled from 'styled-components'
import { pickerCss, listCss, pickerContainerCss } from './pickerCss'
import { useThemedPicker, useThemedPickerInput } from './useThemedPicker'
import { IRangePickerProps, PickerCssConfig, PickerInputCssConfig } from './types'
import { Size } from '../../design-system/types'

const { RangePicker: AntdRangePicker } = DatePicker

const StyledAntdRangePicker = styled(AntdRangePicker)`
  ${pickerCss}
`
const Container = styled.div`
  ${pickerContainerCss}
`
const StyledList = styled.div`
  ${listCss}
`

const Presets: React.FC<Pick<IRangePickerProps, 'presets' | 'onChange'>> = ({ presets, onChange, children }) => (
  <StyledList>
    {presets?.map(({ title, value }, index) =>
      <li key={index} onClick={() => onChange?.(value)}>
        {typeof title === 'string' ? <Button mode='tertiary'>{title}</Button> : title}
      </li>
    )}
    <div>
      {children}
    </div>
  </StyledList>
)

export const RangePickerView: React.VFC<IRangePickerProps & { pickerCssConfig: PickerCssConfig, inputCssConfig: PickerInputCssConfig }> = ({
  value = [null, null],
  onChange,
  okText = 'apply',
  cancelText = 'cancel',
  resetText = 'reset',
  pickerCssConfig,
  inputCssConfig,
  presets,
  open,
  onOpenChange,
  hasResetButton = false,
  ...rest
}) => {
  const [isOpen, setOpenState] = useState(false)
  const [date, setDate] = useState(value)
  const [initDate, setInitDate] = useState(date)
  const hasValue = !!value && !!value[0] && !!value[1]
  return (
    <StyledAntdRangePicker
      {...rest}
      cssConfig={inputCssConfig}
      open={open ?? isOpen}
      value={date}
      onOpenChange={(value) => {
        if (value) {
          setInitDate(date)
        }
        onOpenChange?.(true)
        setOpenState(true)
      }}
      onCalendarChange={(value) => {
        if (value === null) {
          onChange?.(null) // reset
        }
        setDate(value)
      }}
      renderExtraFooter={() => (
        <Presets presets={presets} onChange={setDate}>
          {hasResetButton && hasValue && (
            <Button
              mode='secondary'
              size={Size.Small}
              onClick={() => {
                setDate(null)
                onChange?.(null)
                onOpenChange?.(false)
                setOpenState(false)
              }}
            >
              {resetText}
            </Button>
          )}
          <Button
            mode='secondary'
            size={Size.Medium}
            onClick={() => {
              setDate(initDate)
              onOpenChange?.(false)
              setOpenState(false)
            }}
          >
            {cancelText}
          </Button>
          <Button
            mode='primaryBlack'
            size={Size.Medium}
            disabled={(!initDate?.[0] || !initDate?.[1]) && (!date?.[0] || !date?.[1])}
            onClick={() => {
              onChange?.(date)
              setDate(date)
              onOpenChange?.(false)
              setOpenState(false)
            }}
          >
            {okText}
          </Button>
        </Presets>
      )}
      panelRender={container =>
        <Container cssConfig={pickerCssConfig}>
          {container}
        </Container>
      }
    />
  )
}

export const RangePicker: React.VFC<any> = (rawProps) => {
  const { cssConfig: pickerCssConfig } = useThemedPicker(rawProps)
  const { cssConfig: inputCssConfig } = useThemedPickerInput(rawProps)
  return <RangePickerView
    pickerCssConfig={pickerCssConfig}
    inputCssConfig={inputCssConfig}
    {...rawProps}/>
}
