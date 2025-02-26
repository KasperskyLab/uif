import { TestingProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button/types'
import { CheckboxGroupProps, CheckboxProps } from '@src/checkbox/types'
import { CodeViewerProps } from '@src/code-viewer/types'
import { CalendarProps, RangePickerProps } from '@src/datepicker/types'
import { FieldProps } from '@src/field/types'
import {
  TextboxMaskedProps,
  TextboxNumberProps,
  TextboxPasswordProps,
  TextboxProps,
  TextboxTextareaProps
} from '@src/input/types'
import { LinkProps } from '@src/link/types'
import { RadioProps } from '@src/radio/types'
import { SearchProps } from '@src/search/types'
import { SegmentedButtonProps } from '@src/segmented-button/types'
import { SelectProps } from '@src/select/types'
import { StatusGroupProps, StatusProps } from '@src/status/types'
import { TagGroupProps } from '@src/tag/types'
import { TimeInputProps } from '@src/time-input/types'
import { ToggleProps } from '@src/toggle/types'
import { TextProps } from '@src/typography/text/types'
import { ReactElement } from 'react'

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
  'status',
  'tag-group',
  'status-group'
] as const

export type FieldSetLabelLikeComponents = (typeof fieldSetLabelLikeComponentsArray)[number]

export type FieldSetComponents = FieldSetInputLikeComponents | FieldSetLabelLikeComponents

type GetComponentName<T extends FieldSetComponents> = T

export type FieldSetControlConfig =
  ({ component: GetComponentName<'textbox'> } & TextboxProps)
  | ({ component: GetComponentName<'textbox-masked'> } & TextboxMaskedProps)
  | ({ component: GetComponentName<'textbox-number'> } & TextboxNumberProps)
  | ({ component: GetComponentName<'textbox-password'> } & TextboxPasswordProps)
  | ({ component: GetComponentName<'textbox-textarea'> } & TextboxTextareaProps)
  | ({ component: GetComponentName<'select'> } & SelectProps)
  | ({ component: GetComponentName<'search'> } & SearchProps)
  | ({ component: GetComponentName<'calendar'> } & CalendarProps)
  | ({ component: GetComponentName<'range-picker'> } & RangePickerProps)
  | ({ component: GetComponentName<'time-input'> } & TimeInputProps)
  | ({ component: GetComponentName<'code-viewer'> } & CodeViewerProps<any>)
  | ({ component: GetComponentName<'button'> } & ButtonProps)
  | ({ component: GetComponentName<'segmented-button'> } & SegmentedButtonProps)
  | ({ component: GetComponentName<'checkbox'> } & CheckboxProps)
  | ({ component: GetComponentName<'checkbox-group'> } & CheckboxGroupProps)
  | ({ component: GetComponentName<'radio'> } & RadioProps)
  | ({ component: GetComponentName<'toggle'> } & ToggleProps)
  | ({ component: GetComponentName<'link'> } & LinkProps)
  | ({ component: GetComponentName<'text'> } & TextProps)
  | ({ component: GetComponentName<'status'> } & StatusProps)
  | ({ component: GetComponentName<'tag-group'> } & TagGroupProps)
  | ({ component: GetComponentName<'status-group'> } & StatusGroupProps)

export type FieldSetItemControl = ReactElement | FieldSetControlConfig

export type FieldSetItemConfig = Omit<FieldProps, 'stretch' | 'control'> & {
  control: FieldSetItemControl,
  /** Works only when control is set by object, not JSX */
  disabled?: boolean,
  marginBefore?: string | number
}

export type FieldSetItem = FieldSetItemConfig | ReactElement

export type FieldSetProps = Pick<
  FieldProps,
  'labelPosition' | 'labelType' | 'controlWidth' | 'gridLayout'
> & {
  /** Custom class name for wrapper of fields */
  className?: string,
  /** Custom class name for fields */
  fieldClassName?: FieldProps['className'],
  /** Custom class name for label and control wrappers of Field */
  fieldWrapperClassNames?: FieldProps['wrapperClassNames'],
  items: FieldSetItem[],
  disabled?: boolean
} & TestingProps
