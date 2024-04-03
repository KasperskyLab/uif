import React, { ReactElement } from 'react'
import { FieldSetItemControl } from './types'
import { Textbox } from '@src/input'
import { Select } from '@src/select'
import { Search } from '@src/search'
import { Calendar, RangePicker } from '@src/datepicker'
import { TimeInput } from '@src/time-input'
import { CodeViewer } from '@src/code-viewer'
import { Button } from '@src/button'
import { SegmentedButton } from '@src/segmented-button'
import { Checkbox } from '@src/checkbox'
import { Radio } from '@src/radio'
import { Toggle } from '@src/toggle'
import { Link } from '@src/link'
import { Text } from '@src/typography'
import { Status } from '@src/status'
import {
  TextboxProps,
  TextboxMaskedProps,
  TextboxNumberProps,
  TextboxPasswordProps,
  TextboxTextareaProps
} from '@src/input/types'
import { SelectProps } from '@src/select/types'
import { SearchProps } from '@src/search/types'
import { CalendarProps, RangePickerProps } from '@src/datepicker/types'
import { TimeInputProps } from '@src/time-input/types'
import { CodeViewerProps } from '@src/code-viewer/types'
import { ButtonProps } from '@src/button/types'
import { SegmentedButtonProps } from '@src/segmented-button/types'
import { CheckboxProps, CheckboxGroupProps } from '@src/checkbox/types'
import { RadioProps } from '@src/radio/types'
import { ToggleProps } from '@src/toggle/types'
import { LinkProps } from '@src/link/types'
import { TextProps } from '@src/typography/text/types'
import { StatusProps } from '@src/status/types'

export const getMappedControl = (control: FieldSetItemControl): ReactElement => {
  if (React.isValidElement(control)) {
    return control
  }

  const { component, ...props } = control

  switch (component) {
    case 'textbox':
      return <Textbox {...props as TextboxProps} />
    case 'textbox-masked':
      return <Textbox.Masked {...props as TextboxMaskedProps} />
    case 'textbox-number':
      return <Textbox.Number {...props as TextboxNumberProps} />
    case 'textbox-password':
      return <Textbox.Password {...props as TextboxPasswordProps} />
    case 'textbox-textarea':
      return <Textbox.Textarea {...props as TextboxTextareaProps} />
    case 'select':
      return <Select {...props as SelectProps} />
    case 'search':
      return <Search {...props as SearchProps} />
    case 'calendar':
      return <Calendar {...props as CalendarProps} />
    case 'range-picker':
      return <RangePicker {...props as RangePickerProps} />
    case 'time-input':
      return <TimeInput {...props as TimeInputProps} />
    case 'code-viewer':
      return <CodeViewer {...props as CodeViewerProps<any>} />
    case 'button':
      return <Button {...props as ButtonProps} />
    case 'segmented-button':
      return <SegmentedButton {...props as SegmentedButtonProps} />
    case 'checkbox':
      return <Checkbox {...props as CheckboxProps} />
    case 'checkbox-group':
      return <Checkbox.Group {...props as CheckboxGroupProps} />
    case 'radio':
      return <Radio {...props as RadioProps} />
    case 'toggle':
      return <Toggle {...props as ToggleProps} />
    case 'link':
      return <Link {...props as LinkProps} />
    case 'text':
      return <Text {...props as TextProps} />
    case 'status':
      return <Status {...props as StatusProps} />
    default:
      return <></>
  }
}
