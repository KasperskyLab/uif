import { FieldProps } from '@src/field/types'
import { ReactElement } from 'react'
import { TestingProps } from '@helpers/typesHelpers'
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

export const fieldSetInputLikeComponentsArray = [
  'textbox',
  'textbox-masked',
  'textbox-number',
  'textbox-password',
  'textbox-textarea',
  'select',
  'search',
  'calendar',
  'range-picker',
  'time-input',
  'code-viewer',
  'button',
  'segmented-button'
] as const

export type FieldSetInputLikeComponents = (typeof fieldSetInputLikeComponentsArray)[number]

export const fieldSetLabelLikeComponentsArray = [
  'checkbox',
  'checkbox-group',
  'radio',
  'toggle',
  'link',
  'text',
  'status'
] as const

export type FieldSetLabelLikeComponents = (typeof fieldSetLabelLikeComponentsArray)[number]

export type FieldSetComponents = FieldSetInputLikeComponents | FieldSetLabelLikeComponents

export type FieldSetControlConfig =
  ({ component: Extract<FieldSetComponents, 'textbox'> } & TextboxProps)
  | ({ component: Extract<FieldSetComponents, 'textbox-masked'> } & TextboxMaskedProps)
  | ({ component: Extract<FieldSetComponents, 'textbox-number'> } & TextboxNumberProps)
  | ({ component: Extract<FieldSetComponents, 'textbox-password'> } & TextboxPasswordProps)
  | ({ component: Extract<FieldSetComponents, 'textbox-textarea'> } & TextboxTextareaProps)
  | ({ component: Extract<FieldSetComponents, 'select'> } & SelectProps)
  | ({ component: Extract<FieldSetComponents, 'search'> } & SearchProps)
  | ({ component: Extract<FieldSetComponents, 'calendar'> } & CalendarProps)
  | ({ component: Extract<FieldSetComponents, 'range-picker'> } & RangePickerProps)
  | ({ component: Extract<FieldSetComponents, 'time-input'> } & TimeInputProps)
  | ({ component: Extract<FieldSetComponents, 'code-viewer'> } & CodeViewerProps<any>)
  | ({ component: Extract<FieldSetComponents, 'button'> } & ButtonProps)
  | ({ component: Extract<FieldSetComponents, 'segmented-button'> } & SegmentedButtonProps)
  | ({ component: Extract<FieldSetComponents, 'checkbox'> } & CheckboxProps)
  | ({ component: Extract<FieldSetComponents, 'checkbox-group'> } & CheckboxGroupProps)
  | ({ component: Extract<FieldSetComponents, 'radio'> } & RadioProps)
  | ({ component: Extract<FieldSetComponents, 'toggle'> } & ToggleProps)
  | ({ component: Extract<FieldSetComponents, 'link'> } & LinkProps)
  | ({ component: Extract<FieldSetComponents, 'text'> } & TextProps)
  | ({ component: Extract<FieldSetComponents, 'status'> } & StatusProps)

export type FieldSetItemControl = ReactElement | FieldSetControlConfig

export type FieldSetItem = Omit<FieldProps, 'stretch' | 'control'> & {
  control: FieldSetItemControl,
  marginBefore?: string
}

export type FieldSetItemWithControlConfig = Omit<FieldSetItem, 'control'> & {
  control: FieldSetControlConfig
}

export type FieldSetItemWithControlElement = Omit<FieldSetItem, 'control'> & {
  control: ReactElement
}

export type FieldSetProps = Pick<
  FieldProps,
  'disabled' | 'labelPosition' | 'labelType' | 'controlWidth' | 'gridLayout'
> & {
  /** Custom class name for wrapper of fields */
  className?: string,
  items: FieldSetItem[]
} & TestingProps
