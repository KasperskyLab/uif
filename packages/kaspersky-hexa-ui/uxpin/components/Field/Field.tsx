import React from 'react'

import { Field as HexaField } from '@src/field'
import { CheckboxGroup } from '@src/checkbox'
import { RangePicker } from '@src/datepicker'
import { Textbox } from '@src/input'
import { FieldProps } from '@src/field/types'
import { Select } from '@src/select'
import { Space } from '@src/space'
import { Status } from '@src/status'
import { Tag } from '@src/tag'
import { RangeTimeInput } from '@src/time-input'
import { ToggleButtonGroup } from '@src/toggle-button/ToggleButtonGroup'
import { ToggleButtonSize } from '@src/toggle-button/types'

import Button from '../Button/Button'
import CodeViewer from '../CodeViewer/CodeViewer'
import DatePicker from '../DatePicker/DatePicker'
import Expand from '../Expand/Expand'
import Link from '../Link/Link'
import Radio from '../Radio/Radio'
import SegmentedButton from '../SegmentedButton/SegmentedButton'
import TimeInput from '../TimeInput/TimeInput'
import Toggle from '../Toggle/Toggle'
import TreeList from '../TreeList/TreeList'
import Typography from '../Typography/Typography'
import Uploader from '../Uploader/Uploader'

import {
  FrameFill,
  noop,
  previewRadioOptions,
  previewSegmentedButtonItems
} from '../../preview'

type UXPinFieldVariant =
  | 'button'
  | 'checkboxGroup'
  | 'elementsStack'
  | 'expand'
  | 'inputCodeViever'
  | 'inputDatePicker'
  | 'inputDatePickerRange'
  | 'inputMultiSelect'
  | 'inputNumber'
  | 'inputPassword'
  | 'inputSelect'
  | 'inputText'
  | 'inputTextArea'
  | 'inputTimePicker'
  | 'inputTimePickerRange'
  | 'link'
  | 'multiInput'
  | 'radioGroup'
  | 'segmentedButtonMedium'
  | 'segmentedButtonSmall'
  | 'space'
  | 'statusGroup'
  | 'tagGroup'
  | 'text'
  | 'toggle'
  | 'toggleButtonGroupMedium'
  | 'toggleButtonGroupSmall'
  | 'treeList'
  | 'uploader'

type UXPinFieldProps = Omit<FieldProps, 'label' | 'labelPosition'> & {
  /** Preset control shown inside the field */
  variant?: UXPinFieldVariant,
  /** Show or hide the field label */
  label?: boolean,
  /** Label text used when label is enabled */
  labelText?: string,
  /** Position of the field label */
  labelPosition?: Extract<FieldProps['labelPosition'], 'before' | 'top'>
}

const previewCheckboxOptions = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' }
]

const previewSelectOptions = [
  { label: 'Ready', value: 'ready' },
  { label: 'In progress', value: 'in-progress' },
  { label: 'Paused', value: 'paused' }
]

const previewTagItems = [
  { label: 'Tag 1' },
  { label: 'Tag 2' }
]

const previewStatusItems = [
  { label: 'Ready', mode: 'positive' as const },
  { label: 'Pending', mode: 'info' as const }
]

const previewToggleButtonItems = [
  { text: 'One', value: 'one', mode: 'marina' as const },
  { text: 'Two', value: 'two', mode: 'red' as const },
  { text: 'Three', value: 'three', mode: 'orange' as const }
]

type PreviewToggleButtonGroupProps = {
  size: ToggleButtonSize
}

const PreviewToggleButtonGroup = ({
  size
}: PreviewToggleButtonGroupProps): JSX.Element => {
  const [value, setValue] = React.useState<string[]>([previewToggleButtonItems[0].value])

  return (
    <ToggleButtonGroup
      items={previewToggleButtonItems.map(item => ({
        ...item,
        size
      }))}
      value={value}
      onChange={setValue}
    />
  )
}

const resolveControl = (variant: UXPinFieldVariant): FieldProps['control'] => {
  switch (variant) {
    case 'button':
      return <Button text="Button" />
    case 'checkboxGroup':
      return (
        <CheckboxGroup
          options={previewCheckboxOptions}
          defaultValue={['option-1']}
          direction="vertical"
        />
      )
    case 'elementsStack':
      return (
        <Space direction="vertical" align="flex-start" gap="dependent">
          <Typography type="BTM3">Primary element</Typography>
          <Typography color="secondary" type="BTR4">Supporting text</Typography>
          <Link href="#" text="Open details" />
        </Space>
      )
    case 'expand':
      return <Expand />
    case 'inputCodeViever':
      return <CodeViewer language="javascript" />
    case 'inputDatePicker':
      return <DatePicker />
    case 'inputDatePickerRange':
      return (
        <FrameFill>
          <RangePicker
            placeholder={['Start date', 'End date']}
            style={{ width: '100%' }}
          />
        </FrameFill>
      )
    case 'inputMultiSelect':
      return (
        <Select
          mode="multiple"
          options={previewSelectOptions}
          defaultValue={['ready', 'in-progress']}
          style={{ width: '100%' }}
        />
      )
    case 'inputNumber':
      return <Textbox.Number placeholder="42" style={{ width: '100%' }} />
    case 'inputPassword':
      return <Textbox.Password placeholder="Enter password" />
    case 'inputSelect':
      return (
        <Select
          options={previewSelectOptions}
          defaultValue="ready"
          style={{ width: '100%' }}
        />
      )
    case 'inputText':
      return <Textbox placeholder="Value" />
    case 'inputTextArea':
      return <Textbox.Textarea placeholder="Value" rows={4} />
    case 'inputTimePicker':
      return <TimeInput placeholder="HH:mm" />
    case 'inputTimePickerRange':
      return (
        <FrameFill>
          <RangeTimeInput placeholder="HH:mm" />
        </FrameFill>
      )
    case 'link':
      return <Link href="#" text="Open documentation" />
    case 'multiInput':
      return (
        <FrameFill>
          <Space align="stretch" gap="related" wrap="nowrap" width="100%">
            <Textbox placeholder="First value" style={{ flex: 1 }} />
            <Textbox placeholder="Second value" style={{ flex: 1 }} />
          </Space>
        </FrameFill>
      )
    case 'radioGroup':
      return <Radio options={previewRadioOptions} />
    case 'segmentedButtonMedium':
      return (
        <SegmentedButton
          items={previewSegmentedButtonItems}
          value={[previewSegmentedButtonItems[0].value]}
          onChange={noop}
          size="large"
        />
      )
    case 'segmentedButtonSmall':
      return (
        <SegmentedButton
          items={previewSegmentedButtonItems}
          value={[previewSegmentedButtonItems[0].value]}
          onChange={noop}
          size="medium"
        />
      )
    case 'space':
      return undefined
    case 'statusGroup':
      return <Status.Group items={previewStatusItems} />
    case 'tagGroup':
      return <Tag.Group items={previewTagItems} />
    case 'text':
      return <Typography type="BTR4">Text preview</Typography>
    case 'toggle':
      return <Toggle />
    case 'toggleButtonGroupMedium':
      return <PreviewToggleButtonGroup size="medium" />
    case 'toggleButtonGroupSmall':
      return <PreviewToggleButtonGroup size="small" />
    case 'treeList':
      return <TreeList />
    case 'uploader':
      return <Uploader />
    default:
      return <Textbox placeholder="Value" />
  }
}

const Field = ({
  control,
  variant = 'inputText',
  label = true,
  labelText = 'Label',
  labelPosition = 'top',
  ...props
}: UXPinFieldProps): JSX.Element => (
  <HexaField
    control={control ?? resolveControl(variant)}
    label={label ? labelText : undefined}
    labelPosition={labelPosition}
    {...props}
  />
)

export default Field
